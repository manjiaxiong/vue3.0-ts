/****
 * 接口:
 * 是一种能力 一种约束能力
 */
(function () {
    function hellow(person) {
        return person.lastName + '_' + person.firstName;
    }
    var person = {
        lastName: 'q2weq',
        firstName: 'asdas'
    };
    console.log(hellow(person));
})();
