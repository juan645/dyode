<template>
    <div class="bg-dark">
        <b-container class="py-3 d-flex justify-content-between flex-wrap">
            <div class="d-flex link-box py-2">
                <div class="px-4 accordion-md">
                    <h6 class="sub-title text-white" v-b-toggle.customer-service>
                        Customer Service
                    </h6>
                    <b-collapse id="customer-service" accordion="accordion1" role="tabpanel">
                        <b-nav vertical class="footer-nav">
                            <b-nav-item>Accessibility</b-nav-item>
                            <b-nav-item>Contact us</b-nav-item>
                            <b-nav-item>Return Policy</b-nav-item>
                            <b-nav-item>Faq</b-nav-item>
                            <b-nav-item>Gift Certificates</b-nav-item>
                            <b-nav-item>Wishlist</b-nav-item>
                        </b-nav>
                    </b-collapse>
                </div>
                <div class="px-4 accordion-md">
                    <h6 class="sub-title text-white" v-b-toggle.company>Company</h6>
                    <b-collapse id="company" accordion="accordion2" role="tabpanel">
                        <b-nav vertical class="footer-nav">
                            <b-nav-item>About Us</b-nav-item>
                            <b-nav-item>Careers</b-nav-item>
                            <b-nav-item>Press</b-nav-item>
                            <b-nav-item>Affiliates</b-nav-item>
                        </b-nav>
                    </b-collapse>
                </div>
            </div>
            <div class="px-4 py-2">
                <h6 class="sub-title text-white">
                    Follow Us
                </h6>
                <div>
                    <b-link>
                        <b-img :src="require('../assets/images/Group 3.png')"
                               alt=""
                               class="social-icon"/>
                    </b-link>
                    <b-link>
                        <b-img :src="require('../assets/images/Group 8.png')"
                               alt=""
                               class="social-icon"
                        />
                    </b-link>
                    <b-link>
                        <b-img :src="require('../assets/images/Group 15.png')"
                               alt=""
                               class="social-icon"
                        />
                    </b-link>

                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "appFooter"
    }
</script>

<style scoped>

</style>