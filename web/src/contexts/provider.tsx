import { ReactNode } from "react";

import MapContext from "@/contexts/map";
import { IMapContext } from "@/types/contexts";

interface Props {
  contexts: {
    map: IMapContext;
  };
  children: ReactNode;
}
export default function ContextProvider({
  children,
  contexts: { map },
}: Props) {
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
}
