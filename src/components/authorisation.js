import csvFilePath from '../data/users.csv';
import Papa from "papaparse/papaparse.min";
import passwordHash from "password-hash";
import {toCSV} from "react-csv/src/core";

export function authorisation(data, username, password) {
    let pass = false;
    data.forEach(item => {
        if (username === item.name || username === item.email) {
            if (passwordHash.verify(password, item.password)) {
                pass = true;
            }
        }
    });
    return pass;
}

export function getLoginData() {
    try {
        if (csvFilePath) {
            return new Promise(function (resolve, reject) {
                Papa.parse(csvFilePath, {
                    header: true,
                    download: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        resolve({result: results.data})
                    }
                });
            });
        }
    } catch (err) {
        console.log(err);
    }
}

export function registration(data, username, password) {
    let object = {};
    object.name = username;
    object.email = username;
    object.password = passwordHash.generate(password);

    if(!data.some( array => array.name === username)) {
        data.push(object);

        let headers = [
            { label: "name", key: "name" },
            { label: "email", key: "email" },
            { label: "password", key: "password" }
        ];

        let blob = new Blob([toCSV(data,headers,",","")]);

        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob, {type: "text/csv"});
        a.download = "users.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        return true;
    } else {
       return false;
    }


}