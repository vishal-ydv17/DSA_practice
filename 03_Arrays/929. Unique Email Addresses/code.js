/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    let filteredEmail= new Set();

    for(let mail of emails){

        let part= mail.split('@');//[name, domain]

        let emailName= part[0];
        let emailDomain= part[1];
        //OR
        // let [emailName, emailDomain]= mail.split('@');

        let process_emailName= emailName.split('+')[0].replace(/\./g, '');
        //[0] means it takes 0th element from the split and Without backslash: .means "any single character" and With backslash: \. means "a literal dot character"

        let finalEmail= process_emailName + '@' + emailDomain;

        filteredEmail.add(finalEmail);//.add() used in set only
    }
    return filteredEmail.size;//.size() for set
};
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));//2