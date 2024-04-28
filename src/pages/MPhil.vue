<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('MPhil')"
    :subtitle="$t('Master of Philosophy (MPhil)')"
  />
  <MPhilArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import MPhilArea from "@/components/Services/MPhilArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    MPhilArea,
    Footer,
  },
};
</script>
