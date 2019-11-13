<template>
  <v-container class="d-flex">
      <v-row justify="space-between" >
        <v-col cols=6>
          <v-card class="ma-6">
            <v-card-title>Recent 911 Call:</v-card-title>
            <v-card-text>
              <v-timeline
                dense
              >
                <v-timeline-item
                  v-for="call in calls" :key="call.id"
                  color="red darken-3"
                  small
                  
                >
                  <v-row class="pt-1">
                    <v-col cols="5">
                      <strong>{{call.time}}</strong>
                      <br/>
                      {{call.location}}       
                    </v-col>
                    <v-col>
                      <strong>{{call.name}}</strong>
                      <div class="caption">{{call.info}}</div>
                    </v-col>
                    
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=6>
          <v-card class="ma-6">
            <v-card-title>Bolo:</v-card-title>
            <v-card-text>
                <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Name</th>
                          <th class="text-left">Age</th>
                          <th class="text-left">Danger</th>
                          <th class="text-left">Last Seen</th>
                          <th class="text-left">Last Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in boloList" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>{{ item.age }}</td>
                          <td>{{ item.danger }}</td>
                          <td>{{ item.lastSeen }}</td>
                          <td>{{ item.lastLocation }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data : function(){
    return{
      calls:[
        {
          id:1,
          name:"John Doe",
          time:"2PM",
          info:"My car have been stolen My car have been stolen My car have been stolen My car have been stolen My car have been stolen",
          location: "Paleto Bay near the hospital"
        }
      ],
      boloList:[{
            name : "Michael Roland",
            age : "25",
            danger : "Very Dangerous",
            lastSeen : "2Am",
            lastLocation : "Paleto Bay"   
      }

      ]
    }
      
  }
}
</script>

<style>

</style>