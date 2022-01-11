import app from './modules/app';

function setApi(apis, name){
  return Object.entries(apis).reduce((obj, [key, fn]) => {
    const apiName = `/fake/${name}/${key}`;
    obj[apiName] = fn;
    return obj;
  }, {})
}

export default {
  ...setApi(app, 'app')
}