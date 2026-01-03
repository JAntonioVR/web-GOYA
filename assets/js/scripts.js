/*===================================================================
 Scripts JS Para La Web Personal De Investigacion Del Grupo GOYA 
=====================================================================*/
/* En este archivo se gestionan las funciones de carga y renderizado
   de los datos de publicaciones, seminarios, congresos organizados,
   visitas, conferencias impartidas, estancias de investigación y 
   comunicaciones en congresos, utilizando Handlebars.js para las 
   plantillas y jQuery para la manipulación del DOM.

    Autor: Juan Antonio Villegas Recio
    Fecha: Diciembre 2025
*/

// ─── Importacion De Datos ────────────────────────────────────────────────────

import { publications } from '../../data/publications.js';
import { seminars } from '../../data/seminars.js';
import { workshops } from '../../data/workshops.js';
import { visits } from '../../data/visits.js';
import { conferences } from '../../data/conferences.js';
import { stays } from '../../data/stays.js';
import { communications } from '../../data/communications.js';



// ─── Funciones De Agrupacion Y Ordenacion ─────────────────────────────────────

// Función para agrupar y ordenar publicaciones según el año y estado
function groupAndSortPublications(data) {

    // Inicializamos el objeto para las categorías especiales
        let specialPublications = {
            Accepted: [],
            Preprint: []
        };
        const publicationsWithYear = [];

        // 1. Clasificar y separar los artículos
        data.forEach(publication => {
            if (publication.date) {
                // Artículos con año (publicados)
                publicationsWithYear.push(publication);
            } else if (publication.status === "Accepted") {
                // Artículos Aceptados
                specialPublications.Accepted.push(publication);
            } else {
                // Artículos Preprints
                specialPublications.Preprint.push(publication);
            }
        });

        // 2. Agrupar publicaciones con año 
        const grouped = publicationsWithYear.reduce((acc, publication) => {
            const year = publication.date;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(publication);
            return acc;
        }, {});

        // 3. Convertir a array ordenado (por año descendente)
        const yearsArray = Object.keys(grouped)
            .sort((a, b) => b - a)
            .map(year => ({
                year: year,
                publications: grouped[year]
            }));
            
        // 4. Devolver la estructura completa
        return {
            years: yearsArray,
            special: specialPublications // special ahora contiene { Accepted: [...], Preprint: [...] }
        };
}

// Función para determinar el curso académico basado en una fecha
function getAcademicYear(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() es 0-indexado

    // Si el mes es septiembre (9), octubre (10), noviembre (11) o diciembre (12), 
    // pertenece al curso que empieza este año.
    if (month >= 9) {
        return `${year}/${year + 1}`;
    } 
    // Si el mes es de enero (1) a agosto (8), pertenece al curso que terminó el año anterior.
    else {
        return `${year - 1}/${year}`;
    }
}

// Función para agrupar y ordenar seminarios según el curso académico
function groupAndSortSeminars(data) {
    const grouped = data.reduce((acc, seminar) => {
        // 1. Asignar el curso académico
        const academicYear = getAcademicYear(seminar.date);
        
        // 2. Agrupar
        if (!acc[academicYear]) {
            acc[academicYear] = [];
        }
        acc[academicYear].push(seminar);
        return acc;
    }, {});

    // 3. Convertir a array ordenado (el curso más reciente primero)
    const yearsArray = Object.keys(grouped)
        // Ordena: "2024/2025" > "2023/2024"
        .sort((a, b) => {
            // Compara el primer año del curso (e.g., 2024 vs 2023)
            const yearA = parseInt(a.split('/')[0]);
            const yearB = parseInt(b.split('/')[0]);
            return yearB - yearA;
        })
        .map(academicYear => ({
            year: academicYear,
            seminars: grouped[academicYear]
        }));
        
    return yearsArray;
}

// Función para agrupar y ordenar congresos organizados según el curso académico
function groupAndSortWorkshops(data) {
    const grouped = data.reduce((acc, workshop) => {
        // 1. Asignar el curso académico
        const academicYear = getAcademicYear(workshop.startDate);
        
        // 2. Agrupar
        if (!acc[academicYear]) {
            acc[academicYear] = [];
        }
        acc[academicYear].push(workshop);
        return acc;
    }, {});

    // 3. Convertir a array ordenado (el curso más reciente primero)
    const yearsArray = Object.keys(grouped)
        // Ordena: "2024/2025" > "2023/2024"
        .sort((a, b) => {
            // Compara el primer año del curso (e.g., 2024 vs 2023)
            const yearA = parseInt(a.split('/')[0]);
            const yearB = parseInt(b.split('/')[0]);
            return yearB - yearA;
        })
        .map(academicYear => ({
            year: academicYear,
            workshops: grouped[academicYear]
        }));
        
    return yearsArray;
}

// ─── Renderizado Con Handlebars ──────────────────────────────────────────────

// Registramos los helpers comunes
$(document).ready(function() {

    // Definición de los nombres de los meses en español
    const monthsSpanish = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    // Handlebars Helper para formatear fechas 
    Handlebars.registerHelper('formatDate', function(dateString) {
        if (!dateString) return ''; // Manejar si la fecha está vacía

        // Crear un objeto Date usando el formato ISO (YYYY-MM-DD) de tu fichero
        const date = new Date(dateString + 'T00:00:00'); // Añadimos T00:00:00 para evitar problemas de zona horaria

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        // Componer el formato deseado
        return `${day} de ${monthsSpanish[monthIndex]} de ${year}`;
    });

    // Handlebars Helper para formatear intervalos de fechas
    Handlebars.registerHelper('formatDateInterval', function (startDate, endDate) {
        const start = new Date(startDate),
            dayStart = start.getDate(),
            monthIndexStart = start.getMonth(),
            yearStart = start.getFullYear();

        const end = new Date(endDate),
              dayEnd = end.getDate(),
              monthIndexEnd = end.getMonth(),
              yearEnd = end.getFullYear();

        if (yearStart === yearEnd) {
            if (monthIndexStart === monthIndexEnd) {
                if (dayStart === dayEnd) {
                    // Mismo día
                    return `${dayStart} de ${monthsSpanish[monthIndexStart]} de ${yearStart}`;
                }
                // Mismo mes y año
                return `${dayStart} - ${dayEnd} de ${monthsSpanish[monthIndexStart]} de ${yearStart}`;
            } else {
                // Mismo año, meses diferentes
                return `${dayStart} de ${monthsSpanish[monthIndexStart]} - ${dayEnd} de ${monthsSpanish[monthIndexEnd]} de ${yearStart}`;
            }
        } else {
            // Años diferentes
            return `${dayStart} de ${monthsSpanish[monthIndexStart]} de ${yearStart} - ${dayEnd} de ${monthsSpanish[monthIndexEnd]} de ${yearEnd}`;
        }
    });

}
);


// ─── PUBLICACIONES ───────────────────────────────────────────────────────────

$(document).ready(function() {
    // 1. Pre-procesar los datos
    const dataToRender = groupAndSortPublications(publications);


    // 2. Obtener y compilar la plantilla
    const templateScript = $('#publications-template').html();
    const template = Handlebars.compile(templateScript);

    const templateScriptNavbar = $('#publications-navbar-template').html();
    const templateNavbar = Handlebars.compile(templateScriptNavbar);


    // 3. Renderizar y mostrar el resultado
    $('#publications-container').html(template(dataToRender)); // Pasa dataToRender, que ahora tiene 'years' y 'special'  
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
    $('#publications-navbar-container').html(templateNavbar(dataToRender)); // Pasa dataToRender, que ahora tiene 'years' y 'special'
});


// ─── SEMINARIOS ──────────────────────────────────────────────────────────────

$(document).ready(function() {
    
    // 1. Pre-procesar los datos
    const dataToRender = groupAndSortSeminars(seminars);

    // 2. Obtener y compilar la plantilla
    const templateScript = $('#seminars-template').html();
    const template = Handlebars.compile(templateScript);

    // 3. Renderizar y mostrar el resultado
    const renderedHtml = template(dataToRender);
    $('#seminars-container').html(renderedHtml);
});

// ─── CONGRESOS ORGANIZADOS ──────────────────────────────────────────────────

$(document).ready(function() {
    
    // 1. Pre-procesar los datos
    const dataToRender = groupAndSortWorkshops(workshops);

    // 2. Obtener y compilar la plantilla
    const templateScript = $('#workshops-template').html();
    const template = Handlebars.compile(templateScript);

    // 3. Renderizar y mostrar el resultado
    const renderedHtml = template(dataToRender);
    $('#workshops-container').html(renderedHtml);

});

// ─── VISITAS A LA UGR ───────────────────────────────────────────────────────

$(document).ready(function() {
    
    // 1. Pre-procesar los datos
    const dataToRender = visits.sort((a, b) => {
        return new Date(b.startDate) - new Date(a.startDate);
    });

    // 2. Obtener y compilar la plantilla
    const templateScript = $('#visits-template').html();
    const template = Handlebars.compile(templateScript);

    // 3. Renderizar y mostrar el resultado
    $('#visits-container').html(template(dataToRender)); 

});

// ─── CONFERENCIAS IMPARTIDAS ────────────────────────────────────────────────

$(document).ready(function() {
    
    // 1. Pre-procesar los datos
    const dataToRender = conferences.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    // 2. Obtener y compilar la plantilla
    const templateScript = $('#conferences-template').html();
    const template = Handlebars.compile(templateScript);

    // 3. Renderizar y mostrar el resultado
    $('#conferences-container').html(template(dataToRender)); 

});

// ─── ESTANCIAS DE INVESTIGACION ─────────────────────────────────────────────

$(document).ready(function() {
    
    // 1. Pre-procesar los datos
    const dataToRender = stays.sort((a, b) => {
        return new Date(b.startDate) - new Date(a.startDate);
    });

    // 2. Obtener y compilar la plantilla
    const templateScript = $('#stays-template').html();
    const template = Handlebars.compile(templateScript);

    // 3. Renderizar y mostrar el resultado
    $('#stays-container').html(template(dataToRender)); 
    
});

// ─── COMUNICACIONES EN CONGRESOS ───────────────────────────────────────────

$(document).ready(function() {
    
    // 1. Pre-procesar los datos
    const dataToRender = communications.sort((a, b) => {
        return new Date(b.startDate) - new Date(a.startDate);
    });

    // 2. Obtener y compilar la plantilla
    const templateScript = $('#communications-template').html();
    const template = Handlebars.compile(templateScript);

    // 3. Renderizar y mostrar el resultado
    $('#communications-container').html(template(dataToRender)); 

});


// ─── Fin Del Archivo ────────────────────────────────────────────────────────
