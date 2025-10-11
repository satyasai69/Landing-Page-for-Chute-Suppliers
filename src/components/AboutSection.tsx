import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Users, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "15+",
    label: "Years in Business"
  },
  {
    icon: Users,
    value: "50+",
    label: "Skilled Workers"
  },
  {
    icon: Globe,
    value: "20+",
    label: "Cities Covered"
  },
  {
    icon: TrendingUp,
    value: "500+",
    label: "Projects Delivered"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/images/building/building2.jpeg"
                alt="Construction equipment and manufacturing"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full">
              <span className="text-sm text-green-700">About Us</span>
            </div>

            <h2 className="text-4xl">Leading Debris Chute Manufacturers in Pune</h2>

            <p className="text-lg text-muted-foreground">
              Innovative Engineering is a premier manufacturer and supplier of building debris chutes in Pune, Maharashtra. 
              With over 15 years of experience, we have established ourselves as a trusted name in the construction 
              equipment industry across India.
            </p>

            <p className="text-muted-foreground">
              Our manufacturing facility in Pune is equipped with modern machinery and skilled workforce to deliver 
              high-quality debris chutes, garbage chutes, and waste management solutions. We specialize in custom 
              designs tailored to meet specific project requirements, ensuring safety and efficiency on every job site.
            </p>
            
            <p className="text-muted-foreground">
              Established in 2008, Innovative Engineering has grown to become one of the leading providers of construction 
              waste management solutions. Our team of experienced engineers and technicians are dedicated to delivering 
              products that meet the highest standards of quality and safety.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4>Quality Manufacturing</h4>
                  <p className="text-muted-foreground">
                    Premium MS steel construction with strict quality control at every stage
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4>Custom Solutions</h4>
                  <p className="text-muted-foreground">
                    Tailored designs for residential, commercial, and industrial projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4>Complete Support</h4>
                  <p className="text-muted-foreground">
                    From design consultation to installation and after-sales service
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}