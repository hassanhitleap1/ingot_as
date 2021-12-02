<template>
    <div class="container">
        <div class="card">
            <h5 class="card-header">login</h5>
            <div v-if="errors">
                <div v-for="(v, k) in errors" :key="k">
                    <p v-for="error in v" :key="error" class="alert alert-danger" role="alert">
                        {{ error }}
                    </p>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Login",
    components: {
        Layout,
    },
    data(){
        return {
            password:null,
            phone:null,
            errors:[],
            loader:false
        }
    },
    methods: {
        login() {
            this.loader=true;
            axios.post('api/auth/login', {phone:this.phone,password:this.password}).then((response) => {
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('token_type', response.data.token_type)
                localStorage.setItem('expires_in', response.data.expires_in)
                localStorage.setItem('user',JSON.stringify(response.data.user))
                this.$router.push({name:'home'});
            }).catch((errors) => {
                this.errors = errors.response.data.errors
                this.loader=false;
            })
        }
    }

}

</script>

<style scoped>

</style>
