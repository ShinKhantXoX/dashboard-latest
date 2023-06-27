import React from "react";
import Messageitem from "./Messageitem";
import Footer from "../../components/Footer";
const Message = () => {
  return (
    <>
        <div className=" pb-32">
            <Messageitem />
        </div>
        <Footer/>
    </>
  );
};

export default Message;
