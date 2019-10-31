import { define } from './lib'
import { Game } from './components/game'

const main = document.querySelector('main')

main.appendChild(define(Game))