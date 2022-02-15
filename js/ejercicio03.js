/**
 * La siguiente lista de empleados debe ser ordenada con base a 
 * la fecha de contratación, omitir los que ya no estan activos y 
 * presentarla con el siguiente formato:
 * [
 * {
 * name: '',
 * job: {
 * position: '',
 * description: '',
 * },
 * avatar: '',
 * link: '' // Solo el primero de cada persona
 * hireDate: '',
 * email: '' // Nombre en minúsculas, los espacios se reemplazan por puntos y se agrega @correo.com
 * }
 * ]
 */
 
 const employees = [
    {
        name: "Eshaan Ravish",
        jobPosition: "Phython Developer",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/eshaan.jpg",
        links: [
            "https://www.facebook.com/eshaan.ravish",
            "https://github.com/ravisheshaan",
            "https://www.linkedin.com/in/eshaan-ravish-7a573567/",
        ],
        hireDate: '31/10/2011',
        status: true,
    },
    {
        name: "Aakriti Kashyap",
        jobPosition: "Front End - Intern",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/aakriti.jpg",
            links: [
            "https://www.linkedin.com/in/aakriti-kashyap-2a134359/",
            "https://www.facebook.com/aakriti.kashyap.33",
            "https://github.com/Aakriti94",
        ],
        hireDate: '14/01/2010',
        status: true,
    },
    {
        name: "Ravi Dhiman",
        jobPosition: "Front End Developer",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/ravi.jpg",
            links: [
            "https://github.com/ravid7000",
            "https://www.facebook.com/dhiman90",
            "https://www.linkedin.com/in/ravidhiman17/",
        ],
        hireDate: '11/02/2010',
        status: true,
    },
    {
        name: "Sanyam Bansal",
        jobPosition: "Back End Developer",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/sanyam.jpg",
            links: [
            "https://www.facebook.com",
            "https://www.linkedin.com/in/sanyam76/",
            "https://github.com/sanyam199",
        ],
        hireDate: '11/02/2010',
        status: true,
    },
    {
        name: "Pankul Mittal",
        jobPosition: "Back End Developer",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/pankul.jpg",
            links: [
            "https://www.linkedin.com/",
            "https://www.facebook.com",
            "https://github.com/Pankul-Mittal",
        ],
        hireDate: '01/07/2011',
        status: true,
    },
    {
        name: "Pushp sharma",
        jobPosition: "Business Development",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/pushp.jpg",
            links: [
            "https://github.com/",
            "https://www.facebook.com/",
            "https://www.linkedin.com",
        ],
        hireDate: '01/12/2011',
        status: false,
    },
    {
        name: "Lakshay Lakhani",
        jobPosition: "Back End Development",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/lakshay.jpg",
            links: [
            "https://www.facebook.com/",
            "https://www.linkedin.com",
            "https://github.com/",
        ],
        hireDate: '21/03/2009',
        status: true,
    },
    {
        name: "Ankit Bhati",
        jobPosition: "Back End - Intern",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/ankit.jpg",
            links: [
            "https://github.com/",
            "https://www.facebook.com/",
            "https://www.linkedin.com",
        ],
        hireDate: '17/08/2012',
        status: false,
    },
    {
        name: "Asif Akhtar",
        jobPosition: "Back End Developer",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/asif.jpg",
            links: [
            "https://www.linkedin.com/in/asif-akhtar-83b7a195/",
            "https://www.facebook.com/asif.akhtar.7106",
            "https://github.com/asif1011",
        ],
        hireDate: '23/06/2009',
        status: true,
    },
    {
        name: "Nitish Kansal",
        jobPosition: "Back End Developer",
        jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
        avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/nitish.jpg",
            links: [
            "https://github.com/nitishkansal",
            "https://www.facebook.com/tanu.kansal",
            "https://www.linkedin.com/in/nitish-kansal-57111647/",
        ],
        hireDate: '17/09/2013',
        status: true,
     }
];

// Función para convertir fecha
const convDate = (strDate) => {
    let formateDate = strDate.substring(6, 10)+ // De la posición 6 a la 10 
    '-'+ // Caracter de separación para la fecha 
    strDate.substring(3, 5)+ // De la posición 3 a la 5 
    '-'+
    strDate.substring(0, 2); // De la posición 0 a la 2 
    return new Date (formateDate); // la convierte al tipo de dato Date 
};

const actives = employees.filter((employee) => {return employee.status}); // filtro para empleados con estatus activo 

const orderEmployees = actives.sort((a, b) => { // Función para comparar las fechas de los empleados por fecha de ingreso
    let dateA = convDate (a.hireDate);  
    let dateB = convDate (b.hireDate);
    return dateA.getTime() - dateB.getTime(); // resta la fecha A con la B para hacer la comparación
});

const formateEmployees = orderEmployees.map((employee) => { // función que cambia el formato de presentación de los empleados
     return { // retorna el nuevo formato
        name: employee.name,
        job: {
            position: employee.jobPosition,
            description: employee.jobDescription,
        },
        avatar: employee.avatar,
        link: employee.links.shift(), // Solo el primer link de cada persona
        hireDate: employee.hireDate,
        email: employee.name.toLocaleLowerCase().replace(' ','.') + '@gft.com', // Convierte el nombre del empleado en su correo y reemplaza los espacios por puntos
    };
});

console.log(formateEmployees); // imprime en consola el arreglo de los empleados con el nuevo formato. 


// APUNTES // 
/* console.log(orderEmployees);

const fechitas = employees.map((employee) =>{return employee.hireDate});
console.log(fechitas);


const fechitasOrdenadas = orderEmployees.map((employee) =>{return employee.hireDate});
console.log(fechitasOrdenadas); */
