import SectionHeading from "./UI/SectionHeading";

const SKILLS = [
	{
		type: "frontend",
		skills: [
			{ name: "React", logo: "/skills/react.png" },
			{ name: "Next.js", logo: "/skills/nextjs.png" },
			{ name: "Redux", logo: "/skills/redux.png" },
			{ name: "Tailwind", logo: "/skills/tailwindcss.png" },
			{ name: "HTML", logo: "/skills/html.png" },
			{ name: "CSS", logo: "/skills/css.png" },
			{ name: "JavaScript", logo: "/skills/javascript.png" },
			{ name: "TypeScript", logo: "/skills/typescript.png" },
		],
	},
];

function SkillCard({ skill }) {
	return (
		<div className="flex flex-col w-full min-w-0 sm:min-w-22 lg:min-w-18">
			<div
				className="w-full min-w-0 hover:scale-105 lg:hover:scale-110 text-[#FFF] transition-all duration-300 bg-[#8F87F1]/70 rounded-md
								p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center gap-1 sm:gap-2 hover:bg-[#2D2D2D]"
			>
				<img
					src={skill.logo}
					alt={skill.name}
					className="w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 object-contain"
				/>
				<span className="text-xs sm:text-sm body-text text-center wrap-break-word line-clamp-2">
					{skill.name}
				</span>
			</div>
		</div>
	);
}

export default function Skills() {
	return (
		<div
			className="relative rounded-md lg:border border-dashed border-gray-400 flex flex-col p-2 
                        sm:p-3 lg:p-4 w-full max-w-full min-w-0 my-4 mx-0 lg:m-0 min-h-0 overflow-x-hidden 
                        lg:overflow-visible box-border justify-center items-center"
		>
			<SectionHeading title="Skills" />

			<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 p-1 sm:p-2 lg:p-2  w-full min-w-0 ">
				{SKILLS[0].skills.map((skill, i) => (
					<SkillCard skill={skill} key={i} />
				))}
			</div>
		</div>
	);
}
