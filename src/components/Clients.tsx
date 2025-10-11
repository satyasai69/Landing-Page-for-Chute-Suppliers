import { ImageWithFallback } from "./figma/ImageWithFallback";

const clients = [
  {
    name: "Innovative Engineering",
    logo: "/images/client1-logo.svg"
  },
  {
    name: "Aakaar Green",
    logo: "/images/client2-logo.svg"
  },
  {
    name: "Godrej Properties",
    logo: "/images/client3-logo.svg"
  },
  {
    name: "Shapoorji Pallonji",
    logo: "/images/client4-logo.svg"
  },
  {
    name: "L&T Construction",
    logo: "/images/client5-logo.svg"
  },
  {
    name: "Panchshil Realty",
    logo: "/images/client6-logo.svg"
  }
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-sm text-green-700">Our Clients</span>
          </div>
          <h2 className="text-4xl mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with some of the most respected companies in the construction and
            waste management industries across India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
              <ImageWithFallback
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-16 w-auto"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            From small residential projects to large commercial developments, our clients trust us to deliver
            high-quality debris chute solutions that meet their specific needs.
          </p>
        </div>
      </div>
    </section>
  );
}