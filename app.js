// var one = new Vue({
//     el: '#vue-app-one',
//     data: {
//         title: 'Vue AppOne'
//     },
//     methods: {
        
        
//     },

//     computed: {
//        greet: function(){
//            return 'Hello from app one :)'
//        }
//     }
// });

// var two = new Vue({
//     el: '#vue-app-two',
//     data: {
//         title: 'Vue App Two'
//     },
//     methods: {
//         changeTitle: function(){
//             one.title = "Title changed"
//         }
        
//     },

//     computed: {
//         greet: function(){
//             return 'Yo dudes, this is app 2 speaking to ya :)'
//         }
//     }
// });

// two.title = "Changed from outside";

var data = {
    name: 'Yoshi'
}

Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    data: function(){  //it has to be a function here
        return data
    },
    methods: {
        changeName: function(){
            this.name = 'Mario';
        }
    }
}),

new Vue({
    el: '#vue-app-one',
})

new Vue({
    el: '#vue-app-two',
})