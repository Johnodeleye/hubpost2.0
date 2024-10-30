import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import logo from '@/app/assets/Logo White.png';

const Footer = () => {
    return (
        <footer className="p-5 text-left text-white bg-transparent pb-0">
  <p className=" md:mt-0 copy text-center">&copy; 2024 HubPost. All rights reserved.</p>
  <ul className="flex justify-center mb-4">
    <li className="mr-4">
      <a href="#" className="text-green-400 hover:text-gray-400">
        Terms and Conditions
      </a>
    </li>
    <li className="mr-4">
      <a href="#" className="text-green-400 hover:text-gray-400">
        Privacy Policy
      </a>
    </li>
    <li>
      <a href="#" className="text-green-400 hover:text-gray-400">
        Contact Us
      </a>
    </li>
  </ul>
  <div className="flex justify-center mb-9 mr-5">
    <a href="/" className="mr-4 text-white hover:text-gray-400">
      <Image src={logo}   className="w-auto h-8 mr-2"   alt='hubpost'   />
    </a>
    <a href="https://x.com/pthefuture_" className="mr-4 text-white hover:text-green-400">
      <FaTwitter className="w-6 h-8" />
    </a>
    <a href="https://www.facebook.com/profile.php?id=61566500583512" className="mr-4 text-white hover:text-green-400">
      <FaFacebook className="w-6 h-8" />
    </a>
    <a href="https://www.linkedin.com/in/thefuturedev/" className="mr-4 text-white hover:text-green-400">
      <FaLinkedin className="w-6 h-8" />
    </a>
    <a href="instagram.com/@perspicacious.dev" className="mr-4 text-white hover:text-green-400">
      <FaInstagram className="w-6 h-8" />
    </a>
    <a href="https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B" className="text-white hover:text-green-400">
      <FaWhatsapp className="w-6 h-8" />
    </a>
  </div>
</footer>
    )
}

export default Footer