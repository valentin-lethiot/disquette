<template>
  <v-dialog width="500" v-model="isModalOpen">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          fab
          absolute
          small
          bottom
          right
          color="primary"
          v-bind="attrs"
          v-on="on"
          class="mb-12"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5">
          Vous voulez ajouter une disquette ?
      </v-card-title>

      <v-card-text class="mt-6">
        <v-row>
          <v-text-field id="disquette" v-model="newDisquette" outlined label="Nouvelle disquette"/>
        </v-row>
      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-row justify="center" class="ma-0">
          <v-col cols="3">
            <v-btn color="green darken-2" class="white--text" @click="addNewDisquette">
              Ajouter
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DNewDisquetteModal",
  data () {
    return {
      newDisquette: '',
      isModalOpen: false
    }
  },
  methods: {
    addNewDisquette() {
      if (this.newDisquette) {
        this.$emit('add-new-disquette', this.newDisquette)
      }
      this.newDisquette = ''
      this.isModalOpen = false
    }
  }
}
</script>

<style scoped>

</style>
