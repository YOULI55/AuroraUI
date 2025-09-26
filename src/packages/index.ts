import InputText from './InputText/InputText.vue'
import type { App } from 'vue'

const components = [
  InputText
]

const install = (app: App) => {
  components.map(component => {
    app.component(component.name as string, component)
  })
}

export default {
  install,
  InputText
}

