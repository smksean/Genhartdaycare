import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Shield, Users, BookOpen, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/homepage-kiddies-paradise-hero.png";
import aboutImage from "@/assets/homepage-learning-care.png";

const testimonials = [
  {
    name: "Mrs. Adaeze O.",
    text: "Genhart Daycare has been a blessing for our family. My daughter comes home happy every day!",
  },
  {
    name: "Mr. & Mrs. Ikenna",
    text: "The staff treats our son like family. We couldn't ask for a better daycare experience.",
  },
  {
    name: "Mrs. Blessing E.",
    text: "Safe, loving, and educational. Genhart Daycare is truly a home away from home.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-yellow/8 to-background">
        <div className="container mx-auto px-4 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <span className="inline-block px-4 py-2 bg-brand-yellow/15 text-brand-orange/90 rounded-full text-sm font-medium">
                Toddler & Preschool Care in Benin City
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                A Home Away from Home for{" "}
                <span className="text-brand-red">Little Hearts</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                We provide a safe, caring, and family-like environment where every child 
                feels at home while learning through play and discovery. For children from 
                9 months to 5 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="h-5 w-5" />
                    Contact Us to Enroll
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/program">
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-brand-yellow/20">
                <img
                  src={heroImage}
                  alt="Genhart Daycare Centre Kiddies Paradise hero banner"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Text-Led Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Parents Choose Genhart Daycare
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our daily care is guided by the values parents look for most: safety, warmth, 
              learning, inclusion, and close partnership with families.
            </p>

            <div className="space-y-8">
              {/* Loving Care */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-brand-red/70 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Loving, Family-Like Care
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We treat every child with love and respect. Our caregivers build genuine relationships 
                    with the children, creating a warm environment where they feel safe, loved, 
                    and truly at home.
                  </p>
                </div>
              </motion.div>

              {/* Safety */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-brand-blue/70 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Safe & Secure Facility
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your child's safety comes first. We maintain a secured, serene environment 
                    with trained caregivers, attentive supervision, and security support to give 
                    parents peace of mind.
                  </p>
                </div>
              </motion.div>

              {/* Learning - Two Column */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6 pl-10 pt-2"
              >
                <div className="border-l-3 border-brand-green/30 pl-4">
                  <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-brand-green/70" />
                    Learning Through Play
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Children learn through play, Montessori-inspired activities, exploration, 
                    and hands-on discovery that encourage creativity and independence.
                  </p>
                </div>
                <div className="border-l-3 border-brand-orange/30 pl-4">
                  <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                    <Users className="h-5 w-5 text-brand-orange/70" />
                    Partnership with Families
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We work closely with families, sharing updates and welcoming your input 
                    so every child's unique development is supported.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border border-secondary">
                <img
                  src={aboutImage}
                  alt="Caregiver guiding children through play-based learning at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-5"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Where Every Child <span className="text-brand-green">Blossoms</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every child deserves a safe, loving, and nurturing environment -
                a true home away from home. Our daycare is designed to be a warm, family-like 
                space where children explore, play, and grow with confidence and curiosity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in Benin City, we support toddlers and preschoolers with a clean, 
                hygienic environment, well trained caregivers, and daily routines that help 
                children feel secure and inspired to learn.
              </p>
              <div className="pt-1">
                <Button variant="default" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 bg-gradient-to-b from-brand-yellow/5 to-brand-orange/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              What Parents Say
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Here's what some of the families we serve have shared about their experience with us.
            </p>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-brand-yellow/30 pl-5 py-2"
                >
                  <p className="text-muted-foreground leading-relaxed mb-3 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground text-sm">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Join Our Family?
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Give your child a nurturing, safe, and loving daycare experience. Contact us today 
              to schedule a visit, ask questions, or enroll your little one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button variant="playful" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5" />
                  Contact Us to Enroll
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-whatsapp hover:bg-whatsapp/90 text-white border-0"
                asChild
              >
                <a href="https://wa.me/2348034957056" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
