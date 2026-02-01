import { Award, Shield, Heart, Gem, Users, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Shield,
    title: "Authenticity",
    description: "100% genuine, BIS hallmarked gold and IGI/GIA certified diamonds with complete transparency.",
  },
  {
    icon: Gem,
    title: "Quality",
    description: "Finest materials and superior craftsmanship in every piece we create.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building lasting relationships with our customers through honest dealings.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning designs that blend tradition with contemporary aesthetics.",
  },
];

const reasons = [
  "BIS Hallmarked Gold with Purity Certificate",
  "IGI & GIA Certified Diamonds",
  "25+ Years of Trusted Service",
  "Skilled Master Craftsmen",
  "Lifetime Jewellery Exchange",
  "Free Cleaning & Maintenance",
  "Custom Jewellery Design Service",
  "Transparent Pricing Policy",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=600&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-background mb-6">
            About Royal Shine
          </h1>
          <p className="text-background/80 text-xl max-w-2xl mx-auto font-light">
            A legacy of excellence in craftsmanship and customer trust since 1995
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Heritage</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                A Journey of Brilliance
              </h2>
              <div className="w-20 h-0.5 bg-gold mb-8" />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1995, Royal Shine Jewellers began as a small family workshop with a big dream – to create jewellery that captures the essence of timeless elegance while honoring traditional craftsmanship.
                </p>
                <p>
                  What started as a passion for creating beautiful ornaments has evolved into one of the most trusted jewellery destinations in the region. Our founder, with over three decades of experience in the art of jewellery making, established Royal Shine with a commitment to quality, authenticity, and customer satisfaction.
                </p>
                <p>
                  Today, we continue this legacy, blending traditional techniques with modern designs to create pieces that are not just jewellery, but heirlooms to be treasured for generations.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&h=700&fit=crop"
                  alt="Craftsmanship"
                  className="w-full h-auto rounded-sm shadow-xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold text-foreground p-6 rounded-sm shadow-lg">
                  <p className="text-4xl font-serif font-bold">25+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-sm shadow-lg text-center hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Commitment</p>
              <h2 className="text-3xl md:text-4xl font-serif text-background mb-6">
                Why Choose Royal Shine?
              </h2>
              <div className="w-20 h-0.5 bg-gold mb-8" />
              <p className="text-background/80 mb-8">
                At Royal Shine Jewellers, we don't just sell jewellery – we create experiences. Every piece in our collection is a testament to our unwavering commitment to quality and customer satisfaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-gold flex-shrink-0" />
                    <span className="text-background/90 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop"
                alt="Showroom"
                className="w-full h-auto rounded-sm shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=500&fit=crop"
                alt="Our Team"
                className="w-full h-auto rounded-sm shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our People</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Expert Guidance
              </h2>
              <div className="w-20 h-0.5 bg-gold mb-8" />
              <p className="text-muted-foreground mb-6">
                Our team of experienced jewellery consultants and master craftsmen are dedicated to helping you find the perfect piece. Whether you're looking for an engagement ring, a wedding set, or a special gift, our experts will guide you through every step.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-gold">50+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-gold">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-gold">5K+</p>
                  <p className="text-sm text-muted-foreground">Designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
