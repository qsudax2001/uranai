/**
 * 【司令塔】 ノートと機械を順番に呼び出して起動する
 */
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.head.appendChild(script);
    });
}

// 1冊目のノートと機械を読み込んでから、ゲームを起動する
Promise.all([
    loadScript('data-level1.js'),
    loadScript('slot-engine.js')
]).then(() => {
    const db = new IdiomDatabase();
    const points = new PointSystem();
    const game = new FortuneGame(db);
    const ui = new UIManager(game, points);
});
