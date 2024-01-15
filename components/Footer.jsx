import Link from 'next/link'
import { FaGithub, FaLinkedin, FaBehanceSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" flex justify-between items-center  border-purple-700/20 gap-y-10 border-t  px-3 sm:px-20 py-12 text-base tracking-wider transition-all text-gray-500">
      <div className="flex flex-col">
        <p className="hover:tracking-widest transition-all">Bhavya B Anil</p>
        <a
          href="mailto:bhavyabanil@gmail.com"
          className="hover:tracking-widest transition-all"
        >
          bhavyabanil@gmail.com
        </a>
        <a
          href="tel:+919037713663"
          className="hover:tracking-widest transition-all"
        >
          +919037713663
        </a>
      </div>
      <div className="flex flex-col gap-y-3">
        <Link
          href="https://www.behance.net/bhavyabanil"
          target="_blank"
          className="flex items-center gap-x-1 "
        >
          <FaBehanceSquare />
          Behance
        </Link>
        <Link
          href="https://www.linkedin.com/in/bhavya-b-anil-7176b9232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="flex items-center gap-x-1 "
        >
          <FaLinkedin />
          LinkedIn
        </Link>
      </div>
    </footer>
  )
}

export default Footer
