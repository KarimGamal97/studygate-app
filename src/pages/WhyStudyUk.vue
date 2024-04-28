<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('Why Study in the UK')"
    :subtitle="$t('Why Study in the UK')"
  />
  <WhyStudyUkArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import WhyStudyUkArea from "../components/UkDistanceEdu/WhyStudyUkArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "CourseDetails",
  components: {
    Header,
    WhyStudyUkArea,
    Breadcrumb,
    Footer,
  },
};
</script>
