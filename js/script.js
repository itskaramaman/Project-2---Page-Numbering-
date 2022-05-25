// users per page will be 10
const usersPerPage = 10;

// get user contacts
const contactItems = document.getElementsByClassName('contact-item');
// Get number of pages
const numberOfPage = Math.ceil(contactItems.length / usersPerPage);

// create html for pagination
let paginationHTML = "";
for(let i=1; i<=numberOfPage; i++) {
    paginationHTML+=`<li><a href="#" id="${i}" onclick="updatePage(${i})">${i}</a></li>`;
}
// set the inner html of pagination
document.getElementById('pagination-list').innerHTML = paginationHTML;

// load the first page 
window.addEventListener('load', (event)=>{
    updatePage(1);
});

// update the page as per pagination
function updatePage(id) {
    // get the start index and end index of users to display
    const startIndex = id * usersPerPage - 10;
    const endIndex = id * usersPerPage;

    // removing the active class 
    let activeLink = document.getElementsByClassName('active');
    if(activeLink.length > 0) {
        activeLink[0].classList.remove('active');
    }

    // adding the active clas to the pagination link clicked
    document.getElementById(id)?.classList.add('active');

    // set the list of users
    for(let i=0; i<contactItems.length; i++) {
        if(i<startIndex || i>=endIndex) {
            contactItems[i].style.display = 'none';
        } else {
            contactItems[i].style.display = 'block';
        }
    }
}


