'use strict'
window.addEventListener('load', () => {

    const api = 'https://api.adviceslip.com/advice';

    const buton = document.querySelector('#circle');
    const square = document.querySelector('#cuadro');

    getData();
    
    buton.addEventListener('click', () => {
        getData();
    })
    function getData() {
        getAdvice()
        .then(data => data.json() )
        .then( advice =>{  
            mostrarAdvice( advice.slip.advice );
            mostrarId( advice.slip.id );
            });
    }
        

    function getAdvice() {
        return fetch('https://api.adviceslip.com/advice');
    }

    function mostrarAdvice( advice ){
        let aviso = document.querySelector('.advice');
        aviso.replaceChildren('"' + advice + '"' );console.log(advice);
    }

    function mostrarId( id ){
        let numero = document.querySelector('.n-advice');
        numero.replaceChildren('ADVICE #' + id);
    }














})