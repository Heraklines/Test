export const markup = `
    <div class="bg-animation"></div>
    <div class="story-container">
        <div class="ambient-status">
            <div class="health-indicator">
                <span>❤️</span>
                <div class="health-bar">
                    <div class="health-fill" id="health-fill" style="width: 100%"></div>
                </div>
            </div>
            <div class="location-tag" id="location-tag">The Yawning Portal</div>
            <button class="settings-btn" onclick="openSettings()">⚙️</button>
        </div>
        <div class="story-display" id="story-display">
            <div class="story-message narration">
                <p>The tavern door creaks open as you step inside, immediately hit by the warmth of the crackling fireplace and the mingled scents of ale, roasted meat, and pipe smoke. The Yawning Portal is bustling with adventurers, merchants, and locals, all sharing tales of glory and danger.</p>
                <p>A grizzled dwarf behind the bar catches your eye and nods. This is where your adventure begins...</p>
            </div>
        </div>
        <div class="action-input-container">
            <div class="action-input-wrapper">
                <input type="text" class="action-input" id="action-input" placeholder="What do you do?" autocomplete="off">
            </div>
        </div>
    </div>
    <div class="quick-actions" id="quick-actions">
        <button class="quick-action-btn" onclick="quickAction('look around')">Look Around</button>
        <button class="quick-action-btn" onclick="quickAction('talk')">Talk</button>
        <button class="quick-action-btn" onclick="quickAction('investigate')">Investigate</button>
        <button class="quick-action-btn" onclick="quickAction('rest')">Rest</button>
    </div>
    <div class="fab-container">
        <div class="fab-menu" id="fab-menu">
            <div class="fab-item" onclick="openPanel('character')">
                <span class="fab-label">Character</span>
                <div class="fab-icon">👤</div>
            </div>
            <div class="fab-item" onclick="openPanel('inventory')">
                <span class="fab-label">Inventory</span>
                <div class="fab-icon">🎒</div>
            </div>
            <div class="fab-item" onclick="openMapOverlay()">
                <span class="fab-label">Map</span>
                <div class="fab-icon">🗺️</div>
            </div>
            <div class="fab-item" onclick="openPanel('journal')">
                <span class="fab-label">Journal</span>
                <div class="fab-icon">📖</div>
            </div>
        </div>
        <button class="fab" id="fab" onclick="toggleFabMenu()">✨</button>
    </div>
    <div class="slide-panel" id="character-panel">
        <div class="panel-header">
            <h2 class="panel-title">Character</h2>
            <button class="panel-close" onclick="closePanel('character')">×</button>
        </div>
        <div class="panel-content">
            <div class="character-portrait">🦸</div>
            <h3 style="text-align: center; font-family: 'Cinzel', serif; margin-bottom: 1rem;" id="character-name">Adventurer</h3>
            <div class="character-stats">
                <div class="stat-card"><div class="stat-name">Level</div><div class="stat-value" id="level">1</div></div>
                <div class="stat-card"><div class="stat-name">Class</div><div class="stat-value" id="class">Fighter</div></div>
                <div class="stat-card"><div class="stat-name">HP</div><div class="stat-value" id="hp">10/10</div></div>
                <div class="stat-card"><div class="stat-name">AC</div><div class="stat-value" id="ac">10</div></div>
            </div>
            <div class="character-stats">
                <div class="stat-card"><div class="stat-name">STR</div><div class="stat-value" id="str">10</div></div>
                <div class="stat-card"><div class="stat-name">DEX</div><div class="stat-value" id="dex">10</div></div>
                <div class="stat-card"><div class="stat-name">CON</div><div class="stat-value" id="con">10</div></div>
                <div class="stat-card"><div class="stat-name">INT</div><div class="stat-value" id="int">10</div></div>
                <div class="stat-card"><div class="stat-name">WIS</div><div class="stat-value" id="wis">10</div></div>
                <div class="stat-card"><div class="stat-name">CHA</div><div class="stat-value" id="cha">10</div></div>
            </div>
        </div>
    </div>
    <div class="slide-panel right" id="inventory-panel">
        <div class="panel-header">
            <h2 class="panel-title">Inventory</h2>
            <button class="panel-close" onclick="closePanel('inventory')">×</button>
        </div>
        <div class="panel-content">
            <div class="inventory-filters">
                <button class="filter-btn active" onclick="filterInventory('all')">All</button>
                <button class="filter-btn" onclick="filterInventory('weapon')">Weapons</button>
                <button class="filter-btn" onclick="filterInventory('armor')">Armor</button>
                <button class="filter-btn" onclick="filterInventory('potion')">Potions</button>
                <button class="filter-btn" onclick="filterInventory('misc')">Misc</button>
            </div>
            <div class="inventory-list" id="inventory-list"></div>
        </div>
    </div>
    <div class="slide-panel" id="journal-panel">
        <div class="panel-header">
            <h2 class="panel-title">Journal</h2>
            <button class="panel-close" onclick="closePanel('journal')">×</button>
        </div>
        <div class="panel-content">
            <div id="journal-entries">
                <h3 style="font-family: 'Cinzel', serif; color: var(--primary); margin-bottom: 0.5rem;">Quest Log</h3>
                <div style="margin-bottom: 1rem; padding: 1rem; background: rgba(139, 69, 19, 0.1); border-radius: 8px;">
                    <p><strong>Main Quest:</strong> Discover your destiny</p>
                    <p style="font-size: 0.9rem; color: rgba(0,0,0,0.7); margin-top: 0.5rem;">You've arrived at the Yawning Portal. Your adventure begins here...</p>
                </div>
            </div>
        </div>
    </div>
    <div class="map-overlay" id="map-overlay">
        <div class="map-header"><h3 class="panel-title">Map</h3><button class="panel-close" onclick="closeMapOverlay()">×</button></div>
        <div class="map-canvas" id="map-canvas"></div>
    </div>
    <div class="settings-modal" id="settings-modal">
        <div class="settings-header"><h2 class="panel-title">Settings</h2><button class="panel-close" onclick="closeSettings()">×</button></div>
        <div class="settings-content">
            <div class="setting-group"><label class="setting-label">Gemini API Key</label><input type="password" class="setting-input" id="api-key" value=""><small style="color: rgba(0,0,0,0.6); font-size: 0.8rem; display: block; margin-top: 0.5rem;">Your API key is stored locally</small></div>
            <div class="setting-group"><label class="setting-label">Adventure Module</label><select class="setting-input" id="adventure-module"><option value="">The Wild Sheep Chase</option><option value="skyhorn-lighthouse">Secrets of Skyhorn Lighthouse</option><option value="grammys-pie">Grammy's Country Apple Pie</option><option value="custom">Custom Adventure</option></select></div>
            <div class="setting-group"><label class="setting-label">Character Name</label><input type="text" class="setting-input" id="character-name-input" placeholder="Enter your character's name"></div>
        </div>
    </div>
`;
