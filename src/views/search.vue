<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      <v-card>
        <v-toolbar dense class="primary">
    
                    <v-toolbar-title>
    
                        <h5 class="white--text">Database Search</h5>
    
                    </v-toolbar-title>
    
                    <v-spacer></v-spacer>
    
                    <v-toolbar-items v-for="(item, index) in menuItems" :key="index">
    
                        <v-btn text class="white--text" :to="item.to">
    
                            <v-icon left>mdi-{{item.icon}}</v-icon>{{item.name}}</v-btn>
    
                    </v-toolbar-items>
    
                </v-toolbar>
          <v-row>
            <v-col cols="12">
              
              <router-view/>

            </v-col>
          </v-row>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data : function(params) {
    return{
       menuItems: [{
                    name: "Citizen",
                    icon: 'face-recognition',
                    to: '/search/person'
                },
                {
                    name: "Property",
                    icon: 'home-outline',
                    to: '/search/property'
                },
                {
                    name: "Vehicle",
                    icon: 'car-info',
                    to: '/search/vehicle'
                }]
    }
  }
}
</script>

<style>

</style>