<template>
    
    
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-responsive :aspect-ratio="20/1">
                        <v-container>
                            <h3>
                                Welcome Back {{localUser.rank}} {{localUser.name}}
                            </h3>
                        </v-container>
                    </v-responsive>
                </v-card>
            </v-col>
            <v-col cols="6">
                        <div class="float-right">
                            <h3>
                                {{dayAndDate}}
                            </h3>
                        </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-card elevation="10">
                    <v-card-title>
                        Dispatch:
                    </v-card-title>
                    <div style="height: 30rem" id="scroll">
                        <v-card-text>
                            <div class="d-flex">
                                <h4 class="mb-4"> Current Callsign:</h4>
                                <v-chip class="ml-2 ">{{officer.callsign.length > 3 ? officer.callsign : "N/A"}}</v-chip>
                            </div>
                            <v-text-field v-model="localUser.callsign" dense clearable append-icon="mdi-police-badge" label="Callsign" rounded outlined></v-text-field>
                            <div class="d-flex">
                                <h4 class="mb-4"> Current Partner:</h4>
                                <v-chip class="mx-2">{{officer.partner.length > 3 ? officer.partner : "N/A"}}</v-chip>
                            </div>
                            <v-text-field v-model="localUser.partner" dense clearable append-icon="mdi-human-greeting" label="Partner With:" rounded outlined></v-text-field>
                            <h4>Availablity:</h4>
                            <v-chip :color="officer.duty == true ? 'success' : 'error' ">{{officer.duty == true ? 'Available for calls' : 'Not available for calls' }}</v-chip>
                            <v-switch v-model="localUser.duty" class="custom-red" false-value="false" color="success"> <span class="error--text">10-7</span>
                                <h5 class="success--text mt-1" slot="append">10-8</h5>
                                <h5 class="error--text mt-1" slot="prepend">10-7</h5>
                            </v-switch>
                            <v-row>
                                <v-col cols="6">
                                    <v-btn color="primary" @click="updateOfficerRequest()">Update</v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn color="error" @click="updateOfficerRequest()">Panic Button</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card elevation="10" class="mx-auto">
                    <v-card-title>BOLO:</v-card-title>
                    <div>
                        <div id="scroll" class style="height:30rem">
                            <v-list width="100%" v-for="(x,y) in boloList" :key="y">
                                <v-card class="mx-5" min-height="50px" color="primary" max-width="97%">
                                    <v-card-text>
                                        <div class="d-flex">
                                            <div class="align-self-start">
                                                <h4 class="white--text"><strong>Name:</strong> {{x.name.length > 0 ? x.name : "N/A"}}</h4>
                                            </div>
                                            <div class="ml-auto">
                                                <v-chip :color="x.danger[0]">{{x.danger[1]}}</v-chip>
                                            </div>
                                        </div>
                                        <div style="width:80%">
                                            <p class="white--text"><strong>Description:</strong> {{x.narrative}}</p>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-list>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols=6 align-self="start">
                <v-row>
                    <v-col cols="12" class="my-auto">
                        <v-card elevation="10">
                            <v-card-title>Active Units:</v-card-title>
                            <div id="scroll" style="height:25rem">
                                <v-list flat>
                                    <v-simple-table>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Name</th>
                                                <th class="text-left">Badge No.</th>
                                                <th class="text-left">Callsign </th>
                                                <th class="text-left">Availablity </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="off in activeOfficers" :key="off.name">
                                                <td>{{ off.name }}</td>
                                                <td>{{ off.badgeno }}</td>
                                                <td>{{ off.callsign ? `${off.callsign}`: `N/A` }}</td>
                                                <td>
                                                    <v-chip :color="off.available == '10-8' ? 'success': 'error'">{{ off.available }}</v-chip>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-list>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols=6>
                <v-row>
                    <v-col cols="12">
                        <v-card elevation="10" height="29rem" id="scroll">
                            <v-card-title>Recent 911 Call:</v-card-title>
                            <v-card-text>
                                <v-list>
                                <v-row>
                                    <v-col v-for="(item, index) in calls" :key="index" cols="6">
                                    <v-card color="primary" height="10rem" id="scroll"> 
                                    <v-card-text class="d-flex flex-column" >
                                      <span class="white--text"> <strong class="">Caller: </strong> {{item.name}} </span>
                                      <span class="white--text"> <strong>Time: </strong> {{item.time}} </span>
                                      <span class="white--text"> <strong>Location: </strong> {{item.location}} </span>
                                      <span class="white--text"> <strong>Number: </strong> {{item.number}} </span>
                                      <span class="white--text"> <strong>Narrative: </strong> {{item.info}} </span>
                                    </v-card-text>
                                    </v-card>
                                    </v-col>
                                 </v-row>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    

</template>

<script>
import { mapGetters, mapActions, Store } from 'vuex'
export default {
    name: "Dashboard",
      data: function() {
        return {
            dayAndDate: '',
            localUser: {
                loggedIn: false,
                rank: "POIII",
                name: "Michael Roland",
                callsign: "",
                duty: this.$store.getters.officer.duty,
                partner: ""
            },
            calls: [{
                    id: 1,
                    name: "John Doe",
                    time: "2PM",
                    number: "123123123",
                    info: "My car have been stolen My car have been stolen My car have been stolen My car have been stolen My car have been stolen",
                    location: "Paleto Bay near the hospital"
                },
                {
                    id: 1,
                    name: "John Doe",
                    time: "2PM",
                    number: "123123123",
                    info: "My car have been stolen My car have been stolen My car have been stolen My car have been stolen My car have been stolen",
                    location: "Paleto Bay near the hospital"
                },
                {
                    id: 1,
                    name: "John Doe",
                    time: "2PM",
                    number: "123123123",
                    info: "My car have been stolen My car have been stolen My car have been stolen My car have been stolen My car have been stolen",
                    location: "Paleto Bay near the hospital"
                },
                {
                    id: 1,
                    name: "John Doe",
                    time: "2PM",
                    number: "123123123",
                    info: "My car have been stolen My car have been stolen My car have been stolen My car have been stolen My car have been stolen",
                    location: "Paleto Bay near the hospital"
                },
                {
                    id: 1,
                    name: "John Doe",
                    time: "2PM",
                    number: "123123123",
                    info: "My car have been stolen My car have been stolen My car have been stolen My car have been stolen My car have been stolen",
                    location: "Paleto Bay near the hospital"
                }
            ],
            boloList: [{
                    id: 2,
                    name: "Michael Roland",
                    age: "25",
                    danger: this.dangerLevel(1),
                    lastSeen: "2Am",
                    location: "Paleto B",
                    narrative: "Suspect is very dangerous "
                },
                {
                    id: 3,
                    name: "Michael Roland",
                    age: "25",
                    danger: this.dangerLevel(1),
                    lastSeen: "2Am",
                    location: "Paleto Bay",
                    narrative: "Suspect is very dangerous "
                },
                {
                    id: 4,
                    name: "Michael Roland",
                    age: "25",
                    danger: this.dangerLevel(1),
                    lastSeen: "2Am",
                    location: "Paleto Bay",
                    narrative: "Suspect is very dangerous "
                },
                {
                    id: 5,
                    name: "Michael Roland",
                    age: "22",
                    danger: this.dangerLevel(1),
                    lastSeen: "2Am",
                    location: "Paleto Bay",
                    narrative: "Suspect is very dangerous, Suspect is very dangerous Suspect is very dangerous Suspect is very dangerous Suspect is very dangerous Suspect is very dangerous Suspect is very dangerous"
                },
                {
                    id: 6,
                    name: "Michael Roland",
                    danger: this.dangerLevel(1),
                    narrative: "Suspect is very dangerous "
                },
                {
                    name: "Michael Roland",
                    age: "25",
                    danger: this.dangerLevel(0),
                    lastSeen: "2Am",
                    location: "Paleto Bay",
                    narrative: "Suspect is very dangerous "
                },
                {
                    name: "Michael Roland",
                    age: "25",
                    danger: this.dangerLevel(2),
                    lastSeen: "2Am",
                    location: "Paleto Bay",
                    narrative: "Suspect is very dangerous "
                },
            ],
            activeOfficers: [{
                    name: "Michael Roland",
                    badgeno: "1041",
                    available: "10-8",
                },
                {
                    name: "Thomas Jackson",
                    badgeno: "1044",
                    available: "10-7",
                },
                {
                    name: "Thomas Wales",
                    badgeno: "1046",
                    available: "10-8",
                },
                {
                    name: "Thomas Blackwater",
                    badgeno: "1045",
                    available: "10-7",
                }, {
                    name: "Michael Roland",
                    badgeno: "1041",
                    available: "10-8",
                },
                {
                    name: "Thomas Jackson",
                    badgeno: "1044",
                    available: "10-7",
                },
                {
                    name: "Thomas Wales",
                    badgeno: "1046",
                    available: "10-8",
                },
                {
                    name: "Thomas Blackwater",
                    badgeno: "1045",
                    available: "10-7",
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['loading', 'officer'])
    },
    methods: {
        dangerLevel: function(x) {
            const lvls = { 0: "info", 1: "warning", 2: "error" }
            const text = ["Minor Danger", "Moderate Danger", "High Danger"]
            var obj = { 0: lvls[x], 1: text[x] }
            return obj
        },
        updateOfficerRequest: function() {
            var vm = this
            this.updateOfficer([vm.localUser.callsign, vm.localUser.duty, vm.localUser.partner])
        },
         getDate: function(){
            var currentDate = new Date();
            var date = currentDate.getUTCDate()
            var month = currentDate.getUTCMonth()
            var day = currentDate.getUTCDay()
            var year = currentDate.getUTCFullYear()
            var dayArr =[ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            var MonthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            function correctDate(){
            if(date > 3 && date <= 20){
                return `${date}th`
            }else if(date < 4){
                if(date == 1){
                    return "1st"
                }else if(date == 2){
                    return "2nd"
                } else{
                    return "3rd"
                }
            }else if(date < 24 && date > 20){
                if(date == 21){
                    return `${date}st`
                } else if(date == 22){
                    return `${date}nd`
                }else{
                    return `${date}rd`
                }
            }
            }
            this.dayAndDate = `${dayArr[day]} ${correctDate()}, ${MonthArr[month]} ${year}`
            
        },
        ...mapActions(['updateOfficer', 'alertUser'])
    },
    created(){
        this.getDate()
        this.updateOfficer();
    }
}
</script>

<style lang="scss" scoped>

#scroll {
    overflow-y: auto;
}
.custom-red .v-input--selection-controls__input div {
  color: red;
}
</style>