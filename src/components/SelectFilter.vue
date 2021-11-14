<template>
  <q-select
    dense
    label="Ordenação"
    v-model="selectedOption"
    :options="selectOptions"
    class="col-md-3 col-sm-6 col-xs-12 q-mr-md"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { SelectFilterType } from 'src/common/enums';

@Component
export default class SelectFilter extends Vue {
  selectOptions = [SelectFilterType.ASCENDANT, SelectFilterType.DECREASING];
  selectedOption = SelectFilterType.ASCENDANT;

  @Prop({ default: SelectFilterType.ASCENDANT })
  readonly selectedOptionProp: SelectFilterType;

  @Emit('setSelectedOption')
  setSelectedOptionProp(value: SelectFilterType) {
    return value;
  }

  @Watch('selectedOption')
  changeSelectedProp(value: SelectFilterType) {
    this.setSelectedOptionProp(value);
  }

  mounted() {
    this.selectedOption = this.selectedOptionProp;
  }
}
</script>
