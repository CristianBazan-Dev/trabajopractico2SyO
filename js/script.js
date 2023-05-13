window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var simsAnim = document.querySelector(".sims-anim")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
      simsAnim.classList.add("active")
    } else {
      reveals[i].classList.remove("active");
      simsAnim.classList.remove("active")
    }
  }
}

const modalContainer = document.getElementById("modal-skills-container");
const modal = document.getElementById("modal-skills");
const svgPJ = document.getElementById("svgPJ");
const body = document.querySelector(".body");

// Closing the modal
const closeIcon = document.querySelector(".close-icon");

const modalIcon = document.querySelector(".branch-selected");
const modalTitle = document.querySelector(".branch-title");
const modalDefinition = document.querySelector(".branch-definition");

const steps = [
  {
    id: "nolanInfo",
    title: "Richard Nolan",
    icon: "./img/Nolan-1.png",
    definition:
      "Nacido en 1940. <br> Su pensamiento impactó profundamente en la conceptualización y el rol de las disciplinas TI dentro de las empresas, debido al impacto que propiciaban en el mercado. Desde su pensamiento, se considera que se atraviesan diversos estadios que van consolidando el papel de las TI dentro de las empresas.",
  },
  {
    id: "etapa1",
    title: "Primera computadora",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1683938291/tecnicatura/syo/et-1_czbpsh.png",
    definition:
      "Comienza con la adquisición de la primera computadora y normalmente se justifica por el ahorro de mano de obra y el exceso de papeles.<br><br> Esta etapa termina con la implantación exitosa del primer Sistema de Información. Cabe recalcar que algunas organizaciones pueden vivir varias etapas de inicio en las que la resistencia al cambio por parte de los primeros Sistemas y Organizaciones usuarios involucrados aborta el intento de introducir la computadora a la empresa",
  },
  {
    id: "etapa2",
    title: "Contagio o expansion",
    icon: "https://images-prod.dazeddigital.com/2048/azure/dazed-prod/1330/3/1333874.jpeg",
    definition:
      "Se inicia con la implantación exitosa del primer Sistema de Información en la organización y con la contratación de personal especializado para ello.  <br><br>  Las aplicaciones desarrolladas carecen de interfaces automáticas entre ellas, de tal forma que las salidas que produce un sistema se tienen que alimentar en forma manual a otro sistema, con la consecuente irritación de los usuarios. ",
  },
  {
    id: "etapa3",
    title: "Control y formalización",
    icon: "https://m.media-amazon.com/images/M/MV5BNzdkMWUyZjItOGY2ZC00YjZiLWFmODMtZDgxYjUwYjEyYmM3XkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_.jpg",
    definition:
      "Se inicia con la necesidad de controlar el uso de los recursos computacionales, con el departamento de sistemas ubicado en una posición gerencial.<br><br>Se inician el desarrollo y la implantación de estándares de trabajo dentro del departamento, tales como: estándares de documentación, control de proyectos, desarrollo y diseño de sistemas, auditoría de sistemas y programación. Se integra a la organización del departamento de sistemas, personal con habilidades administrativas, y preparado técnicamente. Se inicia el desarrollo de interfaces automáticas entre los diferentes sistemas.",
  },
  {
    id: "etapa4",
    title: "Integración",
    icon: "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-anchor-628x353.png",
    definition:
      " La integración de los datos y de los sistemas surge como un resultado directo de la centralización del departamento de sistemas bajo una sola estructura administrativa. <br><br> El departamento de sistemas evolucionó hacia una estructura descentralizada, permitiendo al usuario utilizar herramientas para el desarrollo de sistemas. Los usuarios y el departamento de sistema iniciaron el desarrollo de nuevos sistemas, reemplazando los sistemas antiguos, en beneficio de la organización.",
  },
  {
    id: "etapa5",
    title: "Administración de datos",
    icon: "https://lancer.co.in/wp-content/uploads/2022/01/AMC.jpg",
    definition:
      "Resulta necesario administrar los datos en forma apropiada, es decir, almacenarlos y mantenerlos en forma adecuada para que los usuarios puedan utilizar y compartir este recurso. El usuario de la información adquiere la responsabilidad de la integridad de la misma y debe manejar niveles de acceso diferentes.",
  },
  {
    id: "etapa6",
    title: "Madurez",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1683938841/tecnicatura/syo/Big_Tech_companies-removebg-preview_t5uuo3.png",
    definition:
      "La Informática dentro de la organización se encuentra definida como una función básica y se ubica en los primeros niveles del organigrama (dirección).",
  },
];

const renderInfo = (id, name) => {
  const element = id;

  element.addEventListener("click", () => {
    modalContainer.classList.toggle("active");
    modal.classList.toggle("active");
    svgPJ.classList.toggle("active");
    window.scrollTo(0, 0);


    steps.filter((step) => {
      if (step.id == name) {
        const skillId = step.id;
        const skillIcon = step.icon;
        const skillDefinition = step.definition;
        const skillTitle = step.title;

        modalTitle.innerHTML = skillTitle;
        modalIcon.src = skillIcon;
        modalDefinition.innerHTML = skillDefinition;
      }
    });
  });

  closeIcon.addEventListener("click", () => {
    modalContainer.classList.remove("active");
    modal.classList.remove("active");
    svgPJ.classList.remove("active");
  });

  window.addEventListener("keydown", (e) => {
    if (e.keyCode == "27") {
      modalContainer.classList.remove("active");
      modal.classList.remove("active");
      svgPJ.classList.remove("active");
    }
  });
};

renderInfo(branch1, "etapa1");
renderInfo(branch2, "etapa2");
renderInfo(branch3, "etapa3");
renderInfo(branch4, "etapa4");
renderInfo(branch5, "etapa5");
renderInfo(branch6, "etapa6");
renderInfo(branchAnalysis2, "etapa2");
renderInfo(branchAnalysis1, "etapa1");
renderInfo(knowMore, "nolanInfo")


// Nolan meme 

const nolan = document.querySelector('#nolanImg')

nolan.addEventListener('mouseover', () => {
  alert("¡Auch! That hurts. ")
})