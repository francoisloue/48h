<template>
    <div class="main" >
        <q-page class="grid-frame">
            <q-btn class="picture">
                <img style="width: 250px;" src="../../public/icons/lama.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
            </q-btn>
            <q-btn class="txt">
                <img style="width: 250px;" src="../../public/icons/panier.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
            </q-btn>
            <q-btn class="price">
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
    name: 'InfoProduct'
    })
</script>

<style>
    main{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .grid-frame{
        display: grid;
        gap: 10px;
    }
</style>