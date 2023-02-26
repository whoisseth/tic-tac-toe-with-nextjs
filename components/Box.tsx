/** @format */

import React from "react";

type Props = {
  value?: string;
};

export default function Box({ value }: Props) {
  return (
    <div className="bg-white min-h-1/3 min-w-1/3 rounded-3xl flex items-center justify-center text-5xl">
      {value}
    </div>
  );
}
