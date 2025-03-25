//controlled 

import axios from "axios";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../../config";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Instagram="instagram",
    Spotify="spotify",
    Pinterest="pinterest",
    Facebook="facebook",
    Gallery="gallery",
    Linkedin="linkedin"

    
}

export const CreateContentModel = ({ open, onClose }) => {
    const titleRef = useRef();
    const linkRef = useRef();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !link) {
            toast.error("Please fill in all details!", {
                position: "top-right",
                autoClose: 3000, // Auto close after 3 sec
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            return; // Stop execution if fields are empty
        }

        await axios.post(`https://brainly-backend-mu.vercel.app/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();
        toast.success("Content added successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }

    return (
        <div>
            {open && (
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 p-4">

                    <div className="absolute w-full h-full bg-black opacity-70 z-40"></div>
                    
                    <div className="relative bg-slate-900 p-6 rounded-lg shadow-lg text-white w-96 z-50">
                        <div className="">   
                            <div onClick={onClose} className="cursor-pointer flex justify-end">
                                <CrossIcon />
                            </div>
                            <br />
                        </div>
                        <div className="mb-4">
                            <Input ref={titleRef} placeholder={"Enter your title"} className="bg-gray-800 text-white border-gray-600 w-full p-2" />
                        </div>
                        <div className="mb-4">
                            <Input ref={linkRef} placeholder={"Enter the link"} className="bg-gray-800 text-white border-gray-600 w-full p-2" />
                        </div>
                        
                        <div className="mb-4">
                            <h1 className="mb-2">Type</h1>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value as ContentType)}
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                            >
                                <option value={ContentType.Youtube}>Youtube</option>
                                <option value={ContentType.Twitter}>Twitter</option>
                                <option value={ContentType.Instagram}>Instagram</option>
                                <option value={ContentType.Spotify}>Spotify</option>
                                <option value={ContentType.Pinterest}>Pinterest</option>
                                <option value={ContentType.Facebook}>Facebook</option>
                                <option value={ContentType.Gallery}>Gallery</option>
                                <option value={ContentType.Linkedin}>Linkedin</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="Submit" />
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer 
                position="top-center"
                theme="dark"
                style={{width:"400px",fontSize:"25px",padding:"45px"}}
            />

        </div>
    );
};