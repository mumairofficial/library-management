<template>
  <v-app id="inspire">
    
    <navigation-drawer></navigation-drawer>
    
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed>
      
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">MGC-Library</span>
      </v-toolbar-title>
      
      <!-- <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"></v-text-field> -->

      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-menu bottom left :nudge-width="200">
        <v-btn icon slot="activator" dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in topbarProfileMenu" :key="i" @click="">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    
    <v-content>
      <v-container fluid>
        <!-- <img src="./assets/logo.png"> -->
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NavigationDrawer from './shared/NavigationDrawer'
  export default {
    components: {
      'navigation-drawer': NavigationDrawer
    },
    data: () => ({
      drawer: null,
      menuItems: [
        { icon: 'dashboard', text: 'Dashboard' },
        { icon: 'supervisor_account', text: 'Users' },
        { icon: 'library_books', text: 'Library' },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' },
      ],
      topbarProfileMenu: [
        { title: 'Profile' },
        { title: 'Logout' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>