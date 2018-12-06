export default function addUser () {
  const data = {
    name: 'morpheus',
    job: 'leader'
  }
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(response => {
      return response.json()
    })
    .then(responseBody => {
      console.log(responseBody)
    })
    .catch(error => {
      console.log(error)
    })
}
