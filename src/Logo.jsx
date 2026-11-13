export default function Logo({ id, width, height, accent, accent2, textColor }) {
  const p = (name) => `${id}-${name}`;
  return (
    <svg width={width} height={height} viewBox="0 0 606 132" role="img" aria-label="DIMAR Technology" style={{ display: 'block' }}>
      <defs>
        <clipPath id={p('ctop')}><rect x="-10" y="0" width="140" height="60" /></clipPath>
        <clipPath id={p('cbot')}><rect x="-10" y="60" width="140" height="70" /></clipPath>
        <clipPath id={p('clef')}><rect x="-10" y="0" width="100" height="130" /></clipPath>
        <clipPath id={p('crig')}><rect x="90" y="0" width="40" height="130" /></clipPath>
        <clipPath id={p('c')}><rect x="-10" y="0" width="520" height="24" /></clipPath>
      </defs>
      <g transform="translate(-8.8,-66) scale(2.2)">
        <g clipPath={`url(#${p('ctop')})`}>
          <path d="M10 36 H26 A24 24 0 0 1 26 84 H10 Z" fill="none" stroke={accent} strokeWidth="12" strokeLinejoin="round" />
        </g>
        <g clipPath={`url(#${p('cbot')})`}>
          <path d="M10 36 H26 A24 24 0 0 1 26 84 H10 Z" fill="none" stroke={accent2} strokeWidth="12" strokeLinejoin="round" />
        </g>
        <g clipPath={`url(#${p('clef')})`}>
          <path d="M62 90 L83 30 H97 L118 90 H104 L101.2 82 H78.8 L76 90 Z M90 50 L97.7 72 H82.3 Z" fill={accent} fillRule="evenodd" />
        </g>
        <g clipPath={`url(#${p('crig')})`}>
          <path d="M62 90 L83 30 H97 L118 90 H104 L101.2 82 H78.8 L76 90 Z M90 50 L97.7 72 H82.3 Z" fill={accent2} fillRule="evenodd" />
        </g>
      </g>
      <g color={textColor} transform="translate(279,15) scale(.75)">
        <g>
          <g fill="currentColor">
            <path d="M8 8 H44 Q64 8 64 28 V52 Q64 72 44 72 H8 Z" fill="none" stroke="currentColor" strokeWidth="16" strokeLinejoin="round" />
            <rect x="86" width="16" height="80" />
            <polygon points="116,80 116,0 136,0 168,38 200,0 220,0 220,80 204,80 204,22 168,62 132,22 132,80" />
            <path fillRule="evenodd" d="M234 80 L274 0 H298 L338 80 H318 L309 62 H263 L254 80 Z M286 16 L302 48 H270 Z" />
            <path d="M360 80 V8 H398 A22 22 0 0 1 398 52 H360" fill="none" stroke="currentColor" strokeWidth="16" strokeLinejoin="round" />
            <polygon points="390,56 410,56 434,80 414,80" />
          </g>
          <g transform="translate(2,112)" clipPath={`url(#${p('c')})`} fill="none" stroke="currentColor" strokeWidth="4.5">
            <path transform="translate(0.00,0)" d="M0 2 H30 M15 2 V24" />
            <path transform="translate(45.11,0)" d="M28 2 H2 V22 H28 M2 12 H24" />
            <path transform="translate(90.22,0)" d="M28 2 H9 Q2 2 2 9 V15 Q2 22 9 22 H28" />
            <path transform="translate(135.33,0)" d="M2 0 V24 M28 0 V24 M2 12 H28" />
            <path transform="translate(180.44,0)" d="M2 24 V0 M28 24 V0 M2 0 L28 24" />
            <path transform="translate(225.56,0)" d="M9 2 H21 Q28 2 28 9 V15 Q28 22 21 22 H9 Q2 22 2 15 V9 Q2 2 9 2 Z" />
            <path transform="translate(270.67,0)" d="M2 0 V22 H28" />
            <path transform="translate(315.78,0)" d="M9 2 H21 Q28 2 28 9 V15 Q28 22 21 22 H9 Q2 22 2 15 V9 Q2 2 9 2 Z" />
            <path transform="translate(360.89,0)" d="M28 2 H9 Q2 2 2 9 V15 Q2 22 9 22 H21 Q28 22 28 15 V12 H16" />
            <path transform="translate(406.00,0)" d="M1 0 L15 13 L29 0 M15 13 V24" />
          </g>
        </g>
      </g>
    </svg>
  );
}
