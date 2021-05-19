
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Please, enter your name.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Mozilla is cool, ' + meuNome;
  }
  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla is cool, ' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario();
  }
  function defineNomeUsuario() {
    let meuNome = prompt('Please, enter your name.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Mozilla is cool, ' + meuNome;
    }
  }