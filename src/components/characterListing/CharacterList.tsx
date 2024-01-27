import { useSelector } from "react-redux"
import "./characterList.css"
import { getAllCharacters } from "../../features/character/characterSlice"

const CharacterList = () => {


 const characters = useSelector(getAllCharacters)

 console.log(characters)
  return (
    
    <div className="main-content">
    <h1>Star wars Characters</h1>
     <div className="list-container">
    <table className="table">
    <tr>
    <th>Name</th>
    <th>gender</th>

  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
   
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>

  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>

  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>

  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>

  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>

  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>

  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>

  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>

  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>

  </tr>
</table>

     </div>
     <button>previous</button>
<button>next</button>
  </div>
  )
}

export default CharacterList