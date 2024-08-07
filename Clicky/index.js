const click = document.getElementById("button");
const dpcupgrade = document.getElementById("dpc");
const dpsupgrade = document.getElementById("dps");
const money = document.getElementById("money");
const dpcinfo = document.getElementById("dpcinfo");
const dpsinfo = document.getElementById("dpsinfo");
const dpscostdisplay = document.getElementById("dpscost");
const dpccostdisplay = document.getElementById("dpccost");
const dpcupgrade2 = document.getElementById("dpc2");
const dpsupgrade2 = document.getElementById("dps2");
const dpscostdisplay2 = document.getElementById("dpscost2");
const dpccostdisplay2 = document.getElementById("dpccost2");
const x10button = document.getElementById("x10");
const x10costtxt = document.getElementById("x10cost");
const x10container = document.getElementById("x10container")

//
let dps = 0;
let mcount = 0;
let mcountdis = 0;
let dpc = 1;
let dpscost = 300;
let dpspro = 1;
let dpsincrease = 100;
let dpccost = 100;
let dpcpro = 1;
let dpcincrease = 100;
let dpscost2 = 2000;
let dpsincrease2 = 2000;
let dpspro2 = 10
let dpccost2 = 1000;
let dpcincrease2 = 1500;
let dpcpro2 =10
let x10cost = 10000;
let dpcdis = dpccost;
let dpsdis = dpscost;
let dpcdis2 = dpscost2;
let dpsdis2 = dpscost2;
let x10costdis = x10cost;
//

function x10costdisplay(){
    if (x10cost >= 1000000){
        if (x10cost >= 1000000000){
            if (x10cost >= 1000000000000){
                x10costdis = x10cost
                x10costdis /= 1000000000000
                x10costtxt.textContent =`Cost: $${x10costdis.toFixed(2)} trillion`;
            }
            else{
                x10costdis = x10cost
                x10costdis /= 1000000000
                x10costtxt.textContent =`Cost: $${x10costdis.toFixed(2)} billion`;
            }

        }
        else{
            x10costdis = x10cost
            x10costdis /= 1000000
            x10costtxt.textContent =`Cost: $${x10costdis.toFixed(2)} million`;
            console.log("million");
        }
    }
    else {
        x10costtxt.textContent = `Cost: $${x10cost}`;
    };
};

function dpscstdisplay(){
    if (dpscost >= 1000000){
        if (dpscost >= 1000000000){
            if (dpscost >= 1000000000000){
                dpsdis = dpscost
                dpsdis /= 1000000000000
                dpscostdisplay.textContent =`Cost: $${dpsdis.toFixed(2)} trillion`;
            }
            else{
                dpsdis = dpscost
                dpsdis /= 1000000000
                dpscostdisplay.textContent =`Cost: $${dpsdis.toFixed(2)} billion`;
            }

        }
        else{
            dpsdis = dpscost
            dpsdis /= 1000000
            dpscostdisplay.textContent =`Cost: $${dpsdis.toFixed(2)} million`;
            console.log("million");
        }
    }
    else {
        dpscostdisplay.textContent = `Cost: $${dpscost}`;
    };
};

function dpccstdisplay(){
    if (dpccost >= 1000000){
        if (dpccost >= 1000000000){
            if (dpccost >= 1000000000000){
                dpcdis = dpccost
                dpcdis /= 1000000000000
                dpccostdisplay.textContent =`Cost: $${dpcdis.toFixed(2)} trillion`;
            }
            else{
                dpcdis = dpccost
                dpcdis /= 1000000000
                dpccostdisplay.textContent =`Cost: $${dpcdis.toFixed(2)} billion`;
            }

        }
        else{
            dpcdis = dpccost
            dpcdis /= 1000000
            dpccostdisplay.textContent =`Cost: $${dpcdis.toFixed(2)} million`;
            console.log("million");
        }
    }
    else {
        dpccostdisplay.textContent = `Cost: $${dpccost}`;
    };
};

function dpscstdisplay2(){
    if (dpscost2 >= 1000000){
        if (dpscost2 >= 1000000000){
            if (dpscost2 >= 1000000000000){
                dpsdis2 = dpscost2
                dpsdis2 /= 1000000000000
                dpscostdisplay2.textContent =`Cost: $${dpsdis2.toFixed(2)} trillion`;
            }
            else{
                dpsdis2 = dpscost2
                dpsdis2 /= 1000000000
                dpscostdisplay2.textContent =`Cost: $${dpsdis2.toFixed(2)} billion`;
            }

        }
        else{
            dpsdis2 = dpscost2
            dpsdis2 /= 1000000
            dpscostdisplay2.textContent =`Cost: $${dpsdis2.toFixed(2)} million`;
            console.log("million");
        }
    }
    else {
        dpscostdisplay2.textContent = `Cost: $${dpscost2}`;
    };
};

function dpccstdisplay2(){
    if (dpccost2 >= 1000000){
        if (dpccost2 >= 1000000000){
            if (dpccost2 >= 1000000000000){
                dpcdis2 = dpccost2
                dpcdis2 /= 1000000000000
                dpccostdisplay2.textContent =`Cost: $${dpcdis2.toFixed(2)} trillion`;
            }
            else{
                dpcdis2 = dpccost2
                dpcdis2 /= 1000000000
                dpccostdisplay2.textContent =`Cost: $${dpcdis2.toFixed(2)} billion`;
            }

        }
        else{
            dpcdis2 = dpccost2
            dpcdis2 /= 1000000
            dpccostdisplay2.textContent =`Cost: $${dpcdis2.toFixed(2)} million`;
            console.log("million");
        }
    }
    else {
        dpccostdisplay2.textContent = `Cost: $${dpccost2}`;
    };
};


function mcountdisplay(){
    if (mcount >= 1000000){
        if (mcount >= 1000000000){
            if (mcount >= 1000000000000){
                mcountdis = mcount
                mcountdis /= 1000000000000
                money.textContent =`$${mcountdis.toFixed(2)} trillion`;
                console.log(mcount);
                console.log(mcountdis)
            }
            else{
                mcountdis = mcount
                mcountdis /= 1000000000
                money.textContent =`$${mcountdis.toFixed(2)} billion`;
                console.log(mcount);
                console.log(mcountdis)
            }

        }
        else{
            mcountdis = mcount
            mcountdis /= 1000000
            money.textContent =`$${mcountdis.toFixed(2)} million`;
            console.log(mcount);
            console.log(mcountdis)
        }
    }
    else {
        money.textContent = `$${mcount}`;
    };
};

function affordcolor(){
    if (mcount >= dpccost){
        dpccostdisplay.classList.add('canafford');
    }
    else {
        dpccostdisplay.classList.remove('canafford');
    }
    if (mcount >= dpscost){
        dpscostdisplay.classList.add('canafford');
    }
    else {
        dpscostdisplay.classList.remove('canafford');
    }
    if (mcount >= dpccost2){
        dpccostdisplay2.classList.add('canafford');
    }
    else {
        dpccostdisplay2.classList.remove('canafford');
    }
    if (mcount >= dpscost2){
        dpscostdisplay2.classList.add('canafford');
    }
    else {
        dpscostdisplay2.classList.remove('canafford');
    }
    if (mcount >= x10cost){
        x10costtxt.style.color = ('rgb(75, 255, 69)');
    }
    else {
        x10costtxt.style.color = ('rgb(255, 69, 69)');
    }
};

function mysterybutton (){
    if (mcount >= x10cost){
        if (x10cost > 11000){
            x10costdisplay();
        }
        else {
            x10button.textContent = `10 X all upgrades`;
            x10button.style.transition = ('background-color 2.25s');
            x10button.style.backgroundColor = ('black');
            x10button.style.transition = ('color 3.25s');
            x10button.style.color = ('white');
            x10costtxt.textContent = `Cost: $${x10cost}`;
            x10costtxt.style.color = ('rgb(75, 255, 69)');
        }

    }
}



click.onclick = function(){
    mcount += dpc; 
    mcountdisplay();
    affordcolor();
    mysterybutton();
};
dpsupgrade.onclick = function(){
    if (mcount >= dpscost){
        mcount -= dpscost;
        dps += dpspro;
        dpscost += dpsincrease;
        dpsinfo.textContent = `$${dps} per second`;
        dpscostdisplay.textContent = `Cost: $${dpscost}`;
        mcountdisplay();
        affordcolor();
        dpscstdisplay();
    };
};
dpcupgrade.onclick = function(){
    if (mcount >= dpccost){
        mcount-= dpccost;
        dpc += dpcpro;
        dpccost += dpcincrease;
        dpcinfo.textContent = `$${dpc} per click`;
        dpccstdisplay();
        mcountdisplay();
        affordcolor();
        console.log(dpccost);
    };
};
dpsupgrade2.onclick = function(){
    if (mcount >= dpscost2){
        mcount -= dpscost2;
        dps += dpspro2;
        dpscost2 += dpsincrease2;
        dpsinfo.textContent = `$${dps} per second`;
        dpscostdisplay2.textContent = `Cost: $${dpscost2}`;
        mcountdisplay();
        affordcolor();
        dpscstdisplay2();
    };
};
dpcupgrade2.onclick = function(){
    if (mcount >= dpccost2){
        mcount-= dpccost2;
        dpc += dpcpro2;
        dpccost2 += dpcincrease2;
        dpcinfo.textContent = `$${dpc} per click`;
        dpccostdisplay2.textContent = `Cost: $${dpccost2}`;
        mcountdisplay();
        affordcolor();
        dpccstdisplay2();
    }
};
x10button.onclick = function(){
    if (mcount >= x10cost){
        mcount-= x10cost;
        x10cost *= 10 ;
        x10costtxt.textContent = `Cost: $${x10cost}`;
        mcountdisplay();
        affordcolor();
        x10costdisplay();
        // dpscost *= 1.2
        // dpscost2 *= 1.2
        // dpccost *= 1.2
        // dpccost2 *= 1.2
        dpspro *= 10
        dpspro2 *= 10
        dpcpro *= 10
        dpcpro2 *= 10
        dpscost *= 2
        dpscost2 *= 6
        dpccost *= 2
        dpccost2 *= 6
        dpsincrease *= 2
        dpsincrease2 *= 6
        dpcincrease *= 2
        dpcincrease2 *= 6


        dpscstdisplay();
        dpscstdisplay2();
        dpccstdisplay();
        dpccstdisplay2();
        dpsupgrade.textContent = `+${dpspro} dollar per second`
        dpsupgrade2.textContent = `+${dpspro2} dollar per second`
        dpcupgrade.textContent = `+${dpcpro} dollar per click`
        dpcupgrade2.textContent = `+${dpcpro2} dollar per click`
        console.log("hello :)")
        if (x10cost === 100000 || x10cost === 100000000){
            dpsupgrade.style.transition = ('background-color 2.25s');
            dpsupgrade.style.backgroundColor = ('black');
            dpsupgrade.style.transition = ('color 3.25s');
            dpsupgrade.style.color = ('white');
            dpsupgrade2.style.transition = ('background-color 2.25s');
            dpsupgrade2.style.backgroundColor = ('black');
            dpsupgrade2.style.transition = ('color 3.25s');
            dpsupgrade2.style.color = ('white');
            dpcupgrade.style.backgroundColor = ('black');
            dpcupgrade.style.transition = ('color 3.25s');
            dpcupgrade.style.color = ('white');
            dpcupgrade2.style.transition = ('background-color 2.25s');
            dpcupgrade2.style.backgroundColor = ('black');
            dpcupgrade2.style.transition = ('color 3.25s');
            dpcupgrade2.style.color = ('white');
        }
        else {
            if (x10cost === 1000000 || x10cost === 1000000000){
                dpsupgrade.style.transition = ('background-color 2.25s');
                dpsupgrade.style.backgroundColor = ('rgb(177, 81, 255)');
                dpsupgrade.style.transition = ('color 3.25s');
                dpsupgrade.style.color = ('black');
                dpsupgrade2.style.transition = ('background-color 2.25s');
                dpsupgrade2.style.backgroundColor = ('rgb(177, 81, 255)');
                dpsupgrade2.style.transition = ('color 3.25s');
                dpsupgrade2.style.color = ('black');
                dpcupgrade.style.backgroundColor = ('rgb(177, 81, 255)');
                dpcupgrade.style.transition = ('color 3.25s');
                dpcupgrade.style.color = ('black');
                dpcupgrade2.style.transition = ('background-color 2.25s');
                dpcupgrade2.style.backgroundColor = ('rgb(177, 81, 255)');
                dpcupgrade2.style.transition = ('color 3.25s');
                dpcupgrade2.style.color = ('black');
            }
            else {
                if (x10cost === 10000000 || x10cost === 10000000000){
                    dpsupgrade.style.transition = ('background-color 2.25s');
                    dpsupgrade.style.backgroundColor = ('rgb(238, 255, 81)');
                    dpsupgrade.style.color = ('black');
                    dpsupgrade2.style.transition = ('background-color 2.25s');
                    dpsupgrade2.style.backgroundColor = ('rgb(238, 255, 81)');
                    dpsupgrade2.style.color = ('black');
                    dpcupgrade.style.transition = ('background-color 2.25s');
                    dpcupgrade.style.backgroundColor = ('rgb(238, 255, 81)');
                    dpcupgrade.style.color = ('black');
                    dpcupgrade2.style.transition = ('background-color 2.25s');
                    dpcupgrade2.style.backgroundColor = ('rgb(238, 255, 81)');
                    dpcupgrade2.style.color = ('black');
                };
            };
        };
    };
};
setInterval(function() {
    mcount += dps;
    mcountdisplay();
    affordcolor();
    mysterybutton();
}, 1000);

// mcount = 2000
// money.textContent = `$${mcount}`;
// dps = 16281300000
// dpc = 1928340000

