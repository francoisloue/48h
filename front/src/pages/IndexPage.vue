<template>
  <div class="main" >
    <q-page class="grid-frame">
    <q-btn class="frame">
      <Router-link to="/infos">
        <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
        <p>
          Name of the product <br>Price
        </p>
      </Router-link>
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
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .grid-frame {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  .frame {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    .grid-frame {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
    }
  }
</style>
