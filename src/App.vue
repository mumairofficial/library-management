<template>
  <v-app id="inspire">

    <navigation-drawer></navigation-drawer>

    <toolbar></toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style>
</style>

<script>
import NavigationDrawer from './shared/NavigationDrawer'
import Toolbar from './shared/Toolbar'

export default {
  components: {
    'navigation-drawer': NavigationDrawer,
    toolbar: Toolbar
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
