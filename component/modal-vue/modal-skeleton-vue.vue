<template>
	<div class="modal-background">
		<div class="modal">
            
        </div>
	</div>
</template>
<script>
export default {
	methods: {}
};
</script>
<style lang="scss" scoped>
.modal-background {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.3);
    .modal {
        margin: 5em auto;
        width: 25%;
        min-width: 20em;
        height: 2em;
        
        background-color: #999999;
    }
}
</style>