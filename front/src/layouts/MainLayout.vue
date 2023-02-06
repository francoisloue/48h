<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar class="navbar">
        <div class="nav-left">
          <a onclick="site.changer('Accueil')" href="#profil">
            <img style="height: 50px;" src="../../public/icons/lama.png">
          </a>
        </div>

        <ul>
          <li class="btn-nav">
            <a href="">
              Products
            </a>
          </li>
          <li class="btn-nav">
            <q-toolbar-title>
              Lama Shop
            </q-toolbar-title>
          </li>
          <li class="btn-nav">
            <a href="">
              All
            </a>
          </li>
        </ul>

        <div class="nav-right">
          <a href="https://quasar.dev">
            <img style="height: 50px;" src="../../public/icons/panier.png">
          </a>
          <a href="https://quasar.dev">
            <img style="height: 42px;" src="../../public/icons/profil.png">
          </a>
        </div>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <!-- <q-toolbar-title>
          Lama Shop
        </q-toolbar-title> -->

        <!-- <a href="">
          All
        </a>

        <a href="https://quasar.dev">
          <img style="height: 50px;" src="../../public/icons/panier.png">
        </a>
    
        <a href="https://quasar.dev">
          <img style="height: 42px;" src="../../public/icons/profil.png">
        </a> -->
      </q-toolbar>
    </q-header>

  <q-footer class="footer">
    <p>@LamaShop</p>
  </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    color: rgb(26, 26, 26);
    background-color: rgb(228, 228, 228);
  }

  .navbar ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:50px;
  }

  .navbar ul li {
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar ul a {
    color: rgb(26, 26, 26);
    font-size: medium;
    width: 60px;
  }

  .navbar ul a:hover {
    color: rgb(26, 26, 26);
    transition: 0.3s;
    text-decoration: underline;
  }

  .navbar .nav-left{
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar .nav-right {
    width: 110px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: rgb(26, 26, 26);
    background-color: rgb(228, 228, 228);
  }

</style>

