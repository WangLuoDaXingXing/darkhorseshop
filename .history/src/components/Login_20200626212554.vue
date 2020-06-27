<template>
	<div class="login_container">
		<div class="login_box">
			<!-- 头像区域 -->
			<div class="avatar_box">
				<img src="../assets/logo.png" alt="">
			</div>
			<!-- 登录表单区域 -->
			<el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
				<!-- 用户名 -->
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
					<el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
				</el-form-item>
				<!-- 按钮 -->
				<el-form-item class="btns">
					<el-button type="primary" @click="login">登录</el-button>
					<el-button type="info" @click="resetLogin">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 这是登录表单的数据绑定对象
			loginForm: {
				username: 'daxingxing',
				password: '1203'
			},
			// 这是表单的验证规则
			loginFormRules: {
				// 验证用户名是否合法
				username: [
					{ required: true, message: "请输入用户名称", trigger: "blur" },
					{ min: 3, max: 10, message: "用户名长度在3到10个字符之间", trigger: "blur" }
				],
				// 验证密码是否合法
				password: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{ min: 4, max: 16, message: "密码长度在4到6个字符之间", trigger: "blur" }
				]
			}
		}
	},
	methods: {
		resetLogin() {
			this.$refs.loginFormRef.resetFields();
		},
		login() {
			this.$refs.loginFormRef.validate(async (valid) => {
				if(!valid) return;
				const { data: res } = await this.$http.post("login", this.loginForm);
				if(res.meta.status != 200) return this.$message.error("登录失败！");
				this.$message.success("登录成功！");
				// 使用sessionStorage保存token，这样在页面关闭是token就会被清空
				window.sessionStorage.setItem("token", res.data.token)
				this.$router.push("/home")
			});
		}
	}
}
</script>

<!-- scoped使样式仅在本文件中有效，可以防止组件之间的样式冲突 -->
<style lang="less" scoped>
.login_container {
	background-color: #2b4b6b;
	height: 100%;
}
.login_box {
	width: 450px;
	height: 300px;
	background-color: #fff;
	border-radius: 3px;
	position: absolute; // 设置成绝对定位，这样元素就可以进行位移
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%); // 将元素移动到页面中间

	// 语法嵌套
	.avatar_box {
		height: 130px;
		width: 130px;
		border: 1px solid #eee;
		border-radius: 50%;
		padding: 10px;
		box-shadow: 0 0 10px #ddd;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: #eee;
		}
	}
}

.login_form {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box; // 默认是content,设置成border-box以免超出容器
}

.btns {
	display: flex;
	justify-content: flex-end;
}
</style>
