import React from "react";

export default function SkillCard({ skill }) {
	return (
		<div className="flex flex-col w-full min-w-0 sm:min-w-[5.5rem] lg:min-w-[4.5rem]">
			<div
				className="w-full min-w-0 hover:scale-105 lg:hover:scale-110 text-[#FFF] transition-all duration-300 bg-[#8F87F1]/70 rounded-md
								p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center gap-1 sm:gap-2 hover:bg-[#2D2D2D]"
			>
				<img
					src={skill.logo}
					alt={skill.name}
					className="w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 object-contain"
				/>
				<span className="text-xs sm:text-sm body-text text-center break-words line-clamp-2">
					{skill.name}
				</span>
			</div>
		</div>
	);
}
