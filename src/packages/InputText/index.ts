import InputText from './InputText.vue'
import type { App } from 'vue'
InputText.install = (app: App) => {
  app.component(InputText.name as string, InputText)
}

export default InputText
