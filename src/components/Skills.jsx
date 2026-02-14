import SectionHeading from "./UI/SectionHeading";
import SkillCard from "./UI/SkillCard";

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

export default function Skills() {
	return (
		<div
			className="relative rounded-md lg:border-1 border-dashed border-gray-400 flex flex-col p-2 
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
