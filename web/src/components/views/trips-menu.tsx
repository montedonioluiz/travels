import { useState } from "react";
import Card from "@mui/material/Card";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

export default function TripsMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="map-overlay left-2 inset-y-0">
      <div className="h-screen flex items-center">
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Card variant="outlined" className="rounded">
            <CardContent>
              <span className="text-xl">Minhas viagens</span>

              {["trip 1", "trip 1", "trip 1", "trip 1", "trip 1"].map(
                (text) => (
                  <div className="text-center">{text}</div>
                )
              )}
            </CardContent>
          </Card>
        </Drawer>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      </div>
    </div>
  );
}
