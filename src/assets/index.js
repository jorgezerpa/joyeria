            //TEMPLATE IMAGE
import template2 from './images/template2.jpg';
import woman from './images/woman.jpg';

            //RRSS
import facebookIcon from './icons/facebook.svg';
import instagramIcon from './icons/instagram.svg';
import whatsappIcon from './icons/whatsapp.svg';
import facebookIconWhite from './icons/facebook-white.svg';
import instagramIconWhite from './icons/instagram-white.svg';
import whatsappIconWhite from './icons/whatsapp-white.svg';

            //TEMPLATE PRODUCTS
import bracelet from './images/bracelet.jpg';
import necklace from './images/necklace.jpg';
import ring from './images/ring.jpg';
import stud from './images/stud.jpg';
import watch from './images/watch.jpg';

import agent from './images/agent.jpg';

const images = [
    template2,
    template2,
    template2,
    template2,
    template2,
    template2,
    template2,
    template2,
    template2,
 ];

 const rrss = {
    facebookIcon,
    instagramIcon,
    whatsappIcon,
    facebookIconWhite,
    instagramIconWhite,
    whatsappIconWhite,
 };

            //products
class Product {
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const products = {
    watches : [
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
        new Product('watch name', '100$', watch),
    ],
    rings : [
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
        new Product('ring name', '100$', ring),
    ],
    bracelet : [
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
        new Product('bracelet name', '100$', bracelet),
    ],
    necklace : [
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
        new Product('necklace name', '100$', necklace),
    ],
    stud : [
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
        new Product('stud name', '100$', stud),
    ],
};




//Categories
class Categorie {
    constructor(name, link, image){
        this.name = name;
        this.link = link;
        this.image = image;
    }
}

const categories = [
    new Categorie("Women", '#watches', watch),
    new Categorie("Men", '#braceletes', watch),
    new Categorie("Bands", '#braceletes', watch),
]



// agents 
class Agent{
    constructor(name, contact, image){
        this.name = name;
        this.contact = contact;
        this.image = image;
    }
}


const agents = [
    new Agent('Agent Name', '+4444444444', agent ),
    new Agent('Agent Name', '+4444444444', agent ),
    new Agent('Agent Name', '+4444444444', agent ),
    new Agent('Agent Name', '+4444444444', agent ),
    new Agent('Agent Name', '+4444444444', agent ),
]




export {
    images,
    rrss,
    products,
    categories,
    agents,
    woman,

}



