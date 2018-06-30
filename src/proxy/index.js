/**
 * ------------------------------------------------------------------
 * 代理模式
 * 概念: 为一个对象提供一个代用品或者占位符，以便控制对它的访问。
 * PS: 当目前为止，用到"代理"这个词的也就记得两个场景:1、DOM多个同级子节点事件代理到父级DOM节点,减少多余的事件注册；2、前端架设中间层Node服务作    为服务端代理,可灵活适配第三方后端倪接口。 个人感觉代理模式像是对封装逻辑的再次封装并同时可灵活注入代理逻辑，简化访问方式的同时黑盒控制被代理对象    的实际访问。
 * ------------------------------------------------------------------
 */

var Breeze = {
    name: 'breeze',
    number: '18521315171',
    sex: 'male',
    getNumber: function(){
        return this.number;
    }
}

/**
 * ------------------------------------------------------------------
 * 架设一层代理对象控制Breeze对象的访问
 * ------------------------------------------------------------------
 */
var BreezeProxy = (function(){
    var Breeze = {
        name: 'breeze',
        number: '18521315171',
        sex: 'male',
        getNumber: function(){
            return this.number;
        }
    }
    return {
        getBreezeName(sex, age, isBeautiful){
            if(!sex || sex === 'male') return 'I do not know what you want to do , guy ...';
            if(!age || age > 30) return 'How old are you baby ...';
            if(!isBeautiful) return 'I am sorry but he is not at home ...';
            return Breeze.getName();
        }
    }
})()

