import SectionHeading from "./UI/SectionHeading";
import UdemyLogo from "/udemy-logo.png";

const CERTIFICATES = [
	{
		name: "React - The Complete Guide (incl. Next.js, Redux)",
		image: UdemyLogo,
		link: "https://www.udemy.com/certificate/UC-ce4f78ce-370a-42c1-83da-7e99661845bb/",
	},
	{
		name: "The Complete Web Development Bootcamp",
		image: UdemyLogo,
		link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0b3eac78-7c09-4873-b3c0-023a7151420d.pdf",
	},
	// {
	// 	name: "Azure Fundamentals - AZ900",
	// 	image: UdemyLogo,
	// 	link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0b3eac78-7c09-4873-b3c0-023a7151420d.pdf",
	// },
];

export default function Certifications() {
	return (
		<div
			className="relative rounded-md lg:border-1 border-dashed border-gray-400 flex flex-col p-2 
                        sm:p-3 lg:p-4 w-full max-w-full min-w-0 my-4 mx-0 lg:m-0 min-h-0 overflow-x-hidden 
                        lg:overflow-visible box-border justify-center items-center"
		>
			<SectionHeading title="Certifications" />

			<div className="flex flex-col gap-2">
				{CERTIFICATES.map((cert, i) => (
					<div
						key={i}
						className="flex gap-2 items-center bg-[#E5D9F2] rounded-md p-2 hover:bg-[#2D2D2D] hover:text-[#FFF] transition-all duration-300
						"
					>
						<img
							src={cert.image}
							alt={cert.name}
							className="w-20 h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-36 lg:h-36 object-contain"
						/>
						<a
							href={cert.link}
							target="_blank"
							rel="noopener noreferrer"
							className="body-text text-2xl"
						>
							{cert.name}
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
