async function createPage(JSONurl){
    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };
    getJSON(JSONurl,
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        addThing("#name","div",data.name)
        }
    
        
    });
    
    }
    function addThing(idQuery,element,source){
      const stat = document.querySelector(idQuery);
      let text = document.createElement(element)
      text.textContent = source;
      stat.appendChild(text);
    }