<template>
  <div v-if="item.type === 'imgupload'">
    <el-upload
      class="img-uploader"
      list-type="picture-card"
      :action="item.options.action"
      :before-upload="beforeUpload"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    models: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    beforeUpload(file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return (isJPG || isPNG) && isLt2M
    }
  }
}
</script>

<style lang="scss">
.img-uploader {
  .el-upload {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
  .el-upload-list__item {
    width: 100px;
    height: 100px;
  }
}
</style>
