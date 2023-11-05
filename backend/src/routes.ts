import { FormController } from "./controller/FormController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: FormController,
    action: "all"
}, {
    method: "post",
    route: "/save",
    controller: FormController,
    action: "save"
}]