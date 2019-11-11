<template>
<div>
  <v-toolbar dense class="secondary">
      <v-toolbar-title class="">
        <h5 class="white--text">Los Santos Police Department</h5>  
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in menuItems" :key="item.id" >
         <v-btn text class="white--text" :to="item.to"><v-icon left>mdi-{{item.icon}}</v-icon>{{item.name}}</v-btn>
      </v-toolbar-items>
  </v-toolbar>
  <v-container>
        <v-content>
            <router-view/>

        </v-content>
    </v-container>
</div>
</template>

<script>
export default {
    name:"Dashboard",
    data: function(){
        return{
            menuItems:[
                {   
                    id:1,
                    name : "Search Name",
                    icon : 'account-search',
                    to : '/dashboard/searchname'
                },
                {
                    id:2,
                    name: "Search Plate",
                    icon:'car',
                    to : '/dashboard/searchplate'
                },
                {
                    id:3,
                    name: "Bolo",
                    icon:'book-search',
                    to : '/dashboard/bolo'
                },
                {
                    id:4,
                    name: "911/311 calls",
                    icon:'phone-ring',
                    to : '/dashboard/call-log'
                },
                {
                    id:8,
                    name:"Log out",
                    icon:'logout'
                }
            ]
        }
    }
}
</script>

<style>
</style>