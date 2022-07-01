const btn = document.querySelector( '#btn1' );
const text = document.querySelector( '.show1' );
btn.addEventListener( 'click', function() {
    text.classList.toggle( 'hide1' )

btn.textContent == "Read More"
    ? ( btn.textContent = "Read Less" )
    : ( btn.textContent = "Read More" );


    } )
const btn1 = document.querySelector( '#btn2' );
const text1 = document.querySelector( '.show2' );
btn1.addEventListener( 'click', function() {
    text1.classList.toggle( 'hide2' )

    btn1.textContent == "Read More"
        ? ( btn1.textContent = "Read Less" )
        : ( btn1.textContent = "Read More" );
    } )
       
var today=new Date();
var d=today.getDate();
var m=today.getMonth()+1;
var y=today.getFullYear();
document.getElementById("date").innerHTML=d+"/"+m+"/"+y;