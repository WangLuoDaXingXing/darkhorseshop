<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../assets/logo.png" style="height: 50px;weiht: 50px;">
                <span>Vue+ElementUI后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button> 
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px">Aside</el-aside>
            <!-- 右侧主体 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear(); // 清空token
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>

.home-container {
    height: 100%;
}

.el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
        display: flex;
        align-items: center;
    }
}

.el-aside {
    background-color: #333744;
}

.el-main {
    background-color: #eaedf1;
}

</style>