/*README

En este archivo se encuentran las publicaciones realizadas por los miembros del grupo GOYA.
Para añadir nuevas publicaciones, seguir las instrucciones al final del archivo.

Revisiones sucesivas:
- Creación del archivo y puesta en marcha de la web: Diciembre 2025 por Juan Antonio Villegas.

Fecha de la última actualización: 2025-12-16

*/

const publications = [

/*
Para añadir nuevas publicaciones, copiar y pegar el siguiente bloque, y completar los datos correspondientes.
Tener en cuenta que si la publicación ya está publicada, se debe incluir el año (date) y omitir el estado (status). 
Si es un preprint o aceptado, incluir el estado y omitir el año.
    
    {
        author: "Autor(es)",
        title: "Título de la publicación.",
        date: 2026, // Año de publicación (si está publicado)
        status: "Preprint" / "Accepted", // Omitir si está publicado
        journal_info: "Información de la revista, volumen, páginas, etc.",
        links: {
            arXiv: "link al preprint en arXiv (si aplica)",
            OpenAccess: "link al artículo de acceso abierto (si aplica)",
            MRxxxxxxx: "link a MathSciNet (si aplica)",
            Article: "link al artículo publicado (si aplica)"
        }
    },

*/


    // ─── Preprints ───────────────────────────────────────────────────────


    {
        author: "L. Fernández, A. Foulquié-Moreno, J. A. Villegas",
        title: "Jacobi-Piñeiro Multiple Orthogonal Polynomials on the simplex.",
        status: "Preprint",
        links: {
            arXiv: "https://arxiv.org/abs/2601.19416"
        }
    },
    {
        author: "R. Cruz-Barroso, L. Fernández, F. Marcellán",
        title: "A mixed interpolation-regression method for numerical integration on the unit circle using zeros of para-orthogonal polynomials.",
        status: "Preprint",
        links: {
            arXiv: "https://arxiv.org/abs/2601.18721"
        }
    },
    {
        author: "S. Barbero, A. M. Delgado, L. Fernández",
        title: "An explanation of the number or points and symmetries of starbursts.",
        status: "Preprint",
        links: {
            arXiv: "https://arxiv.org/abs/2507.06170"
        }
    },
    {
        author: "A. Branquinho, A. M. Delgado, T. E. Pérez",
        title: "Simplex and generalized Disk Polynomials: Explicit relations and Partial Differential Equations",
        status: "Preprint"
    },
    
    {
        author: "L. Fernández, J. S. Geronimo, P. Iliev",
        title: "Compactly supported continuous piecewise polynomial multiresolution analysis",
        status: "Preprint",
        links: {
            arXiv: "https://arxiv.org/abs/2412.02908"
        }
    },
    {
        author: "T. E. Pérez, M. A. Piñar, M. J. Recarte",
        title: "Bivariate Bernstein-type operators on the simplex. Standard and negative parameters.",
        status: "Preprint"
    },
    {
        author: "M. A. Piñar",
        title: "A fully diagonalized spectral method on the unit ball.",
        status: "Preprint"
    },
    {
        author: "J. F. Sánchez-Lara",
        title: "n electrostatic model for the roots of discrete classical orthogonal polynomials.",
        status: "Preprint",
        links: {
            arXiv: "https://arxiv.org/abs/2410.10405"
        }
    },

    // ─── Aceptados ───────────────────────────────────────────────────────

    // ...

    // ─── Publicados ──────────────────────────────────────────────────────


    // --- Publicaciones 2026 ---
    {
        author: "L. Fernández, J.A. Villegas",
        title: "Multiple Orthogonal Polynomials of two real variable",
        date: 2026,
        journal_info: "Journal of Mathematical Analysis and Applications, 553 (2026), 129811.",
        links: {
            OpenAccess: "https://www.sciencedirect.com/science/article/pii/S0022247X2500592X",
            MR4925919: "https://mathscinet.ams.org/mathscinet/article?mr=4925919",
            arXiv: "https://arxiv.org/abs/2412.09523"
        }
    },
    {
        author: "G. Alhama, M. E. Marriaga, M. A. Piñar.",
        title: "Ladder operators for bivariate generalized classical symmetric orthogonal polynomials",
        date: 2026,
        journal_info: "J. Math. Anal. Appl. 555 (2026), 130207.",
        links: {
            Article: "https://doi.org/10.1016/j.jmaa.2025.130207"
        }
    },

    // --- Publicaciones 2025 ---
    {
        author: "C. F. Bracciali, A. M. Delgado, L. Fernández, T. E. Pérez",
        title: "R_II type three term relations for bivariate polynomials orthogonal with respect to varying weights",
        date: 2025,
        journal_info: "Results in Mathematics 80 (2025), 206.",
        links: {
            Article: "https://link.springer.com/article/10.1007/s00025-025-02513-3",
            MR4961449: "https://mathscinet.ams.org/mathscinet-getitem?mr=4961449",
            arXiv: "https://arxiv.org/abs/2409.16857"
        }
    },
    {
        author: "A. Branquinho, A. Foulquié, T. E. Pérez, M. A. Piñar",
        title: "Lax-type pairs in the theory of bivariate orthogonal polynomials.",
        date: 2025,
        journal_info: "Linear Algebra Appl. 721 (2025), pages 219-239.",
        links: {
            OpenAccess: "https://doi.org/10.1016/j.laa.2024.03.020",
            MR4913737: "https://mathscinet.ams.org/mathscinet-getitem?mr=4913737",
            arXiv: "https://arxiv.org/abs/2311.05949"
        }
    },
    {
        author: "L. Fernández, R. Cruz-Barroso",
        title: "Orthogonal Laurent polynomials of two real variables.",
        date: 2025,
        journal_info: "Studies in Applied Mathematics 154 (2025), e12783.",
        links: {
            OpenAccess: "https://onlinelibrary.wiley.com/doi/10.1111/sapm.12783",
            MR4840734: "https://mathscinet.ams.org/mathscinet-getitem?mr=4840734",
            arXiv: "https://arxiv.org/abs/2404.14303"
        }
    },

    // --- Publicaciones 2024 ---
    {
        author: "C. Beltrán, A. M. Delgado, L. Fernández, J. Sánchez Lara",
        title: "On Gegenbauer Point Processes on the unit interval.",
        date: 2024,
        journal_info: "Potential Anal. 60 (2024), 139-172.",
        links: {
            OpenAccess: "https://link.springer.com/article/10.1007/s11118-022-10045-6",
            MR4696034: "https://mathscinet.ams.org/mathscinet-getitem?mr=4696034",
            arXiv: "https://arxiv.org/abs/2110.05918"
        }
    },
    {
        author: "C. F. Bracciali, G. S. Costa, T. E. Pérez",
        title: "Centrosymmetric and reverse matrices in bivariate orthogonal polynomials.",
        date: 2024,
        journal_info: "Linear Algebra Appl. 692 (2024), 212-240.",
        links: {
            OpenAccess: "https://www.sciencedirect.com/science/article/abs/pii/S0024379524001332",
            MR4732924: "https://mathscinet.ams.org/mathscinet-getitem?mr=4732924",
            arXiv: "https://arxiv.org/abs/2310.08239"
        }
    },
    {
        author: "L. Fernández, F. Marcellán, T. E. Pérez, M. A. Piñar",
        title: "Sobolev orthogonal polynomials and spectral methods in boundary value problems.",
        date: 2024,
        journal_info: "Appl. Numer. Math. 200 (2024), 254-272.",
        links: {
            OpenAccess: "https://doi.org/10.1016/j.apnum.2023.07.027",
            MR4731107: "https://mathscinet.ams.org/mathscinet-getitem?mr=4731107"
        }
    },
    {
        author: "L. Fernández, F. Marcellán, T. E. Pérez, M. A. Piñar",
        title: "Sobolev orthogonal polynomials for solving the Schrödinger equation with potentials \\(V(x) = x^{2k}, k > 1\\).",
        date: 2024,
        // En este caso, el journal_info es la referencia del libro/capítulo
        journal_info: "In: Castillo, K., Durán, A.J. (eds) Orthogonal Polynomials and Special Functions. Coimbra Mathematical Texts 3. Springer, Cham. 2024.",
        links: {
            DOI: "https://doi.org/10.1007/978-3-031-69646-6_4"
        }
    },
    {
        author: "D. Lara-Velasco, T. E. Pérez",
        title: "Bernstein-type operators preserving derivatives.",
        date: 2024,
        journal_info: "Comput. Appl. Math. 43 (2024), no. 5, Paper No. 277, 30 pp.",
        links: {
            OpenAccess: "https://link.springer.com/article/10.1007/s40314-024-02796-2",
            MR4757556: "https://mathscinet.ams.org/mathscinet-getitem?mr=4757556"
        }
    },

    // --- Publicaciones 2023 ---
    {
        author: "C. F. Bracciali, M. A. Piñar",
        title: "Multivariate orthogonal polynomials and elementary symmetric functions.",
        date: 2023,
        journal_info: "Numer. Algorithms 92 (2023), 183-206.",
        links: {
            OpenAccess: "https://doi.org/10.1007/s11075-022-01434-4",
            MR4530334: "https://mathscinet.ams.org/mathscinet-getitem?mr=4530334"
        }
    },
    {
        author: "A. Branquinho, A. Foulquié, T. E. Pérez",
        title: "Quadratic decomposition of bivariate orthogonal polynomials.",
        date: 2023,
        journal_info: "Medit. J. Math. 20 (2023), no. 3, 118.",
        links: {
            OpenAccess: "https://link.springer.com/article/10.1007/s00009-023-02307-3",
            MR4549895: "https://mathscinet.ams.org/mathscinet-getitem?mr=4549895"
        }
    },
    {
        author: "L. Fernández, M. D. de la Iglesia",
        title: "QBD processes associated with Jacobi-Koornwinder bivariate polynomials and urn models.",
        date: 2023,
        journal_info: "Medit. J. Math. 20 (2023), no. 6, 290.",
        links: {
            OpenAccess: "https://link.springer.com/article/10.1007/s00009-023-02486-z",
            MR4635064: "https://mathscinet.ams.org/mathscinet-getitem?mr=4635064"
        }
    },
    {
        author: "M. E. Marriaga, T. E. Pérez, M. A. Piñar, M. J. Recarte",
        title: "Approximation via gradients on the ball. The Zernike case.",
        date: 2023,
        journal_info: "J. Comput. Appl. Math. 430 (2023), Paper No. 115258",
        links: {
            OpenAccess: "https://www.sciencedirect.com/science/article/pii/S0377042723002029?via%3Dihub",
            MR4577313: "https://mathscinet.ams.org/mathscinet-getitem?mr=4577313"
        }
    },
    {
        author: "M. E. Marriaga, T. E. Pérez, M. J. Recarte",
        title: "Simultaneous approximation via laplacians on the unit ball.",
        date: 2023,
        journal_info: "Medit. J. Math. 20 (2023), Article Number 316.",
        links: {
            OpenAccess: "https://doi.org/10.1007/s00009-023-02509-9",
            MR4655120: "https://mathscinet.ams.org/mathscinet-getitem?mr=4655120"
        }
    },
    {
        author: "A. Martínez-Finkelshtein, R. Orive, J. Sánchez-Lara",
        title: "Electrostatic partners and zeros of orthogonal and multiple orthogonal polynomials.",
        date: 2023,
        journal_info: "Constr. Approx. 58 (2023), 271-342.",
        links: {
            OpenAccess: "https://rdcu.be/dh2W9",
            MR4649421: "https://mathscinet.ams.org/mathscinet-getitem?mr=4649421",
            arXiv: "https://arxiv.org/abs/2203.01419"
        }
    },
    {
        author: "M. J. Recarte, M. E. Marriaga, T. E. Pérez",
        title: "A class of Bernstein-type operators on the unit disk.",
        date: 2023,
        journal_info: "Bull. Malays. Math. Sci. Soc. 46 (2023), no. 4, 127.",
        links: {
            OpenAccess: "https://link.springer.com/article/10.1007/s40840-023-01520-3",
            MR4596003: "https://mathscinet.ams.org/mathscinet-getitem?mr=4596003"
        }
    },

    // --- Publicaciones 2022 ---
    {
        author: "R. Aktas, I. Area, T. E. Pérez",
        title: "Three term relations for multivariate Uvarov orthogonal polynomials.",
        date: 2022,
        journal_info: "Comput. Appl. Math. 41 (2022), Article number: 330.",
        links: {
            OpenAccess: "https://doi.org/10.1007/s40314-022-02030-x",
            MR4491185: "https://mathscinet.ams.org/mathscinet-getitem?mr=4491185"
        }
    },
    {
        author: "C. F. Bracciali, G. S. Costa, T. E. Pérez",
        title: "Two variable Freud orthogonal polynomials and matrix Painlevé-type difference equations.",
        date: 2022,
        journal_info: "J. Differ. Equ. Appl. 28 (2022) 1157-1177.",
        links: {
            arXiv: "https://arxiv.org/abs/2208.10361",
            MR4502152: "https://mathscinet.ams.org/mathscinet-getitem?mr=4502152"
        }
    },
    
    // --- Publicaciones 2021 ---
    {
        author: "C. F. Bracciali, T. E. Pérez",
        title: "Mixed orthogonality on the unit ball.",
        date: 2021,
        journal_info: "Comput. Appl. Math. 40 (2021), no. 8, Paper No. 274.",
        links: {
            MR4325900: "https://mathscinet.ams.org/mathscinet-getitem?mr=4325900"
        }
    },
    {
        author: "H. A. Dueñas, O. Salazar-Morales, M. A. Piñar",
        title: "Sobolev orthogonal polynomials of several variables on product domains.",
        date: 2021,
        journal_info: "Medit. J. Math. 18 (2021), no. 5, 227.",
        links: {
            MR4313603: "https://mathscinet.ams.org/mathscinet-getitem?mr=4313603"
        }
    },
    {
        author: "L. Fernández, M. D. de la Iglesia",
        title: "Quasi-birth-and-death processes and multivariate orthogonal polynomials.",
        date: 2021,
        journal_info: "J. Math. Anal. Appl. 499 (2021), no. 1, 125029, 33 pp.",
        links: {
            MR4213685: "https://mathscinet.ams.org/mathscinet-getitem?mr=4213685"
        }
    },
    {
        author: "F. Lizarte, T. E. Pérez, M. A. Piñar",
        title: "The radial part of a class of Sobolev polynomials on the unit ball.",
        date: 2021,
        journal_info: "Numer. Algorithms 87 (2021), no. 4, 1369-1389.",
        links: {
            MR4287895: "https://mathscinet.ams.org/mathscinet-getitem?mr=4287895"
        }
    },
    {
        author: "M. Marriaga, T. E. Pérez, M. A. Piñar",
        title: "Bivariate Koornwinder-Sobolev orthogonal polynomials.",
        date: 2021,
        journal_info: "Mediterr. J. Math. 18 (2021), no. 6, 234.",
        links: {
            MR4320531: "https://mathscinet.ams.org/mathscinet-getitem?mr=4320531"
        }
    },
    // --- Publicaciones 2020 ---
    {
        author: "A. M. Delgado, P. Iliev, L. Fernández",
        title: "Darboux transformation from the Appell-Lauricella operator.",
        date: 2020,
        journal_info: "J. Math. Anal. Appl. 482 (2020), 123546, 21 pp.",
        links: {
            MR4015280: "https://mathscinet.ams.org/mathscinet-getitem?mr=4015280"
        }
    },
    {
        author: "F. Marcellán, M. E. Marriaga, T. E. Pérez, M. A. Piñar",
        title: "Geronimus transformations of bivariate linear functionals.",
        date: 2020,
        journal_info: "J. Math. Anal. Appl. 484 (2020), 123736, 30 pp.",
        links: {
            MR4040130: "https://mathscinet.ams.org/mathscinet-getitem?mr=4040130"
        }
    },
    
    // --- Publicaciones 2019 ---
    {
        author: "F. Marcellán, M. E. Marriaga, T. E. Pérez, M. A. Piñar",
        title: "Coherent pairs of bivariate orthogonal polynomilas",
        date: 2019,
        journal_info: "J. Approx. Theory 245 (2019), 40-63.",
        links: {
            MR3945603: "https://mathscinet.ams.org/mathscinet-getitem?mr=3945603"
        }
    },
    {
        author: "C. Martínez, M. A. Piñar",
        title: "Asymptotic behaviour of the Christoffel functions on the unit ball in the presence of a mass on the sphere.",
        date: 2019,
        journal_info: "Medit. J. Math. 16 (2019), no. 1, Art. 22, 18 pp.",
        links: {
            MR3897518: "https://mathscinet.ams.org/mathscinet-getitem?mr=3897518"
        }
    },
    {
        author: "R. Orive, J. F. Sánchez Lara, F. Wielonsky",
        title: "Equilibrium problems in weakly admissible external fields created by pointwise charges.",
        date: 2019,
        journal_info: "J. Approx. Theory 244 (2019), 71-100.",
        links: {
            MR3935952: "https://mathscinet.ams.org/mathscinet-getitem?mr=3935952"
        }
    },

    // --- Publicaciones 2018 ---
    {
        author: "A. M. Delgado, L. Fernández, T. E. Pérez",
        title: "Fourth order partial differential equations for Krall-type orthogonal polynomials on the triangle.",
        date: 2018,
        journal_info: "Proc. Amer. Math. Soc. 146 (2018), 3961-3974.",
        links: {
            MR3825849: "https://mathscinet.ams.org/mathscinet-getitem?mr=3825849"
        }
    },
    {
        author: "F. Marcellán, M. Marriaga, T. E. Pérez, M. A. Piñar",
        title: "On bivariate classical orthogonal polynomials.",
        date: 2018,
        journal_info: "Appl. Math. Comput. 325 (2018), 340-357.",
        links: {
            MR3759149: "https://mathscinet.ams.org/mathscinet-getitem?mr=3759149"
        }
    },
    {
        author: "F. Marcellán, M. Marriaga, T. E. Pérez, M. A. Piñar",
        title: "Matrix Pearson equations satisfied by Koornwinder weights in two variables.",
        date: 2018,
        journal_info: "Acta Appl. Math. 153 (2018), 81-100.",
        links: {
            MR3745731: "https://mathscinet.ams.org/mathscinet-getitem?mr=3745731"
        }
    },
    {
        author: "R. Orive, J. F. Sánchez Lara",
        title: "On external fields created by fixed charges.",
        date: 2018,
        journal_info: "J. Math. Anal. Appl. 464 (2018), 119-151.",
        links: {
            MR3794080: "https://mathscinet.ams.org/mathscinet-getitem?mr=3794080"
        }
    },
    {
        author: "M. A. Piñar, Y. Xu",
        title: "Best polynomial approximation on the unit ball.",
        date: 2018,
        journal_info: "IMA J. Numer. Anal. 38 (2018), 1209-1228.",
        links: {
            MR3829159: "https://mathscinet.ams.org/mathscinet-getitem?mr=3829159"
        }
    },

    // --- Publicaciones 2017 ---
    {
        author: "C. F. Bracciali, T. E. Pérez",
        title: "Bivariate orthogonal polynomials, 2D Toda lattices and Lax-type pairs.",
        date: 2017,
        journal_info: "Appl. Math. Comput. 309 (2017), 142-155.",
        links: {
            MR3646384: "http://www.ams.org/mathscinet-getitem?mr=3646384"
        }
    },
    {
        author: "M. Marriaga, T. E. Pérez, M. A. Piñar",
        title: "Three term relations for a class of bivariate polynomials.",
        date: 2017,
        journal_info: "Medit. J. Math. 14 (2017), no. 2, Art. 54, 26 pp.",
        links: {
            MR3619416: "http://www.ams.org/mathscinet-getitem?mr=3619416"
        }
    },
    {
        author: "J. F. Sánchez-Lara",
        title: "On the Sobolev orthogonality of classical orthogonal polynomials for non standard parameters.",
        date: 2017,
        journal_info: "Rocky Mountain J. Math. 47 (2017), 267-288.",
        links: {
            MR3619764: "http://www.ams.org/mathscinet-getitem?mr=3619764"
        }
    },

    // --- Publicaciones 2016 ---
    {
        author: "C. F. Bracciali, J. H. McCabe, T. E. Pérez, A. Sri Ranga",
        title: "A class of orthogonal functions given by a three term recurrence formula.",
        date: 2016,
        journal_info: "Math. Comp. 85 (2016), 1837-1859.",
        links: {
            MR3471110: "http://www.ams.org/mathscinet-getitem?mr=3471110"
        }
    },
    {
        author: "A. M. Delgado, L. Fernández, D. S. Lubinsky, T. E. Pérez, M. A. Piñar",
        title: "Sobolev orthogonal polynomials on the unit ball via outward derivatives.",
        date: 2016,
        journal_info: "J. Math. Anal. Appl. 440 (2016), 716-740.",
        links: {
            MR3484991: "http://www.ams.org/mathscinet-getitem?mr=3484991"
        }
    },
    {
        author: "A. M. Delgado, L. Fernández, T. E. Pérez, M. A. Piñar",
        title: "Multivariate orthogonal polynomials and modified moment functionals.",
        date: 2016,
        journal_info: "SIGMA Symmetry Integrability Geom. Methods Appl. 12 (2016), 090, 25 pages.",
        links: {
            MR3545477: "http://www.ams.org/mathscinet-getitem?mr=3545477"
        }
    },
    {
        author: "C. Martínez, M. A. Piñar",
        title: "Orthogonal polynomials on the unit ball and fourth order partial differential equations.",
        date: 2016,
        journal_info: "SIGMA Symmetry Integrability Geom. Methods Appl. 12 (2016), 020, 11 pages.",
        links: {
            MR3463057: "http://www.ams.org/mathscinet-getitem?mr=3463057"
        }
    },

    // --- Publicaciones 2015 ---
    {
        author: "H. Dueñas, L. Garza, M. A. Piñar",
        title: "A higher order Sobolev-type inner product for orthogonal polynomials in several variables.",
        date: 2015,
        journal_info: "Numer. Algorithms 68 (2015), 35-46.",
        links: {
            MR3296697: "http://www.ams.org/mathscinet-getitem?mr=3296697"
        }
    },
    {
        author: "L. Fernández, F. Marcellán, T. E. Pérez, M. A. Piñar, Y. Xu",
        title: "Sobolev orthogonal polynomials on product domains.",
        date: 2015,
        journal_info: "J. Comput. Appl. Math. 284 (2015), 202-215",
        links: {
            MR3319504: "http://www.ams.org/mathscinet-getitem?mr=3319504"
        }
    },
    {
        author: "R. Orive, J. F. Sánchez-Lara",
        title: "Equilibrium measures in the presence of certain rational external fields.",
        date: 2015,
        journal_info: "J. Math. Anal. Appl. 431 (2015), 1224-1252.",
        links: {
            MR3365867: "http://www.ams.org/mathscinet-getitem?mr=3365867"
        }
    }


];


export { publications };

        