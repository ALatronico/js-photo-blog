const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=";

const limit = 6;
axios.get(endpoint + limit)
.then(response => {
  let i=0;
  if(response.status === 200){
    document.querySelector('.row').innerHTML = ''
    response.data.forEach(foto => printCard(foto))
  }
})


function printCard(foto){
  const {title, url} = foto;
  return document.querySelector('.row').innerHTML += `
  <div class="col">
          <div class="card p-3 my-1">
            <img src="assets/img/pin.svg" alt="Pin rosso">
            <img src="${url}" class="card-img-top" alt="Placeholder">
            <div class="card-body py-1">
              <p class="card-text">
                ${title}
              </p>
            </div>
          </div>
        </div>`
}
