

function adicionarDados (){
    const input = document.getElementById("mensagem");
   const valorDoInput = input.value
   const mensagem = document.getElementById("aparecerMensagem")
   mensagem.innerHTML = valorDoInput
}


function salvarMensagem(){
    
  const input = document.getElementById("mensagem");
  const valorDoInput = input.value
  const mensagem = document.getElementById("aparecerMensagem")
  const valorDaMensagem = mensagem.innerHTML

if ( valorDoInput.length == 0 && valorDaMensagem.length === 0){
    alert("informe qual a sua mensagem")
} else{
    localStorage.setItem("mensagem", valorDoInput);
    alert("Mensagem salva")
}
     
}

function mostrarMensagem() {
    const mensagemDoLocalStorage = localStorage.getItem("mensagem")
   const divApareceMensagem = document.getElementById("aparecerMensagem")
     if (mensagemDoLocalStorage === null) {
     divApareceMensagem.innerHTML = "Não há mensagem salva"
   }
 else {
       divApareceMensagem.innerHTML = mensagemDoLocalStorage
     }
   }
  






