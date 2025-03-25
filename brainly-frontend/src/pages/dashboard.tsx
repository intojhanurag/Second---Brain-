
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/createContentModel";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { ShareModal } from "../components/ui/ShareModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";

import { Button } from "../components/ui/Button";
import {useContent} from "../hooks/useContent"
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modelopen, setmodelopen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [isSharing,setIsSharing]=useState(false);


  const {contents,refresh}=useContent();

  useEffect(()=>{
    refresh();

  },[modelopen])

  const handleShare=async()=>{
    setIsSharing(true);
    try{
      const response=await axios.post(
        "https://brainly-backend-mu.vercel.app/api/v1/brain/share",
        {share:true},
        {
          headers:{
            Authorization:localStorage.getItem("token"),
          },
        }
      );
      const url=`https://brainly-backend-mu.vercel.app/share/${response.data.hash}`;
      console.log(url)
      setShareUrl(url);
      setShareModalOpen(true);
    } catch(error)
    {
      console.error("Error sharing content: ",error)
    } finally{
      setIsSharing(false);
    }
  }
  const toogleSidebar=()=>{
    setSidebarCollapsed(!isSidebarCollapsed);
  }

  const handleDelete=async (contentId:string)=>{
    console.log(contentId);
    await axios.delete(`https://brainly-backend-mu.vercel.app/api/v1/content/${contentId}`,{
      headers:{
        Authorization:localStorage.getItem("token"),
      }
    })
    refresh();
  }
  return (
    <div className="bg-[#333333] min-h-screen ">
      <Sidebar isCollapsed={isSidebarCollapsed} toogleSidebar={toogleSidebar} />
      
      <div className={`p-4  min-h-screen bg-[#333333] transition-all duration-300 overflow-hidden ${isSidebarCollapsed ? 'pl-24' : 'pl-80'}`}>
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
            text={isSharing?"Sharing...":"Share"}
            startIcon={isSharing? <FaSpinner/>:<ShareIcon/>}
            disabled={isSharing}
          ></Button>
          
        </div>
        <div className="flex gap-4 flex-wrap mt-10 w-full sm:justify-center md:justify-start md:ml-24">

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