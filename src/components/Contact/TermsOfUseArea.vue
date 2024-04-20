<template>
  <section class="page__title-area pt-20 pb-30">
    <div class="page__title-shape">
      <img
        class="page-title-shape-5 d-none d-sm-block"
        src="../../assets/img/page-title/page-title-shape-1.png"
        alt=""
      />
      <img
        class="page-title-shape-6"
        src="../../assets/img/page-title/page-title-shape-6.png"
        alt=""
      />
      <img
        class="page-title-shape-7"
        src="../../assets/img/page-title/page-title-shape-4.png"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12">
          <div class="course__wrapper">
            <div class="page__title-content mb-25">
              <div class="page__title-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/terms-of-use">Terms of Use</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Studigrid is an educational and technology service that
                      facilitate access to distance higher education from UK
                      universities for students in the UAE and GCC.
                    </li>
                  </ol>
                </nav>
              </div>
              <span class="page__title-pre">Terms of Use</span>
            </div>
            <div class="course__tab-content mb-40">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="row">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                      <div class="course__description">
                        <p>
                          Welcome to Studigrid, These Terms of Use govern your
                          use of our website and services. By accessing or using
                          our website, you agree to comply with these terms. If
                          you do not agree with any part of these terms, please
                          do not use our website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-12 col-xl-12 col-lg-12">
          <div class="course__tab-conent">
            <div class="tab-content" id="courseTabContent">
              <div
                class="tab-pane fade show active"
                id="grid"
                role="tabpanel"
                aria-labelledby="grid-tab"
              >
                <div class="row">
                  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>

                        <div class="course__teacher">
                          <p>
                            You must be at least 18 years old to use our website
                            or have the consent of a parent or guardian. You
                            agree to use our website for lawful purposes only
                            and not to engage in any activity that violates
                            local laws or infringes on the rights of others.
                          </p>
                          <p>
                            All content, materials, and intellectual property on
                            our website, including text, graphics, logos,
                            images, videos, and software, are owned, or licensed
                            by Studigrid, you may not reproduce, distribute,
                            modify, or display any content from our website
                            without prior written permission.
                          </p>
                          <p>
                            Some features of our website may require you to
                            create a user account. You are responsible for
                            maintaining the confidentiality of your account
                            credentials and for all activities that occur under
                            your account. You agree to notify us immediately of
                            any unauthorized use of your account.
                          </p>
                          <p>
                            Once We collect, use, and protect your personal
                            information as described in our Privacy Policy. By
                            using our website, you consent to the collection and
                            processing of your information as outlined in the
                            Privacy Policy.
                          </p>
                          <p>
                            Our website may contain links to third-party
                            websites or services. These links are provided for
                            your convenience, and we do not endorse or control
                            the content of third-party sites. Your interactions
                            with third-party sites are governed by their terms
                            and policies.
                          </p>
                          <p>
                            Our website and services are provided on an "as is"
                            and "as available" basis without warranties of any
                            kind. We do not guarantee the accuracy,
                            completeness, or reliability of any information on
                            our website. Your use of our website is at your own
                            risk.
                          </p>
                          <p>
                            To the extent permitted by law, we shall not be
                            liable for any direct, indirect, incidental,
                            consequential, or punitive damages arising out of
                            your use of our website or services, even if we have
                            been advised of the possibility of such damages.To
                            the extent permitted by law, we shall not be liable
                            for any direct, indirect, incidental, consequential,
                            or punitive damages arising out of your use of our
                            website or services, even if we have been advised of
                            the possibility of such damages.
                          </p>
                          <p>
                            These Terms of Use are governed by and construed in
                            accordance with the laws of the United Arab
                            Emirates. Any disputes arising from these terms, or
                            your use of our website shall be subject to the
                            exclusive jurisdiction of the courts in the UAE.
                          </p>
                          <p>
                            We reserve the right to update or modify these Terms
                            of Use at any time. Any changes will be effective
                            immediately upon posting on our website. Your
                            continued use of our website after such changes
                            constitutes your acceptance of the revised terms.
                          </p>
                          <p>
                            If you have any questions, comments, or concerns
                            about these Terms of Use or our website, please
                            contact us at:
                          </p>
                          <p>Data and Privacy Manager</p>
                          <p>Studigrid</p>
                          <div style="margin-bottom: 15px">
                            <a href="mailto:info@studigrid.com"
                              ><i
                                class="fa fa-envelope"
                                style="font-size: 12px; margin: 0 10px 0 0"
                              ></i>
                              info@studigrid.com
                            </a>
                          </div>
                          <p>
                            Feel free to customize these terms to suit the
                            specific needs and policies of your educational
                            consultancy website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MsAnalytics",
  components: {},
};
</script>

<style scoped>
p {
  font-size: 15px;
}
</style>
