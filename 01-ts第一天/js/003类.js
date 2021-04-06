/****
 * 接口:
 * 是一种能力 一种约束能力
 */
(function () {
    /***
     * 定义一个类
     */
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + this.lastName;
        }
        return Person;
    }());
    var person = new Person('诸葛', '孔明');
    console.log(person);
    function hellow(person) {
        return person.lastName + '_' + person.firstName;
    }
    console.log(hellow(person), person instanceof Person);
})();
