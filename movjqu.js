/*document.getElementById / document.querySelectorAll */

var lit = document.getElementById('lit');
cont = document.getElementById('cont');
log = document.querySelector('div.log');
nav = document.querySelector('div.nav');
sea = document.querySelector('div.sea');
icn = document.querySelector('div.icn');
eng = document.getElementsByTagName('input')[0];
sid = document.querySelector('div.side');
sdiv = document.querySelectorAll('.side > div');
prop = document.querySelector('div.prop');
sor = document.querySelector('div.story');
str = document.querySelector('div.str');
strp = document.querySelectorAll('.str > p');
prp = document.querySelector('div.prp');
h3  = document.querySelector('.prp h3');
war = document.querySelector('div.war');
wardv = document.querySelectorAll('.war > div');
warsg = document.querySelectorAll('.war > div svg');
warbd = document.querySelectorAll('.container .prop .prp .war > div bdi, .container .prop .prp .war > div .khra');
vede = document.querySelector('.container .vid');
butt = document.querySelectorAll(".container .vid .hed > div");
txt = document.getElementsByTagName("textarea")[0];
submt = document.getElementsByTagName('input')[1];
smlr = document.getElementsByClassName('smlr')[0];
cnt = document.getElementsByClassName('cont')[0];
hrhr = document.querySelector('.smlr h3');
sims = document.getElementsByClassName('sims')[0];
fotr = document.getElementsByClassName('footer')[0];
fotrp = document.querySelectorAll('.footer > p');
scll = document.createElement('style');
ssll = document.head.lastElementChild.childNodes;

lit.onclick = function () {
    
    'use strict';

    cont.style.background = 'rgb(237,239,240)';
        
    log.style.background = 'rgb(49,66,126)';

    nav.style.background = 'rgb(74,85,165)';
        
    sea.style.background = 'rgb(49,66,126)';
        
    icn.style.background = 'rgb(237,239,240)';
        
    eng.style.background = 'rgb(237,239,240)';

    prop.style.background = '#fff';
        
    sor.style.background = 'rgb(68,131,196)';
    
    str.style.background = 'rgb(237,239,240)';

    vede.style.background = '#fff';

    var d;

    for (d=0;d<3;d++) {
    
    butt[d].setAttribute('style', 'background:#EDEFF0 !important');
    
    butt[d].onmouseenter = function () {
        this.firstElementChild.setAttribute('style', 'color:#EDEFF0 !important');
    }
    butt[d].onmouseleave = function () {
        this.firstElementChild.setAttribute('style', 'color:#4181C3 !important');
    }
    strp[d].style.color = '#161616';
    }

    txt.style.cssText = 'background: rgb(237,239,240); color:#4181c3';

    submt.style.background = 'rgb(237,239,240)';

    smlr.style.background = '#fff';

    hrhr.style.background = '#4382C4';
        
    cnt.setAttribute('style','background:#4382C4; border-right:5px solid #4382C4; border-left:5px solid #4382C4');

    sims.style.background = '#fff';

    fotr.setAttribute('style', 'background:rgb(74,85,165); border-top:10px solid rgb(68,131,196); border-bottom:10px solid rgb(68,131,196)');

    document.head.appendChild(scll);

    scll.innerHTML = 'div.cont::-webkit-scrollbar-track {background-color:#c3c0fd !important;} div.cont::-webkit-scrollbar-thumb {background-color:#161616 !important;}';

    if (window.innerWidth > 767) {
        
        sid.style.background = '#4A56A5';

        var i;

        for ( i = 0; i < 4; i++) { 

        sdiv[i].setAttribute('style', 'background:#EDEFF0');
        
        sdiv[i].onmouseenter = function () {

            this.firstElementChild.setAttribute('style', 'color:#EDEFF0');
        }

        sdiv[i].onmouseleave = function () {

            this.firstElementChild.setAttribute('style', 'color:#4181C3');
        } 
                
        prp.style.background = 'none';
        
        war.style.background = 'none';

        h3.setAttribute('style', 'background:#EDEFF0; color:#161616');

        wardv[i].style.background = '#EDEFF0';

        warsg[i].style.fill = '#4382C4';

        warbd[i].style.color = '#0e0e0f';

        fotrp[i].style.color = '#fff';}
        
    } else {

        var i;

        for ( i = 0; i < 4; i++) { 

        prp.style.background = 'rgb(68,131,196)';
        
        war.style.background = 'rgb(237,239,240)';

        wardv[i].style.background = '#fff';

        warsg[i].style.fill = 'rgb(237,239,240)';

        warbd[i].style.color = '#0e0e0f';

        fotrp[i].style.color = '#fff';}
    }
    
};

drk.onclick = function () {

    'use strict';

    log.style.background = '#071433';

    nav.style.background = '#0f121e';
        
    sea.style.background = '#071433';
        
    icn.style.background = '#17162e';
        
    eng.style.background = '#17162e';
    
    sor.style.background = '#071433';

    str.style.background = '#161616';

    var d;

    for (d=0;d<3;d++) {
    
    butt[d].style.background = '#161616';
    
    butt[d].onmouseenter = function () {
        this.firstElementChild.setAttribute('style', 'color:#161616 !important');
    }
    butt[d].onmouseleave = function () {
        this.firstElementChild.setAttribute('style', 'color:#4181C3 !important');
    }
    strp[d].style.color = '#fff';
    }
        
    hrhr.style.background = '#071433';

    cnt.setAttribute('style','background:#071433; border-right:5px solid #071433; border-left:5px solid #071433');

    fotr.setAttribute('style', 'background:#0f121e; border-top:10px solid #081633; border-bottom:10px solid #081633');

    scll.innerHTML = 'div.cont::-webkit-scrollbar-track {background-color:#0e0e0f !important;} div.cont::-webkit-scrollbar-thumb {background-color:#4181c3 !important;}';

    if (window.innerWidth > 767) {
        
        cont.style.background = '#161616';

        prop.style.background = '#0E0E0f';

        prp.style.background = 'none';

        sid.style.background = '#161616';

        vede.style.background = '#0e0e0f';

        var i;

        for ( i = 0; i < 4; i++) { 

        sdiv[i].style.background = '#0e0e0e';
        
        sdiv[i].onmouseenter = function () {

            this.setAttribute('style', 'color:rgb(237,239,240)');
        }

        sdiv[i].onmouseleave = function () {

            this.style.color = '#4181C3'
        }
        
        war.style.background = 'none';

        h3.setAttribute('style', 'background:#161616; color:#fff');

        wardv[i].style.background = '#161616';

        warsg[i].style.fill = '#fff';

        warbd[i].style.color = '#fff';
    
        txt.style.cssText = 'background: #161616; color:#4181c3';

        submt.style.background = '#161616';
    
        smlr.style.background = '#0e0e0e';

        sims.style.background = '#0e0e0e';

        fotrp[i].style.color = '#4181c3';}
        
    } else {

        cont.style.background = '#0e0e0e';

        prop.style.background = '#161616';

        prp.style.background = '#161616';

        sid.style.background = '#0e0e0f';

        vede.style.background = '#161616';

        var i;

        for ( i = 0; i < 4; i++) { 
        
        war.style.background = '#161616';

        h3.setAttribute('style', 'background:none; color:#fff');

        wardv[i].style.background = '#0e0e0f';

        warsg[i].style.fill = '#fff';

        warbd[i].style.color = '#fff';
    
        txt.style.cssText = 'background: #0e0e0f; color:#4181c3';

        submt.style.background = '#0e0e0f';
    
        smlr.style.background = '#161616';

        sims.style.background = '#161616';

        fotrp[i].style.color = '#4181c3';}
    }
}