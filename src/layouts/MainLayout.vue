<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Rick and Morty Wiki</q-toolbar-title>

        <ToolbarButton
          :label="'Personagens'"
          :class="'q-mr-sm'"
          :isButtonActive="
            $store.state.general.screen === screenEnum.CHARACTERS
          "
          @click="setRouter('/personagens')"
        />

        <ToolbarButton
          :label="'Episódios'"
          :class="'q-ml-xs'"
          :isButtonActive="$store.state.general.screen === screenEnum.EPISODES"
          @click="setRouter('/episodios')"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-right q-pa-xs relative-position">
      <b class="q-mr-xs">Desenvolvido por</b>
      <span>luisescx</span>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { ScreenType } from 'src/common/enums';
import { Vue, Component } from 'vue-property-decorator';
import ToolbarButton from '../components/ToolbarButton.vue';

@Component({
  components: { ToolbarButton },
})
export default class MainLayout extends Vue {
  screenEnum = ScreenType;

  mounted() {
    this.setActiveButton(this.$route.path);
  }

  setActiveButton(path: string) {
    if (path === '/personagens') {
      this.$store.dispatch('general/changeScreenButton', ScreenType.CHARACTERS);
    } else {
      this.$store.dispatch('general/changeScreenButton', ScreenType.EPISODES);
    }
  }

  setRouter(path: string) {
    this.setActiveButton(path);

    this.$router.push(path).catch(() => {});
  }
}
</script>
