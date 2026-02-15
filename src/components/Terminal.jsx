import "./Terminal.css";

const Terminal = () => {
	return (
		<div className="m-24">
			<div className="relative terminal backdrop-blur-[2px] lg:mx-60 text-left mt-32 lg:mt-20 md:mt-8 sm:-mt-12 xs:scale-100 xs:-mx-4 xs:-mt-20 scale-[1.8] md:scale-[1.6]  sm:scale-[1.2]">
				<div className="terminal__task-bar">
					<span className="terminal__circle terminal__circle--red md:mx-0.5 md:my-2 sm:mx-0.5 sm:my-2 xs:mx-0.5 xs:mb-1 lg:mx-1 lg:my-2 hover:opacity-80"></span>
					<span className="terminal__circle terminal__circle--yellow md:mx-0.5 md:my-2 sm:mx-0.5 sm:my-2 xs:mx-0.5 xs:mb-1 lg:mx-1 lg:my-2 hover:opacity-80"></span>
					<span className="terminal__circle terminal__circle--green md:mx-0.5 md:my-2 sm:mx-0.5 sm:my-2 xs:mx-0.5 xs:mb-1 lg:mx-1 lg:my-2  hover:opacity-80"></span>
					<span className="fixed lg:mx-12 sm:mx-28 xs:mx-8 md:mx-24 text-white text-xs scale-75 xs:mt-0 mt-1.5 ">
						portfolio_terminal_script.scpt
					</span>
				</div>
				<div className="terminal__window py-1 lg:-mt-0 sm:-mt-0.5 lg:max-h-48 lg:text-md lg:leading-7 md:max-h-36 md:text-md md:leading-5 sm:max-h-64 sm:text-md sm:leading-9 xs:max-h-72 xs:text-base xs:leading-6">
					{/* <p className="terminal__prompt">{">> "} <span className="terminal__prompt--typing "><span className="cover cover--gimme-dev"></span>Loading background.......................</span></p> */}
					<p className="terminal__prompt">
						${" "}
						<span className="terminal__prompt--typing ">
							<span className="cover cover--gimme-dev"></span>
							console.log(skills(aayush));
						</span>
					</p>
					<p className="terminal__prompt terminal__prompt--checkout">
						{">> "} Node.js, React, Express.js, MongoDB,
						Docker...........{" "}
						<span className="terminal__window--highlight"></span>
					</p>
					<p className="terminal__prompt terminal__prompt--show-contact">
						${" "}
						<span className="terminal__prompt--typing">
							<span className="cover cover--show-contact"></span>
							console.log(contact_details(aayush));
						</span>
					</p>

					<p className="terminal__prompt terminal__prompt--mail">
						{">> "}E-mail:{" "}
						<span className="terminal__window--highlight hover:underline">
							<a
								href="mailto:aayushrastogi1997@gmail.com"
								target="_blank"
							>
								aayushrastogi1997@gmail.com
							</a>
						</span>
					</p>
					<p className="terminal__prompt terminal__prompt--github">
						Github:{" "}
						<span className="terminal__window--highlight hover:underline">
							<a
								href="https://github.com/codethat19"
								target="_blank"
							>
								https://github.com/codethat19
							</a>
						</span>
					</p>
					<p className="terminal__prompt terminal__prompt--linkedin">
						Linkedin:{" "}
						<span className="terminal__window--highlight hover:underline">
							<a
								href="https://www.linkedin.com/in/aayush-rastogi/"
								target="_blank"
							>
								https://www.linkedin.com/in/aayush-rastogi/
							</a>
						</span>
					</p>
				</div>
			</div>
			{/* <script src="scripts/index.js"></script> */}
		</div>
	);
};

export default Terminal;
