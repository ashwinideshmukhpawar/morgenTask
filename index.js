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
       let accountnumbers = [...acctData];
       let accountNumberList = [];
       if(accountnumbers.length>0){
            for(let i=0;i<accountnumbers.length;i++)
            {
                accountnumbers[i]['balance']= balance[accountnumbers[i].acctNum];  
            }
        }
        if(user){ //fliter the account number as per User name
            accountnumbers = accountnumbers.filter((userDetail) => {
                if(userDetail.user == user){
                    return true;
                }
                
            });           
        }

        //Sort the account number as per Account Number or Balance
        if(sortBy == "acctNum" || sortBy == "balance"){ 
            accountnumbers = accountnumbers.sort((a,b) =>{
                let firstValue = a[sortBy];
                let secondValue=b[sortBy];
                // By default sorting in ascending order
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
        
        let selectcecdAccocuntDetails = [];
        accountnumbers.forEach(element => {
          selectcecdAccocuntDetails.push(element.acctNum);          
        });
         console.log(selectcecdAccocuntDetails);
       
        return selectcecdAccocuntDetails;
       
        
   }
   console.log(" -------- filtered by Bob--------");
   getAccountNumbers("Bob");
  console.log(" -------- filtered by Charlie--------");
   getAccountNumbers("Charlie");
   console.log(" -------- Sort by acctNum--------");
   getAccountNumbers('', "acctNum");
   console.log(" -------- filtered by Alice; sorted by balance Acending order--------");
   getAccountNumbers("Alice", 'balance');
   
   