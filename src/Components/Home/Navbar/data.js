import { BsFillChatLeftTextFill } from 'react-icons/bs'
import notification from "../../../assets/images/notification1.png";
import friends from "../../../assets/images/groups.png";
import chat from "../../../assets/images/chat1.png";

export const dataList = [
    {
        name: "Root",
        title: "Connect Friends",
        icon: "./images/Roots.png",
        url: "/root"
    },

    {
        name: "Kicks",
        title: "Short Videos",
        icon: "./images/watch.png",
        url: "/kicks"
    },
    {
        name: "U-Meet",
        title: "Create Events",
        icon: "./images/calender.png",
        url: "/umeet"
    }
]
export const data = [
    {
        name: "Friends",
        icon: friends,
        url: null
    },

    {
        name: "Chat",
        icon: chat,
        url: "/chat-page"

    },
    {
        name:"Notifications",
        icon: notification,
        url:null
    }
]
