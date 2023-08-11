import React from "react";
import logo from "../../assets/logo/logo.svg";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="px-20 py-10 bg-[#111315]">
            <footer className="footer p-10  text-[#757575]">
                <div>
                    <Link to={"/"}>
                        <img className="h-14" src={logo} alt="" />
                    </Link>
                    <div className="w-fit flex gap-5 text-2xl text-white mt-6">
                        <FaGithub className="hover:scale-150 duration-500"></FaGithub>
                        <FaTwitter className="hover:scale-150 duration-500"></FaTwitter>
                        <FaYoutube className="hover:scale-150 duration-500"></FaYoutube>
                        <FaLinkedin className="hover:scale-150 duration-500"></FaLinkedin>
                        <FaInstagram className="hover:scale-150 duration-500"></FaInstagram>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Products</span>
                    <a className="link link-hover">SDKs</a>
                    <a className="link link-hover">Auth</a>
                    <a className="link link-hover">Explore</a>
                    <a className="link link-hover">Pusblish</a>
                    <a className="link link-hover">Solidity SDK</a>
                    <a className="link link-hover">Deploy</a>
                    <a className="link link-hover">Dashboards</a>
                    <a className="link link-hover">Storage</a>
                    <a className="link link-hover">UI Components</a>
                    <a className="link link-hover">Wallet SDK</a>
                </div>
                <div>
                    <span className="footer-title">Resoures</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Upcomming Events</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Docs</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Open Source</a>
                    <a className="link link-hover">Guides</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press Kit</a>
                    <a className="link link-hover">Report Abuse</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
