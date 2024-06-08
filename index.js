const express = require("express");
const app = express();
const Port = 8000;

  const selectroute = require('./api/Select')
  app.use('/select',selectroute);

  const insertroute = require('./api/Insert');
  app.use('/insert',insertroute);

// app.get("/demo", function (req, res) {
//   client.query(isertqry, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.get("/insert", function (req, res) {
//   client.query(select, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       // console.log("inserted data");
//       res.send(result);
//     }
//   });
// });
// app.get("/update", function (req, res) {
//   const update_qry = "UPDATE cars SET color = 'red' WHERE brand = 'volvo'";
//   client.query(update_qry, (err, update_data) => {
//     // res.send("data update ");

//     client.query("SELECT * FROM cars WHERE year BETWEEN 1977 AND 2014", (err, all) => {
//       if (err) throw err;
//       res.send(all.rows);
//     });
//   });
// });
// app.get('/delete',(req,res)=>{
//   const delete_query = "DELETE FROM cars where year = '2014'";
//   client.query(delete_query,(err,qry_data)=>{
//     console.log("data record deleted");
//     // res.send(qry_data.rows)
//   });
//   client.query(select,(err,datas)=>{
//     res.send(datas.rows)
//   })
// })

app.listen(Port);
