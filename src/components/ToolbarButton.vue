<template>
  <q-btn
    rounded
    outline
    :class="classButton"
    :color="isButtonActive ? 'amber-5' : 'white'"
    :label="label"
    @click="clickEvent"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class ToolbarButton extends Vue {
  @Prop()
  readonly label: string;

  @Prop()
  readonly classButton: string;

  @Prop()
  readonly isButtonActive: boolean;

  @Emit('click')
  clickEvent() {
    return true;
  }
}
</script>
