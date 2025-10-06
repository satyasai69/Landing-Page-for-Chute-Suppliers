import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-4xl text-white">Get Started Today</h2>
            <p className="text-xl text-slate-300">
              Request a quote or consultation. Our team will respond within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>

              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />

              <Input
                placeholder="Company Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />

              <Input
                placeholder="Phone Number"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />

              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />

              <Button size="lg" className="w-full sm:w-auto bg-white text-green-900 hover:bg-slate-100">
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <div className="text-lg">+91 98765 43210</div>
                    <div className="text-lg">+91 98765 43211</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <div className="text-lg">info@aakaargreen.com</div>
                    <div className="text-lg">sales@aakaargreen.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Office Location</div>
                    <div>Industrial Area, Pimpri-Chinchwad</div>
                    <div>Pune, Maharashtra 411018</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <h4 className="mb-4 text-white">Business Hours</h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span>9:00 AM - 7:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 5:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}