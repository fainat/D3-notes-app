d3.select('.remove')
.on("click", function () {
    d3.selectAll(".note")
        .remove();
    snackbar(false, "Sooory, I am removed your tasks!?#");
    setTimeout(() => {
        snackbar(true);
    }, 2000);
});
d3.select(".lucky")
.on("click", function () {
    d3.selectAll(".note")
        .style("font-size", function () {
            return Math.random() * 100 + 'px';
        });
});

const input = d3.select('input');
const preview = d3.select(".type-archive");

d3.select('#new-note').on('submit', function (evt) {
// snackbar(true); //that's it wrong way
setPreview(); //that's true
evt.preventDefault();
if (input.property("value") !== ""){
    d3.select('.list')
        .append('p')
        .classed('note', true)
        .text(input.property("value"));
    input.property("value", "");
} else {
    snackbar(false, "UhOh input is empty, please try someone texts!!!");
    setTimeout(() => {
        snackbar(true);
    }, 2000);
}
});

input.on("input", function (evt) {
let note = evt.target.value;
preview.text(note)
    .classed('hide', note === "");
setPreview(note);
//snackbar(false, note);
});
function setPreview(val) {
preview.text(val)
    .classed('hide', val === "");
}
function snackbar(bln, text = "") {
d3.select('.type-archive')
    .classed('hide', bln)
    .text(text);
}