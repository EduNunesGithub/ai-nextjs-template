# Next.js Template

Base mínima de Next.js com App Router em `src/app`, TypeScript, Tailwind CSS e npm. A configuração foi escrita manualmente, sem geradores.

Crie um repositório com **Use this template** em [ai-nextjs-template](https://github.com/EduNunesGithub/ai-nextjs-template) ou clone a base com `git clone https://github.com/EduNunesGithub/ai-nextjs-template.git meu-projeto` e entre em `meu-projeto`. Use Node.js 24 LTS e npm; execute `npm ci` e `npm run dev`. A aplicação fica em [http://localhost:3000](http://localhost:3000).

Para adaptar a base, execute `npm pkg set name=meu-projeto` e `npm install --package-lock-only --ignore-scripts` para manter o lockfile coerente. Atualize os metadados em `src/app/layout.tsx`, o conteúdo inicial em `src/app/page.tsx` e este README. Ajuste `pipeline/projeto.md` ao novo produto; o template inclui as normas, os padrões e os agentes da pipeline atual.

| Comando                                  | Finalidade                                         |
| ---------------------------------------- | -------------------------------------------------- |
| `npm run build`                          | Gerar a aplicação de produção.                     |
| `npm run commitlint -- --edit <arquivo>` | Validar a mensagem de commit no arquivo indicado.  |
| `npm run dev`                            | Iniciar o servidor de desenvolvimento.             |
| `npm run format`                         | Formatar os arquivos com Prettier.                 |
| `npm run format:check`                   | Conferir a formatação.                             |
| `npm run lint`                           | Conferir o código com ESLint e Perfectionist.      |
| `npm run lint:fix`                       | Aplicar as correções automáticas do ESLint.        |
| `npm run start`                          | Servir a aplicação depois do build.                |
| `npm run typecheck`                      | Gerar os tipos do Next.js e conferir o TypeScript. |

O Husky instala os hooks pelo script `prepare` durante a instalação. O pré-commit executa lint e conferência de formato no projeto inteiro; o `commit-msg` valida a mensagem com o preset Conventional Commits do Commitlint. Uma falha bloqueia o commit. Os hooks usam os pacotes locais, sem baixar dependências durante sua execução. No Windows, os hooks usam o shell fornecido pelo Git for Windows.

Use `@/` para importar arquivos de `src/`, conforme o alias em `tsconfig.json`; por exemplo, `import "@/app/globals.css"`. O ESLint rejeita imports e reexports relativos, incluindo imports de tipos, `import()` e `require()` com caminhos literais. Dependências continuam sendo importadas pelo nome do pacote.

O ESLint usa Core Web Vitals, as regras recomendadas de TypeScript e a ordenação alfabética do Perfectionist. `eslint-config-prettier` evita conflitos de formatação. O Prettier usa as opções padrão e o plugin oficial `prettier-plugin-tailwindcss` para ordenar as classes em atributos e chamadas de `twMerge`, lendo a entrada CSS do Tailwind v4 indicada em `.prettierrc.json`. O Tailwind CSS usa a integração oficial com PostCSS; `tailwind-merge` está disponível para combinar classes diretamente quando necessário.

Base UI está disponível por componente, como `import { Button } from "@base-ui/react/button"`. O layout isola o conteúdo para os portals, e o CSS global posiciona o `body` conforme o setup oficial para iOS Safari. A tipografia global está em `src/app/globals.css`; as regras de interface ficam em `pipeline/normas.md`.

Motion usa `motion/react` nos Client Components; no App Router, elementos animados também podem ser importados de `motion/react-client` em Server Components. A integração com Base UI segue o guia oficial de animação, que diferencia os ciclos de montagem de cada componente. Ao implementar movimentos, consultar também o guia de acessibilidade para respeitar a preferência de movimento reduzido.

`eslint.config.mjs` reúne os presets e as configurações locais por assunto em `eslint/<assunto>/index.mjs`. A configuração de importações está em `eslint/imports/index.mjs`, carregada pelo alias nativo `#eslint/imports` definido em `package.json`. Esses módulos usam `.mjs` para dispensar loaders e flags adicionais; o Node.js não aplica os aliases de `tsconfig.json` ao carregar a configuração.

O ESLint 9.39.5 mantém os peers dos plugins incluídos no Next.js compatíveis, mas está fora de suporte e gera um aviso de depreciação. A [documentação do Next.js](https://nextjs.org/docs/app/api-reference/config/eslint) registra que alguns plugins ainda não declaram suporte ao ESLint 10; veja também o [suporte de versões do ESLint](https://eslint.org/version-support/).

O `npm audit` aponta cinco ocorrências de severidade alta na cadeia de desenvolvimento do ESLint do Next.js, causadas pela [vulnerabilidade de `braces`](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), sem versão corrigida publicada. O `npm audit --omit=dev` não aponta vulnerabilidades nas dependências de produção. Não aplique `npm audit fix --force`: a sugestão atual regride a configuração do Next.js para outra versão principal.

O arquivo `next-env.d.ts` é gerado pelo Next.js e ignorado pelo Git. Os arquivos existentes da pipeline e dos agentes ficam fora do Prettier para preservar suas fontes.

O Git preserva finais de linha LF pelo `.gitattributes`, em acordo com o padrão do Prettier, inclusive no Windows.

`agentRules: false` impede o servidor de desenvolvimento de gerar instruções em `AGENTS.md`. No npm 11, `allowScripts` autoriza somente o postinstall revisado de `unrs-resolver@1.12.2`, que prepara o binding nativo do resolvedor de imports do ESLint. Novas versões precisam ser revisadas antes de ampliar essa permissão.

Fontes oficiais:

- [Base UI: animação e integração com Motion](https://base-ui.com/react/handbook/animation).
- [Base UI: composição](https://base-ui.com/react/handbook/composition).
- [Base UI: instalação e setup](https://base-ui.com/react/overview/quick-start).
- [Commitlint: configuração](https://commitlint.js.org/reference/configuration.html).
- [Commitlint: instalação](https://commitlint.js.org/guides/getting-started.html).
- [Commitlint: integração com Husky](https://commitlint.js.org/guides/local-setup.html).
- [ESLint: configuração](https://eslint.org/docs/latest/use/configure/configuration-files).
- [ESLint: configuração TypeScript](https://eslint.org/docs/latest/use/configure/configuration-files#typescript-configuration-files).
- [ESLint: imports restritos](https://eslint.org/docs/latest/rules/no-restricted-imports).
- [ESLint: sintaxe restrita](https://eslint.org/docs/latest/rules/no-restricted-syntax).
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
- [Husky: configuração manual](https://typicode.github.io/husky/how-to.html).
- [Motion: acessibilidade](https://motion.dev/docs/react-accessibility).
- [Motion: instalação e Next.js](https://motion.dev/docs/react-installation).
- [Next.js: agentRules](https://nextjs.org/docs/app/api-reference/config/next-config-js/agentRules).
- [Next.js: ESLint](https://nextjs.org/docs/app/api-reference/config/eslint).
- [Next.js: instalação manual](https://nextjs.org/docs/app/getting-started/installation).
- [Next.js: TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript).
- [Node.js: aliases em TypeScript](https://nodejs.org/api/typescript.html#paths-aliases).
- [Node.js: imports internos de pacotes](https://nodejs.org/api/packages.html#subpath-imports).
- [npm: aprovação de scripts de instalação](https://docs.npmjs.com/cli/v11/commands/npm-install-scripts/).
- [Perfectionist: recommended-alphabetical](https://perfectionist.dev/configs/recommended-alphabetical).
- [Prettier: instalação](https://prettier.io/docs/install).
- [Prettier: plugin oficial do Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).
- [Tailwind CSS com Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
- [Tailwind CSS: estilos globais](https://tailwindcss.com/docs/adding-custom-styles#adding-base-styles).
- [Tailwind CSS: tipografia](https://tailwindcss.com/docs/font-size).
- [tailwind-merge](https://github.com/dcastil/tailwind-merge).
- [TanStack Charts: adaptador React](https://tanstack.com/charts/latest/docs/framework/react/adapter).
- [TanStack DB: adaptador React](https://tanstack.com/db/latest/docs/framework/react/overview).
- [TanStack Form: início rápido em React](https://tanstack.com/form/latest/docs/framework/react/quick-start).
- [TanStack Pacer: adaptador React](https://tanstack.com/pacer/latest/docs/framework/react/adapter).
- [TanStack Query: instalação em React](https://tanstack.com/query/latest/docs/framework/react/installation).
- [TanStack Store: início rápido em React](https://tanstack.com/store/latest/docs/framework/react/quick-start).
- [TanStack Table: início rápido em React](https://tanstack.com/table/latest/docs/framework/react/quick-start).
- [TypeScript: TSConfig](https://www.typescriptlang.org/tsconfig/).
