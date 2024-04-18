<template>
  <div class="container mt-50 mb-50">
    <div class="content">
      <div class="meeting-form">
        <form @submit.prevent="validateForm">
          <!-- MeetingTitle -->
          <div>
            <label for="meetingTitle">Meeting Title</label>
            <input
              type="text"
              id="meetingTitle"
              name="meetingTitle"
              v-model="meetingTitle"
              @input="v$.meetingTitle.$touch()"
              :class="[
                `${
                  v$.$errors.find((err) => err.$property == 'meetingTitle')
                    ? 'danger'
                    : ''
                }`,
              ]"
            />
            <span v-for="err in v$.$errors" :key="err.$uid">
              <span class="err" v-if="err.$property == 'meetingTitle'">
                {{ err.$message }}
              </span>
            </span>
          </div>
          <!-- meetingDetails -->
          <div>
            <label for="meetingDetails">Meeting Details</label>
            <textarea
              name="meetingDetails"
              rows="5"
              maxlength="255"
              v-model="meetingDetails"
              @input="v$.meetingDetails.$touch()"
              :class="[
                `${
                  v$.$errors.find((err) => err.$property == 'meetingDetails')
                    ? 'danger'
                    : ''
                }`,
              ]"
            ></textarea>
            <span v-for="err in v$.$errors" :key="err.$uid">
              <span class="err" v-if="err.$property == 'meetingDetails'">
                {{ err.$message }}
              </span>
            </span>
          </div>
          <!-- Name -->
          <div>
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              @input="v$.name.$touch()"
              :class="[
                `${
                  v$.$errors.find((err) => err.$property == 'name')
                    ? 'danger'
                    : ''
                }`,
              ]"
            />
            <span v-for="err in v$.$errors" :key="err.$uid">
              <span class="err" v-if="err.$property == 'name'">
                {{ err.$message }}
              </span>
            </span>
          </div>
          <!-- MeetingDate -->
          <div>
            <label for="meetingDate">Meeting Date</label>
            <input
              type="date"
              id="meetingDate"
              name="meetingDate"
              v-model="meetingDate"
              @input="v$.meetingDate.$touch()"
              :class="[
                `${
                  v$.$errors.find((err) => err.$property == 'meetingDate')
                    ? 'danger'
                    : ''
                }`,
              ]"
            />
          </div>
          <!-- MeetinTime -->
          <div>
            <label for="meetingTime">Meeting Time</label>
            <input
              type="time"
              id="meetingTime"
              name="meetingTime"
              v-model="meetingTime"
              @input="v$.meetingTime.$touch()"
              :class="[
                `${
                  v$.$errors.find((err) => err.$property == 'meetingTime')
                    ? 'danger'
                    : ''
                }`,
              ]"
            />
          </div>
          <!-- Email -->
          <div>
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
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
          >
          </vue-recaptcha>
          <!-- Captcha -->
          <button type="submit" class="mt-3">Send</button>
        </form>
      </div>
    </div>
  </div>
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
      name: "",
      email: "",
      meetingDate: "",
      meetingTime: "",
      meetingTitle: "",
      meetingDetails: "",
      showRecaptcha: true,
      loadingTimeout: 30000,
    };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("", required),
        minLength: minLength(3),
        maxLength: maxLength(15),
        alpha,
      },
      email: {
        required: helpers.withMessage("", required),
        email,
      },
      meetingTitle: { required: helpers.withMessage("", required) },
      meetingTime: { required },
      meetingDate: { required },
      meetingDetails: {
        minLength: minLength(20),
        maxLength: maxLength(500),
        required: helpers.withMessage(
          "Your meeting details must be at least 20 Characters",
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
  color: indianred !important;
  font-size: 11px;
  font-weight: bold;
}
.danger {
  border: 1px solid indianred !important;
}

body {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Container Styles */
.container {
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 1;
}

/* Meeting Form Styles */
.meeting-form {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
}

.meeting-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.meeting-form input[type="text"],
.meeting-form input[type="date"],
.meeting-form input[type="time"],
.meeting-form input[type="email"],
.meeting-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.meeting-form textarea {
  resize: none;
}
.meeting-form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.meeting-form button:hover {
  background-color: #0056b3;
}

/* Meeting List Styles */
.meeting-list {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin-top: 30px;
}

.meeting-list h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.meeting-list ul {
  list-style: none;
  padding: 0;
}

.meeting-list li {
  font-size: 16px;
  margin-bottom: 10px;
}

/* Functionality Buttons */
.functionality-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.functionality-buttons button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.functionality-buttons button:hover {
  background-color: #0056b3;
}
</style>
