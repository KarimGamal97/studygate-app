<template>
  <Header header__white="header__white" />
  <Breadcrumb title="Ms Analytics" subtitle="Ms Analytics" />
  <MsAnalyticsArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import MsAnalyticsArea from "@/components/Services/MsAnalyticsArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    MsAnalyticsArea,
    Footer,
  },
};
</script>
