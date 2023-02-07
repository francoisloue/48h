<template>
  <div class="main">
    <q-page class="grid-frame">
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
      <q-btn class="frame">
        <Router-link to="/infos">
          <q-card class="card">
            <img
              style="width: 250px"
              src="../../public/icons/panier.png"
              alt=""
            />
            <q-card-section>
              <p>Name of the product</p>
              <h7 styl>100 $ </h7>
            </q-card-section>
          </q-card>
        </Router-link>
      </q-btn>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style>
.main {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #e1cbf0;
}

.grid-frame {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

.frame {
  width: 300px;
  background-color: #222222;
}

.card {
  background-color: #e1cbf0;
  color: #222222;
}

@media screen and (min-width: 768px) {
  .grid-frame {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
}
</style>
