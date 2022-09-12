<template>
    <ion-page>
      <ion-list lines="full">
        <ion-list-header lines="none" class="titulo">
          <ion-label> Registrarse </ion-label>
        </ion-list-header>
        <div class="separate2">
  
          <ion-item>
            <ion-label color="dark" position="floating">Nombre</ion-label>
            <ion-input></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label color="dark" position="floating">Apellido</ion-label>
            <ion-input></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label color="dark" position="floating">Correo: ejemplo@example.com</ion-label>
            <ion-input></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label color="dark" position="floating">Contraseña</ion-label>
            <ion-input></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label color="dark" position="floating">Región</ion-label>
            <ion-input></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label color="dark" position="floating">Dirección</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <p class="par">
            Al registrarse, acepta los <strong>Términos de servicio</strong> de la
            aplicación y su <strong>Política de privacidad</strong>.
          </p>
          <ion-button
            class="but"
            expand="block"
            color="dark"
            router-link="/folder/Inicio"
            >Registrarse</ion-button
          >
        </div>
      </ion-list>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent } from "@vue/runtime-core";
  import {
    IonPage,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  } from "@ionic/vue";
  
  export default defineComponent({
    components: {
      IonPage,
      // IonTitle,
      // IonToolbar,
      // IonContent,
      IonList,
      IonListHeader,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
      // IonTextarea,
    },
  });
  </script>
  
  <style scoped>
  .but {
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    height: 50px;
    margin-top: 10px;
  }
  .par {
    padding: 10px;
    font-size: 14px;
    text-align: center;
  }
  .titulo {
    margin-top: 20px;
    font-family: "Comfortaa", cursive;
    font-weight: lighter;
    font-size: 30px;
  }
  .separate {
    padding: 50px;
  }
  .separate2 {
    padding: 10px 20px;
  }
  </style>