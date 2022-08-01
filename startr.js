/*
  a simple javascript framework was created by shovan mondal.
  
  ** StartrJs is a fast, small, and feature-rich JavaScript framework. It makes things like HTML document traversal and manipulation, event handling, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, StartrJs has changed the way that 1 of people write JavaScript. **
*/
select = (id) => {
  return document.getElementById(`${id}`);
};
getVal = (id) => {
  return document.getElementById(`${id}`).value;
};
setTxt = (id, msg) => {
  return (document.getElementById(`${id}`).innerText = msg);
};
setHtml = (id, msg) => {
  return (document.getElementById(`${id}`).innerHTML = msg);
};
btnclk = (id, event) => {
  return document.getElementById(`${id}`).addEventListener("click", event);
};
keyUp = (id, event) => {
  return document.getElementById(`${id}`).addEventListener("keyup", event);
};
addClass = (id, cls) => {
  return document.getElementById(`${id}`).classList.add(`${cls}`);
};
removeClass = (id, cls) => {
  return document.getElementById(`${id}`).classList.remove(`${cls}`);
};
show = (id) => {
  return (document.getElementById(`${id}`).style.display = "block");
};
hide = (id) => {
  return (document.getElementById(`${id}`).style.display = "none");
};
txtcolor = (id, _name) => {
  return (document.getElementById(`${id}`).style.color = _name);
};
Ajax = function ({
  url,
  method,
  data = {},
  success = () => {},
  error = () => {},
  dataType,
}) {
  const queryString = Object.entries(data)
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join("&");

  if (method == "POST") {
    const post = new XMLHttpRequest();
    post.onload = () => {
      if (post.readyState == 4 && post.status == 200) {
        let repons = post.responseText;
        success(repons);
        return repons;
      } else if (post.readyState == 4 && post.status == 404) {
        let repons = post.responseText;
        alert(post.responseURL+'\n\n'+repons);
        error(repons);
        return repons;
      }
    };
    post.open("POST", url, true);
    post.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    post.send(queryString);
  } else if (method == "GET") {
    url = `${url}?${queryString}`;
    const get = new XMLHttpRequest();
    get.onload = () => {
      if (get.readyState == 4 && get.status == 200) {
        let repons = get.responseText;
        success(repons);
        return repons;
      } else if (post.readyState == 4 && get.status == 404) {
        let repons = get.responseText;
        alert(get.responseURL+'\n\n'+repons);
        error(repons);
        return repons;
      }
    };
    get.open("GET", url, true);
    get.send();
  }
};
