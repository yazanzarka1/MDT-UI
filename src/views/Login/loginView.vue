<template>
    <div>
    
        <v-row justify="center" class="mt-2">
    
            <v-col cols="5" sm="10" md="8" lg="6">
    
                <div class="d-flex justify-center">
    
                    <v-img src="@/assets/lspd.png" max-width="200px" max-height="200px"></v-img>
    
                </div>
    
                <v-form ref="form">
    
                    <v-text-field label="Badge Number" outlined class="pt-4" rounded v-model="badgeid"></v-text-field>
    
                    <v-text-field label="Password" outlined rounded type="password" v-model="password"></v-text-field>
                    
                    <div class="d-flex dark mb-2">
    
                        <v-btn width="100%" @click="validateUser">Submit</v-btn>
    
                    </div>
    
                </v-form>
    
    
    
            </v-col>
    
        </v-row>
    
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ax from "axios";
export default {
    name: "LoginView",
    data() {
        return {
            badgeid: '',
            password: '',
            Text: null

        }
    },
    computed: {
        ...mapGetters(['loggedIn'])
    },
    methods: {
        async validateUser(e) {
            if (this.badgeid !== '' && this.password.length > 0) {
                const res = await ax.get('https://my-json-server.typicode.com/yazanzarka1/fakeapi/users')
                for (var k in res.data) {
                    if (!res.data.hasOwnProperty(k)) continue;
                    if (res.data[k].badgeid == this.badgeid && res.data[k].password == this.password) {
                        this.alertUser({ color: "success", text: "logged in successfully" })
                        this.$router.push('/dashboard')
                        this.toggleLogIn(true)
                        break;
                    } else {
                        this.alertUser({ color: "error", text: "logging in failed" })
                    }
                }
            }
            e.preventDefault();
        },

        ...mapActions(['toggleLoading', 'alertUser', 'toggleLogIn'])
    },
    created() {}

}
</script>

<style>

</style>