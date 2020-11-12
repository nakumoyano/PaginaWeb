//VALIDACION PARA USAR LA FLECHITA PARA SUBIR
function irArriba(pxPantalla)
{
    window.addEventListener('scroll',()=>
    {
        var scroll = document.documentElement.scrollTop;
        
        var botonArriba = document.getElementById('botonarriba');

        if(scroll > 10)
        {
            botonArriba.style.right = 20 + "px";
        }

        else
        {
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba(50);