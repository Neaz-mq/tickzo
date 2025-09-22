import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Fact = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Section - Image */}
        <motion.div className="flex-1" variants={fadeUp}>
          <motion.img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758534167/fact-image_ti86oi.png"
            alt="Smartwatch Collection"
            className="w-full h-auto object-cover "
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </motion.div>

        {/* Right Section - Text and Icons */}
        <motion.div className="flex-1" variants={fadeUp}>
          <motion.span
            className="text-sm font-semibold tracking-wide text-gray-700 uppercase mb-6 inline-block"
            variants={fadeUp}
          >
            Our Fact
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6"
            variants={fadeUp}
          >
            Smartwatch facts that <br /> inspire confidence!
          </motion.h1>
          <motion.p
            className="text-gray-600 text-base leading-relaxed mb-8"
            variants={fadeUp}
          >
            At the heart of our smartwatches lies a commitment to innovation, quality, and
            reliability. Designed with cutting-edge technology, our watches seamlessly
            integrate advanced health tracking, fitness monitoring, and smart connectivity.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12"
            variants={container}
          >
            {[
              "46 mm or 42 mm aluminum or titanium case",
              "ECG app Blood Oxygen app",
              "Wide-angle Always-On Retina display Up to 2,000 nits",
              "Up to 18 hours Up to 36 hours in Low Power",
              "S10 SiP Double tap gesture",
              "1.8' AMOLED Display with Always-On Mode",
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                variants={fadeUp}
              >
                <div className="w-6 h-6 flex-shrink-0 text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.556c0 .358.159.696.44.922l7.632 6.134a.75.75 0 00.92 0l7.632-6.134a.75.75 0 00.44-.922V3a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003.75 3z"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Fact;
