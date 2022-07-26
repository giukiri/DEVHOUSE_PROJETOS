


  
var array = ['New York','Barcelona','Alemanha','Argentina','Chile']
console.log(array)

document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement("input");
    button.type = 'button';
    button.id = 'submit';
    button.value = 'remove';
    button.className = 'btn';

    var index = document.getElementById('item');     
    index = item.value;
    
    button.onclick = function (){

    var index = document.getElementById('item').value;     
   
    excluirItem(index)
};
var container = document.getElementById ('container');
container.appendChild(button);
},false)

function excluirItem(item){
       let indice = array.indexOf(item);

        if(indice != -1) {
           
             array.splice(indice,1);
           
        }

        console.log(array);

    }

    

  












