var input = document.querySelector('.input');
    var todos = document.querySelector('.todos');
    var empty = document.querySelector('.empty-todos');
    var options = document.querySelector('.options');
    var shu = document.querySelector('.shu');
    var all = document.querySelector('.all');
    var active = document.querySelector('.active');
    var completed = document.querySelector('.completed');
    var flag = false;
    input.onkeydown = function () {
        if (event.keyCode == 13) {
            if (input.value == '') {
                alert('内容不能为空')
                return false
            } else {
                this.flag = true
                empty.style.display = 'none'
                options.style.display = 'block'
                options.style.display = 'flex'
                var li = document.createElement('li');
                li.innerHTML = `<div class="lis"><input type="checkbox"  class="qh" /> <p class="vla">${input.value}</p></div> <span class="del">X</span>`;
                todos.appendChild(li);
                shu.innerHTML = todos.children.length;
                all.style.color = '#fff';
                all.style.backgroundColor = '#fe7345';
                input.value = '';
            }
        }
    }
    var Submit = document.querySelector('.Submit');
    Submit.onclick = function () {
        if (input.value == '') {
            alert('内容不能为空')
            return false
        } else {
            this.flag = true
            empty.style.display = 'none'
            options.style.display = 'block'
            options.style.display = 'flex'
            var li = document.createElement('li');
            li.innerHTML = `<div class="lis"><input type="checkbox" class="qh"> <p class="vla">${input.value}</p></div> <span class="del">X</span>`;
            todos.appendChild(li);
            input.value = '';
        }
    }
    todos.onclick = function (e) {
        if (e.target.className == 'del') {
            e.target.parentNode.remove()
        }
        if (todos.children.length == 0) {
            empty.style.display = 'block'
            options.style.display = 'none'
        }
        if (e.target.className == 'qh') {
            if (e.target.checked) {
                e.target.parentNode.style.textDecoration = 'line-through'
                e.target.parentNode.style.border = "0"
                
                e.target.parentNode.parentNode.style.backgroundColor = '#fe7345'
                e.target.parentNode.parentNode.style.color = '#fff'
                
                e.target.style.backgroundColor = '#fe7345'
                e.target.style.border = "0"
            } else {
                e.target.parentNode.style.textDecoration = 'none'
                e.target.parentNode.parentNode.style.backgroundColor = ''
                e.target.parentNode.parentNode.style.color = '#000'
            }
        }
    }
    var clear = document.querySelector('.clear');
    clear.onclick = function () {
        for (var i = 0; i < todos.children.length; i++) {
            if (todos.children[i].children[0].children[0].checked) {
                todos.removeChild(todos.children[i])
                i--
            }
        }
        if (todos.children.length == 0) {
            empty.style.display = 'block'
            options.style.display = 'none'
        }
    }
    all.onclick = function (e) {
        e.target.style.color = '#fff';
        e.target.style.backgroundColor = '#fe7345';
        active.style.color = ''
        active.style.backgroundColor = ''
        completed.style.color = ''
        completed.style.backgroundColor = ''
        for (var i = 0; i < todos.children.length; i++) {
            todos.children[i].style.display = 'flex'
        }
    }
    active.onclick = function (e) {
        all.style.color = ''
        all.style.backgroundColor = ''
        completed.style.color = ''
        completed.style.backgroundColor = ''
        e.target.style.color = '#fff'
        e.target.style.backgroundColor = '#fe7345'
        for (var i = 0; i < todos.children.length; i++) {
            if (todos.children[i].children[0].children[0].checked) {
                todos.children[i].style.display = 'none'
            } else {
                todos.children[i].style.display = 'flex'
            }
        }
    }
    completed.onclick = function (e) {
        all.style.color = ''
        all.style.backgroundColor = ''
        active.style.color = ''
        active.style.backgroundColor = ''
        e.target.style.color = '#fff'
        e.target.style.backgroundColor = '#fe7345'
        for (var i = 0; i < todos.children.length; i++) {
            if (todos.children[i].children[0].children[0].checked) {
                todos.children[i].style.display = 'flex'
            } else {
                todos.children[i].style.display = 'none'
            }
        }
    }