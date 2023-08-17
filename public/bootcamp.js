document.addEventListener('alpine:init', () => {
    Alpine.data('BootcampAPi', function () {
        return {
            sentence: '',
            typedSentence: '',
            call :2.75,
            sms : 0.65,

            user_sms_price: '',
            sms_price: '',
            user_call_price:'',
            call_price:'',
            billTotal: 0,
            type: '',
            enteredPrice: '',
            typedBill: '',
            amount: '',

            phonebill: 0,
            enteredBill: '',

            TotalDff: '',
            usageEntry: '',
            usage: '',
            amountEntered: '',
            airtime: '',
            airtimeCalc() {
                axios.get(`/api/enough?usage=${this.usage}&available=${this.airtime}`)
                    .then(result => {
                        console.log(result.data)
                        this.TotalDff = result.data.result
                    })
            },
            totalPhonebill() {
                axios.get(`/api/phonebill/prices?type=${this.type}&price=${this.amount}`)
                    .then(result => {
                        console.log(result.data)
                        //this.billTotal = result.data.bill
                    })
            },
            calcBill() {
                axios.get(`/api/phonebill/total?bill=${this.phonebill}`)
                    .then(result => {
                        console.log(result.data)
                        this.billTotal = result.data.bill
                    })
            },
            game() {
                axios.get(`/api/word_game?sentence=${this.sentence}`)
                    .then(result => {
                        console.log(result.data.longestWord)
                        this.sentence = result.data
                    })
            },
            totPhoneBill(bill){
                let call = this.call_price;
                let sms = this.sms_price;
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

        }

    })
})