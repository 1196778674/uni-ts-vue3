<template>
	<uni-sticky offset-top="40">
		<view class="sticky">
			{{props.title}}
		</view>
	</uni-sticky>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import UniSticky from './uni-sticky/uni-sticky'
	export default defineComponent({
		name: 'Header',
		components: {    
			UniSticky,
		},
		props:{
			title: String
		},
		setup(props){
			return {
				props
			}
		}
	})
</script>

<style>
	.sticky {
	    text-align: center;
	}
</style>
