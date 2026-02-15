export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="w-full my-12 max-w-6xl text-center text-sm text-gray-600 body-text">
			<p>{year} Aayush Rastogi</p>
		</footer>
	);
}
