import "./index.css";

import Button from "./button";

export default function Zoom() {
  return (
    <div id="zoomContainer">
      <Button iO={true} />
      <Button iO={false} />
    </div>
  );
}
