<template>

        <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div v-if="errors">
                    <div v-for="(v, k) in errors" :key="k">
                        <p v-for="error in v" :key="error" class="alert alert-danger" role="alert">
                            {{ error }}
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title float-left">create new clians</h3>
                        </div>
                        <!-- /.card-header -->



                        <form role="form"   @submit.prevent="create()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="client.name">
                                </div>
                                <div class="form-group">
                                    <label for="phone">email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter phone" v-model="client.email"   autocomplete="off" >
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="password" v-model="admin.password" autocomplete="off">
                                </div>

                                
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->

                </div>
            </div>
        </div>
    </section>
  
</template>

<script>
    import  * as services from '../../services/clients';
  

    export default {
        name: "Create",
   
        data(){
            return {
                errors: null,
                success : false,
                client:{
                    name:null,
                    email:null,
                    password:null
                }
            }
        },


        methods:{
           create() {
                services.create(this.client).then( response => {
                   
                        this.success = true;
                        this.$router.push({ name: 'clients' });
               }).catch((error) => {
                        this.errors = error.response.data.errors;
                        this.success = false;

               });

            }
        },

    }
</script>


