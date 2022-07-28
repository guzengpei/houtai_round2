<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织架构内容 -->
      <el-card class="tree-card">
        <TreeItem
          :tree-node="{ name: '闻泰集团', manager: '负责人', id: '' }"
          :is-root="true"
          @addDepts="addDepts"
        ></TreeItem>
        <!-- 树形 开始 -->
        <el-tree
          :data="departs"
          :props="defaultProps"
          :default-expand-all="true"
        >
          <!-- 传入内容 插槽内容 会循环多次 有多少节点 就循环多少次 -->
          <!-- 作用域插槽 slot-scope="obj" 接收传递给插槽的数据   data 每个节点的数据对象-->
          <TreeItem
            slot-scope="{ data }"
            :tree-node="data"
            @delDepts="getDepartment"
            @addDepts="addDepts"
          ></TreeItem>
        </el-tree>
      </el-card>
    </div>
    <!-- 添加部门的弹出框 -->
    <AddDep :show-dialog="showDialog" :node="node"></AddDep>
  </div>
</template>

<script>
import TreeItem from './components/treeItem'
import { getDepartment } from '@/api/deoartments.js'
import { toTreeList } from '@/utils/index'
import AddDep from './components/AddDep'
export default {
  filters: {},
  components: { TreeItem, AddDep },
  data () {
    return {
      departs: [],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      },
      showDialog: false,
      node: null
    }
  },
  computed: {},
  watch: {},
  created () { this.getDepartment() },
  methods: {
    async getDepartment () {
      const res = await getDepartment()
      console.log(res)
      this.departs = toTreeList(res.depts, '')
    },
    addDepts (node) {
      this.showDialog = true
      this.node = node
    }
  }
}
</script>

<style scoped lang='scss'>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
