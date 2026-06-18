
(function () {
  const data = window.CHAMPIONSHIP_DATA || {};
  function esc(v) { return String(v ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'); }
  function badgeForPos(pos) { if (String(pos)==='1') return 'pos-badge pos-badge--1'; if (String(pos)==='2') return 'pos-badge pos-badge--2'; if (String(pos)==='3') return 'pos-badge pos-badge--3'; return 'pos-badge'; }
  function driverName(row) { return `<span class="driver-name"><span class="driver-name__first">${esc(row.first)}</span> <span class="driver-name__last">${esc(row.last)}</span></span>`; }
  function podium(rows, type) {
    if (!rows || rows.length < 3) return '';
    return `<div class="podium-strip">${rows.slice(0,3).map((row, idx) => {
      const cls = idx===0 ? 'podium-card podium-card--p1' : idx===1 ? 'podium-card podium-card--p2' : 'podium-card podium-card--p3';
      const extra = row.pole && type==='qualifying' ? '<span class="podium-card__badge podium-card__badge--pole">Pole</span>' : row.fl && type==='race' ? '<span class="podium-card__badge podium-card__badge--fl">VR</span>' : '';
      return `<div class="${cls}"><div class="podium-card__pos">${esc(row.pos)}</div><div class="podium-card__name">${esc(row.first + ' ' + row.last)}</div><div class="podium-card__time">${esc(row.time)}</div>${extra}</div>`;
    }).join('')}</div>`;
  }
  function qualifyingTable(rows) {
    if (!rows || !rows.length) return '<div class="empty-state"><div class="empty-state__text">Sem dados de qualificação para esta ronda.</div></div>';
    return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Pos</th><th>Piloto</th><th class="col-car">Viatura</th><th>Tempo</th><th>Gap</th></tr></thead><tbody>${rows.map(row => `<tr class="${row.status==='dnf' ? 'row--dnf' : ''}"><td class="data-table__pos"><span class="${badgeForPos(row.pos)}">${esc(row.pos)}</span></td><td>${driverName(row)} ${row.pole ? '<span class="badge-pole">P</span>' : ''}</td><td class="col-car">${esc(row.car)}</td><td class="data-table__time">${esc(row.time)}</td><td class="data-table__time">${esc(row.gap || '—')}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function raceTable(rows) {
    if (!rows || !rows.length) return '<div class="empty-state"><div class="empty-state__text">Sem dados de corrida para esta ronda.</div></div>';
    return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Pos</th><th>Piloto</th><th class="col-car">Viatura</th><th>Tempo / Gap</th><th>Boxes</th><th>Pts</th></tr></thead><tbody>${rows.map(row => `<tr class="${row.status==='dnf' ? 'row--dnf' : row.status==='dsq' ? 'row--dsq' : ''}"><td class="data-table__pos"><span class="${badgeForPos(row.pos)}">${esc(row.pos)}</span></td><td>${driverName(row)} ${row.pole ? '<span class="badge-pole">P</span>' : ''}${row.fl ? '<span class="badge-fl">VR</span>' : ''}${row.penalty ? `<span class="badge-penalty">${esc(row.penalty)}</span>` : ''}</td><td class="col-car">${esc(row.car)}</td><td class="data-table__time">${esc(row.time)}</td><td>${esc(row.pits || '—')}</td><td class="data-table__pts">${esc(row.pts)}</td></tr>`).join('')}</tbody></table></div>`;
  }

  function renderResultsPage() {
    const root = document.getElementById('resultsApp');
    if (!root || !data.results) return;
    const rounds = data.results.rounds || [];
    let activeRound = rounds.find(r => r.hasResults) || rounds[0];
    let activeSession = 'race';
    function draw() {
      root.innerHTML = `
        <div class="editor-note">Editar apenas o ficheiro <code>championship-data.js</code>. Cada ronda está num bloco próprio em <code>results.rounds[]</code>.</div>
        <div class="round-selector" role="group" aria-label="Selecionar ronda">${rounds.map(r => `<button class="round-pill ${r.round===activeRound.round ? 'round-pill--active' : ''} ${!r.hasResults ? 'round-pill--disabled' : ''}" data-round="${r.round}" ${!r.hasResults ? 'disabled' : ''}>R${r.round} · ${esc(r.shortName)}</button>`).join('')}</div>
        <div class="round-context"><div class="round-context__info"><span class="round-context__badge">${esc(activeRound.badge)}</span><span class="round-context__detail">${esc(activeRound.date)} · ${esc(activeRound.detail)}</span></div><div class="round-context__car">${esc(activeRound.car)}</div></div>
        ${activeRound.hasResults ? `
          <div class="session-tabs" role="tablist" aria-label="Tipo de sessão"><button class="session-tab ${activeSession==='qualifying' ? 'session-tab--active' : ''}" data-session="qualifying">Qualificação</button><button class="session-tab ${activeSession==='race' ? 'session-tab--active' : ''}" data-session="race">Corrida</button></div>
          <div class="results-layout section-stack">${activeSession==='qualifying' ? podium(activeRound.qualifying, 'qualifying') + qualifyingTable(activeRound.qualifying) : `<div class="race-stats"><div class="race-stat"><span class="race-stat__label">Voltas Completas</span><span class="race-stat__value">${esc(activeRound.raceStats?.laps || '—')}</span></div><div class="race-stat"><span class="race-stat__label">Paragens nas Boxes</span><span class="race-stat__value">${esc(activeRound.raceStats?.pits || '—')}</span></div><div class="race-stat"><span class="race-stat__label">Volta Mais Rápida</span><span class="race-stat__value race-stat__value--fl">${esc(activeRound.raceStats?.fastestLap || '—')}</span></div></div>` + podium(activeRound.race, 'race') + raceTable(activeRound.race) + `<div class="race-footnotes"><p><span class="badge-pole">P</span> Pole Position (+1 ponto)</p><p><span class="badge-fl">VR</span> Volta Mais Rápida (+1 ponto, apenas Top 10)</p><p><span class="badge-penalty">−3</span> Penalização do Colégio de Comissários</p><p><strong>Regra dos 80%:</strong> Pilotos que não cumpram 80% da distância do vencedor recebem apenas 1 ponto de presença.</p></div>`}</div>` : `<div class="empty-state"><div class="empty-state__icon">⏱️</div><div class="empty-state__text">Resultados em breve — esta ronda ainda não tem dados publicados.</div></div>`}
      `;
      root.querySelectorAll('.round-pill[data-round]').forEach(btn => btn.addEventListener('click', () => { const target = rounds.find(r => r.round === Number(btn.dataset.round)); if (target) { activeRound = target; activeSession = 'race'; draw(); } }));
      root.querySelectorAll('.session-tab[data-session]').forEach(btn => btn.addEventListener('click', () => { activeSession = btn.dataset.session; draw(); }));
    }
    draw();
  }

  function renderStandingsPage() {
    const root = document.getElementById('standingsApp');
    if (!root || !data.standings) return;
    const st = data.standings;
    const roundHeaders = ['R1','R2','R3','R4','R5','R6','R7'];
    root.innerHTML = `
      <div class="editor-note">Editar apenas o ficheiro <code>championship-data.js</code>. A classificação vive em <code>standings.drivers[]</code> e o destaque do líder em <code>standings.leader</code>.</div>
      <div class="leader-card"><div class="leader-card__icon">🏆</div><div class="leader-card__content"><div class="leader-card__label">Líder do Campeonato</div><div class="leader-card__name">${esc(st.leader.first + ' ' + st.leader.last)}</div><div class="leader-card__details">${esc(st.leader.cars)}</div><div class="leader-card__details">${esc(st.leader.stats)}</div></div><div class="leader-card__points"><div class="leader-card__pts-value">${esc(st.leader.points)}</div><div class="leader-card__pts-label">pontos</div></div></div>
      <div class="table-wrap standings-layout"><table class="data-table standings-table"><thead><tr><th>Pos</th><th>+/−</th><th>Piloto</th>${roundHeaders.map(h => `<th class="round-col">${h}</th>`).join('')}<th>Total</th><th><span class="sr-only">Expandir</span></th></tr></thead><tbody>${st.drivers.map(driver => `
        <tr class="standings-row"><td><span class="${driver.pos===1 ? 'pos-badge pos-badge--1' : driver.pos===2 ? 'pos-badge pos-badge--2' : driver.pos===3 ? 'pos-badge pos-badge--3' : 'pos-badge'}">${esc(driver.pos)}</span></td><td><span class="change-badge change-badge--${esc(driver.changeType)}">${esc(driver.change)}</span></td><td>${driverName(driver)} ${driver.penalty ? `<span class="badge-penalty">${esc(driver.penalty)}</span>` : ''}</td>${driver.rounds.map((pts, idx) => `<td class="round-col ${idx >= st.afterRound ? 'score--dns' : ''}">${esc(pts)}</td>`).join('')}<td class="standings-table__total">${esc(driver.total)}</td><td><button class="expand-btn" data-expand="${esc(driver.driverId)}" aria-expanded="false"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></button></td></tr>
        <tr class="hidden" data-expand-row="${esc(driver.driverId)}"><td colspan="11"><div class="expand-rounds">${driver.rounds.map((pts, idx) => `<div class="expand-round ${idx >= st.afterRound ? 'expand-round--future' : ''}"><div class="expand-round__label">R${idx+1}</div><div class="expand-round__pts">${esc(pts)}</div></div>`).join('')}</div></td></tr>`).join('')}</tbody></table></div>
      <div class="standings-footnotes"><div class="standings-footnote"><strong>Estado:</strong> após Ronda ${esc(st.afterRound)} de ${esc(st.totalRounds)} · contam os melhores ${esc(st.bestOf)} resultados.</div><div class="standings-footnote"><span class="badge-pole">*</span> Pontos bónus incluídos (Pole / Volta Rápida).</div><div class="standings-footnote"><span class="badge-penalty">−3</span> Penalização aplicada pelo Colégio de Comissários.</div><div class="standings-footnote"><strong>Desempate:</strong> em caso de igualdade pontual, decide o resultado em pista na Ronda 7.</div></div>
    `;
    root.querySelectorAll('.expand-btn[data-expand]').forEach(btn => btn.addEventListener('click', () => { const row = root.querySelector(`[data-expand-row="${btn.dataset.expand}"]`); if (!row) return; const open = row.classList.contains('hidden'); row.classList.toggle('hidden', !open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); const svg = btn.querySelector('svg'); if (svg) svg.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)'; }));
  }

  document.addEventListener('DOMContentLoaded', function () { renderResultsPage(); renderStandingsPage(); });
})();
