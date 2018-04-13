<template>
  <v-toolbar color="white" flat light app :clipped-left="$vuetify.breakpoint.lgAndUp" fixed>
      
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3 title">
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <span class="hidden-sm-and-down">Library</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn icon class="m-0">
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-menu bottom left :nudge-width="160" transition="scale-transition" origin="right top 0">
        <v-btn icon slot="activator" class="m-0">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in topbarProfileMenu" @click="" ripple :key="i">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu :close-on-content-click="false" :nudge-width="250" transition="scale-transition" origin="right top 0" class="m-r-md">
        <v-btn @click="" icon
          slot="activator" ripple class="m-0">
          <v-avatar
            :tile="false"
            :size="28"
            class="grey lighten-4">
            <img :src="'https://vignette.wikia.nocookie.net/thefosters/images/a/ac/JudeS3promo.jpg'" alt="avatar">
          </v-avatar>
        </v-btn>

        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="'https://vignette.wikia.nocookie.net/thefosters/images/a/ac/JudeS3promo.jpg'" alt="John">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
              <v-list-tile-sub-title>hello@john.com</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        
          <v-divider></v-divider>
          
          <v-list-tile @click="" ripple>
            <v-list-tile-action>
              <v-icon color="gray">exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sign out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-menu>

    </v-toolbar>
</template>

<style scoped>
.toolbar {
  border-bottom: 1px solid #e0e0e0 !important;
}
.list__tile--avatar {
  height: 72px;
}
.m-0 {
  margin: 0px !important;
}
.m-r-md {
  margin-right: 22px !important;
}
</style>


<script>
export default {
  name: 'Toolbar',
  data: () => ({
    drawer: null,
    topbarProfileMenu: [
      { title: 'User settings' },
      { title: 'Send feedback' },
      { title: 'Help' }
    ]
  })
};
</script>

