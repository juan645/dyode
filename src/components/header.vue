<template>
    <div>
        <b-navbar toggleable="md" type="dark" class="bg-info-dark custom-header">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-nav center>
                <b-nav-item href="#" class="font-weight-bold logo">
                    <b-img :src="require('../assets/images/Logo.png')" height="67"/>
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav center class="cart-icon">
                <b-nav-item href="#">
                    <b-icon icon="cart"/>
                </b-nav-item>
            </b-navbar-nav>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav center>
                    <b-nav-item href="#">Womens</b-nav-item>
                    <b-nav-item href="#">Mens</b-nav-item>
                    <b-nav-item href="#">Accessories</b-nav-item>
                    <b-nav-item href="#">Sale!</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>

</template>

<script>
    export default {
        name: "appHeader"
    }
</script>

<style scoped>

</style>