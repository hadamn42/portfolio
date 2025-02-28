export class Viewer {
    init(){
        openDoc();
    }
}

function openDoc(){
    const docLink = document.querySelectorAll(".pdflink");
    const docViewer = document.getElementById("viewer");
    const ul = document.getElementById("works");
    const description = document.querySelectorAll(".description");

    docLink.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            ul.id = "works-shown";
            docViewer.classList.replace("hide", "show");
            description.forEach((p) => {
                p.classList.add("hide");
            });
            createHover();
            
            const docRef = button.href
            
            docViewer.src = docRef;

            const headsDesc = document.getElementById("welcome");
            headsDesc.innerHTML = "Welcome to my portfolio. Please click on a link to see some of my work. Hover on the link for a brief description.";
        })
    });
}

function createHover() {
    const description = document.querySelectorAll(".portpieces");
    description.forEach((d) => {
        const titleDesc = d.querySelector(".description");
        const info = titleDesc.innerHTML;
        d.title = info;
        d.style.textAlign = "center";
        d.style.height = "69px";
        d.style.display = "grid";
        d.style.alignItems = "center";
    });
}