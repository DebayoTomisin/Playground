const fs = require("fs");

const people = ["naenae", "ferran", "torres", "movement"];

const ages = [12, 56, 67, 99];

const os = require("os");
console.log(os.platform(), os.homedir());

module.exports = {
  people,
  ages,
};

// the file system.

// this process is only efficient for small files and small applications.

// how to read a file: it takes two arguements, the file path and a callback function

fs.readFile("./blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// how to write into files. takes in three parameters: the file path, the text to be added and a callback function.

fs.writeFile("./blog1.txt", "this is a public service announcement!", () => {
  console.log("file has been wriitten!");
});

// how to work with directories

if (!fs.existsSync("./assets")) {
  // existsSync checks if the specified path or parameer exists
  fs.mkdir("./assets", (err) => {
    // mkdir create a directory
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    //rmdir removes a directory
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// how to delete files

if (fs.existsSync("./deleteme.txt")) {
  fs.unlink("./deleteme.txt", (err) => {
    // unlink deletes a file
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

// Streams and buffers
// fetches the data in buffers, bit by bit, depending when the buffer is filled

const readStream = fs.createReadStream("../../notes.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./writestream.txt");

readStream.pipe(writeStream);
