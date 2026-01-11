import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Send, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-orange/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's <span className="text-brand-orange">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Reach out to schedule a visit or learn more about 
              enrolling your child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get in <span className="text-brand-blue">Touch</span>
                </h2>
                <p className="text-muted-foreground">
                  We're here to answer any questions you have about our daycare. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      No. 7, Irumekha Street<br />
                      Benin City, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone & WhatsApp</h3>
                    <a href="tel:08034535648" className="text-brand-blue hover:underline">
                      08034535648
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Operating Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-brand-green/10 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-brand-green" />
                  <h3 className="text-xl font-bold text-foreground">Quick WhatsApp</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  For a faster response, send us a WhatsApp message!
                </p>
                <Button variant="success" size="lg" asChild>
                  <a href="https://wa.me/2348034535648" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-3xl shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your child and any questions you have..."
                      rows={4}
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button variant="cta" size="lg" type="submit" className="w-full">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find <span className="text-brand-blue">Us</span>
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of Benin City, Nigeria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-3xl shadow-soft p-8 text-center">
              <MapPin className="h-16 w-16 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                No. 7, Irumekha Street
              </h3>
              <p className="text-muted-foreground mb-6">
                Benin City, Edo State, Nigeria
              </p>
              <Button variant="default" size="lg" asChild>
                <a 
                  href="https://www.google.com/maps/search/No.+7,+Irumekha+Street,+Benin+City,+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <Heart className="h-16 w-16 text-primary-foreground mx-auto animate-bounce-gentle" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              We Can't Wait to Meet You!
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Schedule a visit today and see why families love Genhart Daycare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="playful" size="lg" asChild>
                <a href="tel:08034535648">
                  <Phone className="h-5 w-5" />
                  Call Now: 08034535648
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
