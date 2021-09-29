<template>
    <view class="container" :style="{height: safeArea}">
        <form v-model="formData">
			<label>
				<input type="number" value="" placeholder="请输入手机号" v-model="formData.phone" />
			</label>
			<label>
				<input type="number" value="" placeholder="请输入验证码" v-model="formData.code" />
			</label>
			<button class="button-group--left" type="default" @click="submit">登录</button>
		</form>
    </view>
</template>

<script lang="ts">
	import { reactive, ref, onBeforeMount } from "vue"
	export default {
		name: "Login",
		
		setup(props) {
			
			const formData = reactive({
				phone: null,
				code: null,
			})
			
			const safeArea = ref(0)
			
			const validFromData = (data) => {
				let isTrue = true
				return new Promise((res, reg) => {
					for(let k in data) {
						if(!data[k]){
							if(k === 'phone') {
								uni.showToast({
									icon: 'none',
									title: "请填写手机号~"
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: "验证码不能为空~"
								})
							}
							isTrue = false
							break
						}
					}
					if(isTrue) {
						res(data)
					}
				})
			}
			
			
			const submit = () => {
				validFromData(formData).then(res => {
					console.log(res)
				})
			}
			
			onBeforeMount(() => {
				uni.getSystemInfo({
					success: (res) => {
						safeArea.value = res.safeArea.height + 'px'
					}
				})
			})
			console.log(safeArea.value)
			return {
				formData,
				safeArea,
				validFromData,
				submit,
				props
			}
		}
		
	}
</script>

<style scoped lang="less">
.container{
	display: flex;
	padding: 20rpx;
	padding-top: 100rpx;
	justify-content: center;
	align-items: center;
	form{
		display: block;
		width: 80%;
		margin: 0 auto;
		label{
			display: block;
			margin-bottom: 50rpx;
			border-bottom: 1px solid #DEDEDE;

		}
		button{
			border: none;
			background-color: #007AFF;
			color: #FFFFFF;
		}
	}
}
</style>
