import { config } from './config/config';
import { auth } from './controllers/auth';

config.app.use(auth);

config.app.listen(config.port, ()=>{
    console.log(`Server is running at port: ${config.port}`);
});