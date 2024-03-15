 window.onload = function() {
    var scr = document.createElement("script");
     scr.type="text/javascript";
     scr.innerHTML = `const LoadScript = (url, cb) => { fetch(url).then(res => res.json()).then((out) => { cb(out) }).catch(err => { throw err }); }
 
 const links = {
    "link":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/connectionManager.js",
    "link0":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/charactersManager.js",
    "link1":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballExp.js",
    "link2":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballUpgrade.js",
    "link3":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballReset.js",
    "link4":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballManager.js",
    "link5":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/script1-2.js",
    "link6":"https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/createaforeconect.js",    
 };
 
 const fetchPromises = Object.values(links).map(link => {
   return fetch(link).then(response => response.text());
 });
 
 Promise.all(fetchPromises)
   .then(scripts => {
     scripts.forEach(script => {
       $("body").append("<script>"+script+"</script>");
     });
   })
   .catch(err => { 
     console.log("Error fetching data:", err); 
   });
 
 
 
 `    
   document.body.appendChild(scr) 
}
