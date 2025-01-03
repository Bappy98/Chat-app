import React from "react";

function Conversation() {
  return (
    <>
      <div className="flex gap-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">😐</span>
        </div>
      </div>
      </div>
      <div className="divider py-0 my-0 h-1"></div>
    </>
  );
}

export default Conversation;
