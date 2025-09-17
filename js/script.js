function init(){

    const form=document.getElementsByTagName("form")[0];
    form.addEventListener("submit",formatTitle);

    function formatTitle(e){
        e.preventDefault();
        const form=e.target;
        const title=e.target.title.value.trim();
        const delimiter=form.delimiter.value;
        const regex=/(\s|\–)/gm;
        const newTitle=removeExtra(title.replaceAll(regex,delimiter),delimiter);
        document.getElementById("display").textContent=newTitle;
    }

    function removeExtra(title, delimiter){
        const regex=new RegExp(`${delimiter}+`,"gm");
        const arr=title.split(regex);
        return arr.join(delimiter);
    }

}

init()