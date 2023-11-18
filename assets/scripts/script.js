"use-strict";

let currentScreen = getScreenType();
let isMenuOpen = false;

const getScreenType = () => {
    let width = window.innerWidth;

    const largeScreenSize = 1200, tabletSize = 768, mobileSize = 410;

    if(width > largeScreenSize){
        return 0;
    }else if(width > tabletSize){
        return 1;
    }else if(width > mobileSize){
        return 2;
    }

    return 3;
};

const toggleMenu = () => {
    if(isMenuOpen){
        // Close the menu

    }else{
        // Open the menu
    }

    isMenuOpen = !isMenuOpen;
};

const loader = () => {    
    window.addEventListener("load", () => {
        setTimeout(() => {
            const loadingElement = document.getElementById("loader");
            if(!!loadingElement){
                loadingElement.classList.add("loading");
                setTimeout(() => {
                    loadingElement.classList.remove("loading");
                    loadingElement.classList.add("loaded");
                }, 1000, [loadingElement]);
            }
        }, 600);
    });

    window.addEventListener("beforeunload", () => {
        console.log("Unloaded");
        const loadingElement = document.getElementById("loader");
        if(!!loadingElement){
            loadingElement.classList.remove("loaded");
            loadingElement.classList.add("unloading");
        }
    });

    // window.addEventListener("resize", () => {
    //     currentScreen = getScreenType();
    // });
};