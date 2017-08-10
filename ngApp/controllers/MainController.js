class MainController{
    constructor($state){
        this.state = $state;
        this.message = "Most Popular Movies on IMDB in 2016";
        this.movies = [
            {id: 1,     
            name: "Suicide Squad",  
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzM5MjczODA1NV5BMl5BanBnXkFtZTgwODUxNzA0OTE@._V1_UY666_CR166,0,666,666_AL_.jpg"},
            {id: 2,     
            name: "Captain America: Civil War ",    
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BODg3OTc4MTEyMl5BMl5BanBnXkFtZTgwODI0MDkyODE@._V1_UY666_CR301,0,666,666_AL_.jpg"},
            {id: 3, 
            name: "Batman v Superman: Dawn of Justice",    
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI5MjM4MzM1NV5BMl5BanBnXkFtZTgwNzA5MjkxNjE@._V1_UY666_CR331,0,666,666_AL_.jpg"},
            {id: 4,
            name: "Deadpool",  
            pic:"http://is1.mzstatic.com/image/thumb/Video4/v4/69/97/72/69977202-baa8-227d-26eb-18eddcc6c3f2/source/1200x630bb.jpg"},
            {id: 5, 
            name: "X-Men: Apocalypse", 
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxODIxNTIwNV5BMl5BanBnXkFtZTgwOTk0MTY0NzE@._V1_UY666_CR298,0,666,666_AL_.jpg"},
            {id: 6,
            name: "The Jungle Book", 
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_UY666_CR262,0,666,666_AL_.jpg"},
            {id: 7, 
            name: "The Magnificent Seven",  
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0ODc5NTYxN15BMl5BanBnXkFtZTgwNzk5OTc3MDI@._V1_UY666_CR111,0,666,666_AL_.jpg"},
            {id: 8, 
            name: "Ghostbusters",  
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MDIzNTA5NV5BMl5BanBnXkFtZTgwNzYyODk0NzE@._V1_UY666_CR166,0,666,666_AL_.jpg"},
            {id: 9, 
            name: "Warcraft: The Beginning",    
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNjQ4NTQ3OV5BMl5BanBnXkFtZTgwNTI5NDEyNzE@._V1_UY666_CR468,0,666,666_AL_.jpg"},
            {id: 10, 
            name: "The Legend of Tarzan",   
            pic:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NjA1NDg1NV5BMl5BanBnXkFtZTgwMzg4OTQ0NzE@._V1_UY666_CR144,0,666,666_AL_.jpg"},
        ];
    }

}