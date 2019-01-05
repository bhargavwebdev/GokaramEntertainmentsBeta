export class Performer{
    public id: number;
    public name: string;
    public place: string;
    public imgPath: string;
    public about: string;
    public price: number;
    public cultureId: number; 
    

    constructor(id: number, name: string, about: string, imgPath: string, place: string,
         price: number, cultureId:number){
        this.id = id;
        this.name = name;
        this.about = about;
        this.imgPath = imgPath;
        this.place = place;
        this.price = price;
        this.cultureId = cultureId;
    }
}