import db from "../index.js";
import seed from "./seed.js";
import data from "../data/index.js";


seed(data)
  .then(() => {
    console.log("Seed complete");
  })
  .catch((err) => {
    console.error("Seed failed:", err);
  })
  .finally(() => {
    db.end();
  });
