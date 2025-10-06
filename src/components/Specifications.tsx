import { CheckCircle, Ruler, Weight, Shield, Wrench } from "lucide-react";

const specifications = [
  {
    icon: Ruler,
    title: "Dimensions",
    items: [
      "Standard diameter: 18\", 24\", 30\", 36\"",
      "Customizable length per section",
      "Height: As per building requirement",
      "Modular design for easy transport"
    ]
  },
  {
    icon: Weight,
    title: "Material & Construction",
    items: [
      "Heavy-duty MS steel sheets",
      "Thickness: 14-18 gauge",
      "Weather-resistant powder coating",
      "Corrosion-proof finish"
    ]
  },
  {
    icon: Shield,
    title: "Safety Features",
    items: [
      "Reinforced joints & seams",
      "Anti-slip design elements",
      "Safety door mechanisms",
      "BIS/IS compliant materials"
    ]
  },
  {
    icon: Wrench,
    title: "Installation & Support",
    items: [
      "Easy bolt-on assembly",
      "No welding required on-site",
      "Installation guidance provided",
      "Minimal maintenance design"
    ]
  }
];

export function Specifications() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">Technical Specifications</h2>
          <p className="text-xl text-muted-foreground">
            Built to the highest standards with quality materials and precision engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specifications.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>
                
                <h3 className="mb-4">{spec.title}</h3>
                
                <ul className="space-y-3">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h3 className="mb-3">Need Custom Specifications?</h3>
          <p className="text-muted-foreground mb-6">
            We offer fully customized debris chute solutions tailored to your project's unique requirements. 
            Contact our team for detailed technical consultation.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
