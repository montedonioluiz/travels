import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Zoom as olZoom } from "ol/control";

export const generateMap = () =>
  new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    controls: [
      new olZoom({
        target: document.getElementById("zoomContainer") || undefined,
      }),
    ],
    target: "map",
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
