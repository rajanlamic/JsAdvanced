/**
 * Created by kalpana on 04/05/17.
 */

function init() {

    var mainNavList = document.querySelectorAll(".mainNav li");

    var _location = [];
    var _movingRight = false;


    mainNavList.forEach(function(item, ind) {

        item.addEventListener('mousemove', function(e) {


            /*
             document.getElementById('sub_home').classList.add('hidden');
             document.getElementById('sub_contact').classList.add('hidden');
             document.getElementById('sub_about').classList.add('hidden');
             document.getElementById('sub_further').classList.add('hidden');
             document.getElementById('sub_involve').classList.add('hidden');
             document.getElementById('sub_getus').classList.add('hidden');
             */

            var menuId = item.id;
            var subMenuElm = document.getElementById('sub_' + menuId);


            if(!_isMovingRight(e, true, menuId) ) {
                item.style.background = 'yellow';
                subMenuElm.classList.remove('hidden');
            }


            e.stopPropagation();


        });

    });



    function _isMovingRight(e, log, id) {


        var previousLocation;
        var currentLocation;

        if(_location.length === 0) {
            _location.push({x: e.clientX, y: e.clientY});
            _location.push({x: e.clientX, y: e.clientY});
            return false;
        }

        _location.push({x: e.clientX, y: e.clientY});

        if(_location.length > 2) {
            _location.shift();
        }

        previousLocation = _location[0];
        currentLocation = _location[1];

        if(log) {
            console.log('previousLocation => ' + previousLocation.x + ' ' + previousLocation.y  + ' currentLocation => ' + currentLocation.x + ' ' + currentLocation.y + ' id => ' + id);
            //console.log('currentLocation', currentLocation);
        }

        var movingRight = currentLocation.x > previousLocation.x;
        var movingVertically = (currentLocation.x == previousLocation.x) && (currentLocation.y != previousLocation.y);
        var idleState = (currentLocation.x == previousLocation.x) && (currentLocation.y == previousLocation.y);

        /*
        if(movingVertically) {
            return false;
        } else if (movingRight) {
            return true;
        }
        */

        //var movingRight = currentLocation.x > previousLocation.x && currentLocation.y != previousLocation.y;


        //if ((movingRight || idleState) && (!movingVertically)) {
        //    return true;
        //}


        if ((movingRight)) {
            _movingRight = true;
            return true;
        }

        return false;
    }

    //mainNav.addEventListener('mouseover', function(e) {
    //    console.log(this);
    //});


}


window.onload = init;


/**
 *
 * working
 *
 *
 *
 *
 * function _isMovingRight(e, log, id) {


        var previousLocation;
        var currentLocation;

        if(_location.length === 0) {
            _location.push({x: e.clientX, y: e.clientY});
            return false;
        }

        _location.push({x: e.clientX, y: e.clientY});

        if(_location.length > 2) {
            _location.shift();
        }

        previousLocation = _location[0];
        currentLocation = _location[1];

        if(log) {
            console.log('previousLocation => ' + previousLocation.x + ' ' + previousLocation.y  + ' currentLocation => ' + currentLocation.x + ' ' + currentLocation.y + ' id => ' + id);
            //console.log('currentLocation', currentLocation);
        }

        var movingRight = currentLocation.x > previousLocation.x;
        var movingVertically = (currentLocation.x == previousLocation.x) && (currentLocation.x != previousLocation.x);
        var idleState = (currentLocation.x == previousLocation.x) && (currentLocation.y == previousLocation.y);


        //var movingRight = currentLocation.x > previousLocation.x && currentLocation.y != previousLocation.y;

        if (movingRight) {
            return true;
        }

        return false;
        }
 *
 *
 **/