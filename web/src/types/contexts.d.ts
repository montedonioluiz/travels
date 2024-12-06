import { Map } from "ol";
import { MutableRefObject } from "react";

type IMapContext = MutableRefObject<Map | undefined> | undefined;
