







const pesquisarCep = () => {
   
    const input = document.querySelector('.cep_fornecido').value;

    if(input.length !== 8){
        alert('CEP INVALIDO')
    }


    const url = `https://viacep.com.br/ws/${input}/json/`

    fetch(url).then(function(response){
      response.json().then(function(infos){
        console.log(infos);

        mostrarInfos(infos)

      })
    })

}

function mostrarInfos(infos){
    const container = document.getElementById('container');
    container.innerHTML = `<p>Endereço: ${infos.logradouro}</p>
    <p> Complemeneto: ${infos.complemento}</p>
    <p> Bairro : ${infos.bairro} </p>
    <p> Cidade : ${infos.uf}</p>`
}



// const options = {
//     method : 'GET',
// }





