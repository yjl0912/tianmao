import Vue from "vue";
import {Button,Dialog, Message, MessageBox ,Form,FormItem,Input,Select,Option} from "element-ui";

Vue.use(Option)
Vue.use(Select)
Vue.use(Input)
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Button);
Vue.use(Dialog);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert