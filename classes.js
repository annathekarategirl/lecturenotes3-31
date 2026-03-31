const image=document.getElementById("image")
const text1=document.getElementById("text1")
const text2=document.getElementById("text2")
const buttonDiv=document.getElementById("buttons")
let music= new Audio()
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
    buttonDiv.innerHTML=""
for(let i=0;i<this.children.length;i++){
    let newButton=document.createElement("button");
    newButton.innerText='option'+(i+1)
    newButton.addEventListener("click",()=>{this.children[i].renderScene()})
    buttonDiv.appendChild(newButton)
}
}
}

class MusicScene{
    constructor(image_path,text1,text2,audio_path){
        super(image_path,text1,text2)
        this.audio_path=audio_path
    }
    renderScene(){
        super.renderScene();
        music=new Audio(this.audio_path);
        music.play();
    }
}
let introScene=new Scene("image2.webp","enstasrs","rio")

let scenea= new Scene("image3.webp","enstars","iforogr")
let sceneb=new Scene("image1.webp","f","p")

introScene.setChildren([scenea,sceneb])
scenea.setChildren([introScene,sceneb])
sceneb.setChildren([scenea,introScene])
introScene.renderScene()