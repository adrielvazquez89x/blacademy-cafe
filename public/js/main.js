console.log("Hello, World!");

const cafeSelection = [
    { id: "cafe1", name: "Café Brian Lara", description: "Un café moderno y fresco" },
    { id: "cafe2", name: "Café Sonic", description: "El café mas rápido que podemos hacer. Es solo café." },
    { id: "cafe3", name: "Café Express", description: "Un café con todas las weas cósmicas." },];

const socialMediaLinks = [
    { name: "Facebook", url: "https://www.facebook.com", icon: `<i class="fab fa-facebook"></i>` },
    { name: "Instagram", url: "https://www.instagram.com", icon: `<i class="fab fa-instagram"></i>` },
];

function generarNavBar() {
    const navBarContainer = document.getElementById("nav-bar-container");
    const navBar = document.createElement("nav");

    navBar.classList.add("navbar");

    cafeSelection.forEach(cafe => {
        const cafeLink = document.createElement("a");
        cafeLink.href = `#${cafe.id}`;
        cafeLink.textContent = cafe.name;
        navBar.appendChild(cafeLink);
    })

    navBarContainer.appendChild(navBar);

    console.log("NavBar generated successfully!");
}

function generarMain() {

    generarBenficios();
    generarContenidoCafe();

}

function generarContenidoCafe() {
    const mainContainer = document.getElementById("main-content");

    const cafeSection = document.createElement("section");
    cafeSection.id = "cafe-section";
    cafeSection.classList.add("cafe-section");

    cafeSelection.forEach(cafe => {
        const cafeDiv = document.createElement("div");
        cafeDiv.id = cafe.id;
        cafeDiv.classList.add("container", "cafe-div");
        cafeDiv.innerHTML = `
                                <div>
                                    <h2>${cafe.name}</h2>
                                    <p>${cafe.description}</p>
                                </div>
                                <div class="cafe-img-container">
                                    <img src="./img/${cafe.id}.png" alt="${cafe.name}" />
                                </div>

                            `;
        //cafeDiv.appendChild(document.createElement("img")).src = `./img/${cafe.id}.png`;

        cafeSection.appendChild(cafeDiv);
    })

    mainContainer.appendChild(cafeSection);
    console.log("Main content generated successfully!");
}

function generarBenficios() {
    const mainContainer = document.getElementById("main-content");
    const beneficiosSection = document.createElement("section");
    beneficiosSection.id = "beneficios";
    beneficiosSection.classList.add("beneficios");

    beneficiosSection.innerHTML = `<div class="container beneficios-container">
                                        <div>
                                            <img src="./img/beneficios.png" alt="Beneficios del café" />
                                        </div>
                                        <div>
                                            <h2> Beneficios de nuestro café</h2>
                                            <p>
                                                El café es una bebida estimulante que mejora la concentración, el estado de alerta y el rendimiento físico. Rico en antioxidantes, puede reducir el riesgo de enfermedades como el Parkinson y la diabetes tipo 2. Consumido con moderación, es saludable.
                                                Además, favorece el metabolismo y puede ayudar en la quema de grasas. Su consumo regular se asocia a un menor riesgo de depresión. También mejora el ánimo y la función cognitiva. Es ideal para comenzar el día con energía y enfoque.
                                                Tomado sin azúcar ni excesos, puede formar parte de una alimentación equilibrada. Existen estudios que relacionan el café con una mayor longevidad. Su aroma reconforta, su sabor despierta, y su efecto es casi ritual en millones de personas cada mañana.
                                            </p>
                                        </div>

                                    </div>`;
    //beneficiosSection.appendChild(document.createElement("img")).src = `./img/beneficios.png`;
    mainContainer.appendChild(beneficiosSection);
}
function generarFooter() {
    const footerContainer = document.getElementById("footer-container");
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const socialWrapper = document.createElement("div");
    socialWrapper.classList.add("footer__social");

    socialMediaLinks.forEach(social => {
        const socialLink = document.createElement("a");
        socialLink.href = social.url;
        socialLink.innerHTML = social.icon;
        socialLink.target = "_blank";
        socialLink.classList.add("footer__icon");
        socialWrapper.appendChild(socialLink);
    });

    const copyright = document.createElement("p");
    copyright.classList.add("footer__copyright");
    copyright.textContent = "© 2023 Café Express. Todos los derechos reservados.";

    footer.appendChild(socialWrapper);
    footer.appendChild(copyright);
    footerContainer.appendChild(footer);
}


generarNavBar();
generarMain();
generarFooter();
