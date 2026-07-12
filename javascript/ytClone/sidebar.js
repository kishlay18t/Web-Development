/*sidebar toggle*/
const sidebar = document.getElementById("sidebar");

function isSidebarCollapsed(){
    if (sidebar.classList.contains("collapsed")){
        return true;
    }
    else{
        return false;
    }

}

function collapseSidebar(){
    sidebar.classList.add("collapsed");
    sidebar.classList.remove("expanded");

    localStorage.setItem("sidebarState", "collapsed");
    console.log("sidebar collapsed");
}

function expandSidebar(){
    sidebar.classList.add("expanded");
    sidebar.classList.remove("collapsed");

    localStorage.setItem("sidebarState", "expanded");
    console.log("sidebar expanded");
}

function toggleSidebar(){
    if (isSidebarCollapsed()) expandSidebar();
    else    collapseSidebar();
}

function restoreSidebarState(){
    const currentState =
        localStorage.getItem("sidebarState");

    if (currentState === "expanded"){
        expandSidebar();
    }
    else{
        collapseSidebar();
    }
}

export { toggleSidebar, restoreSidebarState };
