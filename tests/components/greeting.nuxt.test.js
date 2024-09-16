import { describe, it, expect } from 'vitest';
import {mountSuspended} from '@nuxt/test-utils/runtime';
import Greeting from '~/components/Greeting.vue';

describe('The Greeting component', () => {
    it('renders the message correctly', async () => {
        const wrapper = await mountSuspended(Greeting)
        expect(wrapper.text()).toContain('Hello there!')
    })
})
