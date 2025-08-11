import type { SVGProps } from 'react';

export function DfacLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 40"
      aria-label="DFAC Logo"
      {...props}
    >
      <rect width="100" height="40" rx="4" fill="currentColor" />
      <text
        x="50"
        y="26"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="hsl(var(--background))"
        textAnchor="middle"
      >
        DFAC
      </text>
    </svg>
  );
}
