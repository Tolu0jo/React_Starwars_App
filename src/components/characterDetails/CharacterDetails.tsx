import React, { useEffect } from 'react'
import "./characterDetails.css"
import { useParams } from 'react-router-dom'
import { getSelectedCharacter } from '../../features/character/characterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCharacter } from '../../api/apiCall'
import { AppDispatch} from '../../features/store'
const CharacterDetails = () => {
    const{id} = useParams()
    const data = useSelector(getSelectedCharacter)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
     dispatch(fetchSingleCharacter(id!))
    },[dispatch])
console.log(data )
  return (
<div className="main-content">
    <h1>Star wars Characters</h1>
  <div className="character-details">
  <div className="list-item"><span className="label">Name:</span> Luke Skywalker</div>
  <div className="list-item"><span className="label">Height:</span> 172</div>
  <div className="list-item"><span className="label">Mass:</span> 77</div>
  <div className="list-item"><span className="label">Hair Color:</span> Blond</div>
  <div className="list-item"><span className="label">Skin Color:</span> Fair</div>
  <div className="list-item"><span className="label">Eye Color:</span> Blue</div>
  <div className="list-item"><span className="label">Birth Year:</span> 19BBY</div>
  <div className="list-item"><span className="label">Gender:</span> Male</div>
  <div className="list-item"><span className="label">Homeworld:</span> <a href="https://swapi.dev/api/planets/1/">Homeworld</a></div>
  <div className="list-item">
    <span className="label">Films:</span>
    <ul>
      <li><a href="https://swapi.dev/api/films/2/">Film 2</a></li>
      <li><a href="https://swapi.dev/api/films/6/">Film 6</a></li>
      <li><a href="https://swapi.dev/api/films/3/">Film 3</a></li>
      <li><a href="https://swapi.dev/api/films/1/">Film 1</a></li>
      <li><a href="https://swapi.dev/api/films/7/">Film 7</a></li>
    </ul>
  </div>
  <div className="list-item"><span className="label">Species:</span> <a href="https://swapi.dev/api/species/1/">Species 1</a></div>

</div>

        </div>

  )
}

export default CharacterDetails