'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, BookOpen, Users, Calendar, ArrowRight, PenLine } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', icon: null },
    {
      label: 'Courses',
      href: '/courses',
      icon: <BookOpen className="w-4 h-4" />,
      dropdown: [
        { label: 'Python & Django',              href: '/courses/python',                  badge: 'Popular'     },
        { label: 'DevOps',                        href: '/courses/devops',                  badge: 'High Demand' },
        { label: 'React Development',             href: '/courses/react',                   badge: 'Trending'    },
        { label: 'Data Science',                  href: '/courses/datasci',                 badge: 'Hot'         },
        { label: 'Python + AI + AWS DevOps Combo',href: '/courses/python-aws-devops-combo', badge: 'New'         },
      ],
    },
    { label: 'Blog', href: '/blog', icon: <PenLine className="w-4 h-4" /> }, // ← ADDED
    { label: 'About',   href: '/about',   icon: <Users    className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Calendar className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleCoursesDropdown = () => setIsCoursesOpen(!isCoursesOpen);

  return (
    <header
      className={`
        sticky top-0 z-50
        transition-all duration-300
        bg-white/80 backdrop-blur-xl
        border-b border-[#E6ECFF]
        ${isScrolled ? 'shadow-sm' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-28 lg:h-20">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/icons/logo2.png"
              alt="ArivuOn Academy Logo"
              width={400}
              height={120}
              priority
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden xl:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">

                  {item.dropdown ? (
                    <>
                      <button
                        onClick={toggleCoursesDropdown}
                        className={`
                          flex items-center gap-2 px-4 py-2
                          font-medium text-sm rounded-lg transition-all duration-200
                          ${isActive(item.href)
                            ? 'text-[#1E3A8A]'
                            : 'text-gray-600 hover:text-[#1E3A8A]'}
                        `}
                      >
                        {item.icon && <span className="text-[#2563EB]">{item.icon}</span>}
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isCoursesOpen && (
                        <div className="absolute left-0 top-full w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                          <div className="bg-white border border-[#E6ECFF] rounded-xl shadow-lg py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                onClick={() => setIsCoursesOpen(false)}
                                className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:text-[#1E3A8A] hover:bg-[#F8FAFF] transition"
                              >
                                {dropdownItem.label}
                                {dropdownItem.badge && (
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB]">
                                    {dropdownItem.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>

                  ) : (
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-1.5 px-4 py-2
                        text-sm font-medium rounded-lg transition
                        ${isActive(item.href)
                          ? 'text-[#1E3A8A] bg-[#EFF6FF]'
                          : 'text-gray-600 hover:text-[#1E3A8A] hover:bg-[#F8FAFF]'}
                      `}
                    >
                      {item.icon && (
                        <span className={isActive(item.href) ? 'text-[#1E3A8A]' : 'text-[#2563EB]'}>
                          {item.icon}
                        </span>
                      )}
                      {item.label}

                      {/* "New" pill on Blog to draw attention */}
                      {item.label === 'Blog' && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600 leading-none ml-0.5">
                          New
                        </span>
                      )}
                    </Link>
                  )}

                </li>
              ))}
            </ul>

            {/* ── CTA BUTTON ── */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-sm font-semibold rounded-lg transition"
            >
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-[#E6ECFF] text-gray-700"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* ── MOBILE MENU ── */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#E6ECFF] shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                // Mobile: render courses as flat links with a header label
                <div key={item.label}>
                  <p className="px-4 pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Courses
                  </p>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-[#F8FAFF] hover:text-[#1E3A8A] transition"
                    >
                      {sub.label}
                      {sub.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB]">
                          {sub.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    flex items-center gap-2 px-4 py-3 rounded-lg text-sm transition
                    ${isActive(item.href)
                      ? 'bg-[#EFF6FF] text-[#1E3A8A] font-semibold'
                      : 'text-gray-700 hover:bg-[#F8FAFF] hover:text-[#1E3A8A]'}
                  `}
                >
                  {item.icon && <span className="text-[#2563EB]">{item.icon}</span>}
                  {item.label}
                  {item.label === 'Blog' && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600 leading-none">
                      New
                    </span>
                  )}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center mt-3 px-4 py-3 bg-[#1E3A8A] text-white rounded-lg font-semibold text-sm"
            >
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;