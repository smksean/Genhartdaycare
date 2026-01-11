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
      <section className="relative py-20 bg-gradient-to-b from-brand-red/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-4">
              <Shield className="inline h-4 w-4 mr-1" />
              Safety & Care
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Child's <span className="text-brand-red">Safety</span> is Our Priority
            </h1>
            <p className="text-lg text-muted-foreground">
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

      {/* Safety Features Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-brand-blue">Safety Measures</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive safety protocols to protect your child every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Checklist */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Safety <span className="text-brand-green">Checklist</span>
            </h2>

            <div className="bg-card rounded-3xl shadow-soft p-8">
              <ul className="space-y-4">
                {safetyChecklist.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parent Promise */}
      <section className="py-20 bg-gradient-to-b from-brand-yellow/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="h-16 w-16 text-brand-red mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Promise to Parents
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We promise to treat your child as our own, providing the same love, care, and 
              attention we would give to our own family. Your trust means everything to us, 
              and we work every day to earn it.
            </p>
            <p className="text-muted-foreground">
              We maintain open communication with regular updates on your child's day, 
              immediate notification of any concerns, and an open-door policy for parent 
              visits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <Shield className="h-16 w-16 text-primary-foreground mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Visit Us Today
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              We invite you to tour our facility and see our safety measures firsthand.
            </p>
            <Button variant="playful" size="lg" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
