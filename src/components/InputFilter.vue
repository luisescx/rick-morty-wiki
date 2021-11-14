<template>
  <q-input
    dense
    debounce="300"
    placeholder="Filtrar por nome"
    v-model="filterName"
    class="col-md-3 col-sm-5 col-xs-12 q-mr-md"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component
export default class InputFilter extends Vue {
  filterName = '';

  mounted() {
    this.filterName = this.filterNameProps;
  }

  @Prop({ default: '' })
  readonly filterNameProps: string;

  @Emit('setFilterName')
  setFilterName(value: string) {
    return value;
  }

  @Watch('filterName')
  changeFilterName(value: string) {
    this.setFilterName(value);
  }
}
</script>
