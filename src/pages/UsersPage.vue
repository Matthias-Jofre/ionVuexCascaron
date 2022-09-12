<template>
  <ion-page>
    <div>
      <ion-img class="container_2" :src="item.src"></ion-img>
      <ion-toolbar>
        <ion-title class="titulo" size="large">{{ item.titulo }}</ion-title>
        <p class="container_1">{{ item.cuerpo }}</p>
      </ion-toolbar>

      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <div>
              <ion-button
                expand="block"
                color="dark"
                class="txt"
                router-link="/registro"
                >Registrarse</ion-button
              >
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">
            <div>
              <ion-button expand="block" color="dark" class="txt"
                >Ingresar</ion-button
              >
            </div>
          </ion-col>
          <ion-col size="6">
            <div>
              <ion-button
                expand="block"
                color="dark"
                class="txt"
                router-link="/folder/Inicio"
                >Invitado</ion-button
              >
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </ion-page>
</template>

<script lang>
import { defineComponent } from "vue";
import {
  IonImg,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonImg,
    IonToolbar,
    IonTitle,
    IonButton,
    IonCol,
    IonGrid,
    IonRow,
  },
  setup() {
    const item = {
      titulo: "HumedApp",
      src: "https://www.proyectoadelaida.org/wp-content/uploads/2021/07/AVEFENIX28JUNIO-1024x791.jpg",
      cuerpo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
    return { item };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&family=Roboto:wght@100&display=swap");
.txt {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  height: 50px;
}
.trans {
  width: 400px;
  background-color: red;
  display: flex;
  justify-content: center;
}
.titulo {
  font-family: "Comfortaa", cursive;
  text-align: center;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 30px;
}
.container_1 {
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 10px 50px 130px;
}
.container_2 {
  text-align: justify;
  padding: 50px 0px;
}
</style>