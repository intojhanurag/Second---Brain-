import { ShareIcon } from "../../icons/ShareIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { SaveIcon } from "../../icons/SaveIcon";
import {InstagramEmbed} from 'react-social-media-embed'
import { FacebookEmbed } from 'react-social-media-embed';
import { PinterestEmbed } from 'react-social-media-embed';
import { LinkedInEmbed } from 'react-social-media-embed';


interface CardProps{
    _id:string;
    title:string;
    link:string;
    type:"twitter"|"youtube"|"instagram"|"facebook"|"pinterest"|"spotify"|"gallery"|"linkedin"
    onDelete:()=>void

}
export function Card({title,link,type,onDelete}:CardProps) {
  return (
    <div>
      <div className="p-4 bg-black rounded-md border-slate-200 max-w-72 border min-h-48 min-w-72 ">
        <div className="flex justify-between">
          <div className="flex items-center font-semibold">
            <div className="text-gray-500 ">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <SaveIcon />
              </a>
            </div>
            <div className="pr-2 text-gray-500 cursor-pointer" onClick={onDelete}>
              <DeleteIcon/>
            </div>
          </div>
        </div>
        <div className="pt-4">
            {type==="youtube"&& <iframe 
                className="w-full"
                
                src={link.replace("watch", "embed").replace("?v=","/")} 
                title="YouTube video player" 
              
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            }

            {type==="twitter"&& <blockquote
                className="twitter-tweet"
                data-theme="dark"
                >
                <a href={link.replace("x.com","twitter.com")}></a>
                
            </blockquote>}

            {type === "instagram" && (
            <div className="instagram-embed-container">
              <InstagramEmbed url={link} width="100%" />
            </div>
          )}
            { type==="facebook" && (
              <FacebookEmbed url={link} width={550} />
            )}


            {type === "pinterest" && (
              <iframe
                className="w-full rounded-lg"
                src={`https://assets.pinterest.com/ext/embed.html?id=${link.split('/').pop()}`}
                width="345"
                height="467"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
            {type === "linkedin" && (
              <div>
                <img src="your-screenshot-url.jpg" alt="LinkedIn Post Preview" className="w-full rounded-lg" />
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Post on LinkedIn
                </a>
              </div>
            )}
            {type === "spotify" && (
              <iframe
                className="w-full rounded-lg"
                src={link.replace("open.spotify.com", "embed.spotify.com")}
                width="100%"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
              ></iframe>
            )}


        </div>


      </div>
    </div>
  );
}
