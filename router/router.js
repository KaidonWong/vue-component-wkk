import Vue from "vue";
import VueRouter from "vue-router";
import yhglSection from "../component-proj/yhgl-vue/section.vue";
import addUserModal from "../component-proj/yhgl-vue/add-user-modal.vue";
import qxfpSection from "../component-proj/qxfp-vue/section.vue";
import addRoleModal from "../component-proj/qxfp-vue/add-role-modal.vue";
import selectPriviledgeModal from "../component-proj/qxfp-vue/select-priviledge-modal.vue";
import xmglSection from "../component-proj/xmgl-vue/section.vue";
import addProjModal from "../component-proj/xmgl-vue/add-project-modal.vue";
import applyKeyModal from "../component-proj/xmgl-vue/apply-key-modal.vue";


Vue.use(VueRouter);
const routes = [
    {
		path: "/xmgl",
		name: "xmgl",
		components: {
			section: xmglSection
        },
        props: {
            section: true
        },
		children: [
            {
				path: "appkey",
				name: "appkey",
				components: {
					modal: applyKeyModal
                },
                props: {
                    modal: true
                },
			}
		]
	},
	{
		path: "/yhgl",
		name: "yhgl",
		components: {
			section: yhglSection
        },
        props: {
            section: true
        },
		children: [
			{
				path: "adduser",
				name: "adduser",
				components: {
					modal: addUserModal
                },
                props: {
                    modal: true
                },
			}
		]
	},
	{
		path: "/qxfp",
		name: "qxfp",
		components: {
			section: qxfpSection
        },
        props: {
            section: true
        },
		children: [
			{
				path: "addrole",
				name: "addrole",
				components: {
					modal: addRoleModal
                },
                props: {
                    modal: true
                },
            },
            {
				path: "selpri",
				name: "selpri",
				components: {
					modal: selectPriviledgeModal
                },
                props: {
                    modal: true
                },
			}
		]
	}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
	routes // (缩写) 相当于 routes: routes
});