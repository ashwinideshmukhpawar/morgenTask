// Import stylesheets
import './style.css';

// Write Javascript code!
let acctData = [
    {
    "acctNum": "AAA - 1234",
    "user": "Alice"
    },
    {
    "acctNum": "AAA - 5231",
    "user": "Bob"
    },
    {
    "acctNum": "AAA - 9921",
    "user": "Alice"
    },
    {
    "acctNum": "AAA - 8191",
    "user": "Alice"
    }
   ];

   let balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
   };

   function getAccountNumbers(user, sortBy, sortDirection){
       let accountnumbers = acctData.slice();
       let accountNumberList = [];
       if(accountnumbers.length>0){
            for(let i=0;i<accountnumbers.length;i++)
            {
                accountnumbers[i]['balance']= balance[accountnumbers[i].acctNum];  
            }
        }
        if(user){
            accountnumbers = accountnumbers.filter((userDetail) => {
                if(userDetail.user == user){
                    return true;
                }
                
            });           
        }
        if(sortBy){
            accountnumbers = accountnumbers.sort((a,b) =>{
                let firstValue = a[sortBy];
                let secondValue=b[sortBy];
                if(firstValue > secondValue){
                    return 1;
                }else if(firstValue == secondValue){
                    return 0;
                }else{
                    return -1;
                }               
            })
            if(sortDirection == "desc"){
                accountnumbers.reverse();
            }
        }
        
        if(accountnumbers.length > 0 ){
            console.log(accountnumbers);
        }else{
            console.log("Enterd Account user is not available");
        }
        let selectcecdAccocuntDetails = accountnumbers;
       /* let selectcecdAccocunt = accountNumberList;
        if(selectcecdAccocunt.length > 0)
        {
            console.log("Accoucnt Numbers:" + selectcecdAccocunt);
        }else{
            console.log(user + " Account user is not available");
        }*/
       
        return accountnumbers;
   }
   getAccountNumbers("Bob");
   getAccountNumbers("Charlie");
   getAccountNumbers('', "acctNum");
   var datap = getAccountNumbers("Alice", 'balance', "desc");
   datap.forEach(element => {
    console.log("return data :" + element.acctNum)
   });
   