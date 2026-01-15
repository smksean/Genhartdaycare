import { motion } from "framer-motion";
import { Heart, Users, Award, BookOpen } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import aboutImage from "@/assets/about-reading.jpg";
import heroImage from "@/assets/hero-daycare.jpg";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-14 bg-gradient-to-b from-brand-blue/8 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              About Us – Genhart Daycare Centre
            </h1>
            <p className="text-xl text-brand-red font-medium leading-relaxed mb-4">
              A Home Away From Home for Little Hearts
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Genhart Daycare Centre, we believe that every child deserves a safe, warm, and 
              loving environment where they can learn, play, and grow with confidence. We provide 
              a nurturing space designed to reflect our core promise—a home away from home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create a safe, caring, and family-like environment where every child feels at 
                home while learning through play, exploration, and discovery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide a nurturing home away from home where toddlers and preschoolers can 
                grow with confidence, curiosity, and joy through a blend of Montessori principles 
                and play-based learning, while partnering with parents to support each child's 
                unique development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Genhart Daycare Centre is a child-focused, family-friendly early learning centre 
                dedicated to supporting children aged 9 months to 3 years. We combine compassionate 
                caregiving with age-appropriate learning to ensure that children feel valued, 
                encouraged, and understood.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of trained caregivers, nurses, and early childhood practitioners work 
                together to maintain a safe, stimulating, and hygienic environment that promotes 
                emotional, social, cognitive, and physical development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-secondary">
                <img
                  src={aboutImage}
                  alt="Children learning at Genhart Daycare Centre"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              What We Offer
            </h2>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <Heart className="h-5 w-5 text-brand-red/70 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Safe & Secured Environment</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Clean, child-friendly spaces with strict safety protocols.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-3"
              >
                <Users className="h-5 w-5 text-brand-blue/70 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Qualified Staff</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Professional caregivers and a health-focused support system.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-3"
              >
                <BookOpen className="h-5 w-5 text-brand-green/70 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Learning Through Play</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Activities that build creativity, communication, and curiosity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-3"
              >
                <Award className="h-5 w-5 text-brand-yellow/70 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Health & Wellness Focus</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Regular sanitization, rest routines, and proper nutrition guidance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-3"
              >
                <Heart className="h-5 w-5 text-brand-orange/70 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Individualized Care</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We recognize that every child is unique and we tailor our support accordingly.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment & Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Commitment to Parents
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Genhart Daycare Centre, we understand the trust you place in us. That's why we 
                prioritize open communication, transparency, and a warm partnership with families. 
                We aim to give parents peace of mind, knowing their little ones are loved, 
                supported, and safe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Genhart Daycare Centre?
              </h2>
              <ul className="space-y-3">
                {[
                  "Family-like atmosphere",
                  "Strong child protection and safety policies",
                  "Engaging daily routines",
                  "Clean, organized, and stimulating environment",
                  "A team that genuinely loves children"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium text-brand-red mt-6">
                Truly a home away from home for little hearts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Image */}
      <section className="py-14 bg-gradient-to-b from-background to-brand-yellow/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-secondary">
                <img
                  src={heroImage}
                  alt="Our caring team at Genhart Daycare Centre"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
