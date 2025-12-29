import { useEffect, useState } from "preact/hooks";
import MobileDivider from "./assets/pattern-divider-mobile.svg";
import DesktopDivider from "./assets/pattern-divider-desktop.svg";
import DiceButton from "./assets/icon-dice.svg";

export function App() {
	const [advice, setAdvice] = useState();

	const generateAdvice = async () => {
		const response = await fetch("https://api.adviceslip.com/advice");
		const data = await response.json();
		setAdvice(data.slip);
	};

	useEffect(async () => {
		generateAdvice();
	}, []);
	
		if (!advice)
		return (
			<main>
				<div>
					<h1>Loading...</h1>
				</div>
			</main>
		);

	return (
		<>
			<main>
				<article>
					<div>
						<h1>Advice # {advice.id}</h1>
					</div>
					<blockquote>
						<p>{advice.advice}</p>
					</blockquote>
					<img />
					<img
						src={MobileDivider}
						alt="pattern-divider-mobile"
						className="mobile-divider"
					/>
					<img
						src={DesktopDivider}
						alt="pattern-divider-desktop"
						className="desktop-divider"
					/>

					<button onClick={generateAdvice}>
						<img src={DiceButton} alt="icon-dice" />
					</button>
				</article>
			</main>
		</>
	);
}
