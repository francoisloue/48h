<template>
  <q-layout class="back" view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar class="navbar">
        <div class="nav-left">
          <a href="">
            <img style="height: 50px;" src="../../public/icons/lama-light.png">
          </a>
        </div>
        <ul>
          <li class="btn-nav">
            <a href="">
              Products
            </a>
          </li>
          <li class="btn-nav">
            <Router-link to="/add">
              Add
            </Router-link>
          </li>
        </ul>
        <h3 class="title" >
          Lama Shop
        </h3>    
        <q-input label="Rechercher" class="search" type="text"/>
        <div class="nav-right">
          <Router-link to="/basket">
          <img style="height: 50px;" src="../../public/icons/panier-light.png">
          </Router-link>
          <router-link to="/register">
            <img style="height: 42px;" src="../../public/icons/profil-light.png">
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

  <q-footer class="footer">
    <p>Made in FR</p>
  </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

</script>

<style >
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  .back {
      background-color: #e1cbf0;
      height: 100%;
      width: 100%;
  }
    
  .navbar {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    gap: 15px;
    color: #e1cbf0;
    background-color: #222222;
  }

  .navbar ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:15px;
  }

  .navbar ul li {
    width: 62px;
    width: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar ul a {
    color: #e1cbf0;
    font-size: medium;
    width: 60px;
  }

  .navbar ul a:hover {
    color: #e1cbf0;
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

  .header .title{
    display: none;
  }

  .search {
    margin: 15px;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: #e1cbf0;
    background-color: #222222;
  }

  @media screen and (min-width: 768px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      gap: 25px;
      color: #e1cbf0;
      background-color: #222222;
    }

    .navbar ul {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap:50px;
    }

    .header .title{
      display: flex;
    }
}
</style>

