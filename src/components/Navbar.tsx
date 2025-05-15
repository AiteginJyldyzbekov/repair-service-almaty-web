
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'Услуги', href: '#services' },
    { name: 'О компании', href: '#about' },
    { name: 'Команда', href: '#team' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-primary text-2xl font-bold">
          РемонтТех
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary hover:text-secondary transition-colors font-medium"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white ml-4 flex items-center">
            <PhoneCall className="mr-2 h-4 w-4" />
            +7 (777) 123-45-67
          </Button>
        </nav>

        {/* Mobile Navigation Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 flex flex-col animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-4 border-b border-gray-100 text-primary hover:bg-muted transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <Button className="m-6 bg-primary hover:bg-primary/90 text-white flex items-center justify-center">
            <PhoneCall className="mr-2 h-4 w-4" />
            +7 (777) 123-45-67
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
