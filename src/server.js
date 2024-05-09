import Hapi from "@hapi/hapi";
import routes from "./routes.js";

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 9000,
    //  Kriteria 1 : Aplikasi menggunakan port 9000
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  // config route
  server.route(routes);
  // start hapi server
  await server.start();
  // listen hapi server
  console.log(`Server running at: ${server.info.uri}`);
};

init();
