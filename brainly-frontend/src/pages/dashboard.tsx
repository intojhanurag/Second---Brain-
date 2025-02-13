
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/createContentModel";
import { useContext, useEffect, useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "../components/ui/Button";
import {useContent} from "../hooks/useContent"
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modelopen, setmodelopen] = useState(false);
  const {contents,refresh}=useContent();

  useEffect(()=>{
    refresh();

  },[modelopen])
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
            onClick={async()=>{
            const response=await axios.post(`${BACKEND_URL}/api/v1/brain/share/`,{
              share:true
            },{
              headers:{
                "Authorization":localStorage.getItem("token")
              }
            })
        

            const shareUrl=`http://localhost:5173/share/${response.data.hash}`

            alert(shareUrl);
                

            }}

            variant="secondary"
            text="share"
            startIcon={<ShareIcon />}
            
          ></Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({type,link,title},index)=>(<Card
              key={index}
              type={type}
              link={link}
              title={title}
              />
            
          ))}
          
        </div>
      </div>
    </div>
  );
}
export default Dashboard;