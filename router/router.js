import Vue from "vue";
import VueRouter from "vue-router";

import yhglSection from "../component-proj/yhgl-vue/section.vue";
import addUserModal from "../component-proj/yhgl-vue/add-user-modal.vue";
//权限分配
import qxfpSection from "../component-proj/qxfp-vue/section.vue";
import addRoleModal from "../component-proj/qxfp-vue/add-role-modal.vue";
import modifyRoleModal from "../component-proj/qxfp-vue/modify-role-modal.vue";
import selectPriviledgeModal from "../component-proj/qxfp-vue/select-priviledge-modal.vue";
//项目管理
import xmglSection from "../component-proj/xmgl-vue/section.vue";
import addProjModal from "../component-proj/xmgl-vue/add-project-modal.vue";
import applyKeyModal from "../component-proj/xmgl-vue/apply-key-modal.vue";
import modifyProjModal from "../component-proj/xmgl-vue/modify-project-modal.vue";

import sjtjSection from "../component-proj/sjtj-vue/section.vue";
import sqlsSection from "../component-proj/sqls-vue/section.vue";
import czrzSection from "../component-proj/czrz-vue/section.vue";
import loginSection from "../component-proj/login-vue/login-vue.vue";

Vue.use(VueRouter);
const routes = [
    {
		path: "/login",
		components: {
            login: loginSection,
        },
    },
    {
		path: "",//默认进入login页面
		components: {
            login: loginSection,
        },
    },
    {
		path: "/sjtj",
		name: "sjtj",
		components: {
			section: sjtjSection
        },
        props: {
            section: true
        },
		children: [
		]
    },
    {
		path: "/sqls",
		name: "sqls",
		components: {
			section: sqlsSection
        },
        props: {
            section: true
        },
		children: [
		]
    },
    {
		path: "/czrz",
		name: "czrz",
		components: {
			section: czrzSection
        },
        props: {
            section: true
        },
		children: [
		]
	},
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
            },
            {
				path: "addproj",
				name: "addproj",
				components: {
					modal: addProjModal
                },
                props: {
                    modal: true
                },
            },
            {
				path: "modifyproj",
				name: "modifyproj",
				components: {
					modal: modifyProjModal
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
				path: "modifyrole",
				name: "modifyrole",
				components: {
					modal: modifyRoleModal
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

var router = new VueRouter({
	routes // (缩写) 相当于 routes: routes
});

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default router;