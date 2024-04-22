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
                      <router-link to="/">{{ $t("Home") }}</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/uk-universities">
                        {{ $t("UK Universities") }}
                      </router-link>
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
              <span class="page__title-pre">{{ $t("UK Universities") }} </span>
            </div>
            <div class="course__tab-content mb-0">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="course__description">
                    <div class="row mb-50">
                      <div class="col-6">
                        <img
                          src="../../assets/img/Uk_Uni/Uk-Uni-3.png"
                          style="width: 100%"
                          alt=""
                        />
                      </div>
                      <div class="col-6">
                        <p>
                          {{
                            $t(
                              "UK universities are esteemed globally for their distinguished history, academic excellence, and cutting-edge research. They attract a diverse international student body, drawn by the quality of education, extensive study options, and the unique blend of tradition and innovation. The UK higher education system includes ancient universities with centuries of history, such as Oxford and Cambridge, alongside modern institutions that offer a contemporary approach to learning and research."
                            )
                          }}
                        </p>
                        <p>
                          {{
                            $t(
                              "These universities offer a broad spectrum of courses across various disciplines, catering to undergraduates, postgraduates, and professionals seeking further education. The teaching model in the UK emphasizes critical thinking, creativity, and independent study, aiming to equip students with skills relevant to their future careers. Many UK universities are renowned for their research impact, contributing significantly to advancements in science, humanities, and the arts."
                            )
                          }}
                        </p>
                      </div>
                    </div>

                    <div class="row mb-50">
                      <div class="col-6">
                        <p>
                          {{
                            $t(
                              "UK campuses are multicultural environments, fostering global networks and promoting a broad worldview among students. This cultural diversity enriches the student experience, preparing graduates for global career opportunities. Furthermore, UK universities often maintain strong connections with industries, ensuring that their courses remain relevant to the changing demands of the job market."
                            )
                          }}
                        </p>
                        <p>
                          {{
                            $t(
                              "In addition to academic pursuits, students in the UK enjoy a vibrant student life with opportunities for sports, arts, and social activities, enhancing their overall educational experience. The combination of prestigious academic programs, rich history, and a dynamic student life makes UK universities a top choice for students worldwide."
                            )
                          }}
                        </p>
                        <p>
                          {{
                            $t(
                              "The United Kingdom, known for its diverse and prestigious higher education system, comprises four countries each with its own set of renowned universities. Here are 15 common universities spread across these nations, providing a glimpse into the academic excellence the UK has to offer."
                            )
                          }}
                        </p>
                      </div>
                      <div class="col-6">
                        <img
                          src="../../assets/img/Uk_Uni/Uk-Uni-2.png"
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UkUniversitiesArea",
  components: {},
};
</script>
