<template>
  <Header header__white="header__white" />
  <Breadcrumb :title="$t('MRes')" :subtitle="$t('Master by Research (MRes)')" />
  <MRESArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import MRESArea from "@/components/Services/MRESArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    MRESArea,
    Footer,
  },
};
</script>
