import { shallowMount } from '@vue/test-utils';
import Mock from './mock/Mock.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = shallowMount(Mock, {
      propsData: { isHide: false, },
    });

    let element = wrapper.find('.sample-div').element;
    expect(element).toBeDefined();

    let visibility = element.style.visibility;
    expect(visibility).toBe('visible');

    wrapper.setProps({ isHide: true });
    await wrapper.vm.$nextTick();

    element = wrapper.find('.sample-div').element;
    expect(element).toBeDefined();

    visibility = element.style.visibility;
    expect(visibility).toBe('hidden');
  });
});
