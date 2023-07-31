/*
    
*/
const projetos = [
	{project_name: "[Nome de uma Novel]", img: "https://vulcannovel.com.br/wp-content/uploads/2022/12/capa-vulcan-dark-side.png", sender: "[Autor/Tradutor]", last_cap: "[Nº]", last_week: "[Nº]" },
	{project_name: "[Nome de uma Novel]", img: "https://vulcannovel.com.br/wp-content/uploads/2022/05/Arcano-Capa-Vulcan.webp", sender: "[Autor/Tradutor]", last_cap: "[Nº]", last_week: "[Nº]" },
	{project_name: "[Nome de uma Novel]", img: "https://vulcannovel.com.br/wp-content/uploads/2022/10/capa-vulcan-hadria-o-renegado.png", sender: "[Autor/Tradutor]", last_cap: "[Nº]", last_week: "[Nº]" },
	{project_name: "[Nome de uma Novel]", img: "https://vulcannovel.com.br/wp-content/uploads/2022/05/Exaltem-o-Orc-Capa-Vulcan.jpg", sender: "[Autor/Tradutor]", last_cap: "[Nº]", last_week: "[Nº]" },
	{project_name: "[Nome de uma Novel]", img: "https://vulcannovel.com.br/wp-content/uploads/1021/01/O-Tutorial-E-Tao-Dificil.png", sender: "[Autor/Tradutor]", last_cap: "[Nº]", last_week: "[Nº]" },
	{project_name: "[Nome de uma Novel]", img: "https://vulcannovel.com.br/wp-content/uploads/2022/05/Behind-Humanity-Capa-Vulcan.webp", sender: "[Autor/Tradutor]", last_cap: "[Nº]", last_week: "[Nº]" },
	{project_name: "[Nome de uma Novel]", img: "https://vulcannovel.com.br/wp-content/uploads/2022/05/Toika.png", sender: "[Autor/Tradutor]", last_cap: "[Nº]", last_week: "[Nº]" },
]

const containerCard = document.querySelector(".works-container");
const cardOriginal = document.querySelector(".projects-line");

// Remover o card original do documento
cardOriginal.remove();

projetos.forEach((project) => {
	const card = cardOriginal.cloneNode(true);

	card.querySelector(".card-info .nome-projeto").innerHTML = project.project_name;
	card.querySelector(".card-img img").src = project.img;
	card.querySelector(".sender").innerHTML = project.sender;
	card.querySelector(".last-post").innerHTML = project.last_cap;
	card.querySelector(".last-week").innerHTML = project.last_week;

	containerCard.appendChild(card);
});
