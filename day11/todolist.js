var input = document.querySelector('.input');
    var todo = document.querySelector('.todo');
    var bottom = document.querySelector('.bottom');
    var footers = document.querySelector('.footers');
    var Alllength = document.querySelector('.Alllength');
    var all = document.querySelector('.all');
    var active = document.querySelector('.active');
    var completed = document.querySelector('.completed');
    var add = document.querySelector('.add');
    var flag = false;
    //键盘回车事件
    input.onkeydown = function () {
        if (event.keyCode == 13) {
            if (input.value == '') {
                alert('请输入内容')
                return false
            } else {
                this.flag = true
                bottom.style.display = 'none'
                footers.style.display = 'block'
                footers.style.display = 'flex'
                var li = document.createElement('li');
                li.innerHTML = `
                <div class="lis">
                <div class="liss">
                <input type="checkbox" class="check-btn" name="" id="">
                <p class="comtent">${input.value}</p></div>
                
                <p class="del">×</p>

            </div>`;
                todo.appendChild(li);
                Alllength.innerHTML = todo.children.length;
                all.style.color = '#fff';
                all.style.backgroundColor = '#fe7345';
                input.value = '';
            }
        }
    }
    //点击事件
    add.onclick = function () {
        if (input.value == '') {
            alert('请输入内容')
            return false
        } else {
            this.flag = true
            bottom.style.display = 'none'
            footers.style.display = 'block'
            footers.style.display = 'flex'
            var li = document.createElement('li');
            li.innerHTML = `
            <div class="lis">
            <div class="liss">
            <input type="checkbox" class="check-btn" name="" id="">
            <p class="comtent">${input.value}</p></div>
            
            <p class="del">×</p>

        </div>`;
            todo.appendChild(li);
            input.value = '';
        }
    }
    //删除事件
    todo.onclick = function (e) {
        if (e.target.className == 'del') {
            e.target.parentNode.remove()
        }
        if (todo.children.length == 0) {
            bottom.style.display = 'block'
            footers.style.display = 'none'
        }
        // 切换状态
        if (e.target.className == 'check-btn') {
            if (e.target.checked) {
                e.target.parentNode.style.textDecoration =
                 'line-through'
                e.target.parentNode.style.border = "0"
                e.target.parentNode.parentNode.style.
                backgroundColor = '#fe7345'
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
    //选中删除  
    var clear = document.querySelector('.clear');
    clear.onclick = function () {
        for (var i = 0; i < todo.children.length; i++) {
            if (todo.children[i].children[0].children[0].checked) {
                todo.removeChild(todo.children[i])
                i--
            }
        }
        if (todo.children.length == 0) {
            bottom.style.display = 'block'
            footers.style.display = 'none'
        }
    }


    // 显示全部的
    all.onclick = function (e) {
        active.style.color = ''
        active.style.backgroundColor = ''
        completed.style.color = ''
        completed.style.backgroundColor = ''
        e.target.style.color = '#fff';
        e.target.style.backgroundColor = '#fe7345';
        for (var i = 0; i < todo.children.length; i++) {
            todo.children[i].style.display = 'flex'
        }
    }
    // 显示未选中的
    active.onclick = function (e) {
        completed.style.color = ''
        completed.style.backgroundColor = ''
        all.style.color = ''
        all.style.backgroundColor = ''
        e.target.style.color = '#fff'
        e.target.style.backgroundColor = '#fe7345'
        for (var i = 0; i < todo.children.length; i++) {
            if (todo.children[i].children[0].children[0].checked) {
                todo.children[i].style.display = 'none'
            } else {
                todo.children[i].style.display = 'flex'
            }
        }
    }
    // 显示选中的   
    completed.onclick = function (e) {
        active.style.color = ''
        active.style.backgroundColor = ''
        all.style.color = ''
        all.style.backgroundColor = ''
        e.target.style.color = '#fff'
        e.target.style.backgroundColor = '#fe7345'
        for (var i = 0; i < todo.children.length; i++) {
            if (todo.children[i].children[0].children[0].checked) {
                todo.children[i].style.display = 'flex'
            } else {
                todo.children[i].style.display = 'none'
            }
        }
    }