const { createApp } = Vue

createApp({
  data() {
    return {
      welcome: 'Hello Vue JS!',
      img: 'img/logo-vue.png'
    }
  }
}).mount('#app')