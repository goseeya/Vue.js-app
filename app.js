new Vue({
    el: '#vue-app',
    data: {
        name: 'Gosia',
        job: 'MUA',
        website: 'https://github.com/goseeya'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});