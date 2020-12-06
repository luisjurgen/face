let murakami= document.querySelector('.murakami');
let fondo =document.querySelector('body');

//posMouse
    let mouseCursorX;
    let mouseCursorY;

//variablesInicializadasParaImagenes

let numFrames=145;
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

    let valorNormalizado=Math.round(mapRange(valorRecibido,-180,180,0, numFrames-1));
    //intervencion En el Dom
    murakami.setAttribute("src",`assets/mounstruo${secuencia[valorNormalizado]}.png`);
    //colorInterpolacion
    let colorNormalizado=Math.round(mapRange(valorRecibido,-180,180,0,360));
    fondo.style.background = `hsl(${colorNormalizado},60%,50%)`;
    
},false);

