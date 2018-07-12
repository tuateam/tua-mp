import TuaStorage from 'tua-storage'

import '@/styles/global.styl'
import './app.scss'

const storage = new TuaStorage({
    storageEngine: wx,
})

App({
    async onLaunch () {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        const p = new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })

        p.then(() => {
            console.log('from promise')
        })

        const set = new Set([1, 2, 2, 3, 4, 5, 5, 5])
        const arr = Array.from(set)

        console.log(arr.includes(1))

        // 展示下如何用 tua-storage
        const { data } = await storage.load({
            key: 'logs',
            // 读取时如果没有结果，则会执行同步函数
            // 注意返回 Promise
            syncFn: () => Promise.resolve([]),
        })

        storage.save({
            key: 'logs',
            // 3天过期
            expires: 3600 * 3,
            data: { data: [Date.now(), ...data] },
        })
    },
    globalData: {
        storage,
    },
})
