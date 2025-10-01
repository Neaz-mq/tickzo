import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { SiPinterest } from "react-icons/si"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
              <img
                src="/smart-watch.png"
                alt="Smart Watch"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">Tickzo</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Stay connected on the go - track your health, receive calls, and
            manage your day right from your wrist.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Product</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Help</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Term&apos;s Condition</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start md:items-center gap-3 bg-zinc-900 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base break-words">
              <Phone size={20} />
              <span>+8801-7852-86936</span>
            </li>
            <li className="flex items-start md:items-center gap-3 bg-zinc-900 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base break-words">
              <Mail size={20} />
              <span>neaz@gmail.com</span>
            </li>
            <li className="flex items-start md:items-center gap-3 bg-zinc-900 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base break-words">
              <MapPin size={20} />
              <span>123 Popular Street, Bogura, Bogura Sadar, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col items-center justify-between gap-4 lg:flex-row">
        <p className="text-gray-400 text-sm text-center lg:text-left">
          Copyright © {new Date().getFullYear()} Tickzo. All Rights Reserved.
        </p>

        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
          {[Instagram, Facebook, Twitter, SiPinterest].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black transition"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
