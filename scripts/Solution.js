function Resolver()
{
    if ($('#a').val().length == 0||$('#b').val().length == 0||$('#c').val().length == 0) {
        alert('Ingrese todas las constantes');
        return false;
      }
    $(id="#mydiv").show();
    $(id=".button2").show();
    const Eti = document.forms['etiqueta'];
    let a = Eti['a'].value;
    let b= Eti['b'].value;
    let c = Eti['c'].value;  
    let x1= math.complex(0,0);
    let x2 = math.complex(0,0);
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    let t = (math.pow(b,2))-(4*a*c);
 
    if (t<0)
    { 
        x1= math.sqrt(t)
        x1.im=x1.im/(2*a);
        x1.re = -b/(2*a);
        x2 = math.sqrt(t);
        x2.im= -x2.im/(2*a);
        x2.re = -b/(2*a);
        document.getElementById('x1').innerHTML = "x1 = "+x1;
        document.getElementById('x2').innerHTML = "x2 = "+x2;
    }
    else
    {
        x1.re =(-b + math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
        x2.re =(-b - math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
        document.getElementById('x1').innerHTML = "x1 = "+x1.re;
        document.getElementById('x2').innerHTML = "x2 = "+x2.re;
    }
}



