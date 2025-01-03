function getProjects(){
    const urlGitHub = 'https://github.com/JoaozinBJJ?tab=repositories'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'

    } ) 
    
    .then((Response)=> Response.json())
    .then((Response)=> {
        loadingElement.style.display =none
        showProjects(Response)
    })
    .catch((e)=> {
        console.log(e)


    })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')

    for(let i = 0; i < data.lenght; i++)

{
var a = document.createElemente("a")
a.href = data [i]['clone_url']
a.target='_blank'
a.title= data[i]['description']
let linkText = document.createTextNode(data [i]['name'])
a.appendChild(linkText)
listElement.appendChild(a)


}
}

getProjects()