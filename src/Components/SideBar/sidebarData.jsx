import {People, UserAdd, PresentionChart, UserOctagon, NotificationStatus, Calendartwo, } from "../../Components/assets/Image/index";
import {Dashboard,Tests, Doubts,Community,OnlineClass, Events, Messages  } from "../../Components/assets/Svg/index";



const menuItems = [
  {
    icon: <img src={Dashboard} alt="Dashboard" />,
    label: "Dashboard",
  },
  {
    icon: <img src={People} alt="People" />,
    label: "Class",
  },

  {
    icon: <img src={UserAdd} alt="UserAdd" />,
    label: "Attendance",
  },

  {
    icon: <img src={Tests} alt="Tests" />,
    label: "Tests",
  },

  {
    icon: <img src={PresentionChart} alt="PresentionChart" />,
    label: "Reports",
  },

  {
    icon: <img src={UserOctagon} alt="UserOctagon" />,
    label: "Discipline",
  },

  {
    icon: <img src={Doubts} alt="Doubts" />,
    label: "Doubts",
  },

  {
    icon: <img src={Community} alt="Community" />,
    label: "Community",
  },

  {
    icon: <img src={OnlineClass} alt="OnlineClass" />,
    label: "Online Class",
  },
  {
    icon: <img src={Events} alt="Events" />,
    label: "Events",
  },
  {
    icon: <img src={Messages} alt="Messages" />,
    label: "Messages",
  },
  {
    icon: <img src={Calendartwo} alt="Calendartwo" />,
    label: "Schedule",
  },
  {
    icon: <img src={NotificationStatus} alt="NotificationStatus" />,
    label: "Notify",
  },
];

export default menuItems;
