<template>
  <div class="q-pa-xl">
    <div class="flex flex-center column">
      <q-card class="mainCard">
	<h3 style="font-weight: bold; text-align: start; margin-left: 32px; margin-bottom: -10px; "> Récapitulatif de commande </h3>
	<br>
	<hr style="margin: 14px"/>
        <q-card-section style="display: grid; justify-content: center; gap: 20px; grid-template-columns: repeat(2, 1fr)">
		<q-card-section>
			<q-input label="Prénom" outlined class="q-mb-md"/>
			<q-input label="Nom" outlined class="q-mb-md"/>
			<q-input label="Email" type="email" outlined class="q-mb-md"/>
		</q-card-section>
		<q-card-section>
			<p style="font-size: 13.5px; text-align: justify ">
				Lorem ipsum dolor sit amet. Cum error eveniet vel suscipit voluptatem id quaerat dolorem. Id corporis sapiente sed voluptas facere et animi repellendus et alias galisum non temporibus minus ut quisquam voluptatibus. <br><br> Aut dolorum incidunt id perspiciatis corrupti qui explicabo fugiat sed quam corrupti 33 unde minus! Et placeat aliquam ea molestias voluptatem et praesentium velit. Ut molestiae dolorum eos autem dolore qui voluptas voluptatem? vel omnis minima qui excepturi autem. Ut omnis ipsum 33 nemo autem est autem laboriosam lorem.
			</p>
		</q-card-section>
        </q-card-section>
	<q-card-section style="width: 100%; align-items: center;">
		<hr/>
		<br><br>
             <h5 style="text-decoration: underline; font-weight: bold; text-align: start; margin-top: -35px;"> Votre panier :  </h5>
            </q-card-section>
	<q-card-section style="display: grid; justify-content: center; gap: 20px; grid-template-columns: repeat(2, 1fr)">
              <q-btn class="txt">
                <img style="width: 175px;" src="../../public/icons/panier.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
	      </q-btn>
		<q-btn class="txt">
                <img style="width: 175px;" src="../../public/icons/lama.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
	      </q-btn>
	      <q-btn class="txt">
                <img style="width: 175px;" src="../../public/icons/panier.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
	      </q-btn>
		<q-btn class="txt">
                <img style="width: 175px;" src="../../public/icons/panier.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
	      </q-btn>
	      <q-btn class="txt">
                <img style="width: 175px;" src="../../public/icons/panier.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
	      </q-btn>
	      <q-btn class="txt">
                <img style="width: 175px;" src="../../public/icons/panier.png" alt="">
                <p>
                Name of the product <br>Price
                </p>
	      </q-btn>
            </q-card-section>
	    <br>
	<Router-link to="/commandSuccess"><q-btn label="PASSER LA COMMANDE" class="full-width" style="background-color: #222222; color: #fff"/></Router-link>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'basketPage'
})
</script>
 
<style>

.mainCard {
	width: 70%;
	padding: 2%;
}

.frame {
    width: 300px;
  }

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 3px solid #ccc;
    margin: 1em 0;
    padding: 0;
}

 @media screen and (min-width: 750px) {
   .txt{
      display: flex;
      justify-content: space-between;
      gap: 25px;
      color: rgb(26, 26, 26);
      background-color: rgb(228, 228, 228);
    }
 }


</style>
