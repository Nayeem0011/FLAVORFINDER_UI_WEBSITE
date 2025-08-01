import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.send(
      "service_oavyefo",          // Replace with your Service ID
      "template_rpfjves",        // Replace with your Template ID
      form,
      "CibVKuhKg-4-sQoyP"      // Replace with your EmailJS public key
    )
    .then(() => {
      toast.success("Message sent successfully!")
      setForm({ name: "", email: "", message: "" })
    })
    .catch(() => toast.error("Something went wrong"))
  }

  return (
    <div className="bg-orange-50 min-h-screen px-4 py-12">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-orange-500 mb-8">
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
        We value your feedback and inquiries. Feel free to reach out to us via the following channels:
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
            <FaEnvelope /> Email
          </h3>

          <p className="text-gray-600">sknayeemislam384@gmail.com</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
            <FaPhone /> Phone
          </h3>

          <p className="text-gray-600">+880 1852 705 818</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
            <FaMapMarkerAlt /> Address
          </h3>

          <p className="text-gray-600">Dhaka, Bangladesh</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto border-t-4 border-orange-500">

        <h3 className="text-2xl font-semibold text-orange-500 mb-4 flex items-center gap-2">
          <FaPaperPlane /> Send us a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
          </textarea>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all">
            Send Message
          </button>
        </form>
      </motion.div>

      <p className="mt-8 text-center text-gray-500 text-sm">❤️ Designed & Developed by Nayeem</p>
    </div>
  );
};

export default Contact;
