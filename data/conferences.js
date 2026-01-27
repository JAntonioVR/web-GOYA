/*README

En este archivo se encuentran las conferencias, seminarios y charlas impartidas por miembros del grupo.
Para añadir nuevas conferencias, seguir las instrucciones al principio de la lista.

Revisiones sucesivas:
- Creación del archivo y puesta en marcha de la web: Diciembre 2025 por Juan Antonio Villegas.

Fecha de la última actualización: 2025-12-18


*/

const conferences = [

    /* Para añadir una nueva conferencia, copiar y pegar el siguiente bloque y rellenar los campos 
    correspondientes:
    
    {
        speaker: "Nombre del ponente",
        title: "Título de la conferencia",
        event: "Nombre del evento",
        date: "AAAA-MM-DD",
        link: "Enlace a la conferencia (opcional)"
    },
    */

    // --- 2025 ---
    {
        speaker: "Juan Antonio Villegas",
        title: "Aproximación de funciones con picos en la esfera: redes neuronales, Compressive Sensing y Superresolución",
        event: "Seminario de Análisis Matemático y Matemática Aplicada- IMAULL",
        date: "2025-10-02",
        link: "https://www.ull.es/portal/agenda/evento/seminario-de-analisis-matematico-y-matematica-aplicada-2025-2026/#1759405018039-f3852b9a-210d"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Polinomios de Zernike. La ortogonalidad en ayuda de la Óptica",
        event: "ENEM 2025. Congreso nacional de estudiantes de Matemáticas",
        date: "2025-07-25",
        link: "https://enem.anem.es/2025/"
    },
    {
        speaker: "Lidia Fernández",
        title: "Mirando las estrellas con ojos matemáticos",
        event: "MatEduca",
        date: "2025-02-21",
        link: "https://www.ugr.es/~mateduca/"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Polinomios ortogonales de Sobolev para resolver la ecuación de Schrödinger estacionaria",
        event: "Seminario GAMMA (virtual) ",
        date: "2025-02-14",
        link: "https://youtu.be/MXqLfC_NXkw__;!!D9dNQwwGXtA!VOGq9Q14oFKrhV2TUtiTq13hoFixGipQE6SHijtLEwd9HyjnFe8hLSArIA8sytPHQ1Q3gkLvPCGwIomOWLlL$"
    },

    // --- 2024 ---
    {
        speaker: "Juan Antonio Villegas",
        title: "Avances en la generalización de la ortogonalidad múltiple al caso bivariado",
        event: "Seminario del Grupo de Investigación \"GOYA\"",
        date: "2024-04-03",
        link: "#seminars"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Polinomios ortogonales de Sobolev para resolver la ecuación de Schrödinger estacionaria.",
        event: "Seminario de la Red RIPOEFA (virtual)",
        date: "2024-04-26",
        link: "https://www.youtube.com/watch?v=-zCTjdtw3Oo&t=200s"
    },

    // --- 2023 ---
    {
        speaker: "Teresa E. Pérez",
        title: "Ojos que no ven, MAtemáticas al rescate!",
        event: "Semana de la Ciencia. Facultad Ciencias de la Universidad de Granada",
        date: "2023-11-13"
    },
    {
        speaker: "Lidia Fernández",
        title: "Una introducción a los polinomios ortogonales en dos variables.",
        event: "Seminario de Análisis Matemático y Matemática Aplicada, Universidad de La Laguna",
        date: "2023-02-23",
        link: "https://www.ull.es/portal/agenda/evento/seminario-de-analisis-matematico-y-matematica-aplicada-2022-2023/#1676018247120-2ecf0467-af47"
    },
    {
        speaker: "Joaquín F. Sánchez Lara",
        title: "Procesos determinantales en el intervalo unidad a través de polinomios de Gegenbauer.",
        event: "Seminario de Análisis Matemático y Matemática Aplicada, Universidad de La Laguna",
        date: "2023-02-23",
        link: "https://www.ull.es/portal/agenda/evento/seminario-de-analisis-matematico-y-matematica-aplicada-2022-2023/#1676554393150-9b31a4c4-b627"
    },

    // --- 2022 ---
    {
        speaker: "Teresa E. Pérez",
        title: "Operadores de tipo Bernstein y polinomios de Jacobi.",
        event: "Seminario del Grupo de Investigación 'TAPO', Universidad de Almería",
        date: "2022-12-16",
        link: "https://w3.ual.es/GruposInv/Tapo/news_es.html#seminars"
    },
    {
        speaker: "Lidia Fernández",
        title: "Quasi-birth and death processes.",
        event: "Seminario RIPOEFA de investigación",
        date: "2022-11-25",
        link: "https://ripoefa.com/seminario-ripoefa-de-investigacion/"
    },
    {
        speaker: "Lidia Fernández",
        title: "Algunas propiedades de polinomios ortogonales en dos variables.",
        event: "Seminario Iberoamericano de Análisis Matemático y Matemática Aplicada",
        date: "2022-11-04",
        link: "https://sites.google.com/view/seminario-gamma/temporadas-anteriores/temporada-2022?authuser=0"
    },
    {
        speaker: "Lidia Fernández",
        title: "Some properties of orthogonal polynomials in two variables.",
        event: "MIPATalk series, FMIPA Universitas Indonesia",
        date: "2022-07-01",
        link: "https://www.youtube.com/watch?v=atyaFalWZms"
    },

    // --- 2021 ---
    {
        speaker: "Teresa E. Pérez",
        title: "From Hermite to Zernike. Orthogonal Polynomials on the unit disk. Applications in Optics.",
        event: "Universidade de Aveiro (Portugal)",
        date: "2021-12-03"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "De Hermite a Zernike: Polinômios ortogonais bivariados no disco unitário",
        event: "Seminários do Programa de Pós-Graduação em Matemática, UNESP (virtual)",
        date: "2021-09-15",
        link: "https://www.ibilce.unesp.br/#!/pos-graduacao/programas-de-pos-graduacao/matematica/seminarios/"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Un paseo por los polinomios ortogonales sobre el disco unidad: de Hermite a Zernike",
        event: "Seminario Rubio de Francia, Universidad de Zaragoza (virtual)",
        date: "2021-03-11",
        link: "https://youtu.be/twob57lE_9U"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Sólo para sus ojos. OO7: Ortogonalidad, Óptica y 7 cosas más",
        event: "Día \\(\\pi\\): UDEM Universidad de Monterrey, México (virtual)",
        date: "2021-03-10",
        link: "https://youtu.be/twob57lE_9U"
    },

    // --- 2020 ---
    {
        speaker: "Miguel A. Piñar",
        title: "Jackson's estimates on the weighted unit ball",
        event: "Workshop del Programa de Pós-Graduação em Matemática, UNESP, Brasil",
        date: "2020-01-23",
        link: "https://www.ibilce.unesp.br/#!/pos-graduacao/programas-de-pos-graduacao/matematica/verao-2020/"
    },

    // --- 2019 ---
    {
        speaker: "Teresa E. Pérez",
        title: "De Hermite a Zernike. Polinomios ortogonales bivariados sobre el disco unidad",
        event: "Coloquio 'José Mendoza Ríos' IMUS-IEMath-GR, Sevilla",
        date: "2019-11-20",
        link: "https://www.imus.us.es/es/actividad/2360"
    },
    {
        speaker: "Joaquín F. Sánchez Lara",
        title: "Medidas de equilibrio bajos campos externos débilmente admisibles",
        event: "Seminario del departamento de Análisis Matemático, Universidad de La Laguna",
        date: "2019-06-26",
        link: "https://www.ull.es/departamentos/analisis-matematico/"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Sólo para sus ojos. OO7: Ortogonalidad, Óptica y 7 cosas más",
        event: "Coloquio de Matemáticas, Universidad Nacional de Colombia (Sede Bogotá)",
        date: "2019-05-29",
        link: "http://ciencias.bogota.unal.edu.co/departamentos/departamento-de-matematicas/eventos/coloquio-de-matematicas/"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Pares coherentes en dos variables",
        event: "Seminario Rubio de Francia, Universidad de Zaragoza",
        date: "2019-05-23",
        link: "http://anamat.unizar.es/seminario.html"
    },

    // --- 2018 ---
    {
        speaker: "Teresa E. Pérez",
        title: "Redes de Toda, pares de Lax y polinomios ortogonales bivariados",
        event: "Seminario de Ecuacións diferenciais e Análise Funcional, Universidade de Santiago de Compostela",
        date: "2018-11-22"
    },
    {
        speaker: "Lidia Fernández",
        title: "Algunas propiedades de los polinomios ortogonales en dos variables",
        event: "Coloquio del Instituto de Matemáticas, UNAM (México)",
        date: "2018-09-04"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Sólo para sus ojos. OO7: Ortogonalidad, Óptica y 7 cosas más",
        event: "Pint of Science Festival, Granada",
        date: "2018-05-14",
        link: "http://pintofscience.es/event/teachmeout1"
    },
    {
        speaker: "Teresa E. Pérez",
        title: "Clásicos Ortogonales",
        event: "Seminario de Ecuaciones Diferenciales - IEMath GR",
        date: "2018-04-06",
        link: "http://semed.ugr.es/"
    },

    // --- 2017 ---
    {
        speaker: "Miguel A. Piñar",
        title: "Bounds in Multivariate Polynomial Approximation",
        event: "Seminario CUICBAS, Universidad de Colima (México)",
        date: "2017-08-11",
        link: "http://fejer.ucol.mx/cuicbas/?page_id=1111"
    },
    {
        speaker: "Joaquín F. Sánchez Lara",
        title: "Medidas de equilibrio para campos externos creados por varias cargas fijas",
        event: "Coloquio del departamento de Análisis Matemático, Universidad de La Laguna",
        date: "2017-03-28",
        link: "http://www.departamentos.ull.es/view/departamentos/analisismat/Anos_2016-2017/es"
    },

    // --- 2016 ---
    {
        speaker: "Miguel A. Piñar",
        title: "Best polynomial approximation on the unit ball",
        event: "Seminario del Grupo de Investigación 'GOYA', UGR",
        date: "2016-10-06"
    },
    {
        speaker: "Antonia M. Delgado",
        title: "Asymptotics of Sobolev orthogonal polynomials on the unit ball",
        event: "Seminario del Grupo de Investigación 'TAPO', Almería",
        date: "2016-06-14",
        link: "http://www.ual.es/GruposInv/Tapo/news_es.html#seminars"
    },

    // --- 2015 ---
    {
        speaker: "Lidia Fernández",
        title: "Sobolev orthogonal polynomials in several variables",
        event: "School of Mathematics, Georgia Institute of Technology (USA)",
        date: "2015-08-26",
        link: "http://www.math.gatech.edu/seminars-colloquia/series/analysis-seminar/lidia-fernandez-20150826"
    }
        
]

export { conferences };