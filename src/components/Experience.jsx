import SectionHeading from "./UI/SectionHeading";
import womp_logo from "/womp_logo.png";
import ns_logo from "/ns_logo.png";
import infosys_logo from "/infosys_logo.png";

const EXPERIENCE_DETAILS = [
	{
		company_name: "Womp.xyz",
		working_period: "Mar 24 - Now (Self Employed)",
		description: [
			"Built a dynamic folder organisation interface using React.js, improving project organization efficiency across 100k+ active users",
			"Developed scalable Assets management UI, reducing user interaction steps by 30%",
			"Contributed to internal component library, accelerating feature development speed by 25% and improving UI consistency across 10+ modules",
		],
		role_type: "Remote",
		role_name: "Software Engineer",
		location: "India",
		company_logo: womp_logo,
	},
	{
		company_name: "Nervesparks",
		working_period: "Nov 23 - Mar 24",
		description: [
			"Led development of scalable React-based frontend interfaces, improving user engagement and session duration by 20%",
			"Translated UX wireframes into reusable React components, reducing frontend development time by 30%",
			"Implemented responsive design best practices, ensuring seamless performance across desktop, tablet, and mobile devices",
		],
		role_type: "remote",
		role_name: "Senior Software Engineer",
		location: "India",
		company_logo: ns_logo,
	},
	{
		company_name: "Infosys",
		working_period: "Nov 20 - Oct 23",
		description: [
			"Developed a fallback web application that reduced L1/L2 support tickets by 50%, improving system reliability during outages.",
			"Improved UI consistency across enterprise applications used by 10,000+ internal users",
			"Collaborated with cross-functional teams to deliver frontend enhancements aligned with business requirements",
		],
		role_type: "remote",
		role_name: "Digital Specialist Engineer",
		location: "India",
		company_logo: infosys_logo,
	},
];

const TRACK_WIDTH = 32; // px: space for line + dot
const LINE_OFFSET = 16; // px: center of track (line and dot center)
const DOT_SIZE = 16;

function ExperienceDescription({ description }) {
	if (Array.isArray(description)) {
		return (
			<div className="flex flex-col gap-1">
				{description.map((point, i) => (
					<p key={i} className="text-sm leading-relaxed">
						{point}
					</p>
				))}
			</div>
		);
	}
	return <p className="text-sm leading-relaxed">{description}</p>;
}

function ExperienceCard({
	company_name,
	working_period,
	description,
	role_name,
	company_logo,
}) {
	return (
		<div className="flex gap-4 flex-col">
			<ExperienceJobHeader
				company_name={company_name}
				working_period={working_period}
				role_name={role_name}
				company_logo={company_logo}
			/>
			<ExperienceDescription description={description} />
		</div>
	);
}

function ExperienceJobHeader({
	company_name,
	working_period,
	role_name,
	company_logo,
}) {
	return (
		<div className="flex flex-col">
			<span className="text-sm opacity-80">{working_period}</span>
			<div className="bg-[#8F87F1] p-2 rounded-md w-fit flex gap-2 items-center text-white hover:bg-[#2D2D2D] transition-all duration-300">
				<img
					src={company_logo}
					alt={company_name}
					className="w-6 h-6 object-contain"
				/>
				<h3 className="font-semibold">
					{company_name} - {role_name}
				</h3>
			</div>
		</div>
	);
}

export default function Experience() {
	return (
		<div className="relative rounded-md gap-4 lg:border-1 border-dashed border-gray-400 flex flex-col lg:flex-row p-4 md:px-10 md:py-8 w-full lg:w-3/4 max-w-6xl min-h-[320px]">
			<SectionHeading title="Experience" />

			{/* Vertical timeline: mobile & tablet — line and dots in a fixed track, cards to the right */}
			<div
				className="body-text lg:hidden flex-1 relative"
				style={{ paddingLeft: TRACK_WIDTH }}
			>
				{/* Vertical line: centered in track */}
				<div
					className="absolute top-2 bottom-2 w-0.5 bg-gray-400"
					style={{ left: LINE_OFFSET - 1 }}
					aria-hidden
				/>
				<ul className="relative flex flex-col gap-0 list-none p-0 m-0">
					{EXPERIENCE_DETAILS.map((exp) => (
						<li
							key={exp.company_name + exp.working_period}
							className="relative pl-3 pb-8 last:pb-0"
						>
							{/* Dot: centered on line */}
							<div
								className="absolute rounded-full bg-gray-600 border-2 border-[#8F87F1] z-10"
								style={{
									left: `${LINE_OFFSET - DOT_SIZE / 2 - TRACK_WIDTH}px`,
									top: 4,
									width: DOT_SIZE,
									height: DOT_SIZE,
								}}
								aria-hidden
							/>
							<div className="min-w-0">
								<ExperienceCard {...exp} />
							</div>
						</li>
					))}
				</ul>
			</div>

			{/* Horizontal timeline: desktop — header row with line passing through, then descriptions */}
			<div className="body-text hidden lg:flex flex-1 flex-col min-w-0">
				{/* Row of job headers with line passing through their vertical center */}
				<div className="relative flex flex-row gap-4 shrink-0 py-2">
					{/* Line runs through the center of the header row */}
					<div
						className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-400 z-0"
						aria-hidden
					/>
					{EXPERIENCE_DETAILS.map((exp) => (
						<div
							key={exp.company_name + exp.working_period}
							className="flex-1 min-w-0 flex flex-col items-center text-center relative z-10"
						>
							<ExperienceJobHeader
								company_name={exp.company_name}
								working_period={exp.working_period}
								role_name={exp.role_name}
								company_logo={exp.company_logo}
							/>
						</div>
					))}
				</div>
				{/* Descriptions below the line */}
				<div className="flex flex-row gap-4 flex-1 min-h-0">
					{EXPERIENCE_DETAILS.map((exp) => (
						<div
							key={exp.company_name + exp.working_period}
							className="flex-1 min-w-0"
						>
							<ExperienceDescription
								description={exp.description}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
