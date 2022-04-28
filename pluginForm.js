var form = document.getElementById("container")
    var icon = document.getElementById("icon")
    var close = document.getElementById("close")
    
    icon.onclick = function() {
        form.style.display = "block";
    }
    close.onclick = function(){
        form.style.display = "none";
    }
    document.querySelector('form.submitform').addEventListener('submit', function (e){
        e.preventDefault();
       var data ={}
        data.name = document.getElementById('name').value
       data.email = document.getElementById('email').value 
        console.log(data);
        form.style.display = "none";

    })
    