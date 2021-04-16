<template>
    <el-li v-for="(todo, index) in todos" v-bind:key="todo" class="item">
      <span> {{ todo }}</span>
      <el-button class="el-button--danger" v-on:click="deleteTodo(index)">Delete</el-button>
    </el-li>

</template>

<script>
import {mapActions} from 'vuex';
  export default {
    data() {

    },
    computed: {
      todos() {
        return this.$store.state.todos
      },
    },
    methods: {
        ...mapActions([
            'deleteTodo',
        ]),
    },
    created() {
      this.$store.state.todos = JSON.parse(localStorage.getItem(this.$store.state.STORAGE_KEY) || '[]');
    },
  }
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F7FA;
  margin: 20px 0;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #DCDFE6;
}
</style>