import { Link } from "@heroui/link"; // Assuming you're using NextUI for links
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // For social icons
import clsx from "clsx";
import { roboto_mono } from "@/config/fonts";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center  text-center text-gray-400">
      <div
        className={clsx(
          "w-full bg-black/20 p-4 text-center",
          roboto_mono.className
        )}
      >
        [design & development by MT, 2025]
      </div>
    </footer>
  );
}
