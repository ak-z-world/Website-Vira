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
  Briefcase
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

  const navItems: NavItem[] = [
    { label: 'Home', href: '/', icon: null },
    {
      label: 'Courses',
      href: '/courses',
      icon: <BookOpen className="w-4 h-4" />,
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
    { label: 'Contact', href: '/contact', icon: <Calendar className="w-4 h-4" /> },
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
      <header
        className={`
          sticky top-0 z-50 w-full pt-4 px-4 sm:px-6 lg:px-8
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'pt-2' : 'pt-6'}
        `}
      >
        <div
          className={`
            max-w-7xl mx-auto
            bg-white/80 backdrop-blur-xl
            border border-[#E2E8F0]
            transition-all duration-300 ease-in-out
            rounded-2xl
            ${isScrolled ? 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2' : 'shadow-sm py-3'}
          `}
        >
          <nav className="relative flex items-center justify-between px-6">

            {/* ── 1. LOGO ── */}
            <Link
              href="/"
              className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
              aria-label="ArivuOn Academy Home"
            >
              <Image
                src="/logo_black.png"
                alt="ArivuOn Academy Logo"
                width={240}
                height={64}
                priority
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* ── NEW: CENTER BADGE (Mobile Only) ── */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:hidden flex items-center pointer-events-none">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#EFF6FF] border border-[#2563EB]/20 rounded-full shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2563EB]"></span>
                </span>
                <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-wider">
                  Admissions Open
                </span>
              </div>
            </div>

            {/* ── 2. DESKTOP NAV LINKS ── */}
            <div className="hidden lg:flex flex-1 justify-center px-8">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isItemActive = isActive(item.href);
                  const displayLabel = item.label === 'Courses' ? 'Programs' : item.label;

                  return (
                    <li key={item.label} className="relative group">
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={item.label === 'Courses' ? toggleCoursesDropdown : undefined}
                            className={`
                              flex items-center gap-1.5 px-4 py-2.5
                              font-medium text-sm rounded-full transition-all duration-300 ease-out
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]
                              ${isItemActive
                                ? 'bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-[#FFFFFF] shadow-sm'
                                : 'text-[#64748B] hover:text-[#1E3A8A] hover:bg-[#F8FAFF]'
                              }
                            `}
                            aria-expanded={item.label === 'Courses' ? isCoursesOpen : undefined}
                            aria-haspopup="menu"
                          >
                            {displayLabel}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${isItemActive ? 'text-[#FFFFFF]/80' : 'text-[#64748B]'}`} />
                          </button>

                          {/* Desktop Mega Menu Dropdown */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden w-[600px]">
                              <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4 relative bg-[#FFFFFF]">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#F8FAFF] transition-colors duration-200 group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                                  >
                                    {dropdownItem.icon && (
                                      <div className="mt-0.5 flex shrink-0 items-center justify-center w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] group-hover/link:bg-[#2563EB] group-hover/link:text-[#FFFFFF] transition-colors duration-200">
                                        {dropdownItem.icon}
                                      </div>
                                    )}
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-[#334155] group-hover/link:text-[#1E3A8A] transition-colors">
                                          {dropdownItem.label}
                                        </span>
                                        {dropdownItem.badge && (
                                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]/10 tracking-wide uppercase">
                                            {dropdownItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-xs text-[#64748B] mt-1 line-clamp-2">
                                        {dropdownItem.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="bg-[#F8FAFF] px-6 py-4 border-t border-[#E2E8F0] flex justify-between items-center">
                                <span className="text-sm text-[#64748B] font-medium">Explore all {displayLabel.toLowerCase()}</span>
                                <Link
                                  href={item.href}
                                  className="text-sm font-semibold text-[#2563EB] hover:text-[#1E3A8A] flex items-center gap-1 transition-colors"
                                >
                                  View catalog <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`
                            flex items-center gap-1.5 px-4 py-2.5
                            text-sm font-medium rounded-full transition-all duration-300 ease-out
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]
                            ${isItemActive
                              ? 'bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-[#FFFFFF] shadow-sm'
                              : 'text-[#64748B] hover:text-[#1E3A8A] hover:bg-[#F8FAFF]'}
                          `}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ── 3. CTA & MOBILE TOGGLE ── */}
            <div className="flex items-center shrink-0 gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1E3A8A] text-[#FFFFFF] text-sm font-semibold rounded-full shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
              >
                Book Free Career Session
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-full border border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFF] hover:text-[#1E3A8A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN DRAWER ── */}
      <div
        className={`
          fixed inset-0 z-40 bg-[#FFFFFF] transition-transform duration-500 ease-in-out lg:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full w-full flex flex-col pt-24 px-6 pb-6 overflow-y-auto">
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const isItemActive = isActive(item.href);
              const displayLabel = item.label === 'Courses' ? 'Programs' : item.label;

              return (
                <div key={item.label} className="border-b border-[#E2E8F0]/50 last:border-0 pb-2 mb-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={item.label === 'Courses' ? toggleCoursesDropdown : toggleResourcesDropdown}
                        className={`
                          flex items-center justify-between w-full py-4 text-left font-semibold text-lg transition-colors
                          ${isItemActive ? 'text-[#2563EB]' : 'text-[#334155] hover:text-[#1E3A8A]'}
                        `}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon && <span className="text-[#64748B]">{item.icon}</span>}
                          {displayLabel}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#64748B] transition-transform duration-300
                            ${(item.label === 'Courses' && isCoursesOpen) || (item.label === 'Resources' && isResourcesMenuExpanded) ? 'rotate-180' : ''}
                          `}
                        />
                      </button>

                      <div
                        className={`
                          grid transition-all duration-300 ease-in-out overflow-hidden
                          ${(item.label === 'Courses' && isCoursesOpen) || (item.label === 'Resources' && isResourcesMenuExpanded)
                            ? 'grid-rows-[1fr] opacity-100 pb-4'
                            : 'grid-rows-[0fr] opacity-0'
                          }
                        `}
                      >
                        <div className="min-h-0 flex flex-col gap-1 pl-4 border-l-2 border-[#EFF6FF] ml-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex flex-col py-3 px-4 rounded-xl hover:bg-[#F8FAFF] active:bg-[#EFF6FF] transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-[#334155]">{sub.label}</span>
                                {sub.badge && (
                                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]/10 uppercase tracking-wider">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-[#64748B] mt-0.5">{sub.description}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        flex items-center gap-3 w-full py-4 font-semibold text-lg transition-colors
                        ${isItemActive ? 'text-[#2563EB]' : 'text-[#334155] hover:text-[#1E3A8A]'}
                      `}
                    >
                      {item.icon && <span className="text-[#64748B]">{item.icon}</span>}
                      {displayLabel}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex justify-center items-center gap-2 w-full py-4 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-[#FFFFFF] rounded-full font-semibold text-base shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] active:scale-95 transition-all"
            >
              Book Free Career Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;