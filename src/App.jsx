import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

import "./App.css";

function App() {
	return (
		<div className="flex flex-col gap-10 justify-center items-center min-w-0 w-full overflow-x-hidden lg:overflow-visible py-6">
			<Header />
			{/* <hr className="text-sm text-gray-600 w-auto border-dashed"></hr> */}
			<div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-start gap-4 lg:gap-12 w-full min-w-0 px-6 sm:px-6 lg:px-0 lg:w-2/3 max-w-6xl">
				<div className="w-full flex flex-col gap-4">
					<Skills />
					<Certifications />
				</div>
				<Projects />
			</div>
			<Experience />
		</div>
	);
}

export default App;
