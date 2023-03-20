
const search = () =>{
    console.log(123);
    console.log(document.getElementById("search-item").value)
    const searchbox =document.getElementById("search-item").value.toUpperCase();

    console.log(searchbox);

    const storeitems = document.getElementsByClassName("product-list");
    console.log(storeitems);
    const products = document.querySelectorAll(".product");
    console.log(products);


    for(var i=0;i< products.length; i++){
        let match= products[i].getElementsByTagName('h2')[0];

        if(match){
           let textvalue=  match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox)> -1){
            products[i].style.display="";
           }else{
            products[i].style.display="none";
           }
        }
    }
    // products.forEach(product=>{
    //     let pname=product.getElementsByTagName("h2")[0].innerHTML;
    //     console.log(pname)
    // })
}