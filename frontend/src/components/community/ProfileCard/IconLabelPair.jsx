import React from "react";

function IconLabelPair({ icon, label }) {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-p-2 hover:tw-bg-slate-300 tw-transition">
      <i className={`${icon} tw-text-xl tw-text-gray-700`}></i>
      <p className="tw-text-gray-700">{label}</p>
    </div>
  );
}

export default IconLabelPair;
