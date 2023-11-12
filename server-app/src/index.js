const app = require("./app")

function init() {
  app.listen(app.get("port"), () => console.log(`Server running on port ${app.get("port")}`))
}

init()