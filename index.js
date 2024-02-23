document.getElementById('searchBtn').addEventListener('click', function(event){
    event.preventDefault();
    search();
})

function search(){
    const keywords = document.getElementById('filtras')
    const text = document.getElementById('tekstas').value

    const words = text.split(' ')
    for (let i = 0; i < words.length; i++){
        if (words[i].toLowerCase().includes(keywords)){
            // console.log(words[i])
            // paryskinimo kodas
        }
    }


}
