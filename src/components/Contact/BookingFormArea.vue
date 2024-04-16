<template>
  <div class="container mt-50 mb-50">
    <div class="content">
      <div class="meeting-form">
        <div class="row">
          <div class="errors-list">
            <div
              v-if="formErrors.length > 0"
              class="error text-center mt-2 pt-3"
            >
              <p>Please fix the following errors:</p>
              <ul>
                <li
                  class="mt-2 pt-3"
                  v-for="(error, index) in formErrors"
                  :key="index"
                >
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form @submit.prevent="validateForm">
          <label for="meetingTitle">Meeting Details</label>
          <textarea
            id="meetingTitle"
            name="meetingTitle"
            v-model="meetingTitle"
            rows="5"
            maxlength="255"
            @input="clearErrors"
          ></textarea>
          <label for="participantName">Your Name</label>
          <input
            type="text"
            id="participantName"
            name="participantName"
            v-model="participantName"
            @input="clearErrors"
          />
          <label for="meetingDate">Meeting Date</label>
          <input
            type="date"
            id="meetingDate"
            name="meetingDate"
            v-model="meetingDate"
            @input="clearErrors"
          />

          <label for="meetingTime">Meeting Time</label>
          <input
            type="time"
            id="meetingTime"
            name="meetingTime"
            v-model="meetingTime"
            @input="clearErrors"
          />

          <label for="participantName">Your Email</label>
          <input
            type="email"
            id="participantEmail"
            name="participantEmail"
            v-model="participantEmail"
            @input="clearErrors"
          />

          <button :disabled="formErrors.length > 0" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meetingTitle: "",
      participantName: "",
      meetingDate: "",
      meetingTime: "",
      participantEmail: "",
      formErrors: [],
    };
  },
  methods: {
    validateForm() {
      this.formErrors = [];

      if (!this.meetingTitle) {
        this.formErrors.push("Meeting Title is required");
      }
      if (!this.participantName) {
        this.formErrors.push("Your Name is required");
      }
      if (!this.meetingDate) {
        this.formErrors.push("Meeting Date is required");
      }
      if (!this.meetingTime) {
        this.formErrors.push("Meeting Time is required");
      }
      if (!this.participantEmail) {
        this.formErrors.push("Your Email is required");
      }
      if (this.formErrors.length === 0) {
        this.submitForm();
      }
    },
    submitForm() {
      console.log("Form submitted!");
      this.formErrors = [];
    },
    clearErrors() {
      this.formErrors = [];
    },
  },
};
</script>

<style scoped>
/* Reset some default styles */
body,
h1,
h2,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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

/* Header Styles */
header {
  background-color: #007bff;
  color: #fff;
  text-align: center;
  padding: 40px 0;
}

header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

header p {
  font-size: 18px;
  margin-bottom: 20px;
}

/* Content Styles */
.content {
  padding: 40px;
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
<style scoped>
.errors-list .error {
  padding: 15px;
  background-color: rgba(244, 67, 54, 0.14);
  color: #f44336;
  margin-bottom: 15px;
}
</style>
