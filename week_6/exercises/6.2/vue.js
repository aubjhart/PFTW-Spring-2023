const {createApp} = Vue;

createApp({
    data() { 
        return {
            llamaone: "Berserk llama syndrome is a real condition where a llama believes its human owner is also a llama, causing the animal to become aggressive.",
            happy: true
        }
    }
}).mount("#myApp");