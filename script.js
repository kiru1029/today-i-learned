const initialFacts = [
    {
        id: 1,
        text: "React is being developed by Meta (formerly facebook)",
        source: "https://opensource.fb.com/",
        category: "technology",
        votesInteresting: 24,
        votesMindblowing: 9,
        votesFalse: 4,
        createdIn: 2021,
    },
    {
        id: 2,
        text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
        source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        category: "society",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
    },
    {
        id: 3,
        text: "Lisbon is the capital of Portugal",
        source: "https://en.wikipedia.org/wiki/Lisbon",
        category: "society",
        votesInteresting: 8,
        votesMindblowing: 3,
        votesFalse: 1,
        createdIn: 2015,
    },
];
const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];


// Selecting DOM elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form")
const factsList = document.querySelector(".fact-list")

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

//  Load data from Supabase - fetching data using async and await
loadFacts();
async function loadFacts() {
    const res = await fetch("https://tcjbdjrfgjdzwjcaigcq.supabase.co/rest/v1/facts", {
        headers: {
            apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjamJkanJmZ2pkendqY2FpZ2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4OTYzODMsImV4cCI6MTk5OTQ3MjM4M30.LVw4k26vbiejelpq_4_iy9sdypzyUm3efH1ksukutzs",
            authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjamJkanJmZ2pkendqY2FpZ2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4OTYzODMsImV4cCI6MTk5OTQ3MjM4M30.LVw4k26vbiejelpq_4_iy9sdypzyUm3efH1ksukutzs",
        },
    }
    );
    const data = await res.json()
    console.log(data)
    const filteredData = data.filter((fact) => fact.category == "technology");
    console.log(filteredData)
    createFactsList(data);
}



const createFactsList = (dataArray) => {
    const htmlArr = dataArray.map(
        (fact) => `<li class="fact">
        <p>
            ${fact.text}
            <a 
            class="source"
            href="${fact.source}" target="_blank">(Source)</a>
        </p>
        <span class="tag"
        style="background-color:
        ${CATEGORIES.find((category) => category.name === fact.category).color}
        ">${fact.category}
        </span>
        <div class="vote-buttons">
            <button>👍 ${fact.votesInteresting}</button>
            <button>🤯 ${fact.votesMindBlowing}</button>
            <button>⛔️ ${fact.votesFalse}</button>
        </div>
        </li>`
    );
    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
}


// Toggle form visibility
btn.addEventListener('click', () => {
    if(form.classList.contains('hidden')){
        form.classList.remove('hidden');
        btn.textContent = "Close";
    } else {
        form.classList.add('hidden');
        btn.textContent = "Share a fact"
    }
});



// const persons = [
//     {
//         name: "Khylle",
//         age: 25,
//         isMale: true
//     },
//     {
//         name: "Jewel",
//         age: 23,
//         isMale: false
//     },
// ]

// const male = persons.filter((person) => person.isMale == true);

// console.log(male[0].name)

// const female = persons.find((person) => person.name === "Jewel");
// console.log(female.isMale)
