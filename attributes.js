var zones = [
    'all',    //0
    'zone1',        //1
    'zone2',        //2
    'zone3',        //3
    'zone4',        //4
    'zone5',        //5
    'zone6',        //6
    'zone7',        //7
    'zone8',        //8
    'zone9',        //9
    'zone10',       //10
];

for(var i=0; i<zones.length; i++){
    $('#zoneSelect').append('<option value="'+[i]+'">'+zones[i]+'</option>');
}

var colors = [
    'all',                      //0
    'yellow',                   //1 
    'orange',                   //2
    'brown',                    //3
    'dark red / scarlet /red',  //4
    'pink / rose / salmon',     //5
    'purple',                   //6
    'lavender',                 //7
    'blue',                     //8
    'green',                    //9
    'cream / white',            //10
    'mix'                       //11
];

for(var i=0; i<colors.length; i++){
    $('#colorSelect').append('<option value="'+[i]+'">'+colors[i]+'</option>');
}

var cycle = [
    'all',                          //0
    'annual',                       //1
    'perennial',                    //2
    'biennial',                     //3
    'mix of annual and perennial'   //4
];

for(var i=0; i<cycle.length; i++){
    $('#cycleSelect').append('<option value="'+[i]+'">'+cycle[i]+'</option>');
}

var sunshade = [
    'all',                  //0
    'full sun',             //1
    '1/2 sun, 1/2 shade',   //2
    'full shade'            //3
];

for(var i=0; i<sunshade.length; i++){
    $('#sunshadeSelect').append('<option value="'+[i]+'">'+sunshade[i]+'</option>');
}

var yardheight = [
    'all',          //0
    'max 4in',      //1
    'max 10in',     //2
    'max 30in',     //3
    'max 60in',     //4
    '8ft +'         //5
];

for(var i=0; i<yardheight.length; i++){
    $('#yardHeightSelect').append('<option value="'+[i]+'">'+yardheight[i]+'</option>');
}

var planttime = [
    'all',              //0
    'early spring',     //1
    'spring',           //2
    'late spring',      //3
    'early summer',     //4
    'summer',           //5
    'late summer',      //6
    'early fall',       //7
    'fall',             //8
    'late fall' ,       //9
    'winter'            //10
];

for(var i=0; i<planttime.length; i++){
    $('#planttimeSelect').append('<option value="'+[i]+'">'+planttime[i]+'</option>');
}

var bloomtime = [
    'all',              //0
    'early spring',     //1
    'spring',           //2
    'late spring',      //3
    'early summer',     //4
    'summer',           //5
    'late summer',      //6
    'early fall',       //7
    'fall',             //8
    'late fall',        //9
    'winter'            //10
];

for(var i=0; i<bloomtime.length; i++){
    $('#bloomtimeSelect').append('<option value="'+[i]+'">'+bloomtime[i]+'</option>');
}

var solutions = [
    {'name': 'Less Mowing', 'code': '&#129496;'},                    //0
    {'name': 'Deer resistant ', 'code': '&#128007;'},                //1    
    {'name': 'Rabbit Resistant', 'code': '&#129420;'},               //2
    {'name': 'Shade tolerant', 'code': '&#127794;'},                 //3
    {'name': 'Drought Tolerant', 'code': '&#127964;'},               //4
    {'name': 'Swamp Tolerant', 'code': '&#128010;'},                 //5
    {'name': 'Erosion Control', 'code': '&#9968;'},                  //6
    {'name': 'More Privacy', 'code': '&#127969;'},                   //7
];

for(var i=0; i<solutions.length; i++){
    $('#solutionsSelect').append('<option value="'+[i]+'">'+solutions[i].name+' '+solutions[i].code+'</option>');
}

var doinggood = [
    {'name': 'attract birds', 'code': '&#128038;'},                 //0
    {'name': 'bee friendly', 'code': '&#128029;'},                  //1
    {'name': 'attracts butterflies', 'code': '&#129419;'},          //2
    {'name': 'extended bloom time', 'code': '&#9201;'},             //3
    {'name': 'good for cut flowers', 'code': '&#127799;'},          //4
    {'name': 'attracts hummingbirds', 'code': '&#128330;'},         //5
    {'name': 'native', 'code': '&#127758;'},                        //6
];

for(var i=0; i<doinggood.length; i++){
    $('#goodSelect').append('<option value="'+[i]+'">'+doinggood[i].name+' '+doinggood[i].code+'</option>');
}
