import './style.css'
import { setupCounter } from './counter'
import { pokemon } from './bases/objects'
import { Charmander } from './bases/injection';

console.log(Charmander.getMoves());

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Vite!-- ${pokemon.name}</h1>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
