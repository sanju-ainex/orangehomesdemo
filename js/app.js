/**
 * Orange Homes - Master Application Controller
 * Handles Design Filtering, Floor Plan Modals, Build Tracker Engine,
 * Cost Estimator, Mortgage Calculator, 3D Design Wizard, and Virtual Tour.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrollEngine();
  initFluidCanvas();
  initLiquidCursorAndSpotlight();
  initWaterRippleEffect();
  initNavbar();
  initHomeDesignCatalogue();
  initHouseAndLandPackages();
  initConstructionTracker();
  initBuildCostEstimator();
  initMortgageCalculator();
  initCustomDesignWizard();
  initVirtualTour();
  initSuburbsDirectory();
  initArticles();
  initTestimonials();
  initFaqAccordion();
  initModals();
  initScrollAnimations();
});

/* ==========================================================================
   ULTRA-SMOOTH MOMENTUM LIQUID SCROLL ENGINE
   ========================================================================== */
function initSmoothScrollEngine() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      smoothTouch: false,
      syncTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window.lenisInstance = lenis;

    lenis.on('scroll', (e) => {
      const header = document.querySelector('.site-header');
      if (header) {
        if (e.scroll > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });
  }
}

/* ==========================================================================
   SCROLL REVEAL & CARD MICRO-ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .design-card, .why-card, .suburb-card, .testimonial-card');
  revealElements.forEach(el => {
    el.classList.add('is-visible');
  });
}

window.refreshScrollAnimations = function() {
  initScrollAnimations();
};

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER CONTROLLER
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerClose = document.querySelector('.drawer-close-btn');

  // Sticky Scroll Shadow (Throttled with rAF)
  let headerTicking = false;
  window.addEventListener('scroll', () => {
    if (!headerTicking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }
        headerTicking = false;
      });
      headerTicking = true;
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Smooth scroll for all hash links with sticky header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          if (mobileDrawer?.classList.contains('open')) {
            mobileDrawer.classList.remove('open');
            document.body.style.overflow = '';
          }
          const headerOffset = 80;
          if (window.lenisInstance) {
            window.lenisInstance.scrollTo(targetEl, { offset: -headerOffset, duration: 1.0 });
          } else {
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });
}

/* ==========================================================================
   2. HOME DESIGN CATALOGUE & FILTER ENGINE
   ========================================================================== */
function initHomeDesignCatalogue() {
  const grid = document.getElementById('homeDesignsGrid');
  const storeyFilter = document.getElementById('filterStorey');
  const bedsFilter = document.getElementById('filterBeds');
  const bathsFilter = document.getElementById('filterBaths');
  const sqSlider = document.getElementById('filterSqSlider');
  const sqDisplay = document.getElementById('filterSqVal');
  const searchInput = document.getElementById('filterSearch');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const resultCount = document.getElementById('designResultCount');

  if (!grid || !window.ORANGE_DATA) return;

  const ITEMS_PER_PAGE = 6;
  let currentPage = 1;

  function renderDesigns() {
    const storeyVal = storeyFilter?.value || 'all';
    const bedsVal = bedsFilter?.value || 'all';
    const bathsVal = bathsFilter?.value || 'all';
    const maxSq = parseInt(sqSlider?.value || '70', 10);
    const searchVal = (searchInput?.value || '').toLowerCase().trim();

    const filtered = window.ORANGE_DATA.homeDesigns.filter(item => {
      // Storeys
      if (storeyVal !== 'all' && item.category !== storeyVal && item.storeys !== storeyVal) {
        return false;
      }
      // Bedrooms
      if (bedsVal !== 'all') {
        const b = parseInt(bedsVal, 10);
        if (b === 5 && item.beds < 5) return false;
        if (b !== 5 && item.beds !== b) return false;
      }
      // Bathrooms
      if (bathsVal !== 'all') {
        const ba = parseInt(bathsVal, 10);
        if (ba === 4 && item.baths < 4) return false;
        if (ba !== 4 && Math.floor(item.baths) !== ba) return false;
      }
      // SQ Slider
      if (item.sizeSQ > maxSq) {
        return false;
      }
      // Search
      if (searchVal) {
        const matches = item.name.toLowerCase().includes(searchVal) ||
                        item.description.toLowerCase().includes(searchVal) ||
                        item.category.toLowerCase().includes(searchVal);
        if (!matches) return false;
      }
      return true;
    });

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
    if (currentPage > totalPages) {
      currentPage = 1;
    }

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const pagedItems = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    if (resultCount) {
      if (filtered.length === 0) {
        resultCount.textContent = `No matching luxury home designs found`;
      } else {
        const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, filtered.length);
        resultCount.textContent = `Showing ${startIdx + 1}–${endIdx} of ${filtered.length} luxury designs (Page ${currentPage} of ${totalPages})`;
      }
    }

    const paginationEl = document.getElementById('designsPagination');

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-dark-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-dark);">
          <i class="fa-solid fa-house-chimney-crack text-orange" style="font-size: 3rem; margin-bottom: 16px;"></i>
          <h3>No Home Designs Matched Your Exact Criteria</h3>
          <p class="text-muted" style="margin: 8px 0 20px;">Try adjusting your bedroom, bathroom, or square meter range.</p>
          <button class="btn btn-primary btn-sm" onclick="resetAllFilters()">Reset All Filters</button>
        </div>
      `;
      if (paginationEl) paginationEl.innerHTML = '';
      return;
    }

    grid.innerHTML = pagedItems.map(item => `
      <div class="design-card" data-id="${item.id}">
        <div class="card-media">
          <img src="${item.image}" alt="${item.name} Home Design Facade" loading="lazy">
          <div class="card-badge badge-orange">${item.badge}</div>
          <div class="card-size-pill">${item.sizeSQ} SQ</div>
        </div>
        <div class="card-body">
          <div class="card-category">${item.category} • ${item.storeys}</div>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.description}</p>
          
          <div class="card-specs">
            <div class="spec-item">
              <i class="fa-solid fa-bed"></i>
              <div class="spec-val">${item.beds}</div>
              <div class="spec-lbl">Beds</div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-bath"></i>
              <div class="spec-val">${item.baths}</div>
              <div class="spec-lbl">Baths</div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-car"></i>
              <div class="spec-val">${item.garages}</div>
              <div class="spec-lbl">Cars</div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-ruler-combined"></i>
              <div class="spec-val">${item.sizeM2}</div>
              <div class="spec-lbl">m² Area</div>
            </div>
          </div>

          <div class="card-footer">
            <div class="card-price">
              Guide Price From
              <span>${item.priceFrom}</span>
            </div>
            <a href="design-detail.html?id=${item.id}" class="btn btn-primary btn-sm">
              Explore Design <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
    attachCardSpotlights();

    // Render Pagination Controls
    if (paginationEl) {
      if (totalPages <= 1) {
        paginationEl.innerHTML = '';
      } else {
        let buttonsHtml = `
          <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToDesignPage(${currentPage - 1})" aria-label="Previous Page">
            <i class="fa-solid fa-chevron-left"></i> Prev
          </button>
        `;

        for (let p = 1; p <= totalPages; p++) {
          buttonsHtml += `
            <button class="pagination-btn ${p === currentPage ? 'active' : ''}" onclick="goToDesignPage(${p})">
              ${p}
            </button>
          `;
        }

        buttonsHtml += `
          <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToDesignPage(${currentPage + 1})" aria-label="Next Page">
            Next <i class="fa-solid fa-chevron-right"></i>
          </button>
        `;

        paginationEl.innerHTML = buttonsHtml;
      }
    }
  }

  window.goToDesignPage = function(page) {
    currentPage = page;
    renderDesigns();
    const designsSection = document.getElementById('home-designs');
    if (designsSection) {
      const topOffset = designsSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // Bind Filter Events
  function handleFilterChange() {
    currentPage = 1;
    renderDesigns();
  }

  storeyFilter?.addEventListener('change', handleFilterChange);
  bedsFilter?.addEventListener('change', handleFilterChange);
  bathsFilter?.addEventListener('change', handleFilterChange);
  searchInput?.addEventListener('input', handleFilterChange);

  if (sqSlider && sqDisplay) {
    sqSlider.addEventListener('input', (e) => {
      sqDisplay.textContent = `Up to ${e.target.value} SQ`;
      handleFilterChange();
    });
  }

  window.resetAllFilters = function() {
    currentPage = 1;
    if (storeyFilter) storeyFilter.value = 'all';
    if (bedsFilter) bedsFilter.value = 'all';
    if (bathsFilter) bathsFilter.value = 'all';
    if (sqSlider) sqSlider.value = '70';
    if (sqDisplay) sqDisplay.textContent = 'Up to 70 SQ';
    if (searchInput) searchInput.value = '';
    renderDesigns();
  };

  resetBtn?.addEventListener('click', window.resetAllFilters);

  // Quick Finder from Hero
  const quickFinderForm = document.getElementById('quickFinderForm');
  if (quickFinderForm) {
    quickFinderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const heroStorey = document.getElementById('heroStoreySelect')?.value;
      const heroBeds = document.getElementById('heroBedsSelect')?.value;
      if (storeyFilter && heroStorey) storeyFilter.value = heroStorey;
      if (bedsFilter && heroBeds) bedsFilter.value = heroBeds;
      renderDesigns();
      document.getElementById('home-designs')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  renderDesigns();
}

/* ==========================================================================
   3. HOUSE DETAIL & MULTI-FLOOR PLAN MODAL
   ========================================================================== */
window.openDesignModal = function(designId) {
  const modal = document.getElementById('designDetailModal');
  if (!modal || !window.ORANGE_DATA) return;

  const design = window.ORANGE_DATA.homeDesigns.find(d => d.id === designId);
  if (!design) return;

  document.getElementById('modalDesignTitle').textContent = `${design.name} - ${design.sizeSQ} SQ Luxury Custom Home`;
  document.getElementById('modalDesignCategory').textContent = `${design.category} | ${design.storeys} | Min Lot Width: ${design.minBlockWidth}m`;
  document.getElementById('modalDesignPrice').textContent = `Build Guide: ${design.priceFrom}`;

  // Overview info
  document.getElementById('modalDesignDesc').textContent = design.description;
  
  // Features list
  const featuresList = document.getElementById('modalFeaturesList');
  if (featuresList) {
    featuresList.innerHTML = design.features.map(f => `
      <li style="display: flex; align-items: center; gap: 8px; color: var(--text-light); font-size: 0.9rem;">
        <i class="fa-solid fa-circle-check text-orange"></i> ${f}
      </li>
    `).join('');
  }

  // Facades
  const facadesList = document.getElementById('modalFacadesList');
  if (facadesList) {
    facadesList.innerHTML = design.facades.map(fac => `
      <div style="background: var(--bg-dark-elevated); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-dark);">
        <strong style="color: var(--primary-orange); display: block; margin-bottom: 4px;">${fac.name}</strong>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${fac.desc}</p>
      </div>
    `).join('');
  }

  // Setup Floor Plan Tabs
  setupModalFloorplans(design);

  // Open Modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function setupModalFloorplans(design) {
  const tabsContainer = document.getElementById('modalFloorplanTabs');
  const canvas = document.getElementById('modalFloorplanCanvas');
  const dimTable = document.getElementById('modalDimensionTable');

  if (!tabsContainer || !canvas) return;

  const levels = Object.keys(design.floorplans);
  tabsContainer.innerHTML = levels.map((lvlKey, idx) => `
    <button class="level-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchFloorplanLevel('${design.id}', '${lvlKey}')">
      ${design.floorplans[lvlKey].title}
    </button>
  `).join('');

  // Default to first level
  renderFloorplanLevel(design, levels[0]);
}

window.switchFloorplanLevel = function(designId, levelKey) {
  const design = window.ORANGE_DATA.homeDesigns.find(d => d.id === designId);
  if (!design || !design.floorplans[levelKey]) return;

  document.querySelectorAll('.level-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === design.floorplans[levelKey].title);
  });

  renderFloorplanLevel(design, levelKey);
};

function renderFloorplanLevel(design, levelKey) {
  const canvas = document.getElementById('modalFloorplanCanvas');
  const dimTable = document.getElementById('modalDimensionTable');
  const levelData = design.floorplans[levelKey];

  if (!levelData) return;

  canvas.innerHTML = `
    <div style="margin-bottom: 12px; color: var(--text-muted); font-size: 0.88rem;">${levelData.desc}</div>
    ${levelData.svgMap}
  `;

  if (dimTable) {
    dimTable.innerHTML = `
      <thead>
        <tr>
          <th>Room / Space Area</th>
          <th>Metric Dimensions (L x W)</th>
        </tr>
      </thead>
      <tbody>
        ${levelData.dimensions.map(d => `
          <tr>
            <td><strong style="color: var(--text-white);">${d.room}</strong></td>
            <td style="color: var(--primary-orange); font-family: var(--font-heading); font-weight: 700;">${d.size}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
  }
}

/* ==========================================================================
   4. HOUSE & LAND PACKAGES FOR SALE
   ========================================================================== */
function initHouseAndLandPackages() {
  const grid = document.getElementById('packagesGrid');
  const suburbFilter = document.getElementById('pkgSuburbFilter');
  if (!grid || !window.ORANGE_DATA) return;

  function renderPackages() {
    const filterVal = suburbFilter?.value || 'all';
    const packages = window.ORANGE_DATA.houseAndLandPackages.filter(p => {
      if (filterVal === 'all') return true;
      return p.suburb.toLowerCase() === filterVal.toLowerCase();
    });

    grid.innerHTML = packages.map(pkg => `
      <div class="design-card">
        <div class="card-media">
          <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
          <div class="card-badge badge-orange">${pkg.status}</div>
          <div class="card-size-pill">${pkg.price}</div>
        </div>
        <div class="card-body">
          <div class="card-category"><i class="fa-solid fa-location-dot"></i> ${pkg.suburb}, ${pkg.region}</div>
          <h3 class="card-title" style="font-size: 1.3rem;">${pkg.title}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">${pkg.address}</p>

          <div class="card-specs">
            <div class="spec-item">
              <i class="fa-solid fa-bed"></i>
              <div class="spec-val">${pkg.beds}</div>
              <div class="spec-lbl">Beds</div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-bath"></i>
              <div class="spec-val">${pkg.baths}</div>
              <div class="spec-lbl">Baths</div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-car"></i>
              <div class="spec-val">${pkg.cars}</div>
              <div class="spec-lbl">Cars</div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-vector-square"></i>
              <div class="spec-val">${pkg.landSize}</div>
              <div class="spec-lbl">Land</div>
            </div>
          </div>

          <div class="card-footer">
            <span class="badge-dark"><i class="fa-solid fa-shield-check text-orange"></i> Full Turnkey</span>
            <button class="btn btn-primary btn-sm" onclick="openContactModal('Enquiry: ${pkg.title}')">
              Enquire Package
            </button>
          </div>
        </div>
      </div>
    `).join('');
    attachCardSpotlights();
  }

  suburbFilter?.addEventListener('change', renderPackages);
  renderPackages();
}

/* ==========================================================================
   5. "ORANGE APP" LIVE CONSTRUCTION TRACKER DEMO (Signature Feature)
   ========================================================================== */
function initConstructionTracker() {
  const selectorContainer = document.getElementById('trackerDemoSelectBar');
  const progressCircle = document.getElementById('trackerProgressVal');
  const clientName = document.getElementById('trackerClientName');
  const houseDesign = document.getElementById('trackerHouseDesign');
  const lotLocation = document.getElementById('trackerLotLocation');
  const supervisorName = document.getElementById('trackerSupervisor');
  const estDate = document.getElementById('trackerEstDate');
  const stagesList = document.getElementById('trackerStagesList');
  const photosGrid = document.getElementById('trackerPhotosGrid');

  if (!selectorContainer || !window.ORANGE_DATA) return;

  const builds = window.ORANGE_DATA.demoBuilds;
  let activeBuild = builds[0];

  function renderTracker() {
    // Selector tabs
    selectorContainer.innerHTML = builds.map((b, idx) => `
      <button class="tracker-btn-select ${b.id === activeBuild.id ? 'active' : ''}" onclick="selectTrackerBuild('${b.id}')">
        <i class="fa-solid fa-helmet-safety"></i> ${b.clientName} (${b.houseDesign.split(' ')[0]})
      </button>
    `).join('');

    // Header info
    if (progressCircle) progressCircle.textContent = `${activeBuild.overallProgress}%`;
    if (clientName) clientName.textContent = activeBuild.clientName;
    if (houseDesign) houseDesign.textContent = activeBuild.houseDesign;
    if (lotLocation) lotLocation.textContent = activeBuild.lotLocation;
    if (supervisorName) supervisorName.textContent = activeBuild.supervisor;
    if (estDate) estDate.textContent = activeBuild.estCompletionDate;

    // Stages Timeline
    if (stagesList) {
      stagesList.innerHTML = activeBuild.stages.map((st, idx) => {
        let statusClass = 'pending';
        let badge = '<span class="stage-badge badge-pending">Upcoming</span>';
        let icon = '<i class="fa-regular fa-clock"></i>';

        if (st.status.includes('Completed')) {
          statusClass = 'completed';
          badge = `<span class="stage-badge badge-done"><i class="fa-solid fa-check"></i> ${st.date}</span>`;
          icon = '<i class="fa-solid fa-check"></i>';
        } else if (st.status.includes('Progress')) {
          statusClass = 'in-progress active';
          badge = `<span class="stage-badge badge-active">${st.status}</span>`;
          icon = '<i class="fa-solid fa-person-digging"></i>';
        }

        return `
          <div class="stage-item ${statusClass}" onclick="inspectStageNote('${activeBuild.id}', ${idx})">
            <div class="stage-icon">${icon}</div>
            <div class="stage-content">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                <h5 class="stage-title">${st.name}</h5>
                ${badge}
              </div>
              <p class="stage-desc">${st.note}</p>
            </div>
          </div>
        `;
      }).join('');
    }

    // Photos
    if (photosGrid && activeBuild.recentPhotos) {
      photosGrid.innerHTML = activeBuild.recentPhotos.map(ph => `
        <div style="position: relative; border-radius: var(--radius-sm); overflow: hidden; aspect-ratio: 16/10; border: 1px solid var(--border-dark);">
          <img src="${ph.img}" alt="${ph.title}" style="width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.8); padding: 8px 12px; font-size: 0.78rem;">
            <strong>${ph.title}</strong> • <span class="text-orange">${ph.date}</span>
          </div>
        </div>
      `).join('');
    }
  }

  window.selectTrackerBuild = function(buildId) {
    const found = builds.find(b => b.id === buildId);
    if (found) {
      activeBuild = found;
      renderTracker();
    }
  };

  window.inspectStageNote = function(buildId, stageIdx) {
    const build = builds.find(b => b.id === buildId);
    if (build && build.stages[stageIdx]) {
      showToast(`Stage Note: ${build.stages[stageIdx].note}`);
    }
  };

  renderTracker();
}

/* ==========================================================================
   6. INTERACTIVE BUILD COST ESTIMATOR
   ========================================================================== */
function initBuildCostEstimator() {
  const typeTiles = document.querySelectorAll('[data-estimate-type]');
  const sizeTiles = document.querySelectorAll('[data-estimate-size]');
  const slopeTiles = document.querySelectorAll('[data-estimate-slope]');
  const finishTiles = document.querySelectorAll('[data-estimate-finish]');
  const demoCheckbox = document.getElementById('estimatorKnockdownCheckbox');
  const priceDisplay = document.getElementById('estimatorTotalPrice');
  const basePriceEl = document.getElementById('estBreakdownBase');
  const siteCostEl = document.getElementById('estBreakdownSite');
  const finishCostEl = document.getElementById('estBreakdownFinishes');
  const demoCostEl = document.getElementById('estBreakdownDemolition');

  let selectedType = 'double';
  let selectedSize = 45;
  let selectedSlope = 0; // Flat
  let selectedFinish = 'luxury'; // luxury tier

  function calculateEstimate() {
    let ratePerSq = 13500; // Base rate per SQ
    if (selectedType === 'single') ratePerSq = 12800;
    if (selectedType === 'duplex') ratePerSq = 14200;
    if (selectedType === 'acreage') ratePerSq = 14800;

    const baseCost = selectedSize * ratePerSq;

    // Site slope surcharge
    let siteWorks = 22000;
    if (selectedSlope === 1) siteWorks = 52000; // Moderate fall 1-2m
    if (selectedSlope === 2) siteWorks = 88000; // Steep fall 2-4m+

    // Finish Tier
    let finishUpgrade = 0;
    if (selectedFinish === 'luxury') finishUpgrade = selectedSize * 1500;
    if (selectedFinish === 'diamond') finishUpgrade = selectedSize * 3200;

    // Knockdown Demolition
    let demoCost = demoCheckbox?.checked ? 28000 : 0;

    const total = baseCost + siteWorks + finishUpgrade + demoCost;

    if (priceDisplay) {
      priceDisplay.textContent = `$${total.toLocaleString('en-AU')}`;
    }
    if (basePriceEl) basePriceEl.textContent = `$${baseCost.toLocaleString('en-AU')}`;
    if (siteCostEl) siteCostEl.textContent = `$${siteWorks.toLocaleString('en-AU')}`;
    if (finishCostEl) finishCostEl.textContent = `$${finishUpgrade.toLocaleString('en-AU')}`;
    if (demoCostEl) demoCostEl.textContent = demoCost > 0 ? `$${demoCost.toLocaleString('en-AU')}` : '$0 (New Land)';
  }

  function bindTiles(tiles, callback) {
    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        tiles.forEach(t => t.classList.remove('selected'));
        tile.classList.add('selected');
        callback(tile);
        calculateEstimate();
      });
    });
  }

  bindTiles(typeTiles, (tile) => { selectedType = tile.dataset.estimateType; });
  bindTiles(sizeTiles, (tile) => { selectedSize = parseInt(tile.dataset.estimateSize, 10); });
  bindTiles(slopeTiles, (tile) => { selectedSlope = parseInt(tile.dataset.estimateSlope, 10); });
  bindTiles(finishTiles, (tile) => { selectedFinish = tile.dataset.estimateFinish; });

  demoCheckbox?.addEventListener('change', calculateEstimate);
  calculateEstimate();
}

/* ==========================================================================
   7. MORTGAGE & REPAYMENT CALCULATOR
   ========================================================================== */
function initMortgageCalculator() {
  const loanSlider = document.getElementById('mortgageLoanSlider');
  if (!loanSlider) return;

  const loanVal = document.getElementById('mortgageLoanVal');
  const rateSlider = document.getElementById('mortgageRateSlider');
  const rateVal = document.getElementById('mortgageRateVal');
  const termSlider = document.getElementById('mortgageTermSlider');
  const termVal = document.getElementById('mortgageTermVal');
  const repaymentDisplay = document.getElementById('mortgageRepaymentDisplay');
  const freqBtns = document.querySelectorAll('.freq-btn');

  let currentFreq = 'monthly';

  function calculateMortgage() {
    const P = parseFloat(loanSlider?.value || '800000');
    const annualRate = parseFloat(rateSlider?.value || '5.8') / 100;
    const years = parseInt(termSlider?.value || '30', 10);

    if (loanVal) loanVal.textContent = `$${P.toLocaleString('en-AU')}`;
    if (rateVal) rateVal.textContent = `${(annualRate * 100).toFixed(2)}% p.a.`;
    if (termVal) termVal.textContent = `${years} Years`;

    const monthlyRate = annualRate / 12;
    const numMonths = years * 12;

    // Standard Amortisation: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    let monthlyRepayment = (P * (monthlyRate * Math.pow(1 + monthlyRate, numMonths))) / (Math.pow(1 + monthlyRate, numMonths) - 1);
    
    let result = monthlyRepayment;
    let label = 'per month';
    if (currentFreq === 'weekly') {
      result = (monthlyRepayment * 12) / 52;
      label = 'per week';
    } else if (currentFreq === 'fortnightly') {
      result = (monthlyRepayment * 12) / 26;
      label = 'per fortnight';
    }

    if (repaymentDisplay) {
      repaymentDisplay.innerHTML = `$${Math.round(result).toLocaleString('en-AU')} <span style="font-size: 1rem; font-weight: 500; color: var(--text-muted);">${label}</span>`;
    }
  }

  loanSlider?.addEventListener('input', calculateMortgage);
  rateSlider?.addEventListener('input', calculateMortgage);
  termSlider?.addEventListener('input', calculateMortgage);

  freqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      freqBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFreq = btn.dataset.freq;
      calculateMortgage();
    });
  });

  calculateMortgage();
}

/* ==========================================================================
   8. FREE CUSTOM DESIGN STUDIO WIZARD
   ========================================================================== */
function initCustomDesignWizard() {
  const wizardNodes = document.querySelectorAll('.wizard-step-node');
  const panes = document.querySelectorAll('.wizard-pane');
  const nextBtns = document.querySelectorAll('.wizard-next-btn');
  const backBtns = document.querySelectorAll('.wizard-back-btn');
  const wizardForm = document.getElementById('customDesignWizardForm');

  let currentStep = 1;

  function showStep(step) {
    currentStep = step;
    panes.forEach(p => p.classList.toggle('active', parseInt(p.dataset.step, 10) === step));
    wizardNodes.forEach((node, idx) => {
      const stepIdx = idx + 1;
      node.classList.toggle('active', stepIdx === step);
      node.classList.toggle('completed', stepIdx < step);
    });
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < 4) showStep(currentStep + 1);
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) showStep(currentStep - 1);
    });
  });

  wizardNodes.forEach(node => {
    node.addEventListener('click', () => {
      const target = parseInt(node.dataset.stepNode, 10);
      showStep(target);
    });
  });

  wizardForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('wizardName')?.value || 'Valued Client';
    const pane4 = document.querySelector('.wizard-pane[data-step="4"]');
    if (pane4) {
      pane4.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <div style="width: 70px; height: 70px; background: rgba(16, 185, 129, 0.15); color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px;">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <h3 style="font-size: 2rem; margin-bottom: 12px;">Thank You, ${name}!</h3>
          <p style="font-size: 1.1rem; color: var(--text-light); max-width: 540px; margin: 0 auto 24px;">
            Your Free Custom Architectural Design request has been logged under Booking ID <strong class="text-orange">#OH-${Math.floor(100000 + Math.random() * 900000)}</strong>.
          </p>
          <div style="background: var(--bg-dark-elevated); padding: 20px; border-radius: var(--radius-md); max-width: 500px; margin: 0 auto 28px; text-align: left; border: 1px solid var(--border-dark);">
            <h5 style="color: var(--primary-orange); margin-bottom: 6px;"><i class="fa-solid fa-calendar-check"></i> Next Steps with Orange Homes:</h5>
            <ul style="list-style: none; font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 6px;">
              <li>• Our Senior In-House Architect will call you within 2 business hours.</li>
              <li>• Complimentary 3D floorplan and elevation drawings prepared for your block.</li>
              <li>• Fixed-Price Tender presentation at our Bella Vista Design Studio.</li>
            </ul>
          </div>
          <button class="btn btn-primary" onclick="location.reload()">Start Another Consultation</button>
        </div>
      `;
    }
  });
}

/* ==========================================================================
   9. VIRTUAL DISPLAY HOME 360 TOUR
   ========================================================================== */
function initVirtualTour() {
  const tabsContainer = document.getElementById('tourTabsContainer');
  const viewportImg = document.getElementById('tourViewportImg');
  const hotspotsContainer = document.getElementById('tourHotspotsContainer');
  const tourTitle = document.getElementById('tourRoomTitle');
  const tourDesc = document.getElementById('tourRoomDesc');

  if (!tabsContainer || !window.ORANGE_DATA) return;

  const rooms = window.ORANGE_DATA.virtualTourRooms;
  let activeRoom = rooms[0];

  function renderRoom() {
    tabsContainer.innerHTML = rooms.map(r => `
      <button class="tour-tab-btn ${r.id === activeRoom.id ? 'active' : ''}" onclick="switchTourRoom('${r.id}')">
        ${r.name}
      </button>
    `).join('');

    if (viewportImg) viewportImg.src = activeRoom.image;
    if (tourTitle) tourTitle.textContent = activeRoom.name;
    if (tourDesc) tourDesc.textContent = activeRoom.desc;

    if (hotspotsContainer) {
      hotspotsContainer.innerHTML = activeRoom.hotspots.map(h => `
        <div class="tour-hotspot" style="top: ${h.top}; left: ${h.left};">
          <i class="fa-solid fa-plus"></i>
          <div class="hotspot-tooltip">
            <h6>${h.title}</h6>
            <p>${h.text}</p>
          </div>
        </div>
      `).join('');
    }
  }

  window.switchTourRoom = function(roomId) {
    const found = rooms.find(r => r.id === roomId);
    if (found) {
      activeRoom = found;
      renderRoom();
    }
  };

  renderRoom();
}

/* ==========================================================================
   10. SUBURBS DIRECTORY & PROJECT LOCATIONS
   ========================================================================== */
function initSuburbsDirectory() {
  const grid = document.getElementById('suburbsGrid');
  if (!grid || !window.ORANGE_DATA) return;

  grid.innerHTML = window.ORANGE_DATA.suburbs.map(s => `
    <div class="suburb-card">
      <div class="suburb-header">
        <div>
          <h4>${s.name}</h4>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${s.region} NSW ${s.postcode}</span>
        </div>
        <div class="suburb-badge">${s.activeBuilds} Active Builds</div>
      </div>
      <p>${s.description}</p>
      <ul class="suburb-highlights">
        ${s.highlights.map(h => `<li><i class="fa-solid fa-check text-orange"></i> ${h}</li>`).join('')}
      </ul>
      <button class="btn btn-outline-orange btn-sm" style="width: 100%;" onclick="openContactModal('Building in ${s.name}')">
        View ${s.name} House & Land
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   11. ARTICLES & KNOWLEDGE BASE
   ========================================================================== */
/* ==========================================================================
   11. ARTICLES & KNOWLEDGE BASE
   ========================================================================== */
function initArticles() {
  if (!window.ORANGE_DATA) return;

  const homeGrid = document.getElementById('articlesGrid');
  const allGrid = document.getElementById('allArticlesGrid');

  function renderArticleCard(art) {
    return `
      <div class="design-card article-card" style="cursor: pointer;" onclick="openArticleModal('${art.id}')">
        <div class="card-media" style="aspect-ratio: 16/9;">
          <img src="${art.image}" alt="${art.title}" loading="lazy">
          <div class="card-badge badge-orange">${art.category}</div>
        </div>
        <div class="card-body">
          <div class="article-meta" style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px; font-weight: 500;">
            <i class="fa-regular fa-calendar" style="margin-right: 4px;"></i> ${art.date} • <i class="fa-regular fa-clock" style="margin-right: 4px; margin-left: 4px;"></i> ${art.readTime}
          </div>
          <h4 class="article-title" style="font-size: 1.22rem; color: var(--text-white); margin-bottom: 10px; line-height: 1.35; font-weight: 700;">${art.title}</h4>
          <p class="card-desc" style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 18px;">${art.summary}</p>
          <div style="color: var(--accent-orange); font-size: 0.88rem; font-weight: 700; margin-top: auto; display: flex; align-items: center; gap: 6px;">
            Read Complete Guide <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    `;
  }

  // 1. Homepage 3-card limit
  if (homeGrid) {
    const limit = parseInt(homeGrid.dataset.limit || '3', 10);
    const articles = window.ORANGE_DATA.articles.slice(0, limit);
    homeGrid.innerHTML = articles.map(renderArticleCard).join('');
    attachCardSpotlights();
  }

  // 2. Dedicated Articles Listing Page
  if (allGrid) {
    let currentCategory = 'all';

    function renderAllArticles() {
      const filtered = currentCategory === 'all'
        ? window.ORANGE_DATA.articles
        : window.ORANGE_DATA.articles.filter(a => a.category === currentCategory);

      allGrid.innerHTML = filtered.map(renderArticleCard).join('');
      attachCardSpotlights();
    }

    const filterBtns = document.querySelectorAll('.article-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active', 'btn-primary');
          b.classList.add('btn-outline-white');
        });
        btn.classList.remove('btn-outline-white');
        btn.classList.add('active', 'btn-primary');
        currentCategory = btn.dataset.category;
        renderAllArticles();
      });
    });

    renderAllArticles();
  }
}

window.openArticleModal = function(artId) {
  const article = window.ORANGE_DATA?.articles.find(a => a.id === artId);
  if (!article) return;

  const modal = document.getElementById('articleDetailModal');
  if (!modal) return;

  const titleEl = document.getElementById('modalArticleTitle');
  const metaEl = document.getElementById('modalArticleMeta');
  const imgEl = document.getElementById('modalArticleImg');
  const contentEl = document.getElementById('modalArticleContent');

  if (titleEl) titleEl.textContent = article.title;
  if (metaEl) metaEl.textContent = `${article.category} • ${article.date} • ${article.readTime}`;
  if (imgEl) {
    imgEl.src = article.image;
    imgEl.alt = article.title;
  }
  if (contentEl) contentEl.innerHTML = article.content;

  modal.classList.add('open', 'active');
  document.body.style.overflow = 'hidden';
};

window.closeArticleModal = function() {
  const modal = document.getElementById('articleDetailModal');
  if (modal) {
    modal.classList.remove('open', 'active');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   12. TESTIMONIALS & REVIEWS (ULTRA-LUXURY SLIDER)
   ========================================================================== */
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('testimonialPrevBtn');
  const nextBtn = document.getElementById('testimonialNextBtn');

  if (!track || !window.ORANGE_DATA || !window.ORANGE_DATA.testimonials) return;

  const testimonials = window.ORANGE_DATA.testimonials;
  let currentSlide = 0;
  let autoPlayTimer = null;

  // Render Slides
  track.innerHTML = testimonials.map((t, idx) => `
    <div class="testimonial-slide" data-slide-index="${idx}">
      <div class="testimonial-slide-inner">
        <div>
          <div class="review-stars" style="margin-bottom: 16px; color: var(--accent-amber); font-size: 1.15rem; display: flex; gap: 4px;">
            ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
          </div>
          <p class="testimonial-quote-large">"${t.quote}"</p>
        </div>
        <div class="testimonial-author-row">
          <div class="testimonial-author-left">
            <img src="${t.image}" alt="${t.name}" class="testimonial-author-avatar">
            <div class="testimonial-author-info">
              <h5>${t.name}</h5>
              <p>${t.suburb} • <span class="text-orange">${t.buildType}</span></p>
            </div>
          </div>
          <div class="testimonial-badge-verified">
            <i class="fa-solid fa-shield-check"></i> Verified Sydney Build
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Render Indicator Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = testimonials.map((_, idx) => `
      <div class="testimonial-dot ${idx === 0 ? 'active' : ''}" onclick="goToTestimonialSlide(${idx})" aria-label="Go to slide ${idx + 1}"></div>
    `).join('');
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = dotsContainer?.querySelectorAll('.testimonial-dot');
    dots?.forEach((d, idx) => {
      d.classList.toggle('active', idx === currentSlide);
    });
  }

  window.goToTestimonialSlide = function(idx) {
    currentSlide = (idx + testimonials.length) % testimonials.length;
    updateSlider();
    resetAutoPlay();
  };

  function nextSlide() {
    window.goToTestimonialSlide(currentSlide + 1);
  }

  function prevSlide() {
    window.goToTestimonialSlide(currentSlide - 1);
  }

  prevBtn?.addEventListener('click', prevSlide);
  nextBtn?.addEventListener('click', nextSlide);

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, 5500);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Pause on hover
  const sliderWrap = track.closest('.testimonial-slider-wrap');
  sliderWrap?.addEventListener('mouseenter', stopAutoPlay);
  sliderWrap?.addEventListener('mouseleave', startAutoPlay);

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  }, { passive: true });

  startAutoPlay();
}

/* ==========================================================================
   13. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faqContainer');
  if (!container || !window.ORANGE_DATA) return;

  container.innerHTML = window.ORANGE_DATA.faqs.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question">
        <span>${faq.q}</span>
        <div class="faq-icon"><i class="fa-solid fa-chevron-down"></i></div>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('active');
    });
  });
}

/* ==========================================================================
   14. MODAL CONTROLS & LEAD CAPTURE TOAST
   ========================================================================== */
function initModals() {
  // ESC key closes all modals & drawers, restoring overflow
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop, .custom-modal, .mobile-drawer').forEach(m => {
        m.classList.remove('open', 'active');
        m.style.display = '';
      });
      document.body.style.overflow = '';
    }
  });

  // Close buttons & backdrop clicks
  document.querySelectorAll('.modal-close-btn, .modal-close, .modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target.classList.contains('modal-close-btn') || e.target.closest('.modal-close-btn') || e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
        document.querySelectorAll('.modal-backdrop, .custom-modal').forEach(m => {
          m.classList.remove('open', 'active');
          m.style.display = '';
        });
        document.body.style.overflow = '';
      }
    });
  });

  // Prevent dialog click from bubbling
  document.querySelectorAll('.modal-dialog, .modal-content').forEach(d => {
    d.addEventListener('click', (e) => e.stopPropagation());
  });

  // Global Quote & Contact Modals
  window.openContactModal = function(subject = 'General Consultation') {
    const modal = document.getElementById('quickContactModal') || document.getElementById('contactModal');
    if (modal) {
      const subjInput = document.getElementById('quickContactSubject') || document.getElementById('contactSubject');
      if (subjInput) subjInput.value = subject;
      const titleEl = document.getElementById('contactModalTitle');
      if (titleEl && subject) titleEl.textContent = subject.includes('Consultation') ? subject : `Enquiry: ${subject}`;
      modal.classList.add('open', 'active');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeContactModal = function() {
    const modal = document.getElementById('quickContactModal') || document.getElementById('contactModal');
    if (modal) {
      modal.classList.remove('open', 'active');
      modal.style.display = '';
    }
    document.querySelectorAll('.modal-backdrop, .custom-modal').forEach(m => {
      m.classList.remove('open', 'active');
      m.style.display = '';
    });
    document.body.style.overflow = '';
  };

  window.closeDesignModal = function() {
    const modal = document.getElementById('designDetailModal');
    if (modal) {
      modal.classList.remove('open', 'active');
      modal.style.display = '';
    }
    document.body.style.overflow = '';
  };

  window.handleQuickContactSubmit = function(e) {
    if (e) e.preventDefault();
    showToast('Thank you! Your consultation request has been submitted. Our team will contact you shortly.');
    const form = document.getElementById('quickContactForm') || document.getElementById('contactModalForm');
    if (form) form.reset();
    window.closeContactModal();
    return false;
  };

  // Forms submission
  document.querySelectorAll('form[data-toast-msg], #contactModalForm, #quickContactForm').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.dataset.toastMsg || 'Thank you! Your request has been sent. An Orange Homes advisor will contact you shortly.';
      showToast(msg);
      form.reset();
      window.closeContactModal();
    });
  });

  // Brochure Download Simulator
  window.downloadBrochure = function() {
    showToast('Generating official Orange Homes architectural PDF brochure... Download starting!');
    setTimeout(() => {
      showToast('Brochure download complete! Check your downloads folder.');
    }, 2000);
  };
}

// Global Toast System
window.showToast = function(message) {
  let toast = document.getElementById('orangeToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'orangeToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: rgba(18, 18, 22, 0.96);
      border: 1px solid var(--primary-orange);
      color: #fff;
      padding: 16px 28px;
      border-radius: var(--radius-full);
      box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 20px var(--primary-orange-glow);
      font-size: 0.95rem;
      font-weight: 600;
      z-index: 3000;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
      opacity: 0;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-orange" style="font-size: 1.2rem;"></i> ${message}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 4000);
};

let isWindowScrolling = false;
let windowScrollTimeout;
function setScrollingState() {
  isWindowScrolling = true;
  clearTimeout(windowScrollTimeout);
  windowScrollTimeout = setTimeout(() => { isWindowScrolling = false; }, 90);
}
window.addEventListener('scroll', setScrollingState, { passive: true });
window.addEventListener('wheel', setScrollingState, { passive: true });
window.addEventListener('touchmove', setScrollingState, { passive: true });

/* ==========================================================================
   FLUID WATER CANVAS SIMULATION ENGINE
   Multi-harmonic translucent sine water waves with reactive ripple propagation
   ========================================================================== */
function initFluidCanvas() {
  const canvas = document.getElementById('fluidCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0, height = 0;
  let ripples = [];
  let mouse = { x: -1000, y: -1000, vx: 0, vy: 0, px: 0, py: 0 };
  let time = 0;
  let isRendering = false;
  let isDocumentVisible = !document.hidden;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  let mouseTicking = false;
  window.addEventListener('mousemove', (e) => {
    if (!mouseTicking) {
      requestAnimationFrame(() => {
        mouse.vx = e.clientX - mouse.px;
        mouse.vy = e.clientY - mouse.py;
        mouse.px = mouse.x = e.clientX;
        mouse.py = mouse.y = e.clientY;

        const speed = Math.hypot(mouse.vx, mouse.vy);
        if (speed > 28 && Math.random() < 0.22) {
          addRipple(mouse.x, mouse.y, Math.min(speed * 0.4, 25), 0.25);
        }
        mouseTicking = false;
      });
      mouseTicking = true;
    }
  }, { passive: true });

  window.addEventListener('click', (e) => {
    addRipple(e.clientX, e.clientY, 42, 0.65);
  }, { passive: true });

  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      addRipple(e.touches[0].clientX, e.touches[0].clientY, 35, 0.5);
    }
  }, { passive: true });

  function addRipple(x, y, maxRadius, strength) {
    if (ripples.length > 15) ripples.shift();
    ripples.push({
      x,
      y,
      radius: 0,
      maxRadius: maxRadius || 40,
      opacity: strength || 0.5,
      speed: 2 + Math.random() * 1.5
    });
    checkStartLoop();
  }

  const waves = [
    { wavelength: 0.0025, amplitude: 35, speed: 0.0007, color: 'rgba(255, 107, 0, 0.035)', offset: 0.35 },
    { wavelength: 0.0018, amplitude: 45, speed: 0.0005, color: 'rgba(255, 133, 27, 0.025)', offset: 0.6 },
    { wavelength: 0.0035, amplitude: 28, speed: 0.001, color: 'rgba(255, 255, 255, 0.015)', offset: 0.82 }
  ];

  function render() {
    if (!isDocumentVisible || window.scrollY > height + 250) {
      isRendering = false;
      return;
    }

    time += 1;
    ctx.clearRect(0, 0, width, height);

    waves.forEach(wave => {
      ctx.beginPath();
      const baseY = height * wave.offset;
      ctx.moveTo(0, height);
      ctx.lineTo(0, baseY);

      for (let x = 0; x <= width + 40; x += 40) {
        const yOffset =
          Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude +
          Math.cos(x * wave.wavelength * 0.6 - time * wave.speed * 1.1) * (wave.amplitude * 0.45);
        ctx.lineTo(x, baseY + yOffset);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();
    });

    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += r.speed;
      r.opacity *= 0.965;

      if (r.opacity < 0.01 || r.radius > width * 0.7) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 107, 0, ${r.opacity * 0.45})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    requestAnimationFrame(render);
  }

  function checkStartLoop() {
    if (!isRendering && isDocumentVisible && window.scrollY <= height + 250) {
      isRendering = true;
      requestAnimationFrame(render);
    }
  }

  document.addEventListener('visibilitychange', () => {
    isDocumentVisible = !document.hidden;
    if (isDocumentVisible) checkStartLoop();
  });

  window.addEventListener('scroll', () => {
    checkStartLoop();
  }, { passive: true });

  checkStartLoop();
}

/* ==========================================================================
   STREAMLINED RESPONSIVE MOUSE & CARD SPOTLIGHT SYSTEM
   ========================================================================== */
function initLiquidCursorAndSpotlight() {
  const cursorGlow = document.getElementById('liquidCursorGlow');
  if (cursorGlow) {
    let mouseX = 0, mouseY = 0, ticking = false;
    cursorGlow.style.willChange = 'transform';

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!ticking) {
        requestAnimationFrame(() => {
          cursorGlow.style.opacity = '1';
          cursorGlow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    }, { passive: true });
  }

  attachCard3DTiltAndSpotlight();
}

function attachCard3DTiltAndSpotlight() {
  const cards = document.querySelectorAll('.design-card, .why-card, .suburb-card, .testimonial-card, .package-card, .estimator-card, .process-step, .trust-item, .article-card, .tour-viewer, .tracker-card, .wizard-card');

  cards.forEach(card => {
    if (card._hasTilt) return;
    card._hasTilt = true;

    let rafId = null;
    let cachedRect = null;

    function updateRect() {
      cachedRect = card.getBoundingClientRect();
    }

    card.addEventListener('mouseenter', () => {
      updateRect();
      card.style.willChange = 'transform';
      card.style.transition = 'transform 0.15s ease-out';
    }, { passive: true });

    card.addEventListener('mousemove', (e) => {
      if (isWindowScrolling || e.buttons !== 0 || (window.getSelection && window.getSelection().toString().length > 0)) {
        if (card.style.transform) card.style.transform = '';
        return;
      }

      const clientX = e.clientX;
      const clientY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          if (!cachedRect || cachedRect.width === 0 || cachedRect.height === 0) {
            updateRect();
          }
          if (!cachedRect) return;

          const x = clientX - cachedRect.left;
          const y = clientY - cachedRect.top;

          if (x < 0 || x > cachedRect.width || y < 0 || y > cachedRect.height) {
            card.style.transform = '';
            return;
          }

          const centerX = cachedRect.width / 2;
          const centerY = cachedRect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -5.5;
          const rotateY = ((x - centerX) / centerX) * 5.5;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -6px, 0)`;
          card.style.setProperty('--mouse-x', `${((x / cachedRect.width) * 100).toFixed(1)}%`);
          card.style.setProperty('--mouse-y', `${((y / cachedRect.height) * 100).toFixed(1)}%`);
        });
      }
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      card.style.transform = '';
      card.style.willChange = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
      cachedRect = null;
    }, { passive: true });
  });
}

function attachCardSpotlights() {
  if (window.refreshScrollAnimations) window.refreshScrollAnimations();
  return attachCard3DTiltAndSpotlight();
}
window.attachCard3DTiltAndSpotlight = attachCard3DTiltAndSpotlight;
window.attachCardSpotlights = attachCardSpotlights;

/* ==========================================================================
   WATER RIPPLE CLICK INTERACTION
   ========================================================================== */
function initWaterRippleEffect() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.btn, .nav-link, .dropdown-link, .filter-select, .storey-tab, .calc-tab, .step-indicator, .faq-question, .tour-hotspot, .option-tile, .design-card, .package-card, .level-tab-btn, .gallery-thumb, .facade-card');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'water-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    const size = Math.max(rect.width, rect.height) * 1.6;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 850);
  });
}

/* ==========================================================================
   INDIVIDUAL PROJECT / HOME DESIGN DETAIL PAGE CONTROLLER
   ========================================================================== */
window.currentGalleryIndex = 0;
window.currentGalleryList = [];
window.activeFloorplanLevel = 'ground';

function initProjectDetailPage() {
  // 1. Get Design ID from URL param (default to 'tryst')
  const urlParams = new URLSearchParams(window.location.search);
  const designId = (urlParams.get('id') || 'tryst').toLowerCase();

  const designs = window.ORANGE_DATA?.homeDesigns || [];
  let design = designs.find(d => d.id.toLowerCase() === designId);
  if (!design) {
    design = designs.find(d => d.id === 'tryst') || designs[0];
  }

  if (!design) return;
  window.currentDesign = design;

  // 2. Set Page Title & Meta Tags
  document.title = `${design.name} - ${design.sizeSQ} SQ Luxury Custom Home Design | Orange Homes`;
  const metaDesc = document.getElementById('pageMetaDesc');
  if (metaDesc) {
    metaDesc.content = `Explore the ${design.name} ${design.sizeSQ} SQ custom luxury home design by Orange Homes. Features ${design.beds} bedrooms, ${design.baths} bathrooms, dual living options, and fixed-price guarantee.`;
  }

  // 3. Populate Hero Header
  const heroBreadcrumbName = document.getElementById('heroBreadcrumbName');
  if (heroBreadcrumbName) heroBreadcrumbName.textContent = design.name;

  const heroBadge = document.getElementById('heroBadge');
  if (heroBadge) heroBadge.textContent = design.badge || 'Flagship Luxury Estate';

  const heroStoreyBadge = document.getElementById('heroStoreyBadge');
  if (heroStoreyBadge) {
    heroStoreyBadge.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${design.storeys}`;
  }

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    heroTitle.innerHTML = `${design.name} <span class="text-white" id="heroSizeSQ" style="font-weight: 400; opacity: 0.85;">— ${design.sizeSQ} SQ</span>`;
  }

  const heroTagline = document.getElementById('heroTagline');
  if (heroTagline) heroTagline.textContent = design.tagline || design.description;

  const subnavDesignName = document.getElementById('subnavDesignName');
  if (subnavDesignName) subnavDesignName.textContent = `${design.name} ${design.sizeSQ} SQ`;

  const contactSectionDesignName = document.getElementById('contactSectionDesignName');
  if (contactSectionDesignName) contactSectionDesignName.textContent = design.name;

  const formDesignSubject = document.getElementById('formDesignSubject');
  if (formDesignSubject) formDesignSubject.value = `Enquiry: ${design.name} Home Design (${design.sizeSQ} SQ)`;

  // 4. Populate Quick Specs Ribbon
  const specBeds = document.getElementById('specBeds');
  if (specBeds) specBeds.textContent = design.beds;

  const specBaths = document.getElementById('specBaths');
  if (specBaths) specBaths.textContent = design.baths;

  const specLiving = document.getElementById('specLiving');
  if (specLiving) specLiving.textContent = design.living || 4;

  const specGarages = document.getElementById('specGarages');
  if (specGarages) specGarages.textContent = design.garages || 2;

  const specTotalArea = document.getElementById('specTotalArea');
  if (specTotalArea) specTotalArea.textContent = `${design.sizeM2} m²`;

  const specBlockWidth = document.getElementById('specBlockWidth');
  if (specBlockWidth) specBlockWidth.textContent = `${design.minBlockWidth || 15.5}m+`;

  // 5. Architectural Gallery Setup
  if (design.gallery && design.gallery.length > 0) {
    window.currentGalleryList = design.gallery;
  } else {
    window.currentGalleryList = [
      { src: design.image, title: `${design.name} Architectural Facade` },
      { src: 'assets/images/interior_luxury_kitchen.jpg', title: 'Gourmet Chef Kitchen & Scullery' },
      { src: 'assets/images/alfresco_pool_area.jpg', title: 'Resort Entertaining Pavilion & Alfresco' }
    ];
  }
  window.currentGalleryIndex = 0;
  renderGallery();

  // 6. Overview Narrative & Feature Checklist
  const overviewDesc = document.getElementById('overviewDescription');
  if (overviewDesc) {
    overviewDesc.innerHTML = `<p>${design.description}</p>`;
  }

  const featuresList = document.getElementById('overviewFeaturesList');
  if (featuresList && design.features) {
    featuresList.innerHTML = design.features.map(f => `
      <li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>
    `).join('');
  }

  // 7. Floor Plan Studio
  renderFloorPlanStudio(design);

  // 8. Area Breakdown & Dimensions Table
  renderDimensionsSection(design);

  // 9. Facade Styles Selector
  renderFacadesSelector(design);

  // 10. Luxury Inclusions Grid
  renderInclusionsGrid(design);

  // 11. Similar Designs Grid
  renderSimilarDesigns(design.id);

  // 12. Subnav Smooth Scroll & Active Tracking
  setupSubnavScrollspy();

  // 13. 3D Tilt for interactive cards
  attachCardSpotlights();
}
window.initProjectDetailPage = initProjectDetailPage;

/* --- Gallery Helpers --- */
function renderGallery() {
  const mainImg = document.getElementById('galleryMainImg');
  const caption = document.getElementById('galleryCaption');
  const thumbsRow = document.getElementById('galleryThumbsRow');

  if (!window.currentGalleryList || window.currentGalleryList.length === 0) return;

  const currentItem = window.currentGalleryList[window.currentGalleryIndex] || window.currentGalleryList[0];

  if (mainImg) {
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = currentItem.src;
      mainImg.alt = currentItem.title || 'Architectural View';
      mainImg.style.opacity = '1';
    }, 150);
  }

  if (caption) {
    caption.textContent = currentItem.title || 'Architectural Showcase';
  }

  if (thumbsRow) {
    thumbsRow.innerHTML = window.currentGalleryList.map((item, idx) => `
      <div class="gallery-thumb ${idx === window.currentGalleryIndex ? 'active' : ''}" onclick="selectGalleryImage(${idx})">
        <img src="${item.src}" alt="${item.title || 'Thumbnail'}">
      </div>
    `).join('');
  }
}

function navigateGallery(dir) {
  if (!window.currentGalleryList || window.currentGalleryList.length === 0) return;
  window.currentGalleryIndex += dir;
  if (window.currentGalleryIndex < 0) {
    window.currentGalleryIndex = window.currentGalleryList.length - 1;
  } else if (window.currentGalleryIndex >= window.currentGalleryList.length) {
    window.currentGalleryIndex = 0;
  }
  renderGallery();
}
window.navigateGallery = navigateGallery;

function selectGalleryImage(idx) {
  window.currentGalleryIndex = idx;
  renderGallery();
}
window.selectGalleryImage = selectGalleryImage;

/* --- Floor Plan Studio Helpers --- */
function renderFloorPlanStudio(design) {
  const tabsContainer = document.getElementById('projectFloorplanTabs');
  const canvasDisplay = document.getElementById('projectFloorplanCanvas');
  const titleEl = document.getElementById('activeLevelTitle');
  const descEl = document.getElementById('activeLevelDesc');

  if (!design.floorplans) return;

  const levelKeys = Object.keys(design.floorplans);
  if (levelKeys.length === 0) return;

  if (!levelKeys.includes(window.activeFloorplanLevel)) {
    window.activeFloorplanLevel = levelKeys[0];
  }

  // Render Tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = levelKeys.map(k => `
      <button class="floorplan-tab ${k === window.activeFloorplanLevel ? 'active' : ''}" onclick="selectFloorPlanLevel('${k}')">
        <i class="fa-solid fa-layer-group"></i> ${design.floorplans[k].title || k.toUpperCase()}
      </button>
    `).join('');
  }

  // Render Active Level
  const activePlan = design.floorplans[window.activeFloorplanLevel];
  if (activePlan) {
    if (titleEl) titleEl.textContent = activePlan.title;
    if (descEl) descEl.textContent = activePlan.desc;
    if (canvasDisplay) {
      canvasDisplay.innerHTML = activePlan.svgMap || `<p style="padding: 40px; text-align: center; color: var(--text-muted);">Floor plan blueprint loading...</p>`;
    }
  }
}

function selectFloorPlanLevel(levelKey) {
  window.activeFloorplanLevel = levelKey;
  if (window.currentDesign) {
    renderFloorPlanStudio(window.currentDesign);
  }
}
window.selectFloorPlanLevel = selectFloorPlanLevel;

/* --- Area Breakdown & Room Dimensions Helpers --- */
function renderDimensionsSection(design) {
  // Area Breakdown List
  const areaList = document.getElementById('areaBreakdownList');
  if (areaList && design.areaBreakdown) {
    areaList.innerHTML = design.areaBreakdown.map(item => `
      <div class="area-breakdown-card">
        <span class="area-name">${item.label}</span>
        <span class="area-val">${item.value}</span>
      </div>
    `).join('');
  }

  // Room Dimensions Table
  const tableBody = document.getElementById('roomDimensionsBody');
  const searchInput = document.getElementById('dimensionSearchInput');

  function updateTable(filter = '') {
    if (!tableBody || !design.roomDimensions) return;
    const filterLower = filter.trim().toLowerCase();
    const filtered = design.roomDimensions.filter(r => 
      !filterLower || r.room.toLowerCase().includes(filterLower) || r.size.toLowerCase().includes(filterLower)
    );

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="2" style="text-align: center; color: var(--text-muted); padding: 24px;">No rooms match "${filter}".</td></tr>`;
      return;
    }

    tableBody.innerHTML = filtered.map(r => `
      <tr>
        <td class="room-name-cell"><i class="fa-solid fa-door-open" style="margin-right: 8px; color: #94a3b8;"></i> ${r.room}</td>
        <td class="room-dim-cell">${r.size}</td>
      </tr>
    `).join('');
  }

  updateTable();

  if (searchInput) {
    searchInput.oninput = (e) => {
      updateTable(e.target.value);
    };
  }
}

/* --- Facades Selector Helpers --- */
function renderFacadesSelector(design) {
  const optionsList = document.getElementById('facadeOptionsList');
  const activeImg = document.getElementById('facadeActiveImg');
  const activeTitle = document.getElementById('facadeActiveTitle');
  const activeDesc = document.getElementById('facadeActiveDesc');

  const facades = design.facades || [
    { name: "Executive Contemporary", desc: "Natural sandstone pillars with dark cedar battens and off-white render", img: design.image },
    { name: "Nordic Minimalist", desc: "Linear off-white brickwork with matte black frames and picture glazing", img: "assets/images/facade_contemporary_home.jpg" },
    { name: "Monolith Slate & Twilight", desc: "Charcoal architectural panels with warm cedar soffits and illuminated portals", img: "assets/images/tryst_twilight_pool.jpg" }
  ];

  window.currentFacadesList = facades;
  window.selectedFacadeIndex = 0;

  if (optionsList) {
    optionsList.innerHTML = facades.map((f, idx) => `
      <div class="facade-card ${idx === 0 ? 'active' : ''}" onclick="selectFacade(${idx})">
        <div class="facade-card-thumb">
          <img src="${f.img}" alt="${f.name}">
        </div>
        <div class="facade-card-info">
          <h5>${f.name}</h5>
          <p>${f.desc}</p>
        </div>
      </div>
    `).join('');
  }

  if (facades[0]) {
    if (activeImg) activeImg.src = facades[0].img;
    if (activeTitle) activeTitle.textContent = facades[0].name;
    if (activeDesc) activeDesc.textContent = facades[0].desc;
  }
}

function selectFacade(index) {
  window.selectedFacadeIndex = index;
  const facades = window.currentFacadesList;
  if (!facades || !facades[index]) return;

  const f = facades[index];
  const activeImg = document.getElementById('facadeActiveImg');
  const activeTitle = document.getElementById('facadeActiveTitle');
  const activeDesc = document.getElementById('facadeActiveDesc');

  if (activeImg) {
    activeImg.style.opacity = '0.3';
    setTimeout(() => {
      activeImg.src = f.img;
      activeImg.style.opacity = '1';
    }, 150);
  }
  if (activeTitle) activeTitle.textContent = f.name;
  if (activeDesc) activeDesc.textContent = f.desc;

  // Update card active classes
  const cards = document.querySelectorAll('.facade-card');
  cards.forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });
}
window.selectFacade = selectFacade;

/* --- Luxury Inclusions Helpers --- */
function renderInclusionsGrid(design) {
  const grid = document.getElementById('inclusionsCategoryGrid');
  if (!grid) return;

  const inclusions = design.inclusions || [
    { category: "Kitchen & Scullery", items: ["900mm induction cooktop & undermount dual ovens", "60mm Calacatta stone with double waterfall edges", "Full-height custom polyurethane joinery with soft-close Blum hardware", "Butler's scullery with secondary prep sink & walk-in pantry"] },
    { category: "Bathrooms & Spa Ensuites", items: ["Freestanding luxury stone composite soaking bathtub", "Frameless 10mm toughened glass shower screens", "Floor-to-ceiling 600x1200mm Italian porcelain slab tiles", "Custom wall-hung floating vanities with LED perimeter mirror illumination"] },
    { category: "Structure & Climate", items: ["Soaring 3.0m ground floor and 2.7m first floor ceiling heights", "Daikin multi-zone ducted inverter air conditioning", "Commercial-grade thermal-break double-glazed aluminium windows", "Engineered H2-F termite-treated structural timber frame with 25-Year Warranty"] },
    { category: "Smart Home & Energy", items: ["6.6kW Tier-1 Solar PV system with hybrid inverter", "Smart keyless biometric front entry lock & video intercom", "Clipsal Iconic LED light switches & dimming automation", "3-Phase power supply & dedicated EV fast-charging terminal"] }
  ];

  const icons = [
    'fa-kitchen-set',
    'fa-bath',
    'fa-house-chimney',
    'fa-solar-panel'
  ];

  grid.innerHTML = inclusions.map((inc, i) => `
    <div class="inclusions-cat-card">
      <div class="inclusions-cat-header">
        <i class="fa-solid ${icons[i % icons.length]}"></i>
        <h4>${inc.category}</h4>
      </div>
      <ul class="inclusions-list">
        ${inc.items.map(it => `
          <li><i class="fa-solid fa-check" style="color: #94a3b8;"></i> <span>${it}</span></li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* --- Similar Designs Carousel --- */
function renderSimilarDesigns(currentDesignId) {
  const grid = document.getElementById('similarDesignsGrid');
  if (!grid) return;

  const designs = window.ORANGE_DATA?.homeDesigns || [];
  const similar = designs.filter(d => d.id !== currentDesignId).slice(0, 3);

  grid.innerHTML = similar.map(item => `
    <div class="design-card">
      <div class="card-media">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="badge-dark">${item.badge || 'Luxury'}</span>
      </div>
      <div class="card-body">
        <div class="card-category">${item.category} • ${item.storeys}</div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.description.substring(0, 110)}...</p>
        
        <div class="card-specs">
          <div class="spec-item"><i class="fa-solid fa-bed"></i> <div class="spec-val">${item.beds}</div> <div class="spec-lbl">Beds</div></div>
          <div class="spec-item"><i class="fa-solid fa-bath"></i> <div class="spec-val">${item.baths}</div> <div class="spec-lbl">Baths</div></div>
          <div class="spec-item"><i class="fa-solid fa-car"></i> <div class="spec-val">${item.garages}</div> <div class="spec-lbl">Cars</div></div>
          <div class="spec-item"><i class="fa-solid fa-ruler-combined"></i> <div class="spec-val">${item.sizeM2}</div> <div class="spec-lbl">m² Area</div></div>
        </div>

        <div class="card-footer">
          <div class="card-price">From <span>${item.priceFrom}</span></div>
          <a href="design-detail.html?id=${item.id}" class="btn btn-primary btn-sm">
            Explore Design <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
  attachCardSpotlights();
}

/* --- Sticky Subnav Scrollspy --- */
function setupSubnavScrollspy() {
  const subnav = document.getElementById('projectSubnav');
  if (!subnav) return;

  const links = subnav.querySelectorAll('.subnav-link');
  let sectionData = [];

  function updateOffsets() {
    sectionData = Array.from(links).map(link => {
      const id = link.getAttribute('href')?.replace('#', '');
      const el = id ? document.getElementById(id) : null;
      if (!el) return null;
      return {
        link,
        top: el.offsetTop,
        height: el.offsetHeight
      };
    }).filter(Boolean);
  }

  updateOffsets();
  window.addEventListener('resize', updateOffsets, { passive: true });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 140;
        let activeFound = false;

        sectionData.forEach(item => {
          if (!activeFound && scrollPos >= item.top && scrollPos < item.top + item.height) {
            links.forEach(l => l.classList.remove('active'));
            item.link.classList.add('active');
            activeFound = true;
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* --- Brochure Download Simulator --- */
function downloadBrochure() {
  const design = window.currentDesign || { name: 'Tryst', sizeSQ: 60 };
  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.innerHTML = `<i class="fa-solid fa-file-circle-check text-orange" style="font-size: 1.3rem;"></i> <div><strong>${design.name} ${design.sizeSQ} SQ Master Brochure</strong><div style="font-size: 0.8rem; color: #a1a1aa;">Brochure package generated successfully. Preparing download...</div></div>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
window.downloadBrochure = downloadBrochure;



