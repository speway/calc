// функция начнет работу после загрузки страницы
// когда окно загрузится, сработает функция window.onLoad
window.addEventListener("load", function OnWindowLoaded() {
	// набор кнопок в калькуляторе
	var signs = [
		"1",
		"2",
		"3",
		"+",
		"4",
		"5",
		"6",
		"-",
		"7",
		"8",
		"9",
		"/",
		"0",
		"=",
		"*",
		"c",
	];
	// форма калькулятора
	var calc = document.getElementById("calc");
	//текстарея для ввода математических выражений
	var textArea = document.getElementById("inputVal");
	6;
	// доб. кнопок к калькулятору
	signs.forEach(function (sign) {
		var signElement = document.createElement("div");
		signElement.className = "btn";
		signElement.innerHTML = sign;
		calc.appendChild(signElement);
	});
	// задействие всех кнопок калькулятора
	// добавляет обработку на кнопки калькулятора
	document.querySelectorAll("#calc-wrap .btn").forEach(function (button) {
		//доб. действие при нажатии(клике) на любую кнопку
		button.addEventListener("click", onButtonClick);
	});
	// функция клика по кнопке калькулятора
	function onButtonClick(e) {
		// е - маусивент (содержит инфу о клике (нажатии))
		if (e.target.innerHTML === "c") {
			// если нажата кнопка С то все что в поле ввода стирается
			textArea.innerHTML = "0";
		} else if (e.target.innerHTML === "=") {
			// если нажата кнопка "=", то, приведя значение
			//  в текстовом поле к javascript , вычесляет значение
			textArea.innerHTML = eval(textArea.innerHTML);
		} else if (textArea.innerHTML === "0") {
			// Если тексарея содержит в себе только "0", то
			// стереть "0" и записать
			// значения кнопки в текстовое поле (текстарее)
			textArea.innerHTML = e.target.innerHTML;
		} else {
			// Добавление значения кнопки в текстовое поле (текстарее)
			textArea.innerHTML += e.target.innerHTML;
		}
	}
});
