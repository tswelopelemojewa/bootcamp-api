export function totalPhoneBill(bill){
    let call = 2.75;
    let sms = 0.65;
    let callCount = 0;
    let smsCount = 0;
  
    let billArr = bill.split(",");
    
    //loop through the new array containing the calls adnd SMSs
    for(let i in billArr){
      let trimmed = billArr[i].trim();
      //count number of calls in the list
        if(trimmed.includes("call")){
          callCount += 1;
        //count the number od SMSs in the list
      }else if(trimmed.includes("sms")){
        smsCount += 1;
      }
    }
    
    //add the total cost of both calls and SMSs
    let total = callCount*call + smsCount*sms;
    //use toFixed method to print to 2 decimal places
    return "R"+total.toFixed(2);
  }
  console.log(totalPhoneBill('call, sms, call, sms, sms'))