<template>
  <Header header__white="header__white" />
  <Breadcrumb :title="$t('About UK')" :subtitle="$t('About UK')" />
  <AboutUkDetails />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import AboutUkDetails from "../components/UkDistanceEdu/AboutUkDetails.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "CourseDetails",
  components: {
    Header,
    Breadcrumb,
    AboutUkDetails,
    Footer,
  },
};
</script>
