

$('.srcBtn').on('click',function(){
	let srcBar = document.getElementById('srcBar').value
	$.ajax({

	url : `http://www.omdbapi.com/?s=${srcBar}&apikey=ecc908d4`,
	error : function(e){
		console.log(e.responseText)
	},

	success : function(m){
		let results = m.Search
		let cards = ''
		let iterate = 0
		results.forEach(m => {
	
			cards = cards + `<div class="col-md-3 my-4">
      <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <button type="button" class="btn btn-primary btnCls" data-bs-toggle="modal" data-target-id='${m.imdbID}' data-bs-target="#staticBackdrop">Details</button>
        </div>
      </div>
    </div>`
  		
		})
    	$('.movie-cont').html(cards)

    	$('.btnCls').on('click',function(){
				let movieid = $(this).data('target-id')
				$.ajax({
					url: 'http://www.omdbapi.com/?apikey=ecc908d4&i='+ movieid,
					error: function(e){
						console.log(e.responseText)
					},
					success: function(i){
						console.log(i.Poster)
						let movieDetail = `  <div class="container-fluid">
          <div class="row">
            <div class="col-md-7">
              <img class="img-fluid" src="${i.Poster}" >
            </div>
            
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item">Title : ${i.Title}</li>
                <li class="list-group-item">Released : ${i.Released}</h4></li>
                <li class="list-group-item">Genre : ${i.Genre}</li>
                <li class="list-group-item">Director : ${i.Director}</li>
                <li class="list-group-item">Actor :${i.Actors}</li>
                <li class="list-group-item">Plot :${i.Plot}</li>
              </ul>
            </div>
              
            </div>
          </div>
        </div>`
        $('.modal-body').html(movieDetail)
					}



				})
			})

	


	}

})


})

	

	