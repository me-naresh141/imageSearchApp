let imageDiv = document.querySelector('.image-div')
let input = document.querySelector('input')

let xhr = new XMLHttpRequest()
xhr.open(
  `GET`,
  'https://api.unsplash.com/search/photos?query=girls;client_id=lUwDTtlX5SkXWf3tda4Ql_dMoiPY-mTixVqN5ZT89xM',
)
xhr.onload = function () {
  let app = JSON.parse(xhr.response).results
  for (let obj of app) {
    let allImage = document.createElement('img')
    allImage.src = obj.urls.full
    imageDiv.append(allImage)
  }
}
xhr.send()

// handleInput
function handleInput(e) {
  if (e.keyCode === 13) {
    imageDiv.innerHTML = ''
    let xhr2 = new XMLHttpRequest()
    xhr2.open(
      `GET`,
      `https://api.unsplash.com/search/photos?query=${input.value};client_id=lUwDTtlX5SkXWf3tda4Ql_dMoiPY-mTixVqN5ZT89xM`,
    )
    xhr2.onload = function () {
      let app2 = JSON.parse(xhr2.response).results
      for (let obj of app2) {
        let allImage = document.createElement('img')
        allImage.src = obj.urls.full
        imageDiv.append(allImage)
      }
    }
    xhr2.send()
    input.value = ''
  }
}

input.addEventListener('keyup', handleInput)
