export default function CakeIllustration() {
    return (
        <svg
            className="auth-illustration"
            viewBox="0 0 240 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* farfurie */}
            <ellipse cx="120" cy="196" rx="95" ry="14" fill="#2f4a52" opacity="0.5" />

            {/* etaj inferior */}
            <rect x="35" y="120" width="170" height="60" rx="10" fill="#f6c9a0" />
            <rect x="35" y="120" width="170" height="14" rx="7" fill="#fff2e0" />

            {/* etaj mijlociu */}
            <rect x="55" y="80" width="130" height="50" rx="10" fill="#f2a5a0" />
            <rect x="55" y="80" width="130" height="12" rx="6" fill="#ffd9d6" />

            {/* etaj superior */}
            <rect x="75" y="46" width="90" height="42" rx="10" fill="#e88985" />
            <rect x="75" y="46" width="90" height="12" rx="6" fill="#ffc2be" />

            {/* fructe de padure / cirese */}
            <circle cx="105" cy="40" r="9" fill="#c0392b" />
            <circle cx="122" cy="34" r="10" fill="#d64541" />
            <circle cx="140" cy="42" r="8" fill="#c0392b" />

            {/* codite cirese */}
            <path d="M107 32 Q112 20 120 24" stroke="#3f6b4a" strokeWidth="2" fill="none" />
            <path d="M124 26 Q129 14 137 18" stroke="#3f6b4a" strokeWidth="2" fill="none" />

            {/* stropi decor */}
            <circle cx="60" cy="145" r="3" fill="#e88985" />
            <circle cx="90" cy="160" r="3" fill="#f6c9a0" />
            <circle cx="150" cy="150" r="3" fill="#e88985" />
            <circle cx="180" cy="165" r="3" fill="#f6c9a0" />
        </svg>
    );
}