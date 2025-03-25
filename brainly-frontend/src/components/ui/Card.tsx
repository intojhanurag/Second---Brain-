import React from "react";

import { ShareIcon } from "../../icons/ShareIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { SaveIcon } from "../../icons/SaveIcon";
import {InstagramEmbed} from 'react-social-media-embed'
import { FacebookEmbed } from 'react-social-media-embed';
import { TypeIcon } from "lucide-react";
import { ContentTypeDisplay } from "./typeicon";
import { LinkedInEmbed } from 'react-social-media-embed';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';



interface CardProps
{
    _id:string;
    title:string;
    link:string;
    type:"twitter"|"youtube"|"instagram"|"facebook"|"pinterest"|"spotify"|"gallery"|"linkedin"
    onDelete:()=>void
}
export function Card({title,link,type,onDelete}:CardProps) {
  return (
    <div>
      <div className="p-4 bg-black rounded-md border-slate-200 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">

          <div className="flex items-center font-semibold">
            <div className="text-gray-500 ">
              <ShareIcon />
            </div>
            <div className="text-white pl-4">
              <ContentTypeDisplay type={type}/>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <SaveIcon />
              </a>
            </div>
            <div className="pr-2 text-gray-500 cursor-pointer" onClick={onDelete}>
              <DeleteIcon size="sm"/>
            </div>
          </div>
        </div>
        <div className="pt-4 ">
        {type === "youtube" && (() => {
              const embedUrl = link.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${link.split("/").pop().split("?")[0]}`
                  : link.replace("watch", "embed").replace("?v=", "/");

              return (
                  <iframe 
                    className="w-full"
                    src={embedUrl} 
                    title="YouTube video player" 
                    width={300}
                    height={250}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin">
                  </iframe>
              );
          })()}

            {type === "twitter" && (()=>{
              const getTweetId = (url: string) => {
                const match = url.match(/status\/(\d+)/);
                return match ? match[1] : null;
              };
              const tweetId=getTweetId(link);
              return tweetId ? <TwitterTweetEmbed tweetId={tweetId}/> : null;

            })()}


            {type === "instagram" && (
              <iframe
                className="w-full rounded-lg"
                src={`https://www.instagram.com/p/${link.split("/p/")[1].split("/")[0]}/embed`}
                width="300"
                height="250"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
            { type==="facebook" && (
              <FacebookEmbed url={link} width={550} />
            )}


            {type === "pinterest" && link.includes("pinterest.com/pin/") && (
                <iframe
                    className="w-full rounded-lg"
                    src={`https://assets.pinterest.com/ext/embed.html?id=${link.split("pinterest.com/pin/")[1].split("/")[0]}`}
                    width="300"
                    height="250"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}

            {type === "linkedin" && (
              <div className="linkedin-embed-container">
                <LinkedInEmbed url={link} width="100%" />
              </div>
            )}

            {type === "spotify" && (
              <iframe
                className="w-full rounded-lg"
                src={link.replace("open.spotify.com", "embed.spotify.com")}
                width="300"
                height="250"
                frameBorder="0"
                allow="encrypted-media"
              ></iframe>
            )}


        </div>


      </div>
    </div>
  );
}
