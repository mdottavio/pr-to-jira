chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            var branches = document.getElementsByClassName('current-branch'),
                v = 0,
                m = null;

            for (v = 0; v<branches.length; v++){
                m = /(.*?)_([a-z0-9]+)\-([0-9]+)/gi.exec(branches[v].innerHTML);
                if(m){
                    branches[v].innerHTML = "<a href='https://photorank.atlassian.net/browse/"+m[2]+"-"+m[3]+"' title='Open the jira' target='_blank'>"+branches[v].innerHTML+"</a>"; 
                }
            }
        }
    }, 10);
});