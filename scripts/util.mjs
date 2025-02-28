export function footerYear(){
    const date = new Date();
    const year = date.getFullYear();
    const footer = document.querySelector("footer");

    footer.innerHTML = `<p>&copy;${year} Adam Neil Humes</p>`;

}

