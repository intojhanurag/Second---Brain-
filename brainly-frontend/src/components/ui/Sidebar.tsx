import { TwitterIcon } from "../../icons/Twitter"
import { SidebarItem } from "./SidebarItem"
import { YouTubeIcon } from "../../icons/YoutubeIcon"
import { Logo } from "./Logo"

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        

        <h1 className="flex text-2xl pt-8 items-center font-semibold">
            <div className="pr-2 text-purple-700">
                <Logo/>
            </div>
            Brainly
        </h1>

        <div className="pt-8 pl-4">

            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="You Tube" icon={<YouTubeIcon/>}/>


        </div>

    </div>
}