import { App } from "vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import MemberLayout from "@/layouts/MemberLayout.vue";
import SASection from "./SASection.vue";
const comps = [GuestLayout, MemberLayout, SASection];
const install = (app: App): void => {
  comps.forEach((comp) => {
    app.component(comp.name, comp);
  });
};
export default {
  install,
};
