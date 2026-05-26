import { defineConfig } from 'eslint/config'
import { configs } from 'typescript-eslint'

export default defineConfig(
  { ignores: ['dist'] },
  {
    extends: [...configs.recommended],
    rules: {
      semi: ['error', 'always'],
    },
  },
)
