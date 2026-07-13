System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","esri/layers/GraphicsLayer","esri/layers/FeatureLayer","esri/Graphic","esri/geometry/Polyline","esri/geometry/Point","esri/geometry/geometryEngine"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_Graphic__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/spill-trace/src/trace-engine.ts"
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/spill-trace/src/trace-engine.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CONFIG: () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   ENGINE_VERSION: () => (/* binding */ ENGINE_VERSION),
/* harmony export */   REMOVED_IMPOUNDMENT_COMIDS: () => (/* binding */ REMOVED_IMPOUNDMENT_COMIDS),
/* harmony export */   calculateDepthManning: () => (/* binding */ calculateDepthManning),
/* harmony export */   computeTrace: () => (/* binding */ computeTrace),
/* harmony export */   daWeightedQ: () => (/* binding */ daWeightedQ),
/* harmony export */   estimateBoomNeeds: () => (/* binding */ estimateBoomNeeds),
/* harmony export */   estimateGeometryPayton: () => (/* binding */ estimateGeometryPayton),
/* harmony export */   fetchTraceData: () => (/* binding */ fetchTraceData),
/* harmony export */   haversineM: () => (/* binding */ haversineM),
/* harmony export */   jobsonPassageHours: () => (/* binding */ jobsonPassageHours),
/* harmony export */   jobsonVelocities: () => (/* binding */ jobsonVelocities),
/* harmony export */   mergeUpstreamAnchor: () => (/* binding */ mergeUpstreamAnchor),
/* harmony export */   runTrace: () => (/* binding */ runTrace),
/* harmony export */   toGeoJson: () => (/* binding */ toGeoJson)
/* harmony export */ });
// @ts-nocheck
/**
 * trace-engine.js — National spill trajectory engine (JS port of spill_trace.py)
 * ==============================================================================
 *
 * Faithful port of the Python oracle. Dependency-free ESM: runs in plain Node
 * (>=18, global fetch) for golden testing and in the browser inside the ExB
 * widget. NO @arcgis imports here — the widget wraps this module and supplies
 * layer access through injectable providers:
 *
 *   config.widthProvider(envelope)  -> [{lat, lon, width}]   (GLOW midpoints in bbox)
 *   config.siteProviders            -> [{name, buffer_m, fetch: async () => [{name, lat, lon, ...extra}]}]
 *   config.receptorProviders        -> same shape as siteProviders
 *
 * Port gotchas honored (see README):
 *   1. geoserver CQL BBOX is lat,lon axis order (EPSG:4269 / WFS 2.0)
 *   2. HR NHDPlusID != MR comid — widths sampled spatially, never ID-joined
 *   3. impoundment = wbareatype in (LakePond, Reservoir)
 *   4. width override sampled in windows; failure degrades to formula widths
 *   5. NLDI/geoserver empty-200 -> retry 3x with backoff
 *   6. snap click to streamorde >= minStreamOrder
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ENGINE_VERSION = "1.4.0";
const NLDI_BASE = "https://api.water.usgs.gov/nldi";
const GEOSERVER = "https://api.water.usgs.gov/geoserver/wmadata/ows";
const NWIS_IV = "https://waterservices.usgs.gov/nwis/iv/";
const NWIS_SITE = "https://waterservices.usgs.gov/nwis/site/";
/**
 * NHDPlus MR waterbody flags lag reality — reaches through REMOVED dams still
 * carry wbareatype LakePond and would false-stop the clock. Known removals
 * are excluded here (extendable per-run via config.impoundExcludeComids).
 */
const REMOVED_IMPOUNDMENT_COMIDS = new Set([
    // Milltown Dam, Clark Fork at Bonner MT — removed 2008-2010 (reported by Cody 2026-07-07)
    24293120, 24293122, 24293124,
]);
const DEFAULT_CONFIG = {
    maxDistanceKm: 300,
    maxHours: 24,
    resolutionM: 100.0,
    safetyFactor: 1.5,
    manningN: 0.045,
    minStreamOrder: 4,
    widthProvider: null, // async (env {xmin,ymin,xmax,ymax}) => [{lat, lon, width}]
    widthSampleRadiusM: 800,
    widthWindowPoints: 100, // trace points per override sampling window (~10 km)
    siteProviders: [],
    receptorProviders: [],
    upstreamGaugeKm: 30, // search UM this far for an upstream anchor gauge; 0 = off
    qInterp: "drainage-area", // 'drainage-area' (Q jumps at confluences) | 'distance' (legacy linear smear)
    impoundStopKm: 2.0,
    impoundExcludeComids: [], // extra removed-dam comids beyond REMOVED_IMPOUNDMENT_COMIDS
    timingModel: "hydraulic", // 'hydraulic' (V=Q/A x safety) | 'jobson' (USGS WRIR 96-4013 dye-study regressions)
    asOf: null, // 'YYYY-MM-DD' historical Q; null = live
    verbose: true,
};
// ---------------------------------------------------------------- helpers
const R_EARTH = 6371008.8;
function haversineM(lat1, lon1, lat2, lon2) {
    const p1 = (lat1 * Math.PI) / 180;
    const p2 = (lat2 * Math.PI) / 180;
    const dp = p2 - p1;
    const dl = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.pow(Math.sin(dp / 2), 2) + Math.cos(p1) * Math.cos(p2) * Math.pow(Math.sin(dl / 2), 2);
    return 2 * R_EARTH * Math.asin(Math.sqrt(a));
}
/** Payton's width/depth formulas (fallback when no GLOW data). Verbatim. */
function estimateGeometryPayton(drainageAreaSqMi) {
    let width, depth;
    if (drainageAreaSqMi < 100) {
        width = 10.0 * Math.pow(drainageAreaSqMi / 50, 0.5);
        depth = 0.5 * Math.pow(drainageAreaSqMi / 50, 0.3);
    }
    else if (drainageAreaSqMi < 1000) {
        width = 50.0 * Math.pow(drainageAreaSqMi / 500, 0.5);
        depth = 1.5 * Math.pow(drainageAreaSqMi / 500, 0.3);
    }
    else {
        width = 150.0 * Math.pow(drainageAreaSqMi / 5000, 0.4);
        depth = 3.0 * Math.pow(drainageAreaSqMi / 5000, 0.3);
    }
    return [width, depth];
}
/**
 * Manning's depth via bisection (Python used scipy brentq on [0.1, 20]).
 * The residual is monotonically increasing in depth, so bisection converges to
 * the same root. Replicates brentq's failure mode: no sign change across the
 * bracket -> null (caller falls back to formula depth).
 */
function calculateDepthManning(Qm3s, widthM, slope, n = 0.045) {
    if (Qm3s <= 0 || widthM <= 0 || slope <= 0.00001)
        return null;
    const residual = (depth) => {
        if (depth <= 0.01)
            return -Qm3s;
        const A = widthM * depth;
        const P = widthM + 2 * depth;
        const R = A / P;
        return (1 / n) * A * Math.pow(R, 2 / 3) * Math.sqrt(slope) - Qm3s;
    };
    let lo = 0.1, hi = 20.0;
    let flo = residual(lo), fhi = residual(hi);
    if (flo === 0)
        return lo;
    if (fhi === 0)
        return hi;
    if (flo * fhi > 0)
        return null; // brentq raises -> Python returns None
    for (let i = 0; i < 100; i++) {
        const mid = 0.5 * (lo + hi);
        const fm = residual(mid);
        if (fm === 0 || (hi - lo) / 2 < 1e-10)
            return mid;
        if (flo * fm < 0) {
            hi = mid;
            fhi = fm;
        }
        else {
            lo = mid;
            flo = fm;
        }
    }
    return 0.5 * (lo + hi);
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/** GET/POST with retry — NLDI/geoserver intermittently return empty 200 bodies. */
function getJson(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, { params = null, data = null, tries = 3, timeoutMs = 90000 } = {}) {
        let last = null;
        for (let attempt = 0; attempt < tries; attempt++) {
            try {
                const ctrl = new AbortController();
                const timer = setTimeout(() => ctrl.abort(), timeoutMs);
                let resp;
                try {
                    if (data !== null) {
                        resp = yield fetch(url, {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: new URLSearchParams(data).toString(),
                            signal: ctrl.signal,
                        });
                    }
                    else {
                        const qs = params ? "?" + new URLSearchParams(params).toString() : "";
                        resp = yield fetch(url + qs, { signal: ctrl.signal });
                    }
                }
                finally {
                    clearTimeout(timer);
                }
                if (!resp.ok)
                    throw new Error(`HTTP ${resp.status}`);
                return yield resp.json(); // empty body -> SyntaxError -> retry
            }
            catch (e) {
                last = e;
                yield sleep(1500 * (attempt + 1));
            }
        }
        throw new Error(`${url} failed after ${tries} tries: ${last}`);
    });
}
function getText(url_1, params_1) {
    return __awaiter(this, arguments, void 0, function* (url, params, timeoutMs = 30000) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), timeoutMs);
        try {
            const resp = yield fetch(url + "?" + new URLSearchParams(params).toString(), { signal: ctrl.signal });
            return yield resp.text();
        }
        finally {
            clearTimeout(timer);
        }
    });
}
// ---------------------------------------------------------------- data fetch
/** Snap to nearest reach with streamorde >= minOrder (geoserver bbox search). */
function snapComid(lat, lon, minOrder) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c;
        const box = 0.2;
        // NOTE: EPSG:4269 under WFS 2.0 uses lat,lon axis order in CQL BBOX
        const j = yield getJson(GEOSERVER, {
            data: {
                service: "WFS", version: "2.0.0", request: "GetFeature",
                typeName: "wmadata:nhdflowline_network", outputFormat: "application/json",
                cql_filter: `streamorde >= ${minOrder} AND BBOX(the_geom,` +
                    `${lat - box},${lon - box},${lat + box},${lon + box})`,
                count: "500",
            },
        });
        let best = null, bestD = Infinity;
        for (const f of j.features || []) {
            const g = f.geometry;
            const paths = g.type === "LineString" ? [g.coordinates] : g.coordinates;
            for (const path of paths) {
                for (let i = 0; i < path.length; i += 3) { // every 3rd vertex
                    const p = path[i];
                    const d = haversineM(lat, lon, p[1], p[0]);
                    if (d < bestD) {
                        bestD = d;
                        best = f.properties;
                    }
                }
            }
        }
        if (best !== null)
            return [Number(best.comid), (_c = best.gnis_name) !== null && _c !== void 0 ? _c : null, bestD];
        return [yield nldiPositionComid(lat, lon), null, null];
    });
}
function nldiPositionComid(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/position`, {
            params: { coords: `POINT(${lon} ${lat})` }, timeoutMs: 30000,
        });
        return Number(j.features[0].properties.identifier);
    });
}
function nldiDmFlowlines(comid, distanceKm) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/DM/flowlines`, {
            params: { distance: String(Math.trunc(distanceKm)) },
        });
        const geoms = new Map(); // comid -> [paths] ([[lon,lat],...])
        for (const f of j.features || []) {
            const cid = Number(f.properties.nhdplus_comid);
            const g = f.geometry;
            if (g.type === "LineString")
                geoms.set(cid, [g.coordinates]);
            else if (g.type === "MultiLineString")
                geoms.set(cid, g.coordinates);
        }
        return geoms;
    });
}
function nldiGauges(comid, distanceKm, mode) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/${mode}/nwissite`, {
            params: { distance: String(Math.trunc(distanceKm)) },
        });
        const out = [];
        for (const f of j.features || []) {
            const sid = (f.properties.identifier || "").replace("USGS-", "");
            if (sid.length > 15)
                continue; // coordinate-style IDs (notebook rule)
            out.push({
                station_id: sid,
                name: f.properties.name || "Unknown",
                lat: f.geometry.coordinates[1],
                lon: f.geometry.coordinates[0],
            });
        }
        return out;
    });
}
/**
 * Merge the nearest upstream main-stem gauge into the located-gauge list as a
 * virtual gauge at the spill point (trace_dist 0). Without this, clicking just
 * DOWNSTREAM of a gauge drops it from the DM navigation and the next gauge's Q
 * is back-clamped onto the first reach — wildly wrong when that gauge sits
 * below a major confluence (Gallatin below Logan -> Missouri at Toston).
 * Q is transferred by drainage-area ratio (standard USGS transfer), which also
 * keeps the anchor honest when the UM path crosses a confluence: the ratio
 * scales a tributary gauge back up to the flow at the click.
 * No-op when an on-trace gauge already sits within anchorSkipM of the start
 * (it already anchors the boundary), the station is already located, or the
 * DA transfer is outside its credible range.
 */
function mergeUpstreamAnchor(gd, up, spillDaSqmi, { anchorSkipM = 500, daRatioMax = 4 } = {}) {
    var _c;
    if (!up || !(up.discharge >= 0) || !(up.drainage_area > 0) || !(spillDaSqmi > 0))
        return false;
    if (gd.some((g) => g.station_id === up.station_id))
        return false;
    if (gd.some((g) => g.trace_dist <= anchorSkipM))
        return false;
    const ratio = spillDaSqmi / up.drainage_area;
    if (ratio < 1 / daRatioMax || ratio > daRatioMax)
        return false;
    const [w, dep] = estimateGeometryPayton(spillDaSqmi);
    gd.push({
        station_id: up.station_id, name: up.name, lat: up.lat, lon: up.lon,
        discharge: up.discharge * ratio, drainage_area: spillDaSqmi,
        area: w * dep, trace_dist: 0.0,
        upstream_anchor: true,
        anchor_gauge_q_cfs: up.discharge, anchor_gauge_da_sqmi: up.drainage_area,
        anchor_upstream_m: (_c = up.upstream_m) !== null && _c !== void 0 ? _c : null,
    });
    gd.sort((a, b) => a.trace_dist - b.trace_dist);
    return true;
}
/** VAAs for a list of COMIDs from USGS geoserver (batched POST). */
function vaaBatch(comids) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const out = new Map();
        const CHUNK = 150;
        for (let i = 0; i < comids.length; i += CHUNK) {
            const chunk = comids.slice(i, i + CHUNK);
            const j = yield getJson(GEOSERVER, {
                data: {
                    service: "WFS", version: "2.0.0", request: "GetFeature",
                    typeName: "wmadata:nhdflowline_network",
                    outputFormat: "application/json",
                    cql_filter: `comid IN (${chunk.join(",")})`,
                },
            });
            for (const f of j.features || []) {
                const p = f.properties;
                // EROM monthly modeled flow (gauge-adjusted, cfs) — ungauged fallback + Jobson Qa
                const qe = {};
                for (let m = 1; m <= 12; m++) {
                    const k = `qe_${String(m).padStart(2, "0")}`;
                    qe[m] = (_c = p[k]) !== null && _c !== void 0 ? _c : null;
                }
                out.set(Number(p.comid), {
                    hydroseq: (_d = p.hydroseq) !== null && _d !== void 0 ? _d : null,
                    streamorde: (_e = p.streamorde) !== null && _e !== void 0 ? _e : null,
                    slope: (_f = p.slope) !== null && _f !== void 0 ? _f : null,
                    totdasqkm: (_g = p.totdasqkm) !== null && _g !== void 0 ? _g : null,
                    ftype: (_h = p.ftype) !== null && _h !== void 0 ? _h : null,
                    fcode: (_j = p.fcode) !== null && _j !== void 0 ? _j : null,
                    gnis_name: (_k = p.gnis_name) !== null && _k !== void 0 ? _k : null,
                    // LakePond/Reservoir = impounded; StreamRiver = braided free-flowing
                    wbareatype: (_l = p.wbareatype) !== null && _l !== void 0 ? _l : null,
                    ve_ma: (_m = p.ve_ma) !== null && _m !== void 0 ? _m : null,
                    qe_ma: (_o = p.qe_ma) !== null && _o !== void 0 ? _o : null, // EROM mean annual flow (cfs) — Jobson Qa
                    qe_monthly: qe,
                    // NHDPlus divergence: 0 = none, 1 = main path, 2 = minor path of a split
                    divergence: (_p = p.divergence) !== null && _p !== void 0 ? _p : 0,
                });
            }
        }
        return out;
    });
}
/** Discharge (cfs) + drainage area (sq mi) per gauge via plain NWIS REST. */
function gaugeInfo(stationIds_1) {
    return __awaiter(this, arguments, void 0, function* (stationIds, asOf = null) {
        var _c;
        const info = new Map();
        if (!stationIds.length)
            return info;
        const sites = stationIds.join(",");
        // drainage areas (rdb, expanded output)
        try {
            const text = yield getText(NWIS_SITE, { format: "rdb", sites, siteOutput: "expanded" });
            const lines = text.split("\n").filter((l) => l && !l.startsWith("#"));
            if (lines.length >= 2) {
                const hdr = lines[0].split("\t");
                const iSite = hdr.indexOf("site_no");
                const iDa = hdr.indexOf("drain_area_va"); // -1 if absent
                for (const line of lines.slice(2)) {
                    const parts = line.split("\t");
                    if (parts.length <= Math.max(iSite, iDa > -1 ? iDa : 0))
                        continue;
                    let da = null;
                    if (iDa > -1) {
                        const v = parseFloat(parts[iDa]);
                        da = Number.isFinite(v) ? v : null;
                    }
                    info.set(parts[iSite], { drainage_area: da });
                }
            }
        }
        catch ( /* ignore — matches Python */_d) { /* ignore — matches Python */ }
        // discharge
        const params = { format: "json", sites, parameterCd: "00060" };
        if (asOf) {
            params.startDT = asOf;
            params.endDT = asOf;
        }
        else
            params.period = "P1D";
        try {
            const j = yield getJson(NWIS_IV, { params, timeoutMs: 60000, tries: 1 });
            for (const ts of ((_c = j === null || j === void 0 ? void 0 : j.value) === null || _c === void 0 ? void 0 : _c.timeSeries) || []) {
                const sid = ts.sourceInfo.siteCode[0].value;
                const vals = ts.values[0].value;
                if (!vals || !vals.length)
                    continue;
                const q = parseFloat(vals[vals.length - 1].value);
                if (q >= 0) {
                    if (!info.has(sid))
                        info.set(sid, {});
                    info.get(sid).discharge = q;
                }
            }
        }
        catch ( /* ignore — matches Python */_e) { /* ignore — matches Python */ }
        return info;
    });
}
// ---------------------------------------------------------------- trace assembly
/** Order segments downstream (hydroseq desc), orient, trim to spill point,
 *  emit ~resolutionM spaced points carrying VAA attributes. */
function assembleTrace(lat, lon, geoms, vaa, resolutionM, log) {
    const segs = [];
    for (const [cid, paths] of geoms) {
        const v = vaa.get(cid);
        if (!v || v.hydroseq === null || v.hydroseq === undefined)
            continue;
        const coords = paths.flat(); // flatten multiline into one vertex list
        if (coords.length < 2)
            continue;
        segs.push(Object.assign({ comid: cid, coords }, v));
    }
    segs.sort((a, b) => b.hydroseq - a.hydroseq); // downstream = decreasing hydroseq
    // orient each segment so it flows start->end, chaining ends to starts
    let prevEnd = null;
    for (const s of segs) {
        let c = s.coords;
        if (prevEnd !== null) {
            const dStart = haversineM(prevEnd[1], prevEnd[0], c[0][1], c[0][0]);
            const dEnd = haversineM(prevEnd[1], prevEnd[0], c[c.length - 1][1], c[c.length - 1][0]);
            if (dEnd < dStart)
                c = c.slice().reverse();
        }
        s.coords = c;
        prevEnd = c[c.length - 1];
    }
    // trim the first segment to start at the vertex nearest the spill point
    if (segs.length) {
        const c0 = segs[0].coords;
        let minI = 0, minD = Infinity;
        for (let i = 0; i < c0.length; i++) {
            const d = haversineM(lat, lon, c0[i][1], c0[i][0]);
            if (d < minD) {
                minD = d;
                minI = i;
            }
        }
        const trimmed = c0.slice(minI);
        segs[0].coords = trimmed.length ? trimmed : [c0[c0.length - 1]];
    }
    // flatten to attributed points, downsample to resolutionM
    let pts = [];
    for (const s of segs) {
        let slope = s.slope;
        if (slope === null || slope === undefined || slope < 0)
            slope = 0.001; // -9998 = missing
        for (const p of s.coords) {
            pts.push({
                lon: p[0], lat: p[1],
                drainage_area_km2: s.totdasqkm || 0,
                slope,
                ftype: s.ftype, wbareatype: s.wbareatype,
                comid: s.comid,
                gnis_name: s.gnis_name,
                qe_ma: s.qe_ma, qe_monthly: s.qe_monthly,
                divergence: s.divergence || 0,
            });
        }
    }
    if (pts.length > 1) {
        const keep = [pts[0]];
        let cum = 0.0;
        let last = pts[0];
        for (let i = 1; i < pts.length; i++) {
            const p = pts[i];
            cum += haversineM(last.lat, last.lon, p.lat, p.lon);
            last = p;
            if (cum >= resolutionM) {
                keep.push(p);
                cum = 0.0;
            }
        }
        pts = keep;
    }
    log(`  trace: ${segs.length} segments -> ${pts.length} points (${segs.length ? segs[0].gnis_name : "?"} ...)`);
    return [pts, segs.length ? segs[0].gnis_name : null];
}
/**
 * DA-weighted discharge interpolator (v1.4): Q as a piecewise-linear function
 * of drainage area between gauges, DA-ratio extrapolated outside the gauge
 * range (uniform-yield assumption — same semantics as the single-gauge path).
 * Because DA jumps at confluences, the Q jump lands AT the confluence instead
 * of smearing linearly over the inter-gauge distance; it also can't back-clamp
 * a post-confluence gauge's full Q onto a small upstream tributary.
 * Gauges whose NWIS DA breaks downstream monotonicity are dropped (NWIS and
 * NHDPlus delineations disagree occasionally). Returns null when fewer than 2
 * monotonic gauges remain — caller falls back to distance interpolation.
 */
function daWeightedQ(gd) {
    const kept = [];
    for (const g of gd) {
        if (!(g.drainage_area > 0) || !(g.discharge >= 0))
            continue;
        if (kept.length && g.drainage_area <= kept[kept.length - 1].drainage_area)
            continue;
        kept.push(g);
    }
    if (kept.length < 2)
        return null;
    const fQ = interpClamped(kept.map((g) => g.drainage_area), kept.map((g) => g.discharge));
    const da0 = kept[0].drainage_area, q0 = kept[0].discharge;
    const daN = kept[kept.length - 1].drainage_area, qN = kept[kept.length - 1].discharge;
    return {
        kept,
        q: (da) => {
            if (!(da > 0))
                return 1.0;
            if (da <= da0)
                return q0 * (da / da0);
            if (da >= daN)
                return qN * (da / daN);
            return fQ(da);
        },
    };
}
/** Clamped linear interpolation (scipy interp1d with clamped fill_value). */
function interpClamped(xs, ys) {
    return (x) => {
        if (x <= xs[0])
            return ys[0];
        if (x >= xs[xs.length - 1])
            return ys[ys.length - 1];
        let i = 1;
        while (xs[i] < x)
            i++;
        const t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
        return ys[i - 1] + t * (ys[i] - ys[i - 1]);
    };
}
// ---------------------------------------------------------------- main model
//
// Split into two stages so the expensive part is cacheable:
//   fetchTraceData(lat, lon, config)  — ALL network I/O: trace geometry, VAAs,
//     width sampling, gauges + flows, site/receptor features. Safety factor,
//     max hours etc. do NOT affect this stage.
//   computeTrace(data, config)        — pure math: Q interp, Manning depth,
//     velocity x safety, impoundment, travel time, hourly markers, site ETAs.
//     Deterministic and re-runnable on the same data (fields are overwritten,
//     rows are never structurally mutated).
// runTrace() composes the two — identical behavior to the original.
function fetchTraceData(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
        log(`fetchTraceData(${lat.toFixed(4)}, ${lon.toFixed(4)})  asOf=${cfg.asOf || "live"}`);
        // 1. trace geometry (one NLDI call) + VAA batch join
        const [comid, snapName, snapD] = yield snapComid(lat, lon, cfg.minStreamOrder);
        log(`  COMID ${comid}` + (snapName ? ` (${snapName}, snapped ${(snapD / 1000).toFixed(2)} km)` : ""));
        const geoms = yield nldiDmFlowlines(comid, cfg.maxDistanceKm);
        log(`  NLDI DM flowlines: ${geoms.size}`);
        const vaa = yield vaaBatch([...geoms.keys()]);
        const [pts, riverName] = assembleTrace(lat, lon, geoms, vaa, cfg.resolutionM, log);
        if (pts.length < 2)
            throw new Error("trace too short");
        // per-point arrays (mirrors the DataFrame)
        const n = pts.length;
        const rows = pts.map((p) => (Object.assign({}, p)));
        rows[0].distance = 0.0;
        for (let i = 1; i < n; i++) {
            rows[i].distance = haversineM(rows[i - 1].lat, rows[i - 1].lon, rows[i].lat, rows[i].lon);
        }
        let cum = 0.0;
        for (const r of rows) {
            cum += r.distance;
            r.cum_dist = cum;
        }
        for (const r of rows)
            r.drainage_area_sqmi = r.drainage_area_km2 * 0.386102;
        // 2. widths: formula baseline, optional override provider, 2x cap, backward smoothing
        for (const r of rows) {
            r.formula_width = estimateGeometryPayton(r.drainage_area_sqmi)[0];
            r.width_m = 0.0;
        }
        // braided-reach flag: any NHDPlus divergence within ~1 km (10 rows) — GLOW widths
        // there measure total wetted width across bars, inflating A and killing velocity
        {
            const W = 10;
            for (let i = 0; i < n; i++) {
                let braided = false;
                for (let k = Math.max(0, i - W); k <= Math.min(n - 1, i + W); k++) {
                    if (rows[k].divergence > 0) {
                        braided = true;
                        break;
                    }
                }
                rows[i].braided = braided;
            }
            const nb = rows.filter((r) => r.braided).length;
            if (nb)
                log(`  braided flag: ${nb}/${n} trace points near channel divergences (GLOW override disabled there)`);
        }
        if (cfg.widthProvider) {
            // HR NHDPlusID != MR comid — sample spatially, in windows; never let the
            // override kill the run (degrade to formula widths).
            let mids = [];
            try {
                const STEP = cfg.widthWindowPoints;
                const pad = 0.03;
                for (let i0 = 0; i0 < n; i0 += STEP) {
                    const win = rows.slice(i0, i0 + STEP);
                    const env = {
                        xmin: Math.min(...win.map((r) => r.lon)) - pad,
                        ymin: Math.min(...win.map((r) => r.lat)) - pad,
                        xmax: Math.max(...win.map((r) => r.lon)) + pad,
                        ymax: Math.max(...win.map((r) => r.lat)) + pad,
                    };
                    const feats = yield cfg.widthProvider(env); // [{lat, lon, width}]
                    mids.push(...feats);
                }
            }
            catch (e) {
                log(`  WIDTH OVERRIDE FAILED (${String(e).slice(0, 80)}) - falling back to formula widths`);
                mids = [];
            }
            if (mids.length) {
                for (const r of rows) {
                    if (r.braided) {
                        r.width_m = 0.0;
                        continue;
                    } // formula width on braided reaches
                    let bestD = Infinity, bestW = 0;
                    for (const m of mids) {
                        const d = haversineM(r.lat, r.lon, m.lat, m.lon);
                        if (d < bestD) {
                            bestD = d;
                            bestW = m.width || 0;
                        }
                    }
                    r.width_m = bestD <= cfg.widthSampleRadiusM ? bestW : 0.0;
                }
                const matched = rows.filter((r) => r.width_m > 0).length;
                log(`  GLOW spatial sample: ${mids.length} HR segments, widths matched at ${matched}/${n} trace points`);
            }
        }
        for (const r of rows) {
            r.width_final_raw =
                r.width_m > 0 && r.width_m <= r.formula_width * 2.0 ? r.width_m : r.formula_width;
        }
        // pandas rolling(window=51, min_periods=1).mean() — trailing window
        {
            const W = 51;
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += rows[i].width_final_raw;
                if (i >= W)
                    sum -= rows[i - W].width_final_raw;
                rows[i].width_final = sum / Math.min(i + 1, W);
            }
        }
        // 3. discharge inputs: NLDI downstream gauges -> NWIS Q (+DA), located on trace
        const gauges = yield nldiGauges(comid, cfg.maxDistanceKm, "DM");
        // upstream-anchor candidates: nearest UM gauges (fixes the discontinuity when
        // the click is just below a gauge and DM navigation no longer sees it)
        let upCands = [];
        if (cfg.upstreamGaugeKm > 0) {
            try {
                const dmIds = new Set(gauges.map((g) => g.station_id));
                upCands = (yield nldiGauges(comid, cfg.upstreamGaugeKm, "UM"))
                    .filter((u) => !dmIds.has(u.station_id))
                    .map((u) => (Object.assign(Object.assign({}, u), { upstream_m: haversineM(lat, lon, u.lat, u.lon) })))
                    .filter((u) => u.upstream_m <= cfg.upstreamGaugeKm * 1000)
                    .sort((a, b) => a.upstream_m - b.upstream_m);
            }
            catch (e) {
                log(`  UM gauge lookup failed (${String(e).slice(0, 80)}) — no upstream anchor`);
            }
        }
        const allIds = [...new Set([...gauges, ...upCands].map((g) => g.station_id))];
        const ginfo = yield gaugeInfo(allIds, cfg.asOf);
        const gd = [];
        for (const g of gauges) {
            const i = ginfo.get(g.station_id) || {};
            if (i.discharge === undefined || !i.drainage_area)
                continue;
            let bestD = Infinity, idx = 0;
            for (let k = 0; k < n; k++) {
                const d = haversineM(rows[k].lat, rows[k].lon, g.lat, g.lon);
                if (d < bestD) {
                    bestD = d;
                    idx = k;
                }
            }
            if (bestD > 5000)
                continue; // gauge not on our trace corridor
            const [w, dep] = estimateGeometryPayton(i.drainage_area);
            gd.push(Object.assign(Object.assign({}, g), { discharge: i.discharge, drainage_area: i.drainage_area, area: w * dep, trace_dist: rows[idx].cum_dist }));
        }
        gd.sort((a, b) => a.trace_dist - b.trace_dist);
        const spillDaSqmi = rows[0].drainage_area_sqmi;
        for (const u of upCands) {
            const i = ginfo.get(u.station_id) || {};
            if (i.discharge === undefined || !i.drainage_area)
                continue;
            if (mergeUpstreamAnchor(gd, Object.assign(Object.assign({}, u), { discharge: i.discharge, drainage_area: i.drainage_area }), spillDaSqmi)) {
                log(`  upstream anchor ${u.station_id} ${u.name.slice(0, 30)}: ${Math.round(i.discharge)} cfs ` +
                    `@ ${(u.upstream_m / 1000).toFixed(1)} km upstream -> ${Math.round(i.discharge * (spillDaSqmi / i.drainage_area))} cfs ` +
                    `at spill point (DA x${(spillDaSqmi / i.drainage_area).toFixed(2)})`);
                break;
            }
            // an on-trace gauge near the start already anchors the boundary — stop looking
            if (gd.some((g) => !g.upstream_anchor && g.trace_dist <= 500))
                break;
        }
        for (const g of gd) {
            log(`  gauge ${g.station_id} ${g.name.slice(0, 38).padEnd(38)} ${String(Math.round(g.discharge)).padStart(8)} cfs @ ${(g.trace_dist / 1000).toFixed(1).padStart(6)} km${g.upstream_anchor ? " (upstream anchor)" : ""}`);
        }
        // 4. site/receptor features (fetched in parallel; joined in computeTrace)
        const fetchSets = (providers) => __awaiter(this, void 0, void 0, function* () {
            return Promise.all((providers || []).map((p) => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return ({
                    buffer_m: (_c = p.buffer_m) !== null && _c !== void 0 ? _c : 400,
                    feats: yield p.fetch(), // [{name, lat, lon, ...extra}]
                });
            })));
        });
        const [siteSets, receptorSets] = yield Promise.all([fetchSets(cfg.siteProviders), fetchSets(cfg.receptorProviders)]);
        return {
            lat, lon, comid, snapName, snapDistM: snapD, riverName,
            rows, gd, siteSets, receptorSets,
            asOf: cfg.asOf || "live",
            fetchedAt: new Date().toISOString(),
        };
    });
}
// ---------------------------------------------------------------- Jobson (USGS WRIR 96-4013)
//
// Dye-tracer regressions from ~980 subreaches / ~90 US rivers. Units: Da m^2,
// Q & Qa m^3/s, S dimensionless, velocities m/s. Eq 12/13 (with slope) or
// 14/15 (without). Leading edge Tl = 0.890 x Tp (eq 18). Passage: unit-peak
// concentration Cup = 857 x Tp^-0.760 x Q'a^-0.079 (Tp hours, eq 7), and
// Td10 = 2e6 / Cup seconds (eq 19) = leading edge -> 10%-of-peak trailing.
function jobsonVelocities(daM2, Qm3s, QaM3s, slope) {
    if (!(daM2 > 0) || !(Qm3s > 0) || !(QaM3s > 0))
        return null;
    const g = 9.8;
    const Dp = (Math.pow(daM2, 1.25) * Math.sqrt(g)) / QaM3s; // D'a, eq 10
    const Qp = Qm3s / QaM3s; // Q'a, eq 11
    const qOverDa = Qm3s / daM2;
    let vp, vmp;
    if (slope > 0.00001) {
        const X = Math.pow(Dp, 0.919) * Math.pow(Qp, -0.469) * Math.pow(slope, 0.159) * qOverDa;
        vp = 0.094 + 0.0143 * X; // eq 12
        vmp = 0.25 + 0.02 * X; // eq 13 (99% envelope — fastest probable)
    }
    else {
        const X = Math.pow(Dp, 0.821) * Math.pow(Qp, -0.465) * qOverDa;
        vp = 0.020 + 0.051 * X; // eq 14
        vmp = 0.2 + 0.093 * X; // eq 15
    }
    return { vp, vmp, qPrime: Qp };
}
function jobsonPassageHours(tpHours, qPrime) {
    // eq 7 + eq 19: duration from leading edge to 10%-of-peak trailing edge
    if (!(tpHours > 0) || !(qPrime > 0))
        return null;
    const cup = 857 * Math.pow(tpHours, -0.760) * Math.pow(qPrime, -0.079); // s^-1
    return 2e6 / cup / 3600;
}
function computeTrace(data, config = {}) {
    const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
    const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
    const { comid, riverName, rows, gd, siteSets, receptorSets } = data;
    const n = rows.length;
    // 5. discharge: interpolate along trace
    // month for EROM lookups: as_of month if pinned, else current
    const eromMonth = data.asOf && data.asOf !== "live"
        ? parseInt(data.asOf.slice(5, 7), 10)
        : new Date().getMonth() + 1;
    let qMethod, qConfidence;
    const anchored = gd.some((g) => g.upstream_anchor);
    let qInterpUsed = null;
    if (gd.length >= 2) {
        const daQ = cfg.qInterp === "drainage-area" ? daWeightedQ(gd) : null;
        if (daQ) {
            // interpolate on the running-max DA: ArtificialPath/divergence reaches can
            // carry 0/dipping totdasqkm, which must not crater Q mid-trace
            if (daQ.kept.length < gd.length)
                log(`  DA interp: dropped ${gd.length - daQ.kept.length} gauge(s) with non-monotonic NWIS DA`);
            let runMax = 0;
            for (const r of rows) {
                runMax = Math.max(runMax, r.drainage_area_sqmi);
                r.Q_cfs = Math.max(daQ.q(runMax), 1.0);
            }
            qMethod = anchored ? "gauge-DA-interpolation+upstream-anchor" : "gauge-DA-interpolation";
            qInterpUsed = "drainage-area";
        }
        else {
            if (cfg.qInterp === "drainage-area")
                log("  DA interp unavailable (<2 monotonic gauge DAs) — falling back to distance interpolation");
            const fQ = interpClamped(gd.map((g) => g.trace_dist), gd.map((g) => g.discharge));
            for (const r of rows)
                r.Q_cfs = Math.max(fQ(r.cum_dist), 1.0);
            qMethod = anchored ? "gauge-interpolation+upstream-anchor" : "gauge-interpolation";
            qInterpUsed = "distance";
        }
        qConfidence = "HIGH";
    }
    else if (gd.length === 1) {
        const g = gd[0];
        for (const r of rows) {
            r.Q_cfs = Math.max(g.discharge * (r.drainage_area_sqmi / g.drainage_area), 1.0);
        }
        qMethod = anchored ? "upstream-anchor-DA-ratio" : "single-gauge-DA-ratio";
        qConfidence = "MEDIUM";
        log("  1 gauge: scaling by drainage-area ratio");
    }
    else {
        // EROM per-reach monthly modeled flow (gauge-adjusted; captures seasonal
        // yield — Montana June vs September differs ~5x) before the flat constant
        const eromOk = rows.filter((r) => r.qe_monthly && r.qe_monthly[eromMonth] > 0).length;
        if (eromOk >= rows.length * 0.8) {
            for (const r of rows) {
                const qe = r.qe_monthly ? r.qe_monthly[eromMonth] : null;
                r.Q_cfs = Math.max(qe > 0 ? qe : r.drainage_area_sqmi * 2.0, 1.0);
            }
            qMethod = `erom-monthly (month ${eromMonth})`;
            qConfidence = "MODERATE — modeled flow, no live gauge";
            log(`  NO gauges: EROM monthly modeled flow (month ${eromMonth}, ${eromOk}/${rows.length} reaches)`);
        }
        else {
            for (const r of rows)
                r.Q_cfs = Math.max(r.drainage_area_sqmi * 2.0, 1.0);
            qMethod = "drainage-area-constant";
            qConfidence = "LOW CONFIDENCE — NO GAUGE";
            log("  NO gauges, no EROM: Q ~ 2 cfs per sq mi drainage — LOW CONFIDENCE");
        }
    }
    // 4. Manning's depth per point (formula fallback), V = Q/A, safety factor
    const CFS_TO_M3S = Math.pow(3.281, 3);
    let ok = 0;
    for (const r of rows) {
        r.Q_m3s = r.Q_cfs / CFS_TO_M3S;
        const depthFormula = estimateGeometryPayton(r.drainage_area_sqmi)[1];
        const dm = calculateDepthManning(r.Q_m3s, r.width_final, r.slope, cfg.manningN);
        if (dm !== null && dm > 0.1 && dm < 20) {
            r.depth = dm;
            ok++;
        }
        else
            r.depth = depthFormula;
        r.area = r.width_final * r.depth;
        r.velocity = (r.Q_m3s / r.area) * cfg.safetyFactor;
    }
    log(`  Manning's depth: ${ok}/${n} points (${Math.round((100 * ok) / n)}%)`);
    // 5. impoundment rule: flowline passes through a LakePond/Reservoir waterbody
    // (minus known REMOVED dams whose waterbody flags linger in NHDPlus)
    const excluded = new Set([...REMOVED_IMPOUNDMENT_COMIDS, ...(cfg.impoundExcludeComids || [])]);
    let stopIdx = null, runM = 0.0;
    for (let i = 0; i < rows.length; i++) {
        const imp = (rows[i].wbareatype === "LakePond" || rows[i].wbareatype === "Reservoir") &&
            !excluded.has(rows[i].comid);
        rows[i].impounded = imp;
        if (imp) {
            runM += rows[i].distance;
            if (runM >= cfg.impoundStopKm * 1000) {
                stopIdx = i;
                break;
            }
        }
        else
            runM = 0.0;
    }
    let impoundNote = null;
    let df = rows;
    if (stopIdx !== null) {
        const name = rows[stopIdx].gnis_name || "impoundment";
        impoundNote =
            `Trace reaches an impounded reach (${name}) at ` +
                `${(rows[stopIdx].cum_dist / 1000).toFixed(1)} km — travel time beyond ` +
                `this point is NOT modeled (reservoir transit).`;
        df = rows.slice(0, stopIdx + 1);
        log(`  IMPOUNDMENT STOP: ${impoundNote}`);
    }
    // 6. travel time, cutoff, hourly markers
    const jobson = cfg.timingModel === "jobson";
    const CFS = Math.pow(3.281, 3);
    let cumT = 0.0, tPeak = 0.0, tFast = 0.0, jobsonDegraded = 0;
    for (const r of df) {
        r.seg_time = r.distance / r.velocity;
        cumT += r.seg_time;
        r.cum_time = cumT / 3600; // hydraulic (x safety) — always computed; feeds legacy mode
        if (jobson) {
            const daM2 = (r.drainage_area_km2 || 0) * 1e6;
            const QaM3s = r.qe_ma > 0 ? r.qe_ma / CFS : null;
            const jv = QaM3s ? jobsonVelocities(daM2, r.Q_m3s, QaM3s, r.slope) : null;
            let vp, vmp, qPrime;
            if (jv) {
                ({ vp, vmp, qPrime } = jv);
            }
            else {
                vp = r.velocity / cfg.safetyFactor;
                vmp = vp * 2;
                qPrime = 1;
                jobsonDegraded++;
            }
            tPeak += r.distance / vp;
            tFast += r.distance / vmp;
            r.t_peak = tPeak / 3600;
            r.t_lead = 0.890 * r.t_peak; // eq 18 — most probable first arrival
            r.t_lead_min = 0.890 * (tFast / 3600); // 99% envelope — earliest credible arrival
            const td10 = jobsonPassageHours(r.t_peak, qPrime);
            r.t_clear = td10 !== null ? r.t_lead + td10 : null; // 10%-of-peak trailing edge
        }
    }
    if (jobson && jobsonDegraded)
        log(`  Jobson: ${jobsonDegraded} points lacked EROM Qa (hydraulic fallback)`);
    const timeOf = (r) => (jobson ? r.t_lead : r.cum_time);
    df = df.filter((r) => timeOf(r) < cfg.maxHours);
    const maxCumTime = df.length ? timeOf(df[df.length - 1]) : 0;
    const nearestRow = (field, target) => {
        let bestD = Infinity, i = 0;
        for (let k = 0; k < df.length; k++) {
            const d = Math.abs(df[k][field] - target);
            if (d < bestD) {
                bestD = d;
                i = k;
            } // first occurrence of min (pandas idxmin)
        }
        return i;
    };
    const hourly = [];
    for (let hour = 1; hour <= cfg.maxHours; hour++) {
        if (maxCumTime < hour && Math.abs(maxCumTime - hour) > 0.5)
            break;
        const i = nearestRow(jobson ? "t_lead" : "cum_time", hour);
        const h = {
            hour,
            lat: df[i].lat, lon: df[i].lon,
            cum_dist_km: df[i].cum_dist / 1000,
            velocity_mph: df[i].velocity * 2.23694,
        };
        if (jobson) {
            // band at this hour: bulk (peak) position .. farthest credible (99% leading)
            const iPeak = nearestRow("t_peak", hour);
            const iFar = nearestRow("t_lead_min", hour);
            h.band = {
                peak: { i: iPeak, lat: df[iPeak].lat, lon: df[iPeak].lon, cum_dist_km: df[iPeak].cum_dist / 1000 },
                fastest: { i: iFar, lat: df[iFar].lat, lon: df[iFar].lon, cum_dist_km: df[iFar].cum_dist / 1000 },
            };
        }
        hourly.push(h);
    }
    // 7. site ETAs + receptor warnings (nearest trace point within buffer);
    // features were pre-fetched into data.siteSets/receptorSets
    function proximity(set) {
        var _c;
        const feats = set.feats; // [{name, lat, lon, ...extra}]
        const buf = (_c = set.buffer_m) !== null && _c !== void 0 ? _c : 400;
        const out = [];
        for (const f of feats) {
            if (f.lat === undefined || f.lon === undefined)
                continue;
            let bestD = Infinity, i = 0;
            for (let k = 0; k < df.length; k++) {
                const d = haversineM(df[k].lat, df[k].lon, f.lat, f.lon);
                if (d < bestD) {
                    bestD = d;
                    i = k;
                }
            }
            if (bestD <= buf) {
                const { lat: _a, lon: _b } = f, rest = __rest(f, ["lat", "lon"]);
                const row = Object.assign(Object.assign({}, rest), { eta_hr: Math.round(timeOf(df[i]) * 100) / 100, dist_km: Math.round((df[i].cum_dist / 1000) * 10) / 10, offset_m: Math.round(bestD), 
                    // modeled hydraulics at the site's trace point — feeds boom sizing
                    river_width_m: Math.round(df[i].width_final * 10) / 10, velocity_ms: Math.round(df[i].velocity * 1000) / 1000, depth_m: Math.round(df[i].depth * 100) / 100 });
                if (jobson) {
                    row.eta_early_hr = Math.round(df[i].t_lead_min * 100) / 100;
                    row.eta_peak_hr = Math.round(df[i].t_peak * 100) / 100;
                    row.clear_hr = df[i].t_clear !== null ? Math.round(df[i].t_clear * 100) / 100 : null;
                }
                out.push(row);
            }
        }
        out.sort((a, b) => a.eta_hr - b.eta_hr);
        return out;
    }
    const sites = [];
    for (const s of siteSets || [])
        sites.push(...proximity(s));
    sites.sort((a, b) => a.eta_hr - b.eta_hr);
    const warnings = impoundNote ? [impoundNote] : [];
    if (qConfidence !== "HIGH")
        warnings.unshift(`Flow estimate: ${qConfidence} (${qMethod})`);
    for (const s of receptorSets || []) {
        for (const r of proximity(s)) {
            warnings.push(`Receptor '${r.name}' ~${r.offset_m} m off trace at hr ${r.eta_hr} (${r.dist_km} km downstream)`);
        }
    }
    const distanceKm = df.length ? df[df.length - 1].cum_dist / 1000 : 0;
    const avgVel = df.length ? df.reduce((s, r) => s + r.velocity, 0) / df.length : 0;
    const glowMatched = rows.filter((r) => r.width_m > 0).length;
    const braidedN = rows.filter((r) => r.braided).length;
    // provenance — enough to reconstruct any output in an after-action review
    const runRecord = {
        engine_version: ENGINE_VERSION,
        generated_at: new Date().toISOString(),
        data_fetched_at: data.fetchedAt || null,
        spill_point: { lat: data.lat, lon: data.lon },
        snap: { comid, river: riverName, snapped_from_m: data.snapDistM !== undefined ? Math.round(data.snapDistM || 0) : null },
        timing_model: cfg.timingModel,
        safety_factor: cfg.safetyFactor,
        max_hours: cfg.maxHours,
        as_of: data.asOf || "live",
        q_method: qMethod,
        q_confidence: qConfidence,
        q_interp: qInterpUsed,
        gauges: gd.map((g) => (Object.assign({ station_id: g.station_id, name: g.name, discharge_cfs: g.discharge, trace_km: Math.round(g.trace_dist / 100) / 10 }, (g.upstream_anchor ? {
            upstream_anchor: true,
            anchor_gauge_q_cfs: g.anchor_gauge_q_cfs,
            anchor_gauge_da_sqmi: g.anchor_gauge_da_sqmi,
            anchor_upstream_km: g.anchor_upstream_m !== null ? Math.round(g.anchor_upstream_m / 100) / 10 : null,
        } : {})))),
        erom_month: qMethod.startsWith("erom") ? eromMonth : null,
        width_source: { glow_matched_points: glowMatched, total_points: rows.length, braided_points_formula_width: braidedN },
        jobson_degraded_points: jobson ? jobsonDegraded : null,
        impound_exclusions_applied: [...excluded].filter((c) => rows.some((r) => r.comid === c)),
        impound_stop_km: stopIdx !== null ? Math.round(rows[stopIdx].cum_dist / 100) / 10 : null,
    };
    const result = {
        river_name: riverName,
        comid,
        as_of: data.asOf || "live",
        safety_factor: cfg.safetyFactor,
        timing_model: cfg.timingModel,
        q_method: qMethod,
        q_confidence: qConfidence,
        gauges_used: gd.map((g) => ({
            station_id: g.station_id, name: g.name,
            discharge: g.discharge, trace_dist: g.trace_dist,
        })),
        distance_km_24h: distanceKm,
        avg_velocity_mph: avgVel * 2.23694,
        impound_stop: impoundNote,
        hourly,
        sites,
        warnings,
        runRecord,
        trace: df, // full row array for inspection/geojson export
    };
    log(`  RESULT: ${distanceKm.toFixed(1)} km in <= ${cfg.maxHours} h, ` +
        `avg ${result.avg_velocity_mph.toFixed(2)} mph, ${sites.length} sites, ${warnings.length} warnings`);
    return result;
}
function runTrace(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const data = yield fetchTraceData(lat, lon, config);
        return computeTrace(data, config);
    });
}
/**
 * Boom sizing from modeled hydraulics (planning-level, for GRPs that carry no
 * equipment quantities). Standard containment rule: oil entrains under a boom
 * when the flow component normal to it exceeds ~0.35 m/s (0.7 kt), so in
 * faster water the boom is angled with sin(theta) = entrainment/velocity and
 * the required length grows to width/sin(theta). Anchor sets from length.
 * Angles below ~15 deg (v > ~1.35 m/s) are flagged: use cascaded shorter booms.
 */
function estimateBoomNeeds(widthM, velocityMs, opts = {}) {
    var _c, _d, _e;
    const entrain = (_c = opts.entrainmentMs) !== null && _c !== void 0 ? _c : 0.35;
    const reservePct = (_d = opts.reservePct) !== null && _d !== void 0 ? _d : 20;
    const anchorSpacingFt = (_e = opts.anchorSpacingFt) !== null && _e !== void 0 ? _e : 100;
    if (!(widthM > 0) || !(velocityMs >= 0))
        return null;
    const sinTheta = velocityMs > entrain ? entrain / velocityMs : 1;
    const angleDeg = (Math.asin(sinTheta) * 180) / Math.PI;
    const lengthFt = (widthM / sinTheta) * 3.28084 * (1 + reservePct / 100);
    const boomFt = Math.ceil(lengthFt / 50) * 50; // round up to 50-ft sticks
    const anchors = Math.max(2, Math.ceil(boomFt / anchorSpacingFt) + 1);
    return {
        boom_ft: boomFt,
        boom_angle_deg: Math.round(angleDeg),
        anchors,
        deflection: velocityMs > entrain,
        cascade_advised: angleDeg < 15, // too fast for a single sweep — cascade booms
    };
}
/** Trace line + hourly markers as a GeoJSON FeatureCollection (widget preview). */
function toGeoJson(result) {
    const df = result.trace;
    const fc = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {
                    kind: "trace", river: result.river_name,
                    distance_km_24h: result.distance_km_24h,
                },
                geometry: {
                    type: "LineString",
                    coordinates: df.map((r) => [
                        Math.round(r.lon * 1e6) / 1e6, Math.round(r.lat * 1e6) / 1e6,
                    ]),
                },
            },
        ],
    };
    for (const h of result.hourly) {
        fc.features.push({
            type: "Feature",
            properties: { kind: "hour", hour: h.hour, cum_dist_km: h.cum_dist_km, velocity_mph: h.velocity_mph },
            geometry: {
                type: "Point",
                coordinates: [Math.round(h.lon * 1e6) / 1e6, Math.round(h.lat * 1e6) / 1e6],
            },
        });
    }
    return fc;
}


/***/ },

/***/ "esri/Graphic"
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ },

/***/ "esri/geometry/Point"
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ },

/***/ "esri/geometry/Polyline"
/*!*****************************************!*\
  !*** external "esri/geometry/Polyline" ***!
  \*****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__;

/***/ },

/***/ "esri/geometry/geometryEngine"
/*!***********************************************!*\
  !*** external "esri/geometry/geometryEngine" ***!
  \***********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__;

/***/ },

/***/ "esri/layers/FeatureLayer"
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ },

/***/ "esri/layers/GraphicsLayer"
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ },

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/spill-trace/src/runtime/widget.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/geometry/Polyline */ "esri/geometry/Polyline");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var _trace_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../trace-engine */ "./your-extensions/widgets/spill-trace/src/trace-engine.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Spill Trajectory widget — runtime.
 *
 * Click "Set spill point" → click the map → the golden-tested trace engine
 * (trace-engine.ts, parity-verified vs the Python oracle) draws an ephemeral
 * time-colored plume on a client-side GraphicsLayer with hourly markers,
 * plus an ETA-sorted strategy-site list and receptor warnings.
 * Nothing is persisted — Clear (or widget unmount) removes everything.
 */









const { useState, useRef, useCallback, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
// ETA color bands: <3 hr / 3–12 hr / 12–24 hr
const BAND_COLORS = [
    [3, '#d7191c'],
    [12, '#fdae61'],
    [24, '#2c7bb6'],
];
const bandColor = (hr) => {
    for (const [lim, c] of BAND_COLORS)
        if (hr < lim)
            return c;
    return '#2c7bb6';
};
const hexToRgb = (hex) => [
    parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16),
];
const normGuid = (v) => String(v || '').replace(/[{}]/g, '').toLowerCase();
/** Sum geodesic feet of drawn boom lines per site key (e.g. Snake Boom_Lines). */
function fetchDrawnBoom(cfg) {
    return __awaiter(this, void 0, void 0, function* () {
        const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: cfg.url });
        const q = fl.createQuery();
        q.where = cfg.where || '1=1';
        q.outFields = [cfg.siteKeyField];
        q.returnGeometry = true;
        q.outSpatialReference = { wkid: 4326 };
        const fs = yield fl.queryFeatures(q);
        const out = new Map();
        for (const f of fs.features) {
            const key = normGuid(f.attributes[cfg.siteKeyField]);
            if (!key || !f.geometry)
                continue;
            const ft = (0,esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_8__.geodesicLength)(f.geometry, 'feet');
            if (ft > 0)
                out.set(key, (out.get(key) || 0) + ft);
        }
        return out;
    });
}
const Widget = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [jmv, setJmv] = useState(null);
    const [arming, setArming] = useState(false);
    const [running, setRunning] = useState(false);
    const [status, setStatus] = useState('Click "Set spill point", then click the river.');
    const [result, setResult] = useState(null);
    const [safety, setSafety] = useState((_a = props.config.safetyFactor) !== null && _a !== void 0 ? _a : 1.5);
    const [diag, setDiag] = useState([]);
    const [hidden, setHidden] = useState(false);
    const layerRef = useRef(null);
    const clickHandleRef = useRef(null);
    // cached hydrology for the current spill point — safety-factor changes
    // recompute from this instantly instead of re-fetching NLDI/NWIS
    const cacheRef = useRef(null);
    // one graphics layer per widget lifetime; removed on unmount (ephemeral)
    useEffect(() => {
        return () => {
            if (clickHandleRef.current)
                clickHandleRef.current.remove();
            if (layerRef.current && jmv)
                jmv.view.map.remove(layerRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jmv]);
    const ensureLayer = (view) => {
        if (!layerRef.current) {
            layerRef.current = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({ title: 'Spill trajectory (ephemeral)', listMode: 'hide' });
            view.map.add(layerRef.current);
        }
        return layerRef.current;
    };
    // ---- providers: wrap configured layers for the engine ----
    // Failures are reported to the diagnostics list instead of killing the trace.
    const makeSiteProvider = (lc, defaultBuffer, label, notes) => {
        var _a;
        return ({
            buffer_m: (_a = lc.bufferM) !== null && _a !== void 0 ? _a : defaultBuffer,
            fetch: () => __awaiter(void 0, void 0, void 0, function* () {
                var _a;
                try {
                    const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: lc.url });
                    const q = fl.createQuery();
                    q.where = lc.where || '1=1';
                    q.outFields = [lc.nameField, ...(lc.extraFields || [])];
                    q.returnGeometry = true;
                    q.outSpatialReference = { wkid: 4326 };
                    const fs = yield fl.queryFeatures(q);
                    const rows = fs.features
                        .filter((f) => f.geometry && f.geometry.type === 'point')
                        .map((f) => {
                        const g = f.geometry;
                        const row = { name: f.attributes[lc.nameField], lat: g.y, lon: g.x };
                        for (const ef of lc.extraFields || [])
                            row[ef] = f.attributes[ef];
                        return row;
                    });
                    notes.push(`${label}: ${rows.length} point features loaded (buffer ${(_a = lc.bufferM) !== null && _a !== void 0 ? _a : defaultBuffer} m)`);
                    return rows;
                }
                catch (e) {
                    notes.push(`${label} FAILED: ${String(e).slice(0, 100)}`);
                    return [];
                }
            }),
        });
    };
    const makeWidthProvider = () => {
        const wl = props.config.widthLayer;
        if (!wl || !wl.url)
            return null;
        const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: wl.url });
        return (env) => __awaiter(void 0, void 0, void 0, function* () {
            const q = fl.createQuery();
            q.where = wl.where || '1=1';
            q.geometry = Object.assign(Object.assign({ type: 'extent' }, env), { spatialReference: { wkid: 4326 } });
            q.spatialRelationship = 'intersects';
            q.outFields = [wl.widthField];
            q.returnGeometry = true;
            q.outSpatialReference = { wkid: 4326 };
            const fs = yield fl.queryFeatures(q);
            const mids = [];
            for (const f of fs.features) {
                const g = f.geometry;
                if (g && g.paths && g.paths.length) {
                    const p = g.paths[0];
                    const m = p[Math.floor(p.length / 2)];
                    mids.push({ lat: m[1], lon: m[0], width: f.attributes[wl.widthField] || 0 });
                }
            }
            return mids;
        });
    };
    // ---- drawing ----
    const draw = (view, res, spill) => {
        const layer = ensureLayer(view);
        layer.removeAll();
        // spill point
        layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
            geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: spill.lat, longitude: spill.lon }),
            symbol: {
                type: 'simple-marker', style: 'x', size: 14,
                outline: { color: '#000', width: 3 },
            },
            popupTemplate: { title: 'Spill point', content: `${spill.lat.toFixed(5)}, ${spill.lon.toFixed(5)}` },
        }));
        // trace polyline, split into ETA color bands
        const rows = res.trace;
        let bandStart = 0;
        for (let i = 1; i <= rows.length; i++) {
            const done = i === rows.length;
            const bandChanged = !done && bandColor(rows[i].cum_time) !== bandColor(rows[bandStart].cum_time);
            if (done || bandChanged) {
                const seg = rows.slice(bandStart, Math.min(i + 1, rows.length));
                layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({ paths: [seg.map((r) => [r.lon, r.lat])], spatialReference: { wkid: 4326 } }),
                    symbol: { type: 'simple-line', color: bandColor(rows[bandStart].cum_time), width: 4 },
                }));
                bandStart = i;
            }
        }
        // Jobson uncertainty bands: translucent underlay from bulk (peak) position
        // to farthest credible (99% leading) position at each hour
        for (const h of res.hourly) {
            if (!h.band)
                continue;
            const i0 = Math.min(h.band.peak.i, h.band.fastest.i);
            const i1 = Math.max(h.band.peak.i, h.band.fastest.i);
            if (i1 <= i0)
                continue;
            const seg = rows.slice(i0, i1 + 1);
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({ paths: [seg.map((r) => [r.lon, r.lat])], spatialReference: { wkid: 4326 } }),
                symbol: { type: 'simple-line', color: [...hexToRgb(bandColor(h.hour)), 0.28], width: 14, cap: 'round' },
            }));
        }
        // hourly markers + labels
        for (const h of res.hourly) {
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: h.lat, longitude: h.lon }),
                symbol: {
                    type: 'simple-marker', size: 7, color: bandColor(h.hour),
                    outline: { color: '#fff', width: 1 },
                },
                popupTemplate: {
                    title: `Hour ${h.hour}`,
                    content: `${h.cum_dist_km.toFixed(1)} km downstream · ${h.velocity_mph.toFixed(1)} mph`,
                },
            }));
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: h.lat, longitude: h.lon }),
                symbol: {
                    type: 'text',
                    text: `${h.hour} hr`,
                    color: bandColor(h.hour),
                    haloColor: '#ffffff',
                    haloSize: 1.5,
                    yoffset: 9,
                    font: { size: 10, weight: 'bold', family: 'sans-serif' },
                },
            }));
        }
    };
    // ---- model config + equipment + compute/render (pure, reusable on cached data) ----
    const modelCfg = (sf) => {
        var _a, _b, _c, _d;
        return ({
            safetyFactor: sf,
            timingModel: (_a = props.config.timingModel) !== null && _a !== void 0 ? _a : 'hydraulic',
            minStreamOrder: (_b = props.config.minStreamOrder) !== null && _b !== void 0 ? _b : 4,
            maxHours: (_c = props.config.maxHours) !== null && _c !== void 0 ? _c : 24,
            maxDistanceKm: (_d = props.config.maxDistanceKm) !== null && _d !== void 0 ? _d : 300,
            verbose: false,
        });
    };
    const applyEquipment = (res, drawn) => {
        var _a, _b, _c, _d, _e;
        const eq = props.config.equipment;
        if ((eq === null || eq === void 0 ? void 0 : eq.enabled) === false)
            return;
        const rules = {
            entrainmentMs: (_a = eq === null || eq === void 0 ? void 0 : eq.entrainmentMs) !== null && _a !== void 0 ? _a : 0.35,
            anchorSpacingFt: (_b = eq === null || eq === void 0 ? void 0 : eq.anchorSpacingFt) !== null && _b !== void 0 ? _b : 100,
            reservePct: (_c = eq === null || eq === void 0 ? void 0 : eq.reservePct) !== null && _c !== void 0 ? _c : 20,
        };
        for (const s of res.sites) {
            const key = normGuid((_e = (_d = s.GlobalID) !== null && _d !== void 0 ? _d : s.globalid) !== null && _e !== void 0 ? _e : s.GLOBALID);
            const drawnFt = key ? drawn.get(key) : undefined;
            if (drawnFt) {
                const boomFt = Math.ceil(drawnFt / 50) * 50;
                s.boom = {
                    boom_ft: boomFt,
                    anchors: Math.max(2, Math.ceil(boomFt / rules.anchorSpacingFt) + 1),
                    source: 'drawn',
                };
            }
            else {
                const est = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.estimateBoomNeeds)(s.river_width_m, s.velocity_ms, rules);
                if (est)
                    s.boom = Object.assign(Object.assign({}, est), { source: 'est' });
            }
        }
    };
    const computeAndRender = (sf, fromCache = false) => {
        var _a;
        const c = cacheRef.current;
        if (!c || !jmv)
            return;
        const res = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.computeTrace)(c.data, modelCfg(sf));
        applyEquipment(res, c.drawn);
        draw(jmv.view, res, { lat: c.lat, lon: c.lon });
        if (layerRef.current)
            layerRef.current.visible = true;
        setHidden(false);
        setResult(res);
        setDiag([...c.fetchNotes, `${res.sites.length} site(s) within buffer of the trace.`]);
        setStatus(`${res.river_name || 'Trace'} — ${res.distance_km_24h.toFixed(1)} km in ≤ ${(_a = props.config.maxHours) !== null && _a !== void 0 ? _a : 24} h` +
            (fromCache ? ' · recomputed instantly from cached hydrology' : ''));
    };
    // ---- run ----
    const armClick = useCallback(() => {
        if (!jmv || arming || running)
            return;
        setArming(true);
        setStatus('Click the spill location on the map…');
        clickHandleRef.current = jmv.view.on('click', (evt) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            clickHandleRef.current.remove();
            clickHandleRef.current = null;
            setArming(false);
            const mp = evt.mapPoint;
            const lat = mp.latitude, lon = mp.longitude;
            setRunning(true);
            setResult(null);
            setDiag([]);
            setStatus(`Tracing from ${lat.toFixed(4)}, ${lon.toFixed(4)}…`);
            const notes = [];
            try {
                const cfg = props.config;
                const siteLayers = (cfg.siteLayers || []);
                const receptorLayers = (cfg.receptorLayers || []);
                if (!siteLayers.length)
                    notes.push('No site layers configured — add them in the widget settings (Site layers JSON).');
                // fetch everything once (trace, flows, widths, site/receptor features)
                const data = yield (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.fetchTraceData)(lat, lon, Object.assign(Object.assign({}, modelCfg(safety)), { widthProvider: makeWidthProvider(), siteProviders: siteLayers.map((lc, i) => makeSiteProvider(lc, 500, `Site layer ${i + 1}`, notes)), receptorProviders: receptorLayers.map((lc, i) => makeSiteProvider(lc, 800, `Receptor layer ${i + 1}`, notes)) }));
                // drawn boom lines: per-site-layer boomLayer (+ legacy global equipment.boomLayer)
                const drawn = new Map();
                const eq = cfg.equipment;
                if ((eq === null || eq === void 0 ? void 0 : eq.enabled) !== false) {
                    const boomCfgs = [];
                    for (const lc of siteLayers)
                        if ((_a = lc.boomLayer) === null || _a === void 0 ? void 0 : _a.url)
                            boomCfgs.push(lc.boomLayer);
                    if ((_b = eq === null || eq === void 0 ? void 0 : eq.boomLayer) === null || _b === void 0 ? void 0 : _b.url)
                        boomCfgs.push(eq.boomLayer);
                    const seen = new Set();
                    for (const bc of boomCfgs) {
                        const sig = `${bc.url}|${bc.siteKeyField}`;
                        if (seen.has(sig))
                            continue;
                        seen.add(sig);
                        try {
                            const m = yield fetchDrawnBoom(bc);
                            m.forEach((v, k) => drawn.set(k, (drawn.get(k) || 0) + v));
                            notes.push(`Boom lines (${sig.split('/').slice(-2)[0]}): drawn footage for ${m.size} site(s)`);
                        }
                        catch (e) {
                            notes.push(`Boom layer FAILED: ${String(e).slice(0, 90)}`);
                        }
                    }
                }
                cacheRef.current = { lat, lon, data, drawn, fetchNotes: notes.slice() };
                computeAndRender(safety);
            }
            catch (e) {
                setStatus(`Trace failed: ${String(e).slice(0, 120)}`);
                setDiag(notes);
            }
            finally {
                setRunning(false);
            }
        }));
    }, [jmv, arming, running, safety, props.config]);
    const clearAll = () => {
        if (clickHandleRef.current) {
            clickHandleRef.current.remove();
            clickHandleRef.current = null;
        }
        if (layerRef.current)
            layerRef.current.removeAll();
        cacheRef.current = null;
        setArming(false);
        setResult(null);
        setDiag([]);
        setHidden(false);
        setStatus('Cleared. Click "Set spill point" to run again.');
    };
    // briefing toggle: hide/show the trajectory graphics WITHOUT touching the
    // cached run — presenter can flip the model off during a slide and back
    const toggleVisible = () => {
        if (!layerRef.current)
            return;
        const v = !layerRef.current.visible;
        layerRef.current.visible = v;
        setHidden(!v);
    };
    const sites = (result === null || result === void 0 ? void 0 : result.sites) || [];
    const warnings = (result === null || result === void 0 ? void 0 : result.warnings) || [];
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { padding: 10, overflow: 'auto', fontSize: 13 }, children: [((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (v) => setJmv(v) })), !((_c = props.useMapWidgetIds) === null || _c === void 0 ? void 0 : _c.length) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00' }, children: "Select a Map widget in this widget's settings." })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary btn-sm", disabled: !jmv || arming || running, onClick: armClick, children: arming ? 'Click the map…' : running ? 'Tracing…' : 'Set spill point' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: running, onClick: clearAll, children: "Clear" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, onClick: toggleVisible, title: "Hide/show the trajectory on the map without losing the run (briefings)", children: hidden ? '👁 Show' : '👁 Hide' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, title: "Copy run provenance record (JSON) for after-action documentation \u2014 includes a replay URL", onClick: () => {
                            if (!(result === null || result === void 0 ? void 0 : result.runRecord) || !cacheRef.current)
                                return;
                            const rec = Object.assign({}, result.runRecord);
                            const u = new URL('https://whitewaterrescue.github.io/wri-exb-widgets/embed/');
                            u.searchParams.set('config', 'all-grps');
                            u.searchParams.set('lat', cacheRef.current.lat.toFixed(5));
                            u.searchParams.set('lon', cacheRef.current.lon.toFixed(5));
                            u.searchParams.set('asOf', rec.as_of !== 'live' ? rec.as_of : rec.generated_at.slice(0, 10));
                            u.searchParams.set('sf', String(safety));
                            rec.replay_url = u.toString();
                            navigator.clipboard.writeText(JSON.stringify(rec, null, 1)).then(() => setStatus('Run record copied (includes replay_url).'));
                        }, children: "\u2398 Record" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }, title: "Safety factor \u2014 changing it re-runs instantly from cached hydrology", children: ["SF", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: safety, disabled: running, onChange: (e) => {
                                    const v = parseFloat(e.target.value);
                                    setSafety(v);
                                    if (cacheRef.current && !running)
                                        computeAndRender(v, true);
                                }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.0, children: "1.0" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.25, children: "1.25" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.5, children: "1.5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 2.0, children: "2.0" })] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, minHeight: 18 }, children: [running && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "jimu-secondary-loading" }), " ", status] }), diag.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#888', fontSize: 11, marginBottom: 8 }, children: diag.map((d, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: d }, i)) })), warnings.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { background: '#fff3cd', border: '1px solid #ffeeba', padding: 6, marginBottom: 8, borderRadius: 4 }, children: warnings.map((w, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 2 }, children: ["\u26A0 ", w] }, i)) })), result && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, color: '#555' }, children: ["ETAs are estimates (\u00B120%), safety factor \u00D7", result.safety_factor, " applied \u2014 treat as bands, not appointments.", result.gauges_used.length
                        ? ` Flows: ${result.gauges_used.map((g) => g.station_id).join(', ')}.`
                        : ' No live gauges found — drainage-area flow estimate.'] })), sites.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { textAlign: 'left', borderBottom: '1px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "ETA" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Site" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "km" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Boom" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: sites.map((s, i) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderBottom: '1px solid #eee' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, title: s.eta_early_hr !== undefined
                                        ? `earliest credible ${s.eta_early_hr} hr · first arrival ${s.eta_hr} hr · peak ${s.eta_peak_hr} hr${s.clear_hr ? ` · clear ~${s.clear_hr} hr` : ''}`
                                        : '', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: {
                                                display: 'inline-block', width: 10, height: 10, borderRadius: 5,
                                                background: bandColor(s.eta_hr), marginRight: 4,
                                            } }), s.eta_early_hr !== undefined
                                            ? `${s.eta_early_hr.toFixed(1)}–${s.eta_hr.toFixed(1)} hr`
                                            : s.eta_hr < 1 ? `${Math.round(s.eta_hr * 60)} min` : `${s.eta_hr.toFixed(1)} hr`] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: s.name }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: s.dist_km.toFixed(1) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, title: s.boom
                                        ? `${s.boom.anchors} anchor sets${s.boom.boom_angle_deg ? ` · ${s.boom.boom_angle_deg}° deployment` : ''}${s.boom.cascade_advised ? ' · fast water: cascade multiple booms' : ''} (${s.boom.source === 'drawn' ? 'from drawn boom lines' : 'estimated from modeled width/velocity'})`
                                        : '', children: s.boom
                                        ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [s.boom.boom_ft.toLocaleString(), " ft", s.boom.cascade_advised && ' ⚡', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { color: '#999' }, children: [" ", s.boom.source === 'drawn' ? '✓' : 'est.'] })] })
                                        : '—' })] }, i))) }), sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderTop: '2px solid #ccc', fontWeight: 600 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { colSpan: 3, style: { padding: '3px 4px' }, children: ["Totals (", sites.filter((s) => s.boom).length, " boom sites)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '3px 4px', whiteSpace: 'nowrap' }, children: [sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.boom_ft) || 0); }, 0).toLocaleString(), " ft \u00B7", ' ', sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.anchors) || 0); }, 0), " anchors"] })] }) }))] })), result && sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#777', marginTop: 4 }, children: ["\u2713 = drawn boom lines \u00B7 est. = sized from modeled width/velocity (boom angled to keep normal flow \u2264 ", ((_e = (_d = props.config.equipment) === null || _d === void 0 ? void 0 : _d.entrainmentMs) !== null && _e !== void 0 ? _e : 0.35), " m/s, +", (_g = (_f = props.config.equipment) === null || _f === void 0 ? void 0 : _f.reservePct) !== null && _g !== void 0 ? _g : 20, "% reserve) \u00B7 \u26A1 = fast water, cascade booms"] })), result && sites.length === 0 && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#777' }, children: "No configured sites within reach of this trace." })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUM7QUFFdEMsTUFBTSxTQUFTLEdBQUcsaUNBQWlDLENBQUM7QUFDcEQsTUFBTSxTQUFTLEdBQUcsa0RBQWtELENBQUM7QUFDckUsTUFBTSxPQUFPLEdBQUcseUNBQXlDLENBQUM7QUFDMUQsTUFBTSxTQUFTLEdBQUcsMkNBQTJDLENBQUM7QUFFOUQ7Ozs7R0FJRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDaEQsMEZBQTBGO0lBQzFGLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUTtDQUM3QixDQUFDLENBQUM7QUFFSSxNQUFNLGNBQWMsR0FBRztJQUM1QixhQUFhLEVBQUUsR0FBRztJQUNsQixRQUFRLEVBQUUsRUFBRTtJQUNaLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsY0FBYyxFQUFFLENBQUM7SUFDakIsYUFBYSxFQUFFLElBQUksRUFBUywyREFBMkQ7SUFDdkYsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixpQkFBaUIsRUFBRSxHQUFHLEVBQU0scURBQXFEO0lBQ2pGLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsZUFBZSxFQUFFLEVBQUUsRUFBUywyREFBMkQ7SUFDdkYsT0FBTyxFQUFFLGVBQWUsRUFBSSw4RUFBOEU7SUFDMUcsYUFBYSxFQUFFLEdBQUc7SUFDbEIsb0JBQW9CLEVBQUUs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Q0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvdHJhY2UtZW5naW5lLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlsaW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIHRyYWNlLWVuZ2luZS5qcyDigJQgTmF0aW9uYWwgc3BpbGwgdHJhamVjdG9yeSBlbmdpbmUgKEpTIHBvcnQgb2Ygc3BpbGxfdHJhY2UucHkpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBGYWl0aGZ1bCBwb3J0IG9mIHRoZSBQeXRob24gb3JhY2xlLiBEZXBlbmRlbmN5LWZyZWUgRVNNOiBydW5zIGluIHBsYWluIE5vZGVcbiAqICg+PTE4LCBnbG9iYWwgZmV0Y2gpIGZvciBnb2xkZW4gdGVzdGluZyBhbmQgaW4gdGhlIGJyb3dzZXIgaW5zaWRlIHRoZSBFeEJcbiAqIHdpZGdldC4gTk8gQGFyY2dpcyBpbXBvcnRzIGhlcmUg4oCUIHRoZSB3aWRnZXQgd3JhcHMgdGhpcyBtb2R1bGUgYW5kIHN1cHBsaWVzXG4gKiBsYXllciBhY2Nlc3MgdGhyb3VnaCBpbmplY3RhYmxlIHByb3ZpZGVyczpcbiAqXG4gKiAgIGNvbmZpZy53aWR0aFByb3ZpZGVyKGVudmVsb3BlKSAgLT4gW3tsYXQsIGxvbiwgd2lkdGh9XSAgIChHTE9XIG1pZHBvaW50cyBpbiBiYm94KVxuICogICBjb25maWcuc2l0ZVByb3ZpZGVycyAgICAgICAgICAgIC0+IFt7bmFtZSwgYnVmZmVyX20sIGZldGNoOiBhc3luYyAoKSA9PiBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dfV1cbiAqICAgY29uZmlnLnJlY2VwdG9yUHJvdmlkZXJzICAgICAgICAtPiBzYW1lIHNoYXBlIGFzIHNpdGVQcm92aWRlcnNcbiAqXG4gKiBQb3J0IGdvdGNoYXMgaG9ub3JlZCAoc2VlIFJFQURNRSk6XG4gKiAgIDEuIGdlb3NlcnZlciBDUUwgQkJPWCBpcyBsYXQsbG9uIGF4aXMgb3JkZXIgKEVQU0c6NDI2OSAvIFdGUyAyLjApXG4gKiAgIDIuIEhSIE5IRFBsdXNJRCAhPSBNUiBjb21pZCDigJQgd2lkdGhzIHNhbXBsZWQgc3BhdGlhbGx5LCBuZXZlciBJRC1qb2luZWRcbiAqICAgMy4gaW1wb3VuZG1lbnQgPSB3YmFyZWF0eXBlIGluIChMYWtlUG9uZCwgUmVzZXJ2b2lyKVxuICogICA0LiB3aWR0aCBvdmVycmlkZSBzYW1wbGVkIGluIHdpbmRvd3M7IGZhaWx1cmUgZGVncmFkZXMgdG8gZm9ybXVsYSB3aWR0aHNcbiAqICAgNS4gTkxESS9nZW9zZXJ2ZXIgZW1wdHktMjAwIC0+IHJldHJ5IDN4IHdpdGggYmFja29mZlxuICogICA2LiBzbmFwIGNsaWNrIHRvIHN0cmVhbW9yZGUgPj0gbWluU3RyZWFtT3JkZXJcbiAqL1xuXG5leHBvcnQgY29uc3QgRU5HSU5FX1ZFUlNJT04gPSBcIjEuNC4wXCI7XG5cbmNvbnN0IE5MRElfQkFTRSA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvbmxkaVwiO1xuY29uc3QgR0VPU0VSVkVSID0gXCJodHRwczovL2FwaS53YXRlci51c2dzLmdvdi9nZW9zZXJ2ZXIvd21hZGF0YS9vd3NcIjtcbmNvbnN0IE5XSVNfSVYgPSBcImh0dHBzOi8vd2F0ZXJzZXJ2aWNlcy51c2dzLmdvdi9ud2lzL2l2L1wiO1xuY29uc3QgTldJU19TSVRFID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9zaXRlL1wiO1xuXG4vKipcbiAqIE5IRFBsdXMgTVIgd2F0ZXJib2R5IGZsYWdzIGxhZyByZWFsaXR5IOKAlCByZWFjaGVzIHRocm91Z2ggUkVNT1ZFRCBkYW1zIHN0aWxsXG4gKiBjYXJyeSB3YmFyZWF0eXBlIExha2VQb25kIGFuZCB3b3VsZCBmYWxzZS1zdG9wIHRoZSBjbG9jay4gS25vd24gcmVtb3ZhbHNcbiAqIGFyZSBleGNsdWRlZCBoZXJlIChleHRlbmRhYmxlIHBlci1ydW4gdmlhIGNvbmZpZy5pbXBvdW5kRXhjbHVkZUNvbWlkcykuXG4gKi9cbmV4cG9ydCBjb25zdCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUyA9IG5ldyBTZXQoW1xuICAvLyBNaWxsdG93biBEYW0sIENsYXJrIEZvcmsgYXQgQm9ubmVyIE1UIOKAlCByZW1vdmVkIDIwMDgtMjAxMCAocmVwb3J0ZWQgYnkgQ29keSAyMDI2LTA3LTA3KVxuICAyNDI5MzEyMCwgMjQyOTMxMjIsIDI0MjkzMTI0LFxuXSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgbWF4RGlzdGFuY2VLbTogMzAwLFxuICBtYXhIb3VyczogMjQsXG4gIHJlc29sdXRpb25NOiAxMDAuMCxcbiAgc2FmZXR5RmFjdG9yOiAxLjUsXG4gIG1hbm5pbmdOOiAwLjA0NSxcbiAgbWluU3RyZWFtT3JkZXI6IDQsXG4gIHdpZHRoUHJvdmlkZXI6IG51bGwsICAgICAgICAvLyBhc3luYyAoZW52IHt4bWluLHltaW4seG1heCx5bWF4fSkgPT4gW3tsYXQsIGxvbiwgd2lkdGh9XVxuICB3aWR0aFNhbXBsZVJhZGl1c006IDgwMCxcbiAgd2lkdGhXaW5kb3dQb2ludHM6IDEwMCwgICAgIC8vIHRyYWNlIHBvaW50cyBwZXIgb3ZlcnJpZGUgc2FtcGxpbmcgd2luZG93ICh+MTAga20pXG4gIHNpdGVQcm92aWRlcnM6IFtdLFxuICByZWNlcHRvclByb3ZpZGVyczogW10sXG4gIHVwc3RyZWFtR2F1Z2VLbTogMzAsICAgICAgICAvLyBzZWFyY2ggVU0gdGhpcyBmYXIgZm9yIGFuIHVwc3RyZWFtIGFuY2hvciBnYXVnZTsgMCA9IG9mZlxuICBxSW50ZXJwOiBcImRyYWluYWdlLWFyZWFcIiwgICAvLyAnZHJhaW5hZ2UtYXJlYScgKFEganVtcHMgYXQgY29uZmx1ZW5jZXMpIHwgJ2Rpc3RhbmNlJyAobGVnYWN5IGxpbmVhciBzbWVhcilcbiAgaW1wb3VuZFN0b3BLbTogMi4wLFxuICBpbXBvdW5kRXhjbHVkZUNvbWlkczogW10sICAgLy8gZXh0cmEgcmVtb3ZlZC1kYW0gY29taWRzIGJleW9uZCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEU1xuICB0aW1pbmdNb2RlbDogXCJoeWRyYXVsaWNcIiwgICAvLyAnaHlkcmF1bGljJyAoVj1RL0EgeCBzYWZldHkpIHwgJ2pvYnNvbicgKFVTR1MgV1JJUiA5Ni00MDEzIGR5ZS1zdHVkeSByZWdyZXNzaW9ucylcbiAgYXNPZjogbnVsbCwgICAgICAgICAgICAgICAgIC8vICdZWVlZLU1NLUREJyBoaXN0b3JpY2FsIFE7IG51bGwgPSBsaXZlXG4gIHZlcmJvc2U6IHRydWUsXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnNcblxuY29uc3QgUl9FQVJUSCA9IDYzNzEwMDguODtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhdmVyc2luZU0obGF0MSwgbG9uMSwgbGF0MiwgbG9uMikge1xuICBjb25zdCBwMSA9IChsYXQxICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IHAyID0gKGxhdDIgKiBNYXRoLlBJKSAvIDE4MDtcbiAgY29uc3QgZHAgPSBwMiAtIHAxO1xuICBjb25zdCBkbCA9ICgobG9uMiAtIGxvbjEpICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IGEgPSBNYXRoLnNpbihkcCAvIDIpICoqIDIgKyBNYXRoLmNvcyhwMSkgKiBNYXRoLmNvcyhwMikgKiBNYXRoLnNpbihkbCAvIDIpICoqIDI7XG4gIHJldHVybiAyICogUl9FQVJUSCAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xufVxuXG4vKiogUGF5dG9uJ3Mgd2lkdGgvZGVwdGggZm9ybXVsYXMgKGZhbGxiYWNrIHdoZW4gbm8gR0xPVyBkYXRhKS4gVmVyYmF0aW0uICovXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihkcmFpbmFnZUFyZWFTcU1pKSB7XG4gIGxldCB3aWR0aCwgZGVwdGg7XG4gIGlmIChkcmFpbmFnZUFyZWFTcU1pIDwgMTAwKSB7XG4gICAgd2lkdGggPSAxMC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwLCAwLjUpO1xuICAgIGRlcHRoID0gMC41ICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwLCAwLjMpO1xuICB9IGVsc2UgaWYgKGRyYWluYWdlQXJlYVNxTWkgPCAxMDAwKSB7XG4gICAgd2lkdGggPSA1MC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMCwgMC41KTtcbiAgICBkZXB0aCA9IDEuNSAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAsIDAuMyk7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAxNTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAwLCAwLjQpO1xuICAgIGRlcHRoID0gMy4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMDAsIDAuMyk7XG4gIH1cbiAgcmV0dXJuIFt3aWR0aCwgZGVwdGhdO1xufVxuXG4vKipcbiAqIE1hbm5pbmcncyBkZXB0aCB2aWEgYmlzZWN0aW9uIChQeXRob24gdXNlZCBzY2lweSBicmVudHEgb24gWzAuMSwgMjBdKS5cbiAqIFRoZSByZXNpZHVhbCBpcyBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgaW4gZGVwdGgsIHNvIGJpc2VjdGlvbiBjb252ZXJnZXMgdG9cbiAqIHRoZSBzYW1lIHJvb3QuIFJlcGxpY2F0ZXMgYnJlbnRxJ3MgZmFpbHVyZSBtb2RlOiBubyBzaWduIGNoYW5nZSBhY3Jvc3MgdGhlXG4gKiBicmFja2V0IC0+IG51bGwgKGNhbGxlciBmYWxscyBiYWNrIHRvIGZvcm11bGEgZGVwdGgpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGVwdGhNYW5uaW5nKFFtM3MsIHdpZHRoTSwgc2xvcGUsIG4gPSAwLjA0NSkge1xuICBpZiAoUW0zcyA8PSAwIHx8IHdpZHRoTSA8PSAwIHx8IHNsb3BlIDw9IDAuMDAwMDEpIHJldHVybiBudWxsO1xuICBjb25zdCByZXNpZHVhbCA9IChkZXB0aCkgPT4ge1xuICAgIGlmIChkZXB0aCA8PSAwLjAxKSByZXR1cm4gLVFtM3M7XG4gICAgY29uc3QgQSA9IHdpZHRoTSAqIGRlcHRoO1xuICAgIGNvbnN0IFAgPSB3aWR0aE0gKyAyICogZGVwdGg7XG4gICAgY29uc3QgUiA9IEEgLyBQO1xuICAgIHJldHVybiAoMSAvIG4pICogQSAqIE1hdGgucG93KFIsIDIgLyAzKSAqIE1hdGguc3FydChzbG9wZSkgLSBRbTNzO1xuICB9O1xuICBsZXQgbG8gPSAwLjEsIGhpID0gMjAuMDtcbiAgbGV0IGZsbyA9IHJlc2lkdWFsKGxvKSwgZmhpID0gcmVzaWR1YWwoaGkpO1xuICBpZiAoZmxvID09PSAwKSByZXR1cm4gbG87XG4gIGlmIChmaGkgPT09IDApIHJldHVybiBoaTtcbiAgaWYgKGZsbyAqIGZoaSA+IDApIHJldHVybiBudWxsOyAvLyBicmVudHEgcmFpc2VzIC0+IFB5dGhvbiByZXR1cm5zIE5vbmVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IG1pZCA9IDAuNSAqIChsbyArIGhpKTtcbiAgICBjb25zdCBmbSA9IHJlc2lkdWFsKG1pZCk7XG4gICAgaWYgKGZtID09PSAwIHx8IChoaSAtIGxvKSAvIDIgPCAxZS0xMCkgcmV0dXJuIG1pZDtcbiAgICBpZiAoZmxvICogZm0gPCAwKSB7IGhpID0gbWlkOyBmaGkgPSBmbTsgfSBlbHNlIHsgbG8gPSBtaWQ7IGZsbyA9IGZtOyB9XG4gIH1cbiAgcmV0dXJuIDAuNSAqIChsbyArIGhpKTtcbn1cblxuY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XG5cbi8qKiBHRVQvUE9TVCB3aXRoIHJldHJ5IOKAlCBOTERJL2dlb3NlcnZlciBpbnRlcm1pdHRlbnRseSByZXR1cm4gZW1wdHkgMjAwIGJvZGllcy4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEpzb24odXJsLCB7IHBhcmFtcyA9IG51bGwsIGRhdGEgPSBudWxsLCB0cmllcyA9IDMsIHRpbWVvdXRNcyA9IDkwMDAwIH0gPSB7fSkge1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDwgdHJpZXM7IGF0dGVtcHQrKykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGN0cmwuYWJvcnQoKSwgdGltZW91dE1zKTtcbiAgICAgIGxldCByZXNwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzaWduYWw6IGN0cmwuc2lnbmFsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHFzID0gcGFyYW1zID8gXCI/XCIgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgICAgICAgcmVzcCA9IGF3YWl0IGZldGNoKHVybCArIHFzLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3Aub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlc3Auc3RhdHVzfWApO1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3AuanNvbigpOyAvLyBlbXB0eSBib2R5IC0+IFN5bnRheEVycm9yIC0+IHJldHJ5XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbGFzdCA9IGU7XG4gICAgICBhd2FpdCBzbGVlcCgxNTAwICogKGF0dGVtcHQgKyAxKSk7XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgJHt1cmx9IGZhaWxlZCBhZnRlciAke3RyaWVzfSB0cmllczogJHtsYXN0fWApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUZXh0KHVybCwgcGFyYW1zLCB0aW1lb3V0TXMgPSAzMDAwMCkge1xuICBjb25zdCBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gY3RybC5hYm9ydCgpLCB0aW1lb3V0TXMpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwgKyBcIj9cIiArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3AudGV4dCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIGZldGNoXG5cbi8qKiBTbmFwIHRvIG5lYXJlc3QgcmVhY2ggd2l0aCBzdHJlYW1vcmRlID49IG1pbk9yZGVyIChnZW9zZXJ2ZXIgYmJveCBzZWFyY2gpLiAqL1xuYXN5bmMgZnVuY3Rpb24gc25hcENvbWlkKGxhdCwgbG9uLCBtaW5PcmRlcikge1xuICBjb25zdCBib3ggPSAwLjI7XG4gIC8vIE5PVEU6IEVQU0c6NDI2OSB1bmRlciBXRlMgMi4wIHVzZXMgbGF0LGxvbiBheGlzIG9yZGVyIGluIENRTCBCQk9YXG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKEdFT1NFUlZFUiwge1xuICAgIGRhdGE6IHtcbiAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXG4gICAgICB0eXBlTmFtZTogXCJ3bWFkYXRhOm5oZGZsb3dsaW5lX25ldHdvcmtcIiwgb3V0cHV0Rm9ybWF0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGNxbF9maWx0ZXI6XG4gICAgICAgIGBzdHJlYW1vcmRlID49ICR7bWluT3JkZXJ9IEFORCBCQk9YKHRoZV9nZW9tLGAgK1xuICAgICAgICBgJHtsYXQgLSBib3h9LCR7bG9uIC0gYm94fSwke2xhdCArIGJveH0sJHtsb24gKyBib3h9KWAsXG4gICAgICBjb3VudDogXCI1MDBcIixcbiAgICB9LFxuICB9KTtcbiAgbGV0IGJlc3QgPSBudWxsLCBiZXN0RCA9IEluZmluaXR5O1xuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5O1xuICAgIGNvbnN0IHBhdGhzID0gZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIiA/IFtnLmNvb3JkaW5hdGVzXSA6IGcuY29vcmRpbmF0ZXM7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpICs9IDMpIHsgLy8gZXZlcnkgM3JkIHZlcnRleFxuICAgICAgICBjb25zdCBwID0gcGF0aFtpXTtcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIHBbMV0sIHBbMF0pO1xuICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IGYucHJvcGVydGllczsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYmVzdCAhPT0gbnVsbCkgcmV0dXJuIFtOdW1iZXIoYmVzdC5jb21pZCksIGJlc3QuZ25pc19uYW1lID8/IG51bGwsIGJlc3REXTtcbiAgcmV0dXJuIFthd2FpdCBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbiksIG51bGwsIG51bGxdO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbikge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkL3Bvc2l0aW9uYCwge1xuICAgIHBhcmFtczogeyBjb29yZHM6IGBQT0lOVCgke2xvbn0gJHtsYXR9KWAgfSwgdGltZW91dE1zOiAzMDAwMCxcbiAgfSk7XG4gIHJldHVybiBOdW1iZXIoai5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLmlkZW50aWZpZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpRG1GbG93bGluZXMoY29taWQsIGRpc3RhbmNlS20pIHtcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC8ke2NvbWlkfS9uYXZpZ2F0aW9uL0RNL2Zsb3dsaW5lc2AsIHtcbiAgICBwYXJhbXM6IHsgZGlzdGFuY2U6IFN0cmluZyhNYXRoLnRydW5jKGRpc3RhbmNlS20pKSB9LFxuICB9KTtcbiAgY29uc3QgZ2VvbXMgPSBuZXcgTWFwKCk7IC8vIGNvbWlkIC0+IFtwYXRoc10gKFtbbG9uLGxhdF0sLi4uXSlcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBjaWQgPSBOdW1iZXIoZi5wcm9wZXJ0aWVzLm5oZHBsdXNfY29taWQpO1xuICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5O1xuICAgIGlmIChnLnR5cGUgPT09IFwiTGluZVN0cmluZ1wiKSBnZW9tcy5zZXQoY2lkLCBbZy5jb29yZGluYXRlc10pO1xuICAgIGVsc2UgaWYgKGcudHlwZSA9PT0gXCJNdWx0aUxpbmVTdHJpbmdcIikgZ2VvbXMuc2V0KGNpZCwgZy5jb29yZGluYXRlcyk7XG4gIH1cbiAgcmV0dXJuIGdlb21zO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpR2F1Z2VzKGNvbWlkLCBkaXN0YW5jZUttLCBtb2RlKSB7XG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvJHtjb21pZH0vbmF2aWdhdGlvbi8ke21vZGV9L253aXNzaXRlYCwge1xuICAgIHBhcmFtczogeyBkaXN0YW5jZTogU3RyaW5nKE1hdGgudHJ1bmMoZGlzdGFuY2VLbSkpIH0sXG4gIH0pO1xuICBjb25zdCBvdXQgPSBbXTtcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBzaWQgPSAoZi5wcm9wZXJ0aWVzLmlkZW50aWZpZXIgfHwgXCJcIikucmVwbGFjZShcIlVTR1MtXCIsIFwiXCIpO1xuICAgIGlmIChzaWQubGVuZ3RoID4gMTUpIGNvbnRpbnVlOyAvLyBjb29yZGluYXRlLXN0eWxlIElEcyAobm90ZWJvb2sgcnVsZSlcbiAgICBvdXQucHVzaCh7XG4gICAgICBzdGF0aW9uX2lkOiBzaWQsXG4gICAgICBuYW1lOiBmLnByb3BlcnRpZXMubmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgIGxhdDogZi5nZW9tZXRyeS5jb29yZGluYXRlc1sxXSxcbiAgICAgIGxvbjogZi5nZW9tZXRyeS5jb29yZGluYXRlc1swXSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1lcmdlIHRoZSBuZWFyZXN0IHVwc3RyZWFtIG1haW4tc3RlbSBnYXVnZSBpbnRvIHRoZSBsb2NhdGVkLWdhdWdlIGxpc3QgYXMgYVxuICogdmlydHVhbCBnYXVnZSBhdCB0aGUgc3BpbGwgcG9pbnQgKHRyYWNlX2Rpc3QgMCkuIFdpdGhvdXQgdGhpcywgY2xpY2tpbmcganVzdFxuICogRE9XTlNUUkVBTSBvZiBhIGdhdWdlIGRyb3BzIGl0IGZyb20gdGhlIERNIG5hdmlnYXRpb24gYW5kIHRoZSBuZXh0IGdhdWdlJ3MgUVxuICogaXMgYmFjay1jbGFtcGVkIG9udG8gdGhlIGZpcnN0IHJlYWNoIOKAlCB3aWxkbHkgd3Jvbmcgd2hlbiB0aGF0IGdhdWdlIHNpdHNcbiAqIGJlbG93IGEgbWFqb3IgY29uZmx1ZW5jZSAoR2FsbGF0aW4gYmVsb3cgTG9nYW4gLT4gTWlzc291cmkgYXQgVG9zdG9uKS5cbiAqIFEgaXMgdHJhbnNmZXJyZWQgYnkgZHJhaW5hZ2UtYXJlYSByYXRpbyAoc3RhbmRhcmQgVVNHUyB0cmFuc2ZlciksIHdoaWNoIGFsc29cbiAqIGtlZXBzIHRoZSBhbmNob3IgaG9uZXN0IHdoZW4gdGhlIFVNIHBhdGggY3Jvc3NlcyBhIGNvbmZsdWVuY2U6IHRoZSByYXRpb1xuICogc2NhbGVzIGEgdHJpYnV0YXJ5IGdhdWdlIGJhY2sgdXAgdG8gdGhlIGZsb3cgYXQgdGhlIGNsaWNrLlxuICogTm8tb3Agd2hlbiBhbiBvbi10cmFjZSBnYXVnZSBhbHJlYWR5IHNpdHMgd2l0aGluIGFuY2hvclNraXBNIG9mIHRoZSBzdGFydFxuICogKGl0IGFscmVhZHkgYW5jaG9ycyB0aGUgYm91bmRhcnkpLCB0aGUgc3RhdGlvbiBpcyBhbHJlYWR5IGxvY2F0ZWQsIG9yIHRoZVxuICogREEgdHJhbnNmZXIgaXMgb3V0c2lkZSBpdHMgY3JlZGlibGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVVwc3RyZWFtQW5jaG9yKGdkLCB1cCwgc3BpbGxEYVNxbWksIHsgYW5jaG9yU2tpcE0gPSA1MDAsIGRhUmF0aW9NYXggPSA0IH0gPSB7fSkge1xuICBpZiAoIXVwIHx8ICEodXAuZGlzY2hhcmdlID49IDApIHx8ICEodXAuZHJhaW5hZ2VfYXJlYSA+IDApIHx8ICEoc3BpbGxEYVNxbWkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoZ2Quc29tZSgoZykgPT4gZy5zdGF0aW9uX2lkID09PSB1cC5zdGF0aW9uX2lkKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoZ2Quc29tZSgoZykgPT4gZy50cmFjZV9kaXN0IDw9IGFuY2hvclNraXBNKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCByYXRpbyA9IHNwaWxsRGFTcW1pIC8gdXAuZHJhaW5hZ2VfYXJlYTtcbiAgaWYgKHJhdGlvIDwgMSAvIGRhUmF0aW9NYXggfHwgcmF0aW8gPiBkYVJhdGlvTWF4KSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IFt3LCBkZXBdID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihzcGlsbERhU3FtaSk7XG4gIGdkLnB1c2goe1xuICAgIHN0YXRpb25faWQ6IHVwLnN0YXRpb25faWQsIG5hbWU6IHVwLm5hbWUsIGxhdDogdXAubGF0LCBsb246IHVwLmxvbixcbiAgICBkaXNjaGFyZ2U6IHVwLmRpc2NoYXJnZSAqIHJhdGlvLCBkcmFpbmFnZV9hcmVhOiBzcGlsbERhU3FtaSxcbiAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiAwLjAsXG4gICAgdXBzdHJlYW1fYW5jaG9yOiB0cnVlLFxuICAgIGFuY2hvcl9nYXVnZV9xX2NmczogdXAuZGlzY2hhcmdlLCBhbmNob3JfZ2F1Z2VfZGFfc3FtaTogdXAuZHJhaW5hZ2VfYXJlYSxcbiAgICBhbmNob3JfdXBzdHJlYW1fbTogdXAudXBzdHJlYW1fbSA/PyBudWxsLFxuICB9KTtcbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKiBWQUFzIGZvciBhIGxpc3Qgb2YgQ09NSURzIGZyb20gVVNHUyBnZW9zZXJ2ZXIgKGJhdGNoZWQgUE9TVCkuICovXG5hc3luYyBmdW5jdGlvbiB2YWFCYXRjaChjb21pZHMpIHtcbiAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICBjb25zdCBDSFVOSyA9IDE1MDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21pZHMubGVuZ3RoOyBpICs9IENIVU5LKSB7XG4gICAgY29uc3QgY2h1bmsgPSBjb21pZHMuc2xpY2UoaSwgaSArIENIVU5LKTtcbiAgICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VydmljZTogXCJXRlNcIiwgdmVyc2lvbjogXCIyLjAuMFwiLCByZXF1ZXN0OiBcIkdldEZlYXR1cmVcIixcbiAgICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsXG4gICAgICAgIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGNxbF9maWx0ZXI6IGBjb21pZCBJTiAoJHtjaHVuay5qb2luKFwiLFwiKX0pYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICAgIGNvbnN0IHAgPSBmLnByb3BlcnRpZXM7XG4gICAgICAvLyBFUk9NIG1vbnRobHkgbW9kZWxlZCBmbG93IChnYXVnZS1hZGp1c3RlZCwgY2ZzKSDigJQgdW5nYXVnZWQgZmFsbGJhY2sgKyBKb2Jzb24gUWFcbiAgICAgIGNvbnN0IHFlID0ge307XG4gICAgICBmb3IgKGxldCBtID0gMTsgbSA8PSAxMjsgbSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBgcWVfJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgICAgIHFlW21dID0gcFtrXSA/PyBudWxsO1xuICAgICAgfVxuICAgICAgb3V0LnNldChOdW1iZXIocC5jb21pZCksIHtcbiAgICAgICAgaHlkcm9zZXE6IHAuaHlkcm9zZXEgPz8gbnVsbCxcbiAgICAgICAgc3RyZWFtb3JkZTogcC5zdHJlYW1vcmRlID8/IG51bGwsXG4gICAgICAgIHNsb3BlOiBwLnNsb3BlID8/IG51bGwsXG4gICAgICAgIHRvdGRhc3FrbTogcC50b3RkYXNxa20gPz8gbnVsbCxcbiAgICAgICAgZnR5cGU6IHAuZnR5cGUgPz8gbnVsbCxcbiAgICAgICAgZmNvZGU6IHAuZmNvZGUgPz8gbnVsbCxcbiAgICAgICAgZ25pc19uYW1lOiBwLmduaXNfbmFtZSA/PyBudWxsLFxuICAgICAgICAvLyBMYWtlUG9uZC9SZXNlcnZvaXIgPSBpbXBvdW5kZWQ7IFN0cmVhbVJpdmVyID0gYnJhaWRlZCBmcmVlLWZsb3dpbmdcbiAgICAgICAgd2JhcmVhdHlwZTogcC53YmFyZWF0eXBlID8/IG51bGwsXG4gICAgICAgIHZlX21hOiBwLnZlX21hID8/IG51bGwsXG4gICAgICAgIHFlX21hOiBwLnFlX21hID8/IG51bGwsICAgLy8gRVJPTSBtZWFuIGFubnVhbCBmbG93IChjZnMpIOKAlCBKb2Jzb24gUWFcbiAgICAgICAgcWVfbW9udGhseTogcWUsXG4gICAgICAgIC8vIE5IRFBsdXMgZGl2ZXJnZW5jZTogMCA9IG5vbmUsIDEgPSBtYWluIHBhdGgsIDIgPSBtaW5vciBwYXRoIG9mIGEgc3BsaXRcbiAgICAgICAgZGl2ZXJnZW5jZTogcC5kaXZlcmdlbmNlID8/IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIERpc2NoYXJnZSAoY2ZzKSArIGRyYWluYWdlIGFyZWEgKHNxIG1pKSBwZXIgZ2F1Z2UgdmlhIHBsYWluIE5XSVMgUkVTVC4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdhdWdlSW5mbyhzdGF0aW9uSWRzLCBhc09mID0gbnVsbCkge1xuICBjb25zdCBpbmZvID0gbmV3IE1hcCgpO1xuICBpZiAoIXN0YXRpb25JZHMubGVuZ3RoKSByZXR1cm4gaW5mbztcbiAgY29uc3Qgc2l0ZXMgPSBzdGF0aW9uSWRzLmpvaW4oXCIsXCIpO1xuXG4gIC8vIGRyYWluYWdlIGFyZWFzIChyZGIsIGV4cGFuZGVkIG91dHB1dClcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZ2V0VGV4dChOV0lTX1NJVEUsIHsgZm9ybWF0OiBcInJkYlwiLCBzaXRlcywgc2l0ZU91dHB1dDogXCJleHBhbmRlZFwiIH0pO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGwpID0+IGwgJiYgIWwuc3RhcnRzV2l0aChcIiNcIikpO1xuICAgIGlmIChsaW5lcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgaGRyID0gbGluZXNbMF0uc3BsaXQoXCJcXHRcIik7XG4gICAgICBjb25zdCBpU2l0ZSA9IGhkci5pbmRleE9mKFwic2l0ZV9ub1wiKTtcbiAgICAgIGNvbnN0IGlEYSA9IGhkci5pbmRleE9mKFwiZHJhaW5fYXJlYV92YVwiKTsgLy8gLTEgaWYgYWJzZW50XG4gICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMuc2xpY2UoMikpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoIDw9IE1hdGgubWF4KGlTaXRlLCBpRGEgPiAtMSA/IGlEYSA6IDApKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGRhID0gbnVsbDtcbiAgICAgICAgaWYgKGlEYSA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQocGFydHNbaURhXSk7XG4gICAgICAgICAgZGEgPSBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnNldChwYXJ0c1tpU2l0ZV0sIHsgZHJhaW5hZ2VfYXJlYTogZGEgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHsgLyogaWdub3JlIOKAlCBtYXRjaGVzIFB5dGhvbiAqLyB9XG5cbiAgLy8gZGlzY2hhcmdlXG4gIGNvbnN0IHBhcmFtcyA9IHsgZm9ybWF0OiBcImpzb25cIiwgc2l0ZXMsIHBhcmFtZXRlckNkOiBcIjAwMDYwXCIgfTtcbiAgaWYgKGFzT2YpIHsgcGFyYW1zLnN0YXJ0RFQgPSBhc09mOyBwYXJhbXMuZW5kRFQgPSBhc09mOyB9XG4gIGVsc2UgcGFyYW1zLnBlcmlvZCA9IFwiUDFEXCI7XG4gIHRyeSB7XG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oTldJU19JViwgeyBwYXJhbXMsIHRpbWVvdXRNczogNjAwMDAsIHRyaWVzOiAxIH0pO1xuICAgIGZvciAoY29uc3QgdHMgb2Ygaj8udmFsdWU/LnRpbWVTZXJpZXMgfHwgW10pIHtcbiAgICAgIGNvbnN0IHNpZCA9IHRzLnNvdXJjZUluZm8uc2l0ZUNvZGVbMF0udmFsdWU7XG4gICAgICBjb25zdCB2YWxzID0gdHMudmFsdWVzWzBdLnZhbHVlO1xuICAgICAgaWYgKCF2YWxzIHx8ICF2YWxzLmxlbmd0aCkgY29udGludWU7XG4gICAgICBjb25zdCBxID0gcGFyc2VGbG9hdCh2YWxzW3ZhbHMubGVuZ3RoIC0gMV0udmFsdWUpO1xuICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICBpZiAoIWluZm8uaGFzKHNpZCkpIGluZm8uc2V0KHNpZCwge30pO1xuICAgICAgICBpbmZvLmdldChzaWQpLmRpc2NoYXJnZSA9IHE7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHsgLyogaWdub3JlIOKAlCBtYXRjaGVzIFB5dGhvbiAqLyB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRyYWNlIGFzc2VtYmx5XG5cbi8qKiBPcmRlciBzZWdtZW50cyBkb3duc3RyZWFtIChoeWRyb3NlcSBkZXNjKSwgb3JpZW50LCB0cmltIHRvIHNwaWxsIHBvaW50LFxuICogIGVtaXQgfnJlc29sdXRpb25NIHNwYWNlZCBwb2ludHMgY2FycnlpbmcgVkFBIGF0dHJpYnV0ZXMuICovXG5mdW5jdGlvbiBhc3NlbWJsZVRyYWNlKGxhdCwgbG9uLCBnZW9tcywgdmFhLCByZXNvbHV0aW9uTSwgbG9nKSB7XG4gIGNvbnN0IHNlZ3MgPSBbXTtcbiAgZm9yIChjb25zdCBbY2lkLCBwYXRoc10gb2YgZ2VvbXMpIHtcbiAgICBjb25zdCB2ID0gdmFhLmdldChjaWQpO1xuICAgIGlmICghdiB8fCB2Lmh5ZHJvc2VxID09PSBudWxsIHx8IHYuaHlkcm9zZXEgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3QgY29vcmRzID0gcGF0aHMuZmxhdCgpOyAvLyBmbGF0dGVuIG11bHRpbGluZSBpbnRvIG9uZSB2ZXJ0ZXggbGlzdFxuICAgIGlmIChjb29yZHMubGVuZ3RoIDwgMikgY29udGludWU7XG4gICAgc2Vncy5wdXNoKHsgY29taWQ6IGNpZCwgY29vcmRzLCAuLi52IH0pO1xuICB9XG4gIHNlZ3Muc29ydCgoYSwgYikgPT4gYi5oeWRyb3NlcSAtIGEuaHlkcm9zZXEpOyAvLyBkb3duc3RyZWFtID0gZGVjcmVhc2luZyBoeWRyb3NlcVxuXG4gIC8vIG9yaWVudCBlYWNoIHNlZ21lbnQgc28gaXQgZmxvd3Mgc3RhcnQtPmVuZCwgY2hhaW5pbmcgZW5kcyB0byBzdGFydHNcbiAgbGV0IHByZXZFbmQgPSBudWxsO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2Vncykge1xuICAgIGxldCBjID0gcy5jb29yZHM7XG4gICAgaWYgKHByZXZFbmQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRTdGFydCA9IGhhdmVyc2luZU0ocHJldkVuZFsxXSwgcHJldkVuZFswXSwgY1swXVsxXSwgY1swXVswXSk7XG4gICAgICBjb25zdCBkRW5kID0gaGF2ZXJzaW5lTShwcmV2RW5kWzFdLCBwcmV2RW5kWzBdLCBjW2MubGVuZ3RoIC0gMV1bMV0sIGNbYy5sZW5ndGggLSAxXVswXSk7XG4gICAgICBpZiAoZEVuZCA8IGRTdGFydCkgYyA9IGMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHMuY29vcmRzID0gYztcbiAgICBwcmV2RW5kID0gY1tjLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgLy8gdHJpbSB0aGUgZmlyc3Qgc2VnbWVudCB0byBzdGFydCBhdCB0aGUgdmVydGV4IG5lYXJlc3QgdGhlIHNwaWxsIHBvaW50XG4gIGlmIChzZWdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGMwID0gc2Vnc1swXS5jb29yZHM7XG4gICAgbGV0IG1pbkkgPSAwLCBtaW5EID0gSW5maW5pdHk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjMC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIGMwW2ldWzFdLCBjMFtpXVswXSk7XG4gICAgICBpZiAoZCA8IG1pbkQpIHsgbWluRCA9IGQ7IG1pbkkgPSBpOyB9XG4gICAgfVxuICAgIGNvbnN0IHRyaW1tZWQgPSBjMC5zbGljZShtaW5JKTtcbiAgICBzZWdzWzBdLmNvb3JkcyA9IHRyaW1tZWQubGVuZ3RoID8gdHJpbW1lZCA6IFtjMFtjMC5sZW5ndGggLSAxXV07XG4gIH1cblxuICAvLyBmbGF0dGVuIHRvIGF0dHJpYnV0ZWQgcG9pbnRzLCBkb3duc2FtcGxlIHRvIHJlc29sdXRpb25NXG4gIGxldCBwdHMgPSBbXTtcbiAgZm9yIChjb25zdCBzIG9mIHNlZ3MpIHtcbiAgICBsZXQgc2xvcGUgPSBzLnNsb3BlO1xuICAgIGlmIChzbG9wZSA9PT0gbnVsbCB8fCBzbG9wZSA9PT0gdW5kZWZpbmVkIHx8IHNsb3BlIDwgMCkgc2xvcGUgPSAwLjAwMTsgLy8gLTk5OTggPSBtaXNzaW5nXG4gICAgZm9yIChjb25zdCBwIG9mIHMuY29vcmRzKSB7XG4gICAgICBwdHMucHVzaCh7XG4gICAgICAgIGxvbjogcFswXSwgbGF0OiBwWzFdLFxuICAgICAgICBkcmFpbmFnZV9hcmVhX2ttMjogcy50b3RkYXNxa20gfHwgMCxcbiAgICAgICAgc2xvcGUsXG4gICAgICAgIGZ0eXBlOiBzLmZ0eXBlLCB3YmFyZWF0eXBlOiBzLndiYXJlYXR5cGUsXG4gICAgICAgIGNvbWlkOiBzLmNvbWlkLFxuICAgICAgICBnbmlzX25hbWU6IHMuZ25pc19uYW1lLFxuICAgICAgICBxZV9tYTogcy5xZV9tYSwgcWVfbW9udGhseTogcy5xZV9tb250aGx5LFxuICAgICAgICBkaXZlcmdlbmNlOiBzLmRpdmVyZ2VuY2UgfHwgMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAocHRzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBrZWVwID0gW3B0c1swXV07XG4gICAgbGV0IGN1bSA9IDAuMDtcbiAgICBsZXQgbGFzdCA9IHB0c1swXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcCA9IHB0c1tpXTtcbiAgICAgIGN1bSArPSBoYXZlcnNpbmVNKGxhc3QubGF0LCBsYXN0LmxvbiwgcC5sYXQsIHAubG9uKTtcbiAgICAgIGxhc3QgPSBwO1xuICAgICAgaWYgKGN1bSA+PSByZXNvbHV0aW9uTSkgeyBrZWVwLnB1c2gocCk7IGN1bSA9IDAuMDsgfVxuICAgIH1cbiAgICBwdHMgPSBrZWVwO1xuICB9XG4gIGxvZyhgICB0cmFjZTogJHtzZWdzLmxlbmd0aH0gc2VnbWVudHMgLT4gJHtwdHMubGVuZ3RofSBwb2ludHMgKCR7c2Vncy5sZW5ndGggPyBzZWdzWzBdLmduaXNfbmFtZSA6IFwiP1wifSAuLi4pYCk7XG4gIHJldHVybiBbcHRzLCBzZWdzLmxlbmd0aCA/IHNlZ3NbMF0uZ25pc19uYW1lIDogbnVsbF07XG59XG5cbi8qKlxuICogREEtd2VpZ2h0ZWQgZGlzY2hhcmdlIGludGVycG9sYXRvciAodjEuNCk6IFEgYXMgYSBwaWVjZXdpc2UtbGluZWFyIGZ1bmN0aW9uXG4gKiBvZiBkcmFpbmFnZSBhcmVhIGJldHdlZW4gZ2F1Z2VzLCBEQS1yYXRpbyBleHRyYXBvbGF0ZWQgb3V0c2lkZSB0aGUgZ2F1Z2VcbiAqIHJhbmdlICh1bmlmb3JtLXlpZWxkIGFzc3VtcHRpb24g4oCUIHNhbWUgc2VtYW50aWNzIGFzIHRoZSBzaW5nbGUtZ2F1Z2UgcGF0aCkuXG4gKiBCZWNhdXNlIERBIGp1bXBzIGF0IGNvbmZsdWVuY2VzLCB0aGUgUSBqdW1wIGxhbmRzIEFUIHRoZSBjb25mbHVlbmNlIGluc3RlYWRcbiAqIG9mIHNtZWFyaW5nIGxpbmVhcmx5IG92ZXIgdGhlIGludGVyLWdhdWdlIGRpc3RhbmNlOyBpdCBhbHNvIGNhbid0IGJhY2stY2xhbXBcbiAqIGEgcG9zdC1jb25mbHVlbmNlIGdhdWdlJ3MgZnVsbCBRIG9udG8gYSBzbWFsbCB1cHN0cmVhbSB0cmlidXRhcnkuXG4gKiBHYXVnZXMgd2hvc2UgTldJUyBEQSBicmVha3MgZG93bnN0cmVhbSBtb25vdG9uaWNpdHkgYXJlIGRyb3BwZWQgKE5XSVMgYW5kXG4gKiBOSERQbHVzIGRlbGluZWF0aW9ucyBkaXNhZ3JlZSBvY2Nhc2lvbmFsbHkpLiBSZXR1cm5zIG51bGwgd2hlbiBmZXdlciB0aGFuIDJcbiAqIG1vbm90b25pYyBnYXVnZXMgcmVtYWluIOKAlCBjYWxsZXIgZmFsbHMgYmFjayB0byBkaXN0YW5jZSBpbnRlcnBvbGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFXZWlnaHRlZFEoZ2QpIHtcbiAgY29uc3Qga2VwdCA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2QpIHtcbiAgICBpZiAoIShnLmRyYWluYWdlX2FyZWEgPiAwKSB8fCAhKGcuZGlzY2hhcmdlID49IDApKSBjb250aW51ZTtcbiAgICBpZiAoa2VwdC5sZW5ndGggJiYgZy5kcmFpbmFnZV9hcmVhIDw9IGtlcHRba2VwdC5sZW5ndGggLSAxXS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcbiAgICBrZXB0LnB1c2goZyk7XG4gIH1cbiAgaWYgKGtlcHQubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGZRID0gaW50ZXJwQ2xhbXBlZChrZXB0Lm1hcCgoZykgPT4gZy5kcmFpbmFnZV9hcmVhKSwga2VwdC5tYXAoKGcpID0+IGcuZGlzY2hhcmdlKSk7XG4gIGNvbnN0IGRhMCA9IGtlcHRbMF0uZHJhaW5hZ2VfYXJlYSwgcTAgPSBrZXB0WzBdLmRpc2NoYXJnZTtcbiAgY29uc3QgZGFOID0ga2VwdFtrZXB0Lmxlbmd0aCAtIDFdLmRyYWluYWdlX2FyZWEsIHFOID0ga2VwdFtrZXB0Lmxlbmd0aCAtIDFdLmRpc2NoYXJnZTtcbiAgcmV0dXJuIHtcbiAgICBrZXB0LFxuICAgIHE6IChkYSkgPT4ge1xuICAgICAgaWYgKCEoZGEgPiAwKSkgcmV0dXJuIDEuMDtcbiAgICAgIGlmIChkYSA8PSBkYTApIHJldHVybiBxMCAqIChkYSAvIGRhMCk7XG4gICAgICBpZiAoZGEgPj0gZGFOKSByZXR1cm4gcU4gKiAoZGEgLyBkYU4pO1xuICAgICAgcmV0dXJuIGZRKGRhKTtcbiAgICB9LFxuICB9O1xufVxuXG4vKiogQ2xhbXBlZCBsaW5lYXIgaW50ZXJwb2xhdGlvbiAoc2NpcHkgaW50ZXJwMWQgd2l0aCBjbGFtcGVkIGZpbGxfdmFsdWUpLiAqL1xuZnVuY3Rpb24gaW50ZXJwQ2xhbXBlZCh4cywgeXMpIHtcbiAgcmV0dXJuICh4KSA9PiB7XG4gICAgaWYgKHggPD0geHNbMF0pIHJldHVybiB5c1swXTtcbiAgICBpZiAoeCA+PSB4c1t4cy5sZW5ndGggLSAxXSkgcmV0dXJuIHlzW3lzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBpID0gMTtcbiAgICB3aGlsZSAoeHNbaV0gPCB4KSBpKys7XG4gICAgY29uc3QgdCA9ICh4IC0geHNbaSAtIDFdKSAvICh4c1tpXSAtIHhzW2kgLSAxXSk7XG4gICAgcmV0dXJuIHlzW2kgLSAxXSArIHQgKiAoeXNbaV0gLSB5c1tpIC0gMV0pO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1haW4gbW9kZWxcbi8vXG4vLyBTcGxpdCBpbnRvIHR3byBzdGFnZXMgc28gdGhlIGV4cGVuc2l2ZSBwYXJ0IGlzIGNhY2hlYWJsZTpcbi8vICAgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIGNvbmZpZykgIOKAlCBBTEwgbmV0d29yayBJL086IHRyYWNlIGdlb21ldHJ5LCBWQUFzLFxuLy8gICAgIHdpZHRoIHNhbXBsaW5nLCBnYXVnZXMgKyBmbG93cywgc2l0ZS9yZWNlcHRvciBmZWF0dXJlcy4gU2FmZXR5IGZhY3Rvcixcbi8vICAgICBtYXggaG91cnMgZXRjLiBkbyBOT1QgYWZmZWN0IHRoaXMgc3RhZ2UuXG4vLyAgIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcpICAgICAgICDigJQgcHVyZSBtYXRoOiBRIGludGVycCwgTWFubmluZyBkZXB0aCxcbi8vICAgICB2ZWxvY2l0eSB4IHNhZmV0eSwgaW1wb3VuZG1lbnQsIHRyYXZlbCB0aW1lLCBob3VybHkgbWFya2Vycywgc2l0ZSBFVEFzLlxuLy8gICAgIERldGVybWluaXN0aWMgYW5kIHJlLXJ1bm5hYmxlIG9uIHRoZSBzYW1lIGRhdGEgKGZpZWxkcyBhcmUgb3ZlcndyaXR0ZW4sXG4vLyAgICAgcm93cyBhcmUgbmV2ZXIgc3RydWN0dXJhbGx5IG11dGF0ZWQpLlxuLy8gcnVuVHJhY2UoKSBjb21wb3NlcyB0aGUgdHdvIOKAlCBpZGVudGljYWwgYmVoYXZpb3IgdG8gdGhlIG9yaWdpbmFsLlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xuXG4gIGxvZyhgZmV0Y2hUcmFjZURhdGEoJHtsYXQudG9GaXhlZCg0KX0sICR7bG9uLnRvRml4ZWQoNCl9KSAgYXNPZj0ke2NmZy5hc09mIHx8IFwibGl2ZVwifWApO1xuXG4gIC8vIDEuIHRyYWNlIGdlb21ldHJ5IChvbmUgTkxESSBjYWxsKSArIFZBQSBiYXRjaCBqb2luXG4gIGNvbnN0IFtjb21pZCwgc25hcE5hbWUsIHNuYXBEXSA9IGF3YWl0IHNuYXBDb21pZChsYXQsIGxvbiwgY2ZnLm1pblN0cmVhbU9yZGVyKTtcbiAgbG9nKGAgIENPTUlEICR7Y29taWR9YCArIChzbmFwTmFtZSA/IGAgKCR7c25hcE5hbWV9LCBzbmFwcGVkICR7KHNuYXBEIC8gMTAwMCkudG9GaXhlZCgyKX0ga20pYCA6IFwiXCIpKTtcbiAgY29uc3QgZ2VvbXMgPSBhd2FpdCBubGRpRG1GbG93bGluZXMoY29taWQsIGNmZy5tYXhEaXN0YW5jZUttKTtcbiAgbG9nKGAgIE5MREkgRE0gZmxvd2xpbmVzOiAke2dlb21zLnNpemV9YCk7XG4gIGNvbnN0IHZhYSA9IGF3YWl0IHZhYUJhdGNoKFsuLi5nZW9tcy5rZXlzKCldKTtcbiAgY29uc3QgW3B0cywgcml2ZXJOYW1lXSA9IGFzc2VtYmxlVHJhY2UobGF0LCBsb24sIGdlb21zLCB2YWEsIGNmZy5yZXNvbHV0aW9uTSwgbG9nKTtcbiAgaWYgKHB0cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFjZSB0b28gc2hvcnRcIik7XG5cbiAgLy8gcGVyLXBvaW50IGFycmF5cyAobWlycm9ycyB0aGUgRGF0YUZyYW1lKVxuICBjb25zdCBuID0gcHRzLmxlbmd0aDtcbiAgY29uc3Qgcm93cyA9IHB0cy5tYXAoKHApID0+ICh7IC4uLnAgfSkpO1xuICByb3dzWzBdLmRpc3RhbmNlID0gMC4wO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgIHJvd3NbaV0uZGlzdGFuY2UgPSBoYXZlcnNpbmVNKHJvd3NbaSAtIDFdLmxhdCwgcm93c1tpIC0gMV0ubG9uLCByb3dzW2ldLmxhdCwgcm93c1tpXS5sb24pO1xuICB9XG4gIGxldCBjdW0gPSAwLjA7XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7IGN1bSArPSByLmRpc3RhbmNlOyByLmN1bV9kaXN0ID0gY3VtOyB9XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSByLmRyYWluYWdlX2FyZWFfc3FtaSA9IHIuZHJhaW5hZ2VfYXJlYV9rbTIgKiAwLjM4NjEwMjtcblxuICAvLyAyLiB3aWR0aHM6IGZvcm11bGEgYmFzZWxpbmUsIG9wdGlvbmFsIG92ZXJyaWRlIHByb3ZpZGVyLCAyeCBjYXAsIGJhY2t3YXJkIHNtb290aGluZ1xuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgIHIuZm9ybXVsYV93aWR0aCA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzBdO1xuICAgIHIud2lkdGhfbSA9IDAuMDtcbiAgfVxuICAvLyBicmFpZGVkLXJlYWNoIGZsYWc6IGFueSBOSERQbHVzIGRpdmVyZ2VuY2Ugd2l0aGluIH4xIGttICgxMCByb3dzKSDigJQgR0xPVyB3aWR0aHNcbiAgLy8gdGhlcmUgbWVhc3VyZSB0b3RhbCB3ZXR0ZWQgd2lkdGggYWNyb3NzIGJhcnMsIGluZmxhdGluZyBBIGFuZCBraWxsaW5nIHZlbG9jaXR5XG4gIHtcbiAgICBjb25zdCBXID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGxldCBicmFpZGVkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBrID0gTWF0aC5tYXgoMCwgaSAtIFcpOyBrIDw9IE1hdGgubWluKG4gLSAxLCBpICsgVyk7IGsrKykge1xuICAgICAgICBpZiAocm93c1trXS5kaXZlcmdlbmNlID4gMCkgeyBicmFpZGVkID0gdHJ1ZTsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICAgIHJvd3NbaV0uYnJhaWRlZCA9IGJyYWlkZWQ7XG4gICAgfVxuICAgIGNvbnN0IG5iID0gcm93cy5maWx0ZXIoKHIpID0+IHIuYnJhaWRlZCkubGVuZ3RoO1xuICAgIGlmIChuYikgbG9nKGAgIGJyYWlkZWQgZmxhZzogJHtuYn0vJHtufSB0cmFjZSBwb2ludHMgbmVhciBjaGFubmVsIGRpdmVyZ2VuY2VzIChHTE9XIG92ZXJyaWRlIGRpc2FibGVkIHRoZXJlKWApO1xuICB9XG5cbiAgaWYgKGNmZy53aWR0aFByb3ZpZGVyKSB7XG4gICAgLy8gSFIgTkhEUGx1c0lEICE9IE1SIGNvbWlkIOKAlCBzYW1wbGUgc3BhdGlhbGx5LCBpbiB3aW5kb3dzOyBuZXZlciBsZXQgdGhlXG4gICAgLy8gb3ZlcnJpZGUga2lsbCB0aGUgcnVuIChkZWdyYWRlIHRvIGZvcm11bGEgd2lkdGhzKS5cbiAgICBsZXQgbWlkcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBTVEVQID0gY2ZnLndpZHRoV2luZG93UG9pbnRzO1xuICAgICAgY29uc3QgcGFkID0gMC4wMztcbiAgICAgIGZvciAobGV0IGkwID0gMDsgaTAgPCBuOyBpMCArPSBTVEVQKSB7XG4gICAgICAgIGNvbnN0IHdpbiA9IHJvd3Muc2xpY2UoaTAsIGkwICsgU1RFUCk7XG4gICAgICAgIGNvbnN0IGVudiA9IHtcbiAgICAgICAgICB4bWluOiBNYXRoLm1pbiguLi53aW4ubWFwKChyKSA9PiByLmxvbikpIC0gcGFkLFxuICAgICAgICAgIHltaW46IE1hdGgubWluKC4uLndpbi5tYXAoKHIpID0+IHIubGF0KSkgLSBwYWQsXG4gICAgICAgICAgeG1heDogTWF0aC5tYXgoLi4ud2luLm1hcCgocikgPT4gci5sb24pKSArIHBhZCxcbiAgICAgICAgICB5bWF4OiBNYXRoLm1heCguLi53aW4ubWFwKChyKSA9PiByLmxhdCkpICsgcGFkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmZWF0cyA9IGF3YWl0IGNmZy53aWR0aFByb3ZpZGVyKGVudik7IC8vIFt7bGF0LCBsb24sIHdpZHRofV1cbiAgICAgICAgbWlkcy5wdXNoKC4uLmZlYXRzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2coYCAgV0lEVEggT1ZFUlJJREUgRkFJTEVEICgke1N0cmluZyhlKS5zbGljZSgwLCA4MCl9KSAtIGZhbGxpbmcgYmFjayB0byBmb3JtdWxhIHdpZHRoc2ApO1xuICAgICAgbWlkcyA9IFtdO1xuICAgIH1cbiAgICBpZiAobWlkcy5sZW5ndGgpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICAgIGlmIChyLmJyYWlkZWQpIHsgci53aWR0aF9tID0gMC4wOyBjb250aW51ZTsgfSAvLyBmb3JtdWxhIHdpZHRoIG9uIGJyYWlkZWQgcmVhY2hlc1xuICAgICAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgYmVzdFcgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IG0gb2YgbWlkcykge1xuICAgICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKHIubGF0LCByLmxvbiwgbS5sYXQsIG0ubG9uKTtcbiAgICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdFcgPSBtLndpZHRoIHx8IDA7IH1cbiAgICAgICAgfVxuICAgICAgICByLndpZHRoX20gPSBiZXN0RCA8PSBjZmcud2lkdGhTYW1wbGVSYWRpdXNNID8gYmVzdFcgOiAwLjA7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXRjaGVkID0gcm93cy5maWx0ZXIoKHIpID0+IHIud2lkdGhfbSA+IDApLmxlbmd0aDtcbiAgICAgIGxvZyhgICBHTE9XIHNwYXRpYWwgc2FtcGxlOiAke21pZHMubGVuZ3RofSBIUiBzZWdtZW50cywgd2lkdGhzIG1hdGNoZWQgYXQgJHttYXRjaGVkfS8ke259IHRyYWNlIHBvaW50c2ApO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgIHIud2lkdGhfZmluYWxfcmF3ID1cbiAgICAgIHIud2lkdGhfbSA+IDAgJiYgci53aWR0aF9tIDw9IHIuZm9ybXVsYV93aWR0aCAqIDIuMCA/IHIud2lkdGhfbSA6IHIuZm9ybXVsYV93aWR0aDtcbiAgfVxuICAvLyBwYW5kYXMgcm9sbGluZyh3aW5kb3c9NTEsIG1pbl9wZXJpb2RzPTEpLm1lYW4oKSDigJQgdHJhaWxpbmcgd2luZG93XG4gIHtcbiAgICBjb25zdCBXID0gNTE7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHN1bSArPSByb3dzW2ldLndpZHRoX2ZpbmFsX3JhdztcbiAgICAgIGlmIChpID49IFcpIHN1bSAtPSByb3dzW2kgLSBXXS53aWR0aF9maW5hbF9yYXc7XG4gICAgICByb3dzW2ldLndpZHRoX2ZpbmFsID0gc3VtIC8gTWF0aC5taW4oaSArIDEsIFcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIDMuIGRpc2NoYXJnZSBpbnB1dHM6IE5MREkgZG93bnN0cmVhbSBnYXVnZXMgLT4gTldJUyBRICgrREEpLCBsb2NhdGVkIG9uIHRyYWNlXG4gIGNvbnN0IGdhdWdlcyA9IGF3YWl0IG5sZGlHYXVnZXMoY29taWQsIGNmZy5tYXhEaXN0YW5jZUttLCBcIkRNXCIpO1xuICAvLyB1cHN0cmVhbS1hbmNob3IgY2FuZGlkYXRlczogbmVhcmVzdCBVTSBnYXVnZXMgKGZpeGVzIHRoZSBkaXNjb250aW51aXR5IHdoZW5cbiAgLy8gdGhlIGNsaWNrIGlzIGp1c3QgYmVsb3cgYSBnYXVnZSBhbmQgRE0gbmF2aWdhdGlvbiBubyBsb25nZXIgc2VlcyBpdClcbiAgbGV0IHVwQ2FuZHMgPSBbXTtcbiAgaWYgKGNmZy51cHN0cmVhbUdhdWdlS20gPiAwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRtSWRzID0gbmV3IFNldChnYXVnZXMubWFwKChnKSA9PiBnLnN0YXRpb25faWQpKTtcbiAgICAgIHVwQ2FuZHMgPSAoYXdhaXQgbmxkaUdhdWdlcyhjb21pZCwgY2ZnLnVwc3RyZWFtR2F1Z2VLbSwgXCJVTVwiKSlcbiAgICAgICAgLmZpbHRlcigodSkgPT4gIWRtSWRzLmhhcyh1LnN0YXRpb25faWQpKVxuICAgICAgICAubWFwKCh1KSA9PiAoeyAuLi51LCB1cHN0cmVhbV9tOiBoYXZlcnNpbmVNKGxhdCwgbG9uLCB1LmxhdCwgdS5sb24pIH0pKVxuICAgICAgICAuZmlsdGVyKCh1KSA9PiB1LnVwc3RyZWFtX20gPD0gY2ZnLnVwc3RyZWFtR2F1Z2VLbSAqIDEwMDApXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnVwc3RyZWFtX20gLSBiLnVwc3RyZWFtX20pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZyhgICBVTSBnYXVnZSBsb29rdXAgZmFpbGVkICgke1N0cmluZyhlKS5zbGljZSgwLCA4MCl9KSDigJQgbm8gdXBzdHJlYW0gYW5jaG9yYCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGFsbElkcyA9IFsuLi5uZXcgU2V0KFsuLi5nYXVnZXMsIC4uLnVwQ2FuZHNdLm1hcCgoZykgPT4gZy5zdGF0aW9uX2lkKSldO1xuICBjb25zdCBnaW5mbyA9IGF3YWl0IGdhdWdlSW5mbyhhbGxJZHMsIGNmZy5hc09mKTtcbiAgY29uc3QgZ2QgPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdhdWdlcykge1xuICAgIGNvbnN0IGkgPSBnaW5mby5nZXQoZy5zdGF0aW9uX2lkKSB8fCB7fTtcbiAgICBpZiAoaS5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCB8fCAhaS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcbiAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgaWR4ID0gMDtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0ocm93c1trXS5sYXQsIHJvd3Nba10ubG9uLCBnLmxhdCwgZy5sb24pO1xuICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGlkeCA9IGs7IH1cbiAgICB9XG4gICAgaWYgKGJlc3REID4gNTAwMCkgY29udGludWU7IC8vIGdhdWdlIG5vdCBvbiBvdXIgdHJhY2UgY29ycmlkb3JcbiAgICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oaS5kcmFpbmFnZV9hcmVhKTtcbiAgICBnZC5wdXNoKHtcbiAgICAgIC4uLmcsIGRpc2NoYXJnZTogaS5kaXNjaGFyZ2UsIGRyYWluYWdlX2FyZWE6IGkuZHJhaW5hZ2VfYXJlYSxcbiAgICAgIGFyZWE6IHcgKiBkZXAsIHRyYWNlX2Rpc3Q6IHJvd3NbaWR4XS5jdW1fZGlzdCxcbiAgICB9KTtcbiAgfVxuICBnZC5zb3J0KChhLCBiKSA9PiBhLnRyYWNlX2Rpc3QgLSBiLnRyYWNlX2Rpc3QpO1xuICBjb25zdCBzcGlsbERhU3FtaSA9IHJvd3NbMF0uZHJhaW5hZ2VfYXJlYV9zcW1pO1xuICBmb3IgKGNvbnN0IHUgb2YgdXBDYW5kcykge1xuICAgIGNvbnN0IGkgPSBnaW5mby5nZXQodS5zdGF0aW9uX2lkKSB8fCB7fTtcbiAgICBpZiAoaS5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCB8fCAhaS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcbiAgICBpZiAobWVyZ2VVcHN0cmVhbUFuY2hvcihnZCwgeyAuLi51LCBkaXNjaGFyZ2U6IGkuZGlzY2hhcmdlLCBkcmFpbmFnZV9hcmVhOiBpLmRyYWluYWdlX2FyZWEgfSwgc3BpbGxEYVNxbWkpKSB7XG4gICAgICBsb2coXG4gICAgICAgIGAgIHVwc3RyZWFtIGFuY2hvciAke3Uuc3RhdGlvbl9pZH0gJHt1Lm5hbWUuc2xpY2UoMCwgMzApfTogJHtNYXRoLnJvdW5kKGkuZGlzY2hhcmdlKX0gY2ZzIGAgK1xuICAgICAgICBgQCAkeyh1LnVwc3RyZWFtX20gLyAxMDAwKS50b0ZpeGVkKDEpfSBrbSB1cHN0cmVhbSAtPiAke01hdGgucm91bmQoaS5kaXNjaGFyZ2UgKiAoc3BpbGxEYVNxbWkgLyBpLmRyYWluYWdlX2FyZWEpKX0gY2ZzIGAgK1xuICAgICAgICBgYXQgc3BpbGwgcG9pbnQgKERBIHgkeyhzcGlsbERhU3FtaSAvIGkuZHJhaW5hZ2VfYXJlYSkudG9GaXhlZCgyKX0pYCxcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gYW4gb24tdHJhY2UgZ2F1Z2UgbmVhciB0aGUgc3RhcnQgYWxyZWFkeSBhbmNob3JzIHRoZSBib3VuZGFyeSDigJQgc3RvcCBsb29raW5nXG4gICAgaWYgKGdkLnNvbWUoKGcpID0+ICFnLnVwc3RyZWFtX2FuY2hvciAmJiBnLnRyYWNlX2Rpc3QgPD0gNTAwKSkgYnJlYWs7XG4gIH1cbiAgZm9yIChjb25zdCBnIG9mIGdkKSB7XG4gICAgbG9nKGAgIGdhdWdlICR7Zy5zdGF0aW9uX2lkfSAke2cubmFtZS5zbGljZSgwLCAzOCkucGFkRW5kKDM4KX0gJHtTdHJpbmcoTWF0aC5yb3VuZChnLmRpc2NoYXJnZSkpLnBhZFN0YXJ0KDgpfSBjZnMgQCAkeyhnLnRyYWNlX2Rpc3QgLyAxMDAwKS50b0ZpeGVkKDEpLnBhZFN0YXJ0KDYpfSBrbSR7Zy51cHN0cmVhbV9hbmNob3IgPyBcIiAodXBzdHJlYW0gYW5jaG9yKVwiIDogXCJcIn1gKTtcbiAgfVxuXG4gIC8vIDQuIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMgKGZldGNoZWQgaW4gcGFyYWxsZWw7IGpvaW5lZCBpbiBjb21wdXRlVHJhY2UpXG4gIGNvbnN0IGZldGNoU2V0cyA9IGFzeW5jIChwcm92aWRlcnMpID0+IFByb21pc2UuYWxsKFxuICAgIChwcm92aWRlcnMgfHwgW10pLm1hcChhc3luYyAocCkgPT4gKHtcbiAgICAgIGJ1ZmZlcl9tOiBwLmJ1ZmZlcl9tID8/IDQwMCxcbiAgICAgIGZlYXRzOiBhd2FpdCBwLmZldGNoKCksIC8vIFt7bmFtZSwgbGF0LCBsb24sIC4uLmV4dHJhfV1cbiAgICB9KSksXG4gICk7XG4gIGNvbnN0IFtzaXRlU2V0cywgcmVjZXB0b3JTZXRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIFtmZXRjaFNldHMoY2ZnLnNpdGVQcm92aWRlcnMpLCBmZXRjaFNldHMoY2ZnLnJlY2VwdG9yUHJvdmlkZXJzKV0sXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBsYXQsIGxvbiwgY29taWQsIHNuYXBOYW1lLCBzbmFwRGlzdE06IHNuYXBELCByaXZlck5hbWUsXG4gICAgcm93cywgZ2QsIHNpdGVTZXRzLCByZWNlcHRvclNldHMsXG4gICAgYXNPZjogY2ZnLmFzT2YgfHwgXCJsaXZlXCIsXG4gICAgZmV0Y2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSm9ic29uIChVU0dTIFdSSVIgOTYtNDAxMylcbi8vXG4vLyBEeWUtdHJhY2VyIHJlZ3Jlc3Npb25zIGZyb20gfjk4MCBzdWJyZWFjaGVzIC8gfjkwIFVTIHJpdmVycy4gVW5pdHM6IERhIG1eMixcbi8vIFEgJiBRYSBtXjMvcywgUyBkaW1lbnNpb25sZXNzLCB2ZWxvY2l0aWVzIG0vcy4gRXEgMTIvMTMgKHdpdGggc2xvcGUpIG9yXG4vLyAxNC8xNSAod2l0aG91dCkuIExlYWRpbmcgZWRnZSBUbCA9IDAuODkwIHggVHAgKGVxIDE4KS4gUGFzc2FnZTogdW5pdC1wZWFrXG4vLyBjb25jZW50cmF0aW9uIEN1cCA9IDg1NyB4IFRwXi0wLjc2MCB4IFEnYV4tMC4wNzkgKFRwIGhvdXJzLCBlcSA3KSwgYW5kXG4vLyBUZDEwID0gMmU2IC8gQ3VwIHNlY29uZHMgKGVxIDE5KSA9IGxlYWRpbmcgZWRnZSAtPiAxMCUtb2YtcGVhayB0cmFpbGluZy5cbmV4cG9ydCBmdW5jdGlvbiBqb2Jzb25WZWxvY2l0aWVzKGRhTTIsIFFtM3MsIFFhTTNzLCBzbG9wZSkge1xuICBpZiAoIShkYU0yID4gMCkgfHwgIShRbTNzID4gMCkgfHwgIShRYU0zcyA+IDApKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgZyA9IDkuODtcbiAgY29uc3QgRHAgPSAoTWF0aC5wb3coZGFNMiwgMS4yNSkgKiBNYXRoLnNxcnQoZykpIC8gUWFNM3M7IC8vIEQnYSwgZXEgMTBcbiAgY29uc3QgUXAgPSBRbTNzIC8gUWFNM3M7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBRJ2EsIGVxIDExXG4gIGNvbnN0IHFPdmVyRGEgPSBRbTNzIC8gZGFNMjtcbiAgbGV0IHZwLCB2bXA7XG4gIGlmIChzbG9wZSA+IDAuMDAwMDEpIHtcbiAgICBjb25zdCBYID0gTWF0aC5wb3coRHAsIDAuOTE5KSAqIE1hdGgucG93KFFwLCAtMC40NjkpICogTWF0aC5wb3coc2xvcGUsIDAuMTU5KSAqIHFPdmVyRGE7XG4gICAgdnAgPSAwLjA5NCArIDAuMDE0MyAqIFg7ICAgLy8gZXEgMTJcbiAgICB2bXAgPSAwLjI1ICsgMC4wMiAqIFg7ICAgICAvLyBlcSAxMyAoOTklIGVudmVsb3BlIOKAlCBmYXN0ZXN0IHByb2JhYmxlKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IFggPSBNYXRoLnBvdyhEcCwgMC44MjEpICogTWF0aC5wb3coUXAsIC0wLjQ2NSkgKiBxT3ZlckRhO1xuICAgIHZwID0gMC4wMjAgKyAwLjA1MSAqIFg7ICAgIC8vIGVxIDE0XG4gICAgdm1wID0gMC4yICsgMC4wOTMgKiBYOyAgICAgLy8gZXEgMTVcbiAgfVxuICByZXR1cm4geyB2cCwgdm1wLCBxUHJpbWU6IFFwIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2Jzb25QYXNzYWdlSG91cnModHBIb3VycywgcVByaW1lKSB7XG4gIC8vIGVxIDcgKyBlcSAxOTogZHVyYXRpb24gZnJvbSBsZWFkaW5nIGVkZ2UgdG8gMTAlLW9mLXBlYWsgdHJhaWxpbmcgZWRnZVxuICBpZiAoISh0cEhvdXJzID4gMCkgfHwgIShxUHJpbWUgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN1cCA9IDg1NyAqIE1hdGgucG93KHRwSG91cnMsIC0wLjc2MCkgKiBNYXRoLnBvdyhxUHJpbWUsIC0wLjA3OSk7IC8vIHNeLTFcbiAgcmV0dXJuIDJlNiAvIGN1cCAvIDM2MDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVHJhY2UoZGF0YSwgY29uZmlnID0ge30pIHtcbiAgY29uc3QgY2ZnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG4gIGNvbnN0IGxvZyA9IGNmZy52ZXJib3NlID8gKC4uLmEpID0+IGNvbnNvbGUubG9nKC4uLmEpIDogKCkgPT4ge307XG4gIGNvbnN0IHsgY29taWQsIHJpdmVyTmFtZSwgcm93cywgZ2QsIHNpdGVTZXRzLCByZWNlcHRvclNldHMgfSA9IGRhdGE7XG4gIGNvbnN0IG4gPSByb3dzLmxlbmd0aDtcblxuICAvLyA1LiBkaXNjaGFyZ2U6IGludGVycG9sYXRlIGFsb25nIHRyYWNlXG4gIC8vIG1vbnRoIGZvciBFUk9NIGxvb2t1cHM6IGFzX29mIG1vbnRoIGlmIHBpbm5lZCwgZWxzZSBjdXJyZW50XG4gIGNvbnN0IGVyb21Nb250aCA9IGRhdGEuYXNPZiAmJiBkYXRhLmFzT2YgIT09IFwibGl2ZVwiXG4gICAgPyBwYXJzZUludChkYXRhLmFzT2Yuc2xpY2UoNSwgNyksIDEwKVxuICAgIDogbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcblxuICBsZXQgcU1ldGhvZCwgcUNvbmZpZGVuY2U7XG4gIGNvbnN0IGFuY2hvcmVkID0gZ2Quc29tZSgoZykgPT4gZy51cHN0cmVhbV9hbmNob3IpO1xuICBsZXQgcUludGVycFVzZWQgPSBudWxsO1xuICBpZiAoZ2QubGVuZ3RoID49IDIpIHtcbiAgICBjb25zdCBkYVEgPSBjZmcucUludGVycCA9PT0gXCJkcmFpbmFnZS1hcmVhXCIgPyBkYVdlaWdodGVkUShnZCkgOiBudWxsO1xuICAgIGlmIChkYVEpIHtcbiAgICAgIC8vIGludGVycG9sYXRlIG9uIHRoZSBydW5uaW5nLW1heCBEQTogQXJ0aWZpY2lhbFBhdGgvZGl2ZXJnZW5jZSByZWFjaGVzIGNhblxuICAgICAgLy8gY2FycnkgMC9kaXBwaW5nIHRvdGRhc3FrbSwgd2hpY2ggbXVzdCBub3QgY3JhdGVyIFEgbWlkLXRyYWNlXG4gICAgICBpZiAoZGFRLmtlcHQubGVuZ3RoIDwgZ2QubGVuZ3RoKVxuICAgICAgICBsb2coYCAgREEgaW50ZXJwOiBkcm9wcGVkICR7Z2QubGVuZ3RoIC0gZGFRLmtlcHQubGVuZ3RofSBnYXVnZShzKSB3aXRoIG5vbi1tb25vdG9uaWMgTldJUyBEQWApO1xuICAgICAgbGV0IHJ1bk1heCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgICAgICBydW5NYXggPSBNYXRoLm1heChydW5NYXgsIHIuZHJhaW5hZ2VfYXJlYV9zcW1pKTtcbiAgICAgICAgci5RX2NmcyA9IE1hdGgubWF4KGRhUS5xKHJ1bk1heCksIDEuMCk7XG4gICAgICB9XG4gICAgICBxTWV0aG9kID0gYW5jaG9yZWQgPyBcImdhdWdlLURBLWludGVycG9sYXRpb24rdXBzdHJlYW0tYW5jaG9yXCIgOiBcImdhdWdlLURBLWludGVycG9sYXRpb25cIjtcbiAgICAgIHFJbnRlcnBVc2VkID0gXCJkcmFpbmFnZS1hcmVhXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjZmcucUludGVycCA9PT0gXCJkcmFpbmFnZS1hcmVhXCIpXG4gICAgICAgIGxvZyhcIiAgREEgaW50ZXJwIHVuYXZhaWxhYmxlICg8MiBtb25vdG9uaWMgZ2F1Z2UgREFzKSDigJQgZmFsbGluZyBiYWNrIHRvIGRpc3RhbmNlIGludGVycG9sYXRpb25cIik7XG4gICAgICBjb25zdCBmUSA9IGludGVycENsYW1wZWQoZ2QubWFwKChnKSA9PiBnLnRyYWNlX2Rpc3QpLCBnZC5tYXAoKGcpID0+IGcuZGlzY2hhcmdlKSk7XG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgci5RX2NmcyA9IE1hdGgubWF4KGZRKHIuY3VtX2Rpc3QpLCAxLjApO1xuICAgICAgcU1ldGhvZCA9IGFuY2hvcmVkID8gXCJnYXVnZS1pbnRlcnBvbGF0aW9uK3Vwc3RyZWFtLWFuY2hvclwiIDogXCJnYXVnZS1pbnRlcnBvbGF0aW9uXCI7XG4gICAgICBxSW50ZXJwVXNlZCA9IFwiZGlzdGFuY2VcIjtcbiAgICB9XG4gICAgcUNvbmZpZGVuY2UgPSBcIkhJR0hcIjtcbiAgfSBlbHNlIGlmIChnZC5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBnID0gZ2RbMF07XG4gICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChnLmRpc2NoYXJnZSAqIChyLmRyYWluYWdlX2FyZWFfc3FtaSAvIGcuZHJhaW5hZ2VfYXJlYSksIDEuMCk7XG4gICAgfVxuICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwidXBzdHJlYW0tYW5jaG9yLURBLXJhdGlvXCIgOiBcInNpbmdsZS1nYXVnZS1EQS1yYXRpb1wiO1xuICAgIHFDb25maWRlbmNlID0gXCJNRURJVU1cIjtcbiAgICBsb2coXCIgIDEgZ2F1Z2U6IHNjYWxpbmcgYnkgZHJhaW5hZ2UtYXJlYSByYXRpb1wiKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFUk9NIHBlci1yZWFjaCBtb250aGx5IG1vZGVsZWQgZmxvdyAoZ2F1Z2UtYWRqdXN0ZWQ7IGNhcHR1cmVzIHNlYXNvbmFsXG4gICAgLy8geWllbGQg4oCUIE1vbnRhbmEgSnVuZSB2cyBTZXB0ZW1iZXIgZGlmZmVycyB+NXgpIGJlZm9yZSB0aGUgZmxhdCBjb25zdGFudFxuICAgIGNvbnN0IGVyb21PayA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnFlX21vbnRobHkgJiYgci5xZV9tb250aGx5W2Vyb21Nb250aF0gPiAwKS5sZW5ndGg7XG4gICAgaWYgKGVyb21PayA+PSByb3dzLmxlbmd0aCAqIDAuOCkge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgY29uc3QgcWUgPSByLnFlX21vbnRobHkgPyByLnFlX21vbnRobHlbZXJvbU1vbnRoXSA6IG51bGw7XG4gICAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChxZSA+IDAgPyBxZSA6IHIuZHJhaW5hZ2VfYXJlYV9zcW1pICogMi4wLCAxLjApO1xuICAgICAgfVxuICAgICAgcU1ldGhvZCA9IGBlcm9tLW1vbnRobHkgKG1vbnRoICR7ZXJvbU1vbnRofSlgOyBxQ29uZmlkZW5jZSA9IFwiTU9ERVJBVEUg4oCUIG1vZGVsZWQgZmxvdywgbm8gbGl2ZSBnYXVnZVwiO1xuICAgICAgbG9nKGAgIE5PIGdhdWdlczogRVJPTSBtb250aGx5IG1vZGVsZWQgZmxvdyAobW9udGggJHtlcm9tTW9udGh9LCAke2Vyb21Pa30vJHtyb3dzLmxlbmd0aH0gcmVhY2hlcylgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuUV9jZnMgPSBNYXRoLm1heChyLmRyYWluYWdlX2FyZWFfc3FtaSAqIDIuMCwgMS4wKTtcbiAgICAgIHFNZXRob2QgPSBcImRyYWluYWdlLWFyZWEtY29uc3RhbnRcIjsgcUNvbmZpZGVuY2UgPSBcIkxPVyBDT05GSURFTkNFIOKAlCBOTyBHQVVHRVwiO1xuICAgICAgbG9nKFwiICBOTyBnYXVnZXMsIG5vIEVST006IFEgfiAyIGNmcyBwZXIgc3EgbWkgZHJhaW5hZ2Ug4oCUIExPVyBDT05GSURFTkNFXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIDQuIE1hbm5pbmcncyBkZXB0aCBwZXIgcG9pbnQgKGZvcm11bGEgZmFsbGJhY2spLCBWID0gUS9BLCBzYWZldHkgZmFjdG9yXG4gIGNvbnN0IENGU19UT19NM1MgPSBNYXRoLnBvdygzLjI4MSwgMyk7XG4gIGxldCBvayA9IDA7XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci5RX20zcyA9IHIuUV9jZnMgLyBDRlNfVE9fTTNTO1xuICAgIGNvbnN0IGRlcHRoRm9ybXVsYSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzFdO1xuICAgIGNvbnN0IGRtID0gY2FsY3VsYXRlRGVwdGhNYW5uaW5nKHIuUV9tM3MsIHIud2lkdGhfZmluYWwsIHIuc2xvcGUsIGNmZy5tYW5uaW5nTik7XG4gICAgaWYgKGRtICE9PSBudWxsICYmIGRtID4gMC4xICYmIGRtIDwgMjApIHsgci5kZXB0aCA9IGRtOyBvaysrOyB9XG4gICAgZWxzZSByLmRlcHRoID0gZGVwdGhGb3JtdWxhO1xuICAgIHIuYXJlYSA9IHIud2lkdGhfZmluYWwgKiByLmRlcHRoO1xuICAgIHIudmVsb2NpdHkgPSAoci5RX20zcyAvIHIuYXJlYSkgKiBjZmcuc2FmZXR5RmFjdG9yO1xuICB9XG4gIGxvZyhgICBNYW5uaW5nJ3MgZGVwdGg6ICR7b2t9LyR7bn0gcG9pbnRzICgke01hdGgucm91bmQoKDEwMCAqIG9rKSAvIG4pfSUpYCk7XG5cbiAgLy8gNS4gaW1wb3VuZG1lbnQgcnVsZTogZmxvd2xpbmUgcGFzc2VzIHRocm91Z2ggYSBMYWtlUG9uZC9SZXNlcnZvaXIgd2F0ZXJib2R5XG4gIC8vIChtaW51cyBrbm93biBSRU1PVkVEIGRhbXMgd2hvc2Ugd2F0ZXJib2R5IGZsYWdzIGxpbmdlciBpbiBOSERQbHVzKVxuICBjb25zdCBleGNsdWRlZCA9IG5ldyBTZXQoWy4uLlJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTLCAuLi4oY2ZnLmltcG91bmRFeGNsdWRlQ29taWRzIHx8IFtdKV0pO1xuICBsZXQgc3RvcElkeCA9IG51bGwsIHJ1bk0gPSAwLjA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltcCA9IChyb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiTGFrZVBvbmRcIiB8fCByb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiUmVzZXJ2b2lyXCIpICYmXG4gICAgICAhZXhjbHVkZWQuaGFzKHJvd3NbaV0uY29taWQpO1xuICAgIHJvd3NbaV0uaW1wb3VuZGVkID0gaW1wO1xuICAgIGlmIChpbXApIHtcbiAgICAgIHJ1bk0gKz0gcm93c1tpXS5kaXN0YW5jZTtcbiAgICAgIGlmIChydW5NID49IGNmZy5pbXBvdW5kU3RvcEttICogMTAwMCkgeyBzdG9wSWR4ID0gaTsgYnJlYWs7IH1cbiAgICB9IGVsc2UgcnVuTSA9IDAuMDtcbiAgfVxuICBsZXQgaW1wb3VuZE5vdGUgPSBudWxsO1xuICBsZXQgZGYgPSByb3dzO1xuICBpZiAoc3RvcElkeCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5hbWUgPSByb3dzW3N0b3BJZHhdLmduaXNfbmFtZSB8fCBcImltcG91bmRtZW50XCI7XG4gICAgaW1wb3VuZE5vdGUgPVxuICAgICAgYFRyYWNlIHJlYWNoZXMgYW4gaW1wb3VuZGVkIHJlYWNoICgke25hbWV9KSBhdCBgICtcbiAgICAgIGAkeyhyb3dzW3N0b3BJZHhdLmN1bV9kaXN0IC8gMTAwMCkudG9GaXhlZCgxKX0ga20g4oCUIHRyYXZlbCB0aW1lIGJleW9uZCBgICtcbiAgICAgIGB0aGlzIHBvaW50IGlzIE5PVCBtb2RlbGVkIChyZXNlcnZvaXIgdHJhbnNpdCkuYDtcbiAgICBkZiA9IHJvd3Muc2xpY2UoMCwgc3RvcElkeCArIDEpO1xuICAgIGxvZyhgICBJTVBPVU5ETUVOVCBTVE9QOiAke2ltcG91bmROb3RlfWApO1xuICB9XG5cbiAgLy8gNi4gdHJhdmVsIHRpbWUsIGN1dG9mZiwgaG91cmx5IG1hcmtlcnNcbiAgY29uc3Qgam9ic29uID0gY2ZnLnRpbWluZ01vZGVsID09PSBcImpvYnNvblwiO1xuICBjb25zdCBDRlMgPSBNYXRoLnBvdygzLjI4MSwgMyk7XG4gIGxldCBjdW1UID0gMC4wLCB0UGVhayA9IDAuMCwgdEZhc3QgPSAwLjAsIGpvYnNvbkRlZ3JhZGVkID0gMDtcbiAgZm9yIChjb25zdCByIG9mIGRmKSB7XG4gICAgci5zZWdfdGltZSA9IHIuZGlzdGFuY2UgLyByLnZlbG9jaXR5O1xuICAgIGN1bVQgKz0gci5zZWdfdGltZTtcbiAgICByLmN1bV90aW1lID0gY3VtVCAvIDM2MDA7IC8vIGh5ZHJhdWxpYyAoeCBzYWZldHkpIOKAlCBhbHdheXMgY29tcHV0ZWQ7IGZlZWRzIGxlZ2FjeSBtb2RlXG4gICAgaWYgKGpvYnNvbikge1xuICAgICAgY29uc3QgZGFNMiA9IChyLmRyYWluYWdlX2FyZWFfa20yIHx8IDApICogMWU2O1xuICAgICAgY29uc3QgUWFNM3MgPSByLnFlX21hID4gMCA/IHIucWVfbWEgLyBDRlMgOiBudWxsO1xuICAgICAgY29uc3QganYgPSBRYU0zcyA/IGpvYnNvblZlbG9jaXRpZXMoZGFNMiwgci5RX20zcywgUWFNM3MsIHIuc2xvcGUpIDogbnVsbDtcbiAgICAgIGxldCB2cCwgdm1wLCBxUHJpbWU7XG4gICAgICBpZiAoanYpIHsgKHsgdnAsIHZtcCwgcVByaW1lIH0gPSBqdik7IH1cbiAgICAgIGVsc2UgeyB2cCA9IHIudmVsb2NpdHkgLyBjZmcuc2FmZXR5RmFjdG9yOyB2bXAgPSB2cCAqIDI7IHFQcmltZSA9IDE7IGpvYnNvbkRlZ3JhZGVkKys7IH1cbiAgICAgIHRQZWFrICs9IHIuZGlzdGFuY2UgLyB2cDtcbiAgICAgIHRGYXN0ICs9IHIuZGlzdGFuY2UgLyB2bXA7XG4gICAgICByLnRfcGVhayA9IHRQZWFrIC8gMzYwMDtcbiAgICAgIHIudF9sZWFkID0gMC44OTAgKiByLnRfcGVhazsgICAgICAgICAgICAgIC8vIGVxIDE4IOKAlCBtb3N0IHByb2JhYmxlIGZpcnN0IGFycml2YWxcbiAgICAgIHIudF9sZWFkX21pbiA9IDAuODkwICogKHRGYXN0IC8gMzYwMCk7ICAgIC8vIDk5JSBlbnZlbG9wZSDigJQgZWFybGllc3QgY3JlZGlibGUgYXJyaXZhbFxuICAgICAgY29uc3QgdGQxMCA9IGpvYnNvblBhc3NhZ2VIb3VycyhyLnRfcGVhaywgcVByaW1lKTtcbiAgICAgIHIudF9jbGVhciA9IHRkMTAgIT09IG51bGwgPyByLnRfbGVhZCArIHRkMTAgOiBudWxsOyAvLyAxMCUtb2YtcGVhayB0cmFpbGluZyBlZGdlXG4gICAgfVxuICB9XG4gIGlmIChqb2Jzb24gJiYgam9ic29uRGVncmFkZWQpIGxvZyhgICBKb2Jzb246ICR7am9ic29uRGVncmFkZWR9IHBvaW50cyBsYWNrZWQgRVJPTSBRYSAoaHlkcmF1bGljIGZhbGxiYWNrKWApO1xuICBjb25zdCB0aW1lT2YgPSAocikgPT4gKGpvYnNvbiA/IHIudF9sZWFkIDogci5jdW1fdGltZSk7XG4gIGRmID0gZGYuZmlsdGVyKChyKSA9PiB0aW1lT2YocikgPCBjZmcubWF4SG91cnMpO1xuICBjb25zdCBtYXhDdW1UaW1lID0gZGYubGVuZ3RoID8gdGltZU9mKGRmW2RmLmxlbmd0aCAtIDFdKSA6IDA7XG4gIGNvbnN0IG5lYXJlc3RSb3cgPSAoZmllbGQsIHRhcmdldCkgPT4ge1xuICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGRmLmxlbmd0aDsgaysrKSB7XG4gICAgICBjb25zdCBkID0gTWF0aC5hYnMoZGZba11bZmllbGRdIC0gdGFyZ2V0KTtcbiAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfSAvLyBmaXJzdCBvY2N1cnJlbmNlIG9mIG1pbiAocGFuZGFzIGlkeG1pbilcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH07XG4gIGNvbnN0IGhvdXJseSA9IFtdO1xuICBmb3IgKGxldCBob3VyID0gMTsgaG91ciA8PSBjZmcubWF4SG91cnM7IGhvdXIrKykge1xuICAgIGlmIChtYXhDdW1UaW1lIDwgaG91ciAmJiBNYXRoLmFicyhtYXhDdW1UaW1lIC0gaG91cikgPiAwLjUpIGJyZWFrO1xuICAgIGNvbnN0IGkgPSBuZWFyZXN0Um93KGpvYnNvbiA/IFwidF9sZWFkXCIgOiBcImN1bV90aW1lXCIsIGhvdXIpO1xuICAgIGNvbnN0IGggPSB7XG4gICAgICBob3VyLFxuICAgICAgbGF0OiBkZltpXS5sYXQsIGxvbjogZGZbaV0ubG9uLFxuICAgICAgY3VtX2Rpc3Rfa206IGRmW2ldLmN1bV9kaXN0IC8gMTAwMCxcbiAgICAgIHZlbG9jaXR5X21waDogZGZbaV0udmVsb2NpdHkgKiAyLjIzNjk0LFxuICAgIH07XG4gICAgaWYgKGpvYnNvbikge1xuICAgICAgLy8gYmFuZCBhdCB0aGlzIGhvdXI6IGJ1bGsgKHBlYWspIHBvc2l0aW9uIC4uIGZhcnRoZXN0IGNyZWRpYmxlICg5OSUgbGVhZGluZylcbiAgICAgIGNvbnN0IGlQZWFrID0gbmVhcmVzdFJvdyhcInRfcGVha1wiLCBob3VyKTtcbiAgICAgIGNvbnN0IGlGYXIgPSBuZWFyZXN0Um93KFwidF9sZWFkX21pblwiLCBob3VyKTtcbiAgICAgIGguYmFuZCA9IHtcbiAgICAgICAgcGVhazogeyBpOiBpUGVhaywgbGF0OiBkZltpUGVha10ubGF0LCBsb246IGRmW2lQZWFrXS5sb24sIGN1bV9kaXN0X2ttOiBkZltpUGVha10uY3VtX2Rpc3QgLyAxMDAwIH0sXG4gICAgICAgIGZhc3Rlc3Q6IHsgaTogaUZhciwgbGF0OiBkZltpRmFyXS5sYXQsIGxvbjogZGZbaUZhcl0ubG9uLCBjdW1fZGlzdF9rbTogZGZbaUZhcl0uY3VtX2Rpc3QgLyAxMDAwIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBob3VybHkucHVzaChoKTtcbiAgfVxuXG4gIC8vIDcuIHNpdGUgRVRBcyArIHJlY2VwdG9yIHdhcm5pbmdzIChuZWFyZXN0IHRyYWNlIHBvaW50IHdpdGhpbiBidWZmZXIpO1xuICAvLyBmZWF0dXJlcyB3ZXJlIHByZS1mZXRjaGVkIGludG8gZGF0YS5zaXRlU2V0cy9yZWNlcHRvclNldHNcbiAgZnVuY3Rpb24gcHJveGltaXR5KHNldCkge1xuICAgIGNvbnN0IGZlYXRzID0gc2V0LmZlYXRzOyAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXG4gICAgY29uc3QgYnVmID0gc2V0LmJ1ZmZlcl9tID8/IDQwMDtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHMpIHtcbiAgICAgIGlmIChmLmxhdCA9PT0gdW5kZWZpbmVkIHx8IGYubG9uID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgICAgbGV0IGJlc3REID0gSW5maW5pdHksIGkgPSAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShkZltrXS5sYXQsIGRmW2tdLmxvbiwgZi5sYXQsIGYubG9uKTtcbiAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGkgPSBrOyB9XG4gICAgICB9XG4gICAgICBpZiAoYmVzdEQgPD0gYnVmKSB7XG4gICAgICAgIGNvbnN0IHsgbGF0OiBfYSwgbG9uOiBfYiwgLi4ucmVzdCB9ID0gZjtcbiAgICAgICAgY29uc3Qgcm93ID0ge1xuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgZXRhX2hyOiBNYXRoLnJvdW5kKHRpbWVPZihkZltpXSkgKiAxMDApIC8gMTAwLFxuICAgICAgICAgIGRpc3Rfa206IE1hdGgucm91bmQoKGRmW2ldLmN1bV9kaXN0IC8gMTAwMCkgKiAxMCkgLyAxMCxcbiAgICAgICAgICBvZmZzZXRfbTogTWF0aC5yb3VuZChiZXN0RCksXG4gICAgICAgICAgLy8gbW9kZWxlZCBoeWRyYXVsaWNzIGF0IHRoZSBzaXRlJ3MgdHJhY2UgcG9pbnQg4oCUIGZlZWRzIGJvb20gc2l6aW5nXG4gICAgICAgICAgcml2ZXJfd2lkdGhfbTogTWF0aC5yb3VuZChkZltpXS53aWR0aF9maW5hbCAqIDEwKSAvIDEwLFxuICAgICAgICAgIHZlbG9jaXR5X21zOiBNYXRoLnJvdW5kKGRmW2ldLnZlbG9jaXR5ICogMTAwMCkgLyAxMDAwLFxuICAgICAgICAgIGRlcHRoX206IE1hdGgucm91bmQoZGZbaV0uZGVwdGggKiAxMDApIC8gMTAwLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoam9ic29uKSB7XG4gICAgICAgICAgcm93LmV0YV9lYXJseV9ociA9IE1hdGgucm91bmQoZGZbaV0udF9sZWFkX21pbiAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgcm93LmV0YV9wZWFrX2hyID0gTWF0aC5yb3VuZChkZltpXS50X3BlYWsgKiAxMDApIC8gMTAwO1xuICAgICAgICAgIHJvdy5jbGVhcl9ociA9IGRmW2ldLnRfY2xlYXIgIT09IG51bGwgPyBNYXRoLnJvdW5kKGRmW2ldLnRfY2xlYXIgKiAxMDApIC8gMTAwIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBvdXQucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cbiAgICBvdXQuc29ydCgoYSwgYikgPT4gYS5ldGFfaHIgLSBiLmV0YV9ocik7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGNvbnN0IHNpdGVzID0gW107XG4gIGZvciAoY29uc3QgcyBvZiBzaXRlU2V0cyB8fCBbXSkgc2l0ZXMucHVzaCguLi5wcm94aW1pdHkocykpO1xuICBzaXRlcy5zb3J0KChhLCBiKSA9PiBhLmV0YV9ociAtIGIuZXRhX2hyKTtcbiAgY29uc3Qgd2FybmluZ3MgPSBpbXBvdW5kTm90ZSA/IFtpbXBvdW5kTm90ZV0gOiBbXTtcbiAgaWYgKHFDb25maWRlbmNlICE9PSBcIkhJR0hcIikgd2FybmluZ3MudW5zaGlmdChgRmxvdyBlc3RpbWF0ZTogJHtxQ29uZmlkZW5jZX0gKCR7cU1ldGhvZH0pYCk7XG4gIGZvciAoY29uc3QgcyBvZiByZWNlcHRvclNldHMgfHwgW10pIHtcbiAgICBmb3IgKGNvbnN0IHIgb2YgcHJveGltaXR5KHMpKSB7XG4gICAgICB3YXJuaW5ncy5wdXNoKFxuICAgICAgICBgUmVjZXB0b3IgJyR7ci5uYW1lfScgfiR7ci5vZmZzZXRfbX0gbSBvZmYgdHJhY2UgYXQgaHIgJHtyLmV0YV9ocn0gKCR7ci5kaXN0X2ttfSBrbSBkb3duc3RyZWFtKWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpc3RhbmNlS20gPSBkZi5sZW5ndGggPyBkZltkZi5sZW5ndGggLSAxXS5jdW1fZGlzdCAvIDEwMDAgOiAwO1xuICBjb25zdCBhdmdWZWwgPSBkZi5sZW5ndGggPyBkZi5yZWR1Y2UoKHMsIHIpID0+IHMgKyByLnZlbG9jaXR5LCAwKSAvIGRmLmxlbmd0aCA6IDA7XG4gIGNvbnN0IGdsb3dNYXRjaGVkID0gcm93cy5maWx0ZXIoKHIpID0+IHIud2lkdGhfbSA+IDApLmxlbmd0aDtcbiAgY29uc3QgYnJhaWRlZE4gPSByb3dzLmZpbHRlcigocikgPT4gci5icmFpZGVkKS5sZW5ndGg7XG5cbiAgLy8gcHJvdmVuYW5jZSDigJQgZW5vdWdoIHRvIHJlY29uc3RydWN0IGFueSBvdXRwdXQgaW4gYW4gYWZ0ZXItYWN0aW9uIHJldmlld1xuICBjb25zdCBydW5SZWNvcmQgPSB7XG4gICAgZW5naW5lX3ZlcnNpb246IEVOR0lORV9WRVJTSU9OLFxuICAgIGdlbmVyYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIGRhdGFfZmV0Y2hlZF9hdDogZGF0YS5mZXRjaGVkQXQgfHwgbnVsbCxcbiAgICBzcGlsbF9wb2ludDogeyBsYXQ6IGRhdGEubGF0LCBsb246IGRhdGEubG9uIH0sXG4gICAgc25hcDogeyBjb21pZCwgcml2ZXI6IHJpdmVyTmFtZSwgc25hcHBlZF9mcm9tX206IGRhdGEuc25hcERpc3RNICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKGRhdGEuc25hcERpc3RNIHx8IDApIDogbnVsbCB9LFxuICAgIHRpbWluZ19tb2RlbDogY2ZnLnRpbWluZ01vZGVsLFxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXG4gICAgbWF4X2hvdXJzOiBjZmcubWF4SG91cnMsXG4gICAgYXNfb2Y6IGRhdGEuYXNPZiB8fCBcImxpdmVcIixcbiAgICBxX21ldGhvZDogcU1ldGhvZCxcbiAgICBxX2NvbmZpZGVuY2U6IHFDb25maWRlbmNlLFxuICAgIHFfaW50ZXJwOiBxSW50ZXJwVXNlZCxcbiAgICBnYXVnZXM6IGdkLm1hcCgoZykgPT4gKHtcbiAgICAgIHN0YXRpb25faWQ6IGcuc3RhdGlvbl9pZCwgbmFtZTogZy5uYW1lLCBkaXNjaGFyZ2VfY2ZzOiBnLmRpc2NoYXJnZSwgdHJhY2Vfa206IE1hdGgucm91bmQoZy50cmFjZV9kaXN0IC8gMTAwKSAvIDEwLFxuICAgICAgLi4uKGcudXBzdHJlYW1fYW5jaG9yID8ge1xuICAgICAgICB1cHN0cmVhbV9hbmNob3I6IHRydWUsXG4gICAgICAgIGFuY2hvcl9nYXVnZV9xX2NmczogZy5hbmNob3JfZ2F1Z2VfcV9jZnMsXG4gICAgICAgIGFuY2hvcl9nYXVnZV9kYV9zcW1pOiBnLmFuY2hvcl9nYXVnZV9kYV9zcW1pLFxuICAgICAgICBhbmNob3JfdXBzdHJlYW1fa206IGcuYW5jaG9yX3Vwc3RyZWFtX20gIT09IG51bGwgPyBNYXRoLnJvdW5kKGcuYW5jaG9yX3Vwc3RyZWFtX20gLyAxMDApIC8gMTAgOiBudWxsLFxuICAgICAgfSA6IHt9KSxcbiAgICB9KSksXG4gICAgZXJvbV9tb250aDogcU1ldGhvZC5zdGFydHNXaXRoKFwiZXJvbVwiKSA/IGVyb21Nb250aCA6IG51bGwsXG4gICAgd2lkdGhfc291cmNlOiB7IGdsb3dfbWF0Y2hlZF9wb2ludHM6IGdsb3dNYXRjaGVkLCB0b3RhbF9wb2ludHM6IHJvd3MubGVuZ3RoLCBicmFpZGVkX3BvaW50c19mb3JtdWxhX3dpZHRoOiBicmFpZGVkTiB9LFxuICAgIGpvYnNvbl9kZWdyYWRlZF9wb2ludHM6IGpvYnNvbiA/IGpvYnNvbkRlZ3JhZGVkIDogbnVsbCxcbiAgICBpbXBvdW5kX2V4Y2x1c2lvbnNfYXBwbGllZDogWy4uLmV4Y2x1ZGVkXS5maWx0ZXIoKGMpID0+IHJvd3Muc29tZSgocikgPT4gci5jb21pZCA9PT0gYykpLFxuICAgIGltcG91bmRfc3RvcF9rbTogc3RvcElkeCAhPT0gbnVsbCA/IE1hdGgucm91bmQocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMCkgLyAxMCA6IG51bGwsXG4gIH07XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJpdmVyX25hbWU6IHJpdmVyTmFtZSxcbiAgICBjb21pZCxcbiAgICBhc19vZjogZGF0YS5hc09mIHx8IFwibGl2ZVwiLFxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXG4gICAgdGltaW5nX21vZGVsOiBjZmcudGltaW5nTW9kZWwsXG4gICAgcV9tZXRob2Q6IHFNZXRob2QsXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcbiAgICBnYXVnZXNfdXNlZDogZ2QubWFwKChnKSA9PiAoe1xuICAgICAgc3RhdGlvbl9pZDogZy5zdGF0aW9uX2lkLCBuYW1lOiBnLm5hbWUsXG4gICAgICBkaXNjaGFyZ2U6IGcuZGlzY2hhcmdlLCB0cmFjZV9kaXN0OiBnLnRyYWNlX2Rpc3QsXG4gICAgfSkpLFxuICAgIGRpc3RhbmNlX2ttXzI0aDogZGlzdGFuY2VLbSxcbiAgICBhdmdfdmVsb2NpdHlfbXBoOiBhdmdWZWwgKiAyLjIzNjk0LFxuICAgIGltcG91bmRfc3RvcDogaW1wb3VuZE5vdGUsXG4gICAgaG91cmx5LFxuICAgIHNpdGVzLFxuICAgIHdhcm5pbmdzLFxuICAgIHJ1blJlY29yZCxcbiAgICB0cmFjZTogZGYsIC8vIGZ1bGwgcm93IGFycmF5IGZvciBpbnNwZWN0aW9uL2dlb2pzb24gZXhwb3J0XG4gIH07XG4gIGxvZyhcbiAgICBgICBSRVNVTFQ6ICR7ZGlzdGFuY2VLbS50b0ZpeGVkKDEpfSBrbSBpbiA8PSAke2NmZy5tYXhIb3Vyc30gaCwgYCArXG4gICAgYGF2ZyAke3Jlc3VsdC5hdmdfdmVsb2NpdHlfbXBoLnRvRml4ZWQoMil9IG1waCwgJHtzaXRlcy5sZW5ndGh9IHNpdGVzLCAke3dhcm5pbmdzLmxlbmd0aH0gd2FybmluZ3NgLFxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuVHJhY2UobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnKTtcbiAgcmV0dXJuIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcpO1xufVxuXG4vKipcbiAqIEJvb20gc2l6aW5nIGZyb20gbW9kZWxlZCBoeWRyYXVsaWNzIChwbGFubmluZy1sZXZlbCwgZm9yIEdSUHMgdGhhdCBjYXJyeSBub1xuICogZXF1aXBtZW50IHF1YW50aXRpZXMpLiBTdGFuZGFyZCBjb250YWlubWVudCBydWxlOiBvaWwgZW50cmFpbnMgdW5kZXIgYSBib29tXG4gKiB3aGVuIHRoZSBmbG93IGNvbXBvbmVudCBub3JtYWwgdG8gaXQgZXhjZWVkcyB+MC4zNSBtL3MgKDAuNyBrdCksIHNvIGluXG4gKiBmYXN0ZXIgd2F0ZXIgdGhlIGJvb20gaXMgYW5nbGVkIHdpdGggc2luKHRoZXRhKSA9IGVudHJhaW5tZW50L3ZlbG9jaXR5IGFuZFxuICogdGhlIHJlcXVpcmVkIGxlbmd0aCBncm93cyB0byB3aWR0aC9zaW4odGhldGEpLiBBbmNob3Igc2V0cyBmcm9tIGxlbmd0aC5cbiAqIEFuZ2xlcyBiZWxvdyB+MTUgZGVnICh2ID4gfjEuMzUgbS9zKSBhcmUgZmxhZ2dlZDogdXNlIGNhc2NhZGVkIHNob3J0ZXIgYm9vbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZUJvb21OZWVkcyh3aWR0aE0sIHZlbG9jaXR5TXMsIG9wdHMgPSB7fSkge1xuICBjb25zdCBlbnRyYWluID0gb3B0cy5lbnRyYWlubWVudE1zID8/IDAuMzU7XG4gIGNvbnN0IHJlc2VydmVQY3QgPSBvcHRzLnJlc2VydmVQY3QgPz8gMjA7XG4gIGNvbnN0IGFuY2hvclNwYWNpbmdGdCA9IG9wdHMuYW5jaG9yU3BhY2luZ0Z0ID8/IDEwMDtcbiAgaWYgKCEod2lkdGhNID4gMCkgfHwgISh2ZWxvY2l0eU1zID49IDApKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc2luVGhldGEgPSB2ZWxvY2l0eU1zID4gZW50cmFpbiA/IGVudHJhaW4gLyB2ZWxvY2l0eU1zIDogMTtcbiAgY29uc3QgYW5nbGVEZWcgPSAoTWF0aC5hc2luKHNpblRoZXRhKSAqIDE4MCkgLyBNYXRoLlBJO1xuICBjb25zdCBsZW5ndGhGdCA9ICh3aWR0aE0gLyBzaW5UaGV0YSkgKiAzLjI4MDg0ICogKDEgKyByZXNlcnZlUGN0IC8gMTAwKTtcbiAgY29uc3QgYm9vbUZ0ID0gTWF0aC5jZWlsKGxlbmd0aEZ0IC8gNTApICogNTA7IC8vIHJvdW5kIHVwIHRvIDUwLWZ0IHN0aWNrc1xuICBjb25zdCBhbmNob3JzID0gTWF0aC5tYXgoMiwgTWF0aC5jZWlsKGJvb21GdCAvIGFuY2hvclNwYWNpbmdGdCkgKyAxKTtcbiAgcmV0dXJuIHtcbiAgICBib29tX2Z0OiBib29tRnQsXG4gICAgYm9vbV9hbmdsZV9kZWc6IE1hdGgucm91bmQoYW5nbGVEZWcpLFxuICAgIGFuY2hvcnMsXG4gICAgZGVmbGVjdGlvbjogdmVsb2NpdHlNcyA+IGVudHJhaW4sXG4gICAgY2FzY2FkZV9hZHZpc2VkOiBhbmdsZURlZyA8IDE1LCAvLyB0b28gZmFzdCBmb3IgYSBzaW5nbGUgc3dlZXAg4oCUIGNhc2NhZGUgYm9vbXNcbiAgfTtcbn1cblxuLyoqIFRyYWNlIGxpbmUgKyBob3VybHkgbWFya2VycyBhcyBhIEdlb0pTT04gRmVhdHVyZUNvbGxlY3Rpb24gKHdpZGdldCBwcmV2aWV3KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0dlb0pzb24ocmVzdWx0KSB7XG4gIGNvbnN0IGRmID0gcmVzdWx0LnRyYWNlO1xuICBjb25zdCBmYyA9IHtcbiAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBraW5kOiBcInRyYWNlXCIsIHJpdmVyOiByZXN1bHQucml2ZXJfbmFtZSxcbiAgICAgICAgICBkaXN0YW5jZV9rbV8yNGg6IHJlc3VsdC5kaXN0YW5jZV9rbV8yNGgsXG4gICAgICAgIH0sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IGRmLm1hcCgocikgPT4gW1xuICAgICAgICAgICAgTWF0aC5yb3VuZChyLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoci5sYXQgKiAxZTYpIC8gMWU2LFxuICAgICAgICAgIF0pLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBmb3IgKGNvbnN0IGggb2YgcmVzdWx0LmhvdXJseSkge1xuICAgIGZjLmZlYXR1cmVzLnB1c2goe1xuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7IGtpbmQ6IFwiaG91clwiLCBob3VyOiBoLmhvdXIsIGN1bV9kaXN0X2ttOiBoLmN1bV9kaXN0X2ttLCB2ZWxvY2l0eV9tcGg6IGgudmVsb2NpdHlfbXBoIH0sXG4gICAgICBnZW9tZXRyeToge1xuICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbTWF0aC5yb3VuZChoLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoaC5sYXQgKiAxZTYpIC8gMWU2XSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZjO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvaW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWxpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxuICogU3BpbGwgVHJhamVjdG9yeSB3aWRnZXQg4oCUIHJ1bnRpbWUuXG4gKlxuICogQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiDihpIgY2xpY2sgdGhlIG1hcCDihpIgdGhlIGdvbGRlbi10ZXN0ZWQgdHJhY2UgZW5naW5lXG4gKiAodHJhY2UtZW5naW5lLnRzLCBwYXJpdHktdmVyaWZpZWQgdnMgdGhlIFB5dGhvbiBvcmFjbGUpIGRyYXdzIGFuIGVwaGVtZXJhbFxuICogdGltZS1jb2xvcmVkIHBsdW1lIG9uIGEgY2xpZW50LXNpZGUgR3JhcGhpY3NMYXllciB3aXRoIGhvdXJseSBtYXJrZXJzLFxuICogcGx1cyBhbiBFVEEtc29ydGVkIHN0cmF0ZWd5LXNpdGUgbGlzdCBhbmQgcmVjZXB0b3Igd2FybmluZ3MuXG4gKiBOb3RoaW5nIGlzIHBlcnNpc3RlZCDigJQgQ2xlYXIgKG9yIHdpZGdldCB1bm1vdW50KSByZW1vdmVzIGV2ZXJ5dGhpbmcuXG4gKi9cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYydcbmltcG9ydCBQb2x5bGluZSBmcm9tICdlc3JpL2dlb21ldHJ5L1BvbHlsaW5lJ1xuaW1wb3J0IFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnXG5pbXBvcnQgeyBnZW9kZXNpY0xlbmd0aCB9IGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnLCBTaXRlTGF5ZXJDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBmZXRjaFRyYWNlRGF0YSwgY29tcHV0ZVRyYWNlLCBlc3RpbWF0ZUJvb21OZWVkcyB9IGZyb20gJy4uL3RyYWNlLWVuZ2luZSdcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gPSBSZWFjdFxuXG4vLyBFVEEgY29sb3IgYmFuZHM6IDwzIGhyIC8gM+KAkzEyIGhyIC8gMTLigJMyNCBoclxuY29uc3QgQkFORF9DT0xPUlM6IEFycmF5PFtudW1iZXIsIHN0cmluZ10+ID0gW1xuICBbMywgJyNkNzE5MWMnXSxcbiAgWzEyLCAnI2ZkYWU2MSddLFxuICBbMjQsICcjMmM3YmI2J10sXG5dXG5jb25zdCBiYW5kQ29sb3IgPSAoaHI6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGZvciAoY29uc3QgW2xpbSwgY10gb2YgQkFORF9DT0xPUlMpIGlmIChociA8IGxpbSkgcmV0dXJuIGNcbiAgcmV0dXJuICcjMmM3YmI2J1xufVxuY29uc3QgaGV4VG9SZ2IgPSAoaGV4OiBzdHJpbmcpOiBudW1iZXJbXSA9PiBbXG4gIHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSwgcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNiksXG5dXG5cbmludGVyZmFjZSBTaXRlUm93IHtcbiAgbmFtZTogc3RyaW5nXG4gIGV0YV9ocjogbnVtYmVyXG4gIGRpc3Rfa206IG51bWJlclxuICBvZmZzZXRfbTogbnVtYmVyXG4gIHJpdmVyX3dpZHRoX20/OiBudW1iZXJcbiAgdmVsb2NpdHlfbXM/OiBudW1iZXJcbiAgYm9vbT86IHsgYm9vbV9mdDogbnVtYmVyLCBhbmNob3JzOiBudW1iZXIsIGJvb21fYW5nbGVfZGVnPzogbnVtYmVyLCBjYXNjYWRlX2FkdmlzZWQ/OiBib29sZWFuLCBzb3VyY2U6ICdkcmF3bicgfCAnZXN0JyB9XG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3Qgbm9ybUd1aWQgPSAodjogYW55KTogc3RyaW5nID0+IFN0cmluZyh2IHx8ICcnKS5yZXBsYWNlKC9be31dL2csICcnKS50b0xvd2VyQ2FzZSgpXG5cbi8qKiBTdW0gZ2VvZGVzaWMgZmVldCBvZiBkcmF3biBib29tIGxpbmVzIHBlciBzaXRlIGtleSAoZS5nLiBTbmFrZSBCb29tX0xpbmVzKS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRHJhd25Cb29tKGNmZzogeyB1cmw6IHN0cmluZywgc2l0ZUtleUZpZWxkOiBzdHJpbmcsIHdoZXJlPzogc3RyaW5nIH0pOiBQcm9taXNlPE1hcDxzdHJpbmcsIG51bWJlcj4+IHtcbiAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBjZmcudXJsIH0pXG4gIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXG4gIHEud2hlcmUgPSBjZmcud2hlcmUgfHwgJzE9MSdcbiAgcS5vdXRGaWVsZHMgPSBbY2ZnLnNpdGVLZXlGaWVsZF1cbiAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICBjb25zdCBvdXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gIGZvciAoY29uc3QgZiBvZiBmcy5mZWF0dXJlcykge1xuICAgIGNvbnN0IGtleSA9IG5vcm1HdWlkKGYuYXR0cmlidXRlc1tjZmcuc2l0ZUtleUZpZWxkXSlcbiAgICBpZiAoIWtleSB8fCAhZi5nZW9tZXRyeSkgY29udGludWVcbiAgICBjb25zdCBmdCA9IGdlb2Rlc2ljTGVuZ3RoKGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lLCAnZmVldCcpXG4gICAgaWYgKGZ0ID4gMCkgb3V0LnNldChrZXksIChvdXQuZ2V0KGtleSkgfHwgMCkgKyBmdClcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IFtqbXYsIHNldEptdl0gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4obnVsbClcbiAgY29uc3QgW2FybWluZywgc2V0QXJtaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdDbGljayBcIlNldCBzcGlsbCBwb2ludFwiLCB0aGVuIGNsaWNrIHRoZSByaXZlci4nKVxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55PihudWxsKVxuICBjb25zdCBbc2FmZXR5LCBzZXRTYWZldHldID0gdXNlU3RhdGU8bnVtYmVyPihwcm9wcy5jb25maWcuc2FmZXR5RmFjdG9yID8/IDEuNSlcbiAgY29uc3QgW2RpYWcsIHNldERpYWddID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGxheWVyUmVmID0gdXNlUmVmPF9fZXNyaS5HcmFwaGljc0xheWVyPihudWxsKVxuICBjb25zdCBjbGlja0hhbmRsZVJlZiA9IHVzZVJlZjxfX2VzcmkuSGFuZGxlPihudWxsKVxuICAvLyBjYWNoZWQgaHlkcm9sb2d5IGZvciB0aGUgY3VycmVudCBzcGlsbCBwb2ludCDigJQgc2FmZXR5LWZhY3RvciBjaGFuZ2VzXG4gIC8vIHJlY29tcHV0ZSBmcm9tIHRoaXMgaW5zdGFudGx5IGluc3RlYWQgb2YgcmUtZmV0Y2hpbmcgTkxESS9OV0lTXG4gIGNvbnN0IGNhY2hlUmVmID0gdXNlUmVmPHsgbGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCBkYXRhOiBhbnksIGRyYXduOiBNYXA8c3RyaW5nLCBudW1iZXI+LCBmZXRjaE5vdGVzOiBzdHJpbmdbXSB9IHwgbnVsbD4obnVsbClcblxuICAvLyBvbmUgZ3JhcGhpY3MgbGF5ZXIgcGVyIHdpZGdldCBsaWZldGltZTsgcmVtb3ZlZCBvbiB1bm1vdW50IChlcGhlbWVyYWwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjbGlja0hhbmRsZVJlZi5jdXJyZW50KSBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpXG4gICAgICBpZiAobGF5ZXJSZWYuY3VycmVudCAmJiBqbXYpIGptdi52aWV3Lm1hcC5yZW1vdmUobGF5ZXJSZWYuY3VycmVudClcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbam12XSlcblxuICBjb25zdCBlbnN1cmVMYXllciA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldyk6IF9fZXNyaS5HcmFwaGljc0xheWVyID0+IHtcbiAgICBpZiAoIWxheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGxheWVyUmVmLmN1cnJlbnQgPSBuZXcgR3JhcGhpY3NMYXllcih7IHRpdGxlOiAnU3BpbGwgdHJhamVjdG9yeSAoZXBoZW1lcmFsKScsIGxpc3RNb2RlOiAnaGlkZScgfSlcbiAgICAgIHZpZXcubWFwLmFkZChsYXllclJlZi5jdXJyZW50KVxuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJSZWYuY3VycmVudFxuICB9XG5cbiAgLy8gLS0tLSBwcm92aWRlcnM6IHdyYXAgY29uZmlndXJlZCBsYXllcnMgZm9yIHRoZSBlbmdpbmUgLS0tLVxuICAvLyBGYWlsdXJlcyBhcmUgcmVwb3J0ZWQgdG8gdGhlIGRpYWdub3N0aWNzIGxpc3QgaW5zdGVhZCBvZiBraWxsaW5nIHRoZSB0cmFjZS5cbiAgY29uc3QgbWFrZVNpdGVQcm92aWRlciA9IChsYzogU2l0ZUxheWVyQ29uZmlnLCBkZWZhdWx0QnVmZmVyOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcsIG5vdGVzOiBzdHJpbmdbXSkgPT4gKHtcbiAgICBidWZmZXJfbTogbGMuYnVmZmVyTSA/PyBkZWZhdWx0QnVmZmVyLFxuICAgIGZldGNoOiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IGxjLnVybCB9KVxuICAgICAgICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxuICAgICAgICBxLndoZXJlID0gbGMud2hlcmUgfHwgJzE9MSdcbiAgICAgICAgcS5vdXRGaWVsZHMgPSBbbGMubmFtZUZpZWxkLCAuLi4obGMuZXh0cmFGaWVsZHMgfHwgW10pXVxuICAgICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICAgICAgICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgICAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgIGNvbnN0IHJvd3MgPSBmcy5mZWF0dXJlc1xuICAgICAgICAgIC5maWx0ZXIoKGYpID0+IGYuZ2VvbWV0cnkgJiYgZi5nZW9tZXRyeS50eXBlID09PSAncG9pbnQnKVxuICAgICAgICAgIC5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxuICAgICAgICAgICAgY29uc3Qgcm93OiBhbnkgPSB7IG5hbWU6IGYuYXR0cmlidXRlc1tsYy5uYW1lRmllbGRdLCBsYXQ6IGcueSwgbG9uOiBnLnggfVxuICAgICAgICAgICAgZm9yIChjb25zdCBlZiBvZiBsYy5leHRyYUZpZWxkcyB8fCBbXSkgcm93W2VmXSA9IGYuYXR0cmlidXRlc1tlZl1cbiAgICAgICAgICAgIHJldHVybiByb3dcbiAgICAgICAgICB9KVxuICAgICAgICBub3Rlcy5wdXNoKGAke2xhYmVsfTogJHtyb3dzLmxlbmd0aH0gcG9pbnQgZmVhdHVyZXMgbG9hZGVkIChidWZmZXIgJHtsYy5idWZmZXJNID8/IGRlZmF1bHRCdWZmZXJ9IG0pYClcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbm90ZXMucHVzaChgJHtsYWJlbH0gRkFJTEVEOiAke1N0cmluZyhlKS5zbGljZSgwLCAxMDApfWApXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbWFrZVdpZHRoUHJvdmlkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2wgPSBwcm9wcy5jb25maWcud2lkdGhMYXllclxuICAgIGlmICghd2wgfHwgIXdsLnVybCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IHdsLnVybCB9KVxuICAgIHJldHVybiBhc3luYyAoZW52OiB7IHhtaW46IG51bWJlciwgeW1pbjogbnVtYmVyLCB4bWF4OiBudW1iZXIsIHltYXg6IG51bWJlciB9KSA9PiB7XG4gICAgICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxuICAgICAgcS53aGVyZSA9IHdsLndoZXJlIHx8ICcxPTEnXG4gICAgICBxLmdlb21ldHJ5ID0geyB0eXBlOiAnZXh0ZW50JywgLi4uZW52LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSB9IGFzIGFueVxuICAgICAgcS5zcGF0aWFsUmVsYXRpb25zaGlwID0gJ2ludGVyc2VjdHMnXG4gICAgICBxLm91dEZpZWxkcyA9IFt3bC53aWR0aEZpZWxkXVxuICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICAgIHEub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9IGFzIGFueVxuICAgICAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICBjb25zdCBtaWRzOiBBcnJheTx7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciwgd2lkdGg6IG51bWJlciB9PiA9IFtdXG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZnMuZmVhdHVyZXMpIHtcbiAgICAgICAgY29uc3QgZyA9IGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lXG4gICAgICAgIGlmIChnICYmIGcucGF0aHMgJiYgZy5wYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBwID0gZy5wYXRoc1swXVxuICAgICAgICAgIGNvbnN0IG0gPSBwW01hdGguZmxvb3IocC5sZW5ndGggLyAyKV1cbiAgICAgICAgICBtaWRzLnB1c2goeyBsYXQ6IG1bMV0sIGxvbjogbVswXSwgd2lkdGg6IGYuYXR0cmlidXRlc1t3bC53aWR0aEZpZWxkXSB8fCAwIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtaWRzXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLSBkcmF3aW5nIC0tLS1cbiAgY29uc3QgZHJhdyA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldywgcmVzOiBhbnksIHNwaWxsOiB7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciB9KSA9PiB7XG4gICAgY29uc3QgbGF5ZXIgPSBlbnN1cmVMYXllcih2aWV3KVxuICAgIGxheWVyLnJlbW92ZUFsbCgpXG5cbiAgICAvLyBzcGlsbCBwb2ludFxuICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IHNwaWxsLmxhdCwgbG9uZ2l0dWRlOiBzcGlsbC5sb24gfSksXG4gICAgICBzeW1ib2w6IHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBzdHlsZTogJ3gnLCBzaXplOiAxNCxcbiAgICAgICAgb3V0bGluZTogeyBjb2xvcjogJyMwMDAnLCB3aWR0aDogMyB9LFxuICAgICAgfSBhcyBhbnksXG4gICAgICBwb3B1cFRlbXBsYXRlOiB7IHRpdGxlOiAnU3BpbGwgcG9pbnQnLCBjb250ZW50OiBgJHtzcGlsbC5sYXQudG9GaXhlZCg1KX0sICR7c3BpbGwubG9uLnRvRml4ZWQoNSl9YCB9IGFzIGFueSxcbiAgICB9KSlcblxuICAgIC8vIHRyYWNlIHBvbHlsaW5lLCBzcGxpdCBpbnRvIEVUQSBjb2xvciBiYW5kc1xuICAgIGNvbnN0IHJvd3M6IGFueVtdID0gcmVzLnRyYWNlXG4gICAgbGV0IGJhbmRTdGFydCA9IDBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkb25lID0gaSA9PT0gcm93cy5sZW5ndGhcbiAgICAgIGNvbnN0IGJhbmRDaGFuZ2VkID0gIWRvbmUgJiYgYmFuZENvbG9yKHJvd3NbaV0uY3VtX3RpbWUpICE9PSBiYW5kQ29sb3Iocm93c1tiYW5kU3RhcnRdLmN1bV90aW1lKVxuICAgICAgaWYgKGRvbmUgfHwgYmFuZENoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgc2VnID0gcm93cy5zbGljZShiYW5kU3RhcnQsIE1hdGgubWluKGkgKyAxLCByb3dzLmxlbmd0aCkpXG4gICAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5bGluZSh7IHBhdGhzOiBbc2VnLm1hcCgocikgPT4gW3IubG9uLCByLmxhdF0pXSBhcyBhbnksIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSB9KSxcbiAgICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1saW5lJywgY29sb3I6IGJhbmRDb2xvcihyb3dzW2JhbmRTdGFydF0uY3VtX3RpbWUpLCB3aWR0aDogNCB9IGFzIGFueSxcbiAgICAgICAgfSkpXG4gICAgICAgIGJhbmRTdGFydCA9IGlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBKb2Jzb24gdW5jZXJ0YWludHkgYmFuZHM6IHRyYW5zbHVjZW50IHVuZGVybGF5IGZyb20gYnVsayAocGVhaykgcG9zaXRpb25cbiAgICAvLyB0byBmYXJ0aGVzdCBjcmVkaWJsZSAoOTklIGxlYWRpbmcpIHBvc2l0aW9uIGF0IGVhY2ggaG91clxuICAgIGZvciAoY29uc3QgaCBvZiByZXMuaG91cmx5KSB7XG4gICAgICBpZiAoIWguYmFuZCkgY29udGludWVcbiAgICAgIGNvbnN0IGkwID0gTWF0aC5taW4oaC5iYW5kLnBlYWsuaSwgaC5iYW5kLmZhc3Rlc3QuaSlcbiAgICAgIGNvbnN0IGkxID0gTWF0aC5tYXgoaC5iYW5kLnBlYWsuaSwgaC5iYW5kLmZhc3Rlc3QuaSlcbiAgICAgIGlmIChpMSA8PSBpMCkgY29udGludWVcbiAgICAgIGNvbnN0IHNlZyA9IHJvd3Muc2xpY2UoaTAsIGkxICsgMSlcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3NlZy5tYXAoKHI6IGFueSkgPT4gW3IubG9uLCByLmxhdF0pXSBhcyBhbnksIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSB9KSxcbiAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBbLi4uaGV4VG9SZ2IoYmFuZENvbG9yKGguaG91cikpLCAwLjI4XSwgd2lkdGg6IDE0LCBjYXA6ICdyb3VuZCcgfSBhcyBhbnksXG4gICAgICB9KSlcbiAgICB9XG4gICAgLy8gaG91cmx5IG1hcmtlcnMgKyBsYWJlbHNcbiAgICBmb3IgKGNvbnN0IGggb2YgcmVzLmhvdXJseSkge1xuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmxhdCwgbG9uZ2l0dWRlOiBoLmxvbiB9KSxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBzaXplOiA3LCBjb2xvcjogYmFuZENvbG9yKGguaG91ciksXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogJyNmZmYnLCB3aWR0aDogMSB9LFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgcG9wdXBUZW1wbGF0ZToge1xuICAgICAgICAgIHRpdGxlOiBgSG91ciAke2guaG91cn1gLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke2guY3VtX2Rpc3Rfa20udG9GaXhlZCgxKX0ga20gZG93bnN0cmVhbSDCtyAke2gudmVsb2NpdHlfbXBoLnRvRml4ZWQoMSl9IG1waGAsXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGgubGF0LCBsb25naXR1ZGU6IGgubG9uIH0pLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGV4dDogYCR7aC5ob3VyfSBocmAsXG4gICAgICAgICAgY29sb3I6IGJhbmRDb2xvcihoLmhvdXIpLFxuICAgICAgICAgIGhhbG9Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIGhhbG9TaXplOiAxLjUsXG4gICAgICAgICAgeW9mZnNldDogOSxcbiAgICAgICAgICBmb250OiB7IHNpemU6IDEwLCB3ZWlnaHQ6ICdib2xkJywgZmFtaWx5OiAnc2Fucy1zZXJpZicgfSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tIG1vZGVsIGNvbmZpZyArIGVxdWlwbWVudCArIGNvbXB1dGUvcmVuZGVyIChwdXJlLCByZXVzYWJsZSBvbiBjYWNoZWQgZGF0YSkgLS0tLVxuICBjb25zdCBtb2RlbENmZyA9IChzZjogbnVtYmVyKSA9PiAoe1xuICAgIHNhZmV0eUZhY3Rvcjogc2YsXG4gICAgdGltaW5nTW9kZWw6IHByb3BzLmNvbmZpZy50aW1pbmdNb2RlbCA/PyAnaHlkcmF1bGljJyxcbiAgICBtaW5TdHJlYW1PcmRlcjogcHJvcHMuY29uZmlnLm1pblN0cmVhbU9yZGVyID8/IDQsXG4gICAgbWF4SG91cnM6IHByb3BzLmNvbmZpZy5tYXhIb3VycyA/PyAyNCxcbiAgICBtYXhEaXN0YW5jZUttOiBwcm9wcy5jb25maWcubWF4RGlzdGFuY2VLbSA/PyAzMDAsXG4gICAgdmVyYm9zZTogZmFsc2UsXG4gIH0pXG5cbiAgY29uc3QgYXBwbHlFcXVpcG1lbnQgPSAocmVzOiBhbnksIGRyYXduOiBNYXA8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgY29uc3QgZXEgPSBwcm9wcy5jb25maWcuZXF1aXBtZW50XG4gICAgaWYgKGVxPy5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuXG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBlbnRyYWlubWVudE1zOiBlcT8uZW50cmFpbm1lbnRNcyA/PyAwLjM1LFxuICAgICAgYW5jaG9yU3BhY2luZ0Z0OiBlcT8uYW5jaG9yU3BhY2luZ0Z0ID8/IDEwMCxcbiAgICAgIHJlc2VydmVQY3Q6IGVxPy5yZXNlcnZlUGN0ID8/IDIwLFxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHMgb2YgcmVzLnNpdGVzKSB7XG4gICAgICBjb25zdCBrZXkgPSBub3JtR3VpZChzLkdsb2JhbElEID8/IHMuZ2xvYmFsaWQgPz8gcy5HTE9CQUxJRClcbiAgICAgIGNvbnN0IGRyYXduRnQgPSBrZXkgPyBkcmF3bi5nZXQoa2V5KSA6IHVuZGVmaW5lZFxuICAgICAgaWYgKGRyYXduRnQpIHtcbiAgICAgICAgY29uc3QgYm9vbUZ0ID0gTWF0aC5jZWlsKGRyYXduRnQgLyA1MCkgKiA1MFxuICAgICAgICBzLmJvb20gPSB7XG4gICAgICAgICAgYm9vbV9mdDogYm9vbUZ0LFxuICAgICAgICAgIGFuY2hvcnM6IE1hdGgubWF4KDIsIE1hdGguY2VpbChib29tRnQgLyBydWxlcy5hbmNob3JTcGFjaW5nRnQpICsgMSksXG4gICAgICAgICAgc291cmNlOiAnZHJhd24nLFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlc3QgPSBlc3RpbWF0ZUJvb21OZWVkcyhzLnJpdmVyX3dpZHRoX20sIHMudmVsb2NpdHlfbXMsIHJ1bGVzKVxuICAgICAgICBpZiAoZXN0KSBzLmJvb20gPSB7IC4uLmVzdCwgc291cmNlOiAnZXN0JyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29tcHV0ZUFuZFJlbmRlciA9IChzZjogbnVtYmVyLCBmcm9tQ2FjaGUgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IGMgPSBjYWNoZVJlZi5jdXJyZW50XG4gICAgaWYgKCFjIHx8ICFqbXYpIHJldHVyblxuICAgIGNvbnN0IHJlcyA9IGNvbXB1dGVUcmFjZShjLmRhdGEsIG1vZGVsQ2ZnKHNmKSlcbiAgICBhcHBseUVxdWlwbWVudChyZXMsIGMuZHJhd24pXG4gICAgZHJhdyhqbXYudmlldyBhcyBfX2VzcmkuTWFwVmlldywgcmVzLCB7IGxhdDogYy5sYXQsIGxvbjogYy5sb24gfSlcbiAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlID0gdHJ1ZVxuICAgIHNldEhpZGRlbihmYWxzZSlcbiAgICBzZXRSZXN1bHQocmVzKVxuICAgIHNldERpYWcoWy4uLmMuZmV0Y2hOb3RlcywgYCR7cmVzLnNpdGVzLmxlbmd0aH0gc2l0ZShzKSB3aXRoaW4gYnVmZmVyIG9mIHRoZSB0cmFjZS5gXSlcbiAgICBzZXRTdGF0dXMoXG4gICAgICBgJHtyZXMucml2ZXJfbmFtZSB8fCAnVHJhY2UnfSDigJQgJHtyZXMuZGlzdGFuY2Vfa21fMjRoLnRvRml4ZWQoMSl9IGttIGluIOKJpCAke3Byb3BzLmNvbmZpZy5tYXhIb3VycyA/PyAyNH0gaGAgK1xuICAgICAgKGZyb21DYWNoZSA/ICcgwrcgcmVjb21wdXRlZCBpbnN0YW50bHkgZnJvbSBjYWNoZWQgaHlkcm9sb2d5JyA6ICcnKSxcbiAgICApXG4gIH1cblxuICAvLyAtLS0tIHJ1biAtLS0tXG4gIGNvbnN0IGFybUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICgham12IHx8IGFybWluZyB8fCBydW5uaW5nKSByZXR1cm5cbiAgICBzZXRBcm1pbmcodHJ1ZSlcbiAgICBzZXRTdGF0dXMoJ0NsaWNrIHRoZSBzcGlsbCBsb2NhdGlvbiBvbiB0aGUgbWFw4oCmJylcbiAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gam12LnZpZXcub24oJ2NsaWNrJywgYXN5bmMgKGV2dCkgPT4ge1xuICAgICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKVxuICAgICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IG51bGxcbiAgICAgIHNldEFybWluZyhmYWxzZSlcbiAgICAgIGNvbnN0IG1wID0gZXZ0Lm1hcFBvaW50XG4gICAgICBjb25zdCBsYXQgPSBtcC5sYXRpdHVkZSwgbG9uID0gbXAubG9uZ2l0dWRlXG4gICAgICBzZXRSdW5uaW5nKHRydWUpXG4gICAgICBzZXRSZXN1bHQobnVsbClcbiAgICAgIHNldERpYWcoW10pXG4gICAgICBzZXRTdGF0dXMoYFRyYWNpbmcgZnJvbSAke2xhdC50b0ZpeGVkKDQpfSwgJHtsb24udG9GaXhlZCg0KX3igKZgKVxuICAgICAgY29uc3Qgbm90ZXM6IHN0cmluZ1tdID0gW11cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNmZyA9IHByb3BzLmNvbmZpZ1xuICAgICAgICBjb25zdCBzaXRlTGF5ZXJzID0gKGNmZy5zaXRlTGF5ZXJzIHx8IFtdKSBhcyBhbnlcbiAgICAgICAgY29uc3QgcmVjZXB0b3JMYXllcnMgPSAoY2ZnLnJlY2VwdG9yTGF5ZXJzIHx8IFtdKSBhcyBhbnlcbiAgICAgICAgaWYgKCFzaXRlTGF5ZXJzLmxlbmd0aCkgbm90ZXMucHVzaCgnTm8gc2l0ZSBsYXllcnMgY29uZmlndXJlZCDigJQgYWRkIHRoZW0gaW4gdGhlIHdpZGdldCBzZXR0aW5ncyAoU2l0ZSBsYXllcnMgSlNPTikuJylcblxuICAgICAgICAvLyBmZXRjaCBldmVyeXRoaW5nIG9uY2UgKHRyYWNlLCBmbG93cywgd2lkdGhzLCBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIHtcbiAgICAgICAgICAuLi5tb2RlbENmZyhzYWZldHkpLFxuICAgICAgICAgIHdpZHRoUHJvdmlkZXI6IG1ha2VXaWR0aFByb3ZpZGVyKCksXG4gICAgICAgICAgc2l0ZVByb3ZpZGVyczogc2l0ZUxheWVycy5tYXAoKGxjLCBpKSA9PiBtYWtlU2l0ZVByb3ZpZGVyKGxjLCA1MDAsIGBTaXRlIGxheWVyICR7aSArIDF9YCwgbm90ZXMpKSxcbiAgICAgICAgICByZWNlcHRvclByb3ZpZGVyczogcmVjZXB0b3JMYXllcnMubWFwKChsYywgaSkgPT4gbWFrZVNpdGVQcm92aWRlcihsYywgODAwLCBgUmVjZXB0b3IgbGF5ZXIgJHtpICsgMX1gLCBub3RlcykpLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGRyYXduIGJvb20gbGluZXM6IHBlci1zaXRlLWxheWVyIGJvb21MYXllciAoKyBsZWdhY3kgZ2xvYmFsIGVxdWlwbWVudC5ib29tTGF5ZXIpXG4gICAgICAgIGNvbnN0IGRyYXduID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuICAgICAgICBjb25zdCBlcSA9IGNmZy5lcXVpcG1lbnRcbiAgICAgICAgaWYgKGVxPy5lbmFibGVkICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IGJvb21DZmdzOiBhbnlbXSA9IFtdXG4gICAgICAgICAgZm9yIChjb25zdCBsYyBvZiBzaXRlTGF5ZXJzKSBpZiAobGMuYm9vbUxheWVyPy51cmwpIGJvb21DZmdzLnB1c2gobGMuYm9vbUxheWVyKVxuICAgICAgICAgIGlmIChlcT8uYm9vbUxheWVyPy51cmwpIGJvb21DZmdzLnB1c2goZXEuYm9vbUxheWVyKVxuICAgICAgICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgICAgICAgIGZvciAoY29uc3QgYmMgb2YgYm9vbUNmZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZyA9IGAke2JjLnVybH18JHtiYy5zaXRlS2V5RmllbGR9YFxuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHNpZykpIGNvbnRpbnVlXG4gICAgICAgICAgICBzZWVuLmFkZChzaWcpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBtID0gYXdhaXQgZmV0Y2hEcmF3bkJvb20oYmMgYXMgYW55KVxuICAgICAgICAgICAgICBtLmZvckVhY2goKHYsIGspID0+IGRyYXduLnNldChrLCAoZHJhd24uZ2V0KGspIHx8IDApICsgdikpXG4gICAgICAgICAgICAgIG5vdGVzLnB1c2goYEJvb20gbGluZXMgKCR7c2lnLnNwbGl0KCcvJykuc2xpY2UoLTIpWzBdfSk6IGRyYXduIGZvb3RhZ2UgZm9yICR7bS5zaXplfSBzaXRlKHMpYClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbm90ZXMucHVzaChgQm9vbSBsYXllciBGQUlMRUQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDkwKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhY2hlUmVmLmN1cnJlbnQgPSB7IGxhdCwgbG9uLCBkYXRhLCBkcmF3biwgZmV0Y2hOb3Rlczogbm90ZXMuc2xpY2UoKSB9XG4gICAgICAgIGNvbXB1dGVBbmRSZW5kZXIoc2FmZXR5KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRTdGF0dXMoYFRyYWNlIGZhaWxlZDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTIwKX1gKVxuICAgICAgICBzZXREaWFnKG5vdGVzKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0UnVubmluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbam12LCBhcm1pbmcsIHJ1bm5pbmcsIHNhZmV0eSwgcHJvcHMuY29uZmlnXSlcblxuICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgeyBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpOyBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gbnVsbCB9XG4gICAgaWYgKGxheWVyUmVmLmN1cnJlbnQpIGxheWVyUmVmLmN1cnJlbnQucmVtb3ZlQWxsKClcbiAgICBjYWNoZVJlZi5jdXJyZW50ID0gbnVsbFxuICAgIHNldEFybWluZyhmYWxzZSlcbiAgICBzZXRSZXN1bHQobnVsbClcbiAgICBzZXREaWFnKFtdKVxuICAgIHNldEhpZGRlbihmYWxzZSlcbiAgICBzZXRTdGF0dXMoJ0NsZWFyZWQuIENsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIgdG8gcnVuIGFnYWluLicpXG4gIH1cblxuICAvLyBicmllZmluZyB0b2dnbGU6IGhpZGUvc2hvdyB0aGUgdHJhamVjdG9yeSBncmFwaGljcyBXSVRIT1VUIHRvdWNoaW5nIHRoZVxuICAvLyBjYWNoZWQgcnVuIOKAlCBwcmVzZW50ZXIgY2FuIGZsaXAgdGhlIG1vZGVsIG9mZiBkdXJpbmcgYSBzbGlkZSBhbmQgYmFja1xuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xuICAgIGlmICghbGF5ZXJSZWYuY3VycmVudCkgcmV0dXJuXG4gICAgY29uc3QgdiA9ICFsYXllclJlZi5jdXJyZW50LnZpc2libGVcbiAgICBsYXllclJlZi5jdXJyZW50LnZpc2libGUgPSB2XG4gICAgc2V0SGlkZGVuKCF2KVxuICB9XG5cbiAgY29uc3Qgc2l0ZXM6IFNpdGVSb3dbXSA9IHJlc3VsdD8uc2l0ZXMgfHwgW11cbiAgY29uc3Qgd2FybmluZ3M6IHN0cmluZ1tdID0gcmVzdWx0Py53YXJuaW5ncyB8fCBbXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHBhZGRpbmc6IDEwLCBvdmVyZmxvdzogJ2F1dG8nLCBmb250U2l6ZTogMTMgfX0+XG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkc1swXX1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyh2KSA9PiBzZXRKbXYodil9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJyB9fT5TZWxlY3QgYSBNYXAgd2lkZ2V0IGluIHRoaXMgd2lkZ2V0J3Mgc2V0dGluZ3MuPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXsham12IHx8IGFybWluZyB8fCBydW5uaW5nfSBvbkNsaWNrPXthcm1DbGlja30+XG4gICAgICAgICAge2FybWluZyA/ICdDbGljayB0aGUgbWFw4oCmJyA6IHJ1bm5pbmcgPyAnVHJhY2luZ+KApicgOiAnU2V0IHNwaWxsIHBvaW50J31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9e3J1bm5pbmd9IG9uQ2xpY2s9e2NsZWFyQWxsfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXshcmVzdWx0fSBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfVxuICAgICAgICAgIHRpdGxlPVwiSGlkZS9zaG93IHRoZSB0cmFqZWN0b3J5IG9uIHRoZSBtYXAgd2l0aG91dCBsb3NpbmcgdGhlIHJ1biAoYnJpZWZpbmdzKVwiPlxuICAgICAgICAgIHtoaWRkZW4gPyAn8J+RgSBTaG93JyA6ICfwn5GBIEhpZGUnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH0gdGl0bGU9XCJDb3B5IHJ1biBwcm92ZW5hbmNlIHJlY29yZCAoSlNPTikgZm9yIGFmdGVyLWFjdGlvbiBkb2N1bWVudGF0aW9uIOKAlCBpbmNsdWRlcyBhIHJlcGxheSBVUkxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0Py5ydW5SZWNvcmQgfHwgIWNhY2hlUmVmLmN1cnJlbnQpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgcmVjOiBhbnkgPSB7IC4uLnJlc3VsdC5ydW5SZWNvcmQgfVxuICAgICAgICAgICAgY29uc3QgdSA9IG5ldyBVUkwoJ2h0dHBzOi8vd2hpdGV3YXRlcnJlc2N1ZS5naXRodWIuaW8vd3JpLWV4Yi13aWRnZXRzL2VtYmVkLycpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2NvbmZpZycsICdhbGwtZ3JwcycpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2xhdCcsIGNhY2hlUmVmLmN1cnJlbnQubGF0LnRvRml4ZWQoNSkpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2xvbicsIGNhY2hlUmVmLmN1cnJlbnQubG9uLnRvRml4ZWQoNSkpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2FzT2YnLCByZWMuYXNfb2YgIT09ICdsaXZlJyA/IHJlYy5hc19vZiA6IHJlYy5nZW5lcmF0ZWRfYXQuc2xpY2UoMCwgMTApKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdzZicsIFN0cmluZyhzYWZldHkpKVxuICAgICAgICAgICAgcmVjLnJlcGxheV91cmwgPSB1LnRvU3RyaW5nKClcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KHJlYywgbnVsbCwgMSkpLnRoZW4oKCkgPT4gc2V0U3RhdHVzKCdSdW4gcmVjb3JkIGNvcGllZCAoaW5jbHVkZXMgcmVwbGF5X3VybCkuJykpXG4gICAgICAgICAgfX0+XG4gICAgICAgICAg4o6YIFJlY29yZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0IH19XG4gICAgICAgICAgdGl0bGU9XCJTYWZldHkgZmFjdG9yIOKAlCBjaGFuZ2luZyBpdCByZS1ydW5zIGluc3RhbnRseSBmcm9tIGNhY2hlZCBoeWRyb2xvZ3lcIj5cbiAgICAgICAgICBTRlxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NhZmV0eX0gZGlzYWJsZWQ9e3J1bm5pbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIHNldFNhZmV0eSh2KVxuICAgICAgICAgICAgICBpZiAoY2FjaGVSZWYuY3VycmVudCAmJiAhcnVubmluZykgY29tcHV0ZUFuZFJlbmRlcih2LCB0cnVlKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxLjB9PjEuMDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS4yNX0+MS4yNTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS41fT4xLjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezIuMH0+Mi4wPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDgsIG1pbkhlaWdodDogMTggfX0+e3J1bm5pbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwiamltdS1zZWNvbmRhcnktbG9hZGluZ1wiIC8+fSB7c3RhdHVzfTwvZGl2PlxuXG4gICAgICB7ZGlhZy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM4ODgnLCBmb250U2l6ZTogMTEsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICB7ZGlhZy5tYXAoKGQsIGkpID0+IDxkaXYga2V5PXtpfT57ZH08L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt3YXJuaW5ncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZjNjZCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZmZlZWJhJywgcGFkZGluZzogNiwgbWFyZ2luQm90dG9tOiA4LCBib3JkZXJSYWRpdXM6IDQgfX0+XG4gICAgICAgICAge3dhcm5pbmdzLm1hcCgodywgaSkgPT4gPGRpdiBrZXk9e2l9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMiB9fT7imqAge3d9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7cmVzdWx0ICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDgsIGNvbG9yOiAnIzU1NScgfX0+XG4gICAgICAgICAgRVRBcyBhcmUgZXN0aW1hdGVzICjCsTIwJSksIHNhZmV0eSBmYWN0b3Igw5d7cmVzdWx0LnNhZmV0eV9mYWN0b3J9IGFwcGxpZWQg4oCUIHRyZWF0IGFzIGJhbmRzLCBub3QgYXBwb2ludG1lbnRzLlxuICAgICAgICAgIHtyZXN1bHQuZ2F1Z2VzX3VzZWQubGVuZ3RoXG4gICAgICAgICAgICA/IGAgRmxvd3M6ICR7cmVzdWx0LmdhdWdlc191c2VkLm1hcCgoZzogYW55KSA9PiBnLnN0YXRpb25faWQpLmpvaW4oJywgJyl9LmBcbiAgICAgICAgICAgIDogJyBObyBsaXZlIGdhdWdlcyBmb3VuZCDigJQgZHJhaW5hZ2UtYXJlYSBmbG93IGVzdGltYXRlLid9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3NpdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2NjYycgfX0+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+RVRBPC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5TaXRlPC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5rbTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+Qm9vbTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3NpdGVzLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZScgfX0+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtzLmV0YV9lYXJseV9ociAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gYGVhcmxpZXN0IGNyZWRpYmxlICR7cy5ldGFfZWFybHlfaHJ9IGhyIMK3IGZpcnN0IGFycml2YWwgJHtzLmV0YV9ocn0gaHIgwrcgcGVhayAke3MuZXRhX3BlYWtfaHJ9IGhyJHtzLmNsZWFyX2hyID8gYCDCtyBjbGVhciB+JHtzLmNsZWFyX2hyfSBocmAgOiAnJ31gXG4gICAgICAgICAgICAgICAgICAgIDogJyd9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYW5kQ29sb3Iocy5ldGFfaHIpLCBtYXJnaW5SaWdodDogNCxcbiAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICB7cy5ldGFfZWFybHlfaHIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IGAke3MuZXRhX2Vhcmx5X2hyLnRvRml4ZWQoMSl94oCTJHtzLmV0YV9oci50b0ZpeGVkKDEpfSBocmBcbiAgICAgICAgICAgICAgICAgICAgOiBzLmV0YV9ociA8IDEgPyBgJHtNYXRoLnJvdW5kKHMuZXRhX2hyICogNjApfSBtaW5gIDogYCR7cy5ldGFfaHIudG9GaXhlZCgxKX0gaHJgfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57cy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57cy5kaXN0X2ttLnRvRml4ZWQoMSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fSB0aXRsZT17cy5ib29tXG4gICAgICAgICAgICAgICAgICA/IGAke3MuYm9vbS5hbmNob3JzfSBhbmNob3Igc2V0cyR7cy5ib29tLmJvb21fYW5nbGVfZGVnID8gYCDCtyAke3MuYm9vbS5ib29tX2FuZ2xlX2RlZ33CsCBkZXBsb3ltZW50YCA6ICcnfSR7cy5ib29tLmNhc2NhZGVfYWR2aXNlZCA/ICcgwrcgZmFzdCB3YXRlcjogY2FzY2FkZSBtdWx0aXBsZSBib29tcycgOiAnJ30gKCR7cy5ib29tLnNvdXJjZSA9PT0gJ2RyYXduJyA/ICdmcm9tIGRyYXduIGJvb20gbGluZXMnIDogJ2VzdGltYXRlZCBmcm9tIG1vZGVsZWQgd2lkdGgvdmVsb2NpdHknfSlgXG4gICAgICAgICAgICAgICAgICA6ICcnfT5cbiAgICAgICAgICAgICAgICAgIHtzLmJvb21cbiAgICAgICAgICAgICAgICAgICAgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAge3MuYm9vbS5ib29tX2Z0LnRvTG9jYWxlU3RyaW5nKCl9IGZ0XG4gICAgICAgICAgICAgICAgICAgICAgICB7cy5ib29tLmNhc2NhZGVfYWR2aXNlZCAmJiAnIOKaoSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM5OTknIH19PiB7cy5ib29tLnNvdXJjZSA9PT0gJ2RyYXduJyA/ICfinJMnIDogJ2VzdC4nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgOiAn4oCUJ31cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICB7c2l0ZXMuc29tZSgocykgPT4gcy5ib29tKSAmJiAoXG4gICAgICAgICAgICA8dGZvb3Q+XG4gICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJUb3A6ICcycHggc29saWQgI2NjYycsIGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30gc3R5bGU9e3sgcGFkZGluZzogJzNweCA0cHgnIH19PlxuICAgICAgICAgICAgICAgICAgVG90YWxzICh7c2l0ZXMuZmlsdGVyKChzKSA9PiBzLmJvb20pLmxlbmd0aH0gYm9vbSBzaXRlcylcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnM3B4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAge3NpdGVzLnJlZHVjZSgodCwgcykgPT4gdCArIChzLmJvb20/LmJvb21fZnQgfHwgMCksIDApLnRvTG9jYWxlU3RyaW5nKCl9IGZ0IMK3eycgJ31cbiAgICAgICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5hbmNob3JzIHx8IDApLCAwKX0gYW5jaG9yc1xuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGFibGU+XG4gICAgICApfVxuICAgICAge3Jlc3VsdCAmJiBzaXRlcy5zb21lKChzKSA9PiBzLmJvb20pICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM3NzcnLCBtYXJnaW5Ub3A6IDQgfX0+XG4gICAgICAgICAg4pyTID0gZHJhd24gYm9vbSBsaW5lcyDCtyBlc3QuID0gc2l6ZWQgZnJvbSBtb2RlbGVkIHdpZHRoL3ZlbG9jaXR5XG4gICAgICAgICAgKGJvb20gYW5nbGVkIHRvIGtlZXAgbm9ybWFsIGZsb3cg4omkIHsocHJvcHMuY29uZmlnLmVxdWlwbWVudD8uZW50cmFpbm1lbnRNcyA/PyAwLjM1KX0gbS9zLFxuICAgICAgICAgICt7cHJvcHMuY29uZmlnLmVxdWlwbWVudD8ucmVzZXJ2ZVBjdCA/PyAyMH0lIHJlc2VydmUpIMK3IOKaoSA9IGZhc3Qgd2F0ZXIsIGNhc2NhZGUgYm9vbXNcbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3Jlc3VsdCAmJiBzaXRlcy5sZW5ndGggPT09IDAgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM3NzcnIH19Pk5vIGNvbmZpZ3VyZWQgc2l0ZXMgd2l0aGluIHJlYWNoIG9mIHRoaXMgdHJhY2UuPC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==