<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('Discover More')"
    :subtitle="$t('Discover more about us')"
  />
  <DiscoverMoreArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import DiscoverMoreArea from "@/components/Home/DiscoverMoreArea.vue";

export default {
  name: "DiscoverMore",
  components: {
    Header,
    Breadcrumb,
    DiscoverMoreArea,
    Footer,
  },
};
</script>
