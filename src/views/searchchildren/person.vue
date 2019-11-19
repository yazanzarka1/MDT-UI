<template>
    <v-form v-model="searchValid">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <div class="d-flex align-baseline">
                        <v-text-field v-model="name" :rules="nameRules" :counter="20" label="Full Name" append-icon="mdi-card-search-outline" required clearable></v-text-field>
                        <v-btn small class="ml-4" @click="requestSearch()">Search
                            <v-icon right>mdi-database-search</v-icon>
                        </v-btn>
                    </div>
                    <v-row>
                        <v-col cols="12" md="12" class="d-flex">
                            <h4 class="">Showing results for:</h4>
                            <span class="ml-2">{{name}}</span>
                        </v-col>
                        <v-col>
                            <v-card class="secondary pa-2" height="25rem" id="scroll">
                                <v-btn color="info" block small class="my-2" elevation="5" v-for="(result, index) in searchResults" :key="index" @click="addPerson(searchResults[index])">
                                    <span class="white--text">{{searchResults.length != 0 ? result.name : "No Data found"}}</span>
                                </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-divider :vertical="true" aria-orientation="vertical" role="presentation"></v-divider>
                <v-col cols="12" md="7" style="height: 600px" id="scroll">
                    <v-row>
                        <v-col cols="6">
                            <v-card height="17rem">
                                <v-card-title class="white--text secondary">
                                    Personal Information:
                                </v-card-title>
                                <v-card-item>
                                    <v-container>
                                        <div class="d-flex flex-row align-baseline mb-4">
                                            <h4 class="pr-2">Name: </h4>
                                            <v-chip color="info">{{ this.personGetter.name.length > 0 ? this.personGetter.name : "No Data"}}</v-chip>
                                        </div>
                                        <div class="d-flex flex-row align-baseline mb-4">
                                            <h4 class="pr-2">Age: </h4>
                                            <v-chip>{{ this.personGetter.age.length > 0 ? this.personGetter.age : "No Data"}}</v-chip>
                                        </div>
                                        <div class="d-flex flex-row align-baseline mb-4">
                                            <h4 class="pr-2">Gender: </h4>
                                            <v-chip>{{ this.personGetter.gender.length > 0 ? this.personGetter.gender : "No Data"}}</v-chip>
                                        </div>
                                        <div class="d-flex flex-row align-baseline mb-4">
                                            <h4 class="pr-2">Number: </h4>
                                            <v-chip>{{ this.personGetter.number.length > 0 ? this.personGetter.number : "No Data"}}</v-chip>
                                        </div>
                                    </v-container>
                                </v-card-item>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card height="17rem" id="scroll">
                                <v-card-title class="white--text secondary">
                                    Additional Information
                                </v-card-title>
                                <v-card-item>
                                    <v-container>
                                        <div v-if="editEnabled != true">
                                            <p>{{personGetter.additionalInfo}}</p>
                                        </div>
                                        <div v-else>
                                            <v-textarea id="scroll" counter label="Info" :rules="rules" no-resize :value="personGetter.additionalInfo" clearable background-color="grey lighten-2" height="100%"></v-textarea>
                                        </div>
                                    </v-container>
                                </v-card-item>
                                <v-card-actions>
                                    <v-btn v-if="editEnabled != true" color="info" @click="toggleEdit" small>Edit</v-btn>
                                    <v-btn v-else small color="success" @click="toggleEdit">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card>
                                <v-card-title class="white--text secondary">
                                    Licenses
                                </v-card-title>
                                <v-card-item>
                                    <v-list flat v-if="personGetter.name.length > 0">
                                        <v-simple-table>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">License Type: </th>
                                                    <th class="text-left">Granted</th>
                                                    <th class="text-left">Issue date</th>
                                                    <th class="text-left">Expired at</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Driver License</td>
                                 <td><v-chip :color="personGetter.licenses.driver.granted ? 'success' : 'error'">{{personGetter.licenses.driver.granted ? "Yes" : "No"}}</v-chip></td>
                                                    <td>{{personGetter.licenses.driver.issue}}</td>
                                                    <td>{{personGetter.licenses.driver.expire}}</td>
                                                </tr>
                                                <tr>
                                                  <td>Bike License</td>
                                               <td><v-chip :color="personGetter.licenses.bike.granted ? 'success' : 'error'">{{personGetter.licenses.bike.granted ? "Yes" : "No"}}</v-chip></td>
                                                    <td>{{personGetter.licenses.bike.issue}}</td>
                                                    <td>{{personGetter.licenses.bike.expire}}</td>
                                                  
                                                   
                                                </tr>
                                                <tr>
                                                   <td>Heavy Vehicle License</td>
                               <td><v-chip :color="personGetter.licenses.heavy.granted ? 'success' : 'error'">{{personGetter.licenses.heavy.granted ? "Yes" : "No"}}</v-chip></td>
                                                    <td>{{personGetter.licenses.heavy.issue}}</td>
                                                    <td>{{personGetter.licenses.heavy.expire}}</td>
                                                    
                                                </tr>
                                                <tr>
                                                  <td>Pilot License</td>
                           <td><v-chip :color="personGetter.licenses.pilot.granted ? 'success' : 'error'">{{personGetter.licenses.pilot.granted ? "Yes" : "No"}}</v-chip></td>
                                                    <td>{{personGetter.licenses.pilot.issue}}</td>
                                                    <td>{{personGetter.licenses.pilot.expire}}</td>
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                  <td>Firearm License Tire 1</td>
                                                  <td><v-chip :color="personGetter.licenses.w1.granted ? 'success' : 'error'">{{personGetter.licenses.w1.granted ? "Yes" : "No"}}</v-chip></td>
                                                    <td>{{personGetter.licenses.w1.issue}}</td>
                                                    <td>{{personGetter.licenses.w1.expire}}</td>
                                                </tr>
                                                <tr>
                                                  <td>Firearm License Tire 2</td>
                                                 <td><v-chip :color="personGetter.licenses.w2.granted ? 'success' : 'error'">{{personGetter.licenses.w2.granted ? "Yes" : "No"}}</v-chip></td>
                                                    <td>{{personGetter.licenses.w2.issue}}</td>
                                                    <td>{{personGetter.licenses.w2.expire}}</td>
                                                </tr>
                                            </tbody>
                                            
                                        </v-simple-table>
                                        
                                    </v-list>
                                    <v-container v-else>
                                              No Data
                                            </v-container>
                                </v-card-item>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card height="17rem" id="scroll">
                                <v-card-title class="white--text secondary">
                                    Properties
                                </v-card-title>
                                <v-card-item>
                                    <v-list flat>
                                        <v-simple-table>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">Address </th>
                                                    <th class="text-left">ZIP</th>
                                                    <th class="text-left">Browse</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="property in personGetter.properties" :key="property.zip">
                                                    <td>{{ property.address }}</td>
                                                    <td>{{ property.zip }}</td>
                                                    <td>
                                                        <v-btn color="success" x-small>Go</v-btn>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </v-simple-table>
                                    </v-list>
                                </v-card-item>
                            </v-card>
                        </v-col>
                        
                        <v-col cols="6">
                            <v-card height="17rem" id="scroll">
                                <v-card-title class="white--text secondary">
                                    Vehicles
                                </v-card-title>
                                <v-card-item class="d-flex flex-column">
                                    <v-list flat>
                                        <v-simple-table>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">Model </th>
                                                    <th class="text-left">Plate</th>
                                                    <th class="text-left">Browse</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="vehicle in personGetter.vehicles" :key="vehicle.plate_text">
                                                    <td>{{ vehicle.model }}</td>
                                                    <td>{{ vehicle.plate_text }}</td>
                                                    <td>
                                                        <v-btn color="success" x-small>Go</v-btn>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </v-simple-table>
                                    </v-list>
                                </v-card-item>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card min-height="17rem">
                                <v-card-title class="white--text secondary">
                                    Prior Convictions
                                </v-card-title>
                                <v-card-item>
                                    <v-list flat>
                                        <v-simple-table>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">ID #</th>
                                                    <th class="text-left">Crime Description.</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="conviction in personGetter.priorConvictions" :key="conviction.id">
                                                    <td>{{ conviction.code }}</td>
                                                    <td>{{ conviction.des }}</td>
                                                </tr>
                                            </tbody>
                                        </v-simple-table>
                                    </v-list>
                                </v-card-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            searchVaild: false,
            editEnabled: false,
            name: '',
            rules: [v => v.length <= 200 || 'Max 200 characters'],
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 20 || 'Name must be less than 20 characters',
                v => v.length > 3 || 'Name must be more than than 3 characters',
            ],
        }
    },
    methods: {
        requestSearch() {
            var searchQuery = this.name
            if (searchQuery.length > 3) {
                this.getSearch(searchQuery)
            } else {
                this.alertUser({ text: "Search Query must have more than 3 characters", color: "error" })
            }
        },
        toggleEdit() {
            this.editEnabled = !this.editEnabled
        },
        ...mapActions(['getSearch', 'alertUser', 'addPerson'])
    },
    computed: {
        ...mapGetters(['searchResults', 'personGetter'])
    }
}
</script>
<style lang="scss">
#scroll {
    overflow: auto;
}
</style>