import { diff, patch, create as createElement } from 'virtual-dom'

global.CACHE = {}

export function attachTemplate() {
  this.attachShadow({ mode: 'open' })

  const style = document.createElement('style')
  style.innerHTML = this.styles
  this.shadowRoot.appendChild(style)

  const template = createElement(this.domTree)
  this.shadowRoot.appendChild(template)
  CACHE[this.tagName] = { template, oldTree: this.domTree }
}

export function render() {
  const tag = this.tagName
  if (!CACHE[tag]) return
  const patches = diff(CACHE[tag].oldTree, this.domTree)
  CACHE[tag].template = patch(CACHE[tag].template, patches)
  CACHE[tag].oldTree = this.domTree
}

export function define(klass) {
  const k = klass.name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
  const tag = `ss-${k}`
  customElements.define(tag, klass)
  return document.createElement(tag)
}