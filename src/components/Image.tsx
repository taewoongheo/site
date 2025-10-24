import { baseURL } from "@/lib/url";

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <img
      src={`${baseURL}${src}`}
      alt={alt}
      className="w-full sm:w-3/4 md:w-1.5/2"
    />
  );
};

export default Image;
