const data = {
      expenseData: [
        {
          amount: 20,
          startDate: "2020-05-01T00:00:00.000Z",
        },
        {
          amount: 30,
          startDate: "2020-03-01T00:00:00.000Z",
        },
      ],
      revenueData: [
        {
          amount: 60,
          startDate: "2020-03-01T00:00:00.000Z",
        },
        {
          amount: 0,
          startDate: "2020-02-01T00:00:00.000Z",
        },
        {
          amount: 10,
          startDate: "2020-03-01T00:00:00.000Z",
        },
        {
          amount: 40,
          startDate: "2020-01-01T00:00:00.000Z",
        },
      ],
    };
    
    // Combine revenue and expense data
    const combinedData = [...data.revenueData, ...data.expenseData];
    
    // Initialize an object to store balance sheet month-wise
    const balanceSheet = {};
    
    // Process each entry in the combined data
    combinedData.forEach((entry) => {
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
    });
    
    // Sort the balance sheet by timestamp in ascending order
    const sortedBalanceSheet = Object.entries(balanceSheet).sort();
    
    // Print the balance sheet
    sortedBalanceSheet.forEach((entry) => {
      const monthYear = entry[0];
      const balance = entry[1];
      console.log(`${monthYear}: ${balance}`);
    });
    