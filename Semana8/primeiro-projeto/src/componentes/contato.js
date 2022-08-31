export default function Contato ({item}){
    
    <div key = {item.id} >
    <h2>{item.name}</h2>
<img src= {item.photo} />
<p> {item.description}</p>

</div>

}
