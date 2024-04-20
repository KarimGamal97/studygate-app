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
                      <router-link to="/mphil">MPhil</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Studigate is an educational and technology service that
                      facilitate access to distance higher education from UK
                      universities for students in the UAE and GCC.
                    </li>
                  </ol>
                </nav>
              </div>
              <span class="page__title-pre">MPhil</span>
            </div>
            <div class="course__tab-content mb-95">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="course__description">
                        <p>
                          An MPhil (Master of Philosophy) program in the UK is a
                          postgraduate research degree that sits between a
                          Master's by Research (MRes) and a Doctor of Philosophy
                          (PhD). Typically lasting 1-2 years full-time or up to
                          3 years part-time, it involves conducting original
                          research under the supervision of academic experts.
                          Unlike taught master's programs, the MPhil emphasizes
                          independent research, culminating in the submission of
                          a thesis that presents the findings of this research.
                        </p>
                        <p>
                          Admission to an MPhil program requires a strong
                          academic record, usually a bachelor’s degree with
                          honors in a relevant field. Some programs may accept
                          candidates directly into a PhD, with the possibility
                          of being awarded an MPhil if they exit the PhD program
                          early or do not meet the criteria for a doctoral
                          degree.
                        </p>
                        <p>
                          The MPhil provides an opportunity to gain significant
                          research experience, develop research methodologies,
                          and contribute new knowledge to a specific field.
                          Although it can be a terminal degree, many students
                          pursue it as a stepping stone towards a PhD, testing
                          their aptitude for further doctoral studies.
                        </p>
                        <p>
                          Assessment for an MPhil is based on the submission and
                          defense of a thesis in a viva voce examination. This
                          degree not only develops expert knowledge in a
                          specific area but also enhances skills in research,
                          critical thinking, and academic writing, valuable for
                          careers in academia, research, and beyond.
                        </p>
                      </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <img
                        src="../../assets/img/MRes/mres-2.png"
                        style="width: 100%; object-fit: contain"
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
    </div>
  </section>
</template>

<script>
export default {
  name: "MsAnalytics",
  components: {},
};
</script>
