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
                  <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">
                          • Check the below links for further details on UK
                          university accreditation.
                        </h3>
                        <div class="course__teacher">
                          <div class="mb-2">
                            <a
                              href="https://www.ukas.com/"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                              >- Ukas
                            </a>
                          </div>
                          <div class="mb-2">
                            <a
                              href="https://www.ukstudyonline.com/how-to-check-if-a-university-is-accredited-in-the-uk/"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                              >- Uk Study Online
                            </a>
                          </div>
                          <div class="mb-2">
                            <a
                              href="https://www.the-bac.org/"
                              style="
                                font-weight: bold;
                                color: #2b4eff;
                                font-size: 20px;
                              "
                              >- The Bac
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <img
                      src="../../assets/img/faq/9.png"
                      alt=""
                      style="width: 100%"
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
import CourseMixin from "../../mixins/courseItemsMixin";

export default {
  name: "UkAccrediation",
  mixins: [CourseMixin],
  components: {},
};
</script>
