import { QLayout, QPageContainer, QPage, QSelect, QBtn } from 'quasar';

export default {
  title: 'Quasar',
};

export const GoBackButton = () => ({
  title: 'GoBackButton',
  components: { QLayout, QPageContainer, QPage, QBtn },
  template: `<q-layout>
    <q-page-container>
      <q-page class="full-height full-width justify-center items-center q-pa-xl">
            <q-btn
            color="negative"
            dense
            flat
            icon="undo"
            class="q-px-xs"
          >
            <div style="width: 90px">VOLTAR</div>
          </q-btn>
      </q-page>
    </q-page-container>
  </q-layout>`,
  data() {
    return {};
  },
});
