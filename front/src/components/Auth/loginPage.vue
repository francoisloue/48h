<template>
    <div class="q-pa-xl">
      <div class="flex flex-center column">
        <q-card id="login">
            <q-card-section class="title">
              <h3>Login</h3>
            </q-card-section>
            <q-card-section>
                <q-input label="Email" type="email" outlined class="q-mb-md" />
                <q-input label="Password" type="password" outlined class="q-mb-md" :rules="[ val => val.length >= 6 || 'Minimum 6 caractère']" />
                <q-btn label="Sign in" class="full-width" color="black" />
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
  #login {
    background-color: #e1cbf0;
    color: #222222;
  }

  #register .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
