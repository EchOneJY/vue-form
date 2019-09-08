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
              <el-button
                type="text"
                icon="el-icon-refresh"
                @click="clearSelectList"
                >清空</el-button
              >
              <el-button
                type="text"
                icon="el-icon-view"
                @click="generatorVisible = true"
                >预览</el-button
              >
            </el-button-group>
          </el-header>
          <el-main class="f1-main">
            <f1-list :select.sync="formSelect"></f1-list>
          </el-main>
        </el-container>

        <el-aside width="300px" class="f1-right-sider">
          <el-tabs v-model="activeName">
            <el-tab-pane label="字段配置" name="formItem">
              <f1-item-config :data="formSelect"></f1-item-config>
            </el-tab-pane>
            <el-tab-pane label="表单配置" name="form">
              <f1-config :data="formSelect"></f1-config>
            </el-tab-pane>
          </el-tabs>
        </el-aside>
      </el-container>
    </el-card>

    <!-- 预览生成表单 -->
    <f1-generator
      :visible.sync="generatorVisible"
      @close="generatorVisible = false"
    ></f1-generator>
  </div>
</template>

<script>
// 引入拖拽组件
import draggable from 'vuedraggable'
import FormConfig from '@/config/formItem'
import { mapState, mapMutations } from 'vuex'
import F1List from '@/components/f1-list'
import F1Config from '@/components/f1-config'
import F1ItemConfig from '@/components/f1-item-config'
import F1Generator from '@/components/f1-generator'
export default {
  name: 'home',
  components: {
    // 调用组件
    draggable,
    F1List,
    F1Config,
    F1ItemConfig,
    F1Generator
  },
  data() {
    return {
      formConfig: FormConfig,
      formSelect: {},
      activeName: 'formItem',
      generatorVisible: false
    }
  },
  computed: {
    ...mapState('formData', ['selectedList'])
  },
  methods: {
    ...mapMutations('formData', ['setFormData']),
    clearSelectList() {
      this.setFormData([])
    }
  }
}
</script>
