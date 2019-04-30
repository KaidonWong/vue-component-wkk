<template>
	<div class="groups">
		<div
			class="group"
			:class="selected == item.value? 'on': ''"
			v-for="(item,index) of content"
			:key="index"
			@click="onClick(item.value)"
		>
			<div class="ring">
				<div class="circle"></div>
			</div>
			<span class="label">{{item.label}}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		// [{name: xxx,value:xxx},{}]
		content: Array,
		selected: [String, Number]
	},
	methods: {
		onClick: function(val) {
			this.$emit("inputevent", val);
		}
	}
};
</script>
<style lang="scss" scoped>
$ringWidth: 1em;
$circleWidth: 0.6em;
.ring {
	height: $ringWidth;
	width: $ringWidth;
	border: 1px solid #aaaaaa;
	border-radius: 50%;
	padding: 2px;
	.circle {
		height: $circleWidth;
		width: $circleWidth;
		border-radius: 50%;
		background-color: #aaaaaa;
		transform: scale(0);
		transition: transform 0.2s ease-in-out;
	}
	transform: scale(0.8);
}
.groups {
	display: flex;
	.group {
		margin-right: 10px;
		display: flex;
		.label {
			font-size: 0.8em;
		}
		&.on {
			.ring {
				border-color: #2d8cf0;
				box-shadow: 0 0 4px #000;
				.circle {
					background-color: #2d8cf0;
					transform: scale(1);
				}
			}
		}
	}
}
</style>