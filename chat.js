/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */


let infoHtml = '';
let listaMensagens = [];

const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
  e.preventDefault();
})

function commitMessageClickHandler(){

  let apelido = document.getElementById('apelido-input').value;
  let mensagem = document.getElementById('message-input').value;
  adicionarMensagem(apelido,mensagem);
}

function adicionarMensagem(apelido,mensagem){
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem
  })
  formatarMensagens(listaMensagens)
}


function formatarMensagens(){

  let inputMsg = document.getElementById('message-input').value;
  let inputApl = document.getElementById('apelido-input').value;


  if(inputApl == ''){  
    alert('Para inicar o chat é necessário informar seu apelido');
    listaMensagens.splice(0);
  }else if(inputMsg == ''){
    alert('Parabéns! Você adicionou seu apelido, agora é necessário digitar sua mensagem...');
    listaMensagens.splice(0);
    document.getElementById('message-input').focus();
  }else{

    for(var i = 0; i < listaMensagens.length; i++){
          
      inputMsg = document.getElementById('message-input').value;
      let ultElemento = listaMensagens.pop();

      infoHtml += `
          <div class="chat-message">
            <span class="chat-message-apelido">
              ${ultElemento.apelido}: 
            </span>
            <span class="chat-message-item">
              ${ultElemento.mensagem}
            </span>
          </div>
        `;
      atualizarHTML()

      document.getElementById('message-input').value = null;
      document.getElementById('message-input').focus();
    }
  } 

}
 function atualizarHTML(){
    const atualiza = document.querySelector('#chat-messages');
    atualiza.innerHTML = '';
    atualiza.innerHTML = infoHtml;
}


/*
// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------
*/
