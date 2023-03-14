const { createApp } = Vue

createApp({
    data() {
        return {
            welcome: 'Hi, JS!',
            img: 'img/logo-js.png',
            classi: 'text-js',
            imgDescription: 'Logo of Vue',
            userInfo: 'Premi sul logo per potenziarlo!'
        }
    },
    methods: {
        upgrade(){
            this.img = 'img/logo-vue.png';
            this.classi = 'text-vue';
            this.welcome = 'Welcome Vue JS!';
            this.userInfo = '';
        }
    }
}).mount('#app')