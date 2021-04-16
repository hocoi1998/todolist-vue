<template>
  <el-container id="app">
    <el-header>
      <el-row>
        <el-col>
          <h1>MY TO DO APP</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </el-col>
      </el-row>
      
    </el-main>
  </el-container>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style>
body {
  background: linear-gradient(356deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 100%);
  min-height: 97.5vh;
}
#app {
  max-width: 500px;
  margin: 0 auto;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 10px
}
h1 {
  color: red;
  font-size: 32px;
  font-weight: bold
}
.el-header {
  text-align: center
}
.el-input {
  max-width: 100%
}
</style>
