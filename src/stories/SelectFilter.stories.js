import { QLayout, QPageContainer, QPage, QSelect } from 'quasar';

export default {
  title: 'Quasar',
};

export const FilterSelect = () => ({
  title: 'FilterSelect',
  components: { QLayout, QPageContainer, QPage, QSelect },
  template: `<q-layout>
    <q-page-container>
      <q-page class="full-height full-width justify-center items-center q-pa-xl">
          <q-select
            dense
            label="Ordenação"
            v-model="selectedOption"
            :options="options"
            class="col-md-3 col-sm-6 col-xs-12 q-mr-md"
        />
      </q-page>
    </q-page-container>
  </q-layout>`,
  data() {
    return {
      selectedOption: 'Crescente',
      options: ['Crescente', 'Decrescente'],
    };
  },
});
