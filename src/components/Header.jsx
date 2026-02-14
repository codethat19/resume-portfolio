import { Phone, Mail, Linkedin, Github, FileUser } from "lucide-react";

const navLinks = [
	{ label: "+91-(84-7690-7610)", href: "tel:+918476907610", icon: Phone },
	{ label: "Mail", href: "mailto:aayushrastogi1997@gmail.com", icon: Mail },
	{
		label: "Resume",
		href: "https://drive.google.com/file/d/1DaCSVMPj6RRS5PSYgzqPWYrQGUDCJlaJ/view?usp=sharing",
		icon: FileUser,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/aayush-rastogi",
		icon: Linkedin,
	},
	{ label: "GitHub", href: "https://github.com/codethat19", icon: Github },
];

export default function Header() {
	return (
		<header className="flex flex-col justify-center lg:border-1 border-gray-400 border-dashed rounded-md w-full max-w-6xl items-center gap-6 mt-6 p-4 sm:gap-7 sm:mt-8 sm:px-6 md:gap-8 md:mt-10 md:px-8 lg:mt-12 lg:px-10">
			<h1 className="text-6xl font-bold playwrite-at-title text-center sm:text-4xl lg:text-6xl  xl:text-7xl">
				Aayush Rastogi
			</h1>
			<h3 className="text-center text-sm lg:text-lg body-text">
				Frontend Engineer with experience building scalable,
				high-performance web applications. Proven track record of
				improving frontend performance by up to 40%, and delivering
				production-grade applications used by 100k+ users. Specialized
				in modern frontend architecture, performance optimization, and
				creating intuitive user experiences.
			</h3>
			<nav className="w-full max-w-4xl" aria-label="Contact and links">
				<div className="text-gray-600 body-text flex flex-wrap justify-center items-center gap-4 text-sm sm:gap-5 sm:text-base md:gap-6 lg:gap-8">
					{navLinks.map((item) => {
						const Icon = item.icon;
						const isExternal = item.href.startsWith("http");
						return (
							<a
								key={item.label}
								href={item.href}
								target={isExternal ? "_blank" : undefined}
								rel={
									isExternal
										? "noopener noreferrer"
										: undefined
								}
								className="flex justify-center items-center gap-1.5 sm:gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded transition-colors min-w-0"
							>
								<Icon
									size={18}
									className="shrink-0"
									aria-hidden
								/>
								<span className="truncate">{item.label}</span>
							</a>
						);
					})}
				</div>
			</nav>
		</header>
	);
}
