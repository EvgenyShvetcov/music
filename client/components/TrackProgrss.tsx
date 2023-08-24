import React from "react";

interface Props {
  left: number;
  right: number;
  onChange: (e) => void;
}

const TrackProgress: React.FC<Props> = ({ left, right, onChange }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
