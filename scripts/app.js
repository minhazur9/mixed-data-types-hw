// Data Types

// Light Switch would be a boolean
// Email would be a string
// Spaceship would be an object
// List of student names would be an array of strings
// Each having a location would be an array of objects 
// Each having a list of shows would be an array of objects containing another array

// const data = {
//     switchOn: false,
//     email: "minhazur9@gmail.com",
//     spaceship: {
//         hull: true,
//         laserBlaster: true,
//         tractorBeam: true,
//         warpDrive: true
//     },
//     students: [
//         {
//             name: "Min",
//             location: "US",
//             favShows: [
//                 "Dexter",
//                 "Gotham",
//                 "Brookyn Nine Nine"
//             ]
//         },

//         {
//             name: "William",
//             location: "US",
//             favShows: [
//                 "something",
//                 "something",
//                 "something"
//             ]
//         },

//         {
//             name: 'Katie',
//             location: "US",
//             favShows: [
//                 "something",
//                 "something",
//                 "something"
//             ]
//         },

//         {
//             name: 'Ron',
//             location: "US",
//             favShows: [
//                 "something",
//                 "something",
//                 "something"
//             ]
//         }
//     ]
// }

// console.log(data);

// Take it Easy

// rainbow = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'indigo',
//     'blue',
//     'violet',
// ]

// rainbow[5];

// const Min = {
//     favFood: "Steak",
//     hobby: "Video Games",
//     town: "Atlantic City",
//     dataType: "Number"
// };  

// Min.hobby;

// Crazy Object

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  console.log(crazyObject.larry.nicknames[1]);

  function findName(name) {
  for(const property in crazyObject) {
      if(property === "larry"){
          const larryObj = crazyObject[property];
          for(const larryProp in larryObj){
              if(larryProp === "characters"){
                  const larryChar = larryObj[larryProp];
                  for(let i = 0; i < larryChar.length; i++){
                      if(larryChar[i].name === name){
                          return larryChar[i];
                      }
                  }
              }
          }
          
      }
  }
}

  console.log(findName("funkhauser"));