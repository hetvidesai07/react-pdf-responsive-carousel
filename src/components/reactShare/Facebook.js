import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
import "./style.css";

const Facebook = () => {
  const title = "This is a react share poc";
  return (
    <div>
      <FacebookShareButton
        url={"https://www.facebook.com/"}
        quote={title}
        hashtag=""
      >
        <FacebookIcon size={32} round />
        <div className="span">Facebook </div>
      </FacebookShareButton>
      <TwitterShareButton
        url={
          "https://twitter.com/i/flow/login?redirect_after_login=%2Fshare%3Furl%3Dhttps%253A%252F%252Fwww.facebook.com%252F"
        }
        quote={title}
        hashtag=""
      >
        <TwitterIcon size={32} round />
        <div className="span">Twitter </div>
      </TwitterShareButton>
      <WhatsappShareButton
        url={"https://web.whatsapp.com/"}
        quote={title}
        hashtag=""
      >
        <WhatsappIcon size={32} round />
        <div className="span">WhatsApp  </div>
      </WhatsappShareButton>
    </div>
  );
};

export default Facebook;
