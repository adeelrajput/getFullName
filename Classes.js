var Human = (function () {
    function Human(firstName_val, lastName_val) {
        this.setName(firstName_val, lastName_val);
    }
    Human.prototype.setName = function (firstName_val, lastName_val) {
        this.firstName = firstName_val;
        this.lastName = lastName_val;
    };
    Human.prototype.getfullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Human;
}());
var Name = new Human('Adeel', 'Ahemd');
console.log('h', Name.getfullName());
//# sourceMappingURL=Classes.js.map