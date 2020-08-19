<template>
    <b-carousel
            id="carousel-fade"
            fade
            indicators
            img-height="400px"
            class="custom-carousel"
    >
        <b-carousel-slide
                caption="Title Goes Here"
                text="Tagline will go right here."
                :img-src="slider1Img1"
                img-height="400px"
        >
            <b-button variant="dark" squared>Shop Now</b-button>
        </b-carousel-slide>
        <b-carousel-slide
                caption="Title Goes Here"
                text="Tagline will go right here."
                :img-src="slider1Img2"
        >
            <b-button variant="dark" squared>Shop Now</b-button>
        </b-carousel-slide>
        <b-carousel-slide
                caption="Title Goes Here"
                text="Tagline will go right here."
                :img-src="slider1Img3"
                img-height="400px"
        >
            <b-button variant="dark" squared>Shop Now</b-button>
        </b-carousel-slide>
        <b-carousel-slide
                caption="Title Goes Here"
                text="Tagline will go right here."
                :img-src="slider1Img4"
        >
            <b-button variant="dark" squared>Shop Now</b-button>
        </b-carousel-slide>
    </b-carousel>
</template>

<script>
    import slider1 from '../assets/images/slider1.jpg'
    import slider2 from '../assets/images/slider2.jpg'
    import slider3 from '../assets/images/slider1.jpg'
    import slider4 from '../assets/images/slider2.jpg'

    export default {
        name: "home-slider",
        data() {
            return {
                slider1Img1: slider1,
                slider1Img2: slider2,
                slider1Img3: slider3,
                slider1Img4: slider4,
            }
        }
    }
</script>

<style scoped lang="scss">
</style>