import { AtSign, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <div id="contact" className="max-w-[1280px] mx-auto px-4">
      <h2 className="text-4xl mt-8 font-extrabold mb-4">
        <span className="text-red-600">#</span>ABOUT ME – More Than Just Code & Data
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Left Side - Contact Paragraph & About Me */}
        <div className="space-y-8">
          <p className="text-gray-400">
            Hey there! I’m Muddasir, a tech geek who loves building things that
            actually make an impact. Whether it’s crafting sleek web apps or
            unraveling insights from data, I thrive on solving real-world
            problems with technology. <br />
            But beyond the screen? I’m a football fanatic, and if there’s one
            thing I’ve learned from my idol Cristiano Ronaldo, it’s that hard
            work beats talent when talent doesn’t work hard. Whether I’m coding,
            analyzing trends, or scoring goals on the field, I bring the same
            passion, dedication, and hunger to improve every single day. <br />
            When I’m not debugging code or optimizing dashboards, you’ll
            probably find me: 
            <br />⚡ Playing or Watching football (SIUUU! 🐐) 
            <br />⚡ Experimenting with new tech stacks 
            <br />⚡ Hunting for the perfect UI animation 
            <br />⚡ Tweaking my fantasy football lineup (because strategy matters everywhere 😆) 
            
            <br />

            I’m always up for a challenge, a good conversation, and building
            something awesome. Let’s connect and make things happen! 🚀
          </p>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h1 className="text-[25px] mb-2">Contacts</h1>
            <p className="text-gray-400">
              If you have any request or question, don't hesitate to contact me.
            </p>

            <h3 className="text-lg mb-4 mt-6">Message me here</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-[#b49cff]"
              >
                <AtSign size={16} /> mudassirsidiki@gmail.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-[#b49cff]"
              >
                <Github size={16} /> mudassirsidiki
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image & Decorative Elements */}
        <div className="relative flex justify-center">
          {/* Background Decorations */}
          <div className="absolute top-12 left-8 opacity-60 w-16 h-16 bg-gray-500 rounded-full"></div>
          <div className="absolute right-24 top-24 w-10 h-10 bg-gray-500 rounded"></div>
          <div className="absolute right-48 bottom-12 w-8 h-8 border border-gray-500 rounded"></div>

          {/* Image */}
          <img
            src="/images/port2.png"
            alt="Developer"
            className="w-[300px] md:w-[300px] object-cover rounded-lg "
          />

          {/* Typewriter Effect Box */}
          {/* <div className="absolute bottom-0 bg-[#1a1d21] p-2 rounded border border-gray-700 w-[300px] md:w-[300px] text-center">
            <p className="text-[21px] font-serif">🟣 Currently working at Mazik Global</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
