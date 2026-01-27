/*README

En este archivo se encuentran las comunicaciones tipo charlas, pósters, organizaciones, etc. llevadas
a cabo por los miembros del grupo de investigación en diversos congresos científicos. Para añadir nuevas
comunicaciones, seguir las instrucciones al principio de la lista.

Revisiones sucesivas:
- Creación del archivo y puesta en marcha de la web: Diciembre 2025 por Juan Antonio Villegas Recio.

Fecha de la última actualización: 2025-12-30


*/

const communications = [

    /* Para añadir una nueva comunicación, copiar y pegar el siguiente bloque y rellenar los campos correspondientes:
    
    {
        author: "Nombre del autor o autores",
        title: "Título de la comunicación / presentación / póster / simposio organizado / ... ",
        type: "Tipo de comunicación (Charla, Póster, Organización de simposio, etc.)",
        event: "Nombre del evento",
        startDate: "Fecha de inicio en formato YYYY-MM-DD",
        endDate: "Fecha de fin en formato YYYY-MM-DD",
        location: "Ubicación del evento",
        link: "Enlace al evento o presentación"
    },
    */


    // --- 2025 ---
    {
        author: "Lidia Fernández",
        title: "Symmetry structure of starbursts",
        type: "Conferencia",
        event: "Extremal Polynomials and Dynamical Systems",
        startDate: "2025-08-19",
        endDate: "2025-08-22",
        location: "Carlsberg Academy, Copenhagen, Denmark",
        link: "https://www.math.ku.dk/english/calendar/events/epds/"
    },
    {
        author: "Lidia Fernández",
        title: "Sobre cómo las matemáticas miran las estrellas",
        type: "Conferencia invitada",
        event: "Encuentro Nacional de Estudiantes de Matemáticas (ENEM 2025)",
        startDate: "2025-07-22",
        endDate: "2025-07-27",
        location: "Granada",
        link: "https://enem.anem.es/2025/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Bivariate Bernstein-Jacobi Approximants for Negative Parameters",
        type: "Charla invitada",
        event: "The Third Joint SIAM/CAIMS Annual Meetings (AN25), Minisymposium: Multivariate Approximation and Orthogonality Part III",
        startDate: "2025-07-28",
        endDate: "2025-08-01",
        location: "Montréal, Canadá",
        link: "https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=84861"
    },
    {
        author: "Miguel A. Piñar",
        title: "Sobolev orthogonal polynomials and spectral methods",
        type: "Charla invitada",
        event: "The Third Joint SIAM/CAIMS Annual Meetings (AN25), Minisymposium: Multivariate Approximation and Orthogonality Part III",
        startDate: "2025-07-28",
        endDate: "2025-08-01",
        location: "Montréal, Canadá",
        link: "https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=84861"
    },
    {
        author: "Teresa E. Pérez",
        title: "Multivariate Approximation and Orthogonality Part I, Part II and Part III (MS73, MS91, MS110)",
        type: "Organización de simposio",
        event: "The Third Joint SIAM/CAIMS Annual Meetings (AN25)",
        startDate: "2025-07-28",
        endDate: "2025-08-01",
        location: "Montréal, Canadá",
        link: "https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=84861"
    },
    {
        author: "Teresa E. Pérez",
        title: "From Hermite to Zernike. Orthogonal Polynomials in Optics",
        type: "Charla invitada",
        event: "From Sparse Interpolation to Signal Processing: New Synergies. Seminar 25281",
        startDate: "2025-07-07",
        endDate: "2025-07-11",
        location: "Dagstuhl, Alemania",
        link: "https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/25281"
    },
    {
        author: "Miguel A. Piñar",
        title: "Sobolev orthogonal polynomials and spectral methods in boundary value problems on the unit ball",
        type: "Charla invitada",
        event: "From Sparse Interpolation to Signal Processing: New Synergies. Seminar 25281",
        startDate: "2025-07-07",
        endDate: "2025-07-11",
        location: "Dagstuhl, Alemania",
        link: "https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/25281"
    },
    {
        author: "Juan Antonio Villegas Recio",
        title: "Function Approximation on the Sphere via Super-Resolution Technics",
        type: "Póster",
        event: "II Encuentro IMAG",
        startDate: "2025-06-26",
        endDate: "2025-06-26",
        location: "Granada, España",
        link: "https://wpd.ugr.es/~imag/events/event/ii-encuentro-imag/"
    },
    {
        author: "Juan Antonio Villegas Recio",
        title: "A new framework for Multivariate Approximation: Multivariate Multiple Orthogonal Polynomials",
        type: "Comunicación",
        event: "MACMAS 2025 - Third International Conference on Mathematical And Computational Modelling, Approximation and Simulation",
        startDate: "2025-05-26",
        endDate: "2025-05-29",
        location: "Saidia, Marruecos",
        link: "https://macmas25.ump.ma/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Approximation on the disk via Appell polynomials: the Zernike case",
        type: "Comunicación",
        event: "MACMAS 2025 - Third International Conference on Mathematical And Computational Modelling, Approximation and Simulation",
        startDate: "2025-05-26",
        endDate: "2025-05-29",
        location: "Saidia, Marruecos",
        link: "https://macmas25.ump.ma/"
    },

    // --- 2024 ---
    {
        author: "Juan Antonio Villegas Recio",
        title: "Extension of Multiple Orthogonality to the bivariate case",
        type: "Charla invitada",
        event: "VI Orthonet Meeting",
        startDate: "2024-12-19",
        endDate: "2024-12-20",
        location: "Madrid, España",
        link: "https://www.ucm.es/manuel_manas/orthonet-winter-2024"
    },
    {
        author: "Juan Antonio Villegas Recio",
        title: "Multiple Orthogonal Polynomials. Introduction, applications and extension to the bivariate case",
        type: "Póster",
        event: "Math SOMMa Junior Meeting",
        startDate: "2024-10-02",
        endDate: "2024-10-04",
        location: "Barcelona, España",
        link: "https://www.crm.cat/math-somma-junior-meeting-2024/"
    },
    {
        author: "Lidia Fernández",
        title: "Orthogonal Laurent polynomials of two real variables",
        type: "Charla invitada",
        event: "9th European Congress of Mathematics, Sesión Especial 'Special functions, orthogonal polynomials, q-series and applications'",
        startDate: "2024-07-15",
        endDate: "2024-07-19",
        location: "Sevilla, España",
        link: "https://www.ecm2024sevilla.com/"
    },
    {
        author: "Joaquín F. Sánchez Lara",
        title: "An electrostatic model for the roots of polynomial solutions of a difference equation",
        type: "Charla invitada",
        event: "9th European Congress of Mathematics, Sesión Especial 'Special functions, orthogonal polynomials, q-series and applications'",
        startDate: "2024-07-15",
        endDate: "2024-07-19",
        location: "Sevilla, España",
        link: "https://www.ecm2024sevilla.com/"
    },
    {
        author: "Juan Antonio Villegas Recio",
        title: "Extending multiple orthogonality to bivariate polynomials",
        type: "Charla invitada",
        event: "9th European Congress of Mathematics, Sesión Especial 'Special functions, orthogonal polynomials, q-series and applications'",
        startDate: "2024-07-15",
        endDate: "2024-07-19",
        location: "Sevilla, España",
        link: "https://www.ecm2024sevilla.com/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Bernstein-Jacobi operators for negative parameters",
        type: "Main Speaker",
        event: "'Final Edition' Jaen Conference on Approximation Theory",
        startDate: "2024-06-30",
        endDate: "2024-07-05",
        location: "Úbeda, Jaén, España",
        link: "https://web.ujaen.es/revista/jja/jca/"
    },
    {
        author: "David Lara Velasco",
        title: "Bernstein-type operators based on the Jacobi inner product",
        type: "Póster",
        event: "IMAG Conference on Orthogonal Polynomials, Special Functions and Applications OPSFA17",
        startDate: "2024-06-24",
        endDate: "2024-06-28",
        location: "Granada, España",
        link: "http://opsfa17.ugr.es"
    },
    {
        author: "José L. Ruiz Benito",
        title: "A new approach to zeros of multivariate orthogonal polynomials",
        type: "Póster",
        event: "IMAG Conference on Orthogonal Polynomials, Special Functions and Applications OPSFA17",
        startDate: "2024-06-24",
        endDate: "2024-06-28",
        location: "Granada, España",
        link: "http://opsfa17.ugr.es"
    },
    {
        author: "Juan Antonio Villegas Recio",
        title: "Generalization of Multiple Orthogonality to the Bivariate Case",
        type: "Póster",
        event: "IMAG Conference on Orthogonal Polynomials, Special Functions and Applications OPSFA17",
        startDate: "2024-06-24",
        endDate: "2024-06-28",
        location: "Granada, España",
        link: "http://opsfa17.ugr.es"
    },
    {
        author: "Teresa E. Pérez",
        title: "Polinomios ortogonales bivariados, redes de Toda bidimensionales y pares de tipo Lax",
        type: "Charla invitada",
        event: "XVII Encuentro de Investigación en Teoría de Aproximación (EITA 2024)",
        startDate: "2024-04-12",
        endDate: "2024-04-14",
        location: "Alcañiz, Teruel, España",
        link: "https://iuma.unizar.es/idi/xviieita"
    },
    {
        author: "Juan Antonio Villegas Recio",
        title: "Orthogonal Polynomials. Applications and Bivariate Multiple Orthogonality",
        type: "Póster y charla flash",
        event: "I Encuentro IMAG, Instituto de Matemáticas (IMAG) de la Universidad de Granada",
        startDate: "2024-03-20",
        endDate: "2024-03-21",
        location: "Granada, España",
        link: "https://wpd.ugr.es/~imag/events/event/i-encuentro-imag/"
    },
    {
        author: "Lidia Fernández",
        title: "Los polinomios de Zernike y la visualización de las estrellas",
        type: "Charla invitada",
        event: "Congreso Bienal de la Real Sociedad Matemática Española, Sesión Especial 'Polinomios ortogonales, funciones especiales y aplicaciones'",
        startDate: "2024-01-22",
        endDate: "2024-01-26",
        location: "Pamplona, España",
        link: "https://2024.bienalrsme.com/bienvenida"
    },

    // --- 2023 ---
    {
        author: "Lidia Fernández",
        title: "Estructura de simetría de starbursts",
        type: "Charla invitada",
        event: "4º Workshop 'Dos Días de Polinomios Ortogonales' (D2PO)",
        startDate: "2023-12-14",
        endDate: "2023-12-15",
        location: "Almería, España",
        link: "https://w3.ual.es/GruposInv/Tapo/D2PO-2023/D2PO2023.html"
    },
    {
        author: "Teresa E. Pérez",
        title: "Caracterizaciones de los pares de tipo Lax para polinomios ortogonales bivariados",
        type: "Charla invitada",
        event: "4º Workshop 'Dos Días de Polinomios Ortogonales' (D2PO)",
        startDate: "2023-12-14",
        endDate: "2023-12-15",
        location: "Almería, España",
        link: "https://w3.ual.es/GruposInv/Tapo/D2PO-2023/D2PO2023.html"
    },
    {
        author: "José L. Ruiz Benito",
        title: "Weak zeros of multivariate orthogonal polynomials",
        type: "Póster y charla flash",
        event: "4º Workshop 'Dos Días de Polinomios Ortogonales' (D2PO)",
        startDate: "2023-12-14",
        endDate: "2023-12-15",
        location: "Almería, España",
        link: "https://w3.ual.es/GruposInv/Tapo/D2PO-2023/D2PO2023.html"
    },
    {
        author: "Juan Antonio Villegas Recio",
        title: "Multiple orthogonal polynomials in two variables",
        type: "Póster y charla flash",
        event: "4º Workshop 'Dos Días de Polinomios Ortogonales' (D2PO)",
        startDate: "2023-12-14",
        endDate: "2023-12-15",
        location: "Almería, España",
        link: "https://w3.ual.es/GruposInv/Tapo/D2PO-2023/D2PO2023.html"
    },
    {
        author: "Antonia M. Delgado, Lidia Fernández",
        title: "Symmetry Structure of Starbust",
        type: "Póster",
        event: "FoCM 2023 - Foundations of Computational Mathematics",
        startDate: "2023-06-12",
        endDate: "2023-06-21",
        location: "París, Francia",
        link: "https://focm2023.org/"
    },
    {
        author: "Teresa E. Pérez, Miguel A. Piñar",
        title: "Sobolev orthogonal polynomials for solving the Schrödinger equation with potentials \\(V(x) = x^{2k}, k \\gt 1\\). ",
        type: "Charla invitada",
        event: "FoCM 2023 - Foundations of Computational Mathematics",
        startDate: "2023-06-12",
        endDate: "2023-06-21",
        location: "París, Francia",
        link: "https://focm2023.org/"
    },
    {
        author: "Teresa E. Pérez, Miguel A. Piñar",
        title: "Lax-type pairs in the theory of bivariate orthogonal polynomials",
        type: "Charla invitada",
        event: "ILAS 2023 - 25th Conference of the International Linear Algebra Society",
        startDate: "2023-06-12",
        endDate: "2023-06-16",
        location: "Madrid, España",
        link: "https://ilas2023.es/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Difference-Differential connections between Simplex and generalized Ball Orthogonal Polynomials",
        type: "Charla invitada",
        event: "MACMAS 2023 - Second International Conference on Mathematical And Computational Modelling, Approximation and Simulation",
        startDate: "2023-05-29",
        endDate: "2023-06-01",
        location: "Torino, Italia",
        link: "https://www.macmas2023.unito.it/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Quadratic decomposition of bivariate orthogonal polynomials",
        type: "Charla invitada",
        event: "Special Session on Hypergeometric Functions, q-series and Generalizations (virtual)",
        startDate: "2023-04-01",
        endDate: "2023-04-02",
        location: "Gaithersburg, USA",
        link: "http://www.ams.org/meetings/sectional/2305_progfull.html"
    },

    // --- 2022 ---
    {
        author: "Lidia Fernández",
        title: "Tea Time Talks on Basic Sciences, Education & Sustainable Development",
        type: "Organización",
        event: "Caraga State University",
        startDate: "2022-08-22",
        endDate: "2022-08-22",
        location: "Butuan, Filipinas",
        link: "https://www.iybssd2022.org/en/events/tea-time-talks-on-basic-sciences-education-sustainable-development-2/"
    },
    {
        author: "Lidia Fernández",
        title: "Quasi-birth and death processes",
        type: "Charla invitada",
        event: "XXVII CEDYA / XVII CMA",
        startDate: "2022-07-18",
        endDate: "2022-07-22",
        location: "Zaragoza, España",
        link: "https://cedya2022.es/"
    },
    {
        author: "David Lara Velasco",
        title: "On Bernstein-type operators preserving derivatives",
        type: "Póster",
        event: "XXVII CEDYA / XVII CMA",
        startDate: "2022-07-18",
        endDate: "2022-07-22",
        location: "Zaragoza, España",
        link: "https://cedya2022.es/"
    },
    {
        author: "Gema Alhama",
        title: "The Christoffel function on and in quadratic revolution surfaces",
        type: "Póster",
        event: "XXVII CEDYA / XVII CMA",
        startDate: "2022-07-18",
        endDate: "2022-07-22",
        location: "Zaragoza, España",
        link: "https://cedya2022.es/"
    },
    {
        author: "Teresa E. Pérez",
        title: "On Bernstein-type operators preserving derivatives",
        type: "Comunicación",
        event: "Curves and Surfaces 2022",
        startDate: "2022-06-20",
        endDate: "2022-06-24",
        location: "Francia",
        link: "https://cs2022.sciencesconf.org/"
    },
    {
        author: "David Lara Velasco",
        title: "On Bernstein-type operators preserving derivatives",
        type: "Póster",
        event: "International Conference on Orthogonal Polynomials (Marcellán's 70th)",
        startDate: "2022-04-21",
        endDate: "2022-04-23",
        location: "Cádiz, España",
        link: "https://www.marcellanfest.es/"
    },
    {
        author: "Miguel A. Piñar",
        title: "Generalized classical orthogonal polynomials",
        type: "Comunicación",
        event: "International Conference on Orthogonal Polynomials (Marcellán's 70th)",
        startDate: "2022-04-21",
        endDate: "2022-04-23",
        location: "Cádiz, España",
        link: "https://www.marcellanfest.es/"
    },
    {
        author: "David Lara Velasco",
        title: "Bernstein-type Operators based on the Jacobi inner product",
        type: "Póster",
        event: "Congreso Bienal de la Real Sociedad Matemática Española",
        startDate: "2022-01-17",
        endDate: "2022-01-21",
        location: "Ciudad Real, España",
        link: "https://2021.bienalrsme.com/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Disk orthogonal functions satisfying three term relations",
        type: "Charla invitada",
        event: "Congreso Bienal de la Real Sociedad Matemática Española",
        startDate: "2022-01-17",
        endDate: "2022-01-21",
        location: "Ciudad Real, España",
        link: "https://2021.bienalrsme.com/"
    },
    {
        author: "Miguel A. Piñar",
        title: "On Multivariate Symmetric Orthogonal Polynomials",
        type: "Póster",
        event: "Congreso Bienal de la Real Sociedad Matemática Española",
        startDate: "2022-01-17",
        endDate: "2022-01-21",
        location: "Ciudad Real, España",
        link: "https://2021.bienalrsme.com/"
    },

    // --- 2021 ---
    {
        author: "Miguel A. Piñar",
        title: "On Multivariate Symmetric Orthogonal Polynomials",
        type: "Póster",
        event: "Numerical Methods and Scientific Computing (NMSC21)",
        startDate: "2021-11-08",
        endDate: "2021-11-12",
        location: "CIRM Luminy, Francia",
        link: "https://www.math.unipd.it/~nmsc21/index.html"
    },
    {
        author: "Teresa E. Pérez",
        title: "Multivariate hybrid orthogonal functions",
        type: "Charla invitada",
        event: "8th European Congress of Mathematics (virtual)",
        startDate: "2021-06-20",
        endDate: "2021-06-26",
        location: "Portorož, Eslovenia",
        link: "https://iciam2019.com/index.php"
    },
    {
        author: "Teresa E. Pérez",
        title: "Multivariate mixed orthogonal functions",
        type: "Charla invitada",
        event: "Complex Approximations, Orthogonal Polynomials and Applications (virtual)",
        startDate: "2021-06-06",
        endDate: "2021-06-12",
        location: "Sochi, Rusia",
        link: "https://caopa.tilda.ws/"
    },
    {
        author: "Miguel A. Piñar",
        title: "Jackson-type estimates on the weighted unit ball",
        type: "Charla invitada",
        event: "Complex Approximations, Orthogonal Polynomials and Applications (virtual)",
        startDate: "2021-06-06",
        endDate: "2021-06-12",
        location: "Sochi, Rusia",
        link: "https://caopa.tilda.ws/"
    },
    {
        author: "Lidia Fernández",
        title: "Procesos de cuasi-nacimiento y muerte",
        type: "Charla invitada",
        event: "V Reunión conjunta RSME-SMM (virtual)",
        startDate: "2021-06-14",
        endDate: "2021-06-18",
        location: "Guanajuato, México",
        link: "https://rsmeysmm.eventos.cimat.mx/"
    },

    // --- 2019 ---
    {
        author: "Miguel A. Piñar",
        title: "On h-harmonics",
        type: "Charla invitada",
        event: "2º Workshop 'Dos Días de Polinomios Ortogonales y Funciones Especiales'",
        startDate: "2019-11-21",
        endDate: "2019-11-22",
        location: "Almería, España",
        link: "https://w3.ual.es/GruposInv/Tapo/CA2019/OPSF2019.html"
    },
    {
        author: "Joaquín F. Sánchez Lara",
        title: "Equilibrium measures under weakly admisible external fields",
        type: "Comunicación",
        event: "Second International Conference on Symmetry",
        startDate: "2019-09-02",
        endDate: "2019-09-07",
        location: "Benasque, Huesca, España",
        link: "http://benasque.org/2019symmetry/"
    },
    {
        author: "Lidia Fernández",
        title: "Sobolev orthogonal polynomial in the triangle",
        type: "Charla invitada",
        event: "15th International Symposium on Orthogonal Polynomials, Special Functions and Applications (OPSFA 2019)",
        startDate: "2019-07-22",
        endDate: "2019-07-26",
        location: "Hagenberg, Austria",
        link: "https://www3.risc.jku.at/conferences/opsfa2019/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Multivariate Orthogonal Polynomials: Theory and Applications",
        type: "Organización",
        event: "International Congress on Industrial and Applied Mathematics ICIAM 2019",
        startDate: "2019-07-15",
        endDate: "2019-07-19",
        location: "Valencia, España",
        link: "https://iciam2019.com/index.php"
    },
    {
        author: "Miguel A. Piñar",
        title: "Approximation on spheres and balls",
        type: "Charla invitada",
        event: "International Congress on Industrial and Applied Mathematics ICIAM 2019",
        startDate: "2019-07-15",
        endDate: "2019-07-19",
        location: "Valencia, España",
        link: "https://iciam2019.com/index.php"
    },
    {
        author: "Miguel A. Piñar",
        title: "Weighted approximation on the ball",
        type: "Comunicación",
        event: "X Jaén Conference on Approximation",
        startDate: "2019-06-30",
        endDate: "2019-07-05",
        location: "Úbeda, España",
        link: "http://www.ujaen.es/revista/jja/jca/"
    },

    // --- 2018 ---
    {
        author: "Miguel A. Piñar",
        title: "On h-harmonics",
        type: "Comunicación invitada",
        event: "Optimal Point Configurations and Potential Theory 2019",
        startDate: "2019-04-08",
        endDate: "2019-04-11",
        location: "Castro Urdiales, España",
        link: "https://www.opcpot2019.unican.es/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Bivariate Sobolev orthogonal polynomials on the disk",
        type: "Charla invitada",
        event: "Congreso Bienal de la Real Sociedad Matemática Española",
        startDate: "2019-02-04",
        endDate: "2019-02-08",
        location: "Santander, España",
        link: "https://2019.bienalrsme.com/"
    },
    {
        author: "Lidia Fernández",
        title: "Krall-Jacobi Polynomials on the Simplex",
        type: "Charla invitada",
        event: "II Joint Meeting Spain-Brazil in Mathematics",
        startDate: "2018-12-11",
        endDate: "2018-12-14",
        location: "Cádiz, España",
        link: "http://spabrazmathcadiz18.uca.es/web/Congreso/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Special functions and Approximation Theory",
        type: "Organización",
        event: "II Joint Meeting Spain-Brazil in Mathematics",
        startDate: "2018-12-11",
        endDate: "2018-12-14",
        location: "Cádiz, España",
        link: "http://spabrazmathcadiz18.uca.es/web/Congreso/"
    },
    {
        author: "Antonia M. Delgado",
        title: "Orthogonal polynomials on the triangle and partial differential equations",
        type: "Comunicación invitada",
        event: "IX Jaén Conference on Approximation",
        startDate: "2018-07-09",
        endDate: "2018-07-13",
        location: "Úbeda, Jaén, España",
        link: "http://www.ujaen.es/revista/jja/jca/"
    },
    {
        author: "Lidia Fernández",
        title: "Darboux transformation from the Appell-Lauricella operator",
        type: "Comunicación invitada",
        event: "IX Jaén Conference on Approximation",
        startDate: "2018-07-09",
        endDate: "2018-07-13",
        location: "Úbeda, Jaén, España",
        link: "http://www.ujaen.es/revista/jja/jca/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Zeros of bivariate classical orthogonal polynomials on the unit disk",
        type: "Póster",
        event: "IX Jaén Conference on Approximation (Organizadora de Mini-symposium)",
        startDate: "2018-07-09",
        endDate: "2018-07-13",
        location: "Úbeda, Jaén, España",
        link: "http://www.ujaen.es/revista/jja/jca/"
    },
    {
        author: "Teresa E. Pérez",
        title: "GOYA - Grupo en Ortogonalidad y Aplicaciones (FQM-384)",
        type: "Ponencia oral",
        event: "I Jornadas (D)Efecto Pasillo, Facultad de Ciencias UGR",
        startDate: "2018-06-15",
        endDate: "2018-06-15",
        location: "Granada, España",
        link: "https://fciencias.ugr.es/2-principal/2943-i-jornadas-d-efecto-pasillo"
    },
    {
        author: "Miguel A. Piñar",
        title: "Polinomios ortogonales en varias variables",
        type: "Curso",
        event: "UN Encuentro de Matemáticas 2018",
        startDate: "2018-06-13",
        endDate: "2018-06-15",
        location: "Bogotá, Colombia",
        link: "http://ciencias.bogota.unal.edu.co/unemat2018/"
    },

    // --- 2017 ---
    {
        author: "Lidia Fernández",
        title: "Fourth order partial differential equations for Krall-type orthogonal polynomials on the triangle",
        type: "Póster",
        event: "IV Encuentro Orthonet 2017",
        startDate: "2017-11-17",
        endDate: "2017-11-19",
        location: "El Escorial, Madrid, España",
        link: "https://www.icmat.es/RT/optrim/workshop/"
    },
    {
        author: "Clotilde Martínez",
        title: "Asymptotic behaviour of the Christoffel functions on the Unit Ball",
        type: "Póster",
        event: "IV Encuentro Orthonet 2017",
        startDate: "2017-11-17",
        endDate: "2017-11-19",
        location: "El Escorial, Madrid, España",
        link: "https://www.icmat.es/RT/optrim/workshop/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Hermite classical orthogonal polynomials on the unit disk",
        type: "Póster",
        event: "IV Encuentro Orthonet 2017",
        startDate: "2017-11-17",
        endDate: "2017-11-19",
        location: "El Escorial, Madrid, España",
        link: "https://www.icmat.es/RT/optrim/workshop/"
    },
    {
        author: "Miguel A. Piñar",
        title: "Best Polynomial Approximation on the Unit Ball",
        type: "Póster",
        event: "IV Encuentro Orthonet 2017",
        startDate: "2017-11-17",
        endDate: "2017-11-19",
        location: "El Escorial, Madrid, España",
        link: "https://www.icmat.es/RT/optrim/workshop/"
    },
    {
        author: "Joaquín F. Sánchez Lara",
        title: "On weakly admissible external fields",
        type: "Póster",
        event: "IV Encuentro Orthonet 2017",
        startDate: "2017-11-17",
        endDate: "2017-11-19",
        location: "El Escorial, Madrid, España",
        link: "https://www.icmat.es/RT/optrim/workshop/"
    },
    {
        author: "Miguel A. Piñar",
        title: "Bounds in Multivariate Polynomial Approximation",
        type: "Comunicación invitada",
        event: "Third Pacific Rim Mathematical Association (PRIMA) Congress",
        startDate: "2017-08-14",
        endDate: "2017-08-18",
        location: "Oaxaca, México",
        link: "https://prima2017.math.unam.mx/"
    },
    {
        author: "Lidia Fernández",
        title: "Fourth order partial differential equations for Krall-type orthogonal polynomials on the triangle",
        type: "Póster",
        event: "Foundations of Computational Mathematics (FoCM17)",
        startDate: "2017-07-10",
        endDate: "2017-07-19",
        location: "Barcelona, España",
        link: "http://www.ub.edu/focm2017/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Zeros of bivariate classical orthogonal polynomials on the unit disk",
        type: "Póster",
        event: "Foundations of Computational Mathematics (FoCM17)",
        startDate: "2017-07-10",
        endDate: "2017-07-19",
        location: "Barcelona, España",
        link: "http://www.ub.edu/focm2017/"
    },
    {
        author: "Clotilde Martínez",
        title: "Asymptotics of the Christoffel functions on the unit ball in the presence of a mass on the sphere",
        type: "Póster",
        event: "VIII Jaen Conference on Approximation Theory",
        startDate: "2017-07-02",
        endDate: "2017-07-07",
        location: "Úbeda, Jaén, España",
        link: "http://www.ujaen.es/revista/jja/jca/"
    },
    {
        author: "Miguel A. Piñar",
        title: "Estimates in Best Polynomial Approximation on the unit ball",
        type: "Comunicación",
        event: "VIII Jaen Conference on Approximation Theory",
        startDate: "2017-07-02",
        endDate: "2017-07-07",
        location: "Úbeda, Jaén, España",
        link: "http://www.ujaen.es/revista/jja/jca/"
    },
    {
        author: "Miguel A. Piñar",
        title: "Estimates in Best Polynomial Approximation in Several Variables",
        type: "Comunicación invitada",
        event: "IV Encuentro Conjunto RSME-SMM",
        startDate: "2017-06-19",
        endDate: "2017-06-22",
        location: "Valladolid, España",
        link: "http://rsme-smm-2017.uva.es/"
    },
    {
        author: "Antonia M. Delgado",
        title: "Sobolev Orthogonal Polynomials in Several Variables",
        type: "Comunicación",
        event: "VI Iberoamerican Workshop on Orthogonal Polynomials and Applications (VI EIBPOA)",
        startDate: "2017-05-09",
        endDate: "2017-05-12",
        location: "Uberaba, Brasil",
        link: "http://eibpoa2017.weebly.com/"
    },
    {
        author: "Lidia Fernández",
        title: "On orthogonal polynomials in several variables",
        type: "Plenary Speaker",
        event: "VI Iberoamerican Workshop on Orthogonal Polynomials and Applications (VI EIBPOA)",
        startDate: "2017-05-09",
        endDate: "2017-05-12",
        location: "Uberaba, Brasil",
        link: "http://eibpoa2017.weebly.com/"
    },
    {
        author: "Lidia Fernández",
        title: "Zeros of classical orthogonal polynomials in two variables",
        type: "Conferencia invitada",
        event: "Optimal Point Configurations and Orthogonal Polynomials 2017",
        startDate: "2017-04-19",
        endDate: "2017-04-22",
        location: "Castro Urdiales, España",
        link: "http://www.opcop2017.unican.es/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Bivariate orthogonal polynomials, 2D Toda lattices and Lax-type pairs",
        type: "Conferencia invitada",
        event: "Optimal Point Configurations and Orthogonal Polynomials 2017",
        startDate: "2017-04-19",
        endDate: "2017-04-22",
        location: "Castro Urdiales, España",
        link: "http://www.opcop2017.unican.es/"
    },
    {
        author: "Joaquín F. Sánchez Lara",
        title: "Equilibrium measures in an external created by fixed charges",
        type: "Conferencia invitada",
        event: "Optimal Point Configurations and Orthogonal Polynomials 2017",
        startDate: "2017-04-19",
        endDate: "2017-04-22",
        location: "Castro Urdiales, España",
        link: "http://www.opcop2017.unican.es/"
    },
    {
        author: "Antonia M. Delgado",
        title: "Polinomios núcleos y funciones de Christoffel para polinomios ortogonales de Sobolev en la bola unidad",
        type: "Póster",
        event: "Congreso Bienal de la Real Sociedad Matemática Española (RSME2017)",
        startDate: "2017-01-30",
        endDate: "2017-02-03",
        location: "Zaragoza, España",
        link: "http://eventos.rsme.es/4762/detail/congreso-bienal-de-la-real-sociedad-matematica-espanola.html"
    },
    {
        author: "Lidia Fernández",
        title: "Polinomios núcleos y funciones de Christoffel para polinomios ortogonales de Sobolev en la bola unidad",
        type: "Póster",
        event: "Congreso Bienal de la Real Sociedad Matemática Española (RSME2017)",
        startDate: "2017-01-30",
        endDate: "2017-02-03",
        location: "Zaragoza, España",
        link: "http://eventos.rsme.es/4762/detail/congreso-bienal-de-la-real-sociedad-matematica-espanola.html"
    },
    {
        author: "Clotilde Martínez",
        title: "Orthogonal polynomials on the unit ball with a mass on the sphere",
        type: "Póster",
        event: "Congreso Bienal de la Real Sociedad Matemática Española (RSME2017)",
        startDate: "2017-01-30",
        endDate: "2017-02-03",
        location: "Zaragoza, España",
        link: "http://eventos.rsme.es/4762/detail/congreso-bienal-de-la-real-sociedad-matematica-espanola.html"
    },
    {
        author: "Teresa E. Pérez",
        title: "Toda lattices and orthogonal polynomials in two variables",
        type: "Póster",
        event: "Congreso Bienal de la Real Sociedad Matemática Española (RSME2017)",
        startDate: "2017-01-30",
        endDate: "2017-02-03",
        location: "Zaragoza, España",
        link: "http://eventos.rsme.es/4762/detail/congreso-bienal-de-la-real-sociedad-matematica-espanola.html"
    },
    {
        author: "Joaquín F. Sánchez Lara",
        title: "Medidas de equilibrio en presencia de campos externos racionales débiles",
        type: "Póster",
        event: "Congreso Bienal de la Real Sociedad Matemática Española (RSME2017)",
        startDate: "2017-01-30",
        endDate: "2017-02-03",
        location: "Zaragoza, España",
        link: "http://eventos.rsme.es/4762/detail/congreso-bienal-de-la-real-sociedad-matematica-espanola.html"
    },

    // --- 2016 ---
    {
        author: "Miguel A. Piñar",
        title: "Estimates in Best Polynomial Approximation on the Unit Ball",
        type: "Invited Speaker",
        event: "Workshop SIGMA’2016, Signal, Image, Geometry, Modelling, Approximation",
        startDate: "2016-10-31",
        endDate: "2016-11-05",
        location: "Marsella, Francia",
        link: "https://www.ceremade.dauphine.fr/~peyre/sigma2016/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Polinomios ortogonales bivariados, redes de Toda bidimensionales y pares de tipo Lax",
        type: "Conferencia invitada",
        event: "XI Encuentro de Investigación en Teoría de Aproximación (XI EITA 2016)",
        startDate: "2016-10-21",
        endDate: "2016-10-23",
        location: "Ainsa, Huesca, España",
        link: "http://iuma.unizar.es/es/xieita2016"
    },
    {
        author: "Teresa E. Pérez",
        title: "Bivariate orthogonal polynomials, 2D Toda lattices and Lax-type representation",
        type: "Póster",
        event: "4th Dolomites Workshop on Constructive Approximation and Applications (DWCAA16)",
        startDate: "2016-09-08",
        endDate: "2016-09-13",
        location: "Alba di Canazei, Italia",
        link: "http://events.math.unipd.it/dwcaa16/"
    },
    {
        author: "Miguel A. Piñar",
        title: "On a Uvarov type modification of orthogonal polynomials on the unit ball",
        type: "Comunicación",
        event: "4th Dolomites Workshop on Constructive Approximation and Applications (DWCAA16)",
        startDate: "2016-09-08",
        endDate: "2016-09-13",
        location: "Alba di Canazei, Italia",
        link: "http://events.math.unipd.it/dwcaa16/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Ball inner product with an outward normal derivative extra term",
        type: "Comunicación",
        event: "VII Jaen Conference on Approximation Theory",
        startDate: "2016-07-03",
        endDate: "2016-07-08",
        location: "Úbeda, Jaén, España",
        link: "http://www.ujaen.es/revista/jja/jca/"
    },
    {
        author: "Lidia Fernández",
        title: "Krall orthogonal polynomials on the simplex",
        type: "Comunicación",
        event: "XII International Conference on Approximation and Optimization in the Caribbean",
        startDate: "2016-06-05",
        endDate: "2016-06-10",
        location: "La Habana, Cuba",
        link: "http://gama.uc3m.es/claroline1811/courses/APPOPT16/document/index.html"
    },
    {
        author: "Antonia M. Delgado",
        title: "Asymptotics of Sobolev Orthogonal polynomials on the unit ball",
        type: "Comunicación invitada",
        event: "Second joint Conference of the Belgian, Royal Spanish, and Luxembourg Mathematical Societies",
        startDate: "2016-06-06",
        endDate: "2016-06-08",
        location: "Logroño (La Rioja), España",
        link: "http://bsl.unirioja.es/"
    },
    {
        author: "Lidia Fernández",
        title: "An analogue of Krall orthogonal polynomials on the simplex",
        type: "Comunicación invitada",
        event: "Second joint Conference of the Belgian, Royal Spanish, and Luxembourg Mathematical Societies",
        startDate: "2016-06-06",
        endDate: "2016-06-08",
        location: "Logroño (La Rioja), España",
        link: "http://bsl.unirioja.es/"
    },
    {
        author: "Clotilde Martínez",
        title: "Orthogonality for generalized Gegenbauer weight functions on the ball with an extra term on the sphere",
        type: "Póster",
        event: "Second joint Conference of the Belgian, Royal Spanish, and Luxembourg Mathematical Societies",
        startDate: "2016-06-06",
        endDate: "2016-06-08",
        location: "Logroño (La Rioja), España",
        link: "http://bsl.unirioja.es/"
    },
    {
        author: "Antonia M. Delgado",
        title: "Sobolev orthogonal polynomials on the unit ball via outward normal derivatives",
        type: "Póster",
        event: "Tercer Encuentro de la Red de Polinomios Ortogonales y Teoría de Aproximación (Orthonet 2016)",
        startDate: "2016-05-06",
        endDate: "2016-05-07",
        location: "Albarracín (Teruel), España",
        link: "http://iuma.unizar.es/es/actividades/orthonet-2016"
    },
    {
        author: "Clotilde Martínez",
        title: "Orthogonal polynomials on the unit ball and fourth order partial differential equations",
        type: "Póster",
        event: "Tercer Encuentro de la Red de Polinomios Ortogonales y Teoría de Aproximación (Orthonet 2016)",
        startDate: "2016-05-06",
        endDate: "2016-05-07",
        location: "Albarracín (Teruel), España",
        link: "http://iuma.unizar.es/es/actividades/orthonet-2016"
    },
    {
        author: "Joaquín F. Sánchez Lara",
        title: "Equilibrium measures in presence of weak rational external fields",
        type: "Póster",
        event: "Tercer Encuentro de la Red de Polinomios Ortogonales y Teoría de Aproximación (Orthonet 2016)",
        startDate: "2016-05-06",
        endDate: "2016-05-07",
        location: "Albarracín (Teruel), España",
        link: "http://iuma.unizar.es/es/actividades/orthonet-2016"
    },

    // --- 2015 ---
    {
        author: "Teresa E. Pérez",
        title: "Ball polynomials and modifications",
        type: "Invited Speaker",
        event: "First Joint Meeting Brazil-Spain in Mathematics, Sesión Especial 'Special Functions and Approximation Theory'",
        startDate: "2015-12-07",
        endDate: "2015-12-10",
        location: "Fortaleza, Brasil",
        link: "http://www.sbm.org.br/jointmeeting-spain/"
    },
    {
        author: "Antonia M. Delgado",
        title: "Orthogonal polynomials on the unit ball",
        type: "Comunicación",
        event: "VI Jaen Conference on Approximation Theory",
        startDate: "2015-06-28",
        endDate: "2015-07-03",
        location: "Úbeda (Jaén), España",
        link: "http://www.ujaen.es/revista/jja/jca/2015/index.php"
    },
    {
        author: "Clotilde Martínez",
        title: "Orthogonal polynomials on the ball with an extra term on the sphere",
        type: "Póster",
        event: "VI Jaen Conference on Approximation Theory",
        startDate: "2015-06-28",
        endDate: "2015-07-03",
        location: "Úbeda (Jaén), España",
        link: "http://www.ujaen.es/revista/jja/jca/2015/index.php"
    },
    {
        author: "Teresa E. Pérez",
        title: "On two variable Koornwinder polynomials and three term relations",
        type: "Póster",
        event: "VI Jaen Conference on Approximation Theory",
        startDate: "2015-06-28",
        endDate: "2015-07-03",
        location: "Úbeda (Jaén), España",
        link: "http://www.ujaen.es/revista/jja/jca/2015/index.php"
    },
    {
        author: "Miguel A. Piñar",
        title: "Asymptotics of the Christoffel functions on the square",
        type: "Comunicación",
        event: "VI Jaen Conference on Approximation Theory",
        startDate: "2015-06-28",
        endDate: "2015-07-03",
        location: "Úbeda (Jaén), España",
        link: "http://www.ujaen.es/revista/jja/jca/2015/index.php"
    },
    {
        author: "Teresa E. Pérez",
        title: "Teoría Avanzada en Polinomios Ortogonales Multivariados",
        type: "Minicurso",
        event: "V Encuentro Iberoamericano de Polinomios Ortogonales y Aplicaciones (V EIBPOA)",
        startDate: "2015-06-08",
        endDate: "2015-06-14",
        location: "México D. F., México",
        link: "http://paginas.matem.unam.mx/eibpoa2015/index.php/es/"
    },
    {
        author: "Lidia Fernández",
        title: "Sobolev Orthogonal Polynomials on the Unit Ball via Outward Normal Derivatives",
        type: "Invited Presentation",
        event: "13th International Symposium on Orthogonal Polynomials, Special Functions and Applications (OPSFA13), Minisymposium Sobolev Orthogonal Polynomials",
        startDate: "2015-06-01",
        endDate: "2015-06-05",
        location: "NIST, Gaithersburg, USA",
        link: "http://www.siam.org/meetings/opsfa13/"
    },
    {
        author: "Teresa E. Pérez",
        title: "Multivariate Orthogonal Polynomials and Modified Moment Functionals",
        type: "Plenary Speaker",
        event: "13th International Symposium on Orthogonal Polynomials, Special Functions and Applications (OPSFA13)",
        startDate: "2015-06-01",
        endDate: "2015-06-05",
        location: "NIST, Gaithersburg, USA",
        link: "http://www.siam.org/meetings/opsfa13/"
    },
    {
        author: "Miguel A. Piñar",
        title: "Orthogonal Polynomials on the Unit Ball and Fourth Order Partial Differential Equations",
        type: "Invited Presentation",
        event: "13th International Symposium on Orthogonal Polynomials, Special Functions and Applications (OPSFA13), Minisymposium Multivariate Orthogonal Polynomials",
        startDate: "2015-06-01",
        endDate: "2015-06-05",
        location: "NIST, Gaithersburg, USA",
        link: "http://www.siam.org/meetings/opsfa13/"
    }

] 

export { communications };