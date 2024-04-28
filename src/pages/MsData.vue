<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('Ms Data Science')"
    :subtitle="$t('Ms Data Science')"
  />
  <MsDataArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import MsDataArea from "@/components/Services/MsDataArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    MsDataArea,
    Footer,
  },
};
</script>
