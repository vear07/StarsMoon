<template>
  <div class="my-input w-full" :class="{ 'pl-15': $slots.preffix }">
    <slot name="preffix"></slot>

    <div class="my-input-wrap" :class="{ relative: type === 'password' }">
      <input
        :type="type === 'password' && pwdVisible ? 'text' : type"
        :value="value"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
      />
			
			<div class="flex-shrink-0 pl-10 leading-24">
				<template v-if="type === 'password'">
				  <span
				  	v-if="value && value.length > 0"
				  	class="my-input-icon iconfont sm-fc-ccc cursor-pointer leading-24"
				  	@click="pwdVisible = !pwdVisible"
				  >{{ pwdVisible ? '&#xe638;' : '&#xe639;' }}</span>
				</template>
				
				<span
					v-if="value && value.length > 0"
					class="my-input-icon iconfont sm-fc-ccc cursor-pointer leading-24"
					@click="$emit('input', '')"
				>&#xe63a;</span>
			</div>
    </div>

    <slot name="suffix"></slot>
  </div>
</template>

<script>
export default {
	name: 'myInput',
  props: {
    value: {
      require: true
    },

    type: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      pwdVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input {
	height: 36px;
  display: inline-flex;
	line-height: 24px;
  padding: 6px 20px;
  background: #fff;
	border: 1px solid #ccc;
	box-sizing: border-box;
  border-radius: 4px;

  .my-input-wrap {
    flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;

    input {
      flex-grow: 1;
      height: 24px;
      outline: none;
      background-color: transparent;
    }
  }
}

.my-input-icon + .my-input-icon {
  margin-left: 6px;
}
</style>
