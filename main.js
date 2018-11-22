var chats =[
  { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 17, 2018 23:15:30',
   message:"Hi Mam"
  },
   { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 28, 2018 03:15:30',
    message:"Appologies for today"
  },
   { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 27, 2018 13:15:30',
    message:"I want to submit my project"
  },
   { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 26, 2018 14:15:30',
    message:"I have done hardwork"
  },
  { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 25, 2018 23:18:30',
   message:"Kindly check my work"
  },
  { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 24, 2018 23:15:31',
   message:"This is done"
  },
  { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 23, 2018 23:15:33',
   message:"I am happy about it"
  },
  { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 22, 2018 23:15:34',
   message:"Thanks team releson"
  },
  { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 21, 2018 23:15:38',
   message:"Made by Simmy Bajaj"
  },
  { contactno: "+91 9953438126",
   contactname: "Simmy",
   msgtime: 'August 20, 2018 23:15:31',
  message:"Hi"
  }   
]

function min_date(all_dates) {
var min_dt = all_dates[0],
min_dtObj = new Date(all_dates[0]);
all_dates.forEach(function(dt, index)
{
if ( new Date( dt ) < min_dtObj)
{
min_dt = dt;
min_dtObj = new Date(dt);
}
});
return all_dates.indexOf(min_dt);
}

function createChat(i){
var list = document.querySelector('ul');
//console.log(list);
var listitem = document.createElement('li');
//console.log(listitem);
list.appendChild(listitem);
var div1 = document.createElement('div');
listitem.appendChild(div1);
var span1 = document.createElement('span');
span1.innerHTML = chats[i].contactno;
div1.appendChild(span1);
var span2 = document.createElement('span');
span2.innerHTML=chats[i].contactname;
div1.appendChild(span2);
div2=document.createElement('div');
listitem.appendChild(div2);
var span3= document.createElement('span');
span3.innerHTML=chats[i].message;
div2.appendChild(span3);
span4 = document.createElement('span');
div2.appendChild(span4);
span4.innerHTML=chats[i].msgtime;
listitem.classList.add('clearfix');
listitem.classList.add('bg-white');
listitem.classList.add('border');
listitem.classList.add('mb-2');
listitem.classList.add('wide');
div1.classList.add('message-data');
div1.classList.add('align-right');
span1.classList.add('message-data-time');
span2.classList.add('message-data-time');
div1.classList.add('pl-3');
span2.classList.add('pl-3');
div2.classList.add('pl-3')
div2.classList.add('message');
div2.classList.add('other-message');
//div2.classList.add('float-right');
//div2.classList.add('p-1');
span4.classList.add('time-class');
span4.classList.add('p-2');
span4.classList.add('float-right')
}
function debounce(func, wait = 20, immediate = true) {
var timeout;
return function() {
var context = this, args = arguments;
var later = function() {
timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const textSlider = document.querySelectorAll('.tool');
//console.log(textSlider);
function checkSlide(e){
    //console.count(e);
    //console.log(window.scrollY);
    textSlider.forEach(text => {
        //half way throgh the image
        const slideInAt = (window.scrollY + window.innerHeight) - text.clientHeight / 2;
        //console.log(slideInAt);
        const imageBottom = text.offsetTop + text.clientHeight;
        const isHalfShown = slideInAt >  text.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast){
            text.classList.add('active');
        }else{
            text.classList.remove('active');
        }
    })
}
window.addEventListener('scroll', debounce(checkSlide));
var dates =[];
for(i=0;i<chats.length;i++){
dates.push(chats[i].msgtime);
    //console.log(dates);
}
let uniqueDates = dates
                   .map(s => s.toString())
                   .filter((s, i, a) => a.indexOf(s) == i)
                   .map(s => new Date(s));
                   
console.log(uniqueDates);

function dateApp(i){
  var list = document.querySelector('ul');
//console.log(list);
var listitem1 = document.createElement('div');
//console.log(listitem);
list.appendChild(listitem1);
listitem1.innerHTML = chats[i].msgtime;
listitem1.classList.add('tool'); 
}

function autoScroll(){
  window.scrollTo(0,document.body.scrollHeight);
}
for(let t=0 ; t < chats.length ; t++){
  let i =  min_date(dates);
  if(dates.length>1)
  {

  dateApp(i);
  createChat(i);
  autoScroll();
  debounce(checkSlide);

  }
  if (i==0){
  dates.splice(0,1);
  }
  else{
  dates.splice(i-1,1);}
  //alert(dates);
  //return dates;
}
//console.log(min_date(dates));