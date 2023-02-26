/** @format */

import React, { ReactElement } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="h-96 w-96 bg-blue-500  p-2 rounded-3xl justify-center gap-2  grid grid-cols-3 grid-rows-3">
      {children}
    </div>
  );
}
