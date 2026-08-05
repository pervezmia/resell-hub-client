export function ResellHubIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="40" fill="#0F6E56" />
      <circle cx="82" cy="100" r="38" fill="none" stroke="#E1F5EE" strokeWidth="3" />
      <circle cx="118" cy="100" r="38" fill="none" stroke="#E1F5EE" strokeWidth="3" />
    </svg>
  );
}

export function ResellHubLogo({ height = 40 }) {
  return (
    <svg height={height} viewBox="0 0 480 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65" cy="70" r="34" fill="none" stroke="#0F6E56" strokeWidth="2" />
      <circle cx="95" cy="70" r="34" fill="none" stroke="#0F6E56" strokeWidth="2" />
      <text
        x="150"
        y="80"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="40"
        fontWeight="700"
        fill="#085041"
      >
        Resell
      </text>
      <text
        x="150"
        y="115"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="500"
        fill="#0F6E56"
        letterSpacing="4"
      >
        HUB
      </text>
    </svg>
  );
}