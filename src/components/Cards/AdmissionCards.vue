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
                      style="height: 250px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          • {{ $t("English Language Proficiency") }}
                        </h3>
                        <div class="course__teacher d-flex align-items-center">
                          <p>
                            {{
                              $t(
                                "IELTS: A common requirement is an IELTS score of 6.0 to 7.0 overall, with no section lower than 6.0, depending on the university and course. TOEFL, PTE Academic, and other English language tests are also accepted, with specific score requirements set by each university."
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
                      style="height: 220px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          •
                          {{ $t("Letters of Recommendation") }}
                        </h3>
                        <div class="course__teacher d-flex align-items-center">
                          <p>
                            {{
                              $t(
                                "Typically, two letters of recommendation are required, usually from academics who are familiar with the applicant's academic abilities and potential for postgraduate study."
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
                      style="height: 220px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          •
                          {{ $t("Personal Statement or Statement of Purpose") }}
                        </h3>
                        <div class="course__teacher d-flex align-items-center">
                          <p>
                            {{
                              $t(
                                "An essay explaining your reasons for pursuing the M.S. degree, your interest in the specific program and university, your academic and research interests, and your career goals."
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
                      style="height: 220px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          •
                          {{ $t("CV/Resume") }}
                        </h3>
                        <div class="course__teacher d-flex align-items-center">
                          <p>
                            {{
                              $t(
                                "A current CV or resume detailing your education, qualifications, work experience, and any other relevant activities or achievements."
                              )
                            }}
                            {{
                              $t(
                                "Some programs like MBA in specific universities in the UK may require the following"
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
                      style="height: 300px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          •
                          {{ $t("Interviews") }}
                        </h3>
                        <div class="course__teacher d-flex align-items-center">
                          <p>
                            {{
                              $t(
                                "Some programs may invite candidates for an interview as part of the admissions process, either in person or via video conferencing. A current CV or resume detailing your education, qualifications, work experience, and any other relevant activities or achievements.Some programs like MBA in specific universities in the UK may require the following"
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
                      style="height: 220px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          •
                          {{ $t("Work Experience") }}
                        </h3>
                        <div class="course__teacher d-flex align-items-center">
                          <p>
                            {{
                              $t(
                                "While not always mandatory, relevant work experience can be beneficial and, in some cases, required for certain programs (e.g., MBA or programs with a professional focus)."
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
  name: "AdmissionCards",
  components: {},
};
</script>
