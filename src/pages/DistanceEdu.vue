<template>
  <Header header__white="header__white" />
  <Breadcrumb title="Distance Education" subtitle="Distance Education" />
  <DistanceEduArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import DistanceEduArea from "../components/UkDistanceEdu/DistanceEduArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "DistanceEdu",
  components: {
    Header,
    Breadcrumb,
    DistanceEduArea,
    Footer,
  },
};
</script>
