const person1 = {
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    author: 'Bill Anderson',
    job: 'The Boss',
    info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
};

const person2 = {
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    author: 'Susan Smith',
    job: 'Web Developer',
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
};

const person3 = {
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    author: 'Anna Johnson',
    job: 'Web Designer',
    info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
};

const person4 = {
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    author: 'Peter Jones',
    job: 'Intern',
    info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
};

const personList = [];
personList.push(person1, person2, person3, person4);

let currentItem = 0;

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let img = document.querySelector('#person-img');
let author = document.querySelector('#author');
let job = document.querySelector('#job');
let info = document.querySelector('#info');

nextBtnFunction();
prevBtnFunction();

//next Button function
function nextBtnFunction(item) {
    nextBtn.addEventListener('click', () => {
        currentItem++;
        if (currentItem > personList.length - 1) {
            currentItem = 0;
        }
        addPerson(currentItem);
    });
}

// previous button function
function prevBtnFunction(item) {
    prevBtn.addEventListener('click', () => {
        currentItem--;
        if (currentItem < 0) {
            currentItem = personList.length - 1;
        }
        addPerson(currentItem);
    });
}

// add caractéristics person function
function addPerson(person) {
    const item = personList[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

// Random function
const randomBtn = document.querySelector('.random-btn');
random();

function random() {
    randomBtn.addEventListener('click', () => {
        currentItem = Math.floor(Math.random() * personList.length);
        addPerson(currentItem);
    });
}
