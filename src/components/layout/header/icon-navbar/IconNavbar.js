import { FaCompass } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

export const IconNavbar = [
  {
    title: "invoices",
    path: "/invoices",
    icon: <FaCompass />,
  },
  {
    title: "sellers",
    path: "/sellers",
    icon: <BiTargetLock />,
  },
  {
    title: "customers",
    path: "/customers",
    icon: <MdSchool />,
  },
];
