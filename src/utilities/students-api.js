import sendRequest from "./send-request";

const BASE_URL = "/api/students";

export function getAllStudents() {
  return sendRequest(BASE_URL);
}

export function createStudent(studentData) {
  return sendRequest(`${BASE_URL}`, "POST", studentData);
}
