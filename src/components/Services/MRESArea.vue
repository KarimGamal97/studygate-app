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
                      <router-link to="/mres">MRes</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      StudyGate is an educational and technology service that
                      facilitate access to distance higher education from UK
                      universities for students in the UAE and GCC.
                    </li>
                  </ol>
                </nav>
              </div>
              <span class="page__title-pre">MRes</span>
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
                          A Master by Research (MRes) program in the UK is a
                          postgraduate degree designed to provide students with
                          advanced research training and skills. Typically
                          lasting one year full-time or two years part-time, the
                          MRes serves as both a standalone qualification and a
                          bridge to doctoral research, offering a stronger focus
                          on research methodology and practical experience than
                          traditional taught master's degrees. The program
                          combines a smaller taught component with a substantial
                          research project, making up the bulk of the degree.
                        </p>
                        <p>
                          Admission requirements include a good undergraduate
                          degree in a relevant field, with some programs
                          requiring a specific level of achievement. The
                          application process may also involve a research
                          proposal, outlining the candidate's intended area of
                          study.
                        </p>
                        <p>
                          The MRes is ideal for students aiming to pursue a PhD,
                          offering an opportunity to develop research skills and
                          produce a significant piece of scholarly work, such as
                          a dissertation or research paper, under close
                          supervision of academic staff. It assesses students'
                          ability to conduct independent research, critical
                          thinking, and mastery of their subject area.
                        </p>
                        <p>
                          This degree is suited for those seeking careers in
                          research, academia, or specialized sectors requiring
                          research competencies. It also provides a valuable
                          opportunity to explore a specific research interest in
                          depth before committing to a PhD program.
                        </p>
                      </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <img
                        src="../../assets/img/MRes/mres-1.png"
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
