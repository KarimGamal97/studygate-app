<template>
  <Header header__white="header__white" />
  <Breadcrumb title="Our Services" subtitle="Our Services" />
  <ServicesArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import ServicesArea from "@/components/Services/ServicesArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    ServicesArea,
    Footer,
  },
};
</script>
