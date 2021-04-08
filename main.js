$(function (){

    $("#mode").change(function (){
        let tag = document.getElementsByTagName("section")
        let footer = document.getElementsByTagName("footer").item(0)

        if (this.checked) {
            for (i = 0; i < tag.length; i++){
                tag[i].style.backgroundColor = "black"
                tag[i].style.color = "white"
            }

            footer.style.backgroundColor = "black"
            footer.style.color = "white"

        } else {
            for (i = 0; i < tag.length; i++){
                tag[i].style.backgroundColor = "#FFFFFF"
                tag[i].style.color = "black"
            }

            footer.style.backgroundColor = "#FFFFFF"
            footer.style.color = "black"
        }
    })
})