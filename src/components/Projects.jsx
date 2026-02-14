import SectionHeading from "./UI/SectionHeading";

const PROJECTS = [
	{
		name: "Readless",
		link: "https://readless-ai.vercel.app",
		image: "/projects/readless.png",
		description: [
			"AI-powered PDF summarisation built with Next.js. Upload any PDF and ReadLess will return an engaging, emoji-rich, markdown summary that you can read or copy in seconds.",
		],
	},
	{
		name: "StoreIt",
		link: "https://store-it-drive.vercel.app",
		image: "/projects/storeit.png",
		description: [
			"A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.",
		],
	},
];

export default function Projects() {
	return (
		<div className="projects-section relative rounded-md lg:border-1 border-dashed border-gray-400 flex flex-col sm:p-4 lg:p-4 w-full max-w-full min-w-0 my-4 mx-0 lg:m-0 overflow-x-hidden lg:overflow-visible box-border">
			<SectionHeading title="Projects" />

			<div className="flex flex-col gap-8 lg:gap-10">
				{PROJECTS.map((project) => (
					<article
						key={project.name}
						className="group flex flex-col rounded-lg border border-gray-300 bg-white/80 overflow-hidden shadow-sm"
					>
						{/* Image container: description on hover with liquid glass */}
						<div className="relative w-full aspect-video bg-gray-100 flex-shrink-0">
							<img
								src={project.image}
								alt={project.name}
								className="w-full h-full object-cover object-center"
							/>
							{/* Desktop: description + button on hover (liquid glass overlay) */}
							<div className="hidden lg:flex absolute inset-0 flex-col gap-2 justify-center items-center p-4 bg-white/25 backdrop-blur-xl backdrop-saturate-150 border border-white/20 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								<ul className="projects-overlay-list list-inside space-y-1 body-text text-sm text-center text-gray-900 max-h-24 overflow-y-auto drop-shadow-sm">
									{project.description.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center mt-1 px-4 py-2 rounded-md bg-white/70 backdrop-blur-sm border border-gray-400/80 text-gray-800 body-text font-medium hover:bg-white transition-colors text-sm shadow-sm"
								>
									Live demo
								</a>
							</div>
						</div>
						{/* Desktop: title below image (liquid glass) */}
						<div className="hidden lg:flex items-center justify-center px-4 bg-white/20 backdrop-blur-xl backdrop-saturate-150 border-t border-white/30 rounded-b-lg">
							<h2 className="text-xl font-bold body-text text-gray-900 drop-shadow-sm">
								{project.name}
							</h2>
						</div>
						{/* Mobile: description below image (always visible) */}
						<div className="flex flex-col gap-3 p-4 sm:p-5 lg:hidden">
							<h2 className="text-xl sm:text-2xl font-bold text-gray-800 body-text">
								{project.name}
							</h2>
							<ul className="list-inside space-y-1.5 text-gray-700 body-text text-sm sm:text-base">
								{project.description.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center self-center mt-1 px-4 py-2 rounded-md bg-[#8F87F1] text-white body-text font-medium hover:bg-gray-700 transition-colors text-sm sm:text-base"
							>
								Live demo
							</a>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
