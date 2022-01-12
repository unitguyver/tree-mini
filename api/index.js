import appApi from "./modules/app";
import masterApi from "./modules/master";
import adminApi from "./modules/admin";
import teacherApi from "./modules/teacher";

export default {
  ...appApi,
  ...masterApi,
  ...adminApi,
  ...teacherApi
}