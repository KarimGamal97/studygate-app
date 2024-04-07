<template>
  <div class="container mt-50 mb-50">
    <div class="content">
      <div class="meeting-form">
        <form>
          <label for="meetingTitle">Meeting Title:</label>
          <input type="text" id="meetingTitle" name="meetingTitle" required />

          <label for="participantName">Your Name:</label>
          <input
            type="text"
            id="participantName"
            name="participantName"
            required
          />
          <label for="meetingDate">Meeting Date:</label>
          <input type="date" id="meetingDate" name="meetingDate" required />

          <label for="meetingTime">Meeting Time:</label>
          <input type="time" id="meetingTime" name="meetingTime" required />

          <button type="submit">Start Meeting</button>
        </form>
      </div>
      <div class="meeting-list">
        <h2>Your Upcoming Meetings</h2>
        <ul>
          <li>Meeting 1: Project Discussion - June 15, 2023, 10:00 AM</li>
          <li>Meeting 2: Training Session - June 18, 2023, 3:30 PM</li>
        </ul>
      </div>
      <div class="functionality-buttons">
        <button>Join Meeting</button>
        <button>Access Recordings</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.meeting-form input[type="time"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
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
