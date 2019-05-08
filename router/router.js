import Vue from "vue";
import VueRouter from "vue-router";
import yhglSection from "../component-proj/yhgl-vue/section.vue";
import addUserModal from "../component-proj/yhgl-vue/add-user-modal.vue";
import qxfpSection from "../component-proj/qxfp-vue/section.vue";
import addRoleModal from "../component-proj/qxfp-vue/add-role-modal.vue";
Vue.use(VueRouter);
const routes = [
	{
		path: "/yhgl",
		name: "yhgl",
		components: {
			section: yhglSection
		},
		children: [
			{
				path: "adduser",
				name: "adduser",
				components: {
					modal: addUserModal
				}
			}
		]
	},
	{
		path: "/qxfp",
		name: "qxfp",
		components: {
			section: qxfpSection
		},
		children: [
			{
				path: "addrole",
				name: "addrole",
				components: {
					modal: addRoleModal
				}
			}
		]
	}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
	routes // (缩写) 相当于 routes: routes
});