export function enoughAirtime(usage, airtime){
	//declare charges
  	let call = 1.88;
  	let data = 12;
  	let sms = 0.75;
  
  //declare counter variables
  	let total = 0;
  	let callCount = 0;
  	let smsCount = 0;
  	let dataCount = 0;
  
  	//split the string into an array
  	let usageArr = usage.split(",");
  	
  //iterate trhough the array
  	for(let i in usageArr){
      	//remove the spaces on the items in the array
    	let trimmed = usageArr[i].trim();
      	
      	//count number of calls made
      	if(trimmed.includes("call")){
        	callCount += 1;
          
         //count number of data bought
        }else if(trimmed.includes("data")){
        	dataCount +=1;
          
         //count number of SMSs sent
        }else if(trimmed.includes("sms")){
         	smsCount +=1 
		}
    }
  	//calculate the amount left
	let change = airtime - (callCount*call + dataCount*data + smsCount*sms);
  	//return change if there is any...
  	if(change > 0){
    	return "R"+change.toFixed(2);
    }else{
    	return "R0.00";
    }
}

console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50))