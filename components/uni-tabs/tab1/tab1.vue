<template>
	<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
	    <swiper class="swiper-box" @change="change">
	        <swiper-item v-for="(item ,index) in info" :key="index">
	            <view class="swiper-item">
	                {{item.content}}
	            </view>
	        </swiper-item>
	    </swiper>
	</uni-swiper-dot>
</template>

<script lang="ts">
	import { reactive, toRefs } from 'vue'
	export default {
		name: 'tab1',
		setup(props) {
			const state = reactive({ 
				info: [{
					content: '内容 A'
				}, {
					content: '内容 B'
				}, {
					content: '内容 C'
				}],
				current: 0,
				mode: 'round',
			})
			
			const change = (e) => {
				console.log(e.detail.current)
				state.current = e.detail.current;
			}
			
			return {
				...toRefs(state),
				change
			}
		}
	}
</script>

<style>

</style>
