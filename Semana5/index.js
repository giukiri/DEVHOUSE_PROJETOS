


document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement("input");
    button.type = 'button';
    button.id = 'submit';
    button.value = 'remove';
    button.className = 'btn';

    button.onclick = function (callback){
       
        callback(alert("clicado"))
            
    };

    var container = document.getElementById ('container');
    container.appendChild(button);

})