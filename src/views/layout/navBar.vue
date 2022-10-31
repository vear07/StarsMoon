<template>
	<div class="navBar py-10 shadow-md">
		<div class="w-1080 flex flex-row justify-between items-center m-auto">
			<div class="flex flex-row items-center">
				<img src="@/assets/logo.png" width="60" height="60" />
				<h1 class="text-16 font-bold">StarsMoon</h1>
			</div>
			<template>
				<div class="flex flex-row items-center">
					<div class="navBar_Button gradient_border" @click="showDialog = true">登录</div>
					<div class="navBar_Button gradient_border ml-10">注册</div>
				</div>
			</template>
		</div>
		
		<transition
		  enter-active-class="animate__animated animate__faster animate__fadeInDown"
		  leave-active-class="animate__animated animate__faster animate__fadeOutDown"
		>
		  <dialog v-if="showDialog" :open="showDialog" class="modal">
		    <div class="modal-content">
		      <svg t="1574164208713" class="model-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5819" width="63" height="63"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM512 877.714286c-40.228571 0-73.142857-32.914286-73.142857-73.142857s32.914286-73.142857 73.142857-73.142857 73.142857 32.914286 73.142857 73.142857S552.228571 877.714286 512 877.714286zM585.142857 512c0 40.228571-32.914286 73.142857-73.142857 73.142857s-73.142857-32.914286-73.142857-73.142857L438.857143 219.428571c0-40.228571 32.914286-73.142857 73.142857-73.142857s73.142857 32.914286 73.142857 73.142857L585.142857 512z" p-id="5820" fill="white"></path></svg>
		      <h2 class="modal-title">Are you sure?</h2>
		      <p class="modal-description">
		        You can't undo this action.
		      </p>
		      <div class="modal-options">
		        <button
		          class="btn btn-round btn-fill btn-fill-left option confirm"
		          data-text="Yes"
		          @click="showDialog = false"
		        ></button>
		        <button
		          class="btn btn-round btn-fill btn-fill-right option cancel"
		          data-text="No"
		          @click="showDialog = false"
		        ></button>
		      </div>
		    </div>
		  </dialog>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'navBar',
	
	data() {
		return {
			showDialog: false
		}
	}
}
</script>

<style lang="scss" scoped>
.navBar {
	width: 100%;
  height: 80px;
	position: fixed;
	top: 0;
}

.navBar_Button {
	color: #70c6da;
	font-size: 14px;
	font-weight: bold;
	line-height: 20px;
	background: #fff;
	border-radius: 100px;
	padding: 6px 30px;
	transition: 0.5s;
	cursor: pointer;
	
	&:hover {
		color: #fff;
		background: transparent;
	}
}

.gradient_border {
  --border-width: 3px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 100px;

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
			#4278c3,
			#5ea5ec,
			#70c6da,
			#5ff2f0,
			#5ff281,
			#f9ef63,
			#f4dd45,
			#f2cb5f,
			#abf25f
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 200px;
    animation: moveGradient 4s alternate infinite;
  }
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
	margin: auto;
  z-index: 999;
  color: white;
  background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
  border: transparent;
  border-radius: 12px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  animation: show-modal 0.5s ease forwards;

  .model-icon {
    margin-bottom: 1.25rem;
    opacity: 0;
    animation: show-modal-icon 0.5s ease 0.2s forwards;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 1em;

    .modal-title {
      margin-top: 0;
      margin-bottom: 1.2rem;
      opacity: 0;
      animation: show-modal-text 0.5s ease 0.35s forwards;
    }

    .modal-description {
      margin: 0;
      opacity: 0;
      animation: show-modal-text 1s ease 0.5s forwards;
    }

    .modal-options {
      margin-top: 1rem;
      display: flex;
      justify-content: space-around;

      .option {
        padding: 0 2em;
        margin: 0.3em;
        font-size: 20px;
        font-weight: 700;
        line-height: 2;
      }

      .confirm {
        opacity: 0;
        animation: show-modal-option 0.5s ease 0.65s forwards;

        &::before {
          background: hsl(141, 53%, 53%);
        }

        &::after {
          color: hsl(141, 53%, 53%);
        }
      }

      .cancel {
        opacity: 0;
        animation: show-modal-option 0.5s ease 0.8s forwards;

        &::before {
          background: hsl(348, 86%, 61%);
        }

        &::after {
          color: hsl(348, 86%, 61%);
        }
      }
    }
  }
}

@keyframes show-modal {
  from {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes show-modal-icon {
  from {
    transform: scale(0.4);
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes show-modal-text {
  from {
    transform: scale(0.6);
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes show-modal-option {
  from {
    transform: scale(0.4);
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
.btn {
  position: relative;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: hsl(0, 0%, 13%);
  text-decoration: none;
  background-color: white;
  border: transparent;
  border-radius: 3px;
  outline: transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &-round {
    border-radius: 30px;
  }

  &-fill {
    overflow: hidden;

    &-left {
      &::before {
        transform: translateX(100%);
      }
    }

    &-right {
      &::before {
        transform: translateX(-100%);
      }
    }

    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      transition: 0.4s cubic-bezier(0.75, 0, 0.25, 1);
    }

    &::after {
      position: relative;
      content: attr(data-text);
      transition: 0.4s ease;
    }

    &:hover::before {
      transform: translateX(0);
    }

    &:hover::after {
      color: white !important;
    }
  }
}
</style>
