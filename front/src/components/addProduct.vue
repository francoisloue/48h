<template>
    <div class="q-pa-xl">
      <div class="flex flex-center column">
        <q-card id="add">
            <q-card-section>
                <q-input label="Name of the product" outlined class="q-mb-md" />
                <q-input label="Description" outlined class="q-mb-md"/>
                <q-input label="Price ($)" outlined class="q-mb-md"/>
                <q-file color="purple-12" v-model="model" label="Label">
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>
                <q-btn label="Add" class="full-width" color="black" />
            </q-card-section>
        </q-card>
      </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'addProduct'
})
</script>

<style>
  #add {
    background-color: #e1cbf0;
    color: #222222;
  }
</style>
