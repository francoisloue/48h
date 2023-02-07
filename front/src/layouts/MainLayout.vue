<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title style="margin-left: 10px">
          Lama Laptop
        </q-toolbar-title>

        <q-btn outline label="Products" class="navbar-but1" style="align-items: center"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
</script>

<style>

.navbar-but1 {
  justify-content: center;
}

</style>