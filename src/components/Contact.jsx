import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center">

        <form className="bg-white/10 p-10 rounded-2xl backdrop-blur-lg w-[400px]">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Contact Us
          </h1>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-lg bg-black/40 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg bg-black/40 outline-none"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 mb-4 rounded-lg bg-black/40 outline-none h-32"
          ></textarea>

          <button className="w-full bg-cyan-500 p-3 rounded-lg text-lg">
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;