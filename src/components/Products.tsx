import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const products = [
  {
    name: "Building Debris Chute",
    description: "Ideal for construction and demolition sites. Efficiently handles building debris with maximum safety.",
    features: [
      "MS steel construction",
      "Customizable height & diameter",
      "Weather-resistant coating",
      "Easy assembly & dismantling"
    ],
    image: "https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmlzZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTc3NzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Most Popular"
  },
  {
    name: "Industrial Waste Chute",
    description: "Heavy-duty solution for high-rise buildings and large-scale industrial projects with enhanced durability.",
    features: [
      "Thick gauge steel",
      "Reinforced joints",
      "High load capacity",
      "Powder coating finish"
    ],
    image: "https://images.unsplash.com/photo-1681407979977-ea6060c802f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMG1ldGFsJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzU5Nzc3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Premium"
  },
  {
    name: "Garbage Disposal Chute",
    description: "Permanent installation for residential and commercial buildings with focus on hygiene and safety.",
    features: [
      "Stainless steel/MS options",
      "Fire-resistant materials",
      "Self-closing doors",
      "Low maintenance design"
    ],
    image: "https://images.unsplash.com/photo-1738236662730-b4ea66d35d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3YXN0ZSUyMGRpc3Bvc2FsfGVufDF8fHx8MTc1OTc3NzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">Our Product Range</h2>
          <p className="text-xl text-muted-foreground">
            Premium quality debris chutes manufactured with heavy-duty MS steel, designed for safety and durability across all construction applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}