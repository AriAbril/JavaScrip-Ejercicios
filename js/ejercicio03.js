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
        hireDate: '17/19/2013',
        status: true,
     }
];