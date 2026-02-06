// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { ChevronDown, Menu, X, GraduationCap, BookOpen, Users, Calendar, Brain } from 'lucide-react';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import Image from 'next/image';

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navItems = [
// //     { label: 'Home', href: '/', icon: null },
// //     { 
// //       label: 'Courses', 
// //       href: '/courses',
// //       icon: <BookOpen className="w-4 h-4" />,
// //       dropdown: [
// //         { label: 'Python Development', href: '/courses/python', badge: 'Popular' },
// //         { label: 'DevOps Engineering', href: '/courses/devops', badge: 'High Demand' },
// //         { label: 'React Development', href: '/courses/react', badge: 'Trending' },
// //         { label: 'View All Courses', href: '/courses', badge: null },
// //       ]
// //     },
// //     { label: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
// //     { label: 'Contact', href: '/contact', icon: <Calendar className="w-4 h-4" /> },
// //   ];

// //   const isActive = (path: string) => {
// //     if (path === '/' && pathname === '/') return true;
// //     if (path !== '/' && pathname.startsWith(path)) return true;
// //     return false;
// //   };

// //   const handleCoursesMouseEnter = () => {
// //     if (window.innerWidth > 1024) {
// //       setIsCoursesOpen(true);
// //     }
// //   };

// //   const handleCoursesMouseLeave = () => {
// //     if (window.innerWidth > 1024) {
// //       setIsCoursesOpen(false);
// //     }
// //   };

// //   const toggleCoursesDropdown = () => {
// //     setIsCoursesOpen(!isCoursesOpen);
// //   };

// //   return (
// //     <header className={`sticky top-0 z-50 transition-all duration-300 ${
// //       isScrolled 
// //         ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
// //         : 'bg-gradient-to-r from-white via-white to-orange-50/30 border-b border-gray-100'
// //     }`}>
// //       {/* Top Bar */}
// //       <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white py-1.5">
// //         <div className="section-padding">
// //           <div className="flex items-center justify-between text-sm">
// //             <div className="flex items-center gap-4">
// //               <span className="max-sm:hidden sm:flex items-center gap-1.5">
// //                 <Brain className="w-4 h-4" />
// //                 <span>Future-Ready Tech Education</span>
// //               </span>
// //               <span className="max-md:hidden md:flex items-center gap-1.5">
// //                 <GraduationCap className="w-4 h-4" />
// //                 <span>5000+ Career Transformations</span>
// //               </span>
// //             </div>
// //             <div className="flex items-center gap-4">
// //               <a href="tel:+919677377316" className="max-sm:hidden sm:flex items-center gap-1.5 hover:text-orange-100 transition-colors">
// //                 <span>📞 +91 96773 77316</span>
// //               </a>
// //               <a href="mailto:admissions@viraacademy.com" className="max-md:hidden md:flex items-center gap-1.5 hover:text-orange-100 transition-colors">
// //                 <span>✉️ viraacademy.info@gmail.com</span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Navigation */}
// //       <div className="section-padding">
// //         <nav className="flex items-center justify-between py-4">
// //           {/* Logo */}
// //           <Link href="/" className="flex items-center gap-3 group">
// //             {/* <div className="relative">
// //               <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
// //               <div className="relative bg-white rounded-xl p-1.5">
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
// //                     <Brain className="w-6 h-6 text-white" />
// //                   </div>
// //                   <div className="text-left">
// //                     <div className="text-xl font-bold text-gray-900">
// //                       <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent">
// //                         Vira Academy
// //                       </span>
// //                     </div>
// //                     <div className="text-xs font-medium text-gray-600">Tech Training Excellence</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div> */}
// //             <Image src='/assets/icons/logo2.png' quality={100} unoptimized alt='logo' height={10} width={10} className='w-80 object-contain h-20'/>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="max-xl:hidden xl:flex items-center gap-8">
// //             <ul className="flex items-center gap-1">
// //               {navItems.map((item) => (
// //                 <li 
// //                   key={item.label} 
// //                   className="relative"
// //                   onMouseEnter={item.dropdown ? handleCoursesMouseEnter : undefined}
// //                   onMouseLeave={item.dropdown ? handleCoursesMouseLeave : undefined}
// //                 >
// //                   {item.dropdown ? (
// //                     <>
// //                       <button
// //                         onClick={toggleCoursesDropdown}
// //                         className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
// //                           isActive(item.href)
// //                             ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
// //                             : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
// //                         }`}
// //                       >
// //                         {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
// //                         {item.label}
// //                         <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
// //                       </button>
                      
// //                       {/* Courses Dropdown */}
// //                       {isCoursesOpen && (
// //                         <div className="absolute  left-0 top-7 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/80 backdrop-blur-xl py-3 animate-in fade-in slide-in-from-top-5 duration-200">
// //                           <div className="px-4 py-2 border-b border-gray-100">
// //                             <div className="text-sm font-semibold text-gray-900">Vira Academy Programs</div>
// //                             <div className="text-xs text-gray-500">Industry-focused curriculum</div>
// //                           </div>
// //                           {item.dropdown.map((dropdownItem) => (
// //                             <Link
// //                               key={dropdownItem.label}
// //                               href={dropdownItem.href}
// //                               className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FF7A1E] transition-all duration-200 group"
// //                               onClick={() => setIsCoursesOpen(false)}
// //                             >
// //                               <div className="flex items-center gap-3">
// //                                 <div className="w-2 h-2 rounded-full bg-orange-200 group-hover:bg-[#FF7A1E] transition-colors"></div>
// //                                 <span className="font-medium">{dropdownItem.label}</span>
// //                               </div>
// //                               {dropdownItem.badge && (
// //                                 <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
// //                                   dropdownItem.badge === 'Popular' 
// //                                     ? 'bg-orange-100 text-[#FF7A1E]' 
// //                                     : dropdownItem.badge === 'High Demand'
// //                                     ? 'bg-blue-100 text-blue-600'
// //                                     : 'bg-purple-100 text-purple-600'
// //                                 }`}>
// //                                   {dropdownItem.badge}
// //                                 </span>
// //                               )}
// //                             </Link>
// //                           ))}
// //                           <div className="px-4 py-3 border-t border-gray-100">
// //                             <Link 
// //                               href="/contact" 
// //                               className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
// //                             >
// //                               Book Free Demo
// //                             </Link>
// //                           </div>
// //                         </div>
// //                       )}
// //                     </>
// //                   ) : (
// //                     <Link 
// //                       href={item.href}
// //                       className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
// //                         isActive(item.href)
// //                           ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
// //                           : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
// //                       }`}
// //                     >
// //                       {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
// //                       {item.label}
// //                     </Link>
// //                   )}
// //                 </li>
// //               ))}
// //             </ul>
            
// //             {/* CTA Buttons */}
// //             <div className="flex items-center gap-3">
// //               <Link 
// //                 href="/contact" 
// //                 className="px-6 py-2.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5"
// //               >
// //                 Start Learning
// //               </Link>
// //               <Link 
// //                 href="/contact" 
// //                 className="max-lg:hidden lg:flex items-center gap-2 px-4 py-2.5 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
// //               >
// //                 <Calendar className="w-4 h-4" />
// //                 Free Demo
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button 
// //             className="xl:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             aria-label="Toggle menu"
// //           >
// //             {isMenuOpen ? (
// //               <X className="w-6 h-6 text-gray-700" />
// //             ) : (
// //               <Menu className="w-6 h-6 text-gray-700" />
// //             )}
// //           </button>
// //         </nav>

// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //           <div className="xl:hidden fixed inset-0 top-24 z-40 bg-white">
// //             <div className="h-[calc(100vh-6rem)] overflow-y-auto pb-8">
// //               <div className="px-4 py-6 border-b border-gray-100">
// //                 <div className="text-sm font-semibold text-gray-900 mb-2">Vira Academy Navigation</div>
// //                 <ul className="space-y-2">
// //                   {navItems.map((item) => (
// //                     <li key={item.label}>
// //                       {item.dropdown ? (
// //                         <div className="space-y-2">
// //                           <button
// //                             onClick={toggleCoursesDropdown}
// //                             className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium ${
// //                               isActive(item.href)
// //                                 ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
// //                                 : 'text-gray-700'
// //                             }`}
// //                           >
// //                             <div className="flex items-center gap-2">
// //                               {item.icon}
// //                               {item.label}
// //                             </div>
// //                             <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
// //                           </button>
                          
// //                           {/* Mobile Courses Dropdown */}
// //                           {isCoursesOpen && (
// //                             <div className="pl-8 space-y-2">
// //                               {item.dropdown.map((dropdownItem) => (
// //                                 <Link
// //                                   key={dropdownItem.label}
// //                                   href={dropdownItem.href}
// //                                   className="flex items-center justify-between px-4 py-2.5 text-gray-600 hover:text-[#FF7A1E] rounded-lg hover:bg-orange-50"
// //                                   onClick={() => {
// //                                     setIsCoursesOpen(false);
// //                                     setIsMenuOpen(false);
// //                                   }}
// //                                 >
// //                                   <div className="flex items-center gap-3">
// //                                     <div className="w-1.5 h-1.5 rounded-full bg-orange-200"></div>
// //                                     <span>{dropdownItem.label}</span>
// //                                   </div>
// //                                   {dropdownItem.badge && (
// //                                     <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
// //                                       dropdownItem.badge === 'Popular' 
// //                                         ? 'bg-orange-100 text-[#FF7A1E]' 
// //                                         : 'bg-blue-100 text-blue-600'
// //                                     }`}>
// //                                       {dropdownItem.badge}
// //                                     </span>
// //                                   )}
// //                                 </Link>
// //                               ))}
// //                             </div>
// //                           )}
// //                         </div>
// //                       ) : (
// //                         <Link 
// //                           href={item.href}
// //                           className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium ${
// //                             isActive(item.href)
// //                               ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
// //                               : 'text-gray-700 hover:bg-gray-50'
// //                           }`}
// //                           onClick={() => setIsMenuOpen(false)}
// //                         >
// //                           {item.icon}
// //                           {item.label}
// //                         </Link>
// //                       )}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               {/* Mobile CTA Section */}
// //               <div className="px-4 py-8">
// //                 <div className="text-center mb-6">
// //                   <div className="text-lg font-bold text-gray-900 mb-2">Ready to Transform Your Career?</div>
// //                   <div className="text-gray-600 text-sm">Get personalized guidance at Vira Academy</div>
// //                 </div>
                
// //                 <div className="space-y-4">
// //                   <Link 
// //                     href="/contact" 
// //                     className="block w-full py-3.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl text-center hover:shadow-lg transition-shadow"
// //                     onClick={() => setIsMenuOpen(false)}
// //                   >
// //                     Start Learning
// //                   </Link>
// //                   <Link 
// //                     href="/contact" 
// //                     className="block w-full py-3.5 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors"
// //                     onClick={() => setIsMenuOpen(false)}
// //                   >
// //                     Book Free Demo
// //                   </Link>
// //                 </div>
// //               </div>

// //               {/* Contact Info in Mobile */}
// //               <div className="px-4">
// //                 <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl">
// //                   <div className="text-sm font-semibold text-gray-900 mb-3">Vira Academy Support</div>
// //                   <div className="space-y-3">
// //                     <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700">
// //                       <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
// //                         <span className="text-[#FF7A1E]">📞</span>
// //                       </div>
// //                       <div>
// //                         <div className="text-xs text-gray-500">Call us at</div>
// //                         <div className="font-semibold">+91 98765 43210</div>
// //                       </div>
// //                     </a>
// //                     <a href="mailto:admissions@viraacademy.com" className="flex items-center gap-3 text-gray-700">
// //                       <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
// //                         <span className="text-[#FF7A1E]">✉️</span>
// //                       </div>
// //                       <div>
// //                         <div className="text-xs text-gray-500">Email us at</div>
// //                         <div className="font-semibold">admissions@viraacademy.com</div>
// //                       </div>
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;











// 'use client';

// import { useState, useEffect } from 'react';
// import { ChevronDown, Menu, X, BookOpen, Users, Calendar } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { label: 'Home', href: '/', icon: null },
//     { 
//       label: 'Courses', 
//       href: '/courses',
//       icon: <BookOpen className="w-4 h-4" />,
//       dropdown: [
//         { label: 'Python Development', href: '/courses/python-django', badge: 'Popular' },
//         { label: 'DevOps Engineering', href: '/courses/devops', badge: 'High Demand' },
//         { label: 'React Development', href: '/courses/react', badge: 'Trending' },
//         { label: 'Data Science', href: '/courses/data-science', badge: null },
//         { label: 'View All Courses', href: '/courses', badge: null },
//       ]
//     },
//     { label: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
//     { label: 'Contact', href: '/contact', icon: <Calendar className="w-4 h-4" /> },
//   ];

//   const isActive = (path: string) => {
//     if (path === '/' && pathname === '/') return true;
//     if (path !== '/' && pathname.startsWith(path)) return true;
//     return false;
//   };

//   const handleCoursesMouseEnter = () => {
//     if (window.innerWidth > 1024) {
//       setIsCoursesOpen(true);
//     }
//   };

//   const handleCoursesMouseLeave = () => {
//     if (window.innerWidth > 1024) {
//       setIsCoursesOpen(false);
//     }
//   };

//   const toggleCoursesDropdown = () => {
//     setIsCoursesOpen(!isCoursesOpen);
//   };

//   return (
//     <header className={`sticky top-0 z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-gradient-to-b from-gray-900 to-black/95 backdrop-blur-xl shadow-2xl shadow-black/30' 
//         : 'bg-gradient-to-b from-gray-900 to-black'
//     }`}>
//       {/* Top Banner */}
//       <div className="hidden lg:block bg-gradient-to-r from-orange-600 to-orange-500 text-white">
//         <div className="section-padding">
//           <div className="flex items-center justify-center py-2 text-sm font-medium">
//             <div className="flex items-center gap-2">
//               <span className="animate-pulse">✨</span>
//               <span>Enroll Now & Get 20% Off on All Courses | Limited Time Offer</span>
//               <Link href="/contact" className="ml-4 underline underline-offset-2 font-semibold hover:text-white/90">
//                 Claim Offer →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="section-padding">
//         <nav className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <Image 
//               src='/assets/icons/logo2.png' 
//               alt='Vira Academy Logo' 
//               height={80}
//               width={300}
//               className='w-auto h-12 object-contain group-hover:opacity-90 transition-opacity'
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="max-xl:hidden xl:flex items-center gap-8">
//             <ul className="flex items-center gap-1">
//               {navItems.map((item) => (
//                 <li 
//                   key={item.label} 
//                   className="relative"
//                   onMouseEnter={item.dropdown ? handleCoursesMouseEnter : undefined}
//                   onMouseLeave={item.dropdown ? handleCoursesMouseLeave : undefined}
//                 >
//                   {item.dropdown ? (
//                     <>
//                       <button
//                         onClick={toggleCoursesDropdown}
//                         className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
//                           isActive(item.href)
//                             ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-white border border-orange-500/30'
//                             : 'text-gray-300 hover:bg-white/10 hover:text-white'
//                         }`}
//                       >
//                         {item.icon && <span className="text-orange-400">{item.icon}</span>}
//                         {item.label}
//                         <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180 text-orange-400' : 'text-gray-400'}`} />
//                       </button>
                      
//                       {/* Courses Dropdown */}
//                       {isCoursesOpen && (
//                         <div className="absolute left-0 top-full mt-2 w-80 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-xl py-3 animate-in fade-in slide-in-from-top-5 duration-200">
//                           <div className="px-4 py-2 border-b border-gray-800">
//                             <div className="text-sm font-semibold text-white">Vira Academy Programs</div>
//                             <div className="text-xs text-gray-400">Industry-focused curriculum</div>
//                           </div>
//                           {item.dropdown.map((dropdownItem) => (
//                             <Link
//                               key={dropdownItem.label}
//                               href={dropdownItem.href}
//                               className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 group"
//                               onClick={() => setIsCoursesOpen(false)}
//                             >
//                               <div className="flex items-center gap-3">
//                                 <div className="w-2 h-2 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors"></div>
//                                 <span className="font-medium">{dropdownItem.label}</span>
//                               </div>
//                               {dropdownItem.badge && (
//                                 <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
//                                   dropdownItem.badge === 'Popular' 
//                                     ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
//                                     : dropdownItem.badge === 'High Demand'
//                                     ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
//                                     : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
//                                 }`}>
//                                   {dropdownItem.badge}
//                                 </span>
//                               )}
//                             </Link>
//                           ))}
//                           <div className="px-4 py-3 border-t border-gray-800">
//                             <Link 
//                               href="/contact" 
//                               className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
//                             >
//                               Book Free Demo
//                             </Link>
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link 
//                       href={item.href}
//                       className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
//                         isActive(item.href)
//                           ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-white border border-orange-500/30'
//                           : 'text-gray-300 hover:bg-white/10 hover:text-white'
//                       }`}
//                     >
//                       {item.icon && <span className="text-orange-400">{item.icon}</span>}
//                       {item.label}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
            
//             {/* CTA Buttons */}
//             <div className="flex items-center gap-3">
//               <Link 
//                 href="/contact" 
//                 className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5"
//               >
//                 <span>Start Learning</span>
//                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </Link>
//               <Link 
//                 href="/contact" 
//                 className="hidden lg:flex items-center gap-2 px-4 py-2.5 border border-orange-500 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-300"
//               >
//                 <Calendar className="w-4 h-4" />
//                 Free Demo
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="xl:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-white" />
//             ) : (
//               <Menu className="w-6 h-6 text-white" />
//             )}
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="xl:hidden fixed inset-0 top-24 z-40 bg-gradient-to-b from-gray-900 to-black">
//             <div className="h-[calc(100vh-6rem)] overflow-y-auto pb-8">
//               <div className="px-4 py-6 border-b border-gray-800">
//                 <div className="text-sm font-semibold text-white mb-2">Vira Academy Navigation</div>
//                 <ul className="space-y-2">
//                   {navItems.map((item) => (
//                     <li key={item.label}>
//                       {item.dropdown ? (
//                         <div className="space-y-2">
//                           <button
//                             onClick={toggleCoursesDropdown}
//                             className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium ${
//                               isActive(item.href)
//                                 ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-white border border-orange-500/30'
//                                 : 'text-gray-300'
//                             }`}
//                           >
//                             <div className="flex items-center gap-2">
//                               {item.icon && <span className="text-orange-400">{item.icon}</span>}
//                               {item.label}
//                             </div>
//                             <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180 text-orange-400' : 'text-gray-400'}`} />
//                           </button>
                          
//                           {/* Mobile Courses Dropdown */}
//                           {isCoursesOpen && (
//                             <div className="pl-8 space-y-2">
//                               {item.dropdown.map((dropdownItem) => (
//                                 <Link
//                                   key={dropdownItem.label}
//                                   href={dropdownItem.href}
//                                   className="flex items-center justify-between px-4 py-2.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
//                                   onClick={() => {
//                                     setIsCoursesOpen(false);
//                                     setIsMenuOpen(false);
//                                   }}
//                                 >
//                                   <div className="flex items-center gap-3">
//                                     <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
//                                     <span>{dropdownItem.label}</span>
//                                   </div>
//                                   {dropdownItem.badge && (
//                                     <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
//                                       dropdownItem.badge === 'Popular' 
//                                         ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
//                                         : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
//                                     }`}>
//                                       {dropdownItem.badge}
//                                     </span>
//                                   )}
//                                 </Link>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <Link 
//                           href={item.href}
//                           className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium ${
//                             isActive(item.href)
//                               ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-white border border-orange-500/30'
//                               : 'text-gray-300 hover:bg-gray-800'
//                           }`}
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {item.icon && <span className="text-orange-400">{item.icon}</span>}
//                           {item.label}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Mobile CTA Section */}
//               <div className="px-4 py-8">
//                 <div className="text-center mb-6">
//                   <div className="text-lg font-bold text-white mb-2">Ready to Transform Your Career?</div>
//                   <div className="text-gray-400 text-sm">Get personalized guidance at Vira Academy</div>
//                 </div>
                
//                 <div className="space-y-4">
//                   <Link 
//                     href="/contact" 
//                     className="block w-full py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl text-center hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Start Learning
//                   </Link>
//                   <Link 
//                     href="/contact" 
//                     className="block w-full py-3.5 border border-orange-500 text-orange-400 font-semibold rounded-xl text-center hover:bg-orange-500/10 transition-colors"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Book Free Demo
//                   </Link>
//                 </div>
//               </div>

//               {/* Contact Info in Mobile */}
//               <div className="px-4">
//                 <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900/50 rounded-2xl border border-gray-800">
//                   <div className="text-sm font-semibold text-white mb-3">Vira Academy Support</div>
//                   <div className="space-y-3">
//                     <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300">
//                       <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
//                         <span className="text-orange-400">📞</span>
//                       </div>
//                       <div>
//                         <div className="text-xs text-gray-500">Call us at</div>
//                         <div className="font-semibold text-white">+91 98765 43210</div>
//                       </div>
//                     </a>
//                     <a href="mailto:admissions@viraacademy.com" className="flex items-center gap-3 text-gray-300">
//                       <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
//                         <span className="text-orange-400">✉️</span>
//                       </div>
//                       <div>
//                         <div className="text-xs text-gray-500">Email us at</div>
//                         <div className="font-semibold text-white">admissions@viraacademy.com</div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;





'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, BookOpen, Users, Calendar, Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';
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
        { label: 'Python & Django', href: '/courses/python', badge: 'Popular',},
        { label: 'DevOps ', href: '/courses/devops', badge: 'High Demand'},
        { label: 'React Development', href: '/courses/react', badge: 'Trending'},
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

  const handleCoursesMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setIsCoursesOpen(true);
    }
  };

  const handleCoursesMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setIsCoursesOpen(false);
    }
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md shadow-lg border-b border-gray-100`}>
     

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-md sm:rounded-lg">
                <Image 
                  src='/assets/icons/logo2.png' 
                  alt='Vira Academy Logo' 
                  height={60}
                  width={220}
                  className='w-auto h-8 sm:h-10 object-contain brightness-0 invert'
                  priority
                />
              </div>
            </div>
            
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="max-xl:hidden xl:flex items-center gap-4 lg:gap-6">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={item.dropdown ? handleCoursesMouseEnter : undefined}
                  onMouseLeave={item.dropdown ? handleCoursesMouseLeave : undefined}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={toggleCoursesDropdown}
                        className={`flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg lg:rounded-xl font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                            : 'text-gray-700 hover:text-[#FF7A1E]'
                        }`}
                      >
                        {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
                        <span className="text-sm lg:text-base">{item.label}</span>
                        <ChevronDown className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180 text-[#FF7A1E]' : 'text-gray-400'}`} />
                      </button>
                      
                      {/* Courses Dropdown */}
                      {isCoursesOpen && (
                        <div className="absolute left-0 top-full  w-64 lg:w-80 bg-white rounded-xl lg:rounded-2xl shadow-2xl border border-gray-200 py-3 animate-in fade-in slide-in-from-top-5 duration-200">
                          <div className="px-3 lg:px-4 py-2 border-b border-gray-100">
                            <div className="text-sm font-semibold text-gray-900">Our Featured Programs</div>
                            <div className="text-xs text-gray-500">Industry-aligned curriculum</div>
                          </div>
                          <div className="py-1">
                            {item.dropdown.map((dropdownItem, index) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="flex items-center justify-between px-3 lg:px-4 py-2 lg:py-3 hover:bg-orange-50 transition-all duration-200 group"
                                onClick={() => setIsCoursesOpen(false)}
                              >
                                <div className="flex items-center gap-2 lg:gap-3">
                                  <div>
                                    <div className="text-sm lg:text-base font-medium text-gray-800 group-hover:text-[#FF7A1E]">
                                      {dropdownItem.label}
                                    </div>
                                  </div>
                                </div>
                                {dropdownItem.badge && (
                                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                    dropdownItem.badge === 'Popular' 
                                      ? 'bg-orange-100 text-[#FF7A1E]' 
                                      : dropdownItem.badge === 'High Demand'
                                      ? 'bg-blue-100 text-blue-600'
                                      : 'bg-purple-100 text-purple-600'
                                  }`}>
                                    {dropdownItem.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                          <div className="px-3 lg:px-4 pt-2 border-t border-gray-100">
                            <Link 
                              href="/contact" 
                              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white py-2 lg:py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group text-sm lg:text-base"
                            >
                              <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                              Book Free Demo
                              <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg lg:rounded-xl font-medium transition-all duration-300 text-sm lg:text-base ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                          : 'text-gray-700 hover:text-[#FF7A1E] hover:bg-orange-50'
                      }`}
                    >
                      {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Link 
                href="/contact" 
                className="group flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-2.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-lg lg:rounded-xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 text-sm lg:text-base"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="hidden lg:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 border border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-lg lg:rounded-xl hover:bg-orange-50 transition-all duration-300 text-sm lg:text-base"
              >
                <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                Free Demo
              </Link>
            </div>
          </div>

          {/* Tablet Navigation - For screens between 768px and 1279px */}
          <div className="max-md:hidden md:flex xl:hidden items-center gap-4">
            <ul className="flex items-center gap-1">
              {navItems.slice(0, 2).map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                        : 'text-gray-700 hover:text-[#FF7A1E] hover:bg-orange-50'
                    }`}
                  >
                    {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-2">
              <Link 
                href="/contact" 
                className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
              >
                <span>Enroll Now</span>
              </Link>
            </div>
          </div>

          {/* Mobile Contact Icons - Visible only on small screens */}
          <div className="flex xl:hidden items-center gap-2">
            <a 
              href="tel:+919876543210" 
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 text-[#FF7A1E] hover:bg-orange-100 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button 
              className="flex flex-col items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-800 bg-white ">
            <div className="h-dvh overflow-y-auto pb-8 bg-white">
              {/* Mobile Menu Header */}
              <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-orange-100/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-2 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-lg">
                      <Image 
                        src='/assets/icons/logo2.png' 
                        alt='Vira Academy Logo' 
                        height={40}
                        width={120}
                        className='h-8 w-auto object-contain brightness-0 invert'
                      />
                    </div>
                  
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg bg-white border border-gray-200"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="px-4 py-4 bg-white">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <button
                            onClick={toggleCoursesDropdown}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium ${
                              isActive(item.href)
                                ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                                : 'text-gray-700'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
                              <span className="text-sm">{item.label}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180 text-[#FF7A1E]' : 'text-gray-400'}`} />
                          </button>
                          
                          {/* Mobile Courses Dropdown */}
                          {isCoursesOpen && (
                            <div className="pl-8 space-y-1 mt-1">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="flex items-center justify-between px-4 py-2.5 text-gray-600 hover:text-[#FF7A1E] rounded-lg hover:bg-orange-50 group text-sm"
                                  onClick={() => {
                                    setIsCoursesOpen(false);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  <div className="flex items-center gap-3">
                                    <span>{dropdownItem.label}</span>
                                  </div>
                                  {dropdownItem.badge && (
                                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                      dropdownItem.badge === 'Popular' 
                                        ? 'bg-orange-100 text-[#FF7A1E]' 
                                        : 'bg-blue-100 text-blue-600'
                                    }`}>
                                      {dropdownItem.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link 
                          href={item.href}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm ${
                            isActive(item.href)
                              ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile CTA Section */}
              <div className="px-4 py-6 border-t border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-base sm:text-lg font-bold text-gray-900 mb-2">Ready to Start Your Tech Journey?</div>
                  <div className="text-gray-600 text-sm">Get personalized guidance from our experts</div>
                </div>
                
                <div className="space-y-3">
                  <Link 
                    href="/contact" 
                    className="block w-full py-3.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl text-center hover:shadow-lg transition-shadow text-sm sm:text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Learning
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block w-full py-3.5 border border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors text-sm sm:text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Free Demo
                  </Link>
                </div>
              </div>

              {/* Contact Info in Mobile */}
              <div className="px-4">
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100/30 rounded-2xl border border-orange-200">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Need Help? Contact Us</div>
                  <div className="space-y-3">
                    <a 
                      href="tel:+919876543210" 
                      className="flex items-center gap-3 text-gray-700 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-orange-200 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <Phone className="w-4 h-4 text-[#FF7A1E]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Call us at</div>
                        <div className="font-semibold text-sm">+91 98765 43210</div>
                      </div>
                    </a>
                    <a 
                      href="mailto:admissions@viraacademy.com" 
                      className="flex items-center gap-3 text-gray-700 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-orange-200 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <Mail className="w-4 h-4 text-[#FF7A1E]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Email us at</div>
                        <div className="font-semibold text-sm">admissions@viraacademy.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;