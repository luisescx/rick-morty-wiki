import { QLayout, QPageContainer, QPage, QSelect, QBtn } from 'quasar';

export default {
  title: 'Quasar',
};

export const ToolbarButton = () => ({
  title: 'ToolbarButton',
  components: { QLayout, QPageContainer, QPage, QBtn },
  template: `<q-layout>
    <q-page-container>
      <q-page class="full-height full-width justify-center items-center q-pa-xl" style="background-color: #027be3">
            <q-btn
                rounded
                outline
                color="white"
                label="Botão"
            />

            <q-btn
                rounded
                outline
                color="amber-5"
                label="Botão Selecionado"
            />
      </q-page>
    </q-page-container>
  </q-layout>`,
  data() {
    return {};
  },
});
