import "./index.css";

import Button from "./button";

export default function Zoom() {
  return (
    <div id="zoomContainer" className="absolute z-50 bottom-2 right-4">
      <Button iO={true} />
      <Button iO={false} />
    </div>
  );
}
