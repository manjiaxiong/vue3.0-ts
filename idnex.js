const reactiveHandler = {
    get (target, key) {
  
      if (key==='_is_reactive') return true
  
      return Reflect.get(target, key)
    },
  
    set (target, key, value) {
      const result = Reflect.set(target, key, value)
      console.log('数据已更新, 去更新界面')
      return result
    },
  
    deleteProperty (target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('数据已删除, 去更新界面')
      return result
    },
  }
  
  /* 
  自定义shallowReactive
  */
  function shallowReactive(obj) {
    return new Proxy(obj, reactiveHandler)
  }
  
  /* 
  自定义reactive
  */
  function reactive (target) {
    if (target && typeof target==='object') {
      if (target instanceof Array) { // 数组
        target.forEach((item, index) => {
          target[index] = reactive(item)
        })
      } else { // 对象
        Object.keys(target).forEach(key => {
          target[key] = reactive(target[key])
        })
      }
  
      const proxy = new Proxy(target, reactiveHandler)
      return proxy
    }
  
    return target
  }
  
  /*
自定义shallowRef
*/
function shallowRef(target) {
    const result = {
      _value: target, // 用来保存数据的内部属性
      _is_ref: true, // 用来标识是ref对象
      get value () {
        return this._value
      },
      set value (val) {
        this._value = val
        console.log('set value 数据已更新, 去更新界面')
      }
    }
  
    return result
  }
  
  /* 
  自定义ref
  */
  function ref(target) {
    if (target && typeof target==='object') {
      target = reactive(target)
    }
  
    const result = {
      _value: target, // 用来保存数据的内部属性
      _is_ref: true, // 用来标识是ref对象
      get value () {
        return this._value
      },
      set value (val) {
        this._value = val
        console.log('set value 数据已更新, 去更新界面')
      }
    }
  
    return result
  }
  const readonlyHandler = {
    get (target, key) {
      if (key==='_is_readonly') return true
  
      return Reflect.get(target, key)
    },
  
    set () {
      console.warn('只读的, 不能修改')
      return true
    },
  
    deleteProperty () {
      console.warn('只读的, 不能删除')
      return true
    },
  }
  /* 
自定义shallowReadonly
*/
function shallowReadonly(obj) {
    return new Proxy(obj, readonlyHandler)
  }
  
  /* 
  自定义readonly
  */
  function readonly(target) {
    if (target && typeof target==='object') {
      if (target instanceof Array) { // 数组
        target.forEach((item, index) => {
          target[index] = readonly(item)
        })
      } else { // 对象
        Object.keys(target).forEach(key => {
          target[key] = readonly(target[key])
        })
      }
      const proxy = new Proxy(target, readonlyHandler)
  
      return proxy 
    }
  
    return target
  }
  
  /* 
判断是否是ref对象
*/
function isRef(obj) {
    return obj && obj._is_ref
  }
  
  /* 
  判断是否是reactive对象
  */
  function isReactive(obj) {
    return obj && obj._is_reactive
  }
  
  /* 
  判断是否是readonly对象
  */
  function isReadonly(obj) {
    return obj && obj._is_readonly
  }
  
  /* 
  是否是reactive或readonly产生的代理对象
  */
  function isProxy (obj) {
    return isReactive(obj) || isReadonly(obj)
  }
  