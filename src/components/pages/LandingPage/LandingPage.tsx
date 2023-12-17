import { Link } from "react-router-dom";
import { URL_PATH } from "../../../utils/path";

const LandingPage = () => {
  return (
    <div className="h-full p-8 md:px-16 text-gray-800 bg-red-50">
      <h1 className="text-4xl font-bold mb-4 text-red-400">
        Welcome to 3D Models 🎨
      </h1>

      <p className="text-lg mb-6">
        Discover the beauty of simplicity through my animated 3D models. This is
        where my creative journey unfolds, showcasing a blend of art and
        innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-red-400">
            Unique Designs 🎨
          </h2>
          <p>
            Explore a collection of my original 3D models, each telling its own
            visual story.
          </p>
        </div>

        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-red-400">
            Animation in Simplicity ✨
          </h2>
          <p>
            Witness the magic of animation breathing life into minimalist
            designs.
          </p>
        </div>

        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-red-400">
            Crafted with Passion 🚀
          </h2>
          <p>
            Every piece reflects my dedication to combining technology with
            artistic expression.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Explore:</h2>

      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          🌟 <strong className="text-red-400">Visual Delight:</strong> Dive into
          a world where simplicity meets creativity for a visually captivating
          experience. 🌈
        </li>
        <li className="mb-2">
          🚀 <strong className="text-red-400">Explore & Connect:</strong> Browse
          through, connect with my work, and perhaps find inspiration for your
          next project. 🔗
        </li>
      </ul>

      <p className="text-lg">
        Ready to experience simplicity in design? Start exploring now!
      </p>

      <Link
        to={URL_PATH.desk}
        className="inline-block px-6 py-3 my-6 bg-red-400 text-white rounded-full hover:bg-red-600 transition duration-300"
      >
        Explore the Portfolio
      </Link>
    </div>
  );
};

export default LandingPage;
