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
                      <router-link to="/ai-tools">
                        {{ $t("Open AI tools") }}</router-link
                      >
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
                {{ $t("Open AI tools in industry") }}</span
              >
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
                      {{
                        $t(
                          "Open AI offers a range of tools and technologies that have become increasingly common and influential in various industries. These tools are primarily centered around artificial intelligence and machine learning, enabling tasks such as natural language processing, image generation, and more sophisticated AI applications. Below are some of the most notable Open AI tools used in the industry:"
                        )
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="mt-5 mb-3">
          {{ $t("AI Short Courses") }}
        </h3>
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
                        <h3 class="course__title">
                          {{
                            $t(
                              "GPT (Generative Pre-trained Transformer) Series"
                            )
                          }}
                        </h3>
                        <div class="course__teacher">
                          <p>
                            •
                            {{
                              $t(
                                "Description: The GPT series, including GPT-3 and the more recent iterations, are state-of-the-art language processing AI models known for their ability to understand and generate human-like text. These models can perform a wide range of language tasks, such as answering questions, writing essays, summarizing texts, translating languages, generating code, and more."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Use Cases: Content creation, customer service automation, conversational agents, language translation, educational tools, and code generaAtion."
                              )
                            }}
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
                        <h3 class="course__title">Codex</h3>
                        <div class="course__teacher">
                          <p>
                            •
                            {{
                              $t(
                                "Description: Codex is a powerful AI model developed by Open AI, designed to understand and generate human-like code. It powers GitHub Copilot and can interpret natural language prompts to write code in several programming languages and markup languages."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Use Cases: Assisting programmers by generating code snippets, automating software documentation, educational purposes for learning to code, and automating routine programming tasks."
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="course__item white-bg mb-30 fix"
                      style="height: 310px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">DALL·E</h3>
                        <div class="course__teacher">
                          <p>
                            •
                            {{
                              $t(
                                "Description: DALL·E is an AI model capable of generating high-quality images from textual descriptions. It can create original, detailed images and art from a simple text prompt, showcasing the ability to understand and visualize concepts in diverse styles."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Use Cases: Graphic design, advertising, content creation, art generation, and enhancing creativity in various fields like marketing and entertainment."
                              )
                            }}
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
                        <h3 class="course__title">
                          {{
                            $t("CLIP (Contrastive Language–Image Pre-training)")
                          }}
                        </h3>
                        <div class="course__teacher">
                          <p>
                            •
                            {{
                              $t(
                                "Description: CLIP is designed to understand images in the context of natural language. By training on a vast amount of images and text found on the internet, CLIP can recognize and categorize images in a way that aligns with human judgment and descriptions."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Use Cases: Image recognition, content categorization, aiding in search engines, and enhancing the relevance of image-based searches and recommendations."
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="course__item white-bg mb-30 fix"
                      style="height: 310px"
                    >
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">Whisper</h3>
                        <div class="course__teacher">
                          <p>
                            •
                            {{
                              $t(
                                "Description: Whisper is an automatic speech recognition (ASR) system designed to accurately transcribe, translate, and understand spoken language in various accents and across multiple languages."
                              )
                            }}
                          </p>
                          <p>
                            •
                            {{
                              $t(
                                "Use Cases: Transcription services, real-time translation applications, voice-controlled assistants, and enhancing accessibility for hearing-impaired individuals."
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div class="course__item white-bg mb-30 fix">
                      <div class="course__content">
                        <div
                          class="course__meta d-flex align-items-center justify-content-between"
                        ></div>
                        <h3 class="course__title">{{ $t("Midjourney") }}</h3>
                        <div class="course__teacher">
                          <p>
                            •
                            {{
                              $t(
                                "Midjourney is an independent tool focusing on creating and exploring new ideas and tools for empowering human creativity and productivity. It generates images from textual descriptions, allowing users to create visual content by simply describing what they envision. This tool leverages advanced artificial intelligence to interpret text inputs and produce high-quality, unique images that can range from realistic to fantastical, providing a versatile resource for artists, designers, and content creators."
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
