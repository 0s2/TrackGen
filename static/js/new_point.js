function handle_select(select) {
	select.setAttribute("data-selected", select.value);
	select.addEventListener("change", () => {
		select.setAttribute("data-selected", select.value);
	});
}
document.querySelectorAll("select").forEach(select => handle_select(select));


document.getElementById("new-point").addEventListener("click", () => {
	const inputs = document.getElementById("inputs");
	let new_inputs = document.querySelectorAll(".point");
	new_inputs = new_inputs[new_inputs.length-1].cloneNode(true);
	new_inputs.children[1].children[0].value = "";
	new_inputs.children[2].children[0].value = "";
	new_inputs.children[3].children[0].value = "";

	const latitude_select = new_inputs.children[1].children[1];
	latitude_select.value = latitude_select.getAttribute("data-selected");
	handle_select(latitude_select);

	const longitude_select = new_inputs.children[2].children[1];
	longitude_select.value = longitude_select.getAttribute("data-selected");
	handle_select(longitude_select);

	const speed_select = new_inputs.children[3].children[1];
	speed_select.value = speed_select.getAttribute("data-selected");
	handle_select(speed_select);

	const stage_select = new_inputs.children[4].children[0];
	stage_select.value = stage_select.getAttribute("data-selected");
	handle_select(stage_select);

	inputs.appendChild(new_inputs);
	new_inputs.scrollIntoView();
});