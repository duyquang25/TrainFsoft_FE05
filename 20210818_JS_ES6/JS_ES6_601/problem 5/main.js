// function upper(strings, ...values) {}

// var name = 'Nguyen Van A',
// account = 'ANV',
// classname = 'Fresher FrontEnd';

// console.log(
// `Hello ____ (@____), welcome to the ____!!!` ===
// 'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
//  );


function upper(strings, ...values) {
    // console.log(strings)
    // console.log(values)

    let str = '';
    strings.forEach((string, i) => {
       
        values[i] = values[i] === undefined ? "" : values[i].toUpperCase()
        
        str += string + values[i];

        // console.log( string)
        // console.log( values[i])
    });

    // console.log(str)
    return str;
}

var name = 'Nguyen Van A',
account = 'ANV',
classname = 'Fresher FrontEnd';


console.log(
upper`Hello ${name} (@${account}), welcome to the ${classname}!!!` ===
'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
);


// var html = upper`Hello ${name} (@${account}), welcome to the ${classname}!!!`;
// console.log(html);