import { motion } from "framer-motion";
import { Baby, Heart, BookOpen, Palette, Music, Users, Sparkles } from "lucide-react";
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

export default function Program() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-14 bg-gradient-to-b from-brand-green/8 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Our Programs for Infants & Toddlers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We serve children from 9 months to 3 years, with programs designed for each 
              stage of development. Our approach blends Montessori-inspired learning with 
              plenty of play, exploration, and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infant Program */}
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
                <h2 className="text-3xl font-bold text-foreground">Infant Care</h2>
              </div>
              <p className="text-lg text-brand-red/90 font-medium">Ages 9 months - 1 year</p>
              <p className="text-muted-foreground leading-relaxed">
                Our infant program provides a warm, nurturing environment where your baby 
                receives personalized attention and care. We follow each baby's individual 
                schedule for feeding, sleeping, and play, while introducing gentle sensory 
                experiences that support early development.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-sm font-semibold text-foreground">What we provide:</p>
                <ul className="space-y-2">
                  {infantFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
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
              className="order-1 lg:order-2 space-y-5"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-brand-green/70" />
                <h2 className="text-3xl font-bold text-foreground">Toddler & Preschool</h2>
              </div>
              <p className="text-lg text-brand-green/90 font-medium">Ages 1-3 years</p>
              <p className="text-muted-foreground leading-relaxed">
                This is where the real fun begins! Toddlers and preschoolers are naturally 
                curious, and our program is designed to channel that energy into learning. 
                Using Montessori-inspired activities and lots of play, we help children 
                develop independence, social skills, and a love for discovery.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-sm font-semibold text-foreground">What we focus on:</p>
                <ul className="space-y-2">
                  {toddlerFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
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

      {/* What Children Do Each Day */}
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
              Here's what a typical day includes:
            </p>

            <div className="space-y-8">
              {/* Main activities grouped */}
              <div className="border-l-4 border-brand-blue/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-brand-blue/70" />
                  Storytime & Early Literacy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We read books together every day—stories, rhymes, and songs that help children 
                  develop language skills and a love for reading. For older toddlers, we introduce 
                  letter recognition and simple words through play.
                </p>
              </div>

              <div className="border-l-4 border-brand-red/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Palette className="h-5 w-5 text-brand-red/70" />
                  Creative Arts & Crafts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Children paint, draw, build, and create. These activities aren't just fun—they 
                  develop fine motor skills, hand-eye coordination, and self-expression. We display 
                  their artwork and celebrate their creativity.
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
                    Group activities teach sharing, taking turns, cooperation, and building 
                    friendships—skills that last a lifetime.
                  </p>
                </div>
              </div>

              <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-5 ml-6">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-orange/70" />
                  Sensory Exploration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Children explore different textures, sounds, and materials through hands-on play. 
                  This sensory-rich environment supports brain development and curiosity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Schedule */}
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
              Here's a general outline of how the day flows. We adjust based on each child's 
              needs and maintain flexibility for weather, special activities, or group interests.
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
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-2 border-b border-border/50 last:border-0"
                >
                  <span className="text-brand-blue/90 font-medium text-sm w-20 flex-shrink-0">{item.time}</span>
                  <span className="text-muted-foreground text-sm">{item.activity}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Questions About Our Program?
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              We'd love to show you around and answer any questions. Contact us to schedule 
              a visit, or just call to chat about what would work best for your family.
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
