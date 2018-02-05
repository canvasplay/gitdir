//const fs = require('fs');
const fse = require('fs-extra');
var path = require('path');
var ejs = require('ejs');

var DIR = './';
var OUTPUT = './index.html';
var REPOS = [];
var HTML = [];

var PROCESS_ARGUMENTS = () => {
    process.argv.forEach(function (val, index, array) {
        if(index===2)
            DIR = val
        else if(index===3)
            OUTPUT = val
    });
}

var GET_REPOS_LIST = () => {

    files = fse.readdirSync(DIR);
    REPOS = files.filter(function (f) {
        return f.indexOf('.git') > 0
    });
    REPOS = REPOS.sort();

}

var PROCESS_REPO_LIST = function() {

    for (var i=0, len=REPOS.length; i<len; i++ ){
        
        var contents = fse.readFileSync(DIR+'/'+REPOS[i] + '/description', 'utf8');

        var data = {
            path: REPOS[i],
            name: contents.split(';')[0],
            description: contents.split(';')[1],
            //link: path.resolve(REPOS[i]).split(path.sep).join('/')
            link: path.resolve(DIR).split(path.sep).join('/') + '/' + REPOS[i]
        }

        REPOS[i] = data;
    }

}

var RENDER_HTML = function(){
    
    var tmpl = fse.readFileSync('template.tmpl', 'utf8');
    HTML = ejs.render(tmpl, { data: REPOS });

}

var WRITE_FILE = () =>{
    fse.outputFileSync(OUTPUT, HTML, 'utf8');
}

PROCESS_ARGUMENTS();
GET_REPOS_LIST();
PROCESS_REPO_LIST();
RENDER_HTML();
WRITE_FILE();