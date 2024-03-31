<template>
  <Header header__white="header__white" />
  <Breadcrumb title="PHD" subtitle="Doctor of Philosophy " />
  <PHDArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import PHDArea from "@/components/Services/PHDArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    PHDArea,
    Footer,
  },
};
</script>
