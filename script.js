

var capturando= "";

function capturar(){
    
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML =  ("Ola " + capturando);


}

function mostra(){
    if(document.getElementById("marselo").style.display == "block"){
      document.getElementById('marselo').style.display = "none";}

    else{
        document.getElementById('marselo').style.display = "block"; 
    }
    
   
   

}


