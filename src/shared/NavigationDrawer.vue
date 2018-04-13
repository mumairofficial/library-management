<template>
  <v-navigation-drawer
      permanent
      app
      v-model="drawer"
      width="260">
      <v-list class="p-t-0">
        <v-list-tile dark class="teal darken-3 branding">
          <v-list-tile-content class="mt-14">
            <v-toolbar-title class="ml-0 title">
              <span class="hidden-sm-and-down">Library</span>
            </v-toolbar-title>
          </v-list-tile-content>
        </v-list-tile>

        <template v-for="item in menuItems">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>

          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i"
              ripple @click="">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

          <v-list-tile v-else @click="" ripple :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<style>
.p-t-0 {
  padding-top: 0 !important;
}
.mt-14 {
  margin-top: 14px;
}
.branding {
  color: white;
  height: 64px !important;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({
    drawer: null,
    menuItems: [
      { icon: 'home', text: 'HOME' },
      { icon: 'supervisor_account', text: 'MANAGE USERS' },
      { icon: 'library_books', text: 'LIBRARY' },
      { icon: 'settings', text: 'SETTINGS' }
    ]
  })
}
</script>
