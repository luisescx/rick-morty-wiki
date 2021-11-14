import { QLayout, QPageContainer, QPage, QSelect, QIcon, QInput } from 'quasar';

export default {
  title: 'Quasar',
};

export const InputFilter = () => ({
  title: 'InputFilter',
  components: { QLayout, QPageContainer, QPage, QIcon, QInput },
  template: `<q-layout>
    <q-page-container>
      <q-page class="full-height full-width justify-center items-center q-pa-xl">
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
      </q-page>
    </q-page-container>
  </q-layout>`,
  data() {
    return {
      filterName: '',
    };
  },
});
