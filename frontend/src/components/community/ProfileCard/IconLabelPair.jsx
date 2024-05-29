// IconLabelPair.js
import React from 'react';

function IconLabelPair({ icon, label }) {
  return (
    <div className="icon-label-pair">
      {icon}
      <p className="label">{label}</p>
    </div>
  );
}

export default IconLabelPair;
