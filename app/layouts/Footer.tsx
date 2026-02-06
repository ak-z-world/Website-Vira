import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Sparkles, Globe, Shield, Award, MessageSquare, Calendar, BookOpen, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const courses = [
    { label: 'Python & Django', href: '/courses/python-django' },
    { label: 'DevOps Engineering', href: '/courses/devops' },
    { label: 'React Development', href: '/courses/react' },
   
  ];

 

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-800 pt-20 pb-12">
      <div className="section-padding">
       

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  Vira <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Academy</span>
                </div>
                <div className="text-sm text-gray-500">Premium Tech Education</div>
              </div>
            </Link>
            <p className="text-gray-600 mb-8 max-w-md">
              We're transforming tech education through industry-aligned programs, 
              expert mentorship, and hands-on learning experiences that launch careers.
            </p>
            
            {/* <div className="flex gap-4">
              <a href="#" className="group w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:border-orange-300">
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
              <a href="#" className="group w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:border-orange-300">
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
              <a href="#" className="group w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:border-orange-300">
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
              <a href="#" className="group w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:border-orange-300">
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
              Our Programs
            </h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <Link
                    href={course.href}
                    className="group flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
              Get in Touch
            </h3>
            <div className="space-y-4 mb-6">
             
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">+91 96773 77316</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">viraacademy.info@gmail.com</span>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 group-hover:text-orange-500" />
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Secure Learning</div>
              <div className="text-sm text-gray-600">Industry-standard security protocols</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Certified Programs</div>
              <div className="text-sm text-gray-600">Industry-recognized certifications</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900">24/7 Support</div>
              <div className="text-sm text-gray-600">Dedicated student support team</div>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-gray-600 text-center md:text-left">
                © {new Date().getFullYear()} Vira Academy. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-and-conditions" 
                className="text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium"
              >
                FAQ
              </Link>
            </div>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;