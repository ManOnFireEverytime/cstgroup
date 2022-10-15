const app = new Vue({
    el: "#app",
    data: {
        product: {
            "Subject": "Math",
            "Location": "London",
            "Price": 100,
            "Space": 5,
        },
        cart: [],
    },
    methods: {
        addToCart() {
            this.cart.push(this.product.Subject);
        },

    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || '';
        },
        canAddToCart: function () {
            return this.product.Space > this.cartItemCount;
        }
    }


})