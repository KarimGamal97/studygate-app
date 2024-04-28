<template>
  <Header header__white="header__white" />
  <Breadcrumb :title="$t('Terms of Use')" :subtitle="$t('Terms of Use')" />
  <TermsOfUseArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import TermsOfUseArea from "@/components/Contact/TermsOfUseArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "DataPrivacy",
  components: {
    Header,
    Breadcrumb,
    TermsOfUseArea,
    Footer,
  },
};
</script>
