class Users{
    name = "" 
    surename = ""
    age = ""
    is_married = ""
    work = ""
    country = {
        home: "",
        zip: "",
        number: "",
    }
    skills = []
 
    constructor(name, surename, age , is_married, work, country_home, country_zip , country_number , ...skills){
        this.name = name
        this.surename = surename
        this.age = age
        this.is_married = is_married
        this.work =work
        this.country.home = country_home
        this.country.zip = country_zip
        this.country.number =country_number
        this.skills  = skills
    }
}
let user1 = new Users("Abdulloh","Tadjiyev","17","No","web Developer","Konimex65","#57675676","7711", "HTML","Css","JS script","React", "Python" )
let user2 = new Users("Jony" ,"Tom", "23","Yes","Dispatcher", "New Jersy","#465465","4545","Dispatcher", "painter", "Gardener")
let user3 = new Users("Jony" ,"Tom", "23","Yes","Dispatcher", "New Jersy","#465465","4545","Dispatcher", "painter", "Gardener")
let user4 = new Users("Jony" ,"Tom", "23","Yes","Dispatcher", "New Jersy","#465465","4545","Dispatcher", "painter", "Gardener")
console.log(user1 , user2 , user3 , user4);
