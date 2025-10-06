import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Factory, Home, Warehouse } from "lucide-react";

const applications = [
  {
    icon: Building2,
    title: "High-Rise Construction",
    description: "Efficient debris disposal for multi-story buildings and skyscrapers",
    image: "https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmlzZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTc3NzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Heavy-duty chutes for demolition and industrial waste management",
    image: "https://images.unsplash.com/photo-1582489851864-4b4bddaf6a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwd29ya2VyfGVufDF8fHx8MTc1OTc2MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Home,
    title: "Residential Buildings",
    description: "Compact solutions for apartment complexes and housing projects",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTc3NzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Warehouse,
    title: "Commercial Spaces",
    description: "Permanent waste disposal systems for malls, offices, and hospitals",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU5Nzc3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Applications() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">Applications Across Industries</h2>
          <p className="text-xl text-muted-foreground">
            Our debris chutes are designed to meet the unique requirements of various construction and building projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((application, index) => {
            const Icon = application.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={application.image}
                    alt={application.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-white">{application.title}</h3>
                  <p className="text-sm text-white/90">{application.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
