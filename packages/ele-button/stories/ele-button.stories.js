import Vue from 'vue';
import EleButton from '../src/ele-button.vue'
import README from '../README.md'
export default {
  title: 'EleButton',
  component: EleButton,
  parameters: {
    notes: { README },
  },
}

export const EleButton = _ => ({
  components: { EleButton },
  template: `
    <div>
      <ele-button></ele-button>
    </div>
  `
})