import { attachTemplate, render } from '../../lib'
import { h } from 'virtual-dom'
import styles from './index.css'

export class Main extends HTMLElement {
  constructor() {
    super()
    this.styles = styles
    this.attachTemplate()
  }
  attributeChangedCallback(attr, newVal) {
    this[attr] = newVal
    this.render()
  }
  connectedCallback() {

  }
  attachTemplate() {
    attachTemplate.call(this)
  }
  render() {
    render.call(this)
  }

  get domTree() {
    return h('div', [])
  }
  static get observedAttributes() {
    return []
  }
}
