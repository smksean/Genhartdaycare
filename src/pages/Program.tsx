import { motion } from "framer-motion";
import { Baby, BookOpen, Heart, Music, Palette, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import toddlerImage from "@/assets/program-toddler-storytime.png";
import preschoolImage from "@/assets/program-preschool-blocks.png";

const toddlerFeatures = [
  "Sensory exploration and hands-on discovery",
  "Routine building for feeding, rest, play, and transitions",
  "Language development through songs, stories, and conversation",
  "Social-emotional support in a warm, family-like setting",
  "Safe movement, play, and early independence",
];

const preschoolFeatures = [
  "Montessori-inspired learning activities",
  "Early literacy and numeracy foundations",
  "Practical life activities that build confidence",
  "Art, music, movement, and creative expression",
  "Play-based development with guided group activities",
];

export default function Program() {
  return (
    <Layout>
      <section className="relative py-14 bg-gradient-to-b from-brand-green/8 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Our Programmes for Toddlers & Preschoolers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We serve children from 9 months to 5 years with programmes designed for each stage
              of development. Our approach blends Montessori principles with play-based learning,
              helping children grow with confidence, curiosity, and joy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-2">
                <Baby className="h-6 w-6 text-brand-red/70" />
                <h2 className="text-3xl font-bold text-foreground">Toddler Class</h2>
              </div>
              <p className="text-lg text-brand-red/90 font-medium">Ages 9 months - 3 years</p>
              <p className="text-muted-foreground leading-relaxed">
                Our toddler class gives younger children the gentle care, routine, and emotional
                security they need. We focus on sensory exploration, early language, movement,
                social confidence, and the comfort of a familiar daily rhythm.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-sm font-semibold text-foreground">What we focus on:</p>
                <ul className="space-y-2">
                  {toddlerFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Heart className="h-4 w-4 text-brand-red/70 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-secondary">
                <img
                  src={toddlerImage}
                  alt="Caregiver reading with toddlers at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
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
                  src={preschoolImage}
                  alt="Preschool children building with blocks at Genhart Daycare"
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
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-brand-green/70" />
                <h2 className="text-3xl font-bold text-foreground">Preschool Class</h2>
              </div>
              <p className="text-lg text-brand-green/90 font-medium">Ages 3 - 5 years</p>
              <p className="text-muted-foreground leading-relaxed">
                Our preschool class prepares children for the next stage of learning through
                Montessori-inspired activities, play-based development, early literacy, numeracy,
                practical life skills, and joyful social learning.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-sm font-semibold text-foreground">What we focus on:</p>
                <ul className="space-y-2">
                  {preschoolFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Heart className="h-4 w-4 text-brand-green/70 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              What Children Do Each Day
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Every day is filled with activities that help children learn, grow, and have fun.
              Our routines are structured enough to feel secure and flexible enough to meet each
              child's needs.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-brand-blue/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-brand-blue/70" />
                  Storytime & Early Literacy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stories, rhymes, songs, and conversation help children build language skills and
                  a love for reading. Preschoolers also meet letter sounds, simple words, and early
                  writing readiness through play.
                </p>
              </div>

              <div className="border-l-4 border-brand-red/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Palette className="h-5 w-5 text-brand-red/70" />
                  Creative Arts & Crafts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Painting, drawing, building, and making things help children develop fine motor
                  skills, hand-eye coordination, creativity, and confidence in self-expression.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pl-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Music className="h-5 w-5 text-brand-yellow/70" />
                    Music & Movement
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Singing, dancing, and rhythm activities help children develop coordination,
                    confidence, and joy in movement.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Users className="h-5 w-5 text-brand-green/70" />
                    Social Play & Learning
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Group activities teach sharing, taking turns, cooperation, and friendship in a
                    kind, supervised environment.
                  </p>
                </div>
              </div>

              <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-5 ml-6">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-orange/70" />
                  Sensory Exploration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Children explore textures, sounds, colours, and materials through hands-on play,
                  supporting curiosity, brain development, and early problem-solving.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-brand-yellow/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              A Typical Day
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our regular hours are 7:00 AM to 5:00 PM. Extended care may be available by
              arrangement.
            </p>

            <div className="space-y-3">
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
              ].map((item) => (
                <div
                  key={`${item.time}-${item.activity}`}
                  className="flex items-start gap-4 py-2 border-b border-border/50 last:border-0"
                >
                  <span className="text-brand-blue/90 font-medium text-sm w-20 flex-shrink-0">
                    {item.time}
                  </span>
                  <span className="text-muted-foreground text-sm">{item.activity}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-green/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Questions About Our Programmes?
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              We would love to show you around and answer any questions about the best class for
              your child.
            </p>
            <div className="pt-2">
              <Button variant="playful" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
