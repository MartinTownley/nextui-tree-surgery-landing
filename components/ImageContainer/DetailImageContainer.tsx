import Image from "next/image";

type Props = {
  image: {
    id: number;
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export default function DetailImageContainer({ image }: Props) {
  if (!image) {
    return <div>No image data</div>;
  }

  return (
    <div
      key={image.id}
      className="flex justify-center items-center min-h-screen"
    >
      <Image
        src={image.src}
        alt={image.alt || "Full size image"}
        width={image.width || 1200}
        height={image.height || 800}
        sizes="100vw"
        className="max-h-[90vh] w-auto max-w-full object-contain rounded-xl"
        priority
      />
    </div>
  );
}
