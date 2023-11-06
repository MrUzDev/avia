import React from 'react'
import './loader.css'
export default function Loader() {
  return (
    <div className='loader-container'>
         <div class="loader">
      {/* <div class="wait"> Fly sales</div> */}
      <div class="iata_code departure_city">Fly</div>
        <div className='plane-container'>
            <div class="plane">
            <img src="https://zupimages.net/up/19/34/4820.gif" class="plane-img"/>
        </div>
        <div class="earth-wrapper">
            <div class="earth"></div>
        </div> 
        </div> 
      <div class="iata_code arrival_city">sales</div>
    </div>
    </div>
  )
}