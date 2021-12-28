fetch('https://raw.githubusercontent.com/Evgen-dev1989/rest2/main/rest1.json')
    .then((res) =>res.json( ))
    .then(data =>setUkr(data)
    );

function setUkr({name,reference}) {
    document.body.insertAdjacentHTML('afterbegin',`
<h1>${name}</h1>
<div class="ref">${setRef(reference)}</div

`);
}

function setRef(reference){
    return reference.map(
        (place) => `<div>
    <h3> ${place.name} </h3>
    <p>Age: ${place.age}</p>
    <p>Location: ${place.location}</p>
    <p>Main facts:</p>
    <ul>
         ${place.facts.map((fact)=> `<li>${fact}</li>`).join(' ')}
    </ul></div>
`).join(' ');
}






