import { FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaSpotify, FaLinkedin, FaImages } from "react-icons/fa"; // Importing icons

const iconMap = {
  youtube: <FaYoutube className="text-red-500 text-2xl" />, // Red color for YouTube
  twitter: <FaTwitter className="text-blue-400 text-2xl" />,
  facebook: <FaFacebook className="text-blue-600 text-2xl" />,
  instagram: <FaInstagram className="text-pink-500 text-2xl" />,
  pinterest: <FaPinterest className="text-red-600 text-2xl" />,
  spotify: <FaSpotify className="text-green-500 text-2xl" />,
  linkedin: <FaLinkedin className="text-blue-700 text-2xl" />,
  gallery: <FaImages className="text-gray-500 text-2xl" />, // Generic image icon for gallery
};

export function ContentTypeDisplay({ type }) {
  return (
    <div className="flex items-center font-semibold">
      <div className="text-gray-500">
        {iconMap[type] || <FaImages className="text-gray-500 text-2xl" />} 
        {/* Default to gallery icon if type is unknown */}
      </div>
    </div>
  );
}
