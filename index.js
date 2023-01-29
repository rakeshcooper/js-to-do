        // add checked



        // close elements
        let nodeList = document.getElementsByTagName('li');
        for(let i = 0; i < nodeList.length; i++){
            let span = document.createElement('span')
            let x = document.createTextNode("\u00D7");
            span.className = 'close';
            span.appendChild(x);
            nodeList[i].appendChild(span);
        }

       // add elments in todos
        function addHandler(){
            let input = document.getElementById('todos')
            let inputValue = input.value;
            let data = document.createTextNode(inputValue);
            let list = document.createElement('li');
            list.appendChild(data);
            document.getElementById('ul').appendChild(list);
            document.getElementById('todos').value = '';


            
            let span = document.createElement('span')
            let x = document.createTextNode("\u00D7");
            span.className = 'close';
            span.appendChild(x);
            list.appendChild(span);
        }