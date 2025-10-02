import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="py-10 mt-10" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 items-start">
        {/* Connect with me */}
        <div>
          <h3 className="text-lg font-light mb-4">
            Connect With Me
          </h3>
          <div className="flex space-x-1 text-4xl" style={{ marginLeft: "-5px" }}>
            <a
              href="http://twitter.com/cocosatoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#55acee] hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
            <a
              href="http://facebook.com/cocosatoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3a5795] hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="http://instagram.com/cocosatoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b09375] hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.youtube.com/@cocosato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e12b28] hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faSquareYoutube} />
            </a>
          </div>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="text-lg font-light mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-600">
                I Believe in
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                My Story
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                Official Bio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                Clients & Awards
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                Links & Credits
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-light mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-600">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Things I Do */}
        <div>
          <h3 className="text-lg font-light mb-4">Things I Do</h3>
          <ul className="space-y-2">
            <li>Experiential Events</li>
            <li>Brand Content Creation</li>
            <li>Public Art & Engagement</li>
            <li>Education, Workshops & Talks</li>
            <li>Corporate Entertainment</li>
            <li>Research & Consulting</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-10 text-gray-400">
        © 2025 Coco Sato. All rights reserved.
      </div>
    </footer>
  );
}
