const moviesTitles = [
    "The Shawshank Redemption", 
    "The Godfather",
    "The Dark Knight",
    "12 Angry Men",
    "The Lord Of The Rings",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly", 
    "Forrest Gump"
];

// Question1
moviesTitles.forEach(title => console.log(title));

// Question2
moviesTitles.forEach(title => {
    console.log(title.split(" ").length);
});