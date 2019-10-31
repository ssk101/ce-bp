import { define } from './lib'
import { Main } from './components/main'

const main = document.querySelector('main')

main.appendChild(define(Main))
