/*
 * 
 * Based on DB by Sabbir Ahmed for PROG2430
 * PROG 2070
 *
 * Joshua Arnott 
 * April 6th, 2021
 *
 */

var Search = {
    insert: function(options, callback){
        function txFunction(tx) {
            var sql = "INSERT INTO searches(sellerName, city, province, postCode, phoneNum, email, year, make, model, url) VALUES(?,?,?,?,?,?,?,?,?,?);";

            // step 3: execute query on tx object
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM searches WHERE id=?;";

            // step 3: execute query on tx object
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM searches;";
            // step 3: execute query on tx object
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: SelectAll transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};