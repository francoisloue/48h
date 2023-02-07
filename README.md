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

- (Énoncé du projet)[https://tardigrade.land/campus/0/module/7/assignment/0?share=72c63dde-8aac-4a34-8ca4-dc36851b137f]

## ⚙️ Fonctionnalités attendues

-   Affichage du site et base de données (à vous de décider des données à enregistrer et présenter en vous inspirant des marketplace existants!) ✅
-   Création de comptes commerçants et clients ✅ _(Système de rôle : Client, Admin, Commerçant)_
-   Ajout d'instances connectées, présentation des produits des instances concernées et de ses pairs connus. ✅

## ⚙️ Fonctionnalités souhaitées :

-   Passer une commande en tant qu'invité sur une autre instance (pas de paiement à mettre en place). 🟠

_(L'idée serait qu'un utilisateur puisse ajouter un produit dans son panier et lors de la commande choisir un mode invité)._

-   En tant qu'administrateur d'une instance, Blacklister des instances concurrentes pour que leurs produits n'apparaissent pas même si notre instance y est indirectement liée. ❌


## API

## BDD 

Pour la base de donnée, nous avons utilisé mysql.

Cette base de donnée va nous servir a stocké nos utilisateurs et commercants pour chaque instance ainsi que les produits associés aux commercants.

- Nous possédont une table Product aves sa primary key "idProduct"

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

* Équipe
  . Arnaud CLAVIER - B3 Dev
  . Nicolas SEGURA - B3 Cybersec
  . Mansour WOLOU - B3 Dev
  . Salomé KARSENTI - B2
  . François LOUE - B2
  . Maxime FUZEAU - B1
  . Esteban LORET - B1

