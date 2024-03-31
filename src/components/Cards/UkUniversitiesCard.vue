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
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">• England</h3>
                        <div class="course__teacher">
                          <p>
                            University of Oxford - A historic institution
                            renowned for its excellence in education and
                            research.
                          </p>
                          <p>
                            University of Cambridge - Known for its rigorous
                            academic programs and historic colleges.
                          </p>
                          <p>
                            Imperial College London - Specializes in science,
                            engineering, medicine, and business.
                          </p>
                          <p>
                            University of Manchester - Offers a wide range of
                            programs, known for its research output.
                          </p>
                          <p>
                            University of Bristol - Renowned for its research
                            and teaching in various disciplines.
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
                        <h3 class="course__title">• Scotland</h3>
                        <div class="course__teacher">
                          <p>
                            University of Edinburgh - One of the world’s top
                            universities, known for its research and innovation.
                          </p>
                          <p>
                            University of Glasgow - Offers a broad range of
                            subjects with a strong research focus.
                          </p>
                          <p>
                            University of Aberdeen - Known for its pioneering
                            spirit and historic foundations.
                          </p>
                          <p>
                            Heriot-Watt University - Specializes in science and
                            engineering, business, and design.
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
                        <h3 class="course__title">• Wales</h3>
                        <div class="course__teacher">
                          <p>
                            Cardiff University - A leading research and teaching
                            university in Wales.
                          </p>
                          <p>
                            Swansea University - Known for its research impact
                            and seaside campus.
                          </p>
                          <p>
                            Bangor University - Offers a wide range of academic
                            programs with a strong emphasis on research.
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
                        <h3 class="course__title">• Northern Ireland</h3>
                        <div class="course__teacher">
                          <p>
                            Queen’s University Belfast - A member of the Russell
                            Group, known for its research and education.
                          </p>
                          <p>
                            Ulster University - Known for its strong business,
                            health, and art programs.
                          </p>
                          <p>
                            St. Mary's University College - A college with a
                            focus on teacher education and liberal arts.
                          </p>
                          <p>
                            Each of these universities contributes to the UK's
                            reputation for higher education excellence, offering
                            diverse programs, innovative research, and a global
                            alumni network.
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
import CourseMixin from "../../mixins/courseItemsMixin";

export default {
  name: "UkUniversitiesCard",
  mixins: [CourseMixin],
  components: {},
};
</script>
