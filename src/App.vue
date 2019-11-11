<template>
<div class="App" id="scroll" >
  <v-app class="ma-0 pa-0 main">
    <div class="fix">
     <v-system-bar class="mb-2" window color="primary">
        <v-btn icon text>
        <v-icon color="red">mdi-close</v-icon>
        </v-btn>
        <v-spacer/>
        <h5 style="color:white">Los Santos Police Department - Mobile Data Terminal</h5>
      </v-system-bar>
       <v-snackbar top absolute style="top:2.5rem" v-model="notification.active" :color="notification.color">
      {{this.notification.text}}
    </v-snackbar>
    </div>
      <v-container fluid> 
        <v-card min-height="80vh" :loading='this.loading' class="overflow-hidden">
          <v-content class="overflow-hidden">
            <router-view/>
          </v-content>
        </v-card >
      </v-container>
  </v-app>
</div>

</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  methods: {
      ...mapActions(['fetchUsers'])
    },
  data: function(){
    return{}
  },
  computed:{
    ...mapGetters({loading: 'loading', notification: 'notification'} )
  },
  created(){
  }

  
}
 
</script>

<style lang="scss">
.App{
  position: absolute;
  width: 90vw;
	height: 90vh;

	// border: 2px solid #c00;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  //border: 2px dotted red;
  margin: 0;
  padding: 0;
}

body{
  background-color: rgb(45, 45, 77)
}

#scroll::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}
#scroll::-webkit-scrollbar-thumb
  {
	background-color: rgba($color: #000000, $alpha: .5);
  }

.footer{
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0px;
  margin-top: 10px;
}

.fix{
    position:sticky;
    top:0;
    width:100%;
    z-index:100;
}


</style>
