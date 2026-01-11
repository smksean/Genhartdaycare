import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Award, BookOpen } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import aboutImage from "@/assets/about-reading.jpg";
import heroImage from "@/assets/hero-daycare.jpg";

const values = [
  {
    icon: Heart,
    title: "Love & Care",
    description: "Every child is treated with unconditional love and warmth.",
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
  },
  {
    icon: Users,
    title: "Family Partnership",
    description: "We work closely with parents to support each child's growth.",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in childcare and education.",
    color: "text-brand-yellow",
    bgColor: "bg-brand-yellow/10",
  },
  {
    icon: BookOpen,
    title: "Holistic Development",
    description: "We nurture the whole child—mind, body, and spirit.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-blue/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where <span className="text-brand-red">Little Hearts</span> Grow
            </h1>
            <p className="text-lg text-muted-foreground">
              At Genhart Daycare, we believe that every child deserves a safe, loving, and 
              nurturing environment—a true home away from home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="text-brand-green">Story</span>
              </h2>
              <p className="text-muted-foreground">
                Genhart Daycare was founded with a simple yet powerful vision: to create a 
                space where children can thrive in a loving, family-like atmosphere. We 
                understand that leaving your child in someone else's care is one of the 
                biggest decisions a parent can make.
              </p>
              <p className="text-muted-foreground">
                That's why we've designed our daycare to be more than just a childcare 
                facility—we're an extension of your family. Our experienced caregivers 
                treat every child as their own, providing the warmth, attention, and 
                encouragement that helps little ones flourish.
              </p>
              <p className="text-muted-foreground">
                Located in the heart of Benin City, Nigeria, we serve families in our 
                community who are looking for quality, trustworthy care for their infants 
                and toddlers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src={aboutImage}
                  alt="Reading time at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl shadow-soft"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                At Genhart Daycare, our vision is to create a safe, caring, and family-like 
                environment where every child feels at home while learning through play and 
                discovery. We envision a community where children are confident, curious, 
                and joyful learners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-soft"
            >
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Our mission is to provide a nurturing home away from home where toddlers and 
                preschoolers can grow with confidence, curiosity, and joy. Through a blend of 
                Montessori principles and play-based learning, we support each child's unique 
                development while building strong connections with families and our community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-brand-orange">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at Genhart Daycare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft text-center hover:shadow-card transition-shadow"
              >
                <div className={`w-14 h-14 ${value.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <value.icon className={`h-7 w-7 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20 bg-gradient-to-b from-background to-brand-yellow/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-brand-blue">Caring Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of caregivers and educators are passionate about nurturing 
              young minds and hearts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Our caring team at Genhart Daycare"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
