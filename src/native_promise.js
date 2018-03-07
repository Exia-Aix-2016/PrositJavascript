let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("input", () => {
    let url = "http://127.0.0.1:3000/search/" + input.value.replace(" ", "+");

    console.log(url);

    fetch(url, {
        mode: "cors",
    })
        .then(response => response.json())
        .then(sugs => {
            output.innerHTML = sugs.reduce((acc, sug) => {
                acc += `<li>${sug.word}</li>`;
                return acc;
            }, "");
        });
});
