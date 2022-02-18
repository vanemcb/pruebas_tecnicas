/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`)


const name_file = process.argv.slice(-1)[0];
const fs = require("fs");

//Reading CSV file
const document = fs.readFileSync(name_file).toString()

//Creating array with each row
const arrayLines = document.split('\n')
arrayLines.shift()

//Creating array with each row data
const arrayData = arrayLines.map(row => row.split(","));

//Creating Product ID array without duplicates
let arrayProductId = arrayData.map(row2 => row2[1])
arrayProductId = [...new Set(arrayProductId)].sort()
arrayProductId.pop()

//Creating User array without duplicates
let arrayUser = arrayData.map(row2 => row2[0])
arrayUser = [...new Set(arrayUser)]
arrayUser.pop()

//Creating users dictionary
let generalDict = {}
for (let user of arrayUser) {
  generalDict[user] = {}
  generalDict[user].clicks = []
  generalDict[user].visits = []

  for (let item of arrayData) {
    if (item[0] == user){
      if (item[3] == 'click'){
        generalDict[user].clicks.push(item[1])
      }
      if (item[3] == 'impression'){
        generalDict[user].visits.push(item[1])
      }
    }
  }
}

//Deleting products ID duplicates
for (let user2 in generalDict){
  generalDict[user2].clicks = [...new Set(generalDict[user2].clicks)].sort()
  generalDict[user2].visits = [...new Set(generalDict[user2].visits)].sort()
}

//Creating final array to convert CSV file
let finalArray = []
for (let product of arrayProductId) {
  rowArray = [product, 0, 0, 0]

  for (let user3 in generalDict){
    for (click of generalDict[user3].clicks){
      if (click == product){
        rowArray[1] += 1
      }
    }
    for (visit of generalDict[user3].visits){
      if (visit == product){
        rowArray[2] += 1
      }
    }
  }
  rowArray[3] = (rowArray[1] / rowArray[2]).toFixed(4)
  finalArray.push(rowArray)
}

//Convert array to string
let csvContent = finalArray.map(item => item.join(",")).join("\n");
const headers = 'productId,clicks,impressions,ctr\n'

//Creating CVS file
fs.appendFile('output.csv', headers + csvContent, function (err) {
  if (err) throw err;
  console.log('output.csv file created');
});
