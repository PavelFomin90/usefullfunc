/**
 * Обертка для querySelectorAll, которая возвращает не просто список узлов,
 * но и предоставляет методы массива для этого списка
 * @param  {[string]} selector [Селектор интересующих нас узлов]
 * @param  {[string]} perent   [ Селектор родительского элемента(ов) для этих узлов]
 * @return {[array]}          [Массив узлов]
 */
getElem = function(selector, perent){
    var p = perent || document;
    var elem = p.querySelectorAll(selector);
    var elemArray = Array.prototype.slice.apply(elem);
    return elemArray;
}


/**
 * [Устанавливает класс для анимации из data-animation]
 * @param {[array]} collection [массив узлов]
 */
function setAnimClass(collection){
    collection.forEach(function(element,index){
        var cl = element.className;
        var animation = element.dataset;
        if( element.dataset['animation'] ){
            cl += " " + element.dataset['animation'];
            element.className = cl;
        }
    });
}
/**
 * [Возвращает позицию относительно верха документа]
 * @param  {[string]} selector [Селектор интересуешего элемента]
 * @param  {[string]} perent   [Родитель для интересующего жлемента(не обязательно)]
 * @return {[number]}          [Число пикселей отностительно верза документа]
 */
function elemPosition(selector, perent){
    var p = perent || document;
    var elem = p.querySelector(selector);
    return elem.offsetTop;
}
/**
 * [Удаляет класс у выбранного элемента]
 * @param  {[obj]} elem  [Узел из которого надо удалить класс]
 * @param  {[string]} className [Имя класса,который надо удалить]
 */
function removeClassName(elem, className){
    var cl = elem.className;
    var cl_array = cl.split(' ');
    var index = cl_array.indexOf(className);
    console.log(index);
    if(index != -1){
        cl_array.splice(index,1);
        cl = cl_array.join(" ");
        elem.className = cl;
    } else {
        console.error("Класс " + className + " не найден у элемента " + elem);
    }
}
