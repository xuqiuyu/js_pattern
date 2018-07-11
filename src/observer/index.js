/**
 * ------------------------------------------------------------------
 * 观察者模式(发布-订阅 模式)
 * 概念：它定义一种对象之间一对多的依赖关系，让多个观察者对象同时监听一个主题对象，当主题对象的状态发生变化时，会通知所有依赖于它的观察者对象。
 * ------------------------------------------------------------------
 */

 /**
  * ------------------------------------------------------------------
  * 模块对象一般包含以下成员：订阅记录、订阅方法、退订方法、发布方法
  * ------------------------------------------------------------------
  */
 var module = {
    record: {},
    subscribe: function(key, fn){
        if(typeof fn !== 'function' || !fn.name){
            throw new Error('subscribe event must be a named function');
        }
        if(this.record[key]) this.record[key].push(fn); else this.record[key] = [fn];
    },
    unsubscribe: function(key, fn){
        if(!this.record[key] || typeof fn !== 'function') return false;
        if(this.record[key].some(function(item,index, _self){
            if(item === fn) {
                _self.splice(index, 1);
                return true;
            }
            return false;
        })){
            return true;
        }
        return false;
    },
    publish: function(){
        var _args = arguments;
        var key = Array.prototype.shift.call(_args),
            fns = this.record[key];
        if(!Array.isArray(fns)) return false;
        fns.forEach(function(item){
            item.apply(null, _args);
        });
        return true;
    }
}