//controlled 

import axios from "axios";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export const CreateContentModel = ({ open, onClose }) => {
    const titleRef = useRef();
    const linkRef = useRef();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{

            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        onClose();
    }

    return (
        <div>
            {open && (
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                    <div className="absolute w-full h-full bg-slate-500 opacity-60"></div>
                    <div className="relative bg-white p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"Title"} />
                            <Input ref={linkRef} placeholder={"Link"} />
                        </div>
                        <div>
                            <h1>Type</h1>
                            <div className="flex gap-1 p-4">
                                <Button
                                    text="Youtube"
                                    variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                    onClick={() => {
                                        setType(ContentType.Youtube);
                                    }}
                                ></Button>
                                <Button
                                    text="Twitter"
                                    variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                    onClick={() => {
                                        setType(ContentType.Twitter);
                                    }}
                                ></Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="submit" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};