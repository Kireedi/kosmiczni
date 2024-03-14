function loadScript(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(scriptContent => {
                const script = document.createElement("script");
                script.innerHTML = scriptContent;
                document.body.appendChild(script);
                resolve();
            })
            .catch(error => {
                reject(new Error("Błąd ładowania skryptu: " + url));
            });
    });
}

const scriptUrls = [
    "https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/charactersManager.js",
   "https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/charactersManager.js",
   "https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballExp.js",
   "https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballUpgrade.js",
    "https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballReset.js",
    "https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/ballManager.js",
    "https://raw.githubusercontent.com/KWSforAll/KWSforAll/Koles/script1-2.js"
];

Promise.all(scriptUrls.map(loadScript))
    .then(() => {
          let mainPanelFound = false;
        let ghButtonExecuted = false;

        var intervalCheckMainPanel = setInterval(function () {
            var mainPanel = document.getElementById("main_Panel");
            if (mainPanel) {
                clearInterval(intervalCheckMainPanel);
                mainPanelFound = true;
                var onoffDiv = document.createElement("div");
                onoffDiv.id = "onoff";
                onoffDiv.classList.add("ui-draggable");
                var startTimeInput = document.createElement("input");
                startTimeInput.type = "text";
                startTimeInput.placeholder = "Godzina startu (HH mm)";
                startTimeInput.style.width = "120px";
                startTimeInput.style.marginLeft = "5px";
                startTimeInput.style.background = "grey";
                startTimeInput.style.textAlign = "center";
                startTimeInput.style.color = "white";
var endTimeInput = document.createElement("input");
endTimeInput.type = "text";
endTimeInput.placeholder = "Godzina wyłączenia (HH mm)";
endTimeInput.style.width = "120px";
endTimeInput.style.marginLeft = "5px";
endTimeInput.style.background = "grey";
endTimeInput.style.textAlign = "center";
endTimeInput.style.color = "white"; 
var onOffButton = document.createElement("button");
onOffButton.textContent = "On";
onOffButton.style.color = "#00ff00";
onOffButton.style.backgroundColor = "black";
onOffButton.style.border = "1px solid white";
onOffButton.onclick = function() {
    if (onOffButton.textContent === "On") {
        var startTime = parseTime(startTimeInput.value);
        var endTime = parseTime(endTimeInput.value);
        if (!isNaN(startTime) && !isNaN(endTime)) {
            scheduleOnOff(startTime, endTime);
            onOffButton.textContent = "Off"; 
            onOffButton.style.color = "red";
        } else {
            alert("Wprowadź poprawne godziny (HH mm)!");
        }
    } else {

        clearInterval(intervalId);
        onOffButton.textContent = "On"; 
        onOffButton.style.color = "#00ff00";
    }
};
onoffDiv.appendChild(startTimeInput);
onoffDiv.appendChild(endTimeInput);
onoffDiv.appendChild(onOffButton);

                var pvpPanel = document.getElementById("pvp_Panel");
                pvpPanel.appendChild(onoffDiv);
var intervalId; 
function parseTime(timeString) {
    var timeArray = timeString.split(" ");
    if (timeArray.length === 2) {
        var hours = parseInt(timeArray[0]);
        var minutes = parseInt(timeArray[1]);
        if (!isNaN(hours) && !isNaN(minutes)) {
            return hours * 60 + minutes;
        }
    }
    return NaN;
}
function scheduleOnOff(startTime, endTime) {
    var clickedAtStart = false;
    var clickedAtEnd = false;
    intervalId = setInterval(function() {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentTotalMinutes = currentHours * 60 + currentMinutes;
        if (currentTotalMinutes === startTime && !clickedAtStart) {
            var pvpButton = document.querySelector('.pvp_button.pvp_pvp');
            if (pvpButton) {
                pvpButton.click();
                clickedAtStart = true;
            }
        }
        if (currentTotalMinutes === endTime && !clickedAtEnd) {
            var pvpButton = document.querySelector('.pvp_button.pvp_pvp');
            if (pvpButton) {
                pvpButton.click();
                clickedAtEnd = true;
                clearInterval(intervalId);
                onOffButton.textContent = "On"; 
                onOffButton.style.color = "#00ff00";
            }
        }
    }, 1000);
}
var style = document.createElement('style');
style.innerHTML = `
    ::placeholder {
        color: darkgrey;
    }
`;
document.head.appendChild(style);
                document.head.appendChild(style);
                var ghButtonIntervalId;
                function checkAndExecuteGHButton() {
                    if (!ghButtonExecuted) {
                        var ghButton = document.querySelector('.gh_button.gh_res');
                        if (ghButton) {
	var onoffDiv1 = document.createElement("div");
onoffDiv1.id = "onoff";
onoffDiv1.classList.add("ui-draggable");
var startTimeInput1 = document.createElement("input");
startTimeInput1.type = "text";
startTimeInput1.placeholder = "Godzina startu (HH mm)";
startTimeInput1.style.width = "120px";
startTimeInput1.style.marginLeft = "5px";
startTimeInput1.style.background = "grey";
startTimeInput1.style.textAlign = "center";
startTimeInput1.style.color = "white";
var endTimeInput1 = document.createElement("input");
endTimeInput1.type = "text";
endTimeInput1.placeholder = "Godzina wyłączenia (HH mm)";
endTimeInput1.style.width = "120px";
endTimeInput1.style.marginLeft = "5px";
endTimeInput1.style.background = "grey";
endTimeInput1.style.textAlign = "center";
endTimeInput1.style.color = "white";
var onOffButton1 = document.createElement("button");
onOffButton1.textContent = "On";
onOffButton1.style.color = "#00ff00";
onOffButton1.style.backgroundColor = "black";
onOffButton1.style.border = "1px solid white";
onOffButton1.onclick = function() {
    if (onOffButton1.textContent === "On") {
        var startTime = parseTime(startTimeInput1.value);
        var endTime = parseTime(endTimeInput1.value);
        if (!isNaN(startTime) && !isNaN(endTime)) {
            scheduleOnOff(startTime, endTime);
            onOffButton1.textContent = "Off"; 
            onOffButton1.style.color = "red";
        } else {
            alert("Wprowadź poprawne godziny (HH mm)!");
        }
    } else {
        clearInterval(intervalId);
        onOffButton1.textContent = "On"; 
        onOffButton1.style.color = "#00ff00";
    }
};
onoffDiv1.appendChild(startTimeInput1);
onoffDiv1.appendChild(endTimeInput1);
onoffDiv1.appendChild(onOffButton1);
var codecode = document.getElementById("code_Panel");
codecode.appendChild(onoffDiv1);
var intervalId; 
function parseTime(timeString) {
    var timeArray = timeString.split(" ");
    if (timeArray.length === 2) {
        var hours = parseInt(timeArray[0]);
        var minutes = parseInt(timeArray[1]);
        if (!isNaN(hours) && !isNaN(minutes)) {
            return hours * 60 + minutes;
        }
    }
    return NaN;
}
function scheduleOnOff(startTime, endTime) {
    var clickedAtStart = false;
    var clickedAtEnd = false;
    intervalId = setInterval(function() {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentTotalMinutes = currentHours * 60 + currentMinutes;
        if (currentTotalMinutes === startTime && !clickedAtStart) {
            var codeButton = document.querySelector('.code_button.code_code');
            if (codeButton) {
                codeButton.click();
                console.log("Kliknięcie .pvp_button pvp_pvp po godzinie startu!");
                clickedAtStart = true;
            }
        }
        if (currentTotalMinutes === endTime && !clickedAtEnd) {
            var codeButton = document.querySelector('.code_button.code_code');
            if (codeButton) {
                codeButton.click();
                console.log("Kliknięcie .pvp_button pvp_pvp po godzinie zakończenia!");
                clickedAtEnd = true;
                clearInterval(intervalId);
                onOffButton1.textContent = "On";
                onOffButton1.style.color = "#00ff00";
            }
        }
    }, 1000);
}
var style = document.createElement('style');
style.innerHTML = `
    ::placeholder {
        color: darkgrey;
    }
`;
document.head.appendChild(style);
                            ghButtonExecuted = true;
                            clearInterval(ghButtonIntervalId);
                        }
                    }
                }
                ghButtonIntervalId = setInterval(checkAndExecuteGHButton, 1000);
                var intervalCheckMainPanelAfterFound = setInterval(function () {
                    if (!mainPanelFound) {
                        var mainPanel = document.getElementById("main_Panel");
                        if (mainPanel) {
                            mainPanelFound = true;
                            clearInterval(intervalCheckMainPanelAfterFound);
                        }
                    }
                }, 1000);
            }
        }, 1000);
    })
    .catch(error => {
        console.error(error.message);
    });
    	$(document).bind('keydown', '`', function(){
        if(JQS.chm.is(":focus") == false){
           GAME.emitOrder({a:39,type:32});
                       setTimeout(function() {
                $('.close_kom').click();
                console.log('Clicked .close_kom after emitting ga event.');
            }, 1080);
        }
        return false;
    });
function createAutoHandlarzButton() {
  $('#page_game_events')
    .eq(0)
    .append(
      '<button class="gold_button option autohandlarz	">Auto Handlarz</button>'
    );
}
var timeoutId = setTimeout(createAutoHandlarzButton, 1000);
function stopCreatingButton() {
  clearTimeout(timeoutId);
}
setTimeout(stopCreatingButton, 13000);

$('body').on('click', '.autohandlarz', () => {
/*
1925 - piguła max normal
1926 - piguła max rare
1927 - piguła max unique
1928 - piguła max elite
1929 - piguła max super unique
1930 - piguła przyrost normal
1931 - piguła przyrost rare
1932 - piguła przyrost unique
1933 - piguła przyrost elite
1934 - piguła przyrost super unique
1936 - sfera normal
1937 - sfera rare
1938 - sfera unique
1243 - czerwone senzu
1784 - karta dusz
1935 - tytuł 
1941 - KK
*/

const desiredItems = [
  1938, 1937, 1936, 1941, 1934, 1929, 1933, 1928, 1932, 1927, 1931, 1926, 1930,
  1925, 1243, 1784,
];
const getTraderItems = (callback) => {
  let itemsToBuy = [];
  $('button[data-option="buy_from_trader2"]').each(function () {
    let itemIndex = parseInt($(this).attr('data-item')),
      itemId = parseInt($(this).attr('data-itemid')),
      itemAmount = parseInt($(this).attr('data-itemam'));

    if (desiredItems.includes(itemId)) {
      itemsToBuy.push({
        index: itemIndex,
        item: itemId,
        amount: itemAmount,
      });
    }
  });

  callback(itemsToBuy);
};
const buyTraderItems = (itemsToBuy) => {
  if (itemsToBuy.length > 0) {
    itemsToBuy.sort(function (item1, item2) {
      return desiredItems.indexOf(item1.item) - desiredItems.indexOf(item2.item);
    });

    GAME.socket.emit('ga', {
      a: 51,
      type: 3,
      item: itemsToBuy[0].index,
      iid: itemsToBuy[0].item,
      amount: itemsToBuy[0].amount,
    });
    setTimeout(() => {
      getTraderItems((updatedItems) => {
        buyTraderItems(updatedItems);
      });
    }, 100);
  } else {
    if (!$('#trader_goods2 .trade_good').length) {
      GAME.socket.emit('ga', {
        a: 51,
        type: 0,
      });

      setTimeout(() => {
        getTraderItems((newItems) => {
          buyTraderItems(newItems);
        });
      }, 100);
    } else {
      if ($('#trader_goods2 .trade_good').length && !itemsToBuy.length) {
        console.log('Brak itemów w sklepie');
      }
    }
  }
};
getTraderItems((items) => {
  buyTraderItems(items);
});
});
$('#page_game_balls .right_column')
  .eq(0)
  .append(
    '<button class="newBtn option dbb autozbieranieSK">Auto Zbieranie</button>'
  );

$('.newBtn.autozbieranieSK').css({
  'position': 'absolute',
  'top': '130px',
  'right': '240px'
});

$('body').on('click', '.autozbieranieSK', () => {
var SK = {
	Locations:[647, 648, 649, 651, 656, 658, 649, 660, 663, 664, 665, 666, 667, 668, 669, 670, 671, 690, 691, 692, 698],
    Stop: true,
    Matrix: [],
    Map: 0,
    Path: [],
    Born: 2,
    sk:0,
	move_speed:100,
	coords:[],
	tep_cd:60500,
    isStarted: false,
	check: false
}

GAME.emit = function(order,data,force){
	if(!this.is_loading||force){
		this.load_start();
		this.socket.emit(order,data);
	}
	else if(this.debug) console.log('failed order',order,data);
}
GAME.emitOrder = function(data,force=false){
	this.emit('ga',data,force);
}

const steal_sk = setInterval(()=>{
    GAME.socket.emit('ga',{a:33,type:0});

    let button =  $(`#mdbp_${GAME.char_data.reborn}`).find('button[data-option="ball_fight"]');
    let char_id = parseInt(button.attr("data-char_id"));
    let ball_id = parseInt(button.attr("data-ball_id"));

    if (button.length > 0) {
        GAME.socket.emit('ga',{a:33,type:6,char_id:char_id,ball:ball_id});
    }

    let can_start = $(`#mdbp_${GAME.char_data.reborn}`).find('.timer').length;

    if (can_start == 0 && !SK.isStarted) {
        SK.isStarted = true;
        SK.Stop = false;
        SK.Locations = [134, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 157, 158];
        SK.Start();
    }
	let ile_mam_sk = $(`#mdbp_${GAME.char_data.reborn}`).find(`b[data-char_id="${GAME.char_data.id}"]`).length;

	if (SK.Locations.length==0 && ile_mam_sk !=7) {
		SK.Locations = [982, 981, 980, 983, 984, 985, 987, 986, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000];
	}

    $('#fight_view').fadeOut();
}, 1000);


$('body').append('<div id="SK_control" style="min-width:100px; padding:5px; border:solid gray 1px; background:rgba(22, 22, 93, 0.81); color:gold; position: fixed; top: 40px; right: 5px; z-index:5; text-align:center;"><div class="bt_button" style="cursor:pointer;text-align:center; border-bottom:solid gray 1px;">START</div>');



$('#SK_control .bt_button').click(() => {
	if(SK.Stop){
        $('#SK_control .bt_button').html("STOP");
		SK.Stop = false;

	}else{
		$('#SK_control .bt_button').html("START");
		SK.Stop = true;
	}
});



SK.Start = function(){
    let ile_mam_sk = $(`#mdbp_${GAME.char_data.reborn}`).find(`b[data-char_id="${GAME.char_data.id}"]`).length;
	if(ile_mam_sk == 7){
		GAME.emitOrder({a:12,type:18,loc:1189});
		setTimeout(function(){ SK.Wish(); },1000);
        setTimeout(()=>{ SK.isStarted = false; },30000);
	}
     else if(Object.keys(GAME.map_balls).length===0){
		setTimeout(function(){ SK.Teleport(); },1000);
	}else {
		setTimeout(function(){ SK.Action(); },100);
	}

}

SK.Action = function(){
	if(Object.keys(GAME.map_balls).filter(key => GAME.map_balls[key] === 1)[0]===undefined)
	{
		setTimeout(function(){ SK.Teleport(); },5000);
	}
	else if(SK.coords[0]== GAME.char_data.x && SK.coords[1]==GAME.char_data.y) {
		setTimeout(function(){ SK.Collect(); },300);
	} else if(Object.keys(GAME.map_balls).filter(key => GAME.map_balls[key] === 1)[0]!=undefined && !SK.check) {
		SK.coords=Object.keys(GAME.map_balls)
		.filter(key => GAME.map_balls[key] === 1)[0]
		.split('_');
		SK.check=true;
	setTimeout(function(){ SK.Action(); },300);
	} else {
		SK.coords=Object.keys(GAME.map_balls)
		.filter(key => GAME.map_balls[key] === 1)[0]
		.split('_');
	setTimeout(function(){ SK.Go(); },300);
	}
}


SK.CreateMatrix = function(){
    SK.Matrix = [];
    SK.Map = SK.FindMapcell();

    for(var i=0; i<parseInt(GAME.map.max_y); i++){
        SK.Matrix[i] = [];
        for(var j=0; j<parseInt(GAME.map.max_x); j++){
            if(SK.Map[parseInt(j+1)+'_'+parseInt(i+1)].m==1){
                SK.Matrix[i][j] = 1;
            }else{
                SK.Matrix[i][j]=0
            }
        }
    }
}
SK.FindMapcell = function(){
    var mapcell = Object.keys(GAME).find(z=> GAME[z] && GAME[z]['1_1']);
    Object.defineProperty(GAME,'mapcell',{
        get: function(){ return GAME[mapcell]; },
        enumerable: true,
        configurable: true
    });

    return GAME.mapcell;
}
SK.Wish = function(){
	console.log("wish");
	GAME.emitOrder({a:33,type:4,wish:8});
	SK.sk=0;
}

SK.Collect = function(){
	if(GAME.field_dball.id !=undefined){
    GAME.emitOrder({a:33,type:3,id:GAME.field_dball.id});
	SK.sk=SK.sk+1;
	SK.check=false;
	SK.coords= new Array;
	console.log("catch ball");
	if(SK.sk==7){SK.tep_cd=60000;}
	setTimeout(function(){ SK.Start(); },SK.tep_cd);
} else {setTimeout(function(){ SK.Start(); },1000);}
}

SK.Teleport = function(){
    GAME.emitOrder({a:12,type:18,loc:SK.Locations[0]});
		SK.Locations.shift();
		console.log("teleport");
	setTimeout(function(){ SK.Start(); },1000);	
}

SK.Go = function(){
	SK.CreateMatrix();
	 SK.Finder.setGrid(SK.Matrix);

    PathID = SK.Finder.findPath(GAME.char_data.x-1, GAME.char_data.y-1, SK.coords[0]-1, SK.coords[1]-1, function(path){

        if(path === null){
            console.log("Path was not found");
        }else{
            if(path.length!=0 && path[0].x == GAME.char_data.x-1 && path[0].y == GAME.char_data.y-1){
                path.shift();
            }

            SK.Path = path;
            setTimeout(function(){ SK.Move(); }, 100);
        }
    });

    SK.Finder.calculate();
}

SK.Move = function(){
    if(!SK.stop){
        if(SK.Path.length!=0 && SK.Path[0].x > GAME.char_data.x-1 && SK.Path[0].y == GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:7,vo:GAME.map_options.vo}); // prawo
        }else if(SK.Path.length!=0 && SK.Path[0].x < GAME.char_data.x-1 && SK.Path[0].y == GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:8,vo:GAME.map_options.vo}); // lewo
        }else if(SK.Path.length!=0 && SK.Path[0].x == GAME.char_data.x-1 && SK.Path[0].y > GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:1,vo:GAME.map_options.vo}); // dół
        }else if(SK.Path.length!=0 && SK.Path[0].x == GAME.char_data.x-1 && SK.Path[0].y < GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:2,vo:GAME.map_options.vo}); // góra
        }else if(SK.Path.length!=0 && SK.Path[0].x > GAME.char_data.x-1 && SK.Path[0].y > GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:3,vo:GAME.map_options.vo}); // dół - prawo
        }else if(SK.Path.length!=0 && SK.Path[0].x < GAME.char_data.x-1 && SK.Path[0].y < GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:6,vo:GAME.map_options.vo}); // góra - lewo
        }else if(SK.Path.length!=0 && SK.Path[0].x > GAME.char_data.x-1 && SK.Path[0].y < GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:5,vo:GAME.map_options.vo}); // góra - prawo
        }else if(SK.Path.length!=0 && SK.Path[0].x < GAME.char_data.x-1 && SK.Path[0].y > GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:4,vo:GAME.map_options.vo}); // dół - lewo
        }else{
            SK.Go();
        }
    }
}

SK.Next = function(){
    if(SK.Path.length-1 > 0){
        SK.Path.shift();
        setTimeout(function(){ SK.Move(); }, 100);
    }else{
        setTimeout(function(){ SK.Start(); }, 500);
    }
}



SK.HandleSockets = function(res){
    if(!SK.Stop && res.a === 4 && res.char_id === GAME.char_id){
        // Move response
        SK.Next();
    }else if(!SK.Stop && res.a === 12){
        // teleport response
        SK.CreateMatrix();
	}

	// on empty response (e.g. when player can't move)
	else if (!SK.stop && res.a === undefined){ setTimeout(() => { SK.Go(); }, 500); }
	else if (!SK.stop) { SK.CreateMatrix();
	}
}

GAME.socket.on('gr', function(msg){
    SK.HandleSockets(msg);
});
SK.LoadES = function(){
    esjs = document.createElement('script');
    esjs.src = 'https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js';
    esjs.onload = () => {
        SK.Finder = new EasyStar.js();
        SK.Finder.enableDiagonals();
        SK.Finder.setAcceptableTiles([1]);

        $("#SK_control").show();
    }
    document.head.append(esjs);
}();


});
