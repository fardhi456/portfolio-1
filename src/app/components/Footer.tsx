import Link from 'next/link'
import { FaGithub, FaInstagram , FaTelegram  } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Portfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/fardhi456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            
            <a
              href="https://instagram.com/fardhiikp2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/fardhikp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTelegram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 