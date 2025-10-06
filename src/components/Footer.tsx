import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded"></div>
              </div>
              <span className="text-white">Aakaar Green</span>
            </div>
            <p className="text-sm mb-4">
              Leading manufacturer of building debris chutes in Pune. Serving construction industry across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-white transition-colors">Building Debris Chutes</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Industrial Waste Chutes</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Garbage Disposal Chutes</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Custom Chute Systems</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Chute Accessories</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Aakaar Green</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Installation Support</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Maintenance Tips</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Download Catalog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2025 Aakaar Green. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}