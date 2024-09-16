import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        environmentOptions: {
            nuxt: {
                dotenv: {
                    fileName: '.env.run',
                }
            }
        }
    }
})
