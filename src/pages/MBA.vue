<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('MBA')"
    :subtitle="$t('Master in Business Administration')"
  />
  <MBAArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import MBAArea from "@/components/Services/MBAArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    MBAArea,
    Footer,
  },
};
</script>
