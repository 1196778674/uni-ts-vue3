<template>
	<view class="container">
		<view style="width: 60%;">
			<uni-tabs :tabData="state.tabs" :activeIndex="state.defaultIndex" @tabClick="tabClick"></uni-tabs>
		</view>
		<view>
			<!-- <uni-map></uni-map> -->
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from 'vue';
	import VHeader from "../../components/Header/Header"
	import UniTabs from '../../components/uni-tabs/uni-tabs.vue'
	import UniMap from '../../components/uni-map/uni-map.vue'

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
			UniMap
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
			
			const tabClick = (current) => {
				console.log(current)
			}
			
			return {
				state,
				props,
				tabClick
			}
		}
		
	})
</script>

<style>
	.container{
		background-color: #007AFF;
	}
</style>
