<template>
	<view class="container">
		<v-header :title="state.title"></v-header>
	</view>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from 'vue';
	import VHeader from "../../components/Header/Header"

	export interface IState {
		title: string
	}
	export default defineComponent({
		name: 'Index', 
		components: {
			VHeader
		},
		setup(){
			const state = reactive<IState>({
				title: 'hello'
			}) 
			
			return {
				state
			}
		}
	})
</script>

<style>
	
</style>
