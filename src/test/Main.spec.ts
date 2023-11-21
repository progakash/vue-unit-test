import { mount } from "@vue/test-utils"
import { expect, it } from "vitest"
import Main from '../components/Main.vue'

it("should render msg property", () => {
    const instance = mount(Main, {
        props: {
            msg: 'Hello Aaira'
        }
    });

    
    expect(instance.find('h1').text()).toBe('Hello Aaira')
    //console.log(instance.find('h1').text())
})