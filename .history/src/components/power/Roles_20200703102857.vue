<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card>
      <!-- 添加角色按钮区域 -->
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>

      <!-- 角色列表 -->
      <el-table :data="roleslist" border stripe>
          <el-table-column type="index"></el-table-column>
          <el-table-column label="角色名称" prop="roleName">
          </el-table-column>
          <el-table-column label="角色描述" prop="roleDesc">
          </el-table-column>
          <el-table-column label="操作" width="300px">
              <template>
                  <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                  <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
                  <el-button size="mini" type="warning" icon="el-icon-setting">分配角色</el-button>
              </template>
          </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleslist: []
    };
  },
  created() {
    this.getRolesList();
  },
  methods: {
    async getRolesList() {
      const { data: res } = await this.$http.get("roles");
      if(res.meta.status !== 200) {
        return this.$message.error('获取角色列表')
      }

      this.$message.success('获取角色列表成功')
      this.roleslist = res.data
      console.log(this.roleslist)
    }
  }
};
</script>

<style lang="less" scoped>
</style>