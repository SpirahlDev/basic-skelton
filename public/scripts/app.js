let __token;
let __dataRoot;

document.addEventListener("DOMContentLoaded",()=>{
    getSignatures();
    initData();
});

function getSignatures() {
    let token_dom=document.querySelector("input[name=_token]");
    let dataRoot_dom=document.querySelector("input[name=dataRoot]");

    __token=token_dom.value;
    __dataRoot=dataRoot_dom.value;

    console.log(__token,__dataRoot);
    token_dom.remove();
    dataRoot_dom.remove();
}

function initData(){
    // recuperer les données à afficher avec fetch
}
