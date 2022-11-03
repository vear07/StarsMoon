export default {
  $isNumber: function(val) {
    return Object.prototype.toString.call(val) === '[object Number]'
  },
  $isString: function(val) {
    return Object.prototype.toString.call(val) === '[object String]'
  },
  $isBoolean: function(val) {
    return Object.prototype.toString.call(val) === '[object Boolean]'
  },
  $isUndefined: function(val) {
    return Object.prototype.toString.call(val) === '[object Undefined]'
  },
  $isNull: function(val) {
    return Object.prototype.toString.call(val) === '[object Null]'
  },
  $isObject: function(val) {
    return Object.prototype.toString.call(val) === '[object Object]'
  },
  $isArray: function(val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  },
  $isFunction: function(val) {
    return Object.prototype.toString.call(val) === '[object Function]'
  },
  $isMath: function(val) {
    return Object.prototype.toString.call(val) === '[object Math]'
  },
	
	// 是否存在字符数据
	$hasString: function(val) {
		return Object.prototype.toString.call(val) === '[object String]' && val.trim().length > 0
	},
	// 是否存在列表数据
	$hasArray: function(val) {
		return Object.prototype.toString.call(val) === '[object Array]' && val.length > 0
	},
	// 是否存在对象键值
	$hasObject: function(val, keyName) {
		return Object.prototype.toString.call(val) === '[object Object]' && val.hasOwnProperty(keyName)
	}
}