export default function SectionHeading({ title }) {
	/* Unrotated on mobile/tablet; rotated on left at desktop, centered vertically */

	return (
		<h1
			className="relative text-5xl sm:text-4xl section-title font-bold py-2 px-1 text-center lg:absolute 
            lg:-left-3 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
            lg:-rotate-90 lg:origin-center lg:text-5xl lg:py-0 lg:px-0 whitespace-nowrap pointer-events-none"
			aria-hidden
		>
			{title}
		</h1>
	);
}
