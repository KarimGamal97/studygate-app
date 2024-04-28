<template>
  <Header header__white="header__white" />
  <Breadcrumb :title="$t('Useful Links')" :subtitle="$t('Useful Links')" />
  <UsefulLinksCard />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import UsefulLinksCard from "../components/Cards/UsefulLinksCard.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    UsefulLinksCard,
    Footer,
  },
};
</script>
