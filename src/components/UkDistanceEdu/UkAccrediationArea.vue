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
                      <router-link to="/uk-accreditation"
                        >UK accreditation
                      </router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      StudyGate is an educational and technology service that
                      facilitate access to distance higher education from UK
                      universities for students in the UAE and GCC.
                    </li>
                  </ol>
                </nav>
              </div>
              <span class="page__title-pre">UK accreditation</span>
            </div>
            <div class="course__tab-content mb-95">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="course__description">
                    <p>
                      Accreditation in the United Kingdom is a process by which
                      educational institutions and programs undergo rigorous
                      evaluation to ensure they meet established standards of
                      quality and excellence. The Quality Assurance Agency for
                      Higher Education (QAA) is a key organization responsible
                      for maintaining and overseeing academic standards in UK
                      higher education.
                    </p>
                    <p>
                      Universities and colleges in the UK seek accreditation to
                      demonstrate their commitment to delivering high-quality
                      education, meeting specified benchmarks for curriculum,
                      faculty qualifications, resources, and student support
                      services. Accreditation is crucial for international
                      recognition of degrees and ensures that students receive a
                      reputable and standardized education.
                    </p>
                    <p>
                      Accredited programs and institutions often undergo
                      periodic reviews to maintain their accreditation status,
                      fostering continuous improvement in the delivery of
                      education. Prospective students can rely on accreditation
                      status as a reliable indicator of the institution's
                      commitment to academic quality. Employers also value
                      degrees from accredited institutions, as it signifies that
                      graduates have met rigorous academic standards and are
                      well-prepared for their respective fields. Overall,
                      accreditation plays a vital role in upholding the
                      credibility and global competitiveness of the UK higher
                      education system.
                    </p>
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
  name: "AdmissionReq",
  components: {},
};
</script>
