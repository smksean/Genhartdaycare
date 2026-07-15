import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/homepage-kiddies-paradise-hero.png";
import aboutImage from "@/assets/homepage-learning-care.png";

const trustDetails = [
  { icon: Baby, label: "9 months - 5 years", text: "Toddler and preschool care" },
  { icon: Clock, label: "7:00 AM - 5:00 PM", text: "Monday to Friday" },
  { icon: MapPin, label: "No. 7, Irumekha Street", text: "Benin City, Edo State" },
];

const careValues = [
  {
    icon: Heart,
    title: "Care & Warmth",
    text: "Children are welcomed with patience, affection, and respect so the centre feels familiar and calm.",
    color: "text-brand-red",
    border: "border-brand-red/30",
  },
  {
    icon: Shield,
    title: "Safety",
    text: "A secured, serene environment with trained caregivers, attentive supervision, and security support.",
    color: "text-brand-blue",
    border: "border-brand-blue/30",
  },
  {
    icon: BookOpen,
    title: "Learning Through Play",
    text: "Story time, sensory play, blocks, songs, movement, and Montessori-inspired activities shape the day.",
    color: "text-brand-green",
    border: "border-brand-green/30",
  },
  {
    icon: Users,
    title: "Partnership with Families",
    text: "Parents are kept close to the process through open communication, visits, calls, and WhatsApp.",
    color: "text-brand-orange",
    border: "border-brand-orange/30",
  },
];

const dailyMoments = [
  "Morning welcome and free play",
  "Story mats, songs, and language building",
  "Blocks, practical life, and guided discovery",
  "Rest routines, meals, hygiene, and gentle transitions",
];

const testimonials = [
  {
    name: "Mrs. Adaeze O.",
    text: "My daughter settled in quickly. The caregivers are patient, and she comes home happy every day.",
  },
  {
    name: "Mr. & Mrs. Ikenna",
    text: "We like the family feeling. They know our son, his routine, and the little things that help him feel safe.",
  },
  {
    name: "Mrs. Blessing E.",
    text: "Clean, caring, and very responsive on WhatsApp. It truly feels like a home away from home.",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-yellow/10 via-white to-background">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-bold text-brand-green">
                <Heart className="h-4 w-4" />
                A Home Away From Home for Little Hearts
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                  Warm, safe care for little hearts in Benin City.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Welcome to Genhart Daycare Centre, a nurturing environment designed to give every
                  child the warmth, safety, and comfort of home.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    <MessageCircle className="h-5 w-5" />
                    Chat About Enrollment
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/program">
                    See Programmes
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[1.75rem] border-4 border-white shadow-card">
                <img
                  src={heroImage}
                  alt="Genhart Daycare Centre Kiddies Paradise hero banner"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 grid gap-3 md:grid-cols-3"
          >
            {trustDetails.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-white/80 px-4 py-4 shadow-soft"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow/20">
                  <item.icon className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-extrabold uppercase tracking-wide text-brand-red mb-3">
                Why parents choose us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                Care that feels personal, steady, and close to home.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our daily care is guided by the centre's core values: safety, care and warmth,
                learning through play, inclusivity, and partnership with families.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {careValues.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-2xl border-l-4 ${item.border} bg-white p-6 shadow-soft`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <h3 className="text-xl font-extrabold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-[1.5rem] border-4 border-brand-yellow/25 shadow-card">
                <img
                  src={aboutImage}
                  alt="Caregiver guiding children through play-based learning at Genhart Daycare"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide text-brand-green mb-3">
                  A day at Genhart
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  Little routines that help children feel secure.
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Toddlers and preschoolers grow with confidence, curiosity, and joy through a blend
                of Montessori principles and play-based learning. The day is active, gentle, and
                predictable enough for young children to settle in.
              </p>
              <div className="space-y-3">
                {dailyMoments.map((moment) => (
                  <div key={moment} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-yellow"></span>
                    <span className="text-muted-foreground">{moment}</span>
                  </div>
                ))}
              </div>
              <div className="pt-1">
                <Button variant="default" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-brand-yellow/5 to-brand-orange/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="max-w-3xl mb-8">
              <p className="text-sm font-extrabold uppercase tracking-wide text-brand-orange mb-3">
                Parent voices
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                What families notice first.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Parents often talk about the warmth, clean environment, and calm communication.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-brand-yellow/20 bg-white p-5 shadow-soft"
                >
                  <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.text}"</p>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-green">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-5"
          >
            <p className="text-sm font-extrabold uppercase tracking-wide text-primary-foreground/80">
              Visit, call, or WhatsApp
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Ready to see if Genhart feels right for your child?
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Genhart Daycare Centre is committed to being A Home Away From Home for Little Hearts,
              ensuring every child feels safe, loved, and inspired to learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button variant="playful" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5" />
                  Book a Visit
                </Link>
              </Button>
              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white border-0" asChild>
                <a href="https://wa.me/2348034957056" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
