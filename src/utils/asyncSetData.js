import {
    isFn,
    setObjByPath,
} from './index'

// 全局变量，缓存下一个状态的数据
let newStateByVM = {}

// 全局变量，缓存传给 asyncSetData 的 oldVal 值
// 以便在触发 watch 时获取
let oldStateByVM = {}

// 全局变量，缓存 vm
const VM_MAP = {}

const getKeyFromVM = ({
    __wxWebviewId__: wId,
    __wxExparserNodeId__: nId = 'wxExparserNodeId',
}) => `${wId}_${nId}`

/**
 * 异步 setData 提高性能
 * @param {Page|Component} vm Page 或 Component 实例
 * @param {Object} watch 侦听器对象
 * @param {String} path 属性的路径
 * @param {any} newVal 新值
 * @param {any} oldVal 旧值
 * @param {Boolean} isArrDirty 数组下标发生变化
 */
export const getAsyncSetData = (vm, watch) => ({
    path,
    newVal,
    oldVal,
    isArrDirty = false,
}) => {
    const key = getKeyFromVM(vm)

    newStateByVM = {
        ...newStateByVM,
        [key]: { ...newStateByVM[key], [path]: newVal },
    }
    oldStateByVM = {
        ...oldStateByVM,
        [key]: { [path]: oldVal, ...oldStateByVM[key] },
    }

    // 缓存 vm 和 watch
    if (!VM_MAP[key]) {
        VM_MAP[key] = { vm, watch }
    }

    // 数组下标发生变化，同步修改数组
    if (isArrDirty) {
        setObjByPath({ obj: vm, val: newVal, path })
    }

    // TODO: Promise -> MutationObserve -> setTimeout
    Promise.resolve().then(() => {
        const vmKeys = Object.keys(newStateByVM)

        if (!vmKeys.length) return

        vmKeys.forEach((vmKey) => {
            const { vm, watch } = VM_MAP[vmKey]
            const newState = newStateByVM[vmKey]
            const oldState = oldStateByVM[vmKey]

            // 更新数据
            vm.setData(newState)

            // 触发 watch
            Object.keys(newState)
                .filter(key => isFn(watch[key]))
                .forEach((key) => {
                    const watchFn = watch[key]
                    const newVal = newState[key]
                    const oldVal = oldState[key]

                    watchFn.call(vm, newVal, oldVal)
                })
        })

        newStateByVM = {}
        oldStateByVM = {}
    })
}

/**
 * 在页面 onUnload 或组件 detached 后，
 * 将 vm 从 VM_MAP 中删除
 */
export const deleteVm = (vm) => {
    const key = getKeyFromVM(vm)

    delete VM_MAP[key]
}
