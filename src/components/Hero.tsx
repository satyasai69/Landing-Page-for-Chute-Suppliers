import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Hero() {
  const handleGetQuote = () => {
    // Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleWhatsAppContact = () => {
    // Admin WhatsApp number (replace with actual number)
    const adminWhatsApp = "919876543210"; // Format: country code + number without +
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent("I'm interested in getting a quote for debris chutes.")}`, "_blank");
  };
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full">
              <span className="text-sm text-green-700">Innovative Engineering - Pune's Premier Chute Manufacturer</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl">
              Building Debris Chute Solutions for India
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Leading manufacturers and suppliers of building debris chutes in Pune. We specialize in customized 
              chute systems for construction sites, high-rise buildings, and waste management facilities across India.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>IS & BIS compliant safety standards</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Heavy-duty MS steel construction</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Custom design & pan-India delivery</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" onClick={handleGetQuote}>
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="flex items-center gap-2"
                onClick={handleWhatsAppContact}
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl">100%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/building/building1.jpeg"
                alt="Building construction site with debris management"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Certified Quality</div>
                  <div>ISO 9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}