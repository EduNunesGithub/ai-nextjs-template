# Padrões e decisões

> Os exemplares a seguir e as decisões que outras tarefas precisam repetir igual. Os agentes mantêm este arquivo como parte das entregas; o humano vê as mudanças no diff e pode vetá-las ao aceitar. Não é norma: dá para desviar quando a tarefa justifica, e então a entrada é atualizada.

Entra aqui:

- a primeira instância de algo que vai se repetir e em que divergir quebraria a consistência;
- uma decisão que outras tarefas precisam repetir igual;
- qual de duas formas existentes no código é a atual.

Não entra: o que o código já mostra sem ambiguidade, o que uma norma ou uma checagem já garante, uma escolha local.

Formato, uma linha por entrada:

```markdown
- Formulário com validação: `src/conta/perfil-form.tsx`. Schema junto do formulário; mensagens vêm de `src/i18n/`.
- Links de arquivos públicos: `/arquivos/<slug>`; o slug não muda quando o arquivo é substituído.
```

<!-- As entradas do projeto entram abaixo, agrupadas por área quando forem várias. -->

- Bibliotecas: as dependências de `package.json` resolvem, sozinhas ou combinadas, as necessidades que cobrem, conforme a documentação oficial vinculada no `README.md`; não escrever solução própria para elas.
- Configuração própria do ESLint por assunto: `eslint/imports/index.mjs`. Cada grupo exporta uma configuração e é composto em `eslint.config.mjs`; usar como exemplar para novos grupos.
- Tipografia global: `src/app/globals.css`. Estilos semânticos na camada `base`; variações de contexto, quando necessárias, na camada `components`.
