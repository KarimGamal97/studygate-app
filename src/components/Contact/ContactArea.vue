<template>
  <section class="contact__area pt-115 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-7 col-xl-7 col-lg-6">
          <div class="contact__wrapper">
            <div class="section__title-wrapper mb-40">
              <h2 class="section__title">
                Get in<span class="yellow-bg yellow-bg-big"
                  >touch<img src="../../assets/img/shape/yellow-bg.png" alt=""
                /></span>
              </h2>
              <p>
                Have a question or just want to say hi? We'd love to hear from
                you.
              </p>
            </div>
            <div class="contact__form">
              <form @submit.prevent="validateForm">
                <div class="row">
                  <div class="errors-list">
                    <div class="error text-center" v-if="usernameError">
                      {{ usernameError }}
                    </div>
                    <div class="error text-center" v-if="emailError">
                      {{ emailError }}
                    </div>
                    <div class="error text-center" v-if="phoneError">
                      {{ phoneError }}
                    </div>
                    <div class="error text-center" v-if="cityError">
                      {{ cityError }}
                    </div>
                    <div class="error text-center" v-if="selectedError">
                      {{ selectedError }}
                    </div>
                    <div class="error text-center" v-if="textAreaError">
                      {{ textAreaError }}
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        v-model="username"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="email"
                        placeholder="Email Id"
                        name="email"
                        v-model="email"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        v-model="phone"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        v-model="city"
                      />
                    </div>
                  </div>
                  <h3>Queries for</h3>
                  <div class="d-flex col-xxl-12 col-xl-12 col-md-12 mb-3">
                    <div class="col-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Master Degree"
                          id="masterDegree"
                          v-model="selectedOptions"
                        />
                        <label class="form-check-label ms-2" for="masterDegree">
                          Master Degree
                        </label>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="MBA"
                          id="MBA"
                          v-model="selectedOptions"
                        />
                        <label class="form-check-label ms-2" for="MBA">
                          MBA
                        </label>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="msResearch"
                          id="MS Research"
                          v-model="selectedOptions"
                        />
                        <label class="form-check-label ms-2" for="msResearch">
                          MS Research
                        </label>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="PHD"
                          id="PHD"
                          v-model="selectedOptions"
                        />
                        <label class="form-check-label ms-2" for="PHD">
                          PHD
                        </label>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Training"
                          id="Training"
                          v-model="selectedOptions"
                        />
                        <label class="form-check-label ms-2" for="Training">
                          Training
                        </label>
                      </div>
                    </div>
                  </div>
                  <h3>Destination Country</h3>
                  <div class="col-xxl-12 my-3">
                    <div class="input-group">
                      <select
                        class="form-select py-3"
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                      >
                        <option selected="uk">UNITED KINGDOM</option>
                        <option value="nez">NEW ZEALAND</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="contact__form-input">
                      <textarea
                        placeholder="Enter Your Message"
                        name="message"
                        v-model="textArea"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div
                      class="contact__form-agree d-flex align-items-center mb-20"
                    >
                      <input
                        type="checkbox"
                        id="robotCheckbox"
                        v-model="isChecked"
                        @change="validateCheckbox"
                      />
                      <label for="robotCheckbox">I am not a robot</label>
                      <span
                        v-if="!isValid"
                        style="color: red; margin-left: 15px"
                        >Please confirm that you are not a robot.</span
                      >
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div
                      class="contact__form-agree d-flex align-items-center mb-20"
                    >
                      <input
                        class="e-check-input"
                        type="checkbox"
                        id="e-agree"
                      />
                      <label class="e-check-label" for="e-agree"
                        >I agree to the<a href="terms-of-use">Terms </a>&<a
                          href="/data-privacy"
                          >Privacy Polices</a
                        ></label
                      >
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="contact__btn">
                      <button type="submit" class="e-btn">
                        Send your message
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
                      <h4>New York Office</h4>
                      <p>
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                          >Maypole Crescent 70-80 Upper St Norwich NR2 1LT</a
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
                      <h4>Email us directly</h4>
                      <p>
                        <a href="mailto:support@educal.com"
                          >support@educal.com</a
                        >
                      </p>
                      <p>
                        <a href="mailto:info@educal.com"> info@educal.com</a>
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
                      <h4>Phone</h4>
                      <p><a href="tel:+(426)-742-26-44">+(426) 742 26 44</a></p>
                      <p>
                        <a href="tel:+(224)-762-442-32">+(224) 762 442 32</a>
                      </p>
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
export default {
  data() {
    return {
      formErrors: [],

      username: null,
      usernameError: null,
      emailError: null,
      phoneError: null,
      cityError: null,
      email: null,
      textAreaError: null,
      city: null,
      phone: null,
      maxChars: 12,
      selectedOptions: [],
      selectedError: null,
      hasSelection: true,
      textArea: null,
    };
  },

  methods: {
    // validateForm() {
    //   if (!this.username) {
    //     this.formErrors.push("Username is required");
    //   } else if (!/^[a-zA-Z]+$/.test(this.username)) {
    //     this.formErrors.push("Username must contain only letters");
    //   }
    //   if (!this.email) {
    //     this.formErrors.push("Email is required");
    //   } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
    //     this.formErrors.push("Email is must be valid");
    //   }
    //   if (!this.phone) {
    //     this.formErrors.push("Phone is required");
    //   } else if (!/^\d{1,16}$/.test(this.phone)) {
    //     this.formErrors.push("Phone must be a number with at least 16 digits");
    //   }
    //   if (!this.city) {
    //     this.formErrors.push("City is required");
    //   }
    //   if (this.username && this.username.length > this.maxChars) {
    //     this.formErrors.push(
    //       `Username must be at most ${this.maxChars} characters`
    //     );
    //   }
    //   return this.formErrors.length === 0;
    // },

    validateForm() {
      if (!this.username) {
        this.usernameError = "Username is required";
      } else if (this.username.length < 8 || this.username.length > 16) {
        this.usernameError = "Username must be between  8 and 16 characters";
      } else {
        this.usernameError = "";
      }

      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(this.email)) {
        this.emailError = "Invalid email format";
      } else {
        this.emailError = "";
      }

      if (!this.phone) {
        this.phoneError = "phone is required";
      } else if (this.phone.length < 8 || this.phone.length > 16) {
        this.phoneError = "Username must be between  8 and 16 characters";
      } else {
        this.phoneError = "";
      }
      if (!this.city) {
        this.cityError = "city is required";
      } else if (this.city.length < 4 || this.city.length > 16) {
        this.cityError = "city must be between  4 and 16 characters";
      } else {
        this.cityError = "";
      }

      if (this.textArea.length < 20) {
        this.textAreaError = "Your message must be more than 20 character!";
      }

      // if (this.selectedOptions.length == 0) {
      //   this.selectedError == "error";
      // } else {
      //   this.selectedError = "";
      // }
    },
  },
  computed: {
    isAtLeastOneSelected() {
      return this.selectedOptions.length > 0;
    },
  },
};
</script>
<style scoped>
.errors-list .error {
  padding: 15px;
  background-color: rgba(244, 67, 54, 0.14);
  color: #f44336;
  margin-bottom: 15px;
}
</style>
