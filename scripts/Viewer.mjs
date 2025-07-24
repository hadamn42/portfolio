export class Viewer {
    init(){
        openDoc();
    }
}

function openDoc(){
    const docLink = document.querySelectorAll(".pdflink");
    const docViewer = document.getElementById("viewer");
    const closeButton = document.getElementById("closer");
    const ul = document.getElementById("works");
    const description = document.querySelectorAll(".description");

    docLink.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            ul.id = "works-shown";
            docViewer.classList.replace("hide", "show");
            closeButton.classList.replace("hide", "show");
            
            description.forEach((p) => {
                p.classList.add("hide");
            });
            createHover();
            
            const docRef = button.href
            
            docViewer.src = docRef;

            closeBolton();

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

function closeBolton() {
    const docLink = document.querySelectorAll(".pdflink");
    const docViewer = document.getElementById("viewer");
    const closeButton = document.getElementById("closer");
    const ul = document.getElementById("works-shown");
    const description = document.querySelectorAll(".description");

    closeButton.addEventListener("click", (event)=>{
        ul.id = "works";
        docViewer.classList.replace("show", "hide");
        closeButton.classList.replace("show", "hide");
        description.forEach((p) => {
            p.classList.remove("hide");
        });

        const headsDesc = document.getElementById("welcome");
        headsDesc.innerHTML = "Welcome to my portfolio. Please click on a link to see some of my work.";

        const pieces = document.querySelectorAll(".portpieces");
        pieces.forEach((d) => {
            // const titleDesc = d.querySelector(".description");
            // const info = titleDesc.innerHTML;
            d.title = "";
            d.style.textAlign = "";
            d.style.height = "";
            d.style.display = "";
            d.style.alignItems = "";
        });
    });
}
