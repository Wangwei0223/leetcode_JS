function getUrl(url, body) {
    return new Promise(function (r, j) { 
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () { 
            if(xhr.status === 200){
                r(xhr.responseText);
            }
            else{
                j(xhr.statusText);
            }
        }
        
        xhr.onerror = function(){
            j(new Error(xhr.statusText));
        }

        xhr.send(body);
    });

}

getUrl('').then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});