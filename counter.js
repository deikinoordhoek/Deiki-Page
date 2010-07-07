function countit(){
    var formcontent=document.getElementById("maintextarea").value + " ";
    formcontent=formcontent.split(" ");
    var words, x;
    words = formcontent.length;
    for (x=0; x<= formcontent.length; x++){
        if (formcontent[x] == "" || formcontent[x] == "\n")
            words = words - 1;
    }
    document.getElementById("output_label").innerHTML=words;
}

