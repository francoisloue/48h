<template>
    <div class="main" >
        <q-page class="flex-frame">
            <q-card class="picture">
                <img src="../../public/icons/panier.png" alt="">
            </q-card>
            <q-card class="infos">
                <h2>NAME</h2>
                <p class="description">
                    Lorem ipsum dolor sit amet. Non voluptatem modi cum ex optio omnis in eius expedita sit inventore cupiditate. Ut deleniti corporis sit nesciunt exercitationem rem recusandae neque ut minima dolores et cupiditate nulla sit quisquam dolores. Hic tenetur nihil aut unde molestias ex iste laborum quo necessitatibus atque. Ab deleniti consequatur et nihil laboriosam cum laudantium maiores qui nisi natus aut alias minima nam molestiae omnis. Ut velit obcaecati qui possimus nemo ut quasi odit eos consequuntur quibusdam ea eligendi impedit qui culpa inventore ut assumenda nobis. Eum sunt neque aut facilis maxime ut perferendis quia non laudantium nemo id voluptas dolor 33 deserunt ullam qui provident recusandae!
                </p>
                <h6>made in france</h6>
            </q-card>
            <q-card class="price">
                <h3>100 $</h3>
                <h6>Free Delivery</h6>
                <h7>deliver in two days</h7>
                <h6 style="color: green;" >In Stock</h6>
                <q-btn>
                    Buy Now
                </q-btn>
            </q-card>
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
    main {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flex-frame {
        display: flex;
        gap: 10px;
    }

    .picture {
        width: 512px;
    }

    .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        padding-top: 20px;
        height: 512px;
        width: 500px;
    }

    .infos .description {
        padding: 30px;
        text-align: justify;
    }

    .price {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 400px;
        width: 300px;
    }

    .picture,
    .infos,
    .price {
        background-color: #E4E4E4;
    }
</style>