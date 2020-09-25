import _ from 'lodash';

var eventBus = new Vue();

const app = new Vue({
    el: "#app",
    data: {
        message: "Hello World"
    },
    // created () {
    //     fetch("https://api.jsonbin.io/b/5f624b007243cd7e823d7bec/13", {
    //         method: 'GET',
    //         headers: {
    //             'secret-key': '$2b$10$RLi89aTLWEdIlq6r6Gzq1eKSjrRQi6JplO8trMu9KM.HT9s02tR/C'
    //         }
    //     }).then(res => res.json()).then(
    //         json => {
    //             this.products = json.products;
    //         }
    //     )
    // }
    computed: {
        mydata() {
            return _.join(['Hello', 'webpack'], ' ')
        }
    }
})

// ------------------------------------------