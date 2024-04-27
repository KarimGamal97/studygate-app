<template>
  <Header header__white="header__white" />
  <Breadcrumb
    title="Admission Requirements "
    subtitle="Admission Requirements "
  />
  <AdmissionReqArea />
  <AdmissionCards />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import AdmissionCards from "../components/Cards/AdmissionCards.vue";
import Footer from "../components/Home/Footer.vue";
import AdmissionReqArea from "@/components/UkDistanceEdu/AdmissionReqArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    AdmissionReqArea,
    AdmissionCards,
    Footer,
  },
};
</script>
