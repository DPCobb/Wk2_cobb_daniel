function getArt(){
    for(i = 0; i < articles.length; i++){
        var object = articles[i];
        var out = "<div class=\"small-12 columns article\"><h4>"+ object.title + "</h4><h5>"+ object.author +"</h5><p>"+object.desc+"</p><a href=\""+object.source+"\" class=\"button small radius\" target=\"_blank\">More</a></div>";
        $("#recent").append(out);
    }
}

function getFeature(){
    for(i = 0; i < 4; i++){
        var object = articles[i];
        var out = "<div class=\"small-12 columns article feature\"><a href=\""+object.source+"\" target=\"_blank\">"+object.title+"</a><br>"+object.author+"</div>"
        $("#feature").append(out);
    }
}
