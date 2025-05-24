var main= document.querySelector("#main")
var cursor= document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    //console.log(dets.x  dets.y)
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out",//google kr lena iska bhut sara style already hai just search gsap easeing


  })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML ="view more"   //ye jab mouse enter hoga to cursor pe show karega
    gsap.to(cursor,{
        scale:4
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML =" "
    gsap.to(cursor,{
        scale:1
    })
})
