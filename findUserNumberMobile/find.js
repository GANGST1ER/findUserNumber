const number = document.querySelector(".number"),
	  win = document.querySelector("#win"),
	  buttons = document.querySelectorAll("button"),
	  btnLess = buttons[0],
	  btnWin = buttons[1],
	  btnMore = buttons[2];

let max = 1000,
	mid = Math.floor(max / 2), // рандом Math.floor(Math.random() * max)
	min = 2,
	counter = 1;

localStorage.clear();

number.innerHTML = mid;

btnLess.addEventListener("click", () => {
	if ((mid - 1) >= Math.floor(((mid - 1) + min) / 2)) {
		max = mid - 1;
		mid = Math.floor((max + min) / 2);
		number.innerHTML = mid;
		counter++;
		console.log(min);
		console.log(mid);
		console.log(max);
	}
});

btnWin.addEventListener("click", () => {
	if (counter > 0 && win.innerHTML != `УГАДАЛ ЗА <br>${counter} ${createWordEnd(counter)}`) {
		win.innerHTML = `УГАДАЛ ЗА <br>${counter} ${createWordEnd(counter)}`;
		// max = 1000;
		// mid = Math.floor(max / 2);
		// min = 2;
		// counter = 1;
		btnWin.innerHTML = "again"
	} else {
		window.location.reload();
	}
});

btnMore.addEventListener("click", () => {
	if ((mid + 1) <= Math.floor((max + (mid + 1)) / 2)) {
		min = mid + 1;
		mid = Math.floor((max + min) / 2);
		number.innerHTML = mid;
		counter++;
		console.log(min);
		console.log(mid);
		console.log(max);
	}
});

const tries = ["ПОПЫТКУ", "ПОПЫТКИ", "ПОПЫТОК"],
	  numbers = [1, 2, 5];

function createWordEnd(count) {
	if (count == 1) {
        return tries[0]
	}
    else if (2 <= count && count <= 4) {
        return tries[1]
    }
    else if (count >= 5) {
        return tries[2]
    }
}
