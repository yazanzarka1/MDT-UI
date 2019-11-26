<template>
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <v-card color="secondary">
                        <v-card-text>
                     <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        dark
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="Person"
        label="Search Database for citizens"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
                        </v-card-text>
                    </v-card>
                </v-col>
             </v-row>
                <v-divider  aria-orientation="horizental" role="presentation"></v-divider>
                <v-col cols="12" md="12" id="scroll">
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

        </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            editEnabled: false,
            name: '',
            rules: [v => v.length <= 200 || 'Max 200 characters'],
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 20 || 'Name must be less than 20 characters',
                v => v.length > 3 || 'Name must be more than than 3 characters',
            ],
            
              descriptionLimit: 60,
              entries: [],
              isLoading: false,
              model: null,
              search: null,

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
        ...mapGetters(['searchResults', 'personGetter']),
              fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description

          return Object.assign({}, entry, { Description })
        })
      },
 
    },
    watch: {
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        
      },
    }
}
</script>
<style lang="scss">
#scroll {
    overflow: auto;
}
</style>