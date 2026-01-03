/*README

En este archivo se encuentran los distintos seminarios GOYA organizados a lo largo de los años.
Para añadir nuevos seminarios, seguir las instrucciones al principio de la lista.

Revisiones sucesivas:
- Creación del archivo y puesta en marcha de la web: Diciembre 2025 por Juan Antonio Villegas Recio.

Fecha de la última actualización: 2025-12-18

*/

const seminars = [

    // ─── Seminarios y conferencias recientes ──────────────────────────────────────────────

    /* Para añadir un nuevo seminario, copiar y pegar este bloque y rellenar los datos
    {
        title: "Título del seminario (opcional)", // Si no se especifica, se usará "Seminario GOYA del día ..."
        date: "YYYY-MM-DD", // Importante: Usar formato ISO para fácil manejo: YYYY-MM-DD
        time: "HH:MM",
        location: "Lugar del seminario",
        links: {
            info: "Enlace con más información sobre el seminario",
            foto: "Enlace a una foto del seminario (opcional)",
            ... // Otros enlaces relevantes
        },
        conferences: [
            {
                speaker: "Nombre del ponente",
                title: "Título de la conferencia",
                link: "Enlace al resumen o material adicional (opcional)"
            }
            // Más conferencias si las hay y separadas por comas
        ]
    },
    
    
    */

    {
        date: "2025-09-11", // Importante: Usar formato ISO para fácil manejo: YYYY-MM-DD
        time: "11:30",
        location: "Seminario 2 IMAG - Instituto de Matemáticas (UGR)",
        links: {
            info: "https://wpd.ugr.es/~imag/events/event/seminario-del-grupo-goya/"
        },
        conferences: [
            {
                speaker: "Rabia Aktas-Karaman. Ankara University. Turkey",
                title: "Fourier transforms of orthogonal polynomials on the cone and on the paraboloid."
            },
            {
                speaker: "Miguel Piñar. Universidad de Granada.",
                title: "A fully diagonalized spectral method on the unit ball"
            }
        ]
    },
    {
        date: "2025-06-13", // Importante: Usar formato ISO para fácil manejo: YYYY-MM-DD
        time: "11:30",
        location: "Seminario 1 IMAG - Instituto de Matemáticas (UGR)",
        links: {
            info: "https://wpd.ugr.es/~imag/events/event/zonal-function-networks-super-resolution-approach/"
        },
        conferences: [
            {
                speaker: "Juan Antonio Villegas Recio. Universidad de Granada.",
                title: "Zonal Function Networks: Super-Resolution approach.",
                link: "https://wpd.ugr.es/~imag/events/event/zonal-function-networks-super-resolution-approach/"
            },
            {
                speaker: "Plamen Iliev. Georgia Institute of Technology. USA.",
                title: "Bivariate Bernstein-Szego polynomials."
            }
        ]
    },
    {
        date: "2024-04-03", // YYYY-MM-DD para facilitar la agrupación
        time: "12:30",
        location: "Aula A-13, Facultad de Ciencias (UGR)",
        links: {
            info: "https://fciencias.ugr.es/34-noticias/4431-seminario-del-grupo-goya"
        },
        conferences: [
            {
                speaker: "Chelo Ferreira. Universidad de Zaragoza.",
                title: "Técnicas de Mellin de aproximación asintótica: aplicación a la Elastodinámica.",
                link: "https://wpd.ugr.es/~imag/cms/wp-content/uploads/resumen_sem_abril24.pdf"
            },
            {
                speaker: "Juan Antonio Villegas Recio. Universidad de Granada.",
                title: "Avances en la generalización de la ortogonalidad múltiple al caso bivariado.",
                link: "https://wpd.ugr.es/~imag/cms/wp-content/uploads/abstract_b.pdf"
            }
        ]
    },
    {
        date: "2023-01-26", // YYYY-MM-DD para fácil manejo
        time: "12:30",
        location: "Seminario 2 IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "https://wpd.ugr.es/~imag/es/events/event/seminario-goya-jovenes-investigadores/"
        },
        conferences: [
            {
                speaker: "Glalco S. Costa. Universidade Federal do Triângulo Mineiro, Brazil.",
                title: "Bivariate Freud Weight Function and a Similar Matricial Painlevé Equation."
            },
            {
                speaker: "Marlon J. Recarte. Universidad Nacional Autónoma de Honduras.",
                title: "Operadores tipo Bernstein basados en el producto escalar de Jacobi."
            }
        ]
    },
    {
        date: "2022-04-29", // YYYY-MM-DD
        time: "13:00",
        location: "Seminario 2 IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "https://wpd.ugr.es/~imag/events/event/orthogonal-polynomi...surfaces-and-domains/"
        },
        conferences: [
            {
                speaker: "Yuan Xu. University of Oregon.",
                title: "Orthogonal polynomials on quadratic surfaces and domains.",
                link: "https://wpd.ugr.es/~imag/events/event/orthogonal-polynomi...surfaces-and-domains/"
            }
        ]
    },
    {
        date: "2022-03-17", // YYYY-MM-DD
        time: "10:00",
        location: "Sala de Conferencias IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "http://wpd.ugr.es/~imag/events/event/an-introduction-to-sobolev-orthogonal-polynomials-theory-and-applications/"
        },
        conferences: [
            {
                speaker: "Francisco Marcellán. Universidad Carlos III de Madrid.",
                title: "Una introducción a los polinomios ortogonales de Sobolev. Teoría y aplicaciones.",
                link: "http://wpd.ugr.es/~imag/events/event/an-introduction-to-sobolev-orthogonal-polynomials-theory-and-applications/"
            }
        ]
    },
    {
        date: "2022-02-17", // YYYY-MM-DD
        time: "17:00",
        location: "Seminario 1 del IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "http://wpd.ugr.es/~imag/events/event/doble-conferencia-organizada-por-el-grupo-goya/",
            foto: "https://www.ugr.es/~goya/20220217_seminario.jpg"
        },
        conferences: [
            {
                speaker: "Juan José Moreno Balcázar. Universidad de Almería.",
                title: "Polinomios ortogonales tipo Sobolev: asintótica y computación."
            },
            {
                speaker: "Ruyman Cruz Barroso, Universidad de La Laguna.",
                title: "Polinomios cuasi-paraortogonales y cuadratura positiva."
            }
        ]
    },
    {
        date: "2021-12-10", // YYYY-MM-DD
        time: "18:00",
        location: "Seminario 1 del IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "https://wpd.ugr.es/~iemath/es/events/event/seminario-goya-4/"
        },
        conferences: [
            {
                speaker: "Miguel A. Piñar, Universidad de Granada.",
                title: "On Symmetric Orthogonal Polynomials."
            },
            {
                speaker: "Ana Foulquié, Universidade de Aveiro (Portugal).",
                title: "Random walks through multiple orthogonal polynomials."
            }
        ]
    },
    {
        date: "2021-10-29", // YYYY-MM-DD
        time: "17:00",
        location: "Seminario 2 del IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "https://wpd.ugr.es/~iemath/events/event/seminario-goya-3/",
            foto: "https://www.ugr.es/~goya/Seminario_21_10_28.png"
        },
        conferences: [
            {
                speaker: "Cleonice F. Bracciali, UNESP - Universidade Estadual Paulista (Brazil).",
                title: "A class of Sobolev orthogonal polynomials on the unit circle and associated continuous dual Hahn polynomials"
            },
            {
                speaker: "Luis E. Garza, Universidad de Colima (México).",
                title: "Orthogonal polynomials: some applications related to the stability of linear systems."
            }
        ]
    },
    {
        date: "2021-07-16", // 16 de julio de 2021
        time: "12:00",
        location: "Seminario de la primera planta del IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "https://wpd.ugr.es/~iemath/events/event/una-introduccion-a-la-distribucion-de-claves-cuanticas/",
            meet: "https://meet.google.com/kms-mnoc-war",
            link: "https://www.ugr.es/~goya/Marriaga_crypto_espanol.pdf"
        },
        conferences: [
            {
                speaker: "Misael E. Marriaga Castillo. Universidad Rey Juan Carlos.",
                title: "Una introducción a la distribución de claves cuánticas"
            }
        ]
    },
    {
        title: "D1PO: Un día de Polinomios Ortogonales",
        date: "2021-05-28", // 28 de mayo de 2021
        time: "12:00 - 18:00", // Rango de la jornada
        location: "Seminario de la primera planta del IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "https://wpd.ugr.es/~iemath/events/event/seminario-del-grupo-investigacion-goya-fqm-384-2/",
            meet: "https://meet.google.com/ikv-gtxa-jkr",
            resumenes: "https://www.ugr.es/~goya/abstract_21_05_28_D1PO.pdf"
        },
        conferences: [
            {
                speaker: "Alexander Bufetov. CNRS, Steklov, IITP RAS (12:00 h)",
                title: "Procesos puntuales determinantales y espacios de Hilbert de funciones enteras."
            },
            {
                speaker: "Manuel Domínguez de la Iglesia. Instituto de Matemáticas, UNAM (17:00 h)",
                title: "Modelos de urnas para polinomios de tipo Jacobi."
            },
            {
                speaker: "Fátima Lizarte. Universidad de Cantabria (18:00 h)",
                title: "Explorando los misterios del condicionamiento de polinomios"
            }
        ]
    },
    {
        date: "2021-04-23", // 23 de abril de 2021
        time: "17:00 - 18:00",
        location: "Seminario de la primera planta del IMAG - Instituto de Matemáticas (UGR) / Sala Meet (virtual)",
        links: {
            info: "https://wpd.ugr.es/~iemath/events/event/seminario-del-grupo-investigacion-goya-fqm-384/",
            meet: "https://meet.google.com/uua-efrg-ajt",
            resumenes: "https://www.ugr.es/~goya/abstract.pdf",
            foto: "20210423_Seminario.jpg"
        },
        conferences: [
            {
                speaker: "Ester Pérez Sinusía, Universidad de Zaragoza (17:00 h)",
                title: "Generalización de bases tipo Zernike y diseño de nuevas bases ortonormales para aperturas y superficies ópticas"
            },
            {
                speaker: "Misael E. Marriaga Castillo. Universidad Rey Juan Carlos. (18:00 h)",
                title: "Bivariate Koornwinder-Sobolev orthogonal polynomials"
            }
        ]
    },
    {
        date: "2020-01-31", // 31 de enero de 2020
        time: "12:30",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {
            info: "https://wpd.ugr.es/~iemath/events/event/seminario-goya-ortogonalidad-y-aplicaciones/",
            foto1: "https://www.ugr.es/~goya/20200131_Roberto1.jpg",
            foto2: "https://www.ugr.es/~goya/20200131_Roberto2.jpg"
        },
        conferences: [
            {
                speaker: "Roberto Costas Santos. Universidad de Alcalá",
                title: "Basic hypergeometric transformations from symmetric and q-inverse sub-families of the Askey-Wilson polynomials in the q-Askey scheme"
            }
        ]
    },
    {
        date: "2019-11-29", // 29 de noviembre de 2019
        time: "16:30",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {
            info: "https://wpd.ugr.es/~iemath/es/events/event/seminario-de-misael-marriaga-castillo/",
            foto: "https://www.ugr.es/~goya/20191129_Seminario.jpg"
        },
        conferences: [
            {
                speaker: "Misael Marriaga Castillo, Universidad Rey Juan Carlos",
                title: "Geronimus transformations of bivariate linear functionals"
            }
        ]
    },
    {
        date: "2018-02-08", // 8 de febrero de 2018
        time: "17:00",
        location: "Sala de Conferencias. Facultad de Ciencias",
        links: {
            resumen: "LRoncal-Granada18-ABSTRACT.pdf"
        },
        conferences: [
            {
                speaker: "Luz Roncal, BCAM Researcher. BCAM - Basque Center for Applied Mathematics",
                title: "Análisis Armónico asociado a una ecuación del calor semidiscreta"
            }
        ]
    },
    {
        date: "2017-07-14",
        time: "12:00",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {
            pdf: "https://www.ugr.es/~goya/RANGA.pdf"
        },
        conferences: [
            {
                speaker: "Alagacone Sri Ranga, Departamento de Matemática Aplicada, IBILCE, UNESP, Brazil",
                title: "On polynomials satisfying a special \\(R_{II}\\) type recurrence formula"
            }
        ]
    },
    {
        date: "2017-06-30",
        time: "12:30",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {
            foto: "https://www.ugr.es/~goya/Foto170630.jpg"
        },
        conferences: [
            {
                speaker: "Vijay Gupta, Department of Mathematics, Netaji Subhas Institute of Technology, New Delhi, India",
                title: "Developments Concerning Convergence of Positive Linear Operators"
            }
        ]
    },
    {
        date: "2017-03-10",
        time: "11:30",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {
            pdf: "https://www.ugr.es/~goya/PlamenIliev.pdf",
            foto1: "https://www.ugr.es/~goya/foto1_170310.jpg",
            foto2: "https://www.ugr.es/~goya/foto2_170310.jpg"
        },
        conferences: [
            {
                speaker: "Plamen Iliev. Georgia Institute of Technology",
                title: "Multivariable hypergeometric polynomials related to the bispectral problem and superintegrability"
            }
        ]
    },
    {
        date: "2017-02-17",
        time: "12:30",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {
            pdf: "https://www.ugr.es/~goya/RobertoCostas.pdf"
        },
        conferences: [
            {
                speaker: "Roberto Costas-Santos. Departamento de Matemáticas, Universidad de Alcalá",
                title: "q-Polynomials. Orthogonality in the complex plane"
            }
        ]
    },
    {
        date: "2016-11-17",
        time: "12:00",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {
            foto: "https://www.ugr.es/~goya/foto1_161117.jpg"
        },
        conferences: [
            {
                speaker: "Ramón Orive. Universidad de La Laguna",
                title: "Problemas “minimax” y Teoría de Juegos: Estimando la probabilidad de una moneda “trucada”",
                link: "https://www.ugr.es/~goya/RamonOrive.pdf"
            },
            {
                speaker: "Juan José Moreno Balcázar. Universidad de Almería",
                title: "Asymptotics for generalized Freud polynomials",
                link: "https://www.ugr.es/~goya/MorenoBalcazar.pdf"
            }
        ]
    },
    {
        date: "2016-10-06",
        time: "12:00",
        location: "Seminario de la primera planta del IEMath - Instituto de Matemáticas (UGR)",
        links: {},
        conferences: [
            {
                speaker: "Miguel A. Piñar. Universidad de Granada",
                title: "Best polynomial approximation on the unit ball"
            },
            {
                speaker: "Joaquín Sánchez Lara. Universidad de Granada",
                title: "Medidas de equilibrio bajo campos externos racionales débiles"
            }
        ]
    },
    {
        date: "2016-04-04", // 4 de abril de 2016
        time: "12:00",
        location: "Seminario de la segunda planta del IEMath",
        links: {},
        conferences: [
            {
                speaker: "Cleonice F. Bracciali, Universidade Estadual Paulista (Brazil)",
                title: "On some para-orthogonal polynomials on the unit circle",
                link: "http://iemath.ugr.es/events/event/seminario-de-teoria-de-aproximacion-y-polinomios-ortogonales-cleonice-f-bracciali/"
            },
            {
                speaker: "Miguel A. Piñar, Universidad de Granada",
                title: "Orthogonal polynomials on the unit ball with an extra spherical term"
            }
        ]
    },
    {
        date: "2015-10-22", // 22 de octubre de 2015
        time: "10:00",
        location: "Seminario de la primera planta del IEMath",
        links: {},
        conferences: [
            {
                speaker: "Misael Marriaga Castillo",
                title: "Three term relations for Koornwinder orthogonal polynomials",
                link: "http://iemath.ugr.es/events/event/conference-of-misael-marriaga-castillo/"
            }
        ]
    }

];

export { seminars };