<template>
  <q-dialog :value="true" persistent>
    <q-card class="no-scroll modal">
      <q-card class="scroll content">
        <img :src="character.image" class="img-style" />
        <q-card-section>
          <div class="col text-h6 ellipsis">
            {{ character.name }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            {{ 'Localização: ' + character.location.name }}
          </div>
        </q-card-section>

        <q-item-section>
          <q-item class="text-subtitle1">Episódios</q-item>

          <q-list
            dense
            bordered
            separator
            v-for="episode in character.episode"
            :key="episode.id"
          >
            <q-item>{{ episode.id + ' - ' + episode.name }}</q-item>
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
import { Character } from '../common/interfaces';
import GoBackButton from './GoBackButton.vue';

@Component({
  components: { GoBackButton },
})
export default class CharacterDetails extends Vue {
  @Prop({ default: false })
  readonly isModalDetail: boolean;

  @Prop()
  readonly character: Character;

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

.img-style {
  height: 30vh;
}
</style>
