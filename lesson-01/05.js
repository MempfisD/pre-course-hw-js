// Составь программу для let rule = "Еще не родился тот человек, который, поставил бы цель, и не смог бы стать программистом."
// Используй конструкцию switch case:
// если в строке знаков меньше 25 выдай в консоль "Все таки нет правил без исключения"
// и если больше 25 "У меня 100 пудов все получится", а если ровно 25, то «50 на 50»

let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

switch (true) {
	case rule.length < 25:
		console.log("Все таки нет правил без исключения");
		break;
	case rule.length > 25:
		console.log("У меня 100 пудов все получится");
		break
	case rule.length === 25:
		console.log("«50 на 50»");
		break
	default:
		console.log("Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.");
		break

}
