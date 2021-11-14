<template>
  <div class="q-pa-md">
    <Table
      :tableType="screenType.EPISODES"
      :queryReturn="episodes"
      :apollo="$apollo"
      :isError="isError"
      @queryPage="pageSelected = $event"
      @queryFilterName="filter.name = $event"
      @openEpisodeDetails="openDetailsModal"
    />

    <EpisodeDetails
      v-if="isModalDetails"
      :isModalDetails="isModalDetails"
      :episode="episode"
      @closeModal="isModalDetails = $event"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { episodes } from '../graphql/EpisodesQuery';
import Table from '.././components/Table.vue';
import { ScreenType } from 'src/common/enums';
import { Episode, EpisodeQuery } from 'src/common/interfaces';
import EpisodeDetails from '../components/EpisodeDetails.vue';

@Component({
  components: { Table, EpisodeDetails },
  apollo: {
    episodes: {
      query: episodes,
      variables() {
        return {
          page: this.pageSelected,
          filter: { ...this.filter },
        };
      },
      error(error) {
        if (error) {
          this.isError = true;

          setTimeout(() => {
            this.isError = false;
          }, 200);
        }
      },
    },
  },
})
export default class Episodes extends Vue {
  screenType = ScreenType;
  episodes: EpisodeQuery;

  filter = {
    name: '',
  };
  pageSelected = 1;
  episode: Episode;
  isModalDetails = false;
  isError = false;

  openDetailsModal(selectedEpisode: Episode) {
    this.episode = selectedEpisode;
    this.isModalDetails = true;
  }
}
</script>
