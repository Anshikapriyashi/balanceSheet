const data = {
      expenseData: [
        {
          amount: 50,
          startDate: "2021-01-01T00:00:00.000Z",
        },
        {
          amount: 20,
          startDate: "2021-02-01T00:00:00.000Z",
        },
        {
          amount: 30,
          startDate: "2021-03-01T00:00:00.000Z",
        },
      ],
      revenueData: [
        {
          amount: 60,
          startDate: "2021-02-01T00:00:00.000Z",
        },
      ],
    };
    
    // Combine revenue and expense data
    const combinedData = data.revenueData.concat(data.expenseData);
    
    // Initialize an object to store balance sheet month-wise
    const balanceSheet = {};
    
    // Process each entry in the combined data
    for (const entry of combinedData) {
      const timestamp = entry.startDate;
      const monthYear = new Date(timestamp).toISOString().slice(0, 7);
    
      const amount = entry.amount;
    
      // Check if it is a revenue or expense entry
      let revenue, expense;
      if (data.revenueData.includes(entry)) {
        // Calculate the total revenue for the month
        revenue = amount;
        expense = 0;
      } else {
        // Calculate the total expense for the month
        revenue = 0;
        expense = amount;
      }
    
      // Calculate the balance for the month
      const balance = revenue - expense;
    
      // Add the balance to the balance sheet object
      if (balanceSheet[monthYear]) {
        balanceSheet[monthYear] += balance;
      } else {
        balanceSheet[monthYear] = balance;
      }
    }
    
    // Convert the balance sheet object to an array of entries
    const balanceSheetEntries = Object.entries(balanceSheet);
    
    // Sort the balance sheet by timestamp in ascending order
    const sortedBalanceSheet = balanceSheetEntries.sort((a, b) => a[0].localeCompare(b[0]));
    
    // Print the balance sheet
    for (const entry of sortedBalanceSheet) {
      const monthYear = entry[0];
      const balance = entry[1];
      console.log(`${monthYear}: ${balance}`);
    }
    