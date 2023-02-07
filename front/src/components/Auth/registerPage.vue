<template>
    <div class="q-pa-xl">
      <div class="flex flex-center column">
        <h1>Inscrivez-vous</h1>
        <q-card>
            <q-card-section>
                <q-input label="Email" type="email" outlined class="q-mb-md" />
                <q-input label="Mot de passe" type="password" outlined class="q-mb-md" :rules="[ val => val.length >= 6 || 'Minimum 6 caractère']" />
                <q-checkbox label="terms and conditions" />
                <q-btn label="S'incrire" class="full-width" color="primary" />
                <p>Vous avez déjà un compte ? <Router-link to="/login">Connectez-vous</Router-link></p>
            </q-card-section>
        </q-card>
      </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'registerPage'
})
</script>
