<template>
  <section class="contact__area pt-30 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-7 col-xl-7 col-lg-6">
          <div class="contact__wrapper">
            <div
              class="section__title-wrapper mb-40"
              :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
            >
              <h2 class="section__title">
                {{ $t("Get") }}
                <span
                  class="yellow-bg yellow-bg-big"
                  style="text-transform: lowercase"
                >
                  {{ $t("in touch")
                  }}<img src="../../assets/img/shape/yellow-bg.png" alt=""
                /></span>
              </h2>
              <p>
                {{
                  $t(
                    "Have a question or just want to say hi? We'd love to hear from you."
                  )
                }}
              </p>
            </div>
            <div class="contact__form">
              <form @submit.prevent="validateForm">
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="text"
                        :placeholder="$t('Your Name')"
                        :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                        name="name"
                        v-model="username"
                        @input="v$.username.$touch()"
                        :class="[
                          `${
                            v$.$errors.find(
                              (err) => err.$property == 'username'
                            )
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      />
                      <span v-for="err in v$.$errors" :key="err.$uid">
                        <span class="err" v-if="err.$property == 'username'">
                          {{ err.$message }}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="email"
                        :placeholder="$t('Email Id')"
                        :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                        name="email"
                        v-model="email"
                        :class="[
                          `${
                            v$.$errors.find((err) => err.$property == 'email')
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      />
                      <span v-for="err in v$.$errors" :key="err.$uid">
                        <span class="err" v-if="err.$property == 'email'">
                          {{ err.$message }}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="text"
                        :placeholder="$t('Phone Number')"
                        :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                        name="phone"
                        v-model="phone"
                        @input="v$.phone.$touch()"
                        :class="[
                          `${
                            v$.$errors.find((err) => err.$property == 'phone')
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      />
                      <span v-for="err in v$.$errors" :key="err.$uid">
                        <span class="err" v-if="err.$property == 'phone'">
                          {{ err.$message }}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="text"
                        :placeholder="$t('Country')"
                        :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                        name="city"
                        v-model="city"
                        @input="v$.city.$touch()"
                        :class="[
                          `${
                            v$.$errors.find((err) => err.$property == 'city')
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      />
                      <span v-for="err in v$.$errors" :key="err.$uid">
                        <span class="err" v-if="err.$property == 'city'">
                          {{ err.$message }}
                        </span>
                      </span>
                    </div>
                  </div>
                  <h3
                    style="font-size: 20px"
                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                  >
                    {{ $t("Queries for") }}
                  </h3>
                  <div class="col-xxl-12 col-xl-12 col-md-12 mb-3 inquires">
                    <div class="col-md-3 col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Master Degree"
                          id="masterDegree"
                        />
                        <label class="form-check-label ms-2" for="masterDegree">
                          {{ $t("Master Degree") }}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-2 col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="MBA"
                          id="MBA"
                        />
                        <label class="form-check-label ms-2" for="MBA">
                          {{ $t("MBA") }}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="msResearch"
                          id="MS Research"
                        />
                        <label class="form-check-label ms-2" for="msResearch">
                          {{ $t("MS Research") }}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-2 col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="PHD"
                          id="PHD"
                        />
                        <label class="form-check-label ms-2" for="PHD">
                          {{ $t("PHD") }}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-2 col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Training"
                          id="Training"
                        />
                        <label class="form-check-label ms-2" for="Training">
                          {{ $t("Training") }}
                        </label>
                      </div>
                    </div>
                  </div>
                  <h3
                    style="font-size: 20px"
                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                  >
                    {{ $t("Destination Country of Study") }}
                  </h3>
                  <div class="col-xxl-12 my-3">
                    <div class="input-group">
                      <select
                        class="form-select py-3"
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                        v-model="country"
                        @input="v$.country.$touch()"
                        :class="[
                          `${
                            v$.$errors.find((err) => err.$property == 'country')
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      >
                        <option value="uk" selected="uk">
                          {{ $t("UNITED KINGDOM") }}
                        </option>
                        <option value="values">{{ $t("NEW ZEALAND") }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="contact__form-input">
                      <textarea
                        :placeholder="$t('Enter Your Message')"
                        :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                        name="message"
                        v-model="message"
                        @input="v$.message.$touch()"
                        :class="[
                          `${
                            v$.$errors.find((err) => err.$property == 'message')
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      ></textarea>
                      <span v-for="err in v$.$errors" :key="err.$uid">
                        <span class="err" v-if="err.$property == 'message'">
                          {{ err.$message }}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div
                    class="col-xxl-12"
                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                  >
                    <div
                      class="contact__form-agree d-flex align-items-center my-10 gap-2"
                    >
                      <p style="font-size: 13px">
                        {{
                          $t(
                            "Your details will be used to supply the information you requested and in accordance with our"
                          )
                        }}
                        <a style="color: #0056ad" href="terms-of-use"> </a
                        >{{ $t("&") }}
                        <a style="color: #0056ad" href="/data-privacy">
                          {{ $t("Privacy Polices") }}</a
                        >
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-xxl-12 d-flex gap-3 mb-3"
                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                  >
                    <input
                      class="e-check-input big-checkbox"
                      type="checkbox"
                      id="e-agree"
                      width="50px"
                    />
                    <label
                      class="e-check-label"
                      for="e-agree"
                      style="font-size: 13px"
                    >
                      {{
                        $t(
                          "From time to time Studigrid would like to send you information about further courses and events which we think might interest you. You can opt-out of receiving this information at any time using links provided in our communications. Tick the box if you want to receive this information."
                        )
                      }}
                    </label>
                  </div>
                  <!-- Captcha -->
                  <vue-recaptcha
                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                    v-show="showRecaptcha"
                    sitekey="6LfWEr4pAAAAABNqiI6kVo73ow6QUbxnCc5vu-fz"
                    size="normal"
                    theme="light"
                    hl="tr"
                    :loading-timeout="loadingTimeout"
                    @verify="recaptchaVerified"
                    @expire="recaptchaExpired"
                    @fail="recaptchaFailed"
                    @error="recaptchaError"
                    ref="vueRecaptcha"
                  >
                  </vue-recaptcha>
                  <!-- Captcha -->
                  <div
                    class="col-xxl-12 mt-3"
                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                  >
                    <div class="contact__btn">
                      <button type="submit" class="e-btn">
                        {{ $t("Send") }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1"
        >
          <div class="contact__info white-bg p-relative z-index-1">
            <div class="contact__shape">
              <img
                class="contact-shape-1"
                src="../../assets/img/contact/contact-shape-1.png"
                alt=""
              />
              <img
                class="contact-shape-2"
                src="../../assets/img/contact/contact-shape-2.png"
                alt=""
              />
              <img
                class="contact-shape-3"
                src="../../assets/img/contact/contact-shape-3.png"
                alt=""
              />
            </div>
            <div class="contact__info-inner white-bg">
              <ul>
                <li>
                  <div
                    class="contact__info-item d-flex align-items-start mb-35"
                  >
                    <div class="contact__info-icon mr-15">
                      <svg class="map" viewBox="0 0 24 24">
                        <path
                          class="st0"
                          d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"
                        />
                        <circle class="st0" cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div class="contact__info-text">
                      <h4>{{ $t("Abu Dhabi Office") }}</h4>
                      <p>
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                        >
                          {{ $t("Al Muroor Road Office 207 Saraya Tower") }}</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="contact__info-item d-flex align-items-start mb-35"
                  >
                    <div class="contact__info-icon mr-15">
                      <svg class="mail" viewBox="0 0 24 24">
                        <path
                          class="st0"
                          d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"
                        />
                        <polyline class="st0" points="22,6 12,13 2,6 " />
                      </svg>
                    </div>
                    <div class="contact__info-text">
                      <h4>
                        {{ $t("Email us directly") }}
                      </h4>
                      <p>
                        <a href="mailto:info@studygrid.com">info@studigate</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="contact__info-item d-flex align-items-start mb-35"
                  >
                    <div class="contact__info-icon mr-15">
                      <svg class="call" viewBox="0 0 24 24">
                        <path
                          class="st0"
                          d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"
                        />
                      </svg>
                    </div>
                    <div class="contact__info-text">
                      <h4>
                        {{ $t("Phone") }}
                      </h4>
                      <p><a href="tel:009710581223419">009710581223419</a></p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="contact__social pl-30">
                <h4>Follow Us</h4>
                <ul>
                  <li>
                    <a href="#" class="fb"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#" class="tw"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vueRecaptcha from "vue3-recaptcha2";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  alpha,
  email,
  helpers,
} from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    vueRecaptcha,
  },
  data() {
    return {
      values: [],
      username: "",
      email: "",
      phone: "",
      city: "",
      message: "",
      country: "",
      showRecaptcha: true,
      loadingTimeout: 30000,
    };
  },
  validations() {
    return {
      username: {
        required: helpers.withMessage("", required),
        minLength: minLength(3),
        maxLength: maxLength(40),
        alpha,
      },
      email: { required: helpers.withMessage("", required), email },
      country: { required },
      message: {
        minLength: minLength(30),
        maxLength: maxLength(500),
        required: helpers.withMessage(
          "Your message must be at least 30 Characters",
          required
        ),
      },
    };
  },
  methods: {
    async validateForm() {
      await this.v$.$validate();
    },
    recaptchaVerified(response) {
      console.log(response);
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {},
    recaptchaError(reason) {
      console.log(reason);
    },
  },
};
</script>

<style scoped>
.err {
  color: indianred;
  font-size: 11px;
  font-weight: bold;
}
.danger {
  border: 1px solid indianred;
}

@media (min-width: 991px) {
  .inquires {
    display: flex;
  }
}
</style>
