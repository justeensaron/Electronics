import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center px-10">

        <h1 className="text-6xl font-bold mb-8">
          About Us
        </h1>

        <p className="text-gray-300 text-xl max-w-3xl text-center">
          We provide premium electronic products with modern
          technology and best customer experience.
        </p>

      </div>
    </div>
  );
}

export default About;