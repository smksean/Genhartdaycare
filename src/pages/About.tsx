import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import aboutImage from "@/assets/homepage-learning-care.png";
import heroImage from "@/assets/program-toddler-storytime.png";

export default function About() {
  return (
    <Layout>
      <section className="relative py-14 bg-gradient-to-b from-brand-blue/8 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              About Genhart Daycare Centre
            </h1>
            <p className="text-xl text-brand-red font-medium leading-relaxed mb-4">
              A Home Away From Home for Little Hearts
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Genhart Daycare Centre, a nurturing environment designed to give every
              child the warmth, safety, and comfort of home. We provide consistent, high-quality
              care for toddlers and preschoolers while building trust with parents and families.
            </p>
          </motion.div>
        </div>
      </section>

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
                home while learning through play and discovery.
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
                grow with confidence, curiosity, and joy. Through a blend of Montessori principles
                and play-based learning, we support each child's unique development.
              </p>
            </motion.div>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                Genhart Daycare Centre is a child-focused, family-friendly early learning centre
                dedicated to supporting children aged 9 months to 5 years. We combine compassionate
                caregiving with age-appropriate learning to ensure that children feel valued,
                encouraged, and understood.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our well trained caregivers and early childhood support team work together to
                maintain a safe, stimulating, and hygienic environment that promotes emotional,
                social, cognitive, and physical development.
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
                  alt="Caregiver guiding children through play-based learning at Genhart Daycare Centre"
                  className="w-full h-auto object-cover"
                />
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Care Standards
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: Heart,
                  title: "Safe & Secured Environment",
                  text: "A secured, serene environment with child-friendly spaces and clear safety routines.",
                  color: "text-brand-red/70",
                },
                {
                  icon: Users,
                  title: "Well Trained Caregivers",
                  text: "Caring adults who understand routine, supervision, emotional support, and early learning.",
                  color: "text-brand-blue/70",
                },
                {
                  icon: BookOpen,
                  title: "Learning Through Play",
                  text: "Play-based and Montessori-inspired activities that build creativity, communication, and curiosity.",
                  color: "text-brand-green/70",
                },
                {
                  icon: Award,
                  title: "Clean & Hygienic Environment",
                  text: "Regular sanitization, clean rooms, organized materials, and healthy daily routines.",
                  color: "text-brand-yellow/70",
                },
                {
                  icon: Heart,
                  title: "Inclusive, Individual Care",
                  text: "We welcome children with warmth and respect, recognizing that every child develops differently.",
                  color: "text-brand-orange/70",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <item.icon className={`h-5 w-5 ${item.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
                At Genhart Daycare Centre, we understand the trust you place in us. We prioritize
                open communication, transparency, and a warm partnership with families so parents
                can feel confident that their children are loved, supported, and safe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <ul className="space-y-3">
                {[
                  "Safety - ensuring every child is secure physically and emotionally.",
                  "Care & warmth - nurturing every child with love and respect.",
                  "Learning through play - encouraging exploration, creativity, and discovery.",
                  "Inclusivity - welcoming children with respect for their background and ability.",
                  "Partnership with families - building strong parent-centre collaboration.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">-</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-background to-brand-yellow/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-secondary">
              <img
                src={heroImage}
                alt="Genhart Daycare caregiver reading with children in a warm classroom"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
