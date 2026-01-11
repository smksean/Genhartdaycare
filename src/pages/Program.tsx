import { motion } from "framer-motion";
import { Baby, Heart, BookOpen, Palette, Music, Users, Clock, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import infantImage from "@/assets/infant-care.jpg";
import toddlerImage from "@/assets/toddler-play.jpg";

const infantFeatures = [
  "Personalized feeding and sleep schedules",
  "Safe tummy time and sensory play",
  "Gentle songs, stories, and cuddles",
  "Daily updates for parents",
  "Clean, sanitized environment",
];

const toddlerFeatures = [
  "Montessori-inspired learning activities",
  "Art, music, and movement",
  "Early literacy and numeracy",
  "Social skill development",
  "Outdoor play and exploration",
];

const activities = [
  {
    icon: BookOpen,
    title: "Storytime",
    description: "Daily reading sessions to foster a love for books and language development.",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description: "Painting, drawing, and crafts to encourage self-expression and fine motor skills.",
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
  },
  {
    icon: Music,
    title: "Music & Movement",
    description: "Songs, dance, and rhythm activities for physical and cognitive development.",
    color: "text-brand-yellow",
    bgColor: "bg-brand-yellow/10",
  },
  {
    icon: Users,
    title: "Social Play",
    description: "Group activities that build sharing, cooperation, and friendship skills.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
  {
    icon: Sparkles,
    title: "Sensory Exploration",
    description: "Hands-on activities with different textures, sounds, and materials.",
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
  {
    icon: Clock,
    title: "Routine & Structure",
    description: "Consistent daily schedules that provide security and predictability.",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
];

export default function Program() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-green/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold mb-4">
              Our Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nurturing <span className="text-brand-green">Growth</span> Through Play
            </h1>
            <p className="text-lg text-muted-foreground">
              Our programs blend Montessori principles with play-based learning to support 
              each child's unique development journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infant Program */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center">
                  <Baby className="h-6 w-6 text-brand-red" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Infant Care</h2>
              </div>
              <p className="text-lg text-brand-red font-medium">Ages 0-12 months</p>
              <p className="text-muted-foreground">
                Our infant program provides a warm, nurturing environment where your baby 
                receives personalized attention and care. We follow each baby's individual 
                schedule while introducing gentle sensory experiences and early learning 
                opportunities.
              </p>
              <ul className="space-y-3">
                {infantFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-brand-red flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src={infantImage}
                  alt="Infant care at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toddler Program */}
      <section className="py-20 bg-secondary/50">
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
                  src={toddlerImage}
                  alt="Toddler program at Genhart Daycare"
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
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-brand-green" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Toddler Program</h2>
              </div>
              <p className="text-lg text-brand-green font-medium">Ages 1-3 years</p>
              <p className="text-muted-foreground">
                Our toddler program is designed to spark curiosity and encourage 
                independence. Using Montessori-inspired activities and play-based learning, 
                we help toddlers develop essential skills while having fun.
              </p>
              <ul className="space-y-3">
                {toddlerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-brand-green flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Daily <span className="text-brand-orange">Activities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A variety of enriching activities designed to stimulate learning and development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className={`w-14 h-14 ${activity.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <activity.icon className={`h-7 w-7 ${activity.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Schedule */}
      <section className="py-20 bg-gradient-to-b from-brand-yellow/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Sample <span className="text-brand-blue">Daily Schedule</span>
            </h2>

            <div className="bg-card rounded-3xl shadow-soft p-8">
              <div className="space-y-4">
                {[
                  { time: "7:00 AM", activity: "Arrival & Free Play" },
                  { time: "8:30 AM", activity: "Morning Circle & Songs" },
                  { time: "9:00 AM", activity: "Snack Time" },
                  { time: "9:30 AM", activity: "Learning Activities" },
                  { time: "10:30 AM", activity: "Outdoor Play" },
                  { time: "11:30 AM", activity: "Lunch" },
                  { time: "12:00 PM", activity: "Nap/Rest Time" },
                  { time: "2:30 PM", activity: "Snack & Storytime" },
                  { time: "3:00 PM", activity: "Arts & Crafts" },
                  { time: "4:00 PM", activity: "Music & Movement" },
                  { time: "5:00 PM", activity: "Free Play & Pick-up" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-3 border-b border-border last:border-0"
                  >
                    <span className="text-brand-blue font-semibold w-24">{item.time}</span>
                    <span className="text-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Enroll Your Little One?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Contact us today to learn more about our programs and schedule a visit.
            </p>
            <Button variant="playful" size="lg" asChild>
              <Link to="/contact">Contact Us to Enroll</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
