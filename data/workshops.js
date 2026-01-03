/*README

En este archivo se encuentran los eventos científicos organizados por el grupo GOYA.
Para añadir nuevos eventos, seguir las instrucciones al principio de la lista.

Revisiones sucesivas:
- Creación del archivo y puesta en marcha de la web: Diciembre 2025 por Juan Antonio Villegas Recio.

Fecha de la última actualización: 2025-12-18

*/

var workshops = [

/* Para añadir un nuevo workshop, copiar y pegar el siguiente bloque y rellenar los campos correspondientes:

    {
        name: "Nombre del evento",
        startDate: "AAAA-MM-DD",
        endDate: "AAAA-MM-DD",
        location: "Lugar en el que se celebra",
        organizers: "Organizadores y organizadores del evento",
        website_link: "Enlace al sitio web del evento",
        invited_speakers: [
            {
                speaker: "Nombre del ponente",
                university: "Universidad del ponente",
                title: "Título de la ponencia (opcional)"
            },
            // Más ponentes si los hay y separados por comas
        ]
    },
*/

    {
        name: "IMAG - OPSFA17: IMAG Conference on Orthogonal Polynomials, Special Functions and Applications",
        startDate: "2024-06-24", 
        endDate: "2024-06-28",
        location: "Science Faculty - Universidad de Granada.",
        organizers: "Antonia M. Delgado, Lidia Fernández, Teresa E. Pérez, Miguel A. Piñar, Joaquín Sánchez-Lara",
        website_link: "https://opsfa17.ugr.es/",
        invited_speakers: [
            {
                speaker: "Rabia Aktas Karaman",
                university: "Ankara University, Turkey"
            },
            {
                speaker: "Marco Bertola",
                university: "Concordia University, Canada"
            },{
                speaker: "Claude Brezinski",
                university: "University of Lille, France"
            },{
                speaker: "Annie Cuyt",
                university: "University of Antwerp, Belgium"
            },{
                speaker: "Benjamin Eichinger",
                university: "TU Wien, Austria"
            },{
                speaker: "Ujué Etayo",
                university: "Universidad de Cantabria, Spain"
            },{
                speaker: "Andrei Martínez-Finkelshtein",
                university: "Baylor University, USA and Universidad de Almería, Spain"
            },{
                speaker: "Inés Pacharoni",
                university: "CIEM-FaMAF, Universidad Nacional de Cordoba, Argentina"
            },{
                speaker: "Aron Wennman",
                university: "KU Leuven (Belgium)"
            }
        ]
    },
    {
        name: "D2PO: Dos días sobre Polinomios Ortogonales",
        startDate: "2022-11-10", 
        endDate: "2022-11-11",
        location: "Carmen de la Victoria - Universidad de Granada.",
        organizers: "Antonia M. Delgado, Lidia Fernández, Clotilde Martínez, Teresa E. Pérez, Miguel A. Piñar, Joaquín Sánchez-Lara",
        website_link: "https://www.ugr.es/~goya/D2PO2022/",
        invited_speakers: [
            {
                speaker: "Amílcar Branquinho",
                university: "Universidade de Coimbra, Portugal",
                title: "Applications of quadratic decomposition for bivariate orthogonal polynomials"
            },
            {
                speaker: "María José Cantero",
                university: "Universidad de Zaragoza",
                title: "Wall polynomials: a tool for Khrushchev's formula"
            },
            {
                speaker: "Mirta M. Castro Smirnova",
                university: "Universidad de Sevilla",
                title: "Time-and-band limiting for matrix valued orthogonal polynomials"
            },
            {
                speaker: "Carmen Escribano",
                university: "Universidad Politécnica de Madrid",
                title: "Autovalores generalizados de matrices de momentos, densidad polinomial y soportes de medidas."
            },
            {
                speaker: "Chelo Ferreira",
                university: "Universidad de Zaragoza",
                title: "Convergent and asymptotic expansions of Laplace transforms"
            },
            {
                speaker: "María Ángeles García Ferrero",
                university: "Universidad de Barcelona",
                title: "Exceptional Jacobi polynomials"
            },
            {
                speaker: "Fátima Lizarte",
                university: "Universidad de Cantabria",
                title: "Sobre la energía logarítmica mínima en la 2-esfera"
            },
            {
                speaker: "Juan Francisco Mañas",
                university: "Universidad de Almería",
                title: "Asintótica tipo Mehler--Heine para diferentes familias de polinomios ortogonales"
            },
            {
                speaker: "Misael E. Marriaga",
                university: "Universidad Rey Juan Carlos",
                title: "Zernike-Sobolev polynomials and orthogonal expansions on the unit ball."
            },
            {
                speaker: "Francisco Marcellán",
                university: "Universidad Carlos III de Madrid",
                title: "Polinomios ortogonales asociados a truncamientos de la distribución normal"
            },
            {
                speaker: "Ramón Orive",
                university: "Universidad de La Laguna",
                title: "From Orthogonal Polynomials to Riesz Equilibrium Problems. The case of unbounded conductors"
            },
            {
                speaker: "Joaquim Ortega Cerdà",
                university: "Universidad de Barcelona",
                title: "Desigualdades hipercontractivas de polinomios"
            }
        ]
    },
    {
        name: "D2PO: Dos días sobre Polinomios Ortogonales",
        startDate: "2018-12-03", 
        endDate: "2018-12-04",
        location: "ETSIE - Universidad de Granada.",
        organizers: "Antonia M. Delgado, Lidia Fernández, Teresa E. Pérez, Miguel A. Piñar",
        website_link: "https://www.ugr.es/~goya/D2PO2018/img/poster-d2po.pdf",
        invited_speakers: [
            {
                speaker: "Manuel Alfaro",
                university: "Universidad de Zaragoza",
                title: "Polinomios ortogonales en España: Los inicios"
            },
            {
                speaker: "Iván Area",
                university: "Universidad de Vigo",
                title: "Polinomios ortogonales en varias variables sobre redes no uniformes"
            },
            {
                speaker: "Carlos Beltrán",
                university: "Universidad de Cantabria",
                title: "Polinomios ortogonales para la distribución de puntos en variedades"
            },
            {
                speaker: "Cleonice F. Bracciali",
                university: "UNESP, Brasil",
                title: "Different ways to study properties of orthogonal polynomials on the unit circle"
            },
            {
                speaker: "Ruymán Cruz Barroso",
                university: "Universidad de La Laguna",
                title: "Álgebra Lineal Numérica para Funciones Racionales Ortogonales"
            },
            {
                speaker: "Francisco Marcellán",
                university: "Universidad Carlos III de Madrid",
                title: "Coherencia de pares de medidas en la recta real y la circunferencia unidad. Algunas extensiones"
            },
            {
                speaker: "Judit Mínguez",
                university: "Universidad de La Rioja",
                title: "Convergencia y acotación de series de Fourier respecto a polinomios ortogonales de Sobolev"
            },
            {
                speaker: "Juan José Moreno Balcázar",
                university: "Universidad de Almería",
                title: "Asintótica de polinomios ortogonales de Sobolev discretos"
            },
            {
                speaker: "Joaquín Sánchez Lara",
                university: "Universidad de Granada",
                title: "On weakly admissible external fields"
            },
            {
                speaker: "Alagacone Sri Ranga",
                university: "UNESP, Brasil",
                title: "Complementary Romanovski-Routh polynomials"
            }
        ]
    }
    // ... más workshops
];

export { workshops };