let bananas = document.querySelector('img')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')




bananas.addEventListener('click', (evt) =>{
    alert("Nobody said anything about clicking on the bananas so why did you do that? Why don't you focus your attention on the question down there!")

})

const show = () =>{
    document.getElementById('image').style.display = "block"
    document.getElementById('yesBtn').style.display = "none"
}


