var breedPics = $("#breedimg");
var row = $("#breeds");

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogsBreed = data.message;
    for (let breed in dogsBreed) {
        row.append('<option value="' + breed + '">' + breed + '</option>');
    }

});

$("form button").click(function (e) {
    e.preventDefault();

    let breed = row.val();

    let url = "https://dog.ceo/api/breed/" + breed;
    url += "/images";

    $("#breedimg img").remove();
    
    $.get(url, function (data) {
        let imagesUrl = data.message;

        for (let i=0;i<10;i++) {
            if(imagesUrl[i]==null) {
                break;
            }
            breedPics.append('<img class="size" src="' + imagesUrl[i] + '" alt="' + breed + '">');
        }
    });

});
