<template>
  <Header header__white="header__white" />
  <Breadcrumb :title="$t('FAQ')" :subtitle="$t('FAQ')" />
  <FaqArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import FaqArea from "../components/AboutUs/FaqArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "CoursesList",
  components: {
    Header,
    Breadcrumb,
    FaqArea,
    Footer,
  },
};
</script>
