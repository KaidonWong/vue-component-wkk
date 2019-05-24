<template>
	<div class="groups">
		<div
			v-for="(item,index) of content"
			class="group"
			:class="checkStatus[index]? 'on': ''"
			:key="index"
			@click="onClick(item.value)"
		>
			<div class="box">
				<span class="fill iconfont icon-check"></span>
			</div>
			<div class="label">{{item.label}}</div>
		</div>
	</div>
</template>
<script>
export default {
    model: {
        prop: "selected",
        event: "inputevent"
    },
	props: {
		// [{name: xxx,value:xxx},{}]
		content: Array,
		selected: Array
	},
	data: function() {
		return {
            initialContent: this.content,
            selectedContent: this.selected,
		};
	},
	computed: {
		//按照content的顺序，false：不选中 true：选中
		checkStatus: function() {
			let ret = new Array();
			for (let i = 0, len = this.content.length; i < len; i++) {
				let item = this.content[i];
				if (this.selectedContent.indexOf(item.value) == -1) {
					ret.push(false);
				} else {
					ret.push(true);
				}
			}
			return ret;
		}
	},
	methods: {
		onClick: function(e) {
            let i = this.selectedContent.indexOf(e);
            if(i == -1) {
                this.selectedContent.push(e);
            }else {
                this.selectedContent.splice(i,1);
            }
			this.$emit("inputevent", this.selectedContent);
		}
	}
};
</script>
<style lang="scss" scoped>
$boxWidth: 0.9em;
.box {
	height: $boxWidth;
	width: $boxWidth;
	border: 1px solid #aaaaaa;
    border-radius: 1px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        box-shadow: 0 0 1px #666666;
    }
	.fill {
        display: block;
        position: relative;
        top: -0.1em;
        left: -0.1em;
        color: #ffffff;
        transform: scale(0.8);
	}
}
.groups {
    display: flex;
	.group {
		margin-right: 10px;
		display: flex;
        align-items: center;
        &:hover {
            cursor: default;
        }
		.label {
			margin-left: 0.2em;
		}
		&.on {
            .box {
                border-color: transparent;
                background-color: #2d8cf0;
            }
		}
	}
}
</style>
