<template>
  <section class="page__title-area pt-120 pb-30">
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
                      <router-link to="/services">Services </router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Studigate is an educational and technology service that
                      facilitate access to distance higher education from UK
                      universities for students in the UAE and GCC.
                    </li>
                  </ol>
                </nav>
              </div>
              <span class="page__title-pre"
                >Here's how Studigate operates, distilled into three main
                aspects:
              </span>
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
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="mt-5 mb-3" style="color: #333">
                          1. Partnerships with UK Universities
                        </h3>
                        <div class="course__teacher">
                          <p>
                            Studigate collaborates closely with several UK
                            universities to provide a wide range of distance
                            learning programs in data analytics, business
                            administration and research degrees (PhDs, MRes,
                            MPhil) . These partnerships enable them to offer
                            accredited and recognized degrees in business, and
                            data analytics. By acting as a bridge between
                            students and universities, Stafford ensures that the
                            academic qualifications obtained through their
                            platform are of the same standard and quality as
                            those earned on-campus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="mt-5 mb-3" style="color: #333">
                          2. Personalized Education Consultancy Services
                        </h3>
                        <div class="course__teacher">
                          <p>
                            We focus on providing personalized consultancy
                            services to prospective students. Our team of
                            academic consultants assists students in navigating
                            the array of online distance learning degree options
                            to find the program that best fits their career
                            goals and personal circumstances. This tailored
                            approach helps students make informed decisions
                            about their education, ensuring that they enroll in
                            programs that align with their professional
                            objectives and learning preferences. We cover
                            various aspects, including course selection,
                            application processes, and information on
                            scholarships and financial aid options.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="mt-5 mb-3" style="color: #333">
                          3. Comprehensive Support System
                        </h3>
                        <div class="course__teacher">
                          <p>
                            We place a strong emphasis on student support,
                            offering comprehensive assistance throughout the
                            student's educational journey. From the initial
                            inquiry stage to graduation, we provide guidance on
                            enrollment procedures, technical support for
                            accessing online learning platforms, and academic
                            advice to ensure students successfully complete
                            their programs. We also facilitate interactions
                            between students and faculty, helping to create a
                            supportive online learning community. This level of
                            support is crucial for distance learners, who may
                            face unique challenges in managing their studies
                            remotely.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="mt-5 mb-3" style="color: #333">
                          4. Short courses in Data Analytics
                        </h3>
                        <div class="course__teacher">
                          <p>
                            We offer Bridging short courses in Data Analytics
                            for students from other specialized majors prior
                            enrolling the post graduate programs <br />a.
                            Introduction to Applied Statistics <br />
                            b. Introduction to Data Analytics and Visualization
                            using Python<br />
                            c. Introduction to Artificial Intelligence and
                            Machine Learning<br />
                            d. Introduction to Dashboarding using Analytics
                            Tools
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
