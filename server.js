// =======================
//     DEPENDENCIES
// =======================
const express = require('express');
const budgets = require('./models/budget');
const bodyParser = require('body-parser');

const app = express();
// -- packages


// -- database

// -- config
const port = 3000;
// =======================
//     MIDDLEWARE
// =======================
// static files
app.use(express.static('public'));

app.use((req, res, next) => {
    next();
  });

  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.urlencoded({ extended: false }));
  // =======================
//       ROUTES
// =======================
// get index

let bankAccount = 0;
function update() {
    bankAccount = 0;
    
for(let i = 0; i < budgets.length; i++) {
    bankAccount = bankAccount + Number(budgets[i].amount)
}
   


}
app.get('/budgets',  (req, res) => {
    update()
  nder('index.ejs', { 
        budgets,
    bankAccount,   
})
})

///POST///
app.post('/budgets', (req, res) => {
    budgets.push(req.body) 

    res.redirect('/budgets')
})
// get new
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
});


   




//get show
 app.get('/budgets/:idOfBudgetArray', (req, res) => {
     res.render('show.ejs', {
         budgets: budgets[req.params.idOfBudgetArray]
     })
 })

// =======================
//       LISTENER
// =======================
app.listen(port)
