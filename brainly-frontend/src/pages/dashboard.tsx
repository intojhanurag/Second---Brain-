
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/createContentModel";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { ShareModal } from "../components/ui/ShareModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";

import { Button } from "../components/ui/Button";
import {useContent} from "../hooks/useContent"
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modelopen, setmodelopen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");


  const {contents,refresh}=useContent();

  useEffect(()=>{
    refresh();

  },[modelopen])

  const handleShare=async()=>{
    const response=await axios.post(
      `${BACKEND_URL}/api/v1/brain/share`,
      {share:true},
      {
        headers:{
          Authorization:localStorage.getItem("token"),
        },
      }
    );
    const url=`http://localhost:5173/share/${response.data.hash}`;
    console.log(url)
    setShareUrl(url);
    setShareModalOpen(true);
  }
  const toogleSidebar=()=>{
    setSidebarCollapsed(!isSidebarCollapsed);
  }

  const handleDelete=async (contentId:string)=>{
    console.log(contentId);
    await axios.delete(`${BACKEND_URL}/api/v1/content/${contentId}`,{
      headers:{
        Authorization:localStorage.getItem("token"),
      }
    })
    refresh();
  }
  return (
    <div>
      <Sidebar isCollapsed={isSidebarCollapsed} toogleSidebar={toogleSidebar} />
      
      <div className={`p-4  min-h-screen bg-[#333333] transition-all duration-300 ${isSidebarCollapsed ? 'pl-24' : 'pl-80'}`}>
        <CreateContentModel
          open={modelopen}
          onClose={() => {
            setmodelopen(false);
          }}
        />
        <ShareModal
          open={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
          url={shareUrl}
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
            onClick={handleShare}
            variant="secondary"
            text="Share"
            startIcon={<ShareIcon />}
          ></Button>
          
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({_id,type,link,title})=>(<Card
              key={_id}
              _id={_id}
              type={type}
              link={link}
              title={title}
              onDelete={()=>handleDelete(_id)}
              />
            
          ))}
          
        </div>
      </div>
    </div>
  );
}
export default Dashboard;