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
              Where <span className="text-brand-red">Little Hearts</span> Grow
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a family-run daycare in Benin City, providing loving care for infants and 
              toddlers since 2018. Every child who comes through our doors is treated like our own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
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
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Genhart Daycare started in 2018 when we saw a need in our community for 
                genuine, family-centered childcare. We're not a chain or a franchise—we're 
                a local daycare run by people who live here and care deeply about Benin City 
                families.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that leaving your child in someone else's care is one of the 
                biggest decisions you'll make. That's why we've built our daycare to feel 
                like home—with warm, experienced caregivers who treat every child as their own.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our facility is located in a safe, residential area with indoor and outdoor 
                play spaces designed for little ones. We serve working parents who need 
                reliable, loving care during the day, from morning drop-off to evening pickup.
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
                  alt="Reading time at Genhart Daycare"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              What We Believe
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-brand-blue/30 pl-6 py-2">
                <p className="text-muted-foreground leading-relaxed">
                  We believe every child deserves to feel safe, loved, and confident while their 
                  parents are at work. Our goal is simple: to create a space where children can 
                  play, learn, and grow naturally—the way children are meant to.
                </p>
              </div>

              <div className="border-l-4 border-brand-red/30 pl-6 py-2">
                <p className="text-muted-foreground leading-relaxed">
                  We use Montessori-inspired methods because we've seen how well they work. 
                  Children learn best through hands-on play, exploration, and following their 
                  natural curiosity. We don't rush development—we support each child at their 
                  own pace.
                </p>
              </div>

              <div className="border-l-4 border-brand-green/30 pl-6 py-2">
                <p className="text-muted-foreground leading-relaxed">
                  Most importantly, we believe in partnering with parents. You know your child 
                  best, and we work with you—sharing updates, listening to concerns, and making 
                  sure your child's needs are met every single day.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Guides Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              What Guides Us Daily
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Here's what we focus on every day at Genhart Daycare:
            </p>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <Heart className="h-5 w-5 text-brand-red/70 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Love & Care</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We treat every child with unconditional love and warmth. Your child will 
                    never feel like "just another kid" here—they're part of our family.
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
                  <h3 className="text-lg font-bold text-foreground mb-1">Partnership with Parents</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We work closely with you to support your child's growth. Daily updates, 
                    open communication, and your input are always welcome.
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
                  <h3 className="text-lg font-bold text-foreground mb-1">Whole-Child Development</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We nurture not just learning, but emotional, social, and physical growth too. 
                    Children need to develop in all areas, not just academics.
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
                  <h3 className="text-lg font-bold text-foreground mb-1">Quality Care</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We maintain high standards in everything—from staff training to facility 
                    cleanliness to the meals we serve. Your trust matters to us.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-14 bg-gradient-to-b from-background to-brand-yellow/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Caring Team
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our caregivers are trained, experienced, and passionate about working with young 
              children. More importantly, they're patient, warm, and genuinely love what they do. 
              All staff are carefully screened and trained in first aid, child safety, and early 
              childhood development.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-secondary">
                <img
                  src={heroImage}
                  alt="Our caring team at Genhart Daycare"
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
