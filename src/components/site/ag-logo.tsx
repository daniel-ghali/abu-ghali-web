import type { ImgHTMLAttributes } from "react";
import logoSrc from "@/assets/ag-logo.png";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  alt?: string;
};

export function AGLogo({ alt = "Abu Ghali Modern Industries", className, ...rest }: Props) {
  return (
    <img
      src={logoSrc}
      alt={alt}
      className={className}
      width={80}
      height={80}
      {...rest}
    />
  );
}