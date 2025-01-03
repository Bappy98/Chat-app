import React from "react";
import { BsSend } from "react-icons/bs";
function MessageInput() {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
       placeholder="Send a message" />
      <button className="absolute text-white inset-y-0 end-0  pe-3 flex items-center
      ">
        <BsSend />
      </button>
      </div>
    </form>
  );
}

export default MessageInput;
