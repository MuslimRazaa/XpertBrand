import { useId } from "react";
import CircleArrow from "./CircleArrow";

type ViewWorkButtonProps = {
  label?: string;
  href?: string;
};

export function ViewWorkButton({
  label = "Get in touch",
  href = "#contact",
}: ViewWorkButtonProps) {
  const filterId = `${useId().replace(/:/g, "")}-filter`;

  return (
    <div className="relative inline-flex">
      <svg
        width="0"
        height="0"
        className="pointer-events-none absolute -left-full -top-full h-0 w-0"
        aria-hidden="true"
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="buttonFilter"
            />
            <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop" />
            <feBlend in="SourceGraphic" in2="buttonFilter" />
          </filter>
        </defs>
      </svg>
      <a
        href={href}
        className="group inline-flex items-center gap-0 rounded-full outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#ff6900]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111317]"
        style={{
          filter: `url(#${filterId})`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span
          className="inline-flex items-center rounded-full bg-[#ff6900] px-5 py-2.5 text-[15px] font-light tracking-[0.12em] text-white transition-colors duration-500 group-hover:bg-[#ff7a18]"
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {label}
        </span>
        <span className="relative flex h-9 w-9 items-center justify-center">
          <span
            className="absolute inset-0 flex items-center justify-center rounded-full bg-[#ff6900] text-[#120701] shadow-[0_10px_24px_rgba(255,105,0,0.4)] transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-45 group-hover:bg-[#ff7a18]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <CircleArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </span>
      </a>
    </div>
  );
}

export default ViewWorkButton;
