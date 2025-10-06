import { Shield, Wrench, Truck, HeadphonesIcon, Award, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety Compliant",
    description: "All products meet Indian safety standards (IS/BIS) and construction site safety regulations."
  },
  {
    icon: Wrench,
    title: "Custom Design",
    description: "Tailored solutions for your specific building requirements. Expert design consultation available."
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Reliable delivery across India with installation support in all major cities."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated customer service team to assist with inquiries, installation, and after-sales support."
  },
  {
    icon: Award,
    title: "Superior Quality",
    description: "Heavy-duty MS steel construction with powder coating for long-lasting durability."
  },
  {
    icon: Zap,
    title: "Best Pricing",
    description: "Direct manufacturer pricing with attractive bulk order discounts for contractors and builders."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">Why Choose Aakaar Green</h2>
          <p className="text-xl text-muted-foreground">
            Pune's most trusted debris chute manufacturer, delivering quality and safety in every installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl border border-border hover:border-green-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}