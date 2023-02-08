---
**Pour lancer le projet :**

- cd /front
- npm install
- npm run dev


# CHALLENGE 48H - Boutique en ligne décentralisée

## 📝 Présentation du projet

Une association nationale de petits commerçants fait appel à vous pour l'aider à développer une boutique en ligne adaptée aux besoins de ses membres sans dépendre d'un marketplace ou d'une grosse plateforme de distribution de manière à proposer à leurs clients partout en France le paiement et la livraison de leurs produits.

Ils souhaitent créer un réseau de boutiques fédérées, à la manière des services décentralisés Mastodon ou Plemora (le "fediverse"), tout en conservant leur indépendance de manière à ne pas dépendre d'une plateforme centralisée, de son modèle économique et de sa politique de gestion des données personnelles.

💡 En tant que petite équipe d'experts, vous devrez proposer une solution à cette association en tenant compte des contraintes de performance, de sécurité, et d'indépendance des commerçants.

En 48 heures chrono, faire un Proof of Concept de boutique en ligne décentralisée permettant aux petits et moyens commerçants de se libérer des gros marketplaces centralisés.

- [Énoncé du projet](https://tardigrade.land/campus/0/module/7/assignment/0?share=72c63dde-8aac-4a34-8ca4-dc36851b137f)

## ⚙️ Fonctionnalités attendues

-   Affichage du site et base de données (à vous de décider des données à enregistrer et présenter en vous inspirant des marketplace existants!) ✅
-   Création de comptes commerçants et clients ✅ _(Système de rôle : Client, Admin, Commerçant)_
-   Ajout d'instances connectées, présentation des produits des instances concernées et de ses pairs connus. ✅

## ⚙️ Fonctionnalités souhaitées :

-   Passer une commande en tant qu'invité sur une autre instance (pas de paiement à mettre en place). 🟠

_(L'idée serait qu'un utilisateur puisse ajouter un produit dans son panier et lors de la commande choisir un mode invité)._

-   En tant qu'administrateur d'une instance, Blacklister des instances concurrentes pour que leurs produits n'apparaissent pas même si notre instance y est indirectement liée. ❌


## API

## 🛢BDD 

Pour la base de donnée, nous avons utilisé mysql.

Cette base de donnée va nous servir a stocké nos utilisateurs et commercants pour chaque instance ainsi que les produits associés aux commercants.

- Nous possédons une table Product aves sa primary key "idProduct"

Cette table sert a stocker nos diffèrents produits avec leur nom,description et  prix.

--
-- Structure de la table `Product`
--

```bash
CREATE TABLE `Product` (
  `idProduct` char(36) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` bigint(20) NOT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour la table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`idProduct`);
```

- Nous avons aussi créé une table user avec "idUser" en primary key

Cette table stocke les utilisateurs avec leur nom,mot de passe et la catégorie. Soit un admin, soit un commercant ou soit un utilisateur.

--
-- Structure de la table `Users`
--

```bash
CREATE TABLE `Users` (
  `idUser` char(36) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `type` enum('admin','customer','retailer') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`idUser`);
```

## 🐋Docker 

Nous sommes parti sur l'outil docker pour pouvoir conteneurisé notre base de donnée ainsi que notre api et notre site web.
L'avantage de docker sur ce projet, est son déploiment rapide et la décentralisation des services.

Au cours du projet, nous avons utilisé des dockerfiles ainsi qu'un docker compose pour pouvoir conteneurisé.

```bash
pour lancer les conteneurs :    docker-compose up
```
- On a un premier conteneur nommé "database" pour la BDD, il sert a stocker l'image "mysql", renseigner le nom de la base et son mot de passe. Sur ce conteneur, on ouvre le port "3307:3306".

```bash
database:
    build:
      context: ./database/.
    container_name: database
    # NOTE: use of "mysql_native_password" is not recommended: https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password
    # (this is just an example, not intended to be a production configuration)
    command: --default-authentication-plugin=mysql_native_password
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: shop
      MYSQL_ROOT_PASSWORD: example
      
    ports:
      - "3307:3306"
    volumes:
      - mysql:/var/lib/mysql
```

- Notre deuxième conteneur stocke le backend, donc notre api. On ouvre le port "3000"

```bash
backend:
    build: 
      context: ./server/.
    container_name: backend
    ports:
      - "3000:3000"
```

- Notre troisième conteneur stocke le frontend, donc notre site web. On ouvre le port "9000"

```bash
 front:
    build:
      context: ./front/.
    container_name: front
    ports:
      - "9000:9000"
```

voir fichier [docker compose](https://github.com/MansourWolou/48h/blob/master/docker-compose.yml)

## ⛔Sécurisation

Pour la partie sécurité quelques points sont a abordés.

Nous devons premièrement sécurisé le docker-compose qui gère la conteneurisation.

# Les Ports

- Commencons par les ports. 
Pour la sécurité des conteneurs nous ouvrons seulement les ports qu'on besoin les conteneurs pour communiquer comme par exemple le port "9000" ou "3000".

- Pour communiquer entre toutes les instances, nous utiliserons le protocole https pour sécurisé la communication. Pour permettre aux instances de se reconnaitre, 
on pourrait envisager d'utilisé le protocol ARP (Address Resolution Protocol). 

Ce protocole permet de faire le liens entre les addresse ip et les addresse mac des cartes réseaux.


# La Redondance et controlle de ressources

- Dans l'optique que nos conteneurs soit toujours disponible, nous voulions mettre en place de la redondance sur les conteneurs, au cas ou l'un d'entre eux tomberaient.

Une techno que nous pourrions utilisé est docker swarm qui sert a l’orchestration de conteneurs.
Grâce a cela nous pourrions gérer de la redondance de conteneurs mais aussi de la répartition de charge avec du load balancing.


Cette techno est d'autant plus avantageuse car elle est complémentaire a docker compose.

```bash
version: "3.8"

networks:
  main_network:
    external: true

services:
  database:
    image: mysql
    environment:
      - MYSQL_DATABASE: shop
      - MYSQL_ROOT_PASSWORD: example
    volumes:
      - mysql:/var/lib/mysql
    networks:
      - main_network
    deploy:
      placement: 
        constraints:
          - node.role == manager
          - node.labels.type == database

  backend:
    depends_on:
      - database
    networks:
      - main_network
    deploy:
      placement: 
        constraints:
          - node.role == worker
          - node.labels.type == cheap

  front:
    depends_on:
      - database
    networks:
      - main_network
    deploy:
      placement: 
        constraints:
          - node.role == worker
          - node.labels.type == machine-learning
```

Ici le back et le front dependent du conteneur database 

Grâce a swarm nous pouvons limiter les ressources et les controllés mais aussi les répliqué.

```bash
resources:
        limits:
          cpus: '0.8'
          memory: 10G
        reservations:
          cpus: '0.5'
          memory: 5G
      replicas: 3
```

# Sauvegardes

- On pourrait mettre en place des backups des conteneurs grâce a un veeam.

Nous pourrions sauvegarder toutes les semaines nos conteneurs pour assurer la disponibilité.

# Reverse Proxy

- La mise en place d'un reverse proxy permettrait de cacher nos ports lorqu'on accède au site web ou a la bdd.

- Pour recourir au reverse proxy, il faudrait installer le service nginx grâce a son image. Donc nginx va gérer les requetes su rle 80 en reverse proxy.
```bash
version: '3.7'
services:
  reverse-proxy:
    image: nginx
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    ports:
      - 80:80

  database:
    image: containous/database
    container_name: databse
```
- Je vais  utiliser un fichier de configuration que je vais monter dans mon conteneur.

```bash
events {

}

http {
  server {
    listen 80;

    location / {
      proxy_pass http://whoami:80;
    }
  }
}
```

# Cacher le mdp

- Nous avons essayé de mettre en place une fonction pour haché le mot de passe administrateur 
mysql du conteneur.

Premièrement le mot de passe administrateur mysql était mis en clair dans notre fichier yaml docker-compose, 
le problème étant que ce mot de passe est visible et accessible de tous. Pour remédier à ça nous avons commencé par enlever la version claire du 
mot de passe pour pouvoir la mettre dans un fichier .env pour que celui-ci soit plus compliqué d’accès.
Puis nous avons décider de créer une fonction en vue js nous permettant de hasher le mot de passe grâce à l’import de bcrypt.
Celui-ci compare le hash stocké et le hash du mot de passe en clair grace a un booléen pui il est acheminé dans le dockerfile puis dans le fichier yaml. 
Les problèmes rencontrés ont été que premièrement la fonction permettant de hasher le mot de passe devait être directement ajoutée au back dans l’API, l’autre problème étant la vérification du mdp devait se faire 
du coté serveur et non client. Comme alternative à ces problèmes il y a la sécurisation et le filtrage d’accès au fichier .env qui peut contenir le mdp en clair.



# Contrôle des droits admin

- Pour gérer notre docker, une personnes est obligé de détenir les droits admin.Pour assurer le bon fonctionnement du docker, une deuxième peronnes aura les droits admin.

- Les commercants, eux auront des droits admin sur leur propre instances. Car chaque commercant peut fixer ses propres règles sur son instance.

- Les utilisateurs n'auront aucun droits admin.



## 💻Équipe
  . Arnaud CLAVIER - B3 Dev
  . Nicolas SEGURA - B3 Cybersec
  . Mansour WOLOU - B3 Dev
  . Salomé KARSENTI - B2
  . François LOUE - B2
  . Maxime FUZEAU - B1
  . Esteban LORET - B1

