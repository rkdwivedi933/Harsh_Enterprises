import { motion } from "framer-motion";
import { Eye, Target, Leaf, Sprout } from "lucide-react";

export default function VisionMission() {
  const cards = [
    {
      id: "vision",
      title: "Our Vision",
      icon: Eye,
      accent: Leaf,
      text: `To shape the future of agriculture through sustainable innovation
      and advanced manufacturing. We envision empowered farmers, healthier
      crops, and eco-friendly practices that balance productivity with
      responsibility.`,
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
      delay: 0.2,
    },
    {
      id: "mission",
      title: "Our Mission",
      icon: Target,
      accent: Sprout,
      text: `To manufacture premium Seedling Trays, HIPS Rolls, and Cocopeat
      products with uncompromising quality. We are committed to innovation,
      reliability, and long-term partnerships that help agricultural
      communities grow and succeed.`,
      gradient: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-b bg-white overflow-hidden">
      {/* soft background */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-xl text-gray-900 mb-4">
            Vision & <span className="text-green-600">Mission</span>
          </h2>
          <p className="paragraph text-gray-600">
            The principles that guide our journey in agriculture manufacturing
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card) => {
            const Icon = card.icon;
            const Accent = card.accent;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden group"
              >
                {/* top bar */}
                <div
                  className={`h-2 bg-linear-to-r ${card.gradient}`}
                />

                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`${card.iconBg} p-4 rounded-2xl`}
                    >
                      <Icon
                        className={`w-8 h-8 ${card.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>

                    <Accent className="ml-auto w-6 h-6 text-gray-300 group-hover:text-green-600 transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {card.text}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: card.delay + 0.3 }}
                    className={`mt-8 h-1 rounded-full bg-linear-to-r ${card.gradient}`}
                  />
                </div>

                {/* subtle hover glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 rounded-full">
            <Leaf className="w-5 h-5 text-green-700" />
            <span className="text-sm font-medium text-green-800">
              Growing responsibly. Manufacturing with purpose.
            </span>
            <Sprout className="w-5 h-5 text-green-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
