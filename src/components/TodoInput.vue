<template>
  <el-row>
    <el-input v-model="todo" type="text" placeholder="What needs to be done?">
      <template #append>
        <el-button v-on:click="addTodo(todo);resetInput()">Add Todo</el-button>
      </template>
    </el-input>
  </el-row>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    data() {
      return {
        todo: ''
      }
    },
    methods: {
        ...mapActions(['addTodo']),
        resetInput() {
          this.todo = ''
        }
    }
    
   
    
  }
</script>

<style scoped>
  .el-button--default{
    background-color: #409EFF !important;
    color: #fff !important;
  }
</style>