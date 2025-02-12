
import { Card } from "../components/ui/card";
import { CreateContentModel } from "../components/ui/createContentModel";
import { useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "../components/ui/Button";
export function Dashboard() {
  const [modelopen, setmodelopen] = useState(false);
  return (
    <div>
      <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModel
          open={modelopen}
          onClose={() => {
            setmodelopen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setmodelopen(true);
            }}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="share"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
        <div className="flex gap-4">
          <Card
            type="twitter"
            link="https://x.com/AnuragOjha8355/status/1889225937155453275"
            title="First win"
          />

          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=72GkQIo4QjQ"
            title="yt win"
          />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;