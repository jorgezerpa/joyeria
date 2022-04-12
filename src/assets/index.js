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
        new Product('watch name1', '100', watch),
        new Product('watch name2', '100', watch),
        new Product('watch name3', '100', watch),
        new Product('watch name4', '100', watch),
        new Product('watch name5', '100', watch),
        new Product('watch name6', '100', watch),
        new Product('watch name7', '100', watch),
        new Product('watch name8', '100', watch),
        new Product('watch name9', '100', watch),
        new Product('watch name10', '100', watch),
    ],
    rings : [
        new Product('ring name1', '100', ring),
        new Product('ring name2', '100', ring),
        new Product('ring name3', '100', ring),
        new Product('ring name4', '100', ring),
        new Product('ring name5', '100', ring),
        new Product('ring name6', '100', ring),
        new Product('ring name7', '100', ring),
        new Product('ring name8', '100', ring),
        new Product('ring name9', '100', ring),
        new Product('ring name10', '100', ring),
    ],
    bracelet : [
        new Product('bracelet name1', '100', bracelet),
        new Product('bracelet name2', '100', bracelet),
        new Product('bracelet name3', '100', bracelet),
        new Product('bracelet name4', '100', bracelet),
        new Product('bracelet name5', '100', bracelet),
        new Product('bracelet name6', '100', bracelet),
        new Product('bracelet name7', '100', bracelet),
        new Product('bracelet name8', '100', bracelet),
        new Product('bracelet name9', '100', bracelet),
        new Product('bracelet name10', '100', bracelet),
    ],
    necklace : [
        new Product('necklace name1', '100', necklace),
        new Product('necklace name2', '100', necklace),
        new Product('necklace name3', '100', necklace),
        new Product('necklace name4', '100', necklace),
        new Product('necklace name5', '100', necklace),
        new Product('necklace name6', '100', necklace),
        new Product('necklace name7', '100', necklace),
        new Product('necklace name8', '100', necklace),
        new Product('necklace name9', '100', necklace),
        new Product('necklace name10', '100', necklace),
    ],
    stud: [
        new Product('stud name1', '100', stud),
        new Product('stud name2', '100', stud),
        new Product('stud name3', '100', stud),
        new Product('stud name4', '100', stud),
        new Product('stud name5', '100', stud),
        new Product('stud name6', '100', stud),
        new Product('stud name7', '100', stud),
        new Product('stud name8', '100', stud),
        new Product('stud name9', '100', stud),
        new Product('stud name10', '100', stud),
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



