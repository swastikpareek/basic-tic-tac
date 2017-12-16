var Ticktac = Ticktac || {};

function initTictac() {

  Ticktac.selectedPlayer = 'pred';
  Ticktac.pred = [];
  Ticktac.predmarks = '';
  Ticktac.pblue = [];
  Ticktac.pbluemarks = '';  
  document.querySelector('#playerList').value = 'pred';
  var elems = document.querySelectorAll(".processed");

  [].forEach.call(elems, function(el) {
      el.classList.remove("processed");
  });  
  var elems = document.querySelectorAll(".pred");

  [].forEach.call(elems, function(el) {
      el.classList.remove("pred");
  });  
  var elems = document.querySelectorAll(".pblue");

  [].forEach.call(elems, function(el) {
      el.classList.remove("pblue");
  });      
}

initTictac();

Ticktac.clicked = function(event, node) {
  console.log(event,node);
  event.target.classList.add('processed');
  event.target.classList.add(Ticktac.selectedPlayer);
  Ticktac[Ticktac.selectedPlayer].push(node);
  Ticktac[Ticktac.selectedPlayer].sort();
  Ticktac[Ticktac.selectedPlayer + 'marks'] = Ticktac[Ticktac.selectedPlayer].join('-');
  if(checkIfWon(Ticktac[Ticktac.selectedPlayer + 'marks'])){
    setTimeout(function(){
      alert(Ticktac.selectedPlayer + 'won'); 
      initTictac();
    }, 100);
    
  } else {
    Ticktac.togglePlayer();
  }
}

Ticktac.togglePlayer = function() {
  if(Ticktac.selectedPlayer === 'pred') {
    Ticktac.selectedPlayer = 'pblue';
    document.querySelector('#playerList').value = 'pblue';
  } else {
    Ticktac.selectedPlayer = 'pred';
    document.querySelector('#playerList').value = 'pred';
  }
  // document.querySelectorAll('.grid-box')
}


function checkIfWon(list) {
  var status = null;
  console.log(list);
  status = list.match(/1.*2.*3/i) || list.match(/4.*5.*6/i) || list.match(/7.*8.*9/i) || list.match(/1.*4.*7/i) || list.match(/2.*5.*8/i) || list.match(/3.*6.*9/i) || list.match(/1.*5.*9/i) || list.match(/3.*5.*7/i);
  if (status === null) {
    return false;
  } else {
    return true;
  }
}
// Ticktac.changePlayer = function(event) {
//   Ticktac.selectedPlayer = event.target.value;
// }