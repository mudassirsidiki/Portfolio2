import { FaTwitter, FaTwitch, FaFacebookF } from "react-icons/fa"
import { SiBehance } from "react-icons/si"

function Landing() {
  return (
    
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {/* Logo and Brand */}
      
        <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div className="space-y-6">
            <h1 className="text-[37px] font-extrabold w-[500px]">
              Mudassir Ahmed Siddiqui <br />{" "}
              <span className="text-red-700"> is an Al/ML engineer</span> and
              <br />
              <span className="text-red-700">Data Scientist</span>
            </h1>
            <p className="text-gray-400 text-[17px] w-[580px]">
              Seasoned AI/ML Engineer proficient in various stacks including
              TensorFlow, PyTorch, Scikit-learn, Keras, and MXNet. Committed to
              continuous learning and exploration in deep learning frameworks
              such as Hugging Face Transformers and fast.ai. Experienced in
              deploying ML models with Docker, Kubernetes, and AWS SageMaker.
              Passionate about staying abreast of the latest advancements in
              natural language processing, computer vision, and reinforcement
              learning. Excited to collaborate on cutting-edge projects that
              push the boundaries of AI innovation.
            </p>
            <button className="px-4 py-2 border border-white text-white hover:bg-[red]/30 transition-colors">
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


      

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center ml-[33%]">
        <div className="relative w-[500px] h-[500px]">
          {/* Red Circle */}
          <div className="absolute inset-0 rounded-full border-[30px] border-red-700 shadow-[0_0_180px_rgba(280,78,88,0.5)]"></div>

          {/* Hooded Figure */}
          <img
            src="/images/port2.png" 
            alt="Hooded Figure"
            className="absolute inset-0 w-full h-full h object-contain z-10"
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
      <nav className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 space-y-[98px] font-bold">
        {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-lg tracking-widest hover:text-red-600 transition-colors transform -rotate-90"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Social Links */}
      <div className="absolute flex items-center gap-6 top-8">
        <FaTwitter className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
        <FaTwitch className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
        <FaFacebookF className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
        <SiBehance className="w-6 h-6 hover:text-red-600 transition-colors cursor-pointer" />
      </div>
    </div>

  )
}

export default Landing
