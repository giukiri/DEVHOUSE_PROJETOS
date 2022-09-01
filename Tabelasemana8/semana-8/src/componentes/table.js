import './table.css'

function TabelaDark (){
    return(

        <table className = "Tabela">
        <thead className ="Head">
            <tr className ="linha">
                <th className="seila">#</th>
                <th className="seila">Nome</th>
                <th className="seila">Idade</th>
                <th className="seila">usarname</th>
            </tr>
        </thead>

        <tbody>
            <tr className ="linha">
                <td>1</td>
                <td>Giulia</td>
                <td>24</td>
                <td>giukiri</td>
            </tr>
            <tr className ="linha">
                <td>2</td>
                <td>Sofia</td>
                <td>19</td>
                <td>Sosofi</td>
            </tr>
            <tr className ="linha">
                <td>3</td>
                <td>Murphy</td>
                <td>6</td>
                <td>@BeagleMurphy</td>
            </tr>
        </tbody>

        </table>
    );
}

export default TabelaDark







