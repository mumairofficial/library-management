<template>

  <v-container grid-list-md style="width: 80%;" class="mt-5">
    <v-layout row wrap>
      <v-flex xs12 md2 class="mr-3">
        <v-card hover>
          <v-card-title>
            <h3 class="headline">Users</h3>
            <v-spacer></v-spacer>
            <v-tooltip top>
              <v-btn icon class="mr-0" slot="activator">
                <v-icon>add</v-icon>
              </v-btn>
              <span>This is tool tip</span>
            </v-tooltip>
            <div class="display-3">150</div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 md2 class="mr-3">
        <v-card hover>
          <v-card-title>
            <h3 class="headline">Books</h3>
            <v-spacer></v-spacer>
            <v-tooltip top>
              <v-btn icon class="mr-0" slot="activator">
                <v-icon>add</v-icon>
              </v-btn>
              <span>This is tool tip</span>
            </v-tooltip>
            <div class="display-3">100K</div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 md6 class="mr-3">
        <v-card hover>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the Southern Highlands of New South Wales,
                Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
