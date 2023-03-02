const {createApp} = Vue;

createApp({
    data() { 
        return {
            llama: "https://en.wikipedia.org/wiki/Llama",
            alpaca: "https://en.wikipedia.org/wiki/Alpaca",
            currentImage: 'alpaca',
            styleObject: {
                background: '#8f99fb',
            },
            }
        }
}).mount("#myApp");
