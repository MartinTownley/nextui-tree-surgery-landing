import { Link } from "@heroui/link"; // Assuming you're using NextUI for links
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // For social icons

export default function Footer() {
  return (
    <footer className="flex flex-col items-center  text-center text-white">
      <div className="w-full bg-black/20 p-4 text-center">
        © 2024 Sparrowhawk Trees
      </div>
    </footer>
  );
}
