type Variant = "solid" | "outline" | "light" | "light-outline";

const base =
  "group inline-flex min-h-11 select-none items-center justify-center gap-2 rounded-full px-5 text-sm font-medium whitespace-nowrap " +
  "transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.97] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "motion-reduce:transition-none motion-reduce:active:scale-100";

const variants: Record<Variant, string> = {
  solid:
    "border border-[#c9a83e] bg-[#c9a83e] text-[#11110c] hover:border-[#e2c866] hover:bg-[#e2c866] active:bg-[#b49331] focus-visible:outline-[#e2c866]",
  outline:
    "border border-white/15 bg-white/[0.03] text-[#f0eee6] hover:border-[#c9a83e]/60 hover:bg-[#c9a83e]/10 hover:text-[#e2c866] focus-visible:outline-[#e2c866]",
  light:
    "bg-[#f0eee6] text-[#11110c] hover:bg-[#e2c866] active:bg-[#c9a83e] focus-visible:outline-[#f0eee6]",
  "light-outline":
    "border border-white/20 text-[#f0eee6] hover:border-[#c9a83e]/60 hover:bg-[#c9a83e]/10 hover:text-[#e2c866] focus-visible:outline-[#e2c866]",
};

export function btn(variant: Variant, extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

/** Small diagonal arrow that nudges on hover; pair with btn(). */
export const arrowClass =
  "h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none";
