<template>
  <div>
    <el-ol>
      <TodoItem></TodoItem>
    </el-ol>
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'

  export default {
    components: {
      TodoItem
    }
  }
</script>

<style scoped>

</style>