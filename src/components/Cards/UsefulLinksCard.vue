<template>
  <section class="course__area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12 mt-150">
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
                        <h3 class="course__title">• Useful Links</h3>
                        <div class="course__teacher">
                          <p>
                            <a href="WWW.JOBS.AC.UK"> 1 - WWW.JOBS.AC.UK</a>
                          </p>
                          <p>
                            <a href="http://www.scholars4dev.com/">
                              2 - http://www.scholars4dev.com/</a
                            >
                          </p>
                          <p>
                            <a href="http://www.findaphd.com/">
                              3 - http://www.findaphd.com/</a
                            >
                          </p>
                          <p>
                            <a href="http://scholarship-positions.com/">
                              4 - http://scholarship-positions.com/</a
                            >
                          </p>
                          <p>
                            <a href="http://www.ukcisa.org.uk/">
                              5 - http://www.ukcisa.org.uk/</a
                            >
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
