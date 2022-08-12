const items = [["index.html", "Home"], ["service.html", "Services"], ["pricing.html", "Pricing"],
                ["work.html", "Our Work"], ["connect.html", "Connect"], ["consultation.html", "Free Consultation"]];

function makeNavLink(active, link, name) {
    let li = document.createElement('li');
    li.className = 'nav-item';
    let a = document.createElement('a');
    a.className = `nav-link ${(active) ? 'active' : ''}`;
    a.href = link;
    text = document.createTextNode(name);
    a.appendChild(text);
    li.appendChild(a);
    return li;
}

function makeNav(which) {
    let nav = document.createElement('nav');
    nav.className = "navbar navbar-expand-lg navbar-black bg-black";
    let div = document.createElement('div');
    div.className = 'container-fluid';
    let a = document.createElement('a');
    a.className = 'navbar-brand col-5 ms-5';
    a.href = '#';
    let logo = document.createElement('img');
    logo.className = 'icon';
    logo.src = "https://static.wixstatic.com/media/749738_46be5f6701e640b88c83a0f8c902771e~mv2.png/v1/fill/w_326,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VidPortMedia_Logob.png";
    logo.style.maxHeight = "100px";
    logo.alt = "VidPort Media Logo";
    a.appendChild(logo);
    div.appendChild(a);
    /*div.innerHTML += '<button class="navbar-toggler navbar-dark bg-black" type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>';*/
    let button = document.createElement('button');
    button.className = "navbar-toggler navbar-dark bg-black";
    button.type = "button";
    button.setAttribute('data-bs-toggle', "collapse");
    button.setAttribute('data-bs-target', "#navbarSupportedContent");
    button.setAttribute('aria-controls', "navbarSupportedContent");
    button.setAttribute('aria-expanded', "false");
    button.setAttribute('aria-label', "Toggle navigation");
    let span = document.createElement('span');
    span.className = "navbar-toggler-icon";
    button.appendChild(span);
    div.appendChild(button);
    let divTwo = document.createElement('div');
    divTwo.className = "collapse navbar-dark navbar-collapse col-6";
    divTwo.id = "navbarSupportedContent";
    let ul = document.createElement('ul');
    ul.className = "navbar-nav me-auto mb-2 mb-lg-0";
    items.forEach((elem, index) => {
        ul.appendChild(makeNavLink((which == index), elem[0], elem[1]));
    });
    divTwo.appendChild(ul);
    div.appendChild(divTwo);
    nav.appendChild(div);
    document.body.insertBefore(nav, document.body.firstElementChild);
}

window.onload = function() {
    let done = false;
    items.forEach((elem, index) => {
        var file = window.location.pathname;
        file = file.split('/');
        file = file[file.length - 1];
        if (elem[0] == file) {
            makeNav(index);
            done = true;
        }
    });
    if (done === false) {
      makeNav(0);
    } // if unrecognized, mark home as active
    window.onscroll = function() {
    document.querySelectorAll(".fades").forEach(function(elem) {
      /* Check the location of each desired element */
      var objectBottom = elem.getBoundingClientRect();
      objectBottom = objectBottom.top;
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < window.innerHeight/2) { //object comes into view (scrolling down)
        if (window.getComputedStyle(elem).getPropertyValue("opacity") == '0') elem.classList.toggle('fade-in');
      } else { //object goes out of view (scrolling up)
        if (window.getComputedStyle(elem).getPropertyValue("opacity") == '1') elem.classList.toggle('fade-in');
      }
    });
  }; //invoke scroll-handler on page-load
};