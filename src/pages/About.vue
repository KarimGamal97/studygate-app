<template>
  <Header header__white="header__white" />
  <Breadcrumb :title="$t('About Us')" :subtitle="$t('About Us')" />
  <AboutArea />
  <BrandArea />
  <Testimonial />
  <BannerArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import AboutArea from "../components/common/AboutArea.vue";
import BrandArea from "../components/common/BrandArea.vue";
import Testimonial from "../components/Home/Testimonial.vue";
import BannerArea from "../components/Home/BannerArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "AboutPage",
  components: {
    Header,
    Breadcrumb,
    AboutArea,
    BrandArea,
    Testimonial,
    BannerArea,
    Footer,
  },
};
</script>
