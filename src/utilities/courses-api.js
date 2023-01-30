import sendRequest from './send-request'

const BASE_URL= '/api/courses'

export function getAllCourses(){
    return sendRequest(BASE_URL)
}

export function createCourse(courseData){
    return sendRequest(`${BASE_URL}`, 'POST', courseData)
}
