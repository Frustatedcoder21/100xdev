import { atom, selector } from "recoil";
import axios from "axios";
export const notifications = atom({
    key: "networkAtom",
    default: selector({    // we cannot me async call inside the atom but we can do it inside the selector so the default value can directly be passed here
        key:'networkAtomSelector',
        get: async()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})