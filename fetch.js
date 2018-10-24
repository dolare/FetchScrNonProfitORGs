const request = require('request')
const parseString = require('xml2js').parseString

let nextOrgId = 355
let count = 0
let url = 'https://api.globalgiving.org/api/public/orgservice/all/organizations/active?api_key=a7ae4858-46cd-49ff-b361-04c25e03c9e9'
while (count < 1000) {
  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    parseString(body, function (err, result) {
      console.dir(result)
      count = count + result.organizations.organization.length
      nextOrgId = result.organizations.nextOrgId[0]
      url = `${url}&nextOrgId=${nextOrgId}`
      console.dir(count)
    })
    // console.log('body:', body); // Print the HTML for the Google homepage.
  })  
}


// 