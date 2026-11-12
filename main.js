(function () {
  "use strict";

  var T = {
    en: {
      "meta.title": "Draft Coach - Win the draft before the game starts",
      "meta.desc": "Draft Coach reads your champion select live and recommends the best pick from your own champion pool, with runes, items and spells imported in one click.",
      "skip": "Skip to content",
      "menu": "Menu",
      "close": "Close",
      "openshot": "Open screenshot enlarged",
      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.data": "Data",
      "nav.faq": "FAQ",
      "cta.beta": "Join the beta",
      "cta.how": "See how it works",
      "hero.eyebrow": "Champion select companion",
      "hero.title": "Win the draft <em>before</em> the game starts",
      "hero.sub": "Most companion apps import the same generic build every game. Draft Coach reads your champion select live, recommends the best pick from YOUR pool and picks the runes, spells and items that win in THIS matchup, against your lane opponent and adjusted to the enemy team.",
      "hero.b1": "Top · Jungle · Mid · ADC · Support",
      "hero.b2": "Updated every patch",
      "hero.b3": "Free",
      "stat.1v": "Master+", "stat.1l": "ranked solo queue matches",
      "stat.2v": "Every patch", "stat.2l": "data refreshed automatically",
      "stat.3v": "1 click", "stat.3l": "to import runes, items and spells",
      "stat.4v": "Per matchup", "stat.4l": "runes, spells and items picked against your opponent",
      "stats.note": "Thousands of high-elo matches per champion.",
      "cmp.eyebrow": "The difference",
      "cmp.title": "The matchup build, not the weekly one",
      "cmp.sub": "Most companion apps import the same page every game. Draft Coach looks at who you are facing, ranks every option by win rate and shows how many games are behind it.",
      "cmp.g.t": "Generic build", "cmp.d.t": "Draft Coach",
      "cmp.g.1": "The same page every game",
      "cmp.g.2": "Most played, not best against who you face",
      "cmp.g.3": "Ignores the enemy laner and the enemy team",
      "cmp.d.1": "Picked for your lane opponent",
      "cmp.d.2": "Items adjusted to the enemy team: AP, AD, healing",
      "cmp.d.3": "Ranked by win rate with a sample-size prior, small samples flagged",
      "cmp.s1": "Ghost + Flash", "cmp.s2": "Ignite + Flash", "cmp.s3": "Exhaust + Flash",
      "cmp.gg1": "5,291 games", "cmp.gg2": "2,493 games", "cmp.gg3": "1,694 games",
      "cmp.dg1": "105 games", "cmp.dg2": "52 games", "cmp.dg3": "8 games",
      "cmp.g.n": "Darius spells, all matchups, ranked by popularity.",
      "cmp.d.n": "Darius vs Garen, ranked by win rate.",
      "cmp.note": "Real numbers from Master+ specialist games of Darius, patch 16.20-16.22. Runes and items follow the same logic.",
      "feat.eyebrow": "Features",
      "feat.title": "Everything you need in champ select",
      "feat.sub": "Real screens from the app. Pick a feature to see it, click the image to enlarge.",
      "feat.tablist": "Features",
      "f.champ-select.tab": "Live champ select",
      "f.champ-select.t": "Live champion select",
      "f.champ-select.d": "Draft Coach follows the lobby as it fills up. It shows the draft clock, detects your enemy laner and jungler, ranks your pool against them, suggests one ban and shows runes, spells and items ready to import.",
      "f.recommendation.tab": "Pick recommendation",
      "f.recommendation.t": "Pick recommendation",
      "f.recommendation.d": "Your pool champions are ranked against the enemy, each with its win rate, sample size and how far it is from normal. You always get several options, and you decide.",
      "f.runes.tab": "Runes, items, spells",
      "f.runes.t": "Runes, items and spells",
      "f.runes.d": "Rune pages, builds and summoner spells ranked by win rate with sample size, imported into the client when you lock in.",
      "f.lane.tab": "Lane matchup",
      "f.lane.t": "Lane matchup",
      "f.lane.d": "Gold and CS difference at 10 and 15 minutes, solo kill rates, who gets to level 6 first, and practical tips for the matchup.",
      "f.jungle.tab": "Enemy kit",
      "f.jungle.t": "Enemy kit",
      "f.jungle.d": "The enemy's ability cooldowns next to yours (static game data) to read before the match. The enemy jungler and objective times are one tab away.",
      "alt.champ-select": "Draft Coach showing a live champion select with the draft clock, the enemy laner and jungler detected, the pool ranked P1 to P3 and a suggested ban",
      "alt.recommendation": "Draft Coach ranking the player's champion pool against the enemy laner, with win rates and sample sizes",
      "alt.runes": "Draft Coach build tab with build styles, rune pages and summoner spells ranked by win rate",
      "alt.lane": "Lane matchup panel with gold and CS difference, solo kill rates and practical tips",
      "alt.jungle": "Cooldown tables for the enemy champion and the player's champion side by side",
      "also.tag": "And also",
      "also.1.t": "Your own history",
      "also.1.d": "Draft Coach reads your personal match history and adds it to the recommendation, so a champion you actually play well gets the credit it deserves.",
      "also.2.t": "Take a break reminder",
      "also.2.d": "After a losing streak, a friendly nudge to step away before the next queue. Tilt is the one matchup no pick can fix.",
      "how.eyebrow": "How it works",
      "how.title": "Three steps. Zero tab-switching.",
      "how.1.t": "Pick your pool",
      "how.1.d": "Choose the champions you are comfortable with for each role. The app only ever recommends from this list.",
      "how.2.t": "Enter champion select",
      "how.2.d": "Draft Coach detects the lobby on its own, reads the enemy picks and ranks your pool against them.",
      "how.3.t": "Lock in",
      "how.3.d": "When you lock in, runes, items and summoner spells are imported into the client for you.",
      "data.eyebrow": "The data",
      "data.title": "Built from high-elo matches",
      "data.sub": "Every number in the app comes from real games, and every number shows how many games are behind it.",
      "data.l1": "Ranked solo queue matches of Master+ players, plus the specialists of each champion.",
      "data.l2": "Aggregated on our server every patch through the official Riot Games API.",
      "data.l3": "Early in a patch, the previous patch is blended in until there is enough sample.",
      "data.l4": "Win rates always come with the sample size, and small samples are flagged.",
      "data.mockaria": "Example of how the app shows data",
      "data.m1": "Option A", "data.m1s": "166 games",
      "data.m2": "Option B", "data.m2s": "105 games",
      "data.m3": "Option C", "data.m3s": "12 games",
      "data.pill": "Small sample",
      "data.mocknote": "Illustrative layout. Real values depend on the patch, matchup and your pool.",
      "ph.eyebrow": "Coming next",
      "ph.badge": "In development",
      "ph.title": "Draft from your phone",
      "ph.sub": "Queue up, step away from the desk and keep control of your champion select. Scan a QR code in the desktop app and your phone becomes a remote for your own League client.",
      "ph.l1": "Accept or decline the match when the queue pops.",
      "ph.l2": "See the recommendations, hover and lock in your champion, and ban.",
      "ph.l3": "Pick your runes and summoner spells before the game starts.",
      "ph.l4": "Paired with your PC through a one-time QR code. Revoke the phone from the desktop app at any time.",
      "ph.note": "Every action is a tap you make yourself: the phone only relays your choice to your own client, during champion select. Nothing is automated and nothing runs during the match. This feature will only ship once it is approved by Riot Games.",
      "ph.scan": "Scan on the desktop app",
      "ph.pc": "PC",
      "ph.turn": "Your turn to pick",
      "ph.opp": "your opponent",
      "ph.who": "Pick against",
      "ph.best": "best pick",
      "ph.most": "your most played",
      "ph.less": "rarely played by you",
      "ph.ban": "Suggested ban · Jayce",
      "ph.bansub": "Your best counter drops vs him",
      "ph.banbtn": "Ban Jayce",
      "ph.lock": "Lock Darius",
      "fair.eyebrow": "Fair play & privacy",
      "fair.title": "Built to play by the rules",
      "fair.sub": "Draft Coach is a champion select tool. It stays out of the match and out of your way.",
      "fair.1.t": "No in-game overlay",
      "fair.1.d": "Nothing is drawn on top of the match. The app lives in its own window and is meant for the draft.",
      "fair.2.t": "No tracking during the game",
      "fair.2.d": "No timers and no tracking of enemy cooldowns. The cooldown table is static game data you read before the match.",
      "fair.3.t": "Never targets other players",
      "fair.3.d": "It never reveals or ranks other players. Recommendations are about champions and matchups only.",
      "fair.4.t": "Game files untouched",
      "fair.4.d": "The app does not modify game files. It only imports runes, items and spell sets through the client.",
      "fair.5.t": "Official endpoints only",
      "fair.5.d": "Only the official Riot Games API and League Client endpoints are used. No API key is shipped inside the app.",
      "fair.6.t": "Your history stays with you",
      "fair.6.d": "Your match history stays on your PC. It is used locally to personalize recommendations and never uploaded.",
      "beta.status": "Closed beta",
      "beta.title": "Join the beta",
      "beta.text": "Closed beta: currently in testing with a small group of players. Public release after Riot Games approval.",
      "beta.download": "Download (soon)",
      "beta.github": "Follow on GitHub",
      "faq.eyebrow": "FAQ",
      "faq.title": "Questions",
      "faq.1.q": "Is it allowed?",
      "faq.1.a": "Draft Coach uses only the official Riot Games API and the League Client, and follows Riot's developer policies. Product registration with Riot Games is pending.",
      "faq.2.q": "Does it play for me?",
      "faq.2.a": "No. It recommends, you decide. Every pick, ban and lock-in is made by you.",
      "faq.3.q": "Which roles are supported?",
      "faq.3.a": "All five roles, starting with top, jungle and ADC.",
      "faq.4.q": "Is it free?",
      "faq.4.a": "Yes. There will always be a free tier.",
      "faq.5.q": "Does it work on Mac?",
      "faq.5.a": "Windows only for now."
    },
    pt: {
      "meta.title": "Draft Coach - Ganhe a partida na seleção de campeões",
      "meta.desc": "O Draft Coach lê a sua seleção de campeões ao vivo e recomenda o melhor pick do seu próprio pool, com runas, itens e feitiços importados em um clique.",
      "skip": "Pular para o conteúdo",
      "menu": "Menu",
      "close": "Fechar",
      "openshot": "Abrir captura de tela ampliada",
      "nav.features": "Recursos",
      "nav.how": "Como funciona",
      "nav.data": "Dados",
      "nav.faq": "FAQ",
      "cta.beta": "Entrar no beta",
      "cta.how": "Veja como funciona",
      "hero.eyebrow": "Companheiro de seleção de campeões",
      "hero.title": "Ganhe a partida na <em>seleção</em> de campeões",
      "hero.sub": "A maioria dos apps importa a mesma build genérica em toda partida. O Draft Coach lê a sua seleção de campeões ao vivo, recomenda o melhor pick do SEU pool e escolhe as runas, feitiços e itens que vencem NESTE confronto, contra o seu oponente de rota e ajustados ao time inimigo.",
      "hero.b1": "Top · Selva · Meio · Atirador · Suporte",
      "hero.b2": "Atualizado a cada patch",
      "hero.b3": "Grátis",
      "stat.1v": "Master+", "stat.1l": "partidas ranqueadas solo",
      "stat.2v": "Todo patch", "stat.2l": "dados atualizados automaticamente",
      "stat.3v": "1 clique", "stat.3l": "para importar runas, itens e feitiços",
      "stat.4v": "Por confronto", "stat.4l": "runas, feitiços e itens escolhidos contra o seu oponente",
      "stats.note": "Milhares de partidas de alto elo por campeão.",
      "cmp.eyebrow": "A diferença",
      "cmp.title": "A build do confronto, não a da semana",
      "cmp.sub": "A maioria dos apps importa a mesma página em toda partida. O Draft Coach olha contra quem você joga, ranqueia cada opção por taxa de vitória e mostra quantas partidas existem por trás.",
      "cmp.g.t": "Build genérica", "cmp.d.t": "Draft Coach",
      "cmp.g.1": "A mesma página em toda partida",
      "cmp.g.2": "A mais jogada, não a melhor contra quem você enfrenta",
      "cmp.g.3": "Ignora o oponente de rota e o time inimigo",
      "cmp.d.1": "Escolhida para o seu oponente de rota",
      "cmp.d.2": "Itens ajustados ao time inimigo: AP, AD, cura",
      "cmp.d.3": "Ranqueada por taxa de vitória com prior de amostra, amostras pequenas sinalizadas",
      "cmp.s1": "Fantasma + Flash", "cmp.s2": "Incendiar + Flash", "cmp.s3": "Exaustão + Flash",
      "cmp.gg1": "5.291 partidas", "cmp.gg2": "2.493 partidas", "cmp.gg3": "1.694 partidas",
      "cmp.dg1": "105 partidas", "cmp.dg2": "52 partidas", "cmp.dg3": "8 partidas",
      "cmp.g.n": "Feitiços do Darius, todos os confrontos, por popularidade.",
      "cmp.d.n": "Darius contra Garen, por taxa de vitória.",
      "cmp.note": "Números reais de partidas de especialistas Master+ do Darius, patch 16.20-16.22. Runas e itens seguem a mesma lógica.",
      "feat.eyebrow": "Recursos",
      "feat.title": "Tudo o que você precisa na seleção",
      "feat.sub": "Telas reais do app. Escolha um recurso para ver, clique na imagem para ampliar.",
      "feat.tablist": "Recursos",
      "f.champ-select.tab": "Seleção ao vivo",
      "f.champ-select.t": "Seleção de campeões ao vivo",
      "f.champ-select.d": "O Draft Coach acompanha o lobby enquanto ele enche. Mostra o relógio da seleção, detecta o seu oponente de rota e o jungler inimigo, ranqueia o seu pool contra eles, sugere um ban e deixa runas, feitiços e itens prontos para importar.",
      "f.recommendation.tab": "Recomendação de pick",
      "f.recommendation.t": "Recomendação de pick",
      "f.recommendation.d": "Os campeões do seu pool são ranqueados contra o inimigo, cada um com taxa de vitória, tamanho da amostra e a distância para o normal. Você sempre recebe várias opções, e quem decide é você.",
      "f.runes.tab": "Runas, itens, feitiços",
      "f.runes.t": "Runas, itens e feitiços",
      "f.runes.d": "Páginas de runas, builds e feitiços de invocador ranqueados por taxa de vitória com o tamanho da amostra, importados para o cliente quando você trava o pick.",
      "f.lane.tab": "Confronto de rota",
      "f.lane.t": "Confronto de rota",
      "f.lane.d": "Diferença de ouro e CS aos 10 e 15 minutos, taxa de solo kill, quem chega primeiro ao nível 6 e dicas práticas para o confronto.",
      "f.jungle.tab": "Kit inimigo",
      "f.jungle.t": "Kit inimigo",
      "f.jungle.d": "As recargas das habilidades do inimigo ao lado das suas (dados estáticos do jogo), para ler antes da partida. O jungler inimigo e os tempos de objetivos ficam a uma aba de distância.",
      "alt.champ-select": "Draft Coach mostrando uma seleção de campeões ao vivo, com o relógio da seleção, o oponente de rota e o jungler detectados, o pool ranqueado de P1 a P3 e um ban sugerido",
      "alt.recommendation": "Draft Coach ranqueando o pool de campeões do jogador contra o oponente de rota, com taxas de vitória e tamanhos de amostra",
      "alt.runes": "Aba de build do Draft Coach com estilos de build, páginas de runas e feitiços ranqueados por taxa de vitória",
      "alt.lane": "Painel de confronto de rota com diferença de ouro e CS, taxas de solo kill e dicas práticas",
      "alt.jungle": "Tabelas de recargas do campeão inimigo e do campeão do jogador lado a lado",
      "also.tag": "E também",
      "also.1.t": "Seu próprio histórico",
      "also.1.d": "O Draft Coach lê o seu histórico pessoal de partidas e soma à recomendação, para que um campeão que você realmente joga bem receba o crédito que merece.",
      "also.2.t": "Lembrete de pausa",
      "also.2.d": "Depois de uma sequência de derrotas, um aviso amigável para dar um tempo antes da próxima fila. Tilt é o único confronto que nenhum pick resolve.",
      "how.eyebrow": "Como funciona",
      "how.title": "Três passos. Nenhuma troca de aba.",
      "how.1.t": "Monte o seu pool",
      "how.1.d": "Escolha os campeões com que você se sente confortável em cada rota. O app só recomenda a partir dessa lista.",
      "how.2.t": "Entre na seleção",
      "how.2.d": "O Draft Coach detecta o lobby sozinho, lê os picks inimigos e ranqueia o seu pool contra eles.",
      "how.3.t": "Trave o pick",
      "how.3.d": "Ao travar, runas, itens e feitiços de invocador são importados para o cliente por você.",
      "data.eyebrow": "Os dados",
      "data.title": "Feito com partidas de alto elo",
      "data.sub": "Todo número do app vem de partidas reais, e todo número mostra quantas partidas existem por trás dele.",
      "data.l1": "Partidas ranqueadas solo de jogadores Master+, mais os especialistas de cada campeão.",
      "data.l2": "Agregadas no nosso servidor a cada patch, pela API oficial da Riot Games.",
      "data.l3": "No começo de um patch, o patch anterior entra na mistura até haver amostra suficiente.",
      "data.l4": "Taxas de vitória sempre vêm com o tamanho da amostra, e amostras pequenas são sinalizadas.",
      "data.mockaria": "Exemplo de como o app mostra os dados",
      "data.m1": "Opção A", "data.m1s": "166 partidas",
      "data.m2": "Opção B", "data.m2s": "105 partidas",
      "data.m3": "Opção C", "data.m3s": "12 partidas",
      "data.pill": "Pouca amostra",
      "data.mocknote": "Layout ilustrativo. Os valores reais dependem do patch, do confronto e do seu pool.",
      "ph.eyebrow": "Em breve",
      "ph.badge": "Em desenvolvimento",
      "ph.title": "Faça o draft pelo celular",
      "ph.sub": "Entre na fila, saia da frente do PC e continue no controle da sua seleção de campeões. Leia um QR Code no app do computador e o celular vira um controle remoto do seu próprio cliente do LoL.",
      "ph.l1": "Aceite ou recuse a partida quando a fila estourar.",
      "ph.l2": "Veja as recomendações, dê hover, trave o seu campeão e bana.",
      "ph.l3": "Escolha runas e feitiços antes de a partida começar.",
      "ph.l4": "Pareado com o seu PC por um QR Code de uso único. Dá para desconectar o celular pelo app do computador a qualquer momento.",
      "ph.note": "Cada ação é um toque seu: o celular só repassa a sua escolha para o seu próprio cliente, durante a seleção de campeões. Nada é automático e nada roda durante a partida. A função só será lançada depois de aprovada pela Riot Games.",
      "ph.scan": "Leia no app do computador",
      "ph.pc": "PC",
      "ph.turn": "Sua vez de escolher",
      "ph.opp": "seu oponente",
      "ph.who": "Quem pegar contra",
      "ph.best": "melhor escolha",
      "ph.most": "seu mais jogado",
      "ph.less": "pouco jogado por você",
      "ph.ban": "Ban sugerido · Jayce",
      "ph.bansub": "Seu melhor counter cai contra ele",
      "ph.banbtn": "Banir Jayce",
      "ph.lock": "Travar Darius",
      "fair.eyebrow": "Jogo limpo e privacidade",
      "fair.title": "Feito para respeitar as regras",
      "fair.sub": "O Draft Coach é uma ferramenta de seleção de campeões. Ele fica fora da partida e fora do seu caminho.",
      "fair.1.t": "Sem overlay no jogo",
      "fair.1.d": "Nada é desenhado por cima da partida. O app vive na própria janela e serve para a seleção.",
      "fair.2.t": "Sem rastreamento durante o jogo",
      "fair.2.d": "Sem timers e sem rastrear recargas do inimigo. A tabela de recargas são dados estáticos do jogo, lidos antes da partida.",
      "fair.3.t": "Nunca mira outros jogadores",
      "fair.3.d": "Nunca revela nem ranqueia outros jogadores. As recomendações falam só de campeões e confrontos.",
      "fair.4.t": "Arquivos do jogo intocados",
      "fair.4.d": "O app não modifica arquivos do jogo. Ele apenas importa conjuntos de runas, itens e feitiços pelo cliente.",
      "fair.5.t": "Só endpoints oficiais",
      "fair.5.d": "Usa somente a API oficial da Riot Games e os endpoints do Cliente do League. Nenhuma chave de API vai dentro do app.",
      "fair.6.t": "Seu histórico fica com você",
      "fair.6.d": "Seu histórico de partidas fica no seu PC. Ele é usado localmente para personalizar as recomendações e nunca é enviado.",
      "beta.status": "Beta fechado",
      "beta.title": "Entre no beta",
      "beta.text": "Beta fechado: em teste com um pequeno grupo de jogadores. Lançamento público após a aprovação da Riot Games.",
      "beta.download": "Download (em breve)",
      "beta.github": "Acompanhe no GitHub",
      "faq.eyebrow": "FAQ",
      "faq.title": "Perguntas",
      "faq.1.q": "É permitido?",
      "faq.1.a": "O Draft Coach usa apenas a API oficial da Riot Games e o Cliente do League, e segue as políticas para desenvolvedores da Riot. O registro do produto na Riot Games está pendente.",
      "faq.2.q": "Ele joga por mim?",
      "faq.2.a": "Não. Ele recomenda, você decide. Todo pick, ban e trava é feito por você.",
      "faq.3.q": "Quais rotas são suportadas?",
      "faq.3.a": "As cinco rotas, começando por top, selva e atirador.",
      "faq.4.q": "É grátis?",
      "faq.4.a": "Sim. Sempre vai existir um plano gratuito.",
      "faq.5.q": "Funciona no Mac?",
      "faq.5.a": "Por enquanto, só no Windows."
    }
  };

  var FEATURES = ["champ-select", "recommendation", "runes", "lane", "jungle"];
  var lang = "en";
  var feature = "champ-select";
  var root = document.documentElement;
  var descMeta = document.querySelector('meta[name="description"]');

  function safeGet(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
  }
  function safeSet(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { return; }
  }
  function t(key) {
    return T[lang][key] !== undefined ? T[lang][key] : T.en[key];
  }

  function shot(name) {
    return "assets/shots/" + lang + "/" + name + ".png";
  }

  function renderFeature() {
    var img = document.getElementById("feat-img");
    var btn = document.getElementById("feat-btn");
    var panel = document.getElementById("panel");
    img.src = shot(feature);
    img.alt = t("alt." + feature);
    btn.dataset.lightbox = feature;
    panel.setAttribute("aria-labelledby", "tab-" + feature);
    document.getElementById("feat-title").textContent = t("f." + feature + ".t");
    document.getElementById("feat-desc").textContent = t("f." + feature + ".d");
    FEATURES.forEach(function (f) {
      var tab = document.getElementById("tab-" + f);
      var on = f === feature;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
    });
  }

  function applyLang(next) {
    lang = next;
    root.lang = next === "pt" ? "pt-BR" : "en";
    document.title = t("meta.title");
    if (descMeta) descMeta.setAttribute("content", t("meta.desc"));
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.alt = t(el.dataset.i18nAlt);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === next ? "true" : "false");
    });
    var lbImg = document.getElementById("lb-img");
    var lb = document.getElementById("lightbox");
    document.querySelectorAll("[data-shot]").forEach(function (el) {
      el.src = shot(el.dataset.shot);
    });
    if (lb.open) {
      lbImg.alt = t("alt." + lb.dataset.current);
      lbImg.src = shot(lb.dataset.current);
    }
    renderFeature();
  }

  var stored = safeGet("dc-lang");
  var initial = stored === "pt" || stored === "en" ? stored : (navigator.language || "").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      safeSet("dc-lang", b.dataset.lang);
      applyLang(b.dataset.lang);
    });
  });

  var tabs = document.querySelector(".tabs");
  tabs.addEventListener("click", function (e) {
    var b = e.target.closest("[data-feature]");
    if (!b) return;
    feature = b.dataset.feature;
    renderFeature();
  });
  tabs.addEventListener("keydown", function (e) {
    var i = FEATURES.indexOf(feature);
    if (e.key === "ArrowDown" || e.key === "ArrowRight") i = (i + 1) % FEATURES.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") i = (i + FEATURES.length - 1) % FEATURES.length;
    else return;
    e.preventDefault();
    feature = FEATURES[i];
    renderFeature();
    document.getElementById("tab-" + feature).focus();
  });

  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  document.querySelectorAll("[data-lightbox]").forEach(function (el) {
    el.addEventListener("click", function () {
      var name = el.dataset.lightbox;
      lb.dataset.current = name;
      lbImg.src = shot(name);
      lbImg.alt = t("alt." + name);
      lb.showModal();
    });
  });
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.id === "lb-close") lb.close();
  });

  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  applyLang(initial);
})();
