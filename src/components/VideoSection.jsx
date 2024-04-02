import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <div className="py-20">
      <h1 className="font-bold text-5xl mb-10 text-orange-500 text-center">
        History Of Ram Mandir
      </h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto p-4 flex flex-col lg:flex-row mb-12"
      >
        {/* Image */}
        <div className="lg:w-1/2">
          <div className="m-auto p-auto">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/0WG2Y-pYPI8?si=vclb0BkbGLHXi309"
              title="YouTube video player"
              frameborder="40% "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 lg:pl-6"
        >
          <p className="text-justify text-base md:text-xl px-3 mt-1">
            The Ram Mandir in Ayodhya, India, is a cultural milestone and
            architectural marvel, honoring Lord Rama at his birthplace. Stemming
            from a historic dispute resolved by the Supreme Court in 2019, the
            temple symbolizes unity, with devotees contributing to its
            construction. The project, a national endeavor, sparked development
            in Ayodhya and gained global attention. The ceremonial
            groundbreaking in 2020, attended by dignitaries and millions, marked
            a significant milestone. The temple, emphasizing religious harmony,
            adheres to traditional practices and Vedic rituals. Expected to
            boost spiritual tourism, it signifies a symbolic victory, adding to
            India's cultural heritage. The formal inauguration solidifies its
            place as a historic and sacred landmark. The Ram Mandir stands not
            just as a temple but as a testament to India's ability to resolve
            cultural and religious disputes.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoSection;
