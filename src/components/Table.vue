<template>
  <div>
    <q-table
      grid
      row-key="name"
      :data="dataList"
      :loading="apollo.queries[this.tableType].loading"
      :pagination.sync="pagination"
      @request="onRequest"
    >
      <template v-slot:top>
        <div class="row col-12 q-pa-none">
          <SelectFilter
            :selectedOption="selectedOption"
            @setSelectedOption="selectedOption = $event"
          />
          <InputFilter
            :filterNameProps="filter.name"
            @setFilterName="filter.name = $event"
          />
        </div>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-2">
          <CharacterCard
            v-if="tableType === screenType.CHARACTERS"
            :characterName="props.row.name"
            :characterImage="props.row.image"
            @openDetailsModal="openCharacterDetails(props.row)"
          />

          <EpisodeCard
            v-else
            :episodeName="`${props.row.id + ' - ' + props.row.name}`"
            :espisodeDate="props.row.air_date"
            @openDetailsModal="openEpisodeDetails(props.row)"
          />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from 'vue-property-decorator';
import { ScreenType, SelectFilterType } from 'src/common/enums';
import {
  Character,
  CharacterQuery,
  Episode,
  EpisodeQuery,
} from 'src/common/interfaces';
import SelectFilter from './SelectFilter.vue';
import InputFilter from './InputFilter.vue';
import CharacterCard from './CharacterCard.vue';
import EpisodeCard from './EpisodeCard.vue';
import Tooltip from './Tooltip.vue';

@Component({
  components: {
    SelectFilter,
    InputFilter,
    CharacterCard,
    EpisodeCard,
    Tooltip,
  },
})
export default class Table extends Vue {
  screenType = ScreenType;
  pagination = {
    page: 1,
    rowsPerPage: 20,
    rowsNumber: 1,
    sortBy: 'desc',
    descending: false,
  };

  character: Character;

  filter = {
    name: '',
  };

  selectOptions = ['Crescente', 'Decrescente'];
  selectedOption = SelectFilterType.ASCENDANT;
  pageSelected = 1;
  dataList: Episode[] | Character[] = [];

  @Prop({
    default: () => {
      return {};
    },
  })
  readonly queryReturn: CharacterQuery | EpisodeQuery;

  @Prop()
  readonly apollo: any;

  @Prop()
  readonly isError: boolean;

  @Prop()
  readonly tableType: ScreenType;

  @Emit('queryPage')
  setQueryPage(page: number) {
    return page;
  }

  @Emit('queryFilterName')
  setQueryName(name: string) {
    return name;
  }

  @Emit('openCharacterDetails')
  openCharacterDetails(selectedCharacter: Character) {
    return selectedCharacter;
  }

  @Emit('openEpisodeDetails')
  openEpisodeDetails(selectedEpisode: Episode) {
    return selectedEpisode;
  }

  @Watch('selectedOption')
  sortCharactersArray(selectedValue: SelectFilterType) {
    if (selectedValue === SelectFilterType.ASCENDANT) {
      this.pagination.page = 1;
      this.pageSelected = 1;
      this.setQueryPage(this.pageSelected);
      this.pagination.descending = false;
    } else {
      this.pagination.page = 1;
      this.pageSelected = Math.ceil(
        this.pagination.rowsNumber / this.pagination.rowsPerPage
      );
      this.setQueryPage(this.pageSelected);
      this.pagination.descending = true;
    }
  }

  @Watch('queryReturn')
  observeQueryReturn(queryResult: CharacterQuery | EpisodeQuery) {
    if (queryResult?.info?.count) {
      this.pagination.rowsNumber = queryResult.info.count;
    }
  }

  @Watch('isError')
  clearDataList(value: boolean) {
    if (value) {
      this.dataList = [];
    }
  }

  @Watch('queryReturn.results')
  changeDataList(resultList: Episode[] | Character[]) {
    if (resultList) {
      this.dataList = JSON.parse(JSON.stringify(resultList));
    }
  }

  @Watch('filter.name', { deep: true })
  observeFilter(filterName: string) {
    this.setQueryName(filterName);
    this.pagination.page = 1;
    this.pageSelected = 1;
    this.setQueryPage(this.pageSelected);
    this.pagination.descending = false;
    this.selectedOption = SelectFilterType.ASCENDANT;
  }

  mounted() {
    this.setDataOnMounted();
  }

  setDataOnMounted() {
    this.observeQueryReturn(this.queryReturn);

    if (this.queryReturn.results && this.queryReturn.results.length > 0) {
      this.changeDataList(this.queryReturn.results);
    }
  }

  onRequest(props: any) {
    try {
      const paginationTemp = this.pagination.page;
      this.pagination.page = props.pagination.page;
      if (this.selectedOption === SelectFilterType.ASCENDANT) {
        this.pageSelected = props.pagination.page;
        this.setQueryPage(this.pageSelected);
      } else {
        if (props.pagination.page === 1) {
          this.pageSelected = Math.ceil(
            this.pagination.rowsNumber / this.pagination.rowsPerPage
          );
          this.setQueryPage(this.pageSelected);
        } else if (
          props.pagination.page ===
          Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
        ) {
          this.pageSelected = 1;
          this.setQueryPage(1);
        } else if (this.pagination.page > paginationTemp) {
          this.pageSelected--;
          this.setQueryPage(this.pageSelected);
        } else {
          this.pageSelected++;
          this.setQueryPage(this.pageSelected);
        }
      }
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
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

::v-deep .q-table__top {
  padding: 0px 4px 8px 0px;
}

::v-deep .q-table__control:nth-child(2) {
  display: none;
}
</style>
