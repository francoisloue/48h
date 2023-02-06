<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <q-btn outline label="Get Started" color="purple" no-caps class="q-mx-md" to="/register" />
    <b-form-input
          @input="search_text()"
          v-model="search.text"
          type="text"
          placeholder="Search by Name"
        ></b-form-input>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
