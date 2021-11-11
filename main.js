// Nuova istanza Vue

var carusel = new Vue({
    // Collegamento con html tramite id
    el:"#myapp",
    data:{
        activeSlide: 0,
        slides: [
            {
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/05.jpg",
                title: "Paradise",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
        ]
    },

    // Proprietà methods con 2 funzioni all'interno del quale ci sarà una condizione che detrminerà lo scorrimento delle img 
    methods: {
        nextSlide: function(){
            console.log('nextSlide');
            if(this.activeSlide === this.slides.length -1){
                this.activeSlide = 0;
            } else {
                this.activeSlide++;
            }
        },
        prevSlide: function(){
            if(this.activeSlide === 0){
                this.activeSlide = this.slides.length -1;
            } else {
            this.activeSlide--;
            }
           
        }
    }
});