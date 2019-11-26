<template>
    <v-container>
        <v-card>
            <v-card-title class="secondary white--text">
                Call Logs
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-card>
                            <v-card-title class="secondary white--text">
                                911 Calls
                            </v-card-title>
                            <v-card-text class="secondary">
                                <v-container>
                                    <v-autocomplete v-model="model" :items="items" :loading="isLoading" :search-input.sync="search" color="white" dark hide-no-data hide-selected item-text="Description" item-value="Person" label="Search Database for citizens" placeholder="Start typing to Search"
                                        prepend-icon="mdi-database-search" return-object></v-autocomplete>
                                </v-container>
                            </v-card-text>
                            <v-card-text>Hey</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card>
                            <v-card-title class="secondary white--text">
                                311 Calls
                            </v-card-title>
                            <v-card-text class="secondary">
                                <v-container>
                                    <v-autocomplete v-model="model" :items="items" :loading="isLoading" :search-input.sync="search" color="white" dark hide-no-data hide-selected item-text="Description" item-value="Person" label="Search Database for citizens" placeholder="Start typing to Search"
                                        prepend-icon="mdi-database-search" return-object></v-autocomplete>
                                </v-container>
                            </v-card-text>
                            <v-card-text>
                                HHey
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
}
</script>
<style>
</style>