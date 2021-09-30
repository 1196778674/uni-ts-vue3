<template>
	<view class="container">
		<view style="width: 60%;">
			<uni-tabs :tabData="state.tabs" :activeIndex="state.defaultIndex" @tabClick="tabClick"></uni-tabs>
		</view>
		<view>
			<!-- <uni-map></uni-map> -->
		</view>
		<view class="">
			<uni-tab1 v-if="!state.defaultIndex"></uni-tab1>
			<uni-tab2 v-else></uni-tab2>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent, reactive, onBeforeMount } from 'vue';
	import $store from '../../store/index.js'
	// 组件
	import VHeader from "../../components/Header/Header"
	import UniTabs from '../../components/uni-tabs/uni-tabs.vue'
	import UniMap from '../../components/uni-map/uni-map.vue'
	import UniTab1 from '../../components/uni-tabs/tab1/tab1.vue'
	import UniTab2 from '../../components/uni-tabs/tab2/tab2.vue'

	interface ITabs {
		name: string 
	}
	export interface IState {
		title: string;
		tabs: ITabs[];
		defaultIndex: number
	}
	export default defineComponent({
		name: 'Index', 
		components: {
			VHeader,
			UniTabs,
			UniMap,
			UniTab1,
			UniTab2
		},
		setup(props){
			const state = reactive<IState>({
				title: '首页',
				tabs: [{
					name: '123'
				}, {
					name: '234'
				}],
				defaultIndex: 0
			}) 
			
			const tabClick = (current: number) : void => {
				state.defaultIndex = current
			}
			
			// 获取用户信息
			onBeforeMount(() => {
				// 获取系统信息
				uni.getSystemInfo({
					success: (res) => {
						$store.commit('setSystem', res)
					}
				})
				// 获取微信信息
				uni.getUserInfo({
					provider:"weixin",
					success: (res) => {
						console.log(res)
					}
				})
				// 校验是否登录
				uni.request({
					url: "/test/login",
					method:"GET",
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
						// toLogin();
					}
				})
			})
			
			// 登录
			const toLogin = () => {
				uni.navigateTo({
					animationType: "auto",
					url:'../login/login'
				})
			}
			
			
			
			return {
				state,
				props,
				tabClick,
				toLogin
			}
		}
		
	})
</script>

<style>
	.container{
		background-color: #007AFF;
	}
</style>
