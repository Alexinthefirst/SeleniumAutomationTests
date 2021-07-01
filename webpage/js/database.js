/*
 *
 * Based on DB by Sabbir Ahmed for PROG2430
 * PROG 2070
 *
 * Joshua Arnott 
 * April 6th, 2021
 *
 */
 
var db;

//General purpose errorhandler
function errorHandler(error) {
    console.error("SQL Error: " + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "CarDB";
        var version = "1.0";
        var displayName = "CarDB";
        var dbSize = 2 * 1024 * 1024;

        function dbCreate() {
            console.info("Success: Database created successfully");
        }

        //step 1
        db = openDatabase(shortName, version, displayName, dbSize, dbCreate);

    },
    createTables: function () {
        // step 2: define the callback functions
        function txFunction(tx) {
            var sql = "CREATE TABLE IF NOT EXISTS searches(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "sellerName  VARCHAR(20) NOT NULL," +
                "city VARCHAR(20)," +
                "province VARCHAR(20)," +
                "postCode VARCHAR(20)," +
                "phoneNum VARCHAR(20)," +
                "email VARCHAR(20)," +
                "year VARCHAR(4)," +
                "make VARCHAR(30)," +
                "model VARCHAR(30)," +
                "url VARCHAR(100) NOT NULL);";

            var options = [];

            function successCallback() {
                console.info("Success: table creation successful");
            }

            // step 3: execute query on tx object
            tx.executeSql(sql, options, successCallback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: create table transaction successful");
        }

        // step 1: start transaction on db
        db.transaction(txFunction, errorHandler, successTransaction);
        //=====================================================================

    },

    dropTables: function () {
        // step 2: define the callback functions
        function txFunction(tx) {
            var sql = "DROP TABLE IF EXISTS searches;";

            var options = [];

            function successCallback() {
                console.info("Success: table dropped successful");
            }

            // step 3: execute query on tx object
            tx.executeSql(sql, options, successCallback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: drop table transaction successful");
        }

        // step 1: start transaction on db
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};




