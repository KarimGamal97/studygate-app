<template>
  <footer>
    <div :class="`footer__area ${footerBgTwo ? 'grey-bg-2' : 'footer-bg'}`">
      <div :class="`footer__top ${footerPadding ? 'pt-90' : 'pt-190'} pb-40`">
        <div class="container">
          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="footer__widget mb-50">
                <div class="footer__widget-head mb-22">
                  <div class="footer__logo">
                    <router-link to="/">
                      <img
                        style="width: 25%"
                        :src="`${
                          footerBgTwo
                            ? require('../../assets/img/logo/logo.svg')
                            : require('../../assets/img/logo/logo.svg')
                        }`"
                        alt=""
                      />
                    </router-link>
                  </div>
                </div>
                <div
                  :class="`${
                    footerBgTwo
                      ? 'footer__widget-body-2'
                      : 'footer__widget-body'
                  }`"
                >
                  <p style="text-align: justify">
                    StudyGate is an educational and technology service that
                    facilitate access to distance higher education from UK
                    universities for students in the UAE and GCC.
                  </p>

                  <div class="footer__social">
                    <ul>
                      <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#" class="tw"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1"
            >
              <div class="footer__widget mb-50">
                <div class="footer__widget-head mb-22">
                  <h3
                    :class="`${
                      footerBgTwo
                        ? 'footer__widget-title-2'
                        : 'footer__widget-title'
                    }`"
                  >
                    Company
                  </h3>
                </div>
                <div class="footer__widget-body">
                  <div
                    :class="`${
                      footerBgTwo ? 'footer__link-2' : 'footer__link'
                    }`"
                  >
                    <ul>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/distance-edu">UK Distance Education</a></li>
                      <li><a href="/contact">ContactUs</a></li>
                      <li><a href="/useful-links">Useful Links </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6"
            >
              <div class="footer__widget mb-50">
                <div class="footer__widget-head mb-22">
                  <h3
                    :class="`${
                      footerBgTwo
                        ? 'footer__widget-title-2'
                        : 'footer__widget-title'
                    }`"
                  >
                    Platform
                  </h3>
                </div>
                <div class="footer__widget-body">
                  <div
                    :class="`${
                      footerBgTwo ? 'footer__link-2' : 'footer__link'
                    }`"
                  >
                    <ul>
                      <li><a href="/distance-edu">Distance Education</a></li>
                      <li><a href="/why-study-uk">Why study in Uk</a></li>
                      <li><a href="uk-accreditation">UK Accreditation </a></li>
                      <li><a href="/data-privacy">Data Privacy </a></li>
                      <li><a href="terms-of-use">Terms of Use</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
              <div class="footer__widget footer__pl-70 mb-50">
                <div class="footer__widget-head mb-22">
                  <h3
                    :class="`${
                      footerBgTwo
                        ? 'footer__widget-title-2'
                        : 'footer__widget-title'
                    }`"
                  >
                    Subscribe
                  </h3>
                </div>
                <div class="footer__widget-body">
                  <div
                    :class="`${
                      footerBgTwo ? 'footer__subscribe-2' : 'footer__subscribe'
                    }`"
                  >
                    <form action="#">
                      <div class="footer__subscribe-input mb-15">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">
                          <i class="far fa-arrow-right"></i>
                          <i class="far fa-arrow-right"></i>
                        </button>
                      </div>
                    </form>
                    <p>Get the latest news and updates right at your inbox.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="`${
          footerBgTwo ? 'footer__bottom footer__bottom-2' : 'footer__bottom'
        }`"
      >
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div
                :class="`${
                  footerBgTwo
                    ? 'footer__copyright-2 text-center'
                    : 'footer__copyright text-center'
                }`"
              >
                <p>
                  © 2022 Educal, All Rights Reserved. Design By
                  <router-link to="https://mindtocode.org/">MTC</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterArea",
  props: {
    footerBgTwo: String,
    footerPadding: String,
  },
};
</script>
