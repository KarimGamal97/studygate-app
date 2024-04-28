<template>
  <Header header__white="header__white" />
  <Breadcrumb
    :title="$t('UK Universities')"
    :subtitle="$t('UK Universities')"
  />
  <UkUniversitiesArea />
  <UkUniversitiesCard />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import UkUniversitiesCard from "../components/Cards/UkUniversitiesCard.vue";
import Footer from "../components/Home/Footer.vue";
import UkUniversitiesArea from "@/components/UkDistanceEdu/UkUniversitiesArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    UkUniversitiesArea,
    UkUniversitiesCard,
    Footer,
  },
};
</script>
