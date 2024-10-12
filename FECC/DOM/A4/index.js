let data=[
    {
        id:1,
        name:"dog",
        imageSrc:"https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id:2,
        name:"cat",
        imageSrc:"https://images.unsplash.com/photo-1531040630173-7cfb894c8eaa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:3,
        name:"elephant",
        imageSrc:"https://plus.unsplash.com/premium_photo-1661810056990-57be781caa2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
        id:4,
        name:"lion",
        imageSrc:"https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    }
]

let dropdown=document.querySelector('#userDropdown');
let displayData=document.querySelector('#displayImage');

dropdown.addEventListener('change',(function(){
    let seletedOption=dropdown.value;
    displayData.innerHTML = '';
    
    data.forEach((item)=>{
        if(seletedOption===item.name){
            let image=document.createElement('img');
            image.className="Pic"
            image.src=`${item.imageSrc}`;

            displayData.append(image) 
        }
    })
}))