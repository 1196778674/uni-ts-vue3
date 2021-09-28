<template>
	<div>{{state.title}}</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from 'vue';
	export interface IState {
		title: string
	}
	export default defineComponent({
		name: 'Index',
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
