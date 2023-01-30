import sendRequest from './send-request'

const BASE_URL= '/api/results'

export function getAllResults(){
    return sendRequest(BASE_URL)
}

export function createResult(resultData){
    return sendRequest(`${BASE_URL}`, 'POST', resultData)
}
