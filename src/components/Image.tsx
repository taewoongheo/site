import { baseURL } from "@/lib/url";

type ImageSize = "sm" | "md" | "lg";

interface ImageProps {
  src: string;
  alt: string;
  size?: ImageSize;
}

const sizeClass: Record<ImageSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

const Image = ({ src, alt, size }: ImageProps) => {
  return (
    <img
      src={`${baseURL}${src}`}
      alt={alt}
      className={size ? sizeClass[size] : undefined}
    />
  );
};

export default Image;
