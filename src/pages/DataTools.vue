<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('Data Analytics common Tools used in Industry')"
    :subtitle="$t('Data Analytics common Tools used in Industry')"
  />
  <DataToolsArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import DataToolsArea from "@/components/Services/DataToolsArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    DataToolsArea,
    Footer,
  },
};
</script>
