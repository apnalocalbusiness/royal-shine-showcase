import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=600&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-background mb-6">
            Contact Us
          </h1>
          <p className="text-background/80 text-xl max-w-2xl mx-auto font-light">
            We'd love to hear from you. Visit our showroom or reach out to us.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Visit Our Showroom</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                We're Here to Help
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />
              <p className="text-muted-foreground mb-8">
                Step into our showroom and experience our stunning collection firsthand. Our expert consultants are ready to assist you in finding the perfect piece.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-champagne rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Showroom Address</h3>
                    <p className="text-muted-foreground">
                      123 Jewellery Lane, Diamond District,<br />
                      Mumbai, Maharashtra 400001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-champagne rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Phone Number</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-gold transition-colors">
                      +91 98765 43210
                    </a>
                    <br />
                    <a href="tel:+919876543211" className="text-muted-foreground hover:text-gold transition-colors">
                      +91 98765 43211
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-champagne rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Email Address</h3>
                    <a href="mailto:info@royalshinejewellers.com" className="text-muted-foreground hover:text-gold transition-colors">
                      info@royalshinejewellers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-champagne rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-sm shadow-xl border border-border">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                    <CheckCircle className="text-gold" size={40} />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. Our team will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", message: "" });
                    }}
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-foreground"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif text-foreground mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={4}
                        required
                        className="bg-background border-border focus:border-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold text-foreground hover:bg-gold-dark py-6 uppercase tracking-wider font-medium"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">Find Us</h2>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="bg-card rounded-sm shadow-xl overflow-hidden">
            {/* Map Placeholder */}
            <div className="relative h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif text-foreground mb-2">Royal Shine Jewellers</h3>
                <p className="text-muted-foreground">123 Jewellery Lane, Diamond District, Mumbai</p>
                <a
                  href="https://maps.google.com/?q=Mumbai+Diamond+District"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-gold hover:text-gold-dark transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
