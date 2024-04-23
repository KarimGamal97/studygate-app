<template>
  <section
    class="testimonial__area pt-80 pb-80"
    style="background-color: #3954d5"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-10">
          <h3 class="testimonial__title">1. {{ $t("Our MISSION") }}</h3>
          <div class="testimonial__item-3">
            <p style="font-size: 17px">
              {{
                $t(
                  "Provide distance education opportunities to local students in the UAE and other GCC nations that may lead to an academic degree from reputable UK Universities and thus contribute positively to local community development. We also work with organizations to help them develop their skills in the adaptation of AI and Data Analytics in their operational activities."
                )
              }}
            </p>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-10">
          <div class="testimonial__video ml-70 fix">
            <div class="testimonial__thumb-3">
              <img
                src="../../assets/img/about/1.png"
                style="width: 100%; height: 100%"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-10 mt-50 mb-50">
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
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-10 mt-50 mb-50">
          <h3 class="testimonial__title">2. {{ $t("Our VISION") }}</h3>
          <div class="testimonial__item-3">
            <p style="font-size: 17px">
              {{
                $t(
                  "To be a HUB that connects students and organization who want to adapt cutting edge technologies."
                )
              }}
            </p>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-10">
          <h3 class="testimonial__title">3. {{ $t("GOALS") }}</h3>
          <div class="testimonial__item-3">
            <p style="font-size: 17px; line-height: 2">
              1)
              {{
                $t(
                  "Provide national research seekers with research study opportunities in their local countries by facilitating all necessary works for persuading research degrees a. Establishing communication between students and local scientists to cooperate in solving real problems based on research b. Encourage local scientists to perform research via supervising post graduate students who are interested in research degree"
                )
              }}
            </p>
            <p style="font-size: 17px; line-height: 2">
              2)
              {{
                $t(
                  "Increase the number of local research degree holders by providing local research study opportunities from reputable universities in the UK a. Assisting local research-based seekers to pursuing a research degree in their fields b. Raise awareness among research-based seekers that research can be carried out locally when the right resources and communications are available"
                )
              }}
            </p>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-10">
          <div class="testimonial__video ml-70 fix">
            <div class="testimonial__thumb-3">
              <img
                src="../../assets/img/about/1.png"
                style="width: 100%; height: 100%"
                alt=""
              />
            </div>
          </div>
          <div class="testimonial__item-3 mt-50 ml-70">
            <p style="font-size: 17px; line-height: 2">
              3)
              {{
                $t(
                  "Enhance research collaboration among research staff and local research degree students"
                )
              }}
            </p>
            <p style="font-size: 17px; line-height: 2">
              4)
              {{
                $t(
                  "Conduct AI and Data Analytic training courses to organizational staff to sustain performance in continuously changing environment"
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, EffectFade, Autoplay } from "swiper";

export default {
  name: "TestimonialArea",
  components: {},
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
