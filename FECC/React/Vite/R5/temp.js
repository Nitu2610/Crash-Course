function parent(){

  function  callbackFn(val){
        console.log(val)
    }
    return children(callbackFn)
}

function children(fn){
    let name="nitesh kumar";
    fn(name);
}

parent()