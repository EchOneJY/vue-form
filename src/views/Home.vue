<template>
  <div class="f1-home">
    <el-card class="f1-box-card">
      <el-container class="f1-box">
        <el-aside width="300px" class="f1-left-sider">
          <draggable
            class="btn-box"
            element="ul"
            :list="formConfig"
            :group="{ name: 'f1-form', pull: 'clone', put: false }"
            :sort="false"
            ghostClass="ghost"
          >
            <li v-for="(item, index) in formConfig" :key="index">
              <el-button class="btn" plain>{{ item.name }}</el-button>
            </li>
          </draggable>
        </el-aside>

        <el-container class="f1-main-box">
          <el-header class="f1-main-header">
            <el-button-group size="small">
              <el-button type="text" icon="el-icon-refresh"
                >重置</el-button
              >
              <el-button type="text" icon="el-icon-view"
                >预览</el-button
              >
            </el-button-group>
          </el-header>
          <el-main class="f1-main">
            <draggable
              class="form-box"
              element="ul"
              :list="formConfig"
              :group="{ name: 'f1-form' }"
              ghostClass="ghost"
              :swapThreshold="0.5"
              :animation="100"
              @add="addFormItem"
            >
              <li v-for="(item, index) in formConfig" :key="index">
                <el-button class="btn" plain>{{
                  item.name
                }}</el-button>
              </li>
            </draggable>
          </el-main>
        </el-container>

        <el-aside width="300px" class="f1-right-sider"
          >Right Sider</el-aside
        >
      </el-container>
    </el-card>
  </div>
</template>

<script>
// 引入拖拽组件
import draggable from 'vuedraggable'
import FormConfig from '../config/form'
export default {
  name: 'home',
  components: {
    // 调用组件
    draggable
  },
  data() {
    return {
      formConfig: FormConfig,
      dragItem: {}
    }
  },
  methods: {
    addFormItem(item) {
      console.log(item)
      this.dragItem = item
    }
  }
}
</script>
