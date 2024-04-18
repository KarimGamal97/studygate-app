<template>
  <section class="contact__area pt-115 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12">
          <div class="contact__wrapper">
            <div class="section__title-wrapper mb-40">
              <h2 class="section__title">
                Sign up for more
                <span
                  class="yellow-bg yellow-bg-big"
                  style="text-transform: lowercase"
                >
                  information<img
                    src="../../assets/img/shape/yellow-bg.png"
                    alt=""
                /></span>
              </h2>
              <p>
                Please complete the form below to receive specialized course
                information from our advisors.
              </p>
            </div>
            <div class="contact__form">
              <form @submit.prevent="validateForm">
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="text"
                        placeholder="Your Name"
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
                        placeholder="Email"
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
                        placeholder="mobile number with country code"
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
                  <div
                    class="col-xxl-6 col-xl-6 col-md-6"
                    style="visibility: hidden"
                  >
                    <div class="contact__form-input">
                      <input
                        type="text"
                        placeholder="Country"
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
                  <div class="col-xxl-6 col-xl-6 col-md-6 my-3">
                    <h3 style="font-size: 20px">Intended Country of study</h3>
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
                        <option value="uk">UNITED KINGDOM</option>
                        <option value="ireland">IRELAND</option>
                        <option value="newzeland">NEW ZEALAND</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6 my-3">
                    <h3 style="font-size: 20px">Degree of interest</h3>
                    <div class="input-group">
                      <select
                        class="form-select py-3"
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                        v-model="degree"
                        @input="v$.degree.$touch()"
                        :class="[
                          `${
                            v$.$errors.find((err) => err.$property == 'degree')
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      >
                        <option value="masterdata">
                          Masters in Data Analytics / Data Science/ AI
                        </option>
                        <option value="mba">MBA</option>
                        <option value="phdcomputing">PhD Computing</option>
                        <option value="phbbusiness">PhD Business</option>
                        <option value="mrescomp">
                          Master by Research MRes (Computing/Business)
                        </option>
                        <option value="mreshealth">
                          Master by Research MRes (Health-Psychology)
                        </option>
                        <option value="shortcourses">
                          Short Courses in AI/Data Analytics
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xxl-7">
                    <div
                      class="contact__form-agree d-flex align-items-center my-10 gap-2"
                    >
                      <p>
                        Your details will be used to supply the information you
                        requested and in accordance with our
                        <a style="color: #0056ad" href="terms-of-use">Terms </a
                        >&
                        <a style="color: #0056ad" href="/data-privacy">
                          Privacy Polices</a
                        >
                      </p>
                    </div>
                  </div>
                  <div class="col-xxl-7 d-flex gap-3 mb-3">
                    <input
                      class="e-check-input big-checkbox"
                      type="checkbox"
                      id="e-agree"
                      width="50px"
                    />
                    <label class="e-check-label" for="e-agree"
                      >From time to time University of Leeds would like to send
                      you information about further courses and events which we
                      think might interest you. You can opt-out of receiving
                      this information at any time using links provided in our
                      communications. Tick the box if you want to receive this
                      information.
                    </label>
                  </div>

                  <!-- Captcha -->
                  <vue-recaptcha
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
                    class="mb-20"
                  >
                  </vue-recaptcha>
                  <!-- Captcha -->
                  <div class="col-xxl-12">
                    <div class="contact__btn">
                      <button type="submit" class="e-btn">Send</button>
                    </div>
                  </div>
                </div>
              </form>
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
      username: "",
      email: "",
      phone: "",

      country: "",
      degree: "",
      showRecaptcha: true,
      loadingTimeout: 30000,
    };
  },
  validations() {
    return {
      username: {
        required: helpers.withMessage("", required),
        minLength: minLength(3),
        maxLength: maxLength(15),
        alpha,
      },
      email: { required: helpers.withMessage("", required), email },
      country: { required },
      degree: { required },
      phone: { required: helpers.withMessage("", required) },
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
.big-checkbox {
  width: 65px;
  height: 65px;
}
</style>
