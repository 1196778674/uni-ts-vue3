<template>
    <view>
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map style="width: 100%; height: 300px;" :latitude="state.latitude" :longitude="state.longitude" :markers="state.covers">
                </map>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
	import { reactive, onMounted } from 'vue'
	export default {
		name:"uni-map",
		setup(props) {
			const state = reactive({
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 0,
				longitude: 0,
				covers: [{
					latitude: 0,
					longitude: 0,
					iconPath: '../../static/images/location.png'
				}, {
					latitude: 0,
					longitude: 0,
					iconPath: '../../static/images/location.png'
				}]
			})
			
			const getLocation = () => {
				uni.authorize({
				    scope: 'scope.userLocation',
				    success(res) {
						if(res.errMsg.includes('ok')) {
							uni.getLocation({
								geocode:true,
								success: (res) => {
									// console.log(res)
									const horizontalAccuracy =  res.horizontalAccuracy
									const latitude = res.latitude
									const longitude = res.longitude
									state.latitude = latitude
									state.longitude = longitude
									state.covers.map(v => Object.assign(v,{latitude: latitude},{longitude: longitude}))
									console.log(state)
								}
							})
						}
				    }
				})
			}
			onMounted(() => {
				getLocation()
			})
			return {
				state,
				getLocation,
				props
			}
		}
	}
</script>

<style>

</style>
