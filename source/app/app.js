export var test1 = {
    title:'Hello world1'
};
export var test2 = {
    title:'Hello world2'
};
export var test3 = class Test3{
    constructor(){

    }
    static title(){
        return 'Hello world3';
    }
};
export default {
    test1,
    test2,
    test3
};

//TODO
//rename app to lib
//add lib name from pj
//stylus(demo,dev,prod)
//autoprefixer
//html plugin
//aliases
//cleanPlugin
//production
//babel-polifil
//codepen +template on codepen
//windows compatibility
//refactor paths