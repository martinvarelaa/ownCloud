'use strict'

const port = 3000;
const routes = require('./routes_module/routesModule');

routes.listen(port, () => console.log(`Puerto:  ${port}!`));
