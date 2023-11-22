import { mount, shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import App from '../App.vue'

//Mount
it('should render the content of "Main.vue" component', () => {

    /**
     * here, mount -> App component
     * it also renders child component; like -> Main Component
     * it's not good bec, we test only App component, not child component.
     */
    const instance = mount(App);

    expect(instance.html()).toContain('Vite and Vue logos')
})

//shallowMount
it("should render the content of App component not display child component", () => {
    const instance = shallowMount(App);

    //console.log(instance.html())

    //expect(instance.html()).toContain("Vite and Vue logos"); //

    expect(instance.html()).toContain("Anaya");
})