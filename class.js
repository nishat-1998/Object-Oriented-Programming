class PenDrive {
    constructor(capacity,color,price){
        this.capacity = capacity;
        this.color= color;
        this.price = price;

    }
}

const hp = new PenDrive('36GB', 'white',1300);
console.log(hp);
const dell = new PenDrive('8GB','gray')
console.log(dell)