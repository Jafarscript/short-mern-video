import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="30px" onClick={(e) => setLiked(false)}  className='icons'/>
        ) : (
          <FavoriteBorderIcon fontSize="30px" onClick={(e) => setLiked(true)} className='icons'/>
        )}
        <p>{liked ? +likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="30px" className='icons' />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="30px" className='icons'/>
        <p>{shares}</p>
      </div>
    </div>
  );
};
export default VideoSidebar;
