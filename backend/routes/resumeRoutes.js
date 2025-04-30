const express = require("express");
const router = express.Router();
const generatePDF = require("../templates/generatePDF");

router.post("/", async (req, res) => {
  try {
    const doc = generatePDF(req.body);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");

    doc.pipe(res);
    doc.end();
  } catch (error) {
    res.status(500).json({ error: "Failed to generate PDF" });
  }
});

module.exports = router;