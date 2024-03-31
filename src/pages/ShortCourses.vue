<template>
  <Header header__white="header__white" />
  <Breadcrumb
    title="Short Courses"
    subtitle="Short Courses in AI and Data Analytics "
  />
  <ShortCoursesArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import Footer from "../components/Home/Footer.vue";
import ShortCoursesArea from "@/components/Services/ShortCoursesArea.vue";

export default {
  name: "CourseSidebar",
  components: {
    Header,
    Breadcrumb,
    ShortCoursesArea,
    Footer,
  },
};
</script>
