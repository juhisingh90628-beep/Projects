const container=document.querySelectorAll('span')
console.log(container)

container.forEach((item)=>{
    item.addEventListener("click",()=>{
        console.log("clicked")
        item.classList.toggle("active")
    })

});