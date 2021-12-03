<template>

        <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">clients</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'admins.create'}" >
                                    create client
                                </router-link>
                            </div>

                            <div class="card-tools mt-4">
                                <div class="input-group input-group-sm" style="width: 150px;">
                                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search" v-model="keywords" @keyup="search">

                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-2">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>email </th>
                                    <th>action </th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(client,index) in clients.data" :key="index">
                                    <td>{{client.id}}</td>
                                    <td>{{client.name}}</td>
                   
                                    <td>{{client.email}}</td>
                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'clients.edit',params:{'id':client.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="_delete(client)"></span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <pagination align="center" :data="clients" @pagination-change-page="get_all"></pagination>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>

    </section>


</template>

<script>
import pagination from 'laravel-vue-pagination'
import  * as services from '../../services/clients';
import Swal from 'sweetalert2';

import {chkeckedAuthApi} from "../../common/jwt.service";

export default {
    name:"users",
    components:{
        pagination,
      
    },
    data(){
        return {
            clients:{
                type:Object,
                default:null
            },
            keywords:null,

        }
    },
    mounted(){
        this.get_all();
    },
    methods:{
        get_all(page=1){
            services.get_all(page ,this.keywords).then(({data})=>{
                this.clians = data
            }).catch(({response}) => {
                
            });
        },
        search(){
            this.get_all();
        },
        _delete(clian) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    services._delete(clian.id).then( response => {
                        this.get_all();
                     
                    }).catch(({response}) => {
                       
                    })
                }
            })

        },
    }
}
</script>

<style scoped>
.pagination{
    margin-bottom: 0;
}
</style>
