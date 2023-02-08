<template>
  <div class="q-pa-xl">
    <div class="flex flex-center column">
      <h1>Sign UP</h1>
      <q-card>
        <q-card-section>
          <q-input
            label="Username"
            type="text"
            outlined
            class="q-mb-md"
            v-model="username"
          />
          <q-input
            label="Password"
            type="password"
            outlined
            class="q-mb-md"
            v-model="password"
            :rules="[(val) => val.length >= 6 || 'Minimum 6 caractère']"
          />
          <q-select v-model="type" :options="options" label="Standard" />
          <q-checkbox
            label="terms and conditions"
            v-model="terms_and_conditions"
          />
          <q-btn
            label="Sign up"
            class="full-width"
            color="primary"
            v-on:click="insertUser()"
          />
          <p>
            Already got an account ?
            <Router-link to="/login">Log in</Router-link>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import { ref } from "vue";
export default defineComponent({
  name: "registerUser",
  data() {
    return {
      username: "",
      password: "",
      type: "",
    };
  },
  setup() {
    return {
      model: ref(null),
      options: ["Customer", "Retailer"],
    };
  },
  methods: {
    async insertUser() {
      try {
        let data = {
          username: this.username,
          password: this.password,
          type: this.type,
        };
        const post = await axios.post("http://localhost:8080/user/", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<style>
#register {
  background-color: #e1cbf0;
  color: #222222;
}

#register .title {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
