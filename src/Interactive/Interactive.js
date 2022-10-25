import stileDiv from "./interactive.module.css";

function createHtmlElement(elem, text, className, atrName, atrValue) {
	let element = elem;

	if (typeof element === 'string') {
		console.log(typeof element);
		element = document.createElement(elem);
		text ? element.innerText = text : null;
		className ? element.classList.add(...className) : null;
		atrName ? element.setAttribute(atrName, atrValue) : null;
		console.log(element);

		return element

	} else if (typeof element === 'object') {
		console.log(typeof element);
		let nextElem = element
		// nextElem.removeAttribute("key");
		// let value = randomKey();
		// nextElem.setAttribute("key", value);
		console.log(nextElem);

		return nextElem;
	}
}

function randomKey() {
	let key = (Math.random() * 90000000).toString(16);
	return key
}

const Interactive = () => {
	const body = document.body;
	let div = createHtmlElement(
		"div",
		"Karo jan shnavor axpers",
		[stileDiv.divStyle, stileDiv.colorStile]
	)

	let div2 = createHtmlElement(div)

	body.append(div);
	// body.append(div2);
};

export default Interactive;