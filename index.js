let pagina= 1;
let url

const cargarpelis = async() => {   // funcion flecha para carcar peliulas al abrir la pagina

    try{
        let respuesta = await fetch(url); // fetch hace una peticion y guardamos la respuesta (promesa) en una variable 

        console.log(respuesta);

        //accedemos a la informacion 
        if(respuesta.status === 200){ // 200 codigo respuesta correcta
            let data = await respuesta.json();

            let pelicula="";
            data.results.forEach(peli => {       //por cada pelicula del array de results me ejecutas: 

                pelicula += `
                <div class="card" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w500/${peli.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${peli.title}</h5>
                        <p class="overview">${peli.overview}</p>
                        <p class="card-text">Date: ${peli.release_date}</p>
                        <p class="card-text">Original language: ${peli.original_language}</p>
                        <p class="card-text">Puntuatión: ${peli.vote_average}</p>
                    </div>
                </div>`

            });

            document.getElementById("contenedor").innerHTML = pelicula; 
            document.getElementById("inicio").style.display = "none";

          
        }else{
            console.log("Pelicula no encontrada")
        }


    }catch(error){  // Error en la peticion Fetch
        console.log(error);
    }


} 

let popular = document.getElementById('popular')
popular.addEventListener('click',() =>{

     url = `https://api.themoviedb.org/3/movie/popular?api_key=e01fcc0e01b3bc90653938f13565cf4b&page=${pagina}`;

    cargarpelis();

    document.getElementById('inicio').style.visibility = 'hidden';
})

let topRated = document.getElementById('topRated');
topRated.addEventListener('click',() =>{

     url = `https://api.themoviedb.org/3/movie/top_rated?api_key=e01fcc0e01b3bc90653938f13565cf4b&page=${pagina}`;
    
    cargarpelis();

})

let upcoming = document.getElementById('upcoming');
upcoming.addEventListener('click',() =>{

     url = `https://api.themoviedb.org/3/movie/upcoming?api_key=e01fcc0e01b3bc90653938f13565cf4b&page=${pagina}`
    
    cargarpelis();

})

let home = document.getElementById('home');
home.addEventListener('click',() => {

    window.location.reload()
    // document.getElementById("inicio").style.display = "inicio";

})

btnBuscar.addEventListener('click',() =>{
    let buscar = document.getElementById("buscar").value;
     url = `https://api.themoviedb.org/3/search/movie?api_key=e01fcc0e01b3bc90653938f13565cf4b&query=${buscar}`;

     cargarpelis();
    
})

