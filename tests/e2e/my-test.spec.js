import { setup, createPage } from '@nuxt/test-utils/e2e'
import { describe, it, expect } from 'vitest'

describe('Call landing page', async () => {
    await setup({
        host: 'http://localhost:3000',
    })

    it('and it shows the greeting message', async () => {
        const page = await createPage('/')
        expect(await page.getByText('Hello there!').isVisible()).toBe(true)
    })
})
