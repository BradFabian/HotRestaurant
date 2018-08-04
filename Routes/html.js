app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  // Displays all characters
  app.get("/tables", function(req, res) {
    return res.json(tables);
  });
  