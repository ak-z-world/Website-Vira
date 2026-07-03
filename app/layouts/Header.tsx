'use client';

import { useState, useEffect, ReactNode } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Users,
  Calendar,
  ArrowRight,
  Library,
  Map,
  MessageSquare,
  Briefcase,
  Home,
  Grid,
  Info,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type DropdownItem = {
  label: string;
  href: string;
  description: string;
  badge?: string;
  icon?: ReactNode;
};

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode | null;
  dropdown?: DropdownItem[];
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isResourcesMenuExpanded, setIsResourcesMenuExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsCoursesOpen(false);
        setIsResourcesMenuExpanded(false);
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Combined standard V1 icons mapped to visual design matches
  const navItems: NavItem[] = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    {
      label: 'Courses',
      href: '/courses',
      icon: <Grid className="w-4 h-4" />,
      dropdown: [
        {
          label: 'Python & Django',
          href: '/courses/python',
          badge: 'Popular',
          description: 'Master backend engineering and APIs'
        },
        {
          label: 'DevOps',
          href: '/courses/devops',
          badge: 'High Demand',
          description: 'Cloud infrastructure and automation'
        },
        {
          label: 'React Development',
          href: '/courses/react',
          badge: 'Trending',
          description: 'Build modern frontend applications'
        },
        {
          label: 'Data Science',
          href: '/courses/data-science',
          badge: 'Hot',
          description: 'Analytics, visualization, and ML'
        },
        {
          label: 'Python + AI + AWS DevOps Combo',
          href: '/courses/python-ai-aws-devops-combo',
          badge: 'New',
          description: 'Complete full-stack mastery path'
        },
      ],
    },
    {
      label: 'Resources',
      href: '/resources',
      icon: <Library className="w-4 h-4" />,
      dropdown: [
        {
          label: 'Tutorials',
          href: '/resources/tutorials',
          description: 'Step-by-step learning guides',
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          label: 'Roadmaps',
          href: '/resources/roadmaps',
          description: 'Structured career pathways',
          icon: <Map className="w-5 h-5" />
        },
        {
          label: 'Interview Questions',
          href: '/resources/interview-questions',
          description: 'Role-based interview preparation',
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          label: 'Projects',
          href: '/resources/projects',
          description: 'Real-world hands-on projects',
          icon: <Briefcase className="w-5 h-5" />
        }
      ]
    },
    { label: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsResourcesMenuExpanded(false);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesMenuExpanded(!isResourcesMenuExpanded);
    setIsCoursesOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8
          ${isScrolled ? 'pt-3' : 'pt-6'}
        `}
      >
        <div
          className={`
            max-w-7xl mx-auto bg-[#F4F5FA] border border-white/60
            rounded-[28px] transition-all duration-500 ease-in-out
            shadow-[12px_12px_24px_#dcdde3,-12px_-12px_24px_#ffffff]
            ${isScrolled ? 'py-2 px-4' : 'py-3.5 px-6'}
          `}
        >
          <nav className="flex items-center justify-between">
            
            {/* ── 1. LOGO CARD ── */}
            <Link
              href="/"
              className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F4F5FA] shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff,inset_1px_1px_2px_#ffffff] border border-white/40 focus:outline-none shrink-0"
              aria-label="Crack Leap Academy Home"
            >
              <Image
                src="/cl_logo.png"
                alt="Crack Leap Academy Logo"
                width={40}
                height={40}
                priority
                className="w-8 h-8 object-contain"
              />
            </Link>

            {/* ── 2. DESKTOP NAV LINKS ── */}
            <div className="hidden lg:flex items-center gap-2">
              <ul className="flex items-center gap-3 bg-[#EEF0F6] px-4 py-2 rounded-2xl shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff]">
                {navItems.map((item) => {
                  const isItemActive = isActive(item.href);
                  const displayLabel = item.label === 'Courses' ? 'Programs' : item.label;

                  return (
                    <li key={item.label} className="relative group">
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={item.label === 'Courses' ? toggleCoursesDropdown : toggleResourcesDropdown}
                            className={`
                              flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl transition-all duration-300
                              ${isItemActive
                                ? 'bg-[#F4F5FA] text-[#8B5CF6] shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]'
                                : 'text-slate-600 hover:text-[#8B5CF6]'
                              }
                            `}
                          >
                            <span className="opacity-80">{item.icon}</span>
                            {displayLabel}
                            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70" />
                          </button>

                          {/* Mega Dropdown Menu Panel */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                            <div className="bg-[#F4F5FA] border border-white/80 rounded-[28px] shadow-[14px_14px_36px_#c8c9ce,-14px_-14px_36px_#ffffff] overflow-hidden w-[560px] p-4">
                              <div className="grid grid-cols-2 gap-3 p-2">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="flex items-start gap-3 p-3.5 rounded-2xl transition-all duration-200 text-left hover:bg-[#EEF0F6] hover:shadow-[inset_2px_2px_5px_#d1d3dc,inset_-2px_-2px_5px_#ffffff] group/link"
                                  >
                                    {dropdownItem.icon && (
                                      <div className="mt-0.5 flex shrink-0 items-center justify-center w-9 h-9 rounded-xl bg-[#F4F5FA] text-[#8B5CF6] shadow-[2px_2px_6px_#dcdde3,-2px_-2px_6px_#ffffff] group-hover/link:shadow-inner">
                                        {dropdownItem.icon}
                                      </div>
                                    )}
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-slate-800 group-hover/link:text-[#8B5CF6]">
                                          {dropdownItem.label}
                                        </span>
                                        {dropdownItem.badge && (
                                          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 uppercase">
                                            {dropdownItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                                        {dropdownItem.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="bg-[#EEF0F6] px-5 py-3.5 mt-2 rounded-2xl shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff] flex justify-between items-center">
                                <span className="text-xs text-slate-500 font-bold">Explore all options</span>
                                <Link
                                  href={item.href}
                                  className="text-xs font-extrabold text-[#8B5CF6] flex items-center gap-1 hover:underline"
                                >
                                  View catalog <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`
                            flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-300
                            ${isItemActive
                              ? 'bg-[#F4F5FA] text-[#8B5CF6] shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]'
                              : 'text-slate-600 hover:text-[#8B5CF6]'}
                          `}
                        >
                          <span className="opacity-80">{item.icon}</span>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ── 3. CTA BUTTON & MOBILE TOGGLE ── */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white text-sm font-extrabold rounded-2xl shadow-[4px_6px_16px_rgba(139,92,246,0.25)] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15)] transition-all duration-300 border-t border-white/20 active:scale-98"
              >
                Book Free Career Session
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Neomorphic Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-[#F4F5FA] shadow-[3px_3px_8px_#dcdde3,-3px_-3px_8px_#ffffff] text-slate-700 active:shadow-[inset_2px_2px_5px_#dcdde3,inset_-2px_-2px_5px_#ffffff] border border-white/40 transition-all"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN NEOMORPHIC DRAWER ── */}
      <div
        className={`
          fixed inset-0 z-40 bg-[#F4F5FA] transition-all duration-500 ease-in-out lg:hidden pt-24 px-6 pb-6 overflow-y-auto flex flex-col
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <div className="w-full max-w-md mx-auto flex flex-col flex-grow">
          
          {/* Top Notch Styling matching image_ccbc8f.jpg container format */}
          <div className="w-16 h-1.5 bg-slate-300 rounded-full mx-auto mb-8 shadow-inner"></div>

          <nav className="flex-1 space-y-4">
            {navItems.map((item) => {
              const isItemActive = isActive(item.href);
              const displayLabel = item.label === 'Courses' ? 'Programs' : item.label;
              const isExpanded = item.label === 'Courses' ? isCoursesOpen : isResourcesMenuExpanded;

              return (
                <div key={item.label} className="w-full">
                  {item.dropdown ? (
                    <div className="w-full">
                      {/* Dropdown Expand Toggle Header */}
                      <button
                        onClick={item.label === 'Courses' ? toggleCoursesDropdown : toggleResourcesDropdown}
                        className={`
                          flex items-center justify-between w-full p-4 font-bold text-base rounded-2xl transition-all border border-white/40
                          ${isItemActive || isExpanded
                            ? 'bg-[#F4F5FA] text-[#8B5CF6] shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff]'
                            : 'bg-[#F4F5FA] text-slate-700 shadow-[4px_4px_12px_#dcdde3,-4px_-4px_12px_#ffffff]'
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-slate-400">{item.icon}</span>
                          {displayLabel}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 text-slate-400 transition-transform duration-300
                            ${isExpanded ? 'rotate-90 text-[#8B5CF6]' : ''}
                          `}
                        />
                      </button>

                      {/* Dropdown Items Body */}
                      <div
                        className={`
                          grid transition-all duration-300 ease-in-out overflow-hidden
                          ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}
                        `}
                      >
                        <div className="min-h-0 flex flex-col gap-2 p-2 bg-[#EEF0F6] rounded-2xl shadow-[inset_2px_2px_5px_#d1d3dc,inset_-2px_-2px_5px_#ffffff]">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex flex-col p-3 rounded-xl hover:bg-[#F4F5FA] active:shadow-inner transition-all"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-800">{sub.label}</span>
                                {sub.badge && (
                                  <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] uppercase tracking-wider">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-slate-500 mt-0.5 font-medium">{sub.description}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Simple Link Row */
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        flex items-center gap-3 w-full p-4 font-bold text-base rounded-2xl transition-all border border-white/40
                        ${isItemActive 
                          ? 'bg-[#F4F5FA] text-[#8B5CF6] shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff]' 
                          : 'bg-[#F4F5FA] text-slate-700 shadow-[4px_4px_12px_#dcdde3,-4px_-4px_12px_#ffffff]'
                        }
                      `}
                    >
                      <span className="text-slate-400">{item.icon}</span>
                      {displayLabel}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Bottom Actions Frame */}
          <div className="mt-8 space-y-6 pt-6 border-t border-slate-200">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex justify-center items-center gap-2 w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white rounded-2xl font-extrabold text-base shadow-[4px_6px_16px_rgba(139,92,246,0.25)] active:scale-98 transition-all border-t border-white/20"
            >
              Book Free Career Session
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Micro Neomorphic Copy Footer inside drawer */}
            <p className="text-[10px] font-bold text-slate-400 tracking-wide text-center uppercase">
              © 2026 ArivuOn Academy. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Header;