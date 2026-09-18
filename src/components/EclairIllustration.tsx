export default function EclairIllustration() {
    return (
        <svg
            className="auth-illustration"
            viewBox="0 0 240 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* farfurie */}
            <ellipse cx="120" cy="170" rx="95" ry="14" fill="#2f4a52" opacity="0.5" />

            {/* corp eclair (aluat) */}
            <rect x="40" y="110" width="160" height="44" rx="22" fill="#f6c9a0" />

            {/* glazura de ciocolata deasupra */}
            <path
                d="M45 118
           C 60 100, 90 100, 105 114
           C 120 128, 140 100, 160 112
           C 180 122, 195 104, 198 118
           C 200 130, 190 132, 175 130
           C 150 128, 130 138, 110 130
           C 90 122, 65 136, 45 130
           Z"
                fill="#6b4226"
            />

            {/* crema vizibila lateral (taietura) */}
            <rect x="40" y="132" width="160" height="8" rx="4" fill="#fff4e0" />

            {/* stropi de decor / migdale */}
            <circle cx="70" cy="118" r="3" fill="#fff4e0" />
            <circle cx="120" cy="112" r="3" fill="#fff4e0" />
            <circle cx="165" cy="116" r="3" fill="#fff4e0" />

            {/* firimituri langa farfurie */}
            <circle cx="55" cy="160" r="3" fill="#e88985" />
            <circle cx="85" cy="172" r="3" fill="#f6c9a0" />
            <circle cx="155" cy="168" r="3" fill="#e88985" />
            <circle cx="185" cy="158" r="3" fill="#f6c9a0" />
        </svg>
    );
}