<template>
  <section class="about__area pt-90 pb-150">
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
          <div class="about__thumb-wrapper">
            <div class="about__review">
              <h5>
                {{ $t("Join the") }}<span> {{ $t("Studigrid") }}</span>
                {{ $t("community") }}
              </h5>
            </div>
            <div class="about__thumb ml-100">
              <img src="../../assets/img/about/about.jpg" alt="" />
            </div>
            <div class="about__banner mt--210">
              <img src="../../assets/img/about/about-banner.jpg" alt="" />
            </div>
            <div class="about__student ml-270 mt--80">
              <a href="#">
                <img src="../../assets/img/about/student-4.jpg" alt="" />
                <img src="../../assets/img/about/student-3.jpg" alt="" />
                <img src="../../assets/img/about/student-2.jpg" alt="" />
                <img src="../../assets/img/about/student-1.jpg" alt="" />
              </a>
              <p>
                {{ $t("Join over") }} <span>4,000+</span> {{ $t("students") }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-xxl-6 col-xl-6 col-lg-6"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        >
          <div class="about__content pl-70 pr-60 pt-25">
            <div class="section__title-wrapper mb-25">
              <h2 class="section__title">
                {{ $t("Achieve your") }}<br /><span class="yellow-bg-big"
                  >{{ $t("Goals") }}
                  <img src="../../assets/img/shape/yellow-bg-2.png" alt="" />
                </span>
                {{ $t("with Studigrid") }}
              </h2>
              <p style="text-align: justify">
                {{
                  $t(
                    "Studigate is an educational and technology service that facilitate access to distance higher education from UK universities for students in the UAE and GCC. Our approach combines personalized guidance and partnership with reputable universities to offer distance learning education programs mainly in analytics and business. Studigate also offers bridging courses and professional training in Data Analytics to professionals, and organizations."
                  )
                }}
              </p>
            </div>
            <div class="about__list mb-35">
              <ul>
                <li class="d-flex align-items-center">
                  <i class="fa fa-check"></i>
                  {{
                    $t("Connects UAE and GCC students with UK universities.")
                  }}
                </li>
                <li class="d-flex align-items-center">
                  <i class="fa fa-check"></i>
                  {{ $t("Programs focus on analytics courses .") }}
                </li>
                <li class="d-flex align-items-center">
                  <i class="fa fa-check"></i>
                  {{ $t("Professional training.") }}
                </li>
              </ul>
            </div>
            <router-link to="/contact" class="e-btn e-btn-border">
              {{ $t("apply now") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutArea",
};
</script>
