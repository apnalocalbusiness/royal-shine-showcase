import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Users, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

const categories = [
  {
    title: "Gold Jewellery",
    description: "Exquisite necklaces, bangles, rings & chains in 22K & 18K gold",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    icon: "💛",
  },
  {
    title: "Diamond Jewellery",
    description: "Stunning solitaires, earrings & diamond sets with IGI certification",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop",
    icon: "💎",
  },
  {
    title: "Silver Jewellery",
    description: "Contemporary & traditional silver pieces for every occasion",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop",
    icon: "🤍",
  },
  {
    title: "Bridal Sets",
    description: "Complete wedding collections crafted for your special day",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=400&fit=crop",
    icon: "👰",
  },
];

const trustIndicators = [
  {
    icon: Award,
    title: "BIS Hallmarked",
    description: "All gold jewellery is 100% BIS hallmarked for purity assurance",
  },
  {
    icon: Shield,
    title: "Certified Diamonds",
    description: "Every diamond comes with IGI/GIA certification",
  },
  {
    icon: Users,
    title: "25+ Years Legacy",
    description: "Trusted by generations of families since 1995",
  },
  {
    icon: Sparkles,
    title: "Master Craftsmen",
    description: "Handcrafted by skilled artisans with decades of expertise",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in">
              Est. 1995
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-background mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Royal Shine
              <span className="block text-gold mt-2">Jewellers</span>
            </h1>
            <p className="text-xl md:text-2xl text-background/90 font-light italic font-serif mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              "Where Elegance Meets Tradition"
            </p>
            <p className="text-background/80 text-lg mb-10 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Discover our exquisite collection of handcrafted gold, diamond, and silver jewellery. Each piece tells a story of timeless beauty and unmatched craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/collection"
                className="inline-flex items-center justify-center gap-2 bg-gold text-foreground px-8 py-4 font-medium uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                Explore Collection
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-4 font-medium uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors"
              >
                Visit Showroom
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Welcome to</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              A Legacy of Brilliance
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For over 25 years, Royal Shine Jewellers has been the premier destination for discerning customers seeking exceptional jewellery. Our commitment to quality, authenticity, and customer satisfaction has made us a trusted name across generations.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-4 transition-all"
            >
              Discover Our Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Collections</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Explore Our Finest Pieces
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                to="/collection"
                className="group relative overflow-hidden bg-card rounded-sm shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <span className="text-2xl mb-2 block">{category.icon}</span>
                  <h3 className="text-xl font-serif mb-2">{category.title}</h3>
                  <p className="text-background/80 text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Collection
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wider hover:bg-gold hover:text-foreground transition-colors"
            >
              View All Collections
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-serif text-background mb-4">
              Our Promise of Excellence
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 border border-background/10 rounded-sm hover:border-gold/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-3 text-gold">{item.title}</h3>
                <p className="text-background/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Visit Our Showroom
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Experience our stunning collection in person. Our expert consultants are ready to help you find the perfect piece for every occasion.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-foreground px-8 py-4 font-medium uppercase tracking-wider hover:bg-gold-dark transition-colors"
          >
            Get Directions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
