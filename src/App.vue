<template>
    <div class="App" id="scroll">
    
        <v-app>
    
            <div class="fix mb-0 pa-0">
    
                <v-system-bar window color="primary">
    
                    <v-btn icon text>
    
                        <v-icon color="red">mdi-close</v-icon>
    
                    </v-btn>
    
                    <v-spacer/>
    
                    <h5 style="color:white">Los Santos Police Department - Mobile Data Terminal</h5>
    
                </v-system-bar>
    
                <v-snackbar top absolute :timeout="2000" style="top:2.5rem" v-model="notification.active" :color="notification.color">
    
                    {{this.notification.text}}
    
                </v-snackbar>
    
                <v-toolbar v-show="officer.loggedIn" dense class="secondary">
    
                    <v-toolbar-title>
    
                        <h5 class="white--text">Los Santos Police Department</h5>
    
                    </v-toolbar-title>
    
                    <v-spacer></v-spacer>
    
                    <v-toolbar-items v-for="item in menuItems" :key="item.id">
    
                        <v-btn text class="white--text" :to="item.to">
    
                            <v-icon left>mdi-{{item.icon}}</v-icon>{{item.name}}</v-btn>
    
                    </v-toolbar-items>
    
                </v-toolbar>
    
            </div>
    
            <div>
    
                <router-view/>
    
    
    
            </div>
    
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
    data: function() {
        return {
            menuItems: [{
                    id: 1,
                    name: "Dashboard",
                    icon: 'view-dashboard',
                    to: '/dashboard/index'
                },
                {
                    id: 2,
                    name: "Search Name",
                    icon: 'account-search',
                    to: '/dashboard/searchname'
                },
                {
                    id: 3,
                    name: "Search Plate",
                    icon: 'car',
                    to: '/dashboard/searchplate'
                },
                {
                    id: 4,
                    name: "Bolo",
                    icon: 'book-search',
                    to: '/dashboard/bolo'
                },
                {
                    id: 5,
                    name: "911/311 calls",
                    icon: 'phone-ring',
                    to: '/dashboard/call-log'
                },
                {
                    id: 6,
                    name: "Log out",
                    icon: 'logout'
                }
            ]
        }
    },
    computed: {
        ...mapGetters({ officer: 'officer', notification: 'notification', menuActive: 'menuactive' })
    },
    created() {}


}
</script>

<style lang="scss">
.App {
    position: absolute;
    width: 95vw;
    height: 95vh; // border: 2px solid #c00;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-x: hidden; //border: 2px dotted red;
    margin: 0;
    padding: 0;
    border: 2px solid black;
    border-radius: 5px;
}

#scroll::-webkit-scrollbar {
    width: 5px;
    background-color: #F5F5F5;
}

#scroll::-webkit-scrollbar-thumb {
    background-color: rgba($color: #000000, $alpha: .3);
}

.footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0px;
    margin-top: 10px;
}

.fix {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
}

body {
    background-color: black;
}
</style>
