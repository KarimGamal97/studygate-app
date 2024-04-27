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
            <div
              class="page__title-content mb-25"
              :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
            >
              <div class="page__title-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/">{{ $t("Home") }}</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/phd">{{ $t("PHD") }}</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {{
                        $t(
                          "Studigrid is an educational and technology service that facilitates access to distance higher education from UK universities for students in the GCC."
                        )
                      }}
                    </li>
                  </ol>
                </nav>
              </div>
              <span class="page__title-pre">{{ $t("PHD") }}</span>
            </div>
            <div class="course__tab-content mb-40">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
                    <div
                      class="col-xxl-7 col-xl-7 col-lg-7 col-md-7"
                      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                    >
                      <div class="course__description">
                        <p>
                          {{
                            $t(
                              "A PhD program in the UK is a postgraduate doctoral degree focused on original research, culminating in a thesis that contributes new knowledge to the field. Typically lasting 3 years full, it involves a deep dive into a specific research question under the guidance of a supervisory team, leading academics in the discipline. Unlike some countries where coursework is a significant component, UK PhD programs emphasize independent research from the outset."
                            )
                          }}
                        </p>
                        <p>
                          {{
                            $t(
                              "Admission requires a strong academic record, usually a master's degree in a related field, although exceptional candidates with a bachelor's degree may be considered. Applicants must submit a research proposal outlining their intended study area, demonstrating the originality, viability, and significance of their proposed research."
                            )
                          }}
                        </p>
                        <p>
                          {{
                            $t(
                              "The program structure is flexible, allowing students to tailor their studies to their research needs, with minimal formal coursework. Assessments are primarily based on the final thesis and an oral examination (viva voce), where candidates defend their research findings to an expert panel."
                            )
                          }}
                        </p>
                        <p>
                          {{
                            $t(
                              "UK PhD programs foster a high level of scholarly independence, preparing graduates for careers in academia, research, and specialized professional roles. Networking opportunities, conferences, and publications during the program enhance prospects and academic standing."
                            )
                          }}
                        </p>
                      </div>
                    </div>
                    <div
                      class="col-xxl-5 col-xl-5 col-lg-5 col-md-5"
                      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                    >
                      <img
                        src="../../assets/img/PHD/phd-1.png"
                        style="width: 100%"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="mt-5 mb-3">
          {{ $t("Why study PhD?") }}
        </h3>
        <p>
          {{
            $t(
              "Pursuing a Ph.D. (Doctor of Philosophy) is a significant commitment, and individuals who attain this advanced degree often experience various professional and personal benefits:"
            )
          }}
        </p>
        <div
          class="col-xxl-12 col-xl-12 col-lg-12"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        >
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
                        <h3 class="course__title">1</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Expertise and Specialization: Ph.D. holders are recognized as experts in their fields. The extensive research and in-depth knowledge gained during the doctoral journey allow individuals to specialize in a particular area, contributing valuable insights to academia, industry, or the public sector."
                              )
                            }}
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
                        <h3 class="course__title">2</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Research Opportunities: Ph.D. programs emphasize original research, providing opportunities to contribute new knowledge to the academic community. Ph.D. holders often engage in groundbreaking research that addresses complex challenges and advances their respective fields."
                              )
                            }}
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
                        <h3 class="course__title">3</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Academic Positions: A Ph.D. is a gateway to academic positions. Many universities and research institutions require faculty members to hold a Ph.D. in their respective disciplines. Ph.D. holders can pursue roles such as professors, researchers, and academic leaders, contributing to the education and mentorship of future generations."
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="course__item white-bg mb-30 fix"
                      style="height: 260px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">4</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Higher Salaries: While salaries for Ph.D. holders vary across disciplines and industries, many experience higher earning potential. In academia, full-time faculty positions often come with competitive salaries, and Ph.D. holders in industry may command higher wages due to their specialized expertise."
                              )
                            }}
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
                        <h3 class="course__title">5</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Innovation and Problem-Solving: Ph.D. programs nurture critical thinking and problem-solving skills. Graduates are equipped to tackle complex issues and contribute to innovative solutions. This skill set is highly valued in various sectors, including academia, research, government, and industry."
                              )
                            }}
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
                        <h3 class="course__title">6</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Job Satisfaction: The pursuit of a Ph.D. is driven by a passion for research and a desire to contribute to knowledge. Ph.D. holders often find deep satisfaction in pursuing their intellectual interests and making meaningful contributions to their fields of study."
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="course__item white-bg mb-30 fix"
                      style="height: 260px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">7</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Leadership Roles: Ph.D. holders are often sought after for leadership roles. Whether in academia, research institutions, or industry, individuals with a Ph.D. are well-prepared to take on leadership positions that require strategic thinking, vision, and the ability to drive innovation."
                              )
                            }}
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
                        <h3 class="course__title">8</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Global Opportunities: A Ph.D. opens doors to international collaborations and research opportunities. Many Ph.D. holders engage in collaborative projects, attend conferences, and build networks with scholars and professionals from around the world, enriching their perspectives and expanding their global reach."
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                    <div
                      class="course__item white-bg mb-30 fix"
                      style="height: 275px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          {{ $t("In conclusion,") }}
                        </h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "While the journey to a Ph.D. is challenging, the rewards include the opportunity to contribute to knowledge, shape the future of a field, and enjoy a fulfilling and intellectually stimulating career. The impact of Ph.D. holders extends beyond their individual achievements, influencing the advancement of society."
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <img
                      src="../../assets/img/PHD/phd-2.png"
                      style="width: 100%"
                      alt=""
                    />
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
