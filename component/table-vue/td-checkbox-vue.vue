<template>
	<div class="container">
		<div class="box" @click="onClick" :class="boxClass">
			<span class="fill iconfont icon-check"></span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		lineid: [String, Number],
		toggleall: Boolean
	},
	data: function() {
		return {
			boxClass: {
				on: false
			}
		};
    },
    watch: {
        toggleall: function(val) {
            if(this.lineid == "all") {
                return;
            }
            this.boxClass.on = val;
            this.commitSelected();
        }
    },
	methods: {
		onClick: function() {
			this.boxClass.on = !this.boxClass.on;
			if (this.lineid == "all") {
				this.$emit("toggle");
				return;
			}
			this.commitSelected();
		},
		commitSelected: function() {
			if (this.boxClass.on == true) {
				this.$store.dispatch("table/add", {
					ids: [this.lineid]
				});
			} else {
				this.$store.dispatch("table/remove", {
					id: this.lineid
				});
			}
		}
	}
};
</script>
<style lang="scss" scoped>
$boxWidth: 0.8em;
.container {
	float: left;
	width: 2.4em;
	padding: 0.8em;
}
.box {
	height: $boxWidth;
	width: $boxWidth;
	box-shadow: 0 0 1px #666666;
	background-color: #eeeeee;
	transition: background-color 0.2s ease-in-out;
	.fill {
        display: inline-block;
        position: relative;
        top: -0.1em;
        left: -0.1em;
		color: #ffffff;
		transform: scale(0);
		transition: transform 0.2s ease-in-out;
	}
	&.on {
		background-color: #770204;
		.fill {
			transform: scale(0.7);
		}
	}
}
</style>