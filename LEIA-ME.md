# Rovya Stickers

App de figurinhas para o story. É um site que vira "aplicativo" quando a pessoa adiciona à tela de início.

- **App das figurinhas:** `seu-site/`
- **Área da Rovya:** `seu-site/admin.html`. Só o e-mail **rovyacreative@gmail.com** consegue adicionar e apagar figurinhas.

## Primeiro acesso à Área da Rovya

1. Abra `admin.html`, digite o e-mail rovyacreative@gmail.com e uma senha, e toque em **Primeiro acesso: criar senha**.
2. Confirme pelo e-mail que chega na caixa de entrada.
3. Volte e toque em **Entrar**.

## Adicionar figurinha

1. Na Área da Rovya, escolha o **pacote** (Rovya ou um cliente).
2. Toque para escolher o PNG. Exporte com **fundo transparente** (no Canva: Baixar → PNG → "Fundo transparente"). Uns 800–1000 px de largura ficam nítidos.
3. Dê um nome e uma categoria (Rotina, Trabalho…) e toque em **Adicionar**. Ela aparece no app na hora.

## Pacote exclusivo de um cliente

1. No seletor de pacote, escolha **+ Novo cliente…** e digite o nome.
2. Adicione as figurinhas dele.
3. Toque em **Copiar link** e mande para o cliente. Ele só vê as figurinhas dele, e o app lembra o pacote quando ele abre pelo ícone.

## Onde ficam as coisas

- Figurinhas, pacotes e logins: no Supabase (projeto **rovya-stickers**, plano grátis). No plano grátis, o projeto **pausa se ficar 7 dias sem nenhum acesso**. Se o app parar de carregar, entre em supabase.com e clique em "Restore".
- As 10 figurinhas iniciais estão na pasta `stickers/rovya/` do site.

## Depois de publicar (uma vez só)

No Supabase: **Authentication → URL Configuration**:
- **Site URL:** coloque o endereço do site (ex.: `https://stickers.rovya.com.br`).
- **Redirect URLs:** adicione o endereço do `admin.html`.

Sem isso, os links de "confirmar e-mail" e "esqueci a senha" levam para uma página que não existe. A confirmação vale mesmo assim, mas o "esqueci a senha" não funciona.

## Testar no computador

Na pasta, rode `python -m http.server 8765` e abra http://localhost:8765.
