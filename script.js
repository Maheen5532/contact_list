const contactArray = [
    {
        Id : 1,
        name : "Maheen",
        gmail : "Veil432@gmail.com"
    },
    {
        Id : 2,
        name : "Ramla",
        gmail : "whisper9@gmail.com"
    },
    {
        Id : 3,
        name : "Sadaf",
        gmail : "shadow75@gmail.com"
    },
    {
        Id : 4,
        name : "Naba",
        gmail : "heyoo565@gamil.com"
    }
];

function renderContacts(contactArray){
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";
    for (const contact of contactArray){
        const contactDiv = document.createElement('div');
        contactDiv.className = "contact";
        contactDiv.innerHTML =`
        <p>${contact.Id}</p>
        <b>${contact.name}</b>
        <p>${contact.gmail}</p>
        `;
    
        contactList.appendChild(contactDiv);
    
    }
}


function filterContact(){
 const filterinput = document.getElementById("filter-input").value.toLowerCase();
 const filterContacts = contactArray.filter((contact) =>
 contact.name.toLowerCase().includes(filterinput)
 );
 renderContacts(filterContacts)
}

renderContacts(contactArray);
document.getElementById('filter-btn').addEventListener('click', filterContact)