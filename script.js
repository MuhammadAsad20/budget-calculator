var set = document.getElementById('set')
var check = document.getElementById('check')
var main = document.getElementById('main')
var container = document.getElementById('container')
set.addEventListener("click", function () {
    let budget = document.getElementById('budget')
    let expense = document.getElementById('expense')
    var item = document.getElementById('item')
    var title = document.getElementById('title')
    var list = document.createElement("ul")
    var items = document.createElement("li")
    var edit = document.createElement("button")
    var del = document.createElement("button")
    var editbtn = document.createTextNode("edit")
    var delbtn = document.createTextNode("delete")
    var btn1 = edit.appendChild(editbtn)
    var btn2 = del.appendChild(delbtn)
    var fill = document.createTextNode(title.value);
    var add1 = items.appendChild(fill)
    add1 = items.appendChild(edit)
    add1 = items.appendChild(del)
    var add2 = list.appendChild(items)
    var add3 = item.appendChild(list)
    var add4 = container.appendChild(item)
    var add5 = main.appendChild(container)
    title.value = ""
    budget.value = ""
    expense.value = ""

})
check.addEventListener("click", function () {
    let budget = document.getElementById('budget').value
    let expense = document.getElementById('expense').value
    document.getElementById('totalBud').innerText = budget
    document.getElementById('totalexp').innerText = expense
    document.getElementById('balance').innerText = budget - expense
})