//Kullanıcının girdiği mesajı "message" içine aldık.
const messageInput = document.querySelector("#message-input");

//messageInput "keydown" event'i ekliyoruz. event.key=="Enter" ise  "getMessage" functionu çalışır.
messageInput.addEventListener("keydown",function(event){
    if(event.key == "Enter")
    getMessage();
})

function getMessage(){
    //Çıktının yazılacağı kısıma "message-output" ulaştık ve messageInput değerini içine atadık.
    document.querySelector("#message-output").innerHTML=messageInput.value;
    messageInput.value="";
}