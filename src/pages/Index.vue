<template>
  <q-page class="row items-center justify-evenly">
    <Characters />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Characters from '../pages/Characters.vue';

@Component({
  components: { Characters },
})
export default class PageIndex extends Vue {}
</script>
