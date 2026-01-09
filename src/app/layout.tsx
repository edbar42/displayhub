import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
	title: "DisplayHub",
	description: "A place to share your wallpapers. With style.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

function TopNav() {
	return (
		<div className="w-full bg-gradient-to-r from-orange-900 via-orange-600 to-orange-900 pb-[2px]">
			<nav className="flex w-full items-center justify-between bg-[#0a0604] p-4 text-xl">
				<span>Your gallery</span> <span>Sign In</span>
			</nav>
		</div>
	);
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body>
				<TopNav />
				{children}
			</body>
		</html>
	);
}
