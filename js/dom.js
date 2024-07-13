
const container = document.querySelector ("div.container")
const carritor = document.querySelector ("div.prodcarr")
var carrito = 0
const carritoCompra = []
const valor = []
const numeroiconocarrito = document.querySelector ("div.numerosobrecanasta")
const inputs = document.querySelector ("div.inputs")
const tarjetas = document.querySelectorAll ("div.tarjetaproducto")
const anadirboton = document.querySelector ("#botonanadir")
var botonpresione = 0
var cantidad = 0
var numeroArticuloCarrito = 0
var seccionprodu =[]
var contenido= 0
var sobreconte=0
var inputFiltrar= document.querySelector ("#buscar")
var busquedafiltro = 0
var oferta=0 
var ofertarior=0
var cargaoferta=0
var banderaprods=0


const productos = [
    {id: 001, image: "images/medialuna.jpg", nombre: "Medialunas dulces", precio: 50 , carrito:"medialuna", hashtag: "Factura, Medialuna", descripcion:"Producto 100% artesanal", oferta: 1},
    {id: 002, image: "images/medialunasal.jpg", nombre: "Medialunas saladas", precio: 50 , carrito:"medialunasalada",hashtag: "Factura, Medialuna", descripcion:"Producto 100% artesanal", oferta: 1},
    {id: 003, image: "images/medialunasdulce.jpg", nombre: "Medialunas dulce de leche", precio: 55 , carrito:"medialunadulce",hashtag: "Factura, Medialuna", descripcion:"Producto 100% artesanal", oferta: 0},
    {id: 004, image: "images/tortilladelgada.jpg", nombre: "Tortillas delgadas", precio: 35, carrito:"tortillaflaca",hashtag: "Tortilla, Bollo,", descripcion:"Horneado a leña", oferta: 1},
    {id: 100, image: "images/vino3.jpg", nombre: "Vino maimará", precio: 935, carrito:"Vino maimará",hashtag: "Vino, Alcohol, Malbec", descripcion:"Vino de Bilbao", oferta:1},
    {id: 101, image: "images/vino2.jpg", nombre: "Vino Guasí", precio: 950, carrito:"Vino Guasí",hashtag: "Vino, Alcohol, Malbec", descripcion:"Vino de la Rioja", oferta: 0},
    {id: 201, image: "images/lechedes.jpg", nombre: "Leche Descremada", precio: 1100, carrito:"Leche Descremada La Serenisima",hashtag: "Leche", descripcion:"Leche Descremada", oferta: 0},
    {id: 202, image: "images/lechenpol.jpg", nombre: "Leche en Polvo", precio: 1500, carrito:"Leche en polvo La Serenisima",hashtag: "Leche", descripcion:"Leche en Polvo", oferta: 1},
    {id: 203, image: "images/lechent.jpg", nombre: "Leche Entera", precio: 1500, carrito:"Leche entera La Serenisima",hashtag: "Leche", descripcion:"Leche Entera", oferta: 1}
]




function cargarencontrado (resultadoBusqueda){ debugger
    const encontrados= resultadoBusqueda
    if (busquedafiltro ==1){
        hayproducto ()}
        if (busquedafiltro ==2){
        borrarcontainer()
        sacarenvios ()};
        for (en of encontrados) { 
            /*hacer una bandera que se levante cuando se haya hecho una busqueda para porque parte bien desde el inicio nomas*/
            contenido=1;
            container.innerHTML += crearCardHTML(en)
            sobreconte=1
            descucharTarjetas ()
            escucharTarjetas ()
        clickEnTarjeta ()}
        alert("encontramos algo")
        cargaoferta=0;
        banderaprods=1;
        }


function buscarofertas () { debugger
    if (cargaoferta==0){
    var ofertariora = document.getElementById ("ofertosa")
    ofertariora.innerHTML= Cardbaner();
    if (cargaoferta==0) {
    for (produ of productos) {
        if (produ.oferta==1) {
            crearCardOFERTA (produ) 
        } }}}
        cargaoferta=1;
        
}

function crearCardOFERTA (produ) {
    oferta=1 ;
    const ofertosa= document.getElementById ("ofertosa") 
    ofertosa.innerHTML += crearOfertar()
    const ofertario = document.querySelector ("div.ofertario")
    ofertario.innerHTML += Cardoferta(produ)  //tengo que englobar en el flex none del div que haga desaparecer al cambiar la opcion
}

function crearOfertar(){
    return `<div class="ofertario"></div> `
}

//****corregir que cada vez que carga inicio suma una oferta mas , tambien se ponen abajo las ofertas y despues arriba se soluciona sacando oferta.remove ()*****


function Cardbaner() {
    return `<div> <img src="images/baner.jpg" alt=""></div>`
} 

function escuchartarjetaoferta(a) { debugger
    var fondo = document.getElementsByClassName("body") [0]
    document.getElementById('pancomplet').style.display="block";
    /*borroso (fondo)*/
    for (prod of productos) {
        if (a==prod.id) {
            inputs.innerHTML = `<div class="tarjetacanti"> <div onclick="quitarinput ()">eoo <div> Cuánto de ${prod.nombre} quieres? <div class= "cardImage"><img src=${prod.image}></div>
    </div></div> <div><input id="input" name=${prod.nombre}></div>
   <div><button id="botonanadir" onclick="cambiar(${prod.id})"> Añadir al carrito </button></div></div>`
        }
    } 

}



function Cardoferta(producto) { debugger
    return `<div id="${producto.id}" class="card" style="width: 18rem;">
    <div class="ofertacartel"> 
    <img src="images/oferta.png" alt="">
        </div>
    <img src="${producto.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5> 
      <p class="card-text"> $ ${producto.precio}</p>
      <a href="#" class="btn btn-primary" onclick="escuchartarjetaoferta(${producto.id})" >Añadir al carrito</a>
    </div>
  </div>
    `
}


function crearCardHTML (producto) { debugger
    seccionprodu.push (producto.id);
    busquedafiltro=1;
    return `<div class="tarjetaproducto" id="${producto.id}">
    <div><h1>${producto.nombre}</h1></div>
    <div class="card-title"><p>${producto.precio} pesos c/u </p></div>
    <div class= "cardImage"><img src=${producto.image}></div>
    </div>`
    }


function leerCantidad (carrito) { debugger
    const input = document.querySelector ('#input');
             let valo = input.value

                 valor.push= valo
            /*carritor.innerHTML+= sumarUnidades (valor)*/ }

function irainicio() { debugger
    const tarjetao = document.querySelectorAll ("div.tarjetaproducto");
    const contes =document.querySelectorAll ("div.contenido");
    busquedafiltro = 1
    for (tar of tarjetao) {
        tar.remove() };
    if (contenido==1) {
        for (con of contes){
            con.remove()}}
    if (sobreconte==1){
        ofertarior=1
        for (con of contes){
            con.remove()}}
           sobreconte=1 
        contenido= 0
    
    if(banderaprods==1){
            cargaoferta=0
            document.getElementById ('ofertosa').style.display= "flex";
        }
    
   paginaPrincipal()
   banderaprods=0
}


function crearTarjetaCarrito (carrito) { debugger
    for (producto of productos) {
        if (producto.id==carrito) {
            return `<div id="articuloCarri" class="${numeroArticuloCarrito}" ><h1>${producto.nombre} ${valor.push} unidades 
             <button onclick=eliminarArticulo(${numeroArticuloCarrito}) id="tachito" class="${numeroArticuloCarrito}"> <img class="tachito" src="images/tacho.png" alt="">eliminar</button> </h1> </div>`
            }}}

function sumarUnidades (valor) {
    return `<div><h1>  ${valor}  </h1></div>`}

function cambiar (carrito){debugger
    botonpresione= 1;
    escucharBoton (carrito,botonpresione)
    document.getElementById('pancomplet').style.display="none";
}

/*function numeroCanastita () {
    numeroiconocarrito.innerHTML=0}*/

/*function activarInput () { 
    const input= document.querySelectorAll ("input")
    for (let inp of input) {inp.addEventListener ("click", (e)=>
    e.preventDefault()) 
    return }}*/

function borroso (fondo) {
        fondo.style.opacity='20%'
    }

function quitarinput () { debugger
    const fondo = document.getElementsByClassName("container") [0] ;
    const tarje = document.getElementsByClassName ("tarjetacanti") [0];
    document.getElementById('pancomplet').style.display="none";
    fondo.style.opacity='100%';
    tarje.remove()
}


function clickEnTarjeta () { debugger
    const fondo = document.getElementsByClassName("container") [0]
    const Tarjetas = document.querySelectorAll ("div.tarjetaproducto")
    console.log (Tarjetas)
    for (let Tarjeta of Tarjetas) {
    Tarjeta.addEventListener ("click", (e)=> { debugger
    let carrito = (Tarjeta.id)
    for (producto of productos) {
        if (producto.id==carrito) {
    //productosCarrito (carrito)
    inputs.innerHTML = `<div class="tarjetacanti"> <div onclick="quitarinput ()">eoo <div> Cuánto de ${producto.nombre} quieres? <div class= "cardImage"><img src=${producto.image}></div>
    </div></div> <div><input id="input" name=${producto.nombre}></div>
   <div><button id="botonanadir" onclick="cambiar(${Tarjeta.id})"> Añadir al carrito </button></div></div>`;
    document.getElementById('pancomplet').style.display="block";
    borroso (fondo)
    escucharBoton (carrito)
    /*productosCarrito (carrito)
    crearTarjetaCarrito (producto)*/
}}})
}}

function escucharBoton (carrito ) { debugger

    if (botonpresione==0 ) {
        escucharBoton (carrito)
    } else {
        botonpresione=0 ; 
        numeroArticuloCarrito ++; 
        console.log (numeroArticuloCarrito)
        productosCarrito (carrito)
        //escucharCarrito ()
        quitarinput ()}
}



function escucharTarjetas () { 
    const Tarjetas = document.getElementsByClassName("tarjetaproducto")
    for (let Tarjeta of Tarjetas) {
    Tarjeta.addEventListener ("mouseover", ()=> { 
        //document.getElementById("tarjeta").setAttribute ("bgcolor", 0,0,0)
        Tarjeta.style.backgroundColor= '#8abccc';
        }) 
    }}

function descucharTarjetas () {
        const Tarjetas = document.getElementsByClassName("tarjetaproducto")
        for (let Tarjeta of Tarjetas) {
        Tarjeta.addEventListener ("mouseout", ()=> { 
            //document.getElementById("tarjeta").setAttribute ("bgcolor", 0,0,0)
            Tarjeta.style.backgroundColor= '#fcfcfc'}) 
    }}

function sumarEnIconoCarrito (){
    numeroiconocarrito.innerHTML++}

function restarEnIconoCarrito (){
    numeroiconocarrito.innerHTML--}
    

function borrarcontainer(){ debugger
    const containere = document.querySelector ("div.contenido");
    const ofertas = document.querySelector ("div.ofertario")
    const ofertosa = document.getElementById ("ofertosa")

    ofertas.remove ();
    oferta=0
    document.getElementById ('ofertosa').style.display= "none";
    ofertarior=1
    containere.remove ()}

function sacarenvios () { debugger
    document.getElementsByClassName('envios')[0].style.display="none";
}

function ponerenvios () {
    document.getElementsByClassName('envios')[0].style.display="flex";
}



 
function cargarProductos (a){ debugger
    cargaoferta=0 ;
    banderaprods=1;
    busquedafiltro = 1 
    sacarenvios ()
    if (contenido==0) {
    borrarcontainer()
    cargarTarjetas(a)}
     else { cargarTarjetas(a) };
    return}

function cargarTarjetas(a) {
    hayproducto () 
    contenido=1 ;
         if (productos.length>0) {
        for (producto of productos){ 
            if (producto.id<a & producto.id>a-101)
            container.innerHTML += crearCardHTML(producto)
            console.log (numeroArticuloCarrito)
            descucharTarjetas ()
            escucharTarjetas ()
            clickEnTarjeta ()
}} else { console.warn ("no hay productos!")}}

function eliminarArticulo(articulo) { debugger
    restarEnIconoCarrito ()
    const articuloCarri= document.querySelectorAll ("#articuloCarri")
   for (articarri of articuloCarri ) {
       if ( articarri.className == articulo) {
       articarri.remove ()
        }
    
    }

}

function aparececarrito() { debugger
    document.getElementById ('carritor').style.display= "block"; 
    document.getElementById('pancomplet').style.display="block";
    const fondo = document.getElementsByClassName("container") [0];
    borroso (fondo)
}

function desaparececarrito() {
    const fondo = document.getElementsByClassName("container") [0] ;
    document.getElementById ('carritor').style.display="none";
    document.getElementById('pancomplet').style.display="none";
    fondo.style.opacity='100%';
}







function productosCarrito (carrito) { debugger
    /*const inputs= document.querySelectorAll ("input")*/
    const input= document.querySelector ("input")
            if (input.value<1) { alert ("Revisá la cantidad del producto que necesitas"); return }
            leerCantidad (carrito)
            sumarEnIconoCarrito ()
            carritor.innerHTML+= crearTarjetaCarrito (carrito)
        
        }
    


   
    {for (let producto of productos) {
        if (producto.id == carrito  ) { carritoCompra.push (producto)/*producto.push*/
            console.table (carritoCompra) 
            carritor.innerHTML+= crearTarjetaCarrito (producto)
            
        } else { console.log ("no hay nada")}
    }}


    function hayproducto () { debugger
        if (seccionprodu.length>0) {
        seccionprodu=[];
        const tarjete = document.querySelectorAll ("div.tarjetaproducto")
        for (tarje of tarjete) {
        tarje.remove()} }
    }

function carritoacero () {
    numeroiconocarrito.innerHTML=0
}

function paginaPrincipal ()  { debugger
    /*if (ofertarior==2){
        document.getElementById ('ofertosa').style.display= "block"}*/
        buscarofertas ()
    container.innerHTML += cargarContainer ()
    sobreconte=1
    busquedafiltro =2  ;
    ponerenvios ()
    
 }

function cargarContainer () {debugger
    return `
    
    <div class="contenido"> 
    <div class="publi0"><div id="carouselExampleIndicators" class="carousel slide"> 
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" >
        <img src="images/banner1.jpg" class="d-block "  alt="...">
      </div>
      <div class="carousel-item">
        <img src="images/banner2.jpg" class="d-block " alt="...">
      </div>
      <div class="carousel-item">
        <img src="images/banner3.jpg" class="d-block " alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
  <div class="publicidades">
  <div class="publi1"> publicidad </div> <div class="publi2"> publicidad 2</div></div>

</div> `

}

paginaPrincipal ()
carritoacero ()

/*inputFiltrar.addEventListener ("search", ()=> { debugger
    var busqueda=inputFiltrar.value.charAt(0).toUpperCase ()+inputFiltrar.value.slice(1);
    var resultadoBusqueda=productos.filter ((producto)=> producto.hashtag.includes (busqueda)) ;
    cargarencontrado (resultadoBusqueda)
})*/

function filtrado (){ debugger
    var busqueda=inputFiltrar.value.charAt(0).toUpperCase ()/*+inputFiltrar.value.slice(1)*/;
    var resultadoBusqueda=productos.filter ((producto)=> producto.hashtag.includes (busqueda)) ;
    cargarencontrado (resultadoBusqueda)
}