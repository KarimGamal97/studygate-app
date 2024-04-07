<template>
  <Header header__white="header__white" />
  <Breadcrumb
    title=" Open AI tools in industry "
    subtitle="Open AI tools in industry  "
  />
  <AiToolsArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import AiToolsArea from "@/components/Services/AiToolsArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    AiToolsArea,
    Footer,
  },
};
</script>
