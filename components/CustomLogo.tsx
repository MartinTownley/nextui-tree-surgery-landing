"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

interface CustomLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const CustomLogo: React.FC<CustomLogoProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${theme === "light" ? "" : "inverted-svg"} `}
      />
    </div>
  );
};

export default CustomLogo;
