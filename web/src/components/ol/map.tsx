import Zoom from "@/components/ol/zoom";
import Menu from "@/components/ol/signOutMenu";

export default function Map() {
  return (
    <div id="map" className="h-full">
      <Menu />
      <Zoom />
    </div>
  );
}
