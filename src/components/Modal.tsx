import React, { PropsWithChildren } from "react";

export const Modal = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-dvw h-full flex justify-center items-center absolute bg-black/40 inset-0">
      <div className="bg-white max-w-[80%] min-w-[600px] max-h-[80%] rounded-lg top-[5%] flex flex-col h-[450px]">
        {children}
      </div>
    </div>
  );
};
