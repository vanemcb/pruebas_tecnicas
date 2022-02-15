/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1)[0];
const fs = require("fs");

//Reading CSV file
const document = fs.readFileSync(args).toString()

//Creating array with each row
const arrayLines = document.split('\n')
arrayLines.shift()

//Creating array with each row data
const arrayData = arrayLines.map(row => row.split(","));

//Creating Product ID array without duplicates
let arrayProductId = arrayData.map(row2 => row2[1])
arrayProductId = [...new Set(arrayProductId)]

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
        generalDict[user].clicks = [...new Set(generalDict[user].clicks)]
      }
      if (item[3] == 'impression'){
        generalDict[user].visits.push(item[1])
        generalDict[user].visits = [...new Set(generalDict[user].visits)]
      }
    }
  }
}



console.log(generalDict)
