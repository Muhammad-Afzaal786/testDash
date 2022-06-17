import React from 'react';
import { FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
import {FacebookShareButton , WhatsappShareButton,TwitterShareButton,LinkedinShareButton } from "react-share";
// import {FacebookIcon} from 'react-share';

export default function Footer() {
    return (
        <footer >
            <div className="social">

            {/* <FacebookShareButton url='http://facebook.com' hashtag='#react'>
                 <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
            </FacebookShareButton> */}
            <FacebookShareButton url='http://facebook.com' hashtag='#react'>
                <div className="social">
                <a href="#/"><FaFacebookF /></a>
                </div>
                </FacebookShareButton>
                <WhatsappShareButton url='http://facebook.com' hashtag='#react'>
                <div className="social">
                <a href="#/"><FaWhatsapp /></a>
                </div>
                </WhatsappShareButton>
                <LinkedinShareButton url='http://facebook.com' hashtag='#react'>
                <div className="social">
               <a href="#/"><BsLinkedin /></a>
               </div>
                </LinkedinShareButton>
                <TwitterShareButton url='http://facebook.com' hashtag='#react'>
               <div className="social">
               <a href="#/"><FaTwitter /></a>
               </div>
               </TwitterShareButton>
            </div>
        </footer>
    )
}
