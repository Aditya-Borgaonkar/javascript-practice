let main=document.querySelector('.main')

const users = [
    {
        fullName: "Amit Barge",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        profession: "Web Developer",
        description: "Frontend specialist with a passion for smooth UI and modern web trends.",
        button: "Follow"
    },
    {
        fullName: "Sneha Patil",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        profession: "UI/UX Designer",
        description: "Creates minimal, user-focused designs and enjoys prototype building.",
        button: "Follow"
    },
    {
        fullName: "Rahul Sharma",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        profession: "Software Engineer",
        description: "Enjoys solving complex problems and writing clean, scalable code.",
        button: "Follow"
    },
    {
        fullName: "Priya Kulkarni",
        image: "https://randomuser.me/api/portraits/women/41.jpg",
        profession: "Digital Marketer",
        description: "Focused on SEO, branding, and building strong digital presence.",
        button: "Follow"
    },
    
];

let sum=''
users.forEach(function(elem){

    sum=sum+` <div class="card">
            <img src="${elem.image}"
                alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
            <button>Follow</button>
        </div>`
})
main.innerHTML=sum;
console.log(sum);

