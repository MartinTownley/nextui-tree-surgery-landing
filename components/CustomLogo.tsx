// I want to create a component that wraps an image component  and allows me to pass in the image src, alt, width, and height as props.
"use client";
import Image from "next/image";
// import { useTheme } from "next-themes";

interface CustomLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomLogo: React.FC<CustomLogoProps> = ({ src, alt, width, height }) => {
  // const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default CustomLogo;
