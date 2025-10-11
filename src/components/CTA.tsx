import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });
    
    try {
      // Send data to backend API
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({ 
          success: true, 
          message: "Your quote request has been sent successfully! We'll contact you soon." 
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          details: ""
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ 
        success: false, 
        message: "There was an error sending your request. As a fallback, you can contact us directly on WhatsApp." 
      });
      
      // Fallback to direct WhatsApp link
      const message = `New Quote Request:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nDetails: ${formData.details}`;
      const adminWhatsApp = "919876543210";
      const whatsappURL = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                name="company"
                placeholder="Company Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                value={formData.company}
                onChange={handleChange}
                required
              />

              <Input
                name="phone"
                placeholder="Phone Number"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="details"
                placeholder="Project Details"
                rows={4}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={formData.details}
                onChange={handleChange}
                required
              />

              {submitStatus.success !== null && (
                <div className={`p-4 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-green-900 hover:bg-slate-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Request Quote'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  onClick={() => {
                    const adminWhatsApp = "919876543210";
                    window.open(`https://wa.me/${adminWhatsApp}`, "_blank");
                  }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact on WhatsApp
                </Button>
              </div>
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