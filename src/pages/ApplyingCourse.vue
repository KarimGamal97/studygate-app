<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('Apply for A Course')"
    :subtitle="$t('Apply for A Course')"
  />
  <ApplyingCourseArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import ApplyingCourseArea from "@/components/Contact/ApplyingCourseArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "ContactPage",
  components: {
    Header,
    Breadcrumb,
    ApplyingCourseArea,
    Footer,
  },
};
</script>
