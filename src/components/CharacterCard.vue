<template>
  <q-card class="q-card-hover" @click="openDetailsModal">
    <q-card-section>
      <q-img :src="characterImage" />
    </q-card-section>

    <q-separator />

    <q-card-section class="flex flex-center">
      <div>{{ characterName }}</div>
    </q-card-section>

    <Tooltip :tooltipMessage="'Clique para mais informações'" />
  </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import Tooltip from './Tooltip.vue';

@Component({
  components: { Tooltip },
})
export default class CharacterCard extends Vue {
  @Prop({ default: '' })
  readonly characterName: string;

  @Prop({ default: '' })
  readonly characterImage: string;

  @Emit('openDetailsModal')
  openDetailsModal() {
    return true;
  }
}
</script>
