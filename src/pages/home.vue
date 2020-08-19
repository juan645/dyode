<template>
    <div>
        <home-slider/>
        <b-container fluid class="px-0">
            <b-container>
                <b-row>
                    <b-col md="4" cols="6" class="p-2">
                        <router-link to="#">
                            <b-card :img-src="womenImage"
                                    img-alt="Card image"
                                    img-top
                                    class="custom-card"

                            >
                                <b-card-text>
                                    Womens
                                </b-card-text>
                            </b-card>
                        </router-link>

                    </b-col>
                    <b-col md="4" cols="6" class="p-2">
                        <router-link to="#">
                            <b-card :img-src="menImage"
                                    img-alt="Card image"
                                    img-top
                                    class="custom-card"

                            >
                                <b-card-text>
                                    Mens
                                </b-card-text>
                            </b-card>
                        </router-link>
                    </b-col>

                    <b-col md="4" cols="12" class="p-2">
                        <router-link to="#" class="d-none d-md-block d-lg-block">
                            <b-card :img-src="accessoryImage"
                                    img-alt="Card image"
                                    img-top
                                    class="custom-card"

                            >
                                <b-card-text>
                                    Accessories
                                </b-card-text>
                            </b-card>
                        </router-link>
                        <router-link to="#" class="d-md-none">
                            <b-card :img-src="require('../assets/images/Accessories Image Mobile.jpg')"
                                    img-alt="Card image"
                                    img-top
                                    class="custom-card"

                            >
                                <b-card-text>
                                    Accessories
                                </b-card-text>
                            </b-card>
                        </router-link>
                    </b-col>
                </b-row>
                <div class="py-2 text-center text-dark title">
                    New Arrivals
                </div>
                <div class="mx-4 my-2">
                    <carousel :perPageCustom="[[768, 2], [769, 4]]"
                              :navigationEnabled="true"
                              :paginationEnabled="false"
                              navigation-next-label=""
                              navigation-prev-label=""
                    >
                        <slide>
                            <product-card/>
                        </slide>
                        <slide>
                            <product-card/>
                        </slide>
                        <slide>
                            <product-card/>
                        </slide>
                        <slide>
                            <product-card/>
                        </slide>
                        <slide>
                            <product-card/>
                        </slide>
                        <slide>
                            <product-card/>
                        </slide>
                    </carousel>
                </div>
            </b-container>
            <div class="d-none d-md-block">
                <b-card
                        overlay
                        :img-src="require('../../src/assets/images/slider2.jpg')"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Title Goes Here"
                        class="custom-card-right"
                >
                    <b-card-text>
                        <p>Tagline will go right here.</p>
                        <b-button class="shop-btn text-uppercase" squared>Shop Now</b-button>
                    </b-card-text>
                </b-card>
            </div>
            <div class="d-md-none">
                <b-card
                        overlay
                        :img-src="require('../../src/assets/images/Hero Image 2 Mobile.jpg')"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Title Goes Here"
                        class="custom-card-right"
                >
                    <b-card-text>
                        <p>Tagline will go right here.</p>
                        <b-button class="shop-btn text-uppercase" squared>Shop Now</b-button>
                    </b-card-text>
                </b-card>
            </div>
            <b-container class="pb-5 pt-4">
                <div class="pb-2 pt-4 text-center text-dark title">
                    Follow Us on Instragram!
                </div>
                <div class="mx-4 px-4">
                    <carousel :perPageCustom="[[0, 3], [769, 5]]"
                              :navigationEnabled="false"
                              :paginationEnabled="false"
                    >
                        <slide>
                            <div class="p-2">
                                <b-link>

                                    <b-card :img-src="require('../../src/assets/images/Social 1.jpg')"
                                            img-alt="Card image"
                                            img-top
                                            class="border-none"
                                            no-body

                                    >
                                    </b-card>

                                </b-link>
                            </div>
                        </slide>
                        <slide>
                            <div class="p-2">
                                <b-link>
                                    <b-card :img-src="require('../../src/assets/images/Social 2.jpg')"
                                            img-alt="Card image"
                                            img-top
                                            class="border-none"
                                            no-body

                                    >
                                    </b-card>
                                </b-link>
                            </div>
                        </slide>
                        <slide>
                            <div class="p-2">
                                <b-link>
                                    <b-card :img-src="require('../../src/assets/images/Social 3.jpg')"
                                            img-alt="Card image"
                                            img-top
                                            class="border-none"
                                            no-body
                                    >
                                    </b-card>
                                </b-link>
                            </div>
                        </slide>
                        <slide>
                            <div class="p-2">
                                <b-link>
                                    <b-card :img-src="require('../../src/assets/images/Social 4.jpg')"
                                            img-alt="Card image"
                                            img-top
                                            class="border-none"
                                            no-body
                                    >
                                    </b-card>
                                </b-link>
                            </div>
                        </slide>
                        <slide>
                            <div class="p-2">
                                <b-link>
                                    <b-card :img-src="require('../../src/assets/images/Social 5.jpg')"
                                            img-alt="Card image"
                                            img-top
                                            class="border-none"
                                            no-body
                                    >
                                    </b-card>
                                </b-link>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </b-container>
        </b-container>

        <b-container fluid>
            <b-row class="bg-info-dark py-5">
                <b-container>
                    <b-col cols="12" class="title text-center text-white pb-2">
                        <b-img class="nwsLetter" :src="require('../../src/assets/images/Email Icon.png')"/>
                        Sign Up & Stay Connected
                    </b-col>

                    <b-row class="align-items-center py-3">
                        <b-col md="6" class="py-2">
                            <h6 class="text-white text-center-md light-mobile">
                                Sign up for the newsletter and get 20%off! Gain access to exclusive offers and be the
                                first
                                to know
                                when new stuff drops!
                            </h6>
                        </b-col>
                        <b-col md="6" class="py-2">
                            <div class="d-flex">
                                <b-form-input
                                        placeholder="Enter your email address"
                                        class="squared"
                                >

                                </b-form-input>
                                <b-button class="mx-2 btn-submit" squared>Subscribe</b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-row>

        </b-container>


    </div>
</template>

<script>
    import HomeSlider from "../../src/components/homeSlider";
    import MenImage from "../../src/assets/images/Mens Image.jpg"
    import WomenImage from "../../src/assets/images/Womens Image.jpg"
    import AccessoryImage from "../../src/assets/images/Accessories Image.jpg"
    import ProductCard from "../../src/components/product-card";

    export default {
        name: "home",
        components: {ProductCard, HomeSlider},
        data() {
            return {
                menImage: MenImage,
                womenImage: WomenImage,
                accessoryImage: AccessoryImage,
                text: ''
            }
        }
    }
</script>

