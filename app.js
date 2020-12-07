let murakami= document.querySelector('.murakami');
let fondo =document.querySelector('body');

//posMouse
    let mouseCursorX;
    let mouseCursorY;

//variablesInicializadasParaImagenes
let numFrames=97;
let currentFrame=0;
let secuencia=[];

//funcion numberFrames
function nFrames(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
//funcion que carga el nombre de las imagenes
function nombresImagenes(){
    for(let i=0; i<numFrames; i++){
        let imagenNombre=nFrames(i,4);
        secuencia[i]=imagenNombre;
    }
}

nombresImagenes();

//funcion de mapeo SO
function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


//////////////touch

//asignacionPosMouse
window.addEventListener('touchmove',(e)=>{
    // mouseCursorX=e.pageX;
    // mouseCursorY=e.pageY;
    var touchLocation=e.targetTouches[0];
    
    mouseCursorX=touchLocation.pageX;
    mouseCursorY=touchLocation.pageY;



  //posCentro
     
    const centroX=window.innerWidth/2;
    const centroY=window.innerHeight/2;
    //calcular el angulo

    function valorArcotangente(centerx1,centery1,x2,y2){
      
        let valorArcotangente=Math.atan2(-y2+centery1,-x2+centerx1);
        let conversionGrados=valorArcotangente/(Math.PI/180);
        return conversionGrados;
        // return conversionGrados;

    }
    
    let valorRecibido= valorArcotangente(centroX,centroY,mouseCursorX,mouseCursorY);

    let valorNormalizado=Math.round(mapRange(valorRecibido,-180,180, 0, numFrames-1));
    console.log(valorNormalizado);
    //intervencion En el Dom
    murakami.setAttribute("href",`#s${secuencia[valorNormalizado]}`);
    //colorInterpolacion
    let colorNormalizado=Math.round(mapRange(valorRecibido,-180,180,0,360));
    fondo.style.background = `hsl(${colorNormalizado},150%,50%)`;
    
},false);

//cursor touch


let mouseCursor = document.querySelector('.cursor');
let ruedas= document.querySelectorAll('.ruedas');

window.addEventListener('touchmove',(e)=>{


    var touchLocation2= e.targetTouches[0];
    mouseCursor.style.top = touchLocation2.pageY + 'px';
    mouseCursor.style.left=touchLocation2.pageX+'px';

    


});

//scala touch
ruedas.forEach(rueda=>{
    rueda.addEventListener('touch',()=>{
        mouseCursor.classList.add('rueda-especial');
        
    });
    rueda.addEventListener('touchleave',()=>{
        mouseCursor.classList.remove('rueda-especial');
      
    });
});
















///////////////mouse

//asignacionPosMouse
window.addEventListener('mousemove',(e)=>{
    mouseCursorX=e.pageX;
    mouseCursorY=e.pageY;
    // var touchLocation=e.targetTouches[0];
    
    // mouseCursorX=touchLocation.pageX;
    // mouseCursorY=touchLocation.pageY;



  //posCentro
     
    const centroX=window.innerWidth/2;
    const centroY=window.innerHeight/2;
    //calcular el angulo

    function valorArcotangente(centerx1,centery1,x2,y2){
      
        let valorArcotangente=Math.atan2(-y2+centery1,-x2+centerx1);
        let conversionGrados=valorArcotangente/(Math.PI/180);
        return conversionGrados;
        // return conversionGrados;

    }
    
    let valorRecibido= valorArcotangente(centroX,centroY,mouseCursorX,mouseCursorY);

    let valorNormalizado=Math.round(mapRange(valorRecibido,-180,180, 0, numFrames-1));
    console.log(valorNormalizado);
    //intervencion En el Dom
    murakami.setAttribute("href",`#s${secuencia[valorNormalizado]}`);
    //colorInterpolacion
    let colorNormalizado=Math.round(mapRange(valorRecibido,-180,180,0,360));
    fondo.style.background = `hsl(${colorNormalizado},150%,50%)`;
    
},false);





//cursor mouse

window.addEventListener('mousemove',(e)=>{
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left=e.pageX+'px';


});


//scala mouse


ruedas.forEach(rueda=>{
    rueda.addEventListener('mouseover',()=>{
        mouseCursor.classList.add('rueda-especial');
        
    });
    rueda.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove('rueda-especial');
      
    });
});




