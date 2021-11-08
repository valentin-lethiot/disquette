<template>
  <v-container fluid class="fill-height">
    <v-row align="center" class="flex-column">
      <v-row class="flex-column text-center">
        <v-col class="text-h2 text-center">
          La disquette
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col class="text-center text-h6" >
            {{ disquette }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <d-button @new-disquette="changeDisquette"/>
        </v-col>
      </v-row>
      <d-new-disquette-modal @add-new-disquette="storeNewDisquette"/>
    </v-row>
  </v-container>
</template>

<script>

import DButton from "../components/DButton";
import DNewDisquetteModal from "../components/DNewDisquetteModal";

export default {
  name: 'index',
  components: {
    DNewDisquetteModal,
    DButton
  },
  data () {
    return {
      disquette: 'Cliquez pour trouver une disquette !',
      isModalOpen: true
    }
  },
  methods: {
    changeDisquette (newDisquette) {
      this.disquette = newDisquette
    },
    async storeNewDisquette (newDisquette) {
      await this.$store.dispatch('addNewDisquette', newDisquette)
    }
  }
};
</script>
