const Application = require('./framework/application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const urlParser = require('./framework/parseUrl');

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParser);
app.use(urlParser(`http://localhost:${PORT}`));
app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));