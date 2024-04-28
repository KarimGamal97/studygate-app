<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('UK Accreditation')"
    :subtitle="$t('UK Accreditation')"
  />
  <UkAccrediationArea />
  <UkAccrediationCards />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import UkAccrediationCards from "../components/Cards/UkAccrediationCards.vue";
import Footer from "../components/Home/Footer.vue";
import UkAccrediationArea from "@/components/UkDistanceEdu/UkAccrediationArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    UkAccrediationArea,
    UkAccrediationCards,
    Footer,
  },
};
</script>
