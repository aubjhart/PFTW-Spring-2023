Vue.createApp({
    data() {
      return {
        newTotemObj: {
            item: "",
            gotFrom: "",
            hadSince: null,
            description: "",
            image: '',
        },
        totems: [
            {
                item: "Heart Rock",
                gotFrom: "Myself",
                hadSince: "2020",
                description: "I purchased one heart rock for myself and one for my husband while we were doing long distance after we started dating in 2020. We still keep them in our backpacks wherever we go, especially when we travel separately.",
                image: 'https://images.unsplash.com/photo-1554832353-3938e7c3b088?w=100',
              }, {
                item: "Guitar Pick",
                gotFrom: "Husband",
                hadSince: "2020",
                description: "My husband was going through things one day and was going to throw away some guitar picks. I asked to keep one as a totem. It stays in my backpack with me when I leave the house.",
                image: 'https://images.unsplash.com/photo-1554832353-3938e7c3b088?w=100',
              },{
                item: "Pink Crytstal",
                gotFrom: "Sister-in-law",
                hadSince: "2021",
                description: "This pink crystal was a gift from my sister-in-law from one of the first christmases I spent with my husband's family. I also keep this one in my backpack at all times.",
                image: 'https://images.unsplash.com/photo-1554832353-3938e7c3b088?w=100',
              },{
                item: "Little Buddha",
                gotFrom: "College Friend",
                hadSince: "2015",
                description: "Little Buddha was a gift from a close college friend, I graduated a year before him and he would gave them to friends who were moving away. I keep this one in my backpack, too!",
                image: 'https://images.unsplash.com/photo-1554832353-3938e7c3b088?w=100',
              },{
                item: "Sugar Skull",
                gotFrom: "Myself",
                hadSince: "2021",
                description: "I purchased my sugar skull keychain from a nice man in a New Orleans market who hand paints ceramics. I keep it on my keychain with me.",
                image: 'https://images.unsplash.com/photo-1554832353-3938e7c3b088?w=100',
              },
        ]
      }
    },
    methods: {
      submitHandler: () => {
        console.log('submitted');
        totems = totems.concat(this.newTotemObj);
        this.resetForm();
      },
      resetForm: () => {
        this.newTotemObj = {
          item: "",
          gotFrom: "",
          hadSince: null,
          description: "",
          image: '',
      };
      },
      deleteItem: totem => {
        totems = totems.filter(totems => {
          return totems !== totem;
        })
      }
    }
  }).mount("#myTotems");

