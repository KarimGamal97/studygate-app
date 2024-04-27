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
            <div
              class="page__title-content mb-25"
              :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
            >
              <div class="page__title-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/">{{ $t("Home") }}</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/short-courses">
                        {{ $t("Short Courses") }}
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
              <span class="page__title-pre">
                {{ $t("Short Courses in AI and Data Analytics") }}
              </span>
            </div>
            <div class="course__tab-content mb-95">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div
                    class="course__description"
                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                  >
                    <p>
                      {{
                        $t(
                          "We provide short courses for organizations and individuals interested in AI and Data Analytics. We can also offer customized courses in the applications of AI in Healthcare, leadership, decision making, and business development. Examples of short courses are given below."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="mb-3" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
          {{ $t("AI Short Courses") }}
        </h3>
        <div
          class="col-xxl-12 col-xl-12 col-lg-12"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        >
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
                        >
                          <h3 class="course__title">
                            {{ $t("Introduction to Artificial Intelligence") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-1.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            This course covers the basics of AI, including
                            machine learning, natural language processing, and
                            robotics. Students learn about AI applications and
                            ethical considerations.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Machine Learning Fundamentals") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-2.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Focuses on core machine learning concepts,
                            algorithms, and their application. Students gain
                            hands-on experience with supervised and unsupervised
                            learning models.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Deep Learning for Computer Vision") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-10.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Teaches how to apply deep learning techniques to
                            interpret and process images and videos. Covers
                            convolutional neural networks and their
                            applications.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("AI for Business Leaders") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-4.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Offers insights into how AI can be leveraged to
                            solve business problems, improve efficiency, and
                            drive innovation. Includes case studies and strategy
                            formulation.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Natural Language Processing (NLP)") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-5.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Explores techniques to process and analyze text
                            data, enabling machines to understand human
                            language. Covers sentiment analysis, text
                            classification, and chatbot development.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Ethics and AI") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-6.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Addresses the ethical considerations in AI
                            development and deployment, including bias, privacy,
                            and decision-making. Encourages responsible AI use
                            and governance.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="mt-5 mb-3" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
          {{ $t("Data Analytics Short Courses") }}
        </h3>
        <div
          class="col-xxl-12 col-xl-12 col-lg-12"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        >
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
                        >
                          <h3 class="course__title">
                            {{ $t("Data Analytics Foundations") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-7.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Introduces the basics of data analysis, including
                            data collection, cleaning, and exploration. Uses
                            popular tools like Excel, SQL, and Tableau.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Python for Data Science") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-8.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Teaches Python programming with a focus on data
                            analysis and visualization. Covers libraries like
                            Pandas, NumPy, and Matplotlib.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Business Analytics") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-9.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Focuses on using data analytics to make informed
                            business decisions. Includes predictive modeling,
                            customer analytics, and performance measurement.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Big Data Analytics") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-10.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Explores technologies and techniques for analyzing
                            large data sets. Covers Hadoop, Spark, and data
                            lakes, with emphasis on scalability and performance.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Data Visualization and Communication") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-11.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Teaches how to present data effectively using visual
                            tools. Students learn to create impactful charts,
                            graphs, and dashboards.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        >
                          <h3 class="course__title">
                            {{ $t("Quantitative Methods for Data Analysis") }}
                          </h3>
                          <img
                            src="../../assets/img/ai/ai-12.jpg"
                            alt=""
                            width="180px"
                          />
                        </div>
                        <div class="course__teacher">
                          <p style="display: none">
                            Offers an in-depth look at statistical methods and
                            models for data analysis. Suitable for those
                            interested in research or data-driven
                            decision-making.
                          </p>
                          <router-link to="/phd" class="e-btn e-btn-2">{{
                            $t("Find Out More")
                          }}</router-link>
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
  name: "MsAnalytics",
  components: {},
};
</script>
