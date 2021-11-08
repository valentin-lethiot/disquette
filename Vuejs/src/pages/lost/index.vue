<template>
  <v-container fill-height>
    <v-row justify="center" class="text-h1">
      I'm lost !
    </v-row>
    <v-img contain max-height="600" src="https://c.tenor.com/lx2WSGRk8bcAAAAd/pulp-fiction-john-travolta.gif"/>
  </v-container>
</template>

<script>
export default {
  name: "index",
  mounted() {
    setTimeout(() => {
      this.$router.push({name: 'Index'})
    }, 5000)
  }
}
</script>
