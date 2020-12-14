function tableFromJson() {       	
		
        var transactions = [
            {
			'OriginalTraceAuditNo': null,
			'AccountNumber': '123456789',
			'TransactionType': 'Debit',
			'TransactionDate': '2020-08-28T03:36:33',
			'BusinessDate': '2020-08-28T03:36:33',
			'AvailableBalance': 400.00,
			'Amount': 12.08,
			'Description': 'Other: POS Transaction',
			'Billed': false,
			'MerchantName': 'Good Buy',
            'MerchantId': 'GbLV-01'
            },
        	{
			'OriginalTraceAuditNo': null,
			'AccountNumber': '123456789',
			'TransactionType': 'Debit',
			'TransactionDate': '2020-08-28T03:50:01',
			'BusinessDate': '2020-08-28T03:50:01',
			'AvailableBalance': 400.00,
			'Amount': 129.74,
			'Description': 'Other: POS Transaction',
			'Billed': false,
			'MerchantName': 'Wally World',
			'MerchantId': 'WWV-000-1220'
			},
    		{
			'OriginalTraceAuditNo': null,
			'AccountNumber': '123456789',
			'TransactionType': 'Debit',
			'TransactionDate': '2020-08-28T06:43:12',
			'BusinessDate': '2020-08-28T06:43:12',
			'AvailableBalance': 400.00,
			'Amount': 8.08,
			'Description': 'Other: POS Transaction',
			'Billed': true,
			'MerchantName': 'Quickly Gas Stop',
			'MerchantId': 'QGS-01'
			}
        ]       
        
       
        var col = ['MerchantName', 'Description', 'TransactionType', 'TransactionDate', 'Billed', 'Amount', 'AvailableBalance'];
        
   		var startingBalance = 400;
        document.getElementById("sb").innerHTML = startingBalance;        
       
        
        for (var i = 0; i < transactions.length; i++) {
           for (var key in transactions[7]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }          
            
           startingBalance = startingBalance - transactions[i].Amount;
           transactions[i].AvailableBalance = Math.round(startingBalance*100) / 100;           
        		//console.log(startingBalance);
        
           if(transactions[i].Billed == false){
                transactions[i].Billed = 'Pending';       
            }
            else if(transactions[i].Billed == !false){
                transactions[i].Billed = 'Debited'
            }

        }
        
         var endingBalance = startingBalance;
         document.getElementById("eb").innerHTML = Math.round(endingBalance*100) / 100;
        // console.log(endingBalance);
        
        var table = document.createElement("table");
        
        var tr = table.insertRow(-1);                   

       for (var i = 0; i < col.length; i++) {
           var th = document.createElement("th");      
            th.innerHTML = col[i];
           tr.appendChild(th);
        }

        
        for (var i = 0; i < transactions.length; i++) {
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = transactions[i][col[j]];                
            }
        } 
        

        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        
      }
