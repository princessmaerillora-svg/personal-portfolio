type Variant = "solid" | "outline" | "light" | "light-outline";

const base =
  "group inline-flex min-h-11 select-none items-center justify-center gap-2 rounded-full px-5 text-sm font-medium whitespace-nowrap " +
  "transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.97] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "motion-reduce:transition-none motion-reduce:active:scale-100";

const variants: Record<Variant, string> = {
  solid:
    "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-indigo-600",
  outline:
    "border border-indigo-950/20 text-indigo-950 hover:border-indigo-950 hover:bg-indigo-950 hover:text-white focus-visible:outline-indigo-600",
  light:
    "bg-white text-indigo-950 hover:bg-indigo-100 active:bg-indigo-200 focus-visible:outline-white",
  "light-outline":
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-indigo-950 focus-visible:outline-white",
};

export function btn(variant: Variant, extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

/** Small diagonal arrow that nudges on hover; pair with btn(). */
export const arrowClass =
  "h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none";
