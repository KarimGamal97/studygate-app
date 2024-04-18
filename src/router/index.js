import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
// Uk Distance Edu
import DistanceEdu from "../pages/DistanceEdu.vue";
import whyStudyUk from "../pages/WhyStudyUk.vue";
import AdmissionReq from "../pages/AdmissionReq.vue";
import UkAccreditation from "../pages/UkAccrediation.vue";
import UkUniversities from "../pages/UkUniversities.vue";
import UsefulLinks from "../pages/UsefulLinks.vue";
import AboutUk from "../pages/AboutUk.vue";
// About Us
import Faq from "../pages/Faq.vue";
import About from "../pages/About.vue";

// Services
import Services from "../pages/Services.vue";
import MsAnalytics from "../pages/MsAnalytics.vue";
import MsData from "../pages/MsData.vue";
import MBA from "../pages/MBA.vue";
import PHD from "../pages/PHD.vue";
import MRES from "../pages/MRES.vue";
import MPhil from "../pages/MPhil.vue";
import AiTools from "../pages/AiTools.vue";
import DataTools from "../pages/DataTools.vue";
// Contact
import Contact from "../pages/Contact.vue";
import DataPrivacy from "../pages/DataPrivacy.vue";
import TermsOfUse from "../pages/TermsOfUse.vue";
import ShortCourses from "../pages/ShortCourses.vue";
import BookingForm from "../pages/BookingForm.vue";
import ApplyingCourse from "../pages/ApplyingCourse.vue";
import DiscoverMore from "../pages/DiscoverMore.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/distance-edu",
      component: DistanceEdu,
    },
    {
      path: "/faq",
      component: Faq,
    },
    {
      path: "/why-study-uk",
      component: whyStudyUk,
    },
    {
      path: "/admission-req",
      component: AdmissionReq,
    },
    {
      path: "/uk-accreditation",
      component: UkAccreditation,
    },
    {
      path: "/uk-universities",
      component: UkUniversities,
    },
    {
      path: "/about-uk",
      component: AboutUk,
    },
    {
      path: "/useful-links",
      component: UsefulLinks,
    },

    {
      path: "/services",
      component: Services,
    },
    {
      path: "/ms-analytics",
      component: MsAnalytics,
    },
    {
      path: "/ms-data",
      component: MsData,
    },
    {
      path: "/mba",
      component: MBA,
    },
    {
      path: "/phd",
      component: PHD,
    },
    {
      path: "/mres",
      component: MRES,
    },
    {
      path: "/mphil",
      component: MPhil,
    },
    {
      path: "/data-privacy",
      component: DataPrivacy,
    },
    {
      path: "/terms-of-use",
      component: TermsOfUse,
    },
    {
      path: "/short-courses",
      component: ShortCourses,
    },
    {
      path: "/ai-tools",
      component: AiTools,
    },
    {
      path: "/data-tools",
      component: DataTools,
    },
    {
      path: "/book-meeting",
      component: BookingForm,
    },
    {
      path: "/apply-course",
      component: ApplyingCourse,
    },
    {
      path: "/discover-more",
      component: DiscoverMore,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/errorPage",
      component: ErrorPage,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
  window.scrollTo(0, 0);
});

export default router;
