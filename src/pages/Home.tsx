import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Shield, Users, BookOpen, Star, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-daycare.jpg";
import aboutImage from "@/assets/about-reading.jpg";

const features = [
  {
    icon: Heart,
    title: "Loving Care",
    description: "A warm, family-like environment where every child feels at home.",
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your child's safety is our top priority with trained staff and secure facilities.",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    icon: BookOpen,
    title: "Montessori Learning",
    description: "Play-based learning combined with Montessori principles for holistic development.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
  {
    icon: Users,
    title: "Family Partnership",
    description: "We partner closely with families to nurture each child's unique potential.",
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
];

const testimonials = [
  {
    name: "Mrs. Adaeze O.",
    text: "Genhart Daycare has been a blessing for our family. My daughter comes home happy every day!",
    rating: 5,
  },
  {
    name: "Mr. & Mrs. Ikenna",
    text: "The staff treats our son like family. We couldn't ask for a better daycare experience.",
    rating: 5,
  },
  {
    name: "Mrs. Blessing E.",
    text: "Safe, loving, and educational. Genhart Daycare is truly a home away from home.",
    rating: 5,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-yellow/10 to-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 bg-brand-yellow/20 text-brand-orange rounded-full text-sm font-semibold">
                🏠 Infant & Toddler Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                A Home Away from Home for{" "}
                <span className="text-brand-red">Little Hearts</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                At Genhart Daycare, we provide a safe, caring, and family-like environment 
                where every child feels at home while learning through play and discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src={heroImage}
                  alt="Happy children playing at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-brand-yellow text-foreground px-4 py-2 rounded-2xl shadow-lg font-semibold"
              >
                ⭐ Trusted by Parents
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-brand-green text-primary-foreground px-4 py-2 rounded-2xl shadow-lg font-semibold"
              >
                🌱 Montessori Based
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Parents <span className="text-brand-red">Love</span> Genhart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to provide the best care for your little ones
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src={aboutImage}
                  alt="Reading time at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Where Every Child <span className="text-brand-green">Blossoms</span>
              </h2>
              <p className="text-muted-foreground">
                At Genhart Daycare, we believe that every child deserves a safe, loving, and 
                nurturing environment—a true home away from home. Our daycare is designed to 
                be a warm, family-like space where children explore, play, and grow with 
                confidence and curiosity.
              </p>
              <p className="text-muted-foreground">
                We partner closely with families to nurture each child's unique potential, 
                ensuring little hearts feel loved, supported, and free to blossom every day.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-brand-yellow/5 to-brand-orange/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Parents <span className="text-brand-orange">Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from families who trust us with their precious little ones
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-6 rounded-2xl shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <Heart className="h-16 w-16 text-brand-yellow mx-auto animate-bounce-gentle" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Join Our Family?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Give your child the gift of a nurturing, educational, and loving daycare experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="playful" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5" />
                  Contact Us to Enroll
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://wa.me/2348034535648" target="_blank" rel="noopener noreferrer">
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
