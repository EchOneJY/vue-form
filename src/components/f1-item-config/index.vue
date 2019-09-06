<template>
  <div>
    <el-form label-position="top">
      <el-form-item label="label">
        <el-input v-model="data.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
