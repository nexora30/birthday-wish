import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Cake from "../assets/cake.gif";

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      {/* Envelope (closed card) */}
      <motion.div
        className="relative w-64 h-40 cursor-pointer"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Envelope body */}
        <div className="absolute inset-0 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"></div>

        {/* Envelope flap */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white border-b border-gray-300 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"></div>

        {/* Seal */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-500 rounded-full shadow-md -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold">
          ♥
        </div>

        {/* Optional text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-lg font-semibold text-gray-700 mt-20">Click to Open</h2>
        </div>
      </motion.div>

      {/* Fullscreen Letter Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Blurred background */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            ></div>

            {/* Letter content */}
            <motion.div
              className="relative bg-white max-w-2xl w-full mx-4 rounded-2xl shadow-2xl p-8 z-10 max-h-[90vh] overflow-y-auto scrollbar-hide"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold text-purple-600 mb-4 text-center">
                To Dear Darling Dearest,
              </h2>

              <div className="flex justify-center mb-4">
                <img src={Cake} alt="Cake animation" className="w-50 h-auto" />
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Code ke beech mei prem patr type kar rahi hu, now this is peak romance :)
                Simple text mei wish krne se mera mann nahi mana so even though mai ye website wala idea reveal kar chuki thi please act surprised 😋
                <br />
                Ek to mujhe smjh nhi aata kya likhne se start kru, to sabse pehle happy wala birthday ji. Itne letters likhne ke baad mujhe lgta hai mai apne saare secrets reveal kar hi chuki hu.
                I don't say this much lekin నేను నిన్ను చాలా ప్రేమిస్తున్నాను (it says I lobhhh you bhery much). Ye likhte hue bhi mujhe yaad aata hai how you said it the first time or mai itna shock mei thi ki kuch react hi nhi kr pai :) Ye to teri purani aadat hai waise speechless krne ki.
                Which I find very attractive by the way along with a lot of other things. Jaise ki teri sleepy awaaz, teri flirting skills and teri unn cheezon mei knowledge jinme mera dabba gol hai like finance (very sexy). And I even love your sabzi nahi khaati wale lectures. In short sab kuch tere baare mei. Bada haath mara hai maine tujh jaisa fasake hehe :)
                <br/>
                Mujhe bada maza aaya website bnake, I hope jab mai budhiya hojau tab bhi mai coding dadi banke tere liye aisi cheezein banau 😛 
                <br/>
                I'll always be there humesha kuch bhi ho. 
                <br/>
                From- she who must not be named aka Darling's Darling 😍
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
