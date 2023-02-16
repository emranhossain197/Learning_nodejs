const fs = require("fs");

/******
 *
 * 1. Create user
 * 2. find user
 * 3. update user
 * 4. delete user
 *
 * **/

// user information
const user = {
  name: "Rahim",
  job: "student",
  birthOfDate: "10-12-2002",
  birthPlace: "Brahmanbaria",
  phone: "0191785000",
  country: "Bangladesh",
  clss: "Ten",
  subject: "Science",
  roll: 155,
};

// file location
const fileLocation = __dirname + "/.data/";

// create user
if (user.job === "student") {
  fs.readFile(`${fileLocation}${user.roll}.json`, (err, data) => {
    if (err) {
      fs.writeFile(
        `${fileLocation}${user.roll}.json`,
        JSON.stringify(user),
        (err) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log("user created successfuly!");
          }
        }
      );
    }else{
      console.log(`user name: ${user.name} and ${user.roll} already created. please login!`);
    }
  });
} else {
  console.log("This website for student just register other people not alway!");
}

// read user

fs.readFile(`${fileLocation}${user.roll}.json`, "utf8", (err, data)=>{
  if(err){
    console.log("user not valid!");
  }else{
    const student = JSON.parse(data);
    console.log(student);
  }
})


// update user

fs.open(`${fileLocation}${user.roll}.json`, "r+", (err, f) => {
  if (err) {
    console.log("user not valid!");
  } else {
    fs.writeFile(
      `${fileLocation}${user.roll}.json`,
      JSON.stringify(user),
      (err) => {
        if (err) {
          console.log("user not valid!");
        } else {
          console.log("user successfuly updated!");
          fs.readFile(
            `${fileLocation}${user.roll}.json`,
            "utf8",
            (err, data) => {
              if (err) {
                console.log(err.message);
              } else {
                console.log(JSON.parse(data));
              }
            }
          );
        }
      }
    );
    fs.close(f, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("file successfuly closed!");
      }
    });
  }
});


// user deleted 

fs.readFile(`${fileLocation}${user.roll}.json`, (err, data)=>{
  if(err){
    console.log("user not valid!");
  }else{
    fs.unlink(`${fileLocation}${user.roll}.json`, (err)=>{
      if (err) {
        console.log(err.message);
      } else {
        console.log("user successfuly deleted!");
      }
    })
  }
})