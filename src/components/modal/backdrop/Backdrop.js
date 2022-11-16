import { motion } from "framer-motion";
import "./Backdrop.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="backdrop_div"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      ></div>
      {children}
    </motion.div>
  );
};

export default Backdrop;
