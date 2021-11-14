<template>
  <q-card class="q-card-hover" @click="openDetailsModal">
    <q-card-section class="text-center q-pa-xs">
      <div>{{ episodeName }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="text-center q-pa-xs">
      <div>{{ 'Data de exibição: ' + formatDate(espisodeDate) }}</div>
    </q-card-section>

    <Tooltip :tooltipMessage="'Clique para mais informações'" />
  </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import Tooltip from './Tooltip.vue';
import { format } from 'date-fns';

@Component({
  components: { Tooltip },
})
export default class EpisodeCard extends Vue {
  @Prop({ default: '' })
  readonly espisodeDate: string;

  @Prop({ default: '' })
  readonly episodeName: string;

  @Emit('openDetailsModal')
  openDetailsModal() {
    return true;
  }

  formatDate(date: string) {
    if (date) {
      return format(new Date(date), 'dd/MM/yyyy');
    }

    return '';
  }
}
</script>
