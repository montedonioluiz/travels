import { Map as olMap } from "ol";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Map from "@/components/ol/map";
import { generateMap } from "@/ol/Map";
import AuthLayout from "@/layouts/auth";
import Contexts from "@/contexts/provider";

export default function Index() {
  const router = useRouter();

  const contexts = {
    map: useRef<olMap | undefined>(undefined),
  };

  useEffect(() => {
    const isLogged = true;

    if (!isLogged) {
      alert("please login");
      router.push("/login");
    }

    contexts.map.current = generateMap();
  });

  return (
    <AuthLayout>
      <Contexts contexts={contexts}>
        <Map />
      </Contexts>
    </AuthLayout>
  );
}
