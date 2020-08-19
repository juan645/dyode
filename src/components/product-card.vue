<template>
    <div class="p-2">
        <b-card :img-src="require('../assets/images/Product Image 1.jpg')"
                img-alt="Card image"
                img-top
                class="border-none"
        >
        <b-card-body class="p-2">
            <div class="product-title text-center">Product Title</div>
            <div class="product-type text-center">Women's T-Shirt</div>
            <div class="product-price text-center py-2">$19.99</div>
        </b-card-body>
      </b-card>
    </div>

</template>

<script>
    export default {
        name: "product-card"
    }
</script>

<style scoped>

</style>