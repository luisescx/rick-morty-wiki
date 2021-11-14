<template>
  <q-dialog :value="true" persistent>
    <q-card class="no-scroll modal">
      <q-card class="scroll content">
        <q-card-section>
          <div class="col text-h6 ellipsis">
            {{ episode.id + ' - ' + episode.name }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            {{ 'Data de Exibição: ' + episode.air_date }}
          </div>
        </q-card-section>

        <q-item-section>
          <q-item class="text-subtitle1">Personagens</q-item>

          <q-list
            dense
            bordered
            separator
            v-for="character in episode.characters"
            :key="character.id"
          >
            <q-item>{{ character.name }}</q-item>
          </q-list>
        </q-item-section>
      </q-card>

      <q-separator />

      <q-card-actions align="right" class="card-content">
        <GoBackButton @closeModal="closeModal" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Episode } from '../common/interfaces';
import GoBackButton from './GoBackButton.vue';

@Component({
  components: { GoBackButton },
})
export default class EpisodeDetails extends Vue {
  @Prop({ default: false })
  readonly isModalDetail: boolean;

  @Prop()
  readonly episode: Episode;

  @Emit('closeModal')
  closeModal() {
    return false;
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}

::v-deep .q-item {
  align-items: center;
}

.modal {
  width: 60vw;
  height: 70vh;
  background: #f8fcff;
}

.content {
  height: 93%;
  background: #eef7ff;
}

.card-content {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
