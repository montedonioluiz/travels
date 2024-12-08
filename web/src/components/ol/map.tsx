import "@/global.css";

import Zoom from "@/components/ol/zoom";
import TripsMenu from "@/components/views/trips-menu";
import SignOutMenu from "@/components/ol/sign-out-menu";

export default function Map() {
  return (
    <div id="map" className="h-full">
      <SignOutMenu />
      <Zoom />
      <TripsMenu />
    </div>
  );
}
