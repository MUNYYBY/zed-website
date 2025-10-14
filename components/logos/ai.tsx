export default function AI({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="url(#gradient)"
        stroke="#9610FF"
        strokeWidth="2"
      />
      <circle cx="8" cy="10" r="1.5" fill="#ffffff" />
      <circle cx="16" cy="10" r="1.5" fill="#ffffff" />
      <path
        d="M8 15c1.5 2 4.5 2 6 0"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9610FF" />
          <stop offset="100%" stopColor="#7B0FE6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
