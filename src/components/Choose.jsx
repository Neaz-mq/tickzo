import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Choose = () => {
  return (
    <div className="bg-gray-100 py-24 antialiased text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-2">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold tracking-wide text-gray-700 uppercase mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Where Cutting-Edge
            <br />
            Technology Meets Everyday
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col items-center lg:items-end text-center lg:text-right mb-12 lg:mb-0 space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🔔",
                title: "Real-Time Smart Notifications",
                desc: "Stay effortlessly connected—receive instant alerts for calls, messages, emails, and app updates directly.",
              },
              {
                icon: "🔋",
                title: "Long-Lasting Battery Life",
                desc: "Go further without constant charging—enjoy extended battery life with efficient power modes.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="max-w-xs"
              >
                <motion.div
                  className="flex justify-center lg:justify-end mb-4"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                >
                  <span className="text-gray-600 text-3xl">{item.icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center mb-12 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1758454928/why-choose-image_ape08i.png"
              alt="Smartwatch"
              className="w-full h-auto rounded-3xl"
              animate={{
                y: [0, -15, 0], // floating effect
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "⌚",
                title: "Stylish & Functional Design",
                desc: "Crafted for comfort and built to impress—our smartwatches blend fashion-forward aesthetics with performance.",
              },
              {
                icon: "🏃",
                title: "Fitness & Activity Tracking",
                desc: "Track your steps, calories, workouts, and more—helping you stay active and motivated.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="max-w-xs"
              >
                <motion.div
                  className="flex justify-center lg:justify-start mb-4"
                  whileHover={{ rotate: -10, scale: 1.2 }}
                >
                  <span className="text-gray-600 text-3xl">{item.icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
