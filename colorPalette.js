const Stale = new Map();
Stale[50] = "#f8fafc";
Stale[100] = "#f1f5f9";
Stale[200] = "#e2e8f0";
Stale[300] = "#cbd5e1";
Stale[400] = "#94a3b8";
Stale[500] = "#64748b";
Stale[600] = "#475569";
Stale[700] = "#334155";
Stale[800] = "#1e293b";
Stale[900] = "#0f172a";
Stale[950] = "#020617";

const Gray = new Map();
Gray[50] = "#f9fafb";
Gray[100] = "#f3f4f6";
Gray[200] = "#e5e7eb";
Gray[300] = "#d1d5db";
Gray[400] = "#9ca3af";
Gray[500] = "#6b7280";
Gray[600] = "#4b5563";
Gray[700] = "#374151";
Gray[800] = "#1f2937";
Gray[900] = "#111827";
Gray[950] = "##030712";

const Zinc = new Map();
Zinc[50] = "#fafafa";
Zinc[100] = "#f4f4f5";
Zinc[200] = "#e4e4e7";
Zinc[300] = "#d4d4d8";
Zinc[400] = "#a1a1aa";
Zinc[500] = "#71717a";
Zinc[600] = "#52525b";
Zinc[700] = "#3f3f46";
Zinc[800] = "#27272a";
Zinc[900] = "#18181b";
Zinc[950] = "#09090b";

const Neutral = new Map();
Neutral[50] = "#fafafa";
Neutral[100] = "#f5f5f5";
Neutral[200] = "#e5e5e5";
Neutral[300] = "#d4d4d4";
Neutral[400] = "#a3a3a3";
Neutral[500] = "#737373";
Neutral[600] = "#525252";
Neutral[700] = "#404040";
Neutral[800] = "#262626";
Neutral[900] = "#171717";
Neutral[950] = "#0a0a0a";

const Stone = new Map();
Stone[50] = "#fafaf9";
Stone[100] = "#f5f5f4";
Stone[200] = "#e7e5e4";
Stone[300] = "#d6d3d1";
Stone[400] = "#a8a29e";
Stone[500] = "#78716c";
Stone[600] = "#57534e";
Stone[700] = "#44403c";
Stone[800] = "#292524";
Stone[900] = "#0c0a09";

const Red = new Map();
Red[50] = "#fdf2f2";
Red[100] = "#fee2e2";
Red[200] = "#fecaca";
Red[300] = "#fca5a5";
Red[400] = "#f87171";
Red[500] = "#ef4444";
Red[600] = "#dc2626";
Red[700] = "#b91c1c";
Red[800] = "#991b1b";
Red[900] = "#7f1d1d";
Red[950] = "#450a0a";


const Orange = new Map();
Orange[50] = "#fff7ed";
Orange[100] = "#ffedd5";
Orange[200] = "#fed7aa";
Orange[300] = "#fdba74";
Orange[400] = "#fb923c";
Orange[500] = "#f97316";
Orange[600] = "#ea580c";
Orange[700] = "#c2410c";
Orange[800] = "#9a3412";
Orange[900] = "#7c2d12";
Orange[950] = "#431407";


const Amber = new Map();
Amber[50] = "#fffbeb";
Amber[100] = "#fef3c7";
Amber[200] = "#fde68a";
Amber[300] = "#fcd34d";
Amber[400] = "#fbbf24";
Amber[500] = "#f59e0b";
Amber[600] = "#d97706";
Amber[700] = "#b45309";
Amber[800] = "#92400e";
Amber[900] = "#78350f";
Amber[950] = "#451a03";

const Yellow = new Map();
Yellow[50] = "#fefce8";
Yellow[100] = "#fef9c3";
Yellow[200] = "#fef08a";
Yellow[300] = "#fde047";
Yellow[400] = "#facc15";
Yellow[500] = "#eab308";
Yellow[600] = "#ca8a04";
Yellow[700] = "#a16207";
Yellow[800] = "#854d0e";
Yellow[900] = "#713f12";
Yellow[950] = "#422006";

const Lime = new Map();
Lime[50] = "#f7fee7";
Lime[100] = "#ecfccb";
Lime[200] = "#d9f99d";
Lime[300] = "#bef264";
Lime[400] = "#a3e635";
Lime[500] = "#84cc16";
Lime[600] = "#65a30d";
Lime[700] = "#4d7c0f";
Lime[800] = "#3f6212";
Lime[900] = "#365314";
Lime[950] = "#1a2e05";

const Green = new Map();
Green[50] = "#f0fdf4";
Green[100] = "#dcfce7";
Green[200] = "#bbf7d0";
Green[300] = "#86efac";
Green[400] = "#4ade80";
Green[500] = "#22c55e";
Green[600] = "#16a34a";
Green[700] = "#15803d";
Green[800] = "#166534";
Green[900] = "#14532d";
Green[950] = "#052e16";

const Emarald = new Map();
Emarald[50] = "#ecfdf5";
Emarald[100] = "#d1fae5";
Emarald[200] = "#a7f3d0";
Emarald[300] = "#6ee7b7";
Emarald[400] = "#34d399";
Emarald[500] = "#10b981";
Emarald[600] = "#059669";
Emarald[700] = "#047857";
Emarald[800] = "#065f46";
Emarald[900] = "#064e3b";
Emarald[950] = "#022c22";

const Teal = new Map();
Teal[50] = "#f0fdfa";
Teal[100] = "#ccfbf1";
Teal[200] = "#a7f3d0";
Teal[300] = "#5eead4";
Teal[400] = "#2dd4bf";
Teal[500] = "#14b8a6";
Teal[600] = "#0d9488";
Teal[700] = "#0f766e";
Teal[800] = "#115e59";
Teal[900] = "#134e4a";
Teal[950] = "#042f2e";

const Cyan = new Map();
Cyan[50] = "#ecfeff";
Cyan[100] = "#cffafe";
Cyan[200] = "#a5f3fc";
Cyan[300] = "#67e8f9";
Cyan[400] = "#22d3ee";
Cyan[500] = "#06b6d4";
Cyan[600] = "#0891b2";
Cyan[700] = "#0e7490";
Cyan[800] = "#155e75";
Cyan[900] = "#164e63";
Cyan[950] = "#083344";

const Sky = new Map();
Sky[50] = "#F0F9FF";
Sky[100] = "#E0F2FE";
Sky[200] = "#BAE6FD";
Sky[300] = "#7DD3FC";
Sky[400] = "#38BDF8";
Sky[500] = "#0EA5E9";
Sky[600] = "#0284C7";
Sky[700] = "#0369A1";
Sky[800] = "#075985";
Sky[900] = "#0C4A6E";
Sky[950] = "#082f49";

const Blue = new Map();
Blue[50] = "#EFF6FF";
Blue[100] = "#DBEAFE";
Blue[200] = "#BFDBFE";
Blue[300] = "#93C5FD";
Blue[400] = "#60A5FA";
Blue[500] = "#3B82F6";
Blue[600] = "#2563EB";
Blue[700] = "#1D4ED8";
Blue[800] = "#1E40AF";
Blue[900] = "#1E3A8A";
Blue[950] = "#172554";

const Indigo = new Map();
Indigo[50] = "#EEF2FF";
Indigo[100] = "#E0E7FF";
Indigo[200] = "#C7D2FE";
Indigo[300] = "#A5B4FC";
Indigo[400] = "#818CF8";
Indigo[500] = "#6366F1";
Indigo[600] = "#4F46E5";
Indigo[700] = "#4338CA";
Indigo[800] = "#3730A3";
Indigo[900] = "#312E81";
Indigo[950] = "#1e1b4b";

const Violet = new Map();
Violet[50] = "#F5F3FF";
Violet[100] = "#EDE9FE";
Violet[200] = "#DDD6FE";
Violet[300] = "#C4B5FD";
Violet[400] = "#A78BFA";
Violet[500] = "#8B5CF6";
Violet[600] = "#7C3AED";
Violet[700] = "#6D28D9";
Violet[800] = "#5B21B6";
Violet[900] = "#4C1D95";
Violet[950] = "#2e1065";

const Purple = new Map();
Purple[50] = "#faf5ff";
Purple[100] = "#f3e8ff";
Purple[200] = "#e9d5ff";
Purple[300] = "#d8b4fe";
Purple[400] = "#c084fc";
Purple[500] = "#a855f7";
Purple[600] = "#9333ea";
Purple[700] = "#7e22ce";
Purple[800] = "#6b21a8";
Purple[900] = "#581c87";
Purple[950] = "#3b0764";

const Fuchsia = new Map();
Fuchsia[50] = "#fdf4ff";
Fuchsia[100] = "#fae8ff";
Fuchsia[200] = "#f5d0fe";
Fuchsia[300] = "#f0abfc";
Fuchsia[400] = "#e879f9";
Fuchsia[500] = "#d946ef";
Fuchsia[600] = "#c026d3";
Fuchsia[700] = "#a21caf";
Fuchsia[800] = "#86198f";
Fuchsia[900] = "#701a75";
Fuchsia[950] = "#4a044e";

const Pink = new Map();
Pink[50] = "#fdf2f8";
Pink[100] = "#fce7f3";
Pink[200] = "#fbcfe8";
Pink[300] = "#f9a8d4";
Pink[400] = "#f472b6";
Pink[500] = "#ec4899";
Pink[600] = "#db2777";
Pink[700] = "#be185d";
Pink[800] = "#9d174d";
Pink[900] = "#831843";
Pink[950] = "##500724";

const Rose = new Map();
Rose[50] = "#fff1f2";
Rose[100] = "#ffe4e6";
Rose[200] = "#fecdd3";
Rose[300] = "#fda4af";
Rose[400] = "#fb7185";
Rose[500] = "#f43f5e";
Rose[600] = "#e11d48";
Rose[700] = "#be123c";
Rose[800] = "#9f1239";
Rose[900] = "#881337";
Rose[950] = "#4c0519";

module.exports = { 
    Stale, 
    Gray, 
    Zinc, 
    Neutral, 
    Stone, 
    Red, 
    Orange, 
    Amber,
    Yellow,
    Lime,
    Green,
    Emarald,
    Teal,
    Cyan,
    Sky,
    Blue,
    Indigo, 
    Violet,
    Purple,
    Fuchsia,
    Pink,
    Rose    
};
