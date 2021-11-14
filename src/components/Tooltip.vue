<template>
  <q-tooltip
    anchor="top middle"
    self="bottom middle"
    :offset="[10, 10]"
    content-class="bg-blue-8"
    :delay="1000"
    content-style="font-size: 12px"
  >
    {{ tooltipMessage }}
  </q-tooltip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Tooltip extends Vue {
  @Prop({ default: '' })
  readonly tooltipMessage: string;
}
</script>

<style scoped>
::v-deep .q-card-hover:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

::v-deep .q-card__section--vert {
  padding: 0px;
}
</style>
