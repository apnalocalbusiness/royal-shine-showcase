import Layout from "@/components/Layout";

const collections = [
  {
    id: "gold",
    title: "Gold Jewellery",
    icon: "💛",
    description: "Timeless elegance in pure gold. Our gold collection features exquisite necklaces, intricate bangles, statement rings, and delicate chains – all crafted in 22K and 18K BIS hallmarked gold.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    features: ["22K & 18K Purity", "BIS Hallmarked", "Traditional & Modern Designs", "Lifetime Exchange"],
  },
  {
    id: "diamond",
    title: "Diamond Jewellery",
    icon: "💎",
    description: "Brilliance that captivates. Explore our stunning collection of solitaire rings, elegant earrings, and dazzling diamond sets – each stone certified by IGI and GIA for authenticity.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop",
    features: ["IGI & GIA Certified", "Natural Diamonds", "Expert Craftsmanship", "Certificate of Authenticity"],
  },
  {
    id: "silver",
    title: "Silver Jewellery",
    icon: "🤍",
    description: "Contemporary elegance meets tradition. Our silver collection offers a beautiful range of sterling silver pieces perfect for everyday wear and special occasions.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop",
    features: ["925 Sterling Silver", "Oxidised Finishes", "Gemstone Studded", "Affordable Luxury"],
  },
  {
    id: "bridal",
    title: "Bridal Sets",
    icon: "👰",
    description: "Make your special day unforgettable. Our bridal collection features complete sets including necklaces, earrings, maang tikka, and matching bangles – all designed to make you shine.",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&h=600&fit=crop",
    features: ["Complete Wedding Sets", "Custom Designs", "Polki & Kundan", "Antique Finishes"],
  },
  {
    id: "daily",
    title: "Daily Wear",
    icon: "✨",
    description: "Effortless elegance for every day. Lightweight, comfortable, and stylish pieces that add a touch of sophistication to your daily look without compromising on quality.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=600&fit=crop",
    features: ["Lightweight Designs", "Everyday Comfort", "Minimalist Styles", "Easy to Maintain"],
  },
];

const Collection = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&h=600&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Discover</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-background mb-6">
            Our Collections
          </h1>
          <p className="text-background/80 text-xl max-w-2xl mx-auto font-light">
            Explore our curated selection of fine jewellery, crafted with passion and precision
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-sm shadow-xl group">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6 text-4xl">{collection.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                    {collection.title}
                  </h2>
                  <div className="w-16 h-0.5 bg-gold mb-6" />
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {collection.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {collection.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 bg-gold text-foreground px-6 py-3 font-medium uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors">
                    Visit Showroom to Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Bespoke Service</p>
          <h2 className="text-3xl md:text-4xl font-serif text-background mb-6">
            Custom Jewellery Design
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
            Have a unique design in mind? Our master craftsmen can bring your vision to life. Visit our showroom for a personalized consultation and create your one-of-a-kind masterpiece.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-foreground px-8 py-4 font-medium uppercase tracking-wider hover:bg-gold-light transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">Our Quality Promise</h2>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-serif text-foreground mb-2">BIS Hallmarked</h3>
              <p className="text-muted-foreground text-sm">All gold jewellery certified by Bureau of Indian Standards</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-lg font-serif text-foreground mb-2">Certified Diamonds</h3>
              <p className="text-muted-foreground text-sm">Every diamond comes with IGI/GIA certification</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-serif text-foreground mb-2">Lifetime Exchange</h3>
              <p className="text-muted-foreground text-sm">Exchange your old jewellery at full gold value</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
