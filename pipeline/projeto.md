# Projeto

> Como este projeto se conecta à pipeline. Arquivo protegido: só muda com aprovação do humano.
> Aponte para os arquivos onde a verdade está; não copie o conteúdo deles.

## Estado do projeto

- Template Next.js com App Router em `src/app/`, instalado manualmente com npm. Dependências e versões: `package.json` e `package-lock.json`.
- Não há legado nem padrões concorrentes.
- Origem da pipeline: [Pipeline v3](https://github.com/EduNunesGithub/ai-first-pipeline), commit `f80d84485f42fb647ed4c8172daaa7e3031eccbc`; os arquivos genéricos vieram de `modelo/`.
- Git: branch principal `main`.

## Convenções

- Documentação e descrição dos commits: português do Brasil, em Conventional Commits (`feat: ...`, `fix: ...`).
- Identificadores no código: inglês.
- Nomes de arquivos e pastas do produto: kebab-case, respeitando os nomes exigidos pelas ferramentas.
- Textos da interface: português do Brasil.

## Fontes de referência

- Stack e ferramentas: documentação oficial vinculada no `README.md`.
- Dependências, requisitos de execução e comandos: `package.json`; resolução reproduzível: `package-lock.json`.
- Tipos e aliases da aplicação: `tsconfig.json`; aliases nativos do Node.js: `imports` em `package.json`; lint e ordenação: `eslint.config.mjs` e `eslint/`; configuração do Next.js: `next.config.mts`; formato: `.prettierrc.json` e `.prettierignore`.
- Tailwind CSS: `postcss.config.mjs` e `src/app/globals.css`; usar o tema padrão do Tailwind enquanto não houver tema próprio.
- Tipografia global e preparação dos portais Base UI: `src/app/globals.css` e `src/app/layout.tsx`; composição e animação: documentação oficial vinculada no `README.md`.
- Hooks Git: `.husky/pre-commit` e `.husky/commit-msg`, instalados pelo script `prepare`; convenção das mensagens: `commitlint.config.mjs`.

## Checagens

Rodadas por quem aceita o trabalho, sobre o estado final, em toda entrega.

| Checagem | Comando ou estado |
| --- | --- |
| Build | `npm run build`. |
| Commit | `npm run commitlint "--" --last --verbose`; o hook `commit-msg` verifica a mensagem de cada novo commit. |
| Diff e whitespace | `git status --short --untracked-files=all` e `git diff --check`; incluir os arquivos novos na leitura. Antes de serem rastreados, verificar whitespace com `git diff --no-index --check -- NUL <arquivo>` no Windows. |
| Formato | `npm run format:check`. |
| Lint | `npm run lint`. |
| Testes | Ainda não há comportamento de produto ou suíte; a instalação é verificada por build, tipos, lint, formato, HTTP e navegador. Definir testes com o primeiro comportamento do produto. |
| Tipos | `npm run typecheck`, incluindo a geração dos tipos Next.js antes de `tsc`. |

Na conferência de arquivo novo com `--no-index --check`, o status 1 pode indicar apenas que o arquivo difere de `NUL`; erros de whitespace são listados na saída e precisam ser corrigidos.

Marcadores de supressão: `eslint-disable`, `eslint-enable`, `eslint-env`, `prettier-ignore`, `@ts-ignore`, `@ts-expect-error`, `@ts-nocheck`, `ignoreBuildErrors`. Diretivas geradas em `next-env.d.ts` são referências de tipos, não supressões.

## Rodar e observar o produto

- Instalar de forma reproduzível: `npm ci`. O script `prepare` ativa o Husky no repositório Git.
- Desenvolvimento: `npm run dev`; endereço padrão `http://localhost:3000`.
- Produção local: `npm run build` e `npm start`; mesmo endereço padrão.
- Observar: abrir a página inicial no navegador; conferir a resposta HTTP e a página de rota inexistente.
- Dados e acessos de teste: inexistentes; a página inicial não exige credenciais.
- Limites do ambiente: conferir terminal, navegador e credenciais na instalação de cada projeto e registrar bloqueios reais. Alertas das dependências: `README.md`.

## Arquivos protegidos

Só mudam quando a tarefa exige, e toda mudança é declarada na entrega.

- `AGENTS.md`, `CLAUDE.md`, `.claude/`, `.codex/`.
- `pipeline/`, exceto `pipeline/padroes.md`.
- Configuração das checagens e dos arquivos verificados: `.gitattributes`, `.gitignore`, `.prettierignore`, `.prettierrc.json`, `commitlint.config.mjs`, `eslint.config.mjs`, `eslint/`, `next.config.mts`, `postcss.config.mjs`, `tsconfig.json`.
- Comandos, dependências e hooks: `.husky/commit-msg`, `.husky/pre-commit`, `package-lock.json`, `package.json`.
- Integração contínua: ainda inexistente; registrar quando criada.

Os caminhos existentes estão nas regras `ask` de `.claude/settings.json`.

## Ferramentas de agente

- `.claude/agents/` e `.codex/agents/`: níveis `t0` a `t3` e `revisor`, com os modelos e esforços do modelo oficial.
- `.claude/settings.json` e `.codex/config.toml`: memória automática desativada.
- As configurações locais do Codex só são carregadas em projetos confiáveis; conferir a confiança de cada novo projeto, conforme a [documentação oficial](https://learn.chatgpt.com/docs/config-file/config-reference).
- Conferir a instalação de Codex CLI e Claude Code e a disponibilidade dos modelos na conta usada; declarar indisponibilidades sem substituição silenciosa.
- `next dev`, `next build` e `next typegen` mantêm `next-env.d.ts` e tipos em `.next/`; esses artefatos não são editados manualmente nem versionados.
- `agentRules: false` em `next.config.mts` impede a escrita automática do Next.js nos arquivos de instruções dos agentes.
