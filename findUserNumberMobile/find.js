const number = document.querySelector(".number"),
	  win = document.querySelector("#win"),
	  buttons = document.querySelectorAll("button"),
	  btnLess = buttons[0],
	  btnWin = buttons[1],
	  btnMore = buttons[2];

let max = 1000,
	mid = Math.floor(max / 2),
	min = 0,
	counter = 0;

number.innerHTML = mid;

btnLess.addEventListener("click", () => {
	max = mid - 1;
	mid = Math.floor((max + min) / 2);
	number.innerHTML = mid;
	counter++;
	console.log(min);
	console.log(mid);
	console.log(max);
});

btnWin.addEventListener("click", () => {
	if (counter > 0) {
		win.innerHTML = `УГАДАЛ ЗА <br>${counter} ${createWordEnd(counter)}`;
		max = 1000;
		mid = Math.floor(max / 2);
		min = 0;
		counter = 0;
	}
});

btnMore.addEventListener("click", () => {
	min = mid + 1;
	mid = Math.floor((max + min) / 2);
	number.innerHTML = mid;
	counter++;
	console.log(min);
	console.log(mid);
	console.log(max);
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
    
