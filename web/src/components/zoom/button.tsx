import { useContext } from "react";

import MapContext from "@/contexts/map";

interface Props {
  iO: boolean;
}
export default function Button({ iO }: Props) {
  const map = useContext(MapContext);

  const zoom = () => {
    const view = map?.current?.getView();
    const newZoom = view?.getZoom() || 0;

    view?.setZoom(newZoom + (iO ? 1 : -1));
  };

  return (
    <div className="mb-1">
      <button
        onClick={zoom}
        className="border-2 border-zinc-300 w-8 text-center bg-zinc-300 rounded"
      >
        {iO ? "+" : "-"}
      </button>
    </div>
  );
}
