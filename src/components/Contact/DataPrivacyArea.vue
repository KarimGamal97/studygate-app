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
                      <router-link to="/phd">{{
                        $t("Data Privacy Policy")
                      }}</router-link>
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
                {{ $t("Data Privacy Policy") }}</span
              >
            </div>
            <div class="course__tab-content mb-40">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="row">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                      <div class="course__description">
                        <p>
                          {{
                            $t(
                              "This Data Privacy Policy outlines how Studigrid, operating in the United Arab Emirates (UAE), collects, uses, stores, and protects the personal information of visitors and customers on our website. We are committed to maintaining the privacy and confidentiality of your data in compliance with applicable laws and regulations, including the UAE's data protection laws."
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
                  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <div class="course__teacher">
                          <p>
                            {{
                              $t(
                                "When you visit our website and interact with our services, we may collect the following types of information:"
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Personal Information: This includes your name, email address, phone number, postal address, and any other information you voluntarily provide through our contact forms or when registering for our services."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Payment Information: If you make purchases or payments on our website, we collect payment details such as credit/debit card information or other payment methods. Please note that we do not store your payment information directly on our servers but use secure third-party payment processors."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "Usage Data: We may collect information about your interactions with our website, such as pages visited, time spent on each page, device information, IP address, browser type, and referring URL."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "We use the information we collect for the following purposes:"
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t("To provide and improve our services to you.")
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "To communicate with you regarding your inquiries, requests, or purchases."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{ $t("To process payments and fulfill orders.") }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "To personalize your experience on our website."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "To analyze usage trends and improve the functionality of our website."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "To comply with legal obligations and resolve disputes."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "We may share your personal information with third parties only in the following circumstances:"
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "With your consent: We may share your information with third parties if you have given us explicit consent to do so."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Service Providers: We may engage third-party service providers to assist us in providing our services, such as payment processors, IT service providers, or marketing agencies. These providers are obligated to maintain the confidentiality and security of your information."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Legal Compliance: We may disclose your information to comply with applicable laws, regulations, legal processes, or government requests."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "We take appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encryption, access controls, regular security assessments, and staff training on data protection practices."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. We will securely delete or anonymize your information when it is no longer needed."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "You have the following rights regarding your personal information:"
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Right to access: You can request access to the personal information we hold about you."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Right to rectification: You can request corrections to any inaccurate or incomplete information."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Right to erasure: You can request the deletion of your personal information, subject to legal requirements."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Right to object: You can object to the processing of your information for certain purposes."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "To analyze usage trends and improve the functionality of our website."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Right to data portability: You can request a copy of your data in a structured, commonly used format."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "To exercise these rights or if you have any questions or concerns about our data privacy practices, please contact us using the information provided below."
                              )
                            }}
                          </p>
                          <p>
                            {{
                              $t(
                                "If you have any questions, comments, or requests regarding this Data Privacy Policy or our handling of your personal information, please contact us at:"
                              )
                            }}
                          </p>
                          <p>Studigrid</p>
                          <p>
                            <i
                              class="fa fa-location-arrow"
                              style="font-size: 12px; margin: 0 10px 0 0"
                            ></i>
                            {{ $t("Al Muroor, Abu Dhabi") }}
                          </p>
                          <div style="margin-bottom: 15px">
                            <a href="mailto:info@studigrid.com"
                              ><i
                                class="fa fa-envelope"
                                style="font-size: 12px; margin: 0 10px 0 0"
                              ></i>
                              info@studigrid.com
                            </a>
                          </div>
                          <p>
                            {{
                              $t(
                                "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically for any updates."
                              )
                            }}
                          </p>
                          <p>{{ $t("Effective Date") }}: 15/04/2024</p>
                          <p>
                            {{
                              $t(
                                "By using our website and services, you agree to the terms outlined in this Data Privacy Policy."
                              )
                            }}
                          </p>
                          <p>
                            {{ $t("Data and Privacy Manager") }}
                          </p>
                          <p>Studigrid</p>
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

<style scoped>
p {
  font-size: 15px;
}
</style>
