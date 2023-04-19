let con_section = document.getElementById("content");
ul_ele = document.getElementById("nav-clicky")

let underliner = () => {
    remover();
    event.target.classList.add("under")
    val = event.target.innerHTML;
    if(val == "Blogs"){
        data_handler(Blogs)
    }
    else if(val =="Case Studies"){
        data_handler(Case_studies)
    }   
    else if(val == "Resources"){
        data_handler(Resources)
    }
}
let remover =  () => {
    
    for(let i of ul_ele.children){
        i.children[0].classList.remove("under")

    }
}






let Blogs = [
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },


]



let Case_studies =  [
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },


]


let Resources =  [
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },

    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },
    {
        image:"resources.jpeg",
        heading:"Mobius Smart City Solution",
        content:"lorem ipsum",
    },


]



let data_Changer = (img,heading,content) => {

    
    let data = 
    `<article data-aos="fade-up" class="border border-royal-gray-300 rounded-3xl">
    <div>
    <img
    class="rounded-t-3xl"
    src="../public/images/IntheNews/${img}"
    alt="Resources"
    />
    </div>
    <div class="py-7 px-5 bg-white">
    <h5 class="font-bold text-sm text-royal-purple-700 mb-1">
    BLOG
    </h5>
    <h4 class="heading-card mt-2">${heading}</h4>
    <p class="text-base text-royal-gray-400 font-medium mt-3">
    ${content}
    <a class="text-royal-purple-600" href="">(read more)</a>
    </p>
    </div>
    </article>
    
    `
    return data;
}

let data_handler = (data) => {
    let HTML = ''
    for(let i of data){
        console.log(i)
        let article  = data_Changer(i["image"],i["heading"],i["content"])
        HTML += article;
        con_section.innerHTML = HTML
        console.log(HTML)
    }
}