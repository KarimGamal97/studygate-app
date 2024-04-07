<template>
  <Header header__white="header__white" />
  <Breadcrumb title="Data Privacy Policy" subtitle="Data Privacy Policy" />
  <DataPrivacyArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import DataPrivacyArea from "@/components/Contact/DataPrivacyArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "DataPrivacy",
  components: {
    Header,
    Breadcrumb,
    DataPrivacyArea,
    Footer,
  },
};
</script>
