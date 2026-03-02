export const SITE_TITLE = "Florian Soter";
export const SITE_DESCRIPTION =
	"CEO & Tech-Operator. Strukturelles Denken, operative Einblicke und strategische Perspektiven im KI-Zeitalter.";
export const SITE_URL = "https://floriansoter.io";

export const CATEGORIES = [
	{ slug: "systems-strategy", label: "Systems & Strategy" },
	{ slug: "build-execution", label: "Build & Execution" },
	{ slug: "applied-technologies", label: "Applied Technologies" },
	{ slug: "enterprise-implications", label: "Enterprise Implications" },
	{ slug: "capital-structure", label: "Capital & Structure" },
	{ slug: "current-news", label: "Current News" },
] as const;

export const LAYERS = CATEGORIES.slice(0, 5);

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
