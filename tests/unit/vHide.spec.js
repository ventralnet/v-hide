import { shallowMount } from '@vue/test-utils';
import Mock from './mock/Mock.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = shallowMount(Mock, {
      propsData: { isHide: true },
    });

    await wrapper.vm.$nextTick();

    let { element } = wrapper.find('.sample-div');
    expect(element).toBeDefined();

    let { visibility } = element.style;
    expect(visibility).toBe('hidden');

    wrapper.setProps({ isHide: true });
    await wrapper.vm.$nextTick();

    element = wrapper.find('.sample-div').element;
    expect(element).toBeDefined();

    visibility = element.style.visibility;
    expect(visibility).toBe('hidden');
  });
});
