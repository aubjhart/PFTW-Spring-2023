const {createApp} = Vue;

createApp({
    data() { 
        return {
            name: "Aubrey",
            happy: true
        }
    }
}).mount("#myApp");