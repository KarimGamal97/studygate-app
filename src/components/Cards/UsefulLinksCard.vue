<template>
  <section class="course__area pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12 mt-20">
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
                        <h3 class="course__title">
                          • {{ $t("Useful Links") }}
                        </h3>
                        <div class="course__teacher">
                          <p>
                            <a
                              href="WWW.JOBS.AC.UK"
                              target="_blank"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                            >
                              1 -
                              {{ $t("Find a scholarship or a job in the UK") }}
                            </a>
                          </p>
                          <p>
                            <a
                              href="http://www.scholars4dev.com/"
                              target="_blank"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                            >
                              2 -
                              {{ $t("Scholars 4dev") }}
                            </a>
                          </p>
                          <p>
                            <a
                              href="http://www.findaphd.com/"
                              target="_blank"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                            >
                              3 -
                              {{ $t("Find a phd") }}
                            </a>
                          </p>
                          <p>
                            <a
                              href="http://scholarship-positions.com/"
                              target="_blank"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                            >
                              4 -
                              {{ $t("Scholarship-Positions") }}
                            </a>
                          </p>
                          <p>
                            <a
                              href="http://www.ukcisa.org.uk/"
                              target="_blank"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                            >
                              5 -
                              {{ $t("Ukcisa") }}
                            </a>
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
  name: "UsefulLinks",
  components: {},
};
</script>
