const loadAssDoc = (ev) => {
    let xmlhttp = new XMLHttpRequest();
    let target = ev.target.dataset.source;

    xmlhttp.onload = () => {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
                document.querySelector("#assModal h5#assModalLabel").innerHTML = `Short Writing Assignment #${target}`;
                document.querySelector("#assModal .modal-body").innerHTML = xmlhttp.responseText;
           }
           else {
                document.querySelector("#assModal h5#assModalLabel").innerHTML = `Error`
                document.querySelector("#assModal .modal-body").innerHTML = 'There was an error loading modal contents';
           }
        }
    };

    xmlhttp.open("GET", `assignments/assignment${target}.html`, true);
    xmlhttp.send();
}

document.querySelectorAll('.assignment-table button')
        .forEach((el) => {
            el.addEventListener('click', loadAssDoc);
    });

