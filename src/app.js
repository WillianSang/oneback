const baseData = require("./database/conection");
const server = require("./server");
const port = 3000


async function contectionRun() {
  try {
    await baseData.authenticate()
    console.log("conection to dataBase success, server running...")

    server.listen(port, () => {
      console.log(`listen in port, ${port}`)
    })
  } 
  catch (error) {
    console.error("unable to connect to server")
  }
}

contectionRun()
