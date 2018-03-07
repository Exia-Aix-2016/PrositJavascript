let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("input", async () => {
    let url = "http://127.0.0.1:3000/search/" + input.value.replace(" ", "+");

    console.log(url);

    let response = await fetch(url, {
        mode: "cors",
    });

    console.log(response);

    let sugs = await response.json();

    console.log(sugs);

    output.innerHTML = sugs.reduce((acc, sug) => {
        acc += `<li>${sug.word}</li>`;
        return acc;
    }, "");
});
