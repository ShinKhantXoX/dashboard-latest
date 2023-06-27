import React from "react";
import Taskitem from "./Taskitem";
import Footer from "../../components/Footer";

const Task = () => {
  return (
    <>
        <div className="pb-32">
            <Taskitem />
        </div>
        <Footer/>
    </>
  );
};

export default Task;
