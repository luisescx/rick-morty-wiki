<template>
  <q-btn
    color="negative"
    dense
    flat
    icon="undo"
    class="q-px-xs"
    @click="closeModal"
  >
    <div style="width: 90px">VOLTAR</div>
  </q-btn>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component
export default class GoBackButton extends Vue {
  @Emit('closeModal')
  closeModal() {
    return false;
  }
}
</script>
