import app from './modules/app';
import master from './modules/master';
import admin from './modules/admin';
import teacher from './modules/teacher';

function setApi(apis, name){
  return Object.entries(apis).reduce((obj, [key, fn]) => {
    const apiName = `/fake/${name}/${key}`;
    obj[apiName] = fn;
    return obj;
  }, {})
}

export default {
  ...setApi(app, 'app'),
  ...setApi(master, 'master'),
  ...setApi(admin, 'admin'),
  ...setApi(teacher, 'teacher')
}