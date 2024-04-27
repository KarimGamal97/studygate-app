<template>
  <section class="course__area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12">
          <div class="course__tab-conent">
            <div class="tab-content" id="courseTabContent">
              <div
                class="tab-pane fade show active"
                id="grid"
                role="tabpanel"
                aria-labelledby="grid-tab"
              >
                <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="course__item white-bg mb-30 fix"
                      style="height: 480px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">• {{ $t("England") }}</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "University of Oxford - A historic institution renowned for its excellence in education and research."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "University of Cambridge - Known for its rigorous academic programs and historic colleges."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Imperial College London - Specializes in science, engineering, medicine, and business."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "University of Manchester - Offers a wide range of programs, known for its research output."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "University of Bristol - Renowned for its research and teaching in various disciplines."
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
                      style="height: 450px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">• {{ $t("Scotland") }}</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "University of Edinburgh - One of the world’s top universities, known for its research and innovation."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "University of Glasgow - Offers a broad range of subjects with a strong research focus."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "University of Aberdeen - Known for its pioneering spirit and historic foundations."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Heriot-Watt University - Specializes in science and engineering, business, and design."
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
                      style="height: 350px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">• {{ $t("Wales") }}</h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Cardiff University - A leading research and teaching university in Wales."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Swansea University - Known for its research impact and seaside campus."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Bangor University - Offers a wide range of academic programs with a strong emphasis on research."
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
                      style="height: 100%"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          • {{ $t("Northern Ireland") }}
                        </h3>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "Queen’s University Belfast - A member of the Russell Group, known for its research and education."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Ulster University - Known for its strong business, health, and art programs."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "St. Mary's University College - A college with a focus on teacher education and liberal arts."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Each of these universities contributes to the UK's reputation for higher education excellence, offering diverse programs, innovative research, and a global alumni network."
                              )
                            }}
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
  name: "UkUniversitiesCard",

  components: {},
};
</script>
