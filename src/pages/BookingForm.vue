<template>
  <Header header__white="header__white" />
  <Breadcrumb title="Book a Meeting" subtitle="Book a Meeting" />
  <BookingFormArea />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import BookingFormArea from "@/components/Contact/BookingFormArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "ContactPage",
  components: {
    Header,
    Breadcrumb,
    BookingFormArea,
    Footer,
  },
};
</script>
