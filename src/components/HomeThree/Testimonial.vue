<template>
  <section
    class="testimonial__area pt-80 pb-80"
    style="background-color: #3954d5"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
          <div class="testimonial__slider-3">
            <h3 class="testimonial__title">1. Our MISSION</h3>
            <div
              class="testimonial__slider-wrapper swiper-container testimonial-text mb-35"
            >
              <swiper
                ref="mySwiper"
                :modules="modules"
                :loop="false"
                :autoplay="{ delay: 5000 }"
                :navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }"
              >
                <swiper-slide v-for="item in sliderData" :key="item.id">
                  <div class="testimonial__item-3">
                    <p>
                      “Provide distance education opportunities to local
                      students in the UAE and other GCC nations that may lead to
                      an academic degree from reputable UK Universities and thus
                      contribute positively to local community development. We
                      also work with organizations to help them develop their
                      skills in the adaptation of AI and Data Analytics in their
                      operational activities. ”
                    </p>

                    <!-- <div class="testimonial__info-2">
                      <h4>James Lee,</h4>
                      <span>Student @Educal University</span>
                    </div> -->

                    <!-- <div class="testimonial__nav-thumb">
                      <img :src="item.img" alt="" />
                    </div> -->
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
          <div class="testimonial__video ml-70 fix">
            <div class="testimonial__thumb-3">
              <img
                src="../../assets/img/about/1.png"
                style="width: 100%; height: 100%"
                alt=""
              />
            </div>
            <!-- <div class="testimonial__video-content d-sm-flex">
              <div class="testimonial__video-icon mr-20 mb-20">
                <span>
                  <svg
                    version="1.1"
                    id="educal-youtube"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    style="enable-background: new 0 0 24 24"
                    xml:space="preserve"
                  >
                    <path
                      class="st0"
                      d="M22,11.1V12c0,5.5-4.5,10-10,10C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2c1.4,0,2.8,0.3,4.1,0.9"
                    />
                    <polyline class="st0" points="22,4 12,14 9,11 " />
                  </svg>
                </span>
              </div>
              <div class="testimonial__video-text">
                <h4>Course Outcome</h4>
                <p>
                  Faff about A bit of how's your father getmate cack codswallop
                  crikey argy-bargy cobblers lost his bottle.
                </p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
          <div class="testimonial__video mr-70 fix">
            <div class="testimonial__thumb-3">
              <img
                src="../../assets/img/about/4.png"
                style="width: 100%; height: 100%"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
          <div class="testimonial__slider-3">
            <h3 class="testimonial__title">2. Our VISION</h3>
            <div
              class="testimonial__slider-wrapper swiper-container testimonial-text mb-35"
            >
              <swiper
                ref="mySwiper"
                :modules="modules"
                :loop="false"
                :autoplay="{ delay: 5000 }"
                :navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }"
              >
                <swiper-slide v-for="item in sliderData" :key="item.id">
                  <div class="testimonial__item-3">
                    <p>
                      “To be a HUB that connects students and organization who
                      want to adapt cutting edge technologies. ”
                    </p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-70">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
          <div class="testimonial__slider-3">
            <h3 class="testimonial__title">3. GOALS</h3>
            <div
              class="testimonial__slider-wrapper swiper-container testimonial-text mb-35"
            >
              <swiper
                ref="mySwiper"
                :modules="modules"
                :loop="false"
                :autoplay="{ delay: 5000 }"
                :navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }"
              >
                <swiper-slide v-for="item in sliderData" :key="item.id">
                  <div class="testimonial__item-3">
                    <p>
                      1) Provide national research seekers with research study
                      opportunities in their local countries by facilitating all
                      necessary works for persuading research degrees a.
                      Establishing communication between students and local
                      scientists to cooperate in solving real problems based on
                      research b. Encourage local scientists to perform research
                      via supervising post graduate students who are interested
                      in research degree
                    </p>
                    <p>
                      2) Increase the number of local research degree holders by
                      providing local research study opportunities from
                      reputable universities in the UK a. Assisting local
                      research-based seekers to pursuing a research degree in
                      their fields b. Raise awareness among research-based
                      seekers that research can be carried out locally when the
                      right resources and communications are available
                    </p>
                    <p>
                      3) Enhance research collaboration among research staff and
                      local research degree students
                    </p>
                    <p>
                      4) Conduct AI and Data Analytic training courses to
                      organizational staff to sustain performance in
                      continuously changing environment
                    </p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
          <div class="testimonial__video ml-70 fix">
            <div class="testimonial__thumb-3">
              <img
                src="../../assets/img/about/5.png"
                style="width: 100%; height: 100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade, Autoplay } from "swiper";

export default {
  name: "TestimonialArea",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderData: [
        {
          id: 1,
          //  img: require(`@/assets/img/testimonial/home-3/testi-1.jpg`),
        },
        //  {
        //    id: 2,
        //    img: require(`@/assets/img/testimonial/home-3/testi-2.jpg`),
        //  },
        //  {
        //    id: 3,
        //    img: require(`@/assets/img/testimonial/home-3/testi-3.jpg`),
        //  },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, EffectFade, Autoplay],
    };
  },
};
</script>
