const image=document.getElementById("image")
const text1=document.getElementById("text1")
const text2=document.getElementById("text2")
const buttonDiv=document.getElementById("buttons")

class Scene{
    constructor(image_path,text1,text2)
{
    this.image_path=image_path
    this.text1=text1
    this.text2=text2
    this.children=[]
}
setChildren(children){
    this.children=children
}
renderScene(){
    image.src=this.image_path;
    text1.innerText=this.text1;
    text2.innerHTML=this.text2;

}
}
let introScene=new Scene("image2.webp","enstasrs","rio")

let scenea= new Scene("image3.webp","enstars","iforogr")
let sceneb=new Scene("image1.webp","f","p")
scenea.renderScene()
introScene.setChildren(scenea,sceneb)