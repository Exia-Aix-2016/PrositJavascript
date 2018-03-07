import { Observable } from "rxjs";

let input = document.getElementById("input");
let output = document.getElementById("output");

Observable.fromEvent(input, "input")
    .debounceTime(500)
    .map(() => "http://127.0.0.1:3000/search/" + input.value.replace(" ", "+"))
    .switchMap(url =>
        Observable.fromPromise(
            fetch(url, {
                mode: "cors",
            })
        )
    )
    .switchMap(response => Observable.fromPromise(response.json()))
    .subscribe(sugs => {
        console.log(sugs);
        output.innerHTML = sugs.reduce((acc, sug) => {
            acc += `<li>${sug.word}</li>`;
            return acc;
        }, "");
    });
