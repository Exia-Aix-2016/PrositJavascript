let input = document.getElementById("input");
let output = document.getElementById("output");

Rx.Observable.fromEvent(input, "input")
    .debounceTime(500)
    .map(() => "http://127.0.0.1:3000/search/" + input.value.replace(" ", "+"))
    .switchMap(url =>
        Rx.Observable.fromPromise(
            fetch(url, {
                mode: "cors",
            })
        )
    )
    .switchMap(response => Rx.Observable.fromPromise(response.json()))
    .subscribe(sugs => {
        console.log(sugs);
        output.innerHTML = sugs.reduce((acc, sug) => {
            acc += `<li>${sug.word}</li>`;
            return acc;
        }, "");
    });
