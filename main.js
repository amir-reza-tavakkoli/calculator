function getInputValue(string) {
    var inputVal = document.getElementById("field").value;
    setInputValue("field", string);
}
function setInputValue(input_id, val) {
    let oldValue = document.getElementById(input_id).getAttribute('value');
    document.getElementById(input_id).setAttribute('value', `${oldValue}${val}`);
}
function clearAll(input_id) {
    document.getElementById(input_id).setAttribute('value', "");
}
function calculateAll() {
    let input_id = "result";
    var inputVal = document.getElementById("field").value;
    let evaluated = eval(inputVal);
    if (evaluated !== undefined) document.getElementById(input_id).setAttribute('value', evaluated);

}