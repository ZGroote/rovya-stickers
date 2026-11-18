// Login compartilhado com o CRM: o login do Supabase fica guardado no CRM (crm.rovyacreative.com.br/sessao.html),
// e esta página lê/grava lá por uma janela escondida. Entrar em um entra no outro; sair sai dos dois.
// Se o CRM não responder (sem internet, fora do ar), usa o armazenamento deste endereço mesmo.
window.sessaoCrm = (() => {
  const CRM = 'https://crm.rovyacreative.com.br';
  const f = document.createElement('iframe');
  f.hidden = true;
  f.src = CRM + '/sessao.html';
  const carregou = new Promise(ok => f.onload = ok);
  document.documentElement.append(f);
  const espera = {};
  let n = 0;
  addEventListener('message', e => {
    if (e.origin !== CRM || !espera[e.data?.id]) return;
    espera[e.data.id](e.data.valor);
    delete espera[e.data.id];
  });
  const local = (op, k, v) => { try { return op === 'get' ? localStorage.getItem(k) : op === 'set' ? localStorage.setItem(k, v) : localStorage.removeItem(k); } catch { return null; } };
  const pedir = (op, k, v) => Promise.race([carregou, new Promise(ok => setTimeout(ok, 5000))]).then(() => new Promise(ok => {
    const id = ++n;
    const t = setTimeout(() => { delete espera[id]; ok(local(op, k, v)); }, 3000);
    espera[id] = valor => { clearTimeout(t); ok(valor); };
    f.contentWindow.postMessage({ id, op, k, v }, CRM);
  }));
  return { getItem: k => pedir('get', k), setItem: (k, v) => pedir('set', k, v), removeItem: k => pedir('del', k) };
})();
