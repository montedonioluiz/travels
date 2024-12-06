import Zoom from "@/components/zoom";
import Menu from "@/components/menu";

export default function Map() {
  return (
    <div id="map" className="h-full">
      <Menu />
      <Zoom />
    </div>
  );
}
