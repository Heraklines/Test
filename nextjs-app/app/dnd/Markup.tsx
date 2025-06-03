'use client'
import React from 'react'

interface Props {
  openSettings: () => void
  quickAction: (a: string) => void
  openPanel: (p: string) => void
  toggleFabMenu: () => void
  openMapOverlay: () => void
  closePanel: (p: string) => void
  closeMapOverlay: () => void
  filterInventory: (t: string) => void
  closeSettings: () => void
}

export default function Markup({
  openSettings,
  quickAction,
  openPanel,
  toggleFabMenu,
  openMapOverlay,
  closePanel,
  closeMapOverlay,
  filterInventory,
  closeSettings,
}: Props) {
  return (
    <>
      <div className="bg-animation"></div>
      <div className="story-container">
        <div className="ambient-status">
          <div className="health-indicator">
            <span>❤️</span>
            <div className="health-bar">
              <div className="health-fill" id="health-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="location-tag" id="location-tag">
            The Yawning Portal
          </div>
          <button className="settings-btn" onClick={openSettings}>
            ⚙️
          </button>
        </div>
        <div className="story-display" id="story-display">
          <div className="story-message narration">
            <p>
              The tavern door creaks open as you step inside, immediately hit by the warmth of the crackling fireplace and the mingled scents of ale, roasted meat, and pipe smoke. The Yawning Portal is bustling with adventurers, merchants, and locals, all sharing tales of glory and danger.
            </p>
            <p>A grizzled dwarf behind the bar catches your eye and nods. This is where your adventure begins...</p>
          </div>
        </div>
        <div className="action-input-container">
          <div className="action-input-wrapper">
            <input type="text" className="action-input" id="action-input" placeholder="What do you do?" autoComplete="off" />
          </div>
        </div>
      </div>
      <div className="quick-actions" id="quick-actions">
        <button className="quick-action-btn" onClick={() => quickAction('look around')}>Look Around</button>
        <button className="quick-action-btn" onClick={() => quickAction('talk')}>Talk</button>
        <button className="quick-action-btn" onClick={() => quickAction('investigate')}>Investigate</button>
        <button className="quick-action-btn" onClick={() => quickAction('rest')}>Rest</button>
      </div>
      <div className="fab-container">
        <div className="fab-menu" id="fab-menu">
          <div className="fab-item" onClick={() => openPanel('character')}>
            <span className="fab-label">Character</span>
            <div className="fab-icon">👤</div>
          </div>
          <div className="fab-item" onClick={() => openPanel('inventory')}>
            <span className="fab-label">Inventory</span>
            <div className="fab-icon">🎒</div>
          </div>
          <div className="fab-item" onClick={openMapOverlay}>
            <span className="fab-label">Map</span>
            <div className="fab-icon">🗺️</div>
          </div>
          <div className="fab-item" onClick={() => openPanel('journal')}>
            <span className="fab-label">Journal</span>
            <div className="fab-icon">📖</div>
          </div>
        </div>
        <button className="fab" id="fab" onClick={toggleFabMenu}>
          ✨
        </button>
      </div>
      <div className="slide-panel" id="character-panel">
        <div className="panel-header">
          <h2 className="panel-title">Character</h2>
          <button className="panel-close" onClick={() => closePanel('character')}>
            ×
          </button>
        </div>
        <div className="panel-content">
          <div className="character-portrait">🦸</div>
          <h3 style={{ textAlign: 'center', fontFamily: 'Cinzel, serif', marginBottom: '1rem' }} id="character-name">
            Adventurer
          </h3>
          <div className="character-stats">
            <div className="stat-card">
              <div className="stat-name">Level</div>
              <div className="stat-value" id="level">
                1
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">Class</div>
              <div className="stat-value" id="class">
                Fighter
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">HP</div>
              <div className="stat-value" id="hp">
                10/10
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">AC</div>
              <div className="stat-value" id="ac">
                10
              </div>
            </div>
          </div>
          <div className="character-stats">
            <div className="stat-card">
              <div className="stat-name">STR</div>
              <div className="stat-value" id="str">
                10
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">DEX</div>
              <div className="stat-value" id="dex">
                10
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">CON</div>
              <div className="stat-value" id="con">
                10
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">INT</div>
              <div className="stat-value" id="int">
                10
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">WIS</div>
              <div className="stat-value" id="wis">
                10
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-name">CHA</div>
              <div className="stat-value" id="cha">
                10
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-panel right" id="inventory-panel">
        <div className="panel-header">
          <h2 className="panel-title">Inventory</h2>
          <button className="panel-close" onClick={() => closePanel('inventory')}>
            ×
          </button>
        </div>
        <div className="panel-content">
          <div className="inventory-filters">
            <button className="filter-btn active" onClick={() => filterInventory('all')}>
              All
            </button>
            <button className="filter-btn" onClick={() => filterInventory('weapon')}>
              Weapons
            </button>
            <button className="filter-btn" onClick={() => filterInventory('armor')}>
              Armor
            </button>
            <button className="filter-btn" onClick={() => filterInventory('potion')}>
              Potions
            </button>
            <button className="filter-btn" onClick={() => filterInventory('misc')}>
              Misc
            </button>
          </div>
          <div className="inventory-list" id="inventory-list"></div>
        </div>
      </div>
      <div className="slide-panel" id="journal-panel">
        <div className="panel-header">
          <h2 className="panel-title">Journal</h2>
          <button className="panel-close" onClick={() => closePanel('journal')}>
            ×
          </button>
        </div>
        <div className="panel-content">
          <div id="journal-entries">
            <h3 style={{ fontFamily: 'Cinzel, serif', color: 'var(--primary)', marginBottom: '0.5rem' }}>Quest Log</h3>
            <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(139, 69, 19, 0.1)', borderRadius: '8px' }}>
              <p>
                <strong>Main Quest:</strong> Discover your destiny
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.7)', marginTop: '0.5rem' }}>
                You&apos;ve arrived at the Yawning Portal. Your adventure begins here...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-overlay" id="map-overlay">
        <div className="map-header">
          <h3 className="panel-title">Map</h3>
          <button className="panel-close" onClick={closeMapOverlay}>
            ×
          </button>
        </div>
        <div className="map-canvas" id="map-canvas"></div>
      </div>
      <div className="settings-modal" id="settings-modal">
        <div className="settings-header">
          <h2 className="panel-title">Settings</h2>
          <button className="panel-close" onClick={closeSettings}>
            ×
          </button>
        </div>
        <div className="settings-content">
          <div className="setting-group">
            <label className="setting-label">Gemini API Key</label>
            <input type="password" className="setting-input" id="api-key" defaultValue="" />
            <small style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.8rem', display: 'block', marginTop: '0.5rem' }}>
              Your API key is stored locally
            </small>
          </div>
          <div className="setting-group">
            <label className="setting-label">Adventure Module</label>
            <select className="setting-input" id="adventure-module">
              <option value="">The Wild Sheep Chase</option>
              <option value="skyhorn-lighthouse">Secrets of Skyhorn Lighthouse</option>
              <option value="grammys-pie">Grammy&apos;s Country Apple Pie</option>
              <option value="custom">Custom Adventure</option>
            </select>
          </div>
          <div className="setting-group">
            <label className="setting-label">Character Name</label>
            <input type="text" className="setting-input" id="character-name-input" placeholder="Enter your character's name" />
          </div>
        </div>
      </div>
    </>
  )
}
