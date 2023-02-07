<template>
  <div class="main" >
    <div class="search">
      <input class="search" type="text">
    </div>
    <q-page class="grid-frame">
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
    <q-btn class="frame">
      <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
      <p>
        Name of the product <br>Price
      </p>
    </q-btn>
  </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  
  .search {
    position: absolute;
    width: 200px;
    background-color: rgb(228, 228, 228);
    display: flex;
    justify-content: center;
  }

  .grid-frame {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }

  .frame {
    width: 300px;
  }
</style>
