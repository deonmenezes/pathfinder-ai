import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail } from 'lucide-react'
import EmailFormModal from '@/pages/EmailFormModel'
import logo from '../assets/logo.png'
import projectName from '../assets/chris.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Define navigation links in an array for easier management
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/services', text: 'Services' },
    { href: '/testimonials', text: 'Testimonials' },
    { href: '/career-library', text: 'Career Options' },
    { href: '/updates', text: 'Updates' },
    { href: '/about', text: 'About Us' },
    { href: '/contact', text: 'Contact Us' },
  ]

  return (
    <header className='w-full bg-background shadow-sm sticky top-0 z-50'>
      {/* Top contact bar */}
      <div className='bg-primary text-primary-foreground py-2 px-4'>
        <div className='container mx-auto flex justify-between items-center text-sm'>
          <div className='flex flex-wrap items-center gap-4'>
            <div className='flex items-center space-x-2'>
              <Phone className='h-4 w-4' />
              <span>+91 8779193439</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4' />
              <span>info@chrispathfinder.com</span>
            </div>
          </div>

          <div className='hidden md:block'>
            <span>Expert Career Guidance Since 2013</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='bg-gradient-primary text-primary-foreground rounded-lg '>
              <span className='text-xl font-bold'>
                <img src={logo} alt='Chris Pathfinder Logo' className='w-[40px] h-auto' />
              </span>
            </div>
            <div>
              <img src={projectName} alt='Chris Pathfinder' className='w-[200px] h-auto' />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-foreground hover:text-primary transition-colors font-medium'
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden lg:block'>
            <EmailFormModal
              trigger={
                <Button className='bg-gradient-primary hover:opacity-90 transition-opacity'>
                  Book Free Consultation
                </Button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 rounded-md hover:bg-muted transition-colors'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden mt-4 py-4 border-t border-border'>
            <div className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className='text-foreground hover:text-primary transition-colors font-medium px-2 py-1'
                >
                  {link.text}
                </a>
              ))}
              <EmailFormModal
                trigger={
                  <Button className='bg-gradient-primary hover:opacity-90 transition-opacity mt-4 w-full'>
                    Book Free Consultation
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header