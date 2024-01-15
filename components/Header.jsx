import Link from 'next/link'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehanceSquare,
  FaTwitter,
} from 'react-icons/fa'

const Header = () => {
  return (
    <header className="py-8 snap-start">
      <div className="container mx-auto">
        <div className="flex  w-full justify-between items-center">
          <div className="rounded-full text-shadow text-2xl max-md:text-base font-bold text-white hover:tracking-widest transition-all">
            Bhavya B Anil
          </div>
          {/* socials */}
          <div className={`flex text-[20px] text-white `}>
            <Link
              href="https://www.behance.net/bhavyabanil"
              target="_blank"
              className="group flex flex-col justify-center items-center relative p-5"
            >
              <FaBehanceSquare className="scale-125" />
              <p className="absolute text-xs -bottom-1  right-1 text-gray-400/50 opacity-0 group-hover:opacity-100 transition-all">
                Behance
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/bhavya-b-anil-7176b9232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="group flex flex-col justify-center items-center relative p-5"
            >
              <FaLinkedin className="scale-125" />
              <p className="absolute text-xs -bottom-1  right-1 text-gray-400/50 opacity-0 group-hover:opacity-100 transition-all">
                LinkedIn
              </p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
