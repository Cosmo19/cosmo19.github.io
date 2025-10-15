import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="py-10 pt-20 opacity-80" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 gap-10 items-start">
        {/* Connect with me */}
        <div>
          <h3 className="text-md text-gray-800 mb-4">
            Connect
          </h3>
          <div className="flex text-4xl" style={{ marginLeft: "-5px" }}>
            <a
              href="http://twitter.com/cocosatoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#55acee] hover:opacity-80 hover:text-[#000] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
            <a
              href="http://facebook.com/cocosatoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3a5795] hover:opacity-80 hover:text-[#000] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="http://instagram.com/cocosatoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b09375] hover:opacity-80 hover:text-[#000] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.youtube.com/@cocosato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e12b28] hover:opacity-80 hover:text-[#000] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faSquareYoutube} />
            </a>
          </div>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="text-md text-gray-800 mb-5">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                I Believe in
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                My Story
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                Official Bio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                Clients & Awards
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                Links & Credits
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-md text-gray-800 mb-5">Community</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#000] text-gray-600 transition-colors duration-200">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Things I Do */}
        <div>
          <h3 className="text-md text-gray-800 mb-5">Things I Do</h3>
          <ul className="space-y-3 text-sm">
            <li>Experiential Events</li>
            <li>Brand Content Creation</li>
            <li>Public Art & Engagement</li>
            <li>Education, Workshops & Talks</li>
            <li>Corporate Entertainment</li>
            <li>Research & Consulting</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-15 mb-10 text-gray-400">
        © 2025 Coco Sato. All rights reserved.
      </div>
    </footer>
  );
}
