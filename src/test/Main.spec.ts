import { mount } from "@vue/test-utils"
import { expect, it } from "vitest"
import Main from '../components/Main.vue'

it('should render msg property', () => {
    const instance = mount(Main, {
        props: {
            msg: 'Hello Aaira'
        }
    });

    
    expect(instance.find('h1').text()).toBe('Hello Aaira')
    //console.log(instance.find('h1').text())
})

//White Box testing
it('should increment count when the increment method is called', () => {
    const instance = mount(Main);

    /**
     * here, call method from component
     * so, when call increment method it will be count increment; 0-->1
     * This is the Vue instance.
     * You can access all the instance methods and properties of a vm with wrapper.vm. 
     */
    instance.vm.increment();

    expect(instance.vm.count).toBe(1)
})

//Black Box Testing
it('should increment the count and display it', async () => {
    const instance = mount(Main);

    const button = instance.find('button');
    await button.trigger('click'); 
    
    expect(button.text()).toBe('count is 1')
})