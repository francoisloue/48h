<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar class="navbar">
        <div class="nav-left">
          <a href="">
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
            <a href="">
              All
            </a>
          </li>
        </ul>

        <h3 class="title" >
          Lama Shop
        </h3>
          
        <input class="search" type="text">
        
        

        <div class="nav-right">
          <a href="https://quasar.dev">
            <img style="height: 50px;" src="../../public/icons/panier.png">
          </a>
          <router-link to="/register">
            <img style="height: 42px;" src="../../public/icons/profil.png">
          </router-link>
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

  .navbar {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    color: rgb(26, 26, 26);
    background-color: rgb(228, 228, 228);
  }

  .navbar ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:15px;
  }

  .navbar ul li {
    width: 62px;
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

  title{
    display: none;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: rgb(26, 26, 26);
    background-color: rgb(228, 228, 228);
  }

  @media screen and (min-width: 768px) {
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

    title{
      width: 110px;
    }
}
</style>

