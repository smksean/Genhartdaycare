import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
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
      <section className="relative py-14 bg-gradient-to-b from-brand-orange/8 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions? Want to schedule a visit? We'd love to hear from you. Call,
              WhatsApp, or stop by - we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reach us by phone, WhatsApp, or visit us in person. We're happy to answer
                  questions, discuss our programmes, or show you around.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-red/70 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground text-sm">
                      No. 7, Irumekha Street
                      <br />
                      Benin City, Edo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-green/70 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone & WhatsApp</h3>
                    <a href="tel:08034957056" className="text-brand-blue hover:underline text-sm block">
                      08034957056
                    </a>
                    <a href="tel:08033298085" className="text-brand-blue hover:underline text-sm block">
                      08033298085
                    </a>
                    <p className="text-muted-foreground text-xs mt-1">
                      Call or WhatsApp for a quick response.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-yellow/70 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Operating Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 7:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Extended care may be available by arrangement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  For the fastest response, send us a message on WhatsApp:
                </p>
                <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white" asChild>
                  <a href="https://wa.me/2348034957056" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/50 border border-border p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and we'll get back to you soon.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      className="rounded-lg"
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
                      className="rounded-lg"
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
                      className="rounded-lg"
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
                      className="rounded-lg resize-none"
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

      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-3">Visit Us</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're located at No. 7, Irumekha Street in Benin City. Parents are welcome to visit
              during operating hours - no appointment needed.
            </p>
            <Button variant="default" size="lg" asChild>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=No.%207%2C%20Irumekha%20Street%2C%20Benin%20City%2C%20Edo%20State%2C%20Nigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5" />
                Get Directions to No. 7, Irumekha Street
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-orange/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Visit?
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Come see our facility, meet our caregivers, and get a feel for what makes Genhart
              Daycare Centre special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button variant="playful" size="lg" asChild>
                <a href="tel:08034957056">
                  <Phone className="h-5 w-5" />
                  Call: 08034957056
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
