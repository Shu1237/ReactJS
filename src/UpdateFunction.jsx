// updater function =A function passed as an argument to  setSate() usally
    //ex.setYear(year+1)
    // Allow for safe updates based on the previous state
    // Used with multiple state updates and asynchrnous functions
    // Good practice to use updater functions


    
    // const incrementAge =()=>{
    //     setAge (age+1)
    //     setAge (age+1)
    //     setAge (age+1)
    // };
    // => use current value of age 
    //  =>Vì React không cập nhật state 
    //  ngay lập tức mà theo cách thức bất đồng bộ (asynchronous), 

    //VD: Nếu age ban đầu là 5, 
    // sau khi chạy đoạn mã này, giá trị của age chỉ tăng lên 6, không phải 8.




    const incrementAge =()=>{
        setAge (a=> a+1)
        setAge (a=> a+1)
        setAge (a=> a+1)
    };
    // => setAge được gọi với hàm callback a => a + 1.
    //  Hàm callback này nhận giá trị mới nhất của age sau mỗi lần cập nhật.
    //=>giá trị của age sẽ được cập nhật 
    // dựa trên giá trị mới nhất của nó sau mỗi lần tăng

   