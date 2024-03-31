<template>
  <Header
    headerShadow="header__area header__padding header__padding-2 header__shadow "
  />
  <WhyStudyUkArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import WhyStudyUkArea from "../components/UkDistanceEdu/WhyStudyUkArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "CourseDetails",
  components: {
    Header,
    WhyStudyUkArea,
    Footer,
  },
};
</script>
