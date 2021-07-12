// GET THE DATA OF THE RICHEST PEOPLE VIA THE API
function getData() {
    return fetch('https://forbes400.herokuapp.com/api/forbes400?limit=20')
    .then(response => response.json())
    .then(data => {
        return data;
    });
}


// SHOW THE DATA ON THE WEBPAGE
function showData(lists) {
    let listsContainer = document.querySelector('.boxes');
    let listEL = '';

    lists.forEach((list) => {
        const currentDate = new Date().getFullYear();
            date = list.birthDate;
            listDate = new Date(date).getFullYear();
            age = currentDate - listDate;


        listEL += `
            <div class="box">
                <div>
                    <span>s/n</span>
                    ${list.rank}.
                </div>
                <div>
                    <span>Name</span>
                    ${list.person.name}
                </div>
                <div>
                    <span>Net Worth</span>
                    ${list.finalWorth}
                </div>
                <div>
                    <span>Age</span>
                    ${age}
                </div>
                <div>
                    <span>Gender</span>
                    ${list.gender}
                </div>
                <div>
                    <span>Residence</span>
                    ${list.countryOfCitizenship}
                </div>
                <div>
                    <span>Source</span>
                    ${list.source}
                </div>
            </div>
        `
    });

    listsContainer.innerHTML = listEL;
}

getData().then(data => {
    showData(data);
});

{/* <div class="box">
<div>${list.rank}</div>
<div>${list.person.name}</div>
<div>${list.finalWorth}</div>
<div>${age}</div>
<div>${list.gender}</div>
<div>${list.countryOfCitizenship}</div>
<div>${list.source}</div>
</div> */}