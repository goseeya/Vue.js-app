new Vue({
    el: '#vue-app',
    data: {
        name: 'Gosia',
        job: 'MUA',
        website: 'https://github.com/goseeya',
        websiteTag: '<a href="https://github.com/goseeya">The Gosia Website</a>',
        age: 23,
        x: 0,
        y: 0,

        name: '',
        age: 20,
        a: 0,
        b: 0,

        available: false,
        nearby: false,


        error: false,
        success: false,

        characters:['Mario','Luigi','Yoshi','Bowser'],
        ninjas: [
            { name:'Ryu', age:25 },
            { name:'Yoshi', age:35 },
            { name: 'Ken', age:55 }
        ]
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('You clicked me');
        },


        logName: function(){
            console.log('You entered your name')
        },

        logAge: function(){
            console.log('You entered your age')
        },

        // addToA: function(){
        //     console.log('addToA');
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     console.log('addToB')
        //     return this.b + this.age;
        // }

        
        
    },

    computed: {
        addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB')
            return this.b + this.age;
        },


        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});