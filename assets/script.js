const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=";
const limit = 6;

const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');
const closeButton = document.getElementById('closeButton');
const html = document.querySelector('html');

axios.get(endpoint + limit)
.then(response => {
  let i = 0;
  if(response.status === 200){
    document.querySelector('.row').innerHTML = ''
    response.data.forEach(foto => printCard(foto))

    /*
    **Milestone 2**
  Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il `display: none` .
  Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
  Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
    */
   
    const album = document.querySelectorAll('div.card');
    for (let card of album){
      card.addEventListener('click', (e) => {
        overlay.classList.toggle('d-none')
        overlayImg.src = e.target.src
        html.classList.add('overflow-hidden')
      })
    }
  }
})

closeButton.addEventListener('click', (e) => {
  overlay.classList.toggle('d-none')
  html.classList.toggle('overflow-hidden')
})


function printCard(foto){
  const {title, url} = foto;
  return document.querySelector('.row').innerHTML += 
      `<div class="col">
          <div class="card p-3 my-1">
            <img src="assets/img/pin.svg" alt="Pin rosso">
            <img src="${url}" class="card-img-top" alt="Placeholder">
            <div class="card-body py-1">
              <p class="card-text">
                ${title[0].toUpperCase() + title.substring(1)}
              </p>
            </div>
          </div>
        </div>`
}
