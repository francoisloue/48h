<template>
  <div class="q-pa-xl">
    <div class="flex flex-center column">
      <h1>Login</h1>
      <q-card>
        <q-card-section>
          <q-input
            label="Email"
            type="email"
            outlined
            class="q-mb-md"
          />
          <q-input
            label="Mot de passe"
            type="password"
            outlined
            class="q-mb-md"
            :rules="[(val) => val.length >= 6 || 'Minimum 6 caractères']"
          />
          <q-btn
            label="Se connecter"
            class="full-width"
            color="primary"
          />
          <p>
            Vous n'êtes pas encore inscrit ?
            <Router-link to="/register">Inscrivez-vous</Router-link>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'loginPage'
})
</script>

<style>

</style>