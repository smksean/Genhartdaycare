import { motion } from "framer-motion";
import { Shield, Heart, Eye, Utensils, Sparkles, Lock, Users, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import safetyImage from "@/assets/safety-care.jpg";

const safetyFeatures = [
  {
    icon: Lock,
    title: "Secure Facility",
    description: "Controlled entry with secure doors and safety gates throughout the premises.",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    icon: Eye,
    title: "Constant Supervision",
    description: "Our trained caregivers maintain vigilant supervision at all times.",
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    description: "Regular sanitization of toys, surfaces, and all play areas.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
  {
    icon: Users,
    title: "Trained Staff",
    description: "All caregivers are trained in first aid and child safety protocols.",
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
  {
    icon: Utensils,
    title: "Healthy Meals",
    description: "Nutritious, age-appropriate meals and snacks prepared fresh daily.",
    color: "text-brand-yellow",
    bgColor: "bg-brand-yellow/10",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Daily health checks and careful monitoring of each child's wellbeing.",
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
  },
];

const safetyChecklist = [
  "Child-proofed environment with safety covers on all outlets",
  "Non-toxic, age-appropriate toys and materials",
  "Secure outdoor play area with soft flooring",
  "Emergency contact protocols and parent communication",
  "Strict pickup authorization procedures",
  "Regular fire drills and emergency preparedness",
  "Clean drinking water and proper hygiene practices",
  "Adequate ventilation and comfortable room temperatures",
];

export default function Safety() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-brand-red/8 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red/90 rounded-full text-sm font-semibold mb-5">
              <Shield className="inline h-4 w-4 mr-1" />
              Safety & Care
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Your Child's <span className="text-brand-red">Safety</span> is Our Priority
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Genhart Daycare, we maintain the highest standards of safety and hygiene 
              to give you complete peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src={safetyImage}
                  alt="Safe environment at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A <span className="text-brand-green">Safe Haven</span> for Your Child
              </h2>
              <p className="text-muted-foreground">
                We understand that trusting someone with your child's care is a big decision. 
                That's why we go above and beyond to ensure every aspect of our facility is 
                designed with safety in mind.
              </p>
              <p className="text-muted-foreground">
                From our secure entry systems to our trained staff and sanitized play areas, 
                every detail is carefully considered to create a safe, nurturing environment 
                where your child can thrive.
              </p>
              <p className="text-muted-foreground">
                We maintain open communication with parents and welcome you to visit our 
                facility at any time to see firsthand how we care for your little one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Features - Text-Led Layout */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              How We Keep Your Child Safe Every Day
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Safety isn't just a checklist for us—it's woven into everything we do, from morning drop-off to evening pickup.
            </p>

            {/* Main Safety Points - Mixed Layout */}
            <div className="space-y-8">
              {/* Secure Facility & Supervision */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-4 border-brand-blue/40 pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-brand-blue" />
                  Secure Facility & Constant Supervision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our facility has controlled entry with secure doors and safety gates throughout. 
                  More importantly, our trained caregivers maintain vigilant supervision at all times—
                  we never leave children unattended, whether they're playing, eating, or resting.
                </p>
              </motion.div>

              {/* Clean Environment & Health */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-l-4 border-brand-green/40 pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-green" />
                  Cleanliness & Health Monitoring
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We sanitize toys, surfaces, and play areas multiple times daily. Each child receives 
                  daily health checks, and we carefully monitor their wellbeing throughout the day. 
                  If a child seems unwell, we notify parents immediately.
                </p>
              </motion.div>

              {/* Trained Staff & Emergency Prep */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-brand-orange/40 pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-orange" />
                  Trained Staff & Emergency Readiness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our caregivers are trained in first aid and child safety protocols. We conduct 
                  regular fire drills, maintain strict pickup authorization procedures, and have 
                  emergency contact protocols ready at all times.
                </p>
              </motion.div>

              {/* Meals - Small Accent Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-brand-yellow/5 border border-brand-yellow/20 rounded-lg p-5 ml-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-brand-yellow" />
                  Healthy Meals
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We prepare nutritious, age-appropriate meals and snacks fresh daily, following 
                  proper food safety standards.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Checklist - No Card */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Additional Safety Standards
            </h2>
            <p className="text-muted-foreground mb-8">
              Here are some of the other ways we ensure your child's safety and comfort:
            </p>

            <ul className="space-y-3">
              {safetyChecklist.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 py-1"
                >
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Parent Promise - More Personal */}
      <section className="py-14 bg-gradient-to-b from-brand-yellow/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Heart className="h-12 w-12 text-brand-red/70 mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Promise to You
            </h2>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              We promise to treat your child as our own, providing the same love, care, and 
              attention we would give to our own family. Your trust means everything to us, 
              and we work every day to earn it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We maintain open communication with regular updates on your child's day, 
              immediate notification of any concerns, and an open-door policy for parent 
              visits. You're always welcome to stop by and see how your child is doing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Come See for Yourself
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              We know that reading about safety is one thing—seeing it in person is another. 
              We invite you to tour our facility and meet our caregivers. See how we keep 
              children safe and happy every day.
            </p>
            <div className="pt-2">
              <Button variant="playful" size="lg" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
