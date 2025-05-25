import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Have a question, proposal, or just want to say hello? Feel free to
          reach out!
        </p>
        <form
          action="https://formsubmit.co/faisalhs2002@gmail.com"
          method="post"
          className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Number
            </label>
            <input
              type="number"
              name="number"
              placeholder="Phone number"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
