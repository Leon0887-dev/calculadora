
document.querySelectorAll('.numero').forEach(item =>{
     item.addEventListener('click', e => document.querySelector('#resultado').append(item.innerHTML));
})

document.querySelector('.apagar').addEventListener('click', e =>{
      let valor = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = valor.slice(0, -1);
})



document.querySelector('.limpar').addEventListener('click', e => document.querySelector('#resultado').innerHTML = ' ');

document.querySelector('.igual').addEventListener('click', e =>{
    let valor = document.querySelector('#resultado').innerHTML;
    try{
        document.querySelector('#resultado').innerHTML = eval(valor);
    }catch{
        document.querySelector('#resultado').innerHTML = '';
    }
          
})