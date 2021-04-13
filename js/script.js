const searchwrapper = document.querySelector('.search-box');
const input_box = document.querySelector('input');
const sugg_box = document.querySelector('.autocom-box');
const icon = document.querySelector('.icon');


input_box.onkeyup = (e) => {
        //console.log(e.target.value);
        let userdata = e.target.value;
        let array = [];
        if (userdata) {
            array = suggestions.filter((data) => {
                return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());


            });
            array = array.map((data) => {
                return data = '<li> ' + data + '</li>';
            })
            console.log(array);
            searchwrapper.classList.add('active');
            showsugget(array);
            let allsugg = sugg_box.querySelectorAll('li');
            for (let i = 0; i < allsugg.length; i++) {
                //my code 
                // allsugg[i].onclick = (e) => {
                //     input_box.value = allsugg[i].innerText;
                // }

                //the code in tutorial
                allsugg[i].setAttribute("onclick", "select(this)");
            }
        } else {
            searchwrapper.classList.remove('active');

        }



    }
    // icon.onclick = (e) => {
    //     searchOnGoogle();
    // }

icon.setAttribute('onclick', 'searchOnGoogle();');

function searchOnGoogle() {
    if (input_box.value) {
        window.open('http://google.com/search?q=' + input_box.value, '_self');
    }
}

function select(element) {
    let selectedData = element.textContent;
    console.log(selectedData);
    input_box.value = selectedData;
    searchwrapper.classList.remove('active');

}

function showsugget(list) {
    let datalist;
    if (!list.length) {
        datalist = '<li> ' + input_box.value + '</li>';
    } else {
        datalist = list.join('');
    }
    sugg_box.innerHTML = datalist;
}