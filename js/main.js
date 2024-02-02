/// <reference types="../@types/jquery" />

async function data(){
  let resonse = await  fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=04624bb046927b9b57858778b8fbfc20')
  let resonse2 = await resonse.json()
  let finalResponse = resonse2.results
  
  cartona = ``

  for (let i = 0; i < finalResponse.length; i++) {
    
    cartona += `
    <div class="col-md-3 p-3">
    <div class="item card">
        <img src="https://image.tmdb.org/t/p/w500${finalResponse[i].poster_path}" class="card-img">
        
        <div class="card-body">
        <h4>${finalResponse[i].title}</h4>
            <p>${finalResponse[i].overview}</p>
        </div>
    </div>
</div>
    
    
    `
  
    
  }

  document.querySelector('.row').innerHTML = cartona

  $("img").on("click", function(e){
    $(e.target).next().children('p').slideToggle()
  })
  $("h4").on("click", function(e){
    $(e.target).next('p').slideToggle()
  })
}





data()


