<template>
  <v-navigation-drawer
    dark
    permanent
    app
    v-model="drawer"
    width="260"
    style="background-color: #2f4050">

    <v-list class="p-t-0">
      <v-list-tile dark class="branding">
        <v-list-tile-content class="mt-5">
          <v-toolbar-title class="ml-0 title" style="color: lightseagreen">
            <span class="subheading">Library</span>
            <br>
            <span class="title">Management</span>
          </v-toolbar-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-list-group
        v-for="item in menuItems"
        :key="item.title"
        :prepend-icon="item.action"
        no-action
        expand="true">

        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="subItem in item.items" :key="subItem.title" ripple @click="" >
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>

      </v-list-group>
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
    name: "NavigationDrawer",
    data: () => ({
      drawer: null,
      menuItems: [
        {
          action: "home",
          title: "HOME",
          active: true,
          items: [{ title: "Analytics" }, { title: "Notifications" }]
        },
        {
          action: "shopping_cart",
          title: "SALES",
          items: [
            { title: "New Invoice" },
            { title: "Manager Invoices" },
            { title: "Register" },
            { title: "Sale Returns" },
            { title: "Recovery" }
          ]
        },
        {
          action: "store",
          title: "PURCHASE",
          items: [{ title: "New Purchase" }, { title: "Manager" }]
        },
        {
          action: "supervisor_account",
          title: "EMPLOYEES",
          items: [{ title: "Add New" }, { title: "Manage Existing" }]
        },
        {
          action: "settings",
          title: "SETTINGS",
          items: [{ title: "Stock" }, { title: "Brands" }, { title: "Reports" }]
        }
      ]
    })
  };
</script>
