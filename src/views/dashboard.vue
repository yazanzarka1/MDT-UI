<template>
<div>
    <v-container fluid> 
        <v-card min-height="80vh" :loading='this.loading' class="background">
          <v-content class="overflow-hidden">
                <router-view/>
          </v-content>
        </v-card >
      </v-container>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:"Dashboard",
    data: function(){
        return{
        }
    },
    computed:{
        ...mapGetters(['loading'])
    }
}
</script>

<style lang="scss" scoped>
.background{
    background-color: #ECEFF1; 
}

</style>