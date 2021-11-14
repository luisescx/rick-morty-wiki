<template>
  <div class="q-pa-md">
    <Table
      :tableType="screenType.CHARACTERS"
      :queryReturn="characters"
      :apollo="$apollo"
      :isError="isError"
      @queryPage="pageSelected = $event"
      @queryFilterName="filter.name = $event"
      @openCharacterDetails="openDetailsModal"
    />

    <CharacterDetails
      v-if="isModalDetails"
      :isModalDetails="isModalDetails"
      :character="character"
      @closeModal="isModalDetails = $event"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { characters } from '../graphql/CharactersQuery';
import CharacterDetails from '../components/CharacterDetails.vue';
import { Character, CharacterQuery } from '../common/interfaces';
import Table from '.././components/Table.vue';
import { ScreenType } from 'src/common/enums';

@Component({
  components: { CharacterDetails, Table },
  apollo: {
    characters: {
      query: characters,
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
export default class Characters extends Vue {
  screenType = ScreenType;
  isModalDetails = false;
  characters: CharacterQuery;
  character: Character;
  pageSelected = 1;
  isError = false;

  filter = {
    name: '',
  };

  openDetailsModal(selectedCharacter: Character) {
    this.character = selectedCharacter;
    this.isModalDetails = true;
  }
}
</script>
