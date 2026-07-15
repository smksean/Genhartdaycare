import { motion } from "framer-motion";
import { CheckCircle, Eye, Heart, Lock, Shield, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import safetyImage from "@/assets/homepage-learning-care.png";

const safetyChecklist = [
  "Secured, serene environment for daily care and learning",
  "Well trained caregivers who supervise children closely",
  "Security personnel and careful attention to access",
  "Clean, hygienic rooms, toys, and play materials",
  "Child-friendly spaces arranged for safe movement and exploration",
  "Emergency contact procedures and parent communication",
  "Strict pickup authorization routines",
  "Clean drinking water and healthy hygiene practices",
];

export default function Safety() {
  return (
    <Layout>
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
              A Safe, Serene Place for Little Hearts
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Genhart Daycare Centre, safety is part of everyday care. We create an environment
              where children feel physically secure, emotionally supported, and free to learn with
              confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-brand-green/20 shadow-card">
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
              <p className="text-sm font-extrabold uppercase tracking-wide text-brand-red">
                Safety policies
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Care That Gives Parents Peace of Mind
              </h2>
              <p className="text-muted-foreground">
                We understand that choosing a daycare is a serious decision. Parents need to know
                that their children are being cared for by responsible adults in a clean,
                child-friendly, and supervised space.
              </p>
              <p className="text-muted-foreground">
                Our care standards include well trained caregivers, a hygienic environment,
                security support, and routines that help every child feel calm, loved, and safe.
              </p>
              <p className="text-muted-foreground">
                We also value open communication with families, because safety is strongest when
                parents and caregivers work together.
              </p>
              <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-5">
                <p className="font-extrabold text-foreground mb-1">Official safety policy</p>
                <p className="text-muted-foreground">
                  Genhart Daycare Centre maintains a secured, serene environment for children,
                  caregivers, parents, and visitors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              How We Keep Children Safe Every Day
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Our safety policies support both physical protection and emotional comfort.
            </p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-4 border-brand-blue/40 pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-brand-blue" />
                  Secured Environment & Access Awareness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We keep the centre calm, supervised, and access-aware, with security personnel
                  and clear pickup routines that protect children throughout the day.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-l-4 border-brand-green/40 pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-green" />
                  Cleanliness & Hygiene
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain clean rooms, sanitized toys, organized materials, and healthy hygiene
                  practices so children can play, rest, and learn in a fresh environment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-brand-orange/40 pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-orange" />
                  Well Trained Caregivers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our caregivers provide close supervision, emotional warmth, and steady routines.
                  Children are guided with patience, respect, and attention to their age and needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-l-4 border-brand-red/40 pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-brand-red" />
                  Attentive Supervision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We watch over children during play, meals, rest, and transitions so they are not
                  left unsupported as they explore and learn.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              Safety Standards Parents Can See
            </h2>
            <p className="text-muted-foreground mb-8">
              These standards guide the everyday running of the centre:
            </p>

            <ul className="space-y-3">
              {safetyChecklist.map((item, index) => (
                <motion.li
                  key={item}
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

      <section className="py-14 bg-gradient-to-b from-brand-yellow/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Heart className="h-12 w-12 text-brand-red/70 mb-5" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our Promise to You
            </h2>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              We promise to care for your child with warmth, respect, and patience. Your trust
              matters deeply to us, and our team works every day to create a home away from home.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Parents are welcome to ask questions, visit, and stay involved. Strong partnership
              with families helps every child feel safe, loved, and ready to learn.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-red/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Come See for Yourself
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              We invite you to visit our centre, meet our caregivers, and see how we keep children
              safe, comfortable, and happy every day.
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
