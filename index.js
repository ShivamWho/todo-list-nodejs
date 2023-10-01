import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let works = [];
let tasks = [];
const options = { weekday: "long", month: "long", day: "numeric" };
const date = new Date().toLocaleDateString(undefined, options);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { date, tasks });
});

app.post("/", (req, res) => {
  let task = req.body.task;
  tasks.unshift(task);
  res.render("index", { date, tasks });
});

app.get("/work", (req, res) => {
  res.render("work",{works});
});

app.post("/work",(req,res)=>{
    let work = req.body.work;
    works.unshift(work);
    res.render("work",{works})
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
