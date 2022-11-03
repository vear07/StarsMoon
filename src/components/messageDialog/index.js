import messageDialogVue from './index.vue'

const messageDialog = {}

messageDialog.install = function(Vue, options) {
	const messageDialogInstance = Vue.extend(messageDialogVue)
	let currentMsg
	const initInstance = () => {
		currentMsg = new messageDialogInstance()
		let messageDialogEl = currentMsg.$mount().$el
		document.body.appendChild(messageDialogEl)
	}
	
	Vue.prototype.$messageDialog = {
		openDialog(type, params) {
			if (!currentMsg) {
				initInstance()
			}
			if (typeof params === 'string') {
				currentMsg.params.content = params
			} else if (typeof params === 'object') {
				currentMsg.params = params
				// Object.assign(currentMsg, params)
			}
			
			return currentMsg.openDialog(type, params)
				.then(val => {
					currentMsg = null
					return Promise.resolve(val)
				})
				.catch(err => {
					currentMsg = null
					return Promise.reject(err)
				})
		}
	}
}
export default messageDialog