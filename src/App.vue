<template>
    <div id="app">
        <div class="head-notification bg-dark py-2 text-center text-uppercase">
            Free shipping on all orders over $75
        </div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>

    import AppFooter from "./components/footer";
    import AppHeader from "./components/header";

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>

<style>
</style>
