import { motion } from "framer-motion";

const balloonColors = [
  { body: "bg-red-500", knot: "bg-red-600" },
  { body: "bg-yellow-400", knot: "bg-yellow-500" },
  { body: "bg-purple-500", knot: "bg-purple-600" },
];

export default function Balloons() {
  return (
    <div className="relative flex justify-center gap-6">
      {balloonColors.map((color, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ y: 200 + 2 * 20 }} // Removed opacity
          animate={{
            y: [0, -20, 0, -15, 0], // floating up and down
            x: [0, 5, -5, 10, -10, 0], // gentle left-right drift
          }}
          transition={{
            duration: 6 + index, // slightly different speeds
            repeat: Infinity,
            repeatType: "mirror", // bounce back and forth
            ease: "easeInOut",
            delay: index * 0.3, // stagger start
          }}
        >
          {/* Balloon shape */}
          <div className={`w-16 h-20 ${color.body} rounded-full shadow-lg relative`}>
            {/* Shine effect */}
            <div className="absolute top-2 left-2 w-4 h-6 bg-white rounded-full opacity-40"></div>
          </div>

          {/* Balloon knot */}
          <div className={`w-3 h-3 ${color.knot} rotate-45 -mt-1`}></div>

          {/* String */}
          <div className={`w-px ${index % 2 === 0 ? "h-24" : "h-24"} bg-gray-700`}></div>
        </motion.div>
      ))}
    </div>
  );
}
