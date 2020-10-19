const { Router } = require("express");
const pool = require("../dbConnect");
const router = Router();

router.get("/api/v1/products", async (req, res) => {
  try {
    const resDb = await pool.query("SELECT * FROM phones");
    res.json({
      status: "ok",
      data: resDb.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/v1/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const resDb = await pool.query("SELECT * FROM phones WHERE id=$1", [id]);

    res.json({
      status: "ok",
      data: resDb.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
