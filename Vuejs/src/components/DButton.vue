<template>
  <v-btn raised rounded color="deep-purple" class="white--text" @click="buttonClicked" :loading="isLoading">
    Click !
  </v-btn>
</template>

<script>
export default {
  name: "DButton",
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    buttonClicked () {
      this.$store.dispatch('setNewCurrentDisquette')

      const randomSleepTime = Math.ceil(Math.random()*5) * 1000
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$emit('new-disquette', this.getNewDisquette)
      }
      , randomSleepTime);
    }
  },
  computed: {
    getNewDisquette() {
      return this.$store.getters.getCurrentDisquette
    }
  }
}
</script>

<style scoped>

</style>
