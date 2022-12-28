import './style.css'
import { setupCounter } from './counter'
import { pokemon } from './bases/objects'
import { CharmanderDecorator } from './bases/decorator';

console.log(CharmanderDecorator.speak());

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Vite!-- ${pokemon.name}</h1>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
