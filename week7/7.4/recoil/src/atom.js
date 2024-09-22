import { atom, selector } from "recoil";

export const  networkAtom=atom({
    key:'networkAtom',
    default:102
})
export const  jobAtom=atom({
    key:'jobAtom',
    default:0
})
export const  messagingAtom=atom({
    key:'messagingAtom',
    default:12
})
export const notificationAtom=atom({
    key:'notificationAtom',
    default:0
})
export const totalNotificationSelector=selector({
    key:'totalNotificationSelector',
    get:({get})=>{
        const networkValue=get(networkAtom)
        const jobValue=get(jobAtom)
        const messagingValue=get(messagingAtom)
        const notificationValue=get(notificationAtom)
        return networkValue+jobValue+messagingValue+notificationValue;
    }
})