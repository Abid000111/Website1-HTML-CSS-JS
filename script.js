let row = document.querySelectorAll(".row");

row.forEach(function (val) {
	console.log(val.childNodes);
	val.addEventListener("mouseenter", function () {
		val.style.backgroundColor = "red";
		val.childNodes[1].style.color = "black";
		val.childNodes[3].style.opacity = 1;
	});

	val.addEventListener("mousemove", function (dets) {
		val.childNodes[3].style.left = dets.x + "px";
	});

	val.addEventListener("mouseleave", function () {
		val.style.backgroundColor = "transparent";
		val.childNodes[1].style.color = "white";
		val.childNodes[3].style.opacity = 0;
	});
});

// let rowImg = document.querySelectorAll("img");

// for (let line = 0; line < row.length; line++) {
// 	row[line].addEventListener("mousemove", function (dets) {
// 		console.log(dets);
// 		rowImg[line].style.left = dets.x + "px";
// 		rowImg[line].style.top = dets.y + "px";
// 	});
// }

// let row = document.querySelector("#row1");
// let rowImg = document.querySelector("#row1 img");

// // for (let line = 0; line < row.length; line++) {
// row.addEventListener("mousemove", function (dets) {
// 	console.log(dets);
// 	rowImg.style.left = dets.x + "px";
// 	rowImg.style.top = dets.y + "px";
// });
// // };

// row.addEventListener("mouseenter", function () {
// 	rowImg.style.opacity = 1;
// });

// row.addEventListener("mouseleave", function () {
// 	rowImg.style.opacity = 0;
// });
