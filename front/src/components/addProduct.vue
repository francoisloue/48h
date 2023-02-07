<template>
  <div class="q-pa-xl">
    <div class="flex flex-center column">
      <q-card id="add">
        <q-card-section>
          <q-input
            label="Name of the product"
            outlined
            class="q-mb-md"
            v-model="content"
          />
          <q-input
            label="Description"
            outlined
            class="q-mb-md"
            v-model="description"
          />
          <q-input label="Price ($)" outlined class="q-mb-md" v-model="price" />
          <q-file color="purple-12" v-model="model" label="Label">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-btn
            label="Add"
            class="full-width"
            color="black"
            v-on:click="insertProduct()"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "addProduct",
  data() {
    return {
      description: "",
      price: "",
      content: "",
    };
  },
  methods: {
    async insertProduct() {
      try {
        let data = {
          content: this.content,
          price: this.price,
          description: this.description,
        };
        const post = await axios.post("http://localhost:8080/products/", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<style>
#add {
  background-color: #e1cbf0;
  color: #222222;
}
</style>
