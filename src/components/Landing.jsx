import {
  FaTwitter,
  FaTwitch,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiBehance } from "react-icons/si";

function Landing() {
  return (
    <div className="min-h-[50vh] lg:min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {/* Larger Devices (Above 1020px) */}
      <div className="hidden lg:flex">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div className="space-y-6">
            <h1 className="text-[39px] font-extrabold w-[500px]">
              Mudassir Ahmed Siddiqui <br />
              <span className="text-red-700 text-[34px]">
                {" "}
                is a Frontend Developer
              </span>{" "}
              and
              <br />
              <span className="text-red-700 text-[34px]">Data Engineer</span>
            </h1>
            <p className="text-gray-400 text-[17px] w-[580px]">
              Seasoned AI/ML Engineer proficient in various stacks including
              TensorFlow, PyTorch, Scikit-learn, Keras, and MXNet. Committed to
              continuous learning and exploration in deep learning frameworks
              such as Hugging Face Transformers and fast.ai. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Distinctio facilis, quia
              nihil corrupti tenetur vero odio a temporibus explicabo recusandae
              incidunt tempore voluptate beatae labore laborum repudiandae
              perferendis ab? Fugiat!
            </p>
            <button className="px-4 py-2 border border-white text-white hover:bg-red-700 transition-colors">
              Contact me!!
            </button>
          </div>
        </div>

        {/* Name */}
        <div className="absolute top-8 right-8 text-right">
          <h1 className="text-red-600 text-2xl font-bold tracking-wider">
            MUDASSIR
            <br />
            AHMED
            <br />
            SIDDIQUI
          </h1>
        </div>

        {/* Main Content - Animated Red Circle */}
        <div className="absolute inset-0 flex items-center justify-center ml-[33%]">
          <div className="relative w-[500px] h-[500px]">
            {/* Glowing & Pulsing Red Circle */}
            <div
              className="absolute inset-0 rounded-full border-[30px] border-red-800 
      shadow-[0_0_180px_rgba(255,78,88,0.7)] animate-glow"
            ></div>

            {/* Image Overlay */}
            <img
              src="/images/port2.png"
              alt="Hooded Figure"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
          </div>
        </div>

        {/* Role and Location */}
        <div className="absolute bottom-8 left-8">
          <h2 className="text-3xl font-bold mb-2">Web Designer</h2>
          <p className="text-lg">
            From <span className="text-red-600">PORTUGAL</span>
          </p>
        </div>

        {/* Navigation */}
        <nav className=" absolute right-8 top-[55%] -translate-y-1/2 flex flex-col gap-8 space-y-[98px] font-bold">
          {["PROJECTS ", "SKILLS-SET", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[20px] tracking-widest hover:text-red-600 transition-colors transform -rotate-90"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="absolute flex items-center gap-6 top-8">
          <FaTwitter className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaFacebookF className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaGithub className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaLinkedin className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaInstagram className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Mobile Layout (Below 1020px) */}
      <div className="lg:hidden flex flex-col items-center text-center space-y-8">
        {/* Social Links */}
        <div className="flex space-x-6">
          <FaTwitter className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaFacebookF className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaGithub className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaLinkedin className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
          <FaInstagram className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
        </div>

        {/* Navigation */}
        <nav className="w-full flex justify-center py-2  text-white">
          {["SKILLS-SET", "PROJECTS", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="mx-4 text-[13px] tracking-widest hover:text-red-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Logo and Brand */}
        <div className="space-y-4">
          <h1 className="text-[26px] font-extrabold w-[370px]">
            Mudassir Ahmed Siddiqui <br />
            <span className="text-red-700 text-[25px]">
              {" "}
              is a Frontend Developer
            </span>{" "}
            and
            <br />
            <span className="text-red-700 text-[25px]">Data Engineer</span>
          </h1>
          <p className="text-gray-400 max-w-md px-4">
            AI/ML Engineer | Data Scientist | Passionate about Deep Learning,
            NLP, and Computer Vision. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sapiente veniam odit rerum commodi consequuntur
            molestiae modi molestias, fuga quia dolor sit, nihil quam incidunt
            eius voluptatem, totam qui iure alias! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolores, rerum!
          </p>
        </div>

        {/* Main Content */}
        {/* Main Content - Animated Red Circle */}
        <div className="relative w-64 h-64">
          {/* Glowing & Pulsing Red Circle */}
          <div
            className="absolute inset-0 rounded-full border-[10px] border-red-700 
    shadow-[0_0_80px_rgba(255,78,88,0.5)] animate-glow"
          ></div>

          {/* Image Overlay */}
          <img
            src="/images/port2.png"
            alt="Hooded Figure"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>



      </div>
    </div>
  );
}

export default Landing;
