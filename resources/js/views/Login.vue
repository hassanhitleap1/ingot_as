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
                <form  @submit.prevent="login()">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="email"  v-model="email"   autocomplete="off" >
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password"  v-model="password"   autocomplete="off" >
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">login</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            password:null,
            email:null,
            errors:[],
            loader:false
        }
    },
    methods: {
        login() {
            this.loader=true;
            axios.post('api/auth/login', {email:this.email,password:this.password}).then((response) => {
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
