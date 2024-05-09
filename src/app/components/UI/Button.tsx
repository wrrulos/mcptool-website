import React from "react";

interface Props {
  url: string;
  className?: string;
  children?: React.ReactNode;
}

export function Button({ url, className, children }: Props) {
  return (
    <a href={url} className={`text-white ${className}`}>
      {children}
    </a>
  );
}

export function RedButton({ url, className, children }: Props) {
  return (
    <a href={url} className={`text-white bg-[#ff003b] px-5 py-3 rounded-xl hover:bg-[#ad314e] ${className}`}>
      {children}
    </a>
  );
}
/* bg-[#ff003b] text-white px-6 py-3 rounded-xl hover:bg-[#ff003b] hover:opacity-80 transition-opacity*/
