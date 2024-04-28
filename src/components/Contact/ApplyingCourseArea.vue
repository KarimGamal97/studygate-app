<template>
  <section class="contact__area pt-115 pb-120">
    <div class="container">
      <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <div class="col-xxl-12 col-xl-12 col-lg-12">
          <div class="contact__wrapper">
            <div class="section__title-wrapper mb-40">
              <h2 class="section__title">
                {{ $t("Sign up for more") }}
                <span
                  class="yellow-bg yellow-bg-big"
                  style="text-transform: lowercase"
                >
                  {{ $t("information")
                  }}<img src="../../assets/img/shape/yellow-bg.png" alt=""
                /></span>
              </h2>
              <p>
                {{
                  $t(
                    "Please complete the form below to receive specialized course information from our advisors."
                  )
                }}
              </p>
            </div>
            <div class="contact__form meeting-form">
              <form @submit.prevent="validateForm">
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
                        type="text"
                        :placeholder="$t('Your Name')"
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
                  <div class="col-xxl-4 col-xl-5 col-md-5 my-3">
                    <h3 style="font-size: 18px">
                      {{ $t("Intended country of study") }}
                    </h3>
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
                        <option value="uk">{{ $t("UNITED KINGDOM") }}</option>
                        <option value="ireland">{{ $t("IRELAND") }}</option>
                        <option value="newzeland">
                          {{ $t("NEW ZEALAND") }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-5 col-md-5 my-3">
                    <h3 style="font-size: 18px">
                      {{ $t("Degree of interest") }}
                    </h3>
                    <div class="input-group">
                      <select
                        class="form-select py-3"
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                        v-model="selectedOption"
                        @input="v$.selectedOption.$touch()"
                        :class="[
                          `${
                            v$.$errors.find(
                              (err) => err.$property == 'selectedOption'
                            )
                              ? 'danger'
                              : ''
                          }`,
                        ]"
                      >
                        <option
                          v-for="option in options"
                          :key="option.value"
                          :value="option.value"
                        >
                          {{ option.value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xxl-4 my-3">
                    <div class="contact__form-input" style="margin-top: 32px">
                      <input
                        type="text"
                        v-if="selectedOption === 'Other'"
                        v-model="otherText"
                        placeholder="Course Name"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-6">
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
                  <div class="col-xxl-7 d-flex gap-3 mb-3">
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
      selectedOption: "",
      otherText: "",
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
      selectedOption: { required },
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
  computed: {
    options() {
      return [
        { value: "Masters in Data Analytics / Data Science/ AI" },
        { value: "MBA" },
        { value: "PhD Computing" },
        { value: "PhD Business" },
        { value: " Master by Research MRes (Computing/Business)" },
        { value: "Master by Research MRes (Health-Psychology)" },
        { value: "Short Courses in AI/Data Analytics" },
        { value: "Other" },
      ];
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
.meeting-form {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
}
.container {
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px 30px;
}
</style>
