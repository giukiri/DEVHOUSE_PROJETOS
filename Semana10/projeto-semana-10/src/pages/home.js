import { func } from "prop-types"


export default function Projeto () {

//     <div>
    
//     <header>
//     <div class="cabecalho"> 
   


//         <div class="aba_Navegacao">
        
           
//             <a href="./index.html" style="color: steelblue;">Home</a>
           
//             <a href="#" style="color: steelblue;" > About DEVinKnowledge</a>
//         </div>
//     </div>
//     </header>

//         <div class="titulo_header">

//             <div class="logo">
//                 <img src="./knowledge.webp" alt="imagem de um cerebro fazendo conexões"  >
//             </div>

//             <h1>DEVinKnowledge</h1>
           
//                 <p class="frase">Este é um local para dividirmos conhecimento!</p>
         

//         </div>


//           <div class="options">
            
//             <h3>Compartilhe seu conhecimento criando um card</h3>
          
//                 <h3>Veja nossas DevDicas clicando nos cards abaixo </h3>
    
//             </div>
           
            
//             <div class="busca">
//                 <img src="" alt="" >
//                 <input type="text" class="btnBuscar" id="buscar" placeholder="Buscar sobre um assunto">
//                  <button class= "btnBusca"id="btnBusca">
//                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                     width="16" height="16"
//                     viewBox="0 0 16 16"
//                     style=" fill:#000000;">
//                         <path d="M 10.5 1 C 8.019531 1 6 3.019531 6 5.5 C 6 6.558594 6.382813 7.523438 7 8.292969 L 2.023438 13.269531 L 2.726563 13.980469 L 7.707031 9 C 8.476563 9.617188 9.441406 10 10.5 10 C 12.980469 10 15 7.980469 15 5.5 C 15 3.019531 12.980469 1 10.5 1 Z M 10.5 2 C 12.4375 2 14 3.5625 14 5.5 C 14 7.4375 12.4375 9 10.5 9 C 8.5625 9 7 7.4375 7 5.5 C 7 3.5625 8.5625 2 10.5 2 Z">

// </path></svg>
//                  </button> 
//             </div>

//     <main class="cards">

       

      
//         <div class="card_enviados">

//             <h2 >Cadastrados</h2>
//             <p>Cards enviados</p>
//             <span>50 </span>
           
            
//         </div>

//         <div class="card_categoria1">
//             <h2>Front-End</h2>
//             <p>Dicas de Front-End </p>
//            <img src="./front-end.png" alt="imagem Front-End" class="imgFrontEnd">
            
//             <span>30</span>
//         </div>

//         <div class="card_categoria2">
//             <h2>BackEnd</h2>
//             <p>Dicas de BackEnd</p>
//             <img src="./backend.png" alt="imagem BackEnd" class="imgBackEnd">
         
//             <span>10</span>
//         </div>

//         <div class="card_categoria3">
//             <h2>FullStack</h2>
//             <p>Dicas de FullStack</p>
//             <img src="./full-stack-developer-icon.webp" alt="imagem FullStack" class="imgFullstack">
           
//             <span>10</span>
//         </div>

//         <div class="card_categoria4">
//             <h2>Comportamental / Soft </h2>
//             <p>Dicas de Comportamental / Soft</p>
//             <img src="./logo-creative-soft-skills.png" alt="imagem soft skill" class="imgSoftSkills">
           
//             <span>10</span>
//         </div>

//     </main>


        
    
//         <form id="form" action="">

//             <input name="identificador" type="hidden" />

//             <div class="input" id="input1">
//             <label>Titulo </label>
        
//         <input   required id="input_form1" class="input_form" data-ls-module="charCounter" maxlength="64" type="text" placeholder="Adicione um titulo" >
//         <span class="input_erro"></span>

//         <div class="caracteres">
//             <span class="min">8</span>
//             <span class="max">/64</span>
//             <p id="texto"></p>
//         </div>
          
//             </div>

           

//             <br/>

//             <div class="input" id="input2" >

//             <label>Linguagem/Skill </label>
//                 <input  data-ls-module="charCounter" maxlength="16" class="input_form"  id="input_form2"  type="text" placeholder="Sobre qual linguagem você irá escrever?" required >
               
//                 <span class="input_erro"></span>

//                 <div class="caracteres2">
//                     <span class="min2">4</span>
//                     <span class="max2">/16</span>
//                     <p id="texto2"></p>
//                 </div>
            
//             </div>
           

//             <br/>

//             <div class="input" >

//             <label> Qual categoria sua dica se encaixa?</label>

//                <select required  id="input_form_Categoria">

//                <option></option>
//                 <option value="Front-End">Front-End</option>
//                 <option value="BackEnd">BackEnd</option>
//                 <option value="FullStack">FullStack</option>
//                 <option value="Comportamental/Soft">Comportamental/Soft</option>

//                </select>

//                <span class="input_erro"></span>

//             </div>

            

          

//             <div class="input" id="input3">

//         <label>Descrição do tutorial </label>
//            <textarea  required data-ls-module="charCounter" maxlength="512" class="input_form"  id="input_form3"  rows="10" cols="40"></textarea>
//            <span class="input_erro"></span>

//          <div class="caracteresDescricao">
//                     <span class="min3">32</span>
//                     <span class="max3">/512</span>
//                     <p id="texto3"></p>
//                 </div>
       
//         </div>

//         <br/>

//         <div class="input" >
//         <label>Deixe uma sugestão de vídeo caso você conheça algum </label>
//             <input class="input_form"  id="input_form_url"  type="url" placeholder="Cole a url do vídeo aqui">
//             <span class="input_erro"></span>
//         </div>
       

//         <br/>

//         <button type="reset" form="form" onclick="limpaFormulario()">Descartar</button>
//         <button  id="btn_submit" type="submit" onclick="salvarFormulario();"   form="form" >Enviar</button>
        
//         </form>

//         <div id="lista">

          

//         </div>


//         </div>

}


