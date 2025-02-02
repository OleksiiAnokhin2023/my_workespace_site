// Select all elements with the class 'tag_2'
const tags = document.querySelectorAll<HTMLDivElement>('.tag_2');

// Loop through each element and add event listeners
tags.forEach(tag => {

    // Add a click event listener to navigate to the URL specified in the data-url attribute
    tag.addEventListener('click', () => {
        const targetUrl = tag.getAttribute('data-url');
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});
const header = document.querySelector('header h1');
const headerClone = document.querySelector('.header_clone');
function HeadrClick(e: Event){
    e.preventDefault();
    let siteUrl= "index.html";
    if (e.currentTarget === headerClone) {
         siteUrl = "../index.html";
    }

    window.location.href = siteUrl;

}
if (header){
    header.addEventListener('click',HeadrClick);
}
if (headerClone){
    headerClone.addEventListener('click',HeadrClick);
}