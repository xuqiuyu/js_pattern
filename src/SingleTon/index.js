/**
 * ------------------------------------------------------------------
 * 单例模式
 * 概念: 在面向对象的语言中,单例简单理解就是保证一个类在运行环境中只存在一个实例。
 * PS: 在JS中没有类的概念, new 实例的过程也与其他语言有所不同。以java为例,可以通过private构造器私有的方式强行阻止new关键字的直接实例化。
 *     但是JS似乎不可能阻止new调用，只能通过其他折中的方式间接实现单例模式。
 * JS单例(个人理解): JS没有类的概念，也不存在构造器私有的说法。单例对象存在的价值在于: 一些common甚至全局的方法或者属性托管在同一个对象上管理,调用方便(似乎还有点缓存的作用)，易于管理并且节省系统资源。
 * 
 * ------------------------------------------------------------------
 */
 
/**
 * ------------------------------------------------------------------
 * 1、最简单的对象字面量形式
 * ------------------------------------------------------------------
 */
var SingleTon = {
    someProperty: 'test',
    doSomething: function(){
        console.log(this.someProperty);
    }
}

/**
 * ------------------------------------------------------------------
 * 2、缓存实例对象并提供统一的访问入口
 * ------------------------------------------------------------------
 */
function SingleTon(name){
    this.name = name;
}

SingleTon.prototype.getName = function(){
    console.log(this.name);
}

SingleTon.getInstance = function(name){
    if(!this.instance) {
        this.instance = new SingleTon(name);
    }
    return this.instance;
}
