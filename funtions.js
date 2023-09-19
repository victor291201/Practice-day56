  
function calcular(){

var mes=0;
var totalp = 0;
var tam= document.getElementById("disabledTextInput").value;
var rec = document.getElementById("FS").value;
var tipo = document.getElementById("TIPE").value;
// Casteamos el valor de la var a Pesos colombianos con la siguiente funcion:
const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
//Validamos que el tamaño del inmueble sea valido
if(tam>0){
    //calculamos segun tipo y cambiamos valores
    switch(tipo){
    
        case "0":
            document.getElementById("result").innerHTML = ("Debe seleccionar el tipo de inmueble...");
            break;
        case "1":
            //cuando el inmueble es tipo oficina
            switch(rec){
               default:
               document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
               break;
               case"1":
               totalp = tam*984;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"2":
               totalp = tam*913;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345*2;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"3":
               totalp = tam*850;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345*3;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"5":
               totalp = tam*787;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345*5;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"6":
               totalp = tam*1279;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               //mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );               break;
               case"7":
               totalp = tam*1378;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               //mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
               break;
            }
            break ;
            case"2":
                 //cuando el inmueble es tipo residencial 
                 switch(rec){
                     default:
                     document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                     break;
                     case"1":
                     totalp = tam*1195;
                     document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                     mes=totalp*4.345;
                     document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                     break;
                     case"2":
                     totalp = tam*1109;
                     document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                     mes=totalp*4.345*2;
                     document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                     break;
                     case"3":
                     totalp = tam*1033;
                     document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                     mes=totalp*4.345*3;
                     document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                     break;
                     case"5":
                     totalp = tam*956;
                     document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                     mes=totalp*4.345*5;
                     document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                     break;
                     case"6":
                     totalp = tam*1554;
                     document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                     //mes=totalp*4.345;
                     document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                     break;
                     case"7":
                     totalp = tam*1673;
                     document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    //mes=totalp*4.345;
                     document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                     break;
                  }
                  break ;
                 break;
       case"3":
            //cuando el inmueble es tipo residencial 
            switch(rec){
                default:
                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                break;
                case"6":
                totalp = tam*850;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                //mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                break;
                case"7":
                totalp = tam*1195;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               //mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                break;
             }
             break ;
            break;
        default:
            document.getElementById("result").innerHTML = ("No se puede calcular debe hacer las selecciones...");
            document.getElementById("result1").innerHTML = ("No se puede calcular debe hacer las selecciones...");
            break;       
       }
       

}else{
    document.getElementById("result").innerHTML = ("Debe ingresar el tamaño para calcular... ");
    document.getElementById("result1").innerHTML = ("");
}
}
function turistico(event){
    if(event.target.value==3){
        document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='6'>Ocasional</option><option value='7'>Express</option>");
    }
    else{
        document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option> <option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='5'>5</option><option value='6'>Ocasional</option><option value='7'>Express</option>")
    }
}
