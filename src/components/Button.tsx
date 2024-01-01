import React, { PropsWithChildren } from "react";

export const Button = ({
  children,
  ...props
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      {...props}
    >
      {children}
    </button>
  );
};
