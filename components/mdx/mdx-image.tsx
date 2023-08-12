import Image from "@/components/image";
import { css } from "@/styled-system/css";
import { ImageProps } from "next/image";

const MarkdownImage = async ({
  src,
  alt = "",
  ...restProps
}: ImageProps & { src: string }) => {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        sizes="(min-width: 1024px) 80vw, 100vw"
        className={css({
          maxWidth: "100%",
          borderRadius: "md",
          height: "auto",
        })}
        {...restProps}
      />
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
};

export default MarkdownImage;
