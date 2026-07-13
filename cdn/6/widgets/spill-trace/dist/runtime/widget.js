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
const ENGINE_VERSION = "1.3.0";
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
    if (gd.length >= 2) {
        const fQ = interpClamped(gd.map((g) => g.trace_dist), gd.map((g) => g.discharge));
        for (const r of rows)
            r.Q_cfs = Math.max(fQ(r.cum_dist), 1.0);
        qMethod = anchored ? "gauge-interpolation+upstream-anchor" : "gauge-interpolation";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGNBQWM7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVJLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUV0QyxNQUFNLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxrREFBa0QsQ0FBQztBQUNyRSxNQUFNLE9BQU8sR0FBRyx5Q0FBeUMsQ0FBQztBQUMxRCxNQUFNLFNBQVMsR0FBRywyQ0FBMkMsQ0FBQztBQUU5RDs7OztHQUlHO0FBQ0ksTUFBTSwwQkFBMEIsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNoRCwwRkFBMEY7SUFDMUYsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0NBQzdCLENBQUMsQ0FBQztBQUVJLE1BQU0sY0FBYyxHQUFHO0lBQzVCLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxFQUFFO0lBQ1osV0FBVyxFQUFFLEtBQUs7SUFDbEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixjQUFjLEVBQUUsQ0FBQztJQUNqQixhQUFhLEVBQUUsSUFBSSxFQUFTLDJEQUEyRDtJQUN2RixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGlCQUFpQixFQUFFLEdBQUcsRUFBTSxxREFBcUQ7SUFDakYsYUFBYSxFQUFFLEVBQUU7SUFDakIsaUJBQWlCLEVBQUUsRUFBRTtJQUNyQixlQUFlLEVBQUUsRUFBRSxFQUFTLDJEQUEyRDtJQUN2RixhQUFhLEVBQUUsR0FBRztJQUNsQixvQkFBb0IsRUFBRSxFQUFFLEVBQUksNkRBQTZEO0lBQ3pGLFdBQVcsRUFBRSxX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SSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRztZQUFFLE1BQU07UUFDbEUsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLEdBQUc7WUFDUixJQUFJO1lBQ0osR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQzlCLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUk7WUFDbEMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTztTQUN2QyxDQUFDO1FBQ0YsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLDZFQUE2RTtZQUM3RSxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLElBQUksR0FBRztnQkFDUCxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRTtnQkFDbEcsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFD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QUcsQ0FBQyxRQUFDLENBQUMsSUFBSSwwQ0FBRSxPQUFPLEtBQUksQ0FBQyxDQUFDLEtBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLGdCQUFPLEdBQUcsRUFDaEYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxXQUFDLFFBQUMsR0FBRyxDQUFDLFFBQUMsQ0FBQyxJQUFJLDBDQUFFLE9BQU8sS0FBSSxDQUFDLENBQUMsS0FBRSxDQUFDLENBQUMsZ0JBQ25ELElBQ0YsR0FDQyxDQUNULElBQ0ssQ0FDVCxFQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEMsMEVBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLG1JQUVMLENBQUMsaUJBQUssQ0FBQyxNQUFNLENBQUMsU0FBUywwQ0FBRSxhQUFhLG1DQUFJLElBQUksQ0FBQyxhQUNqRixpQkFBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLDBDQUFFLFVBQVUsbUNBQUksRUFBRSw0REFDdEMsQ0FDUCxFQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSx5RUFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGdFQUF1RCxJQUNqSCxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvdHJhY2UtZW5naW5lLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlsaW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zcGlsbC10cmFjZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIHRyYWNlLWVuZ2luZS5qcyDigJQgTmF0aW9uYWwgc3BpbGwgdHJhamVjdG9yeSBlbmdpbmUgKEpTIHBvcnQgb2Ygc3BpbGxfdHJhY2UucHkpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBGYWl0aGZ1bCBwb3J0IG9mIHRoZSBQeXRob24gb3JhY2xlLiBEZXBlbmRlbmN5LWZyZWUgRVNNOiBydW5zIGluIHBsYWluIE5vZGVcbiAqICg+PTE4LCBnbG9iYWwgZmV0Y2gpIGZvciBnb2xkZW4gdGVzdGluZyBhbmQgaW4gdGhlIGJyb3dzZXIgaW5zaWRlIHRoZSBFeEJcbiAqIHdpZGdldC4gTk8gQGFyY2dpcyBpbXBvcnRzIGhlcmUg4oCUIHRoZSB3aWRnZXQgd3JhcHMgdGhpcyBtb2R1bGUgYW5kIHN1cHBsaWVzXG4gKiBsYXllciBhY2Nlc3MgdGhyb3VnaCBpbmplY3RhYmxlIHByb3ZpZGVyczpcbiAqXG4gKiAgIGNvbmZpZy53aWR0aFByb3ZpZGVyKGVudmVsb3BlKSAgLT4gW3tsYXQsIGxvbiwgd2lkdGh9XSAgIChHTE9XIG1pZHBvaW50cyBpbiBiYm94KVxuICogICBjb25maWcuc2l0ZVByb3ZpZGVycyAgICAgICAgICAgIC0+IFt7bmFtZSwgYnVmZmVyX20sIGZldGNoOiBhc3luYyAoKSA9PiBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dfV1cbiAqICAgY29uZmlnLnJlY2VwdG9yUHJvdmlkZXJzICAgICAgICAtPiBzYW1lIHNoYXBlIGFzIHNpdGVQcm92aWRlcnNcbiAqXG4gKiBQb3J0IGdvdGNoYXMgaG9ub3JlZCAoc2VlIFJFQURNRSk6XG4gKiAgIDEuIGdlb3NlcnZlciBDUUwgQkJPWCBpcyBsYXQsbG9uIGF4aXMgb3JkZXIgKEVQU0c6NDI2OSAvIFdGUyAyLjApXG4gKiAgIDIuIEhSIE5IRFBsdXNJRCAhPSBNUiBjb21pZCDigJQgd2lkdGhzIHNhbXBsZWQgc3BhdGlhbGx5LCBuZXZlciBJRC1qb2luZWRcbiAqICAgMy4gaW1wb3VuZG1lbnQgPSB3YmFyZWF0eXBlIGluIChMYWtlUG9uZCwgUmVzZXJ2b2lyKVxuICogICA0LiB3aWR0aCBvdmVycmlkZSBzYW1wbGVkIGluIHdpbmRvd3M7IGZhaWx1cmUgZGVncmFkZXMgdG8gZm9ybXVsYSB3aWR0aHNcbiAqICAgNS4gTkxESS9nZW9zZXJ2ZXIgZW1wdHktMjAwIC0+IHJldHJ5IDN4IHdpdGggYmFja29mZlxuICogICA2LiBzbmFwIGNsaWNrIHRvIHN0cmVhbW9yZGUgPj0gbWluU3RyZWFtT3JkZXJcbiAqL1xuXG5leHBvcnQgY29uc3QgRU5HSU5FX1ZFUlNJT04gPSBcIjEuMy4wXCI7XG5cbmNvbnN0IE5MRElfQkFTRSA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvbmxkaVwiO1xuY29uc3QgR0VPU0VSVkVSID0gXCJodHRwczovL2FwaS53YXRlci51c2dzLmdvdi9nZW9zZXJ2ZXIvd21hZGF0YS9vd3NcIjtcbmNvbnN0IE5XSVNfSVYgPSBcImh0dHBzOi8vd2F0ZXJzZXJ2aWNlcy51c2dzLmdvdi9ud2lzL2l2L1wiO1xuY29uc3QgTldJU19TSVRFID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9zaXRlL1wiO1xuXG4vKipcbiAqIE5IRFBsdXMgTVIgd2F0ZXJib2R5IGZsYWdzIGxhZyByZWFsaXR5IOKAlCByZWFjaGVzIHRocm91Z2ggUkVNT1ZFRCBkYW1zIHN0aWxsXG4gKiBjYXJyeSB3YmFyZWF0eXBlIExha2VQb25kIGFuZCB3b3VsZCBmYWxzZS1zdG9wIHRoZSBjbG9jay4gS25vd24gcmVtb3ZhbHNcbiAqIGFyZSBleGNsdWRlZCBoZXJlIChleHRlbmRhYmxlIHBlci1ydW4gdmlhIGNvbmZpZy5pbXBvdW5kRXhjbHVkZUNvbWlkcykuXG4gKi9cbmV4cG9ydCBjb25zdCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUyA9IG5ldyBTZXQoW1xuICAvLyBNaWxsdG93biBEYW0sIENsYXJrIEZvcmsgYXQgQm9ubmVyIE1UIOKAlCByZW1vdmVkIDIwMDgtMjAxMCAocmVwb3J0ZWQgYnkgQ29keSAyMDI2LTA3LTA3KVxuICAyNDI5MzEyMCwgMjQyOTMxMjIsIDI0MjkzMTI0LFxuXSk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgbWF4RGlzdGFuY2VLbTogMzAwLFxuICBtYXhIb3VyczogMjQsXG4gIHJlc29sdXRpb25NOiAxMDAuMCxcbiAgc2FmZXR5RmFjdG9yOiAxLjUsXG4gIG1hbm5pbmdOOiAwLjA0NSxcbiAgbWluU3RyZWFtT3JkZXI6IDQsXG4gIHdpZHRoUHJvdmlkZXI6IG51bGwsICAgICAgICAvLyBhc3luYyAoZW52IHt4bWluLHltaW4seG1heCx5bWF4fSkgPT4gW3tsYXQsIGxvbiwgd2lkdGh9XVxuICB3aWR0aFNhbXBsZVJhZGl1c006IDgwMCxcbiAgd2lkdGhXaW5kb3dQb2ludHM6IDEwMCwgICAgIC8vIHRyYWNlIHBvaW50cyBwZXIgb3ZlcnJpZGUgc2FtcGxpbmcgd2luZG93ICh+MTAga20pXG4gIHNpdGVQcm92aWRlcnM6IFtdLFxuICByZWNlcHRvclByb3ZpZGVyczogW10sXG4gIHVwc3RyZWFtR2F1Z2VLbTogMzAsICAgICAgICAvLyBzZWFyY2ggVU0gdGhpcyBmYXIgZm9yIGFuIHVwc3RyZWFtIGFuY2hvciBnYXVnZTsgMCA9IG9mZlxuICBpbXBvdW5kU3RvcEttOiAyLjAsXG4gIGltcG91bmRFeGNsdWRlQ29taWRzOiBbXSwgICAvLyBleHRyYSByZW1vdmVkLWRhbSBjb21pZHMgYmV5b25kIFJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTXG4gIHRpbWluZ01vZGVsOiBcImh5ZHJhdWxpY1wiLCAgIC8vICdoeWRyYXVsaWMnIChWPVEvQSB4IHNhZmV0eSkgfCAnam9ic29uJyAoVVNHUyBXUklSIDk2LTQwMTMgZHllLXN0dWR5IHJlZ3Jlc3Npb25zKVxuICBhc09mOiBudWxsLCAgICAgICAgICAgICAgICAgLy8gJ1lZWVktTU0tREQnIGhpc3RvcmljYWwgUTsgbnVsbCA9IGxpdmVcbiAgdmVyYm9zZTogdHJ1ZSxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVyc1xuXG5jb25zdCBSX0VBUlRIID0gNjM3MTAwOC44O1xuXG5leHBvcnQgZnVuY3Rpb24gaGF2ZXJzaW5lTShsYXQxLCBsb24xLCBsYXQyLCBsb24yKSB7XG4gIGNvbnN0IHAxID0gKGxhdDEgKiBNYXRoLlBJKSAvIDE4MDtcbiAgY29uc3QgcDIgPSAobGF0MiAqIE1hdGguUEkpIC8gMTgwO1xuICBjb25zdCBkcCA9IHAyIC0gcDE7XG4gIGNvbnN0IGRsID0gKChsb24yIC0gbG9uMSkgKiBNYXRoLlBJKSAvIDE4MDtcbiAgY29uc3QgYSA9IE1hdGguc2luKGRwIC8gMikgKiogMiArIE1hdGguY29zKHAxKSAqIE1hdGguY29zKHAyKSAqIE1hdGguc2luKGRsIC8gMikgKiogMjtcbiAgcmV0dXJuIDIgKiBSX0VBUlRIICogTWF0aC5hc2luKE1hdGguc3FydChhKSk7XG59XG5cbi8qKiBQYXl0b24ncyB3aWR0aC9kZXB0aCBmb3JtdWxhcyAoZmFsbGJhY2sgd2hlbiBubyBHTE9XIGRhdGEpLiBWZXJiYXRpbS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKGRyYWluYWdlQXJlYVNxTWkpIHtcbiAgbGV0IHdpZHRoLCBkZXB0aDtcbiAgaWYgKGRyYWluYWdlQXJlYVNxTWkgPCAxMDApIHtcbiAgICB3aWR0aCA9IDEwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAsIDAuNSk7XG4gICAgZGVwdGggPSAwLjUgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAsIDAuMyk7XG4gIH0gZWxzZSBpZiAoZHJhaW5hZ2VBcmVhU3FNaSA8IDEwMDApIHtcbiAgICB3aWR0aCA9IDUwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwLCAwLjUpO1xuICAgIGRlcHRoID0gMS41ICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMCwgMC4zKTtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9IDE1MC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMDAsIDAuNCk7XG4gICAgZGVwdGggPSAzLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwMCwgMC4zKTtcbiAgfVxuICByZXR1cm4gW3dpZHRoLCBkZXB0aF07XG59XG5cbi8qKlxuICogTWFubmluZydzIGRlcHRoIHZpYSBiaXNlY3Rpb24gKFB5dGhvbiB1c2VkIHNjaXB5IGJyZW50cSBvbiBbMC4xLCAyMF0pLlxuICogVGhlIHJlc2lkdWFsIGlzIG1vbm90b25pY2FsbHkgaW5jcmVhc2luZyBpbiBkZXB0aCwgc28gYmlzZWN0aW9uIGNvbnZlcmdlcyB0b1xuICogdGhlIHNhbWUgcm9vdC4gUmVwbGljYXRlcyBicmVudHEncyBmYWlsdXJlIG1vZGU6IG5vIHNpZ24gY2hhbmdlIGFjcm9zcyB0aGVcbiAqIGJyYWNrZXQgLT4gbnVsbCAoY2FsbGVyIGZhbGxzIGJhY2sgdG8gZm9ybXVsYSBkZXB0aCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEZXB0aE1hbm5pbmcoUW0zcywgd2lkdGhNLCBzbG9wZSwgbiA9IDAuMDQ1KSB7XG4gIGlmIChRbTNzIDw9IDAgfHwgd2lkdGhNIDw9IDAgfHwgc2xvcGUgPD0gMC4wMDAwMSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHJlc2lkdWFsID0gKGRlcHRoKSA9PiB7XG4gICAgaWYgKGRlcHRoIDw9IDAuMDEpIHJldHVybiAtUW0zcztcbiAgICBjb25zdCBBID0gd2lkdGhNICogZGVwdGg7XG4gICAgY29uc3QgUCA9IHdpZHRoTSArIDIgKiBkZXB0aDtcbiAgICBjb25zdCBSID0gQSAvIFA7XG4gICAgcmV0dXJuICgxIC8gbikgKiBBICogTWF0aC5wb3coUiwgMiAvIDMpICogTWF0aC5zcXJ0KHNsb3BlKSAtIFFtM3M7XG4gIH07XG4gIGxldCBsbyA9IDAuMSwgaGkgPSAyMC4wO1xuICBsZXQgZmxvID0gcmVzaWR1YWwobG8pLCBmaGkgPSByZXNpZHVhbChoaSk7XG4gIGlmIChmbG8gPT09IDApIHJldHVybiBsbztcbiAgaWYgKGZoaSA9PT0gMCkgcmV0dXJuIGhpO1xuICBpZiAoZmxvICogZmhpID4gMCkgcmV0dXJuIG51bGw7IC8vIGJyZW50cSByYWlzZXMgLT4gUHl0aG9uIHJldHVybnMgTm9uZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgbWlkID0gMC41ICogKGxvICsgaGkpO1xuICAgIGNvbnN0IGZtID0gcmVzaWR1YWwobWlkKTtcbiAgICBpZiAoZm0gPT09IDAgfHwgKGhpIC0gbG8pIC8gMiA8IDFlLTEwKSByZXR1cm4gbWlkO1xuICAgIGlmIChmbG8gKiBmbSA8IDApIHsgaGkgPSBtaWQ7IGZoaSA9IGZtOyB9IGVsc2UgeyBsbyA9IG1pZDsgZmxvID0gZm07IH1cbiAgfVxuICByZXR1cm4gMC41ICogKGxvICsgaGkpO1xufVxuXG5jb25zdCBzbGVlcCA9IChtcykgPT4gbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgbXMpKTtcblxuLyoqIEdFVC9QT1NUIHdpdGggcmV0cnkg4oCUIE5MREkvZ2Vvc2VydmVyIGludGVybWl0dGVudGx5IHJldHVybiBlbXB0eSAyMDAgYm9kaWVzLiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbih1cmwsIHsgcGFyYW1zID0gbnVsbCwgZGF0YSA9IG51bGwsIHRyaWVzID0gMywgdGltZW91dE1zID0gOTAwMDAgfSA9IHt9KSB7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgZm9yIChsZXQgYXR0ZW1wdCA9IDA7IGF0dGVtcHQgPCB0cmllczsgYXR0ZW1wdCsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN0cmwgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gY3RybC5hYm9ydCgpLCB0aW1lb3V0TXMpO1xuICAgICAgbGV0IHJlc3A7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHNpZ25hbDogY3RybC5zaWduYWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcXMgPSBwYXJhbXMgPyBcIj9cIiArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpIDogXCJcIjtcbiAgICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2godXJsICsgcXMsIHsgc2lnbmFsOiBjdHJsLnNpZ25hbCB9KTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzcC5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcC5zdGF0dXN9YCk7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcC5qc29uKCk7IC8vIGVtcHR5IGJvZHkgLT4gU3ludGF4RXJyb3IgLT4gcmV0cnlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsYXN0ID0gZTtcbiAgICAgIGF3YWl0IHNsZWVwKDE1MDAgKiAoYXR0ZW1wdCArIDEpKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGAke3VybH0gZmFpbGVkIGFmdGVyICR7dHJpZXN9IHRyaWVzOiAke2xhc3R9YCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRleHQodXJsLCBwYXJhbXMsIHRpbWVvdXRNcyA9IDMwMDAwKSB7XG4gIGNvbnN0IGN0cmwgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjdHJsLmFib3J0KCksIHRpbWVvdXRNcyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCArIFwiP1wiICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCksIHsgc2lnbmFsOiBjdHJsLnNpZ25hbCB9KTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcC50ZXh0KCk7XG4gIH0gZmluYWxseSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhdGEgZmV0Y2hcblxuLyoqIFNuYXAgdG8gbmVhcmVzdCByZWFjaCB3aXRoIHN0cmVhbW9yZGUgPj0gbWluT3JkZXIgKGdlb3NlcnZlciBiYm94IHNlYXJjaCkuICovXG5hc3luYyBmdW5jdGlvbiBzbmFwQ29taWQobGF0LCBsb24sIG1pbk9yZGVyKSB7XG4gIGNvbnN0IGJveCA9IDAuMjtcbiAgLy8gTk9URTogRVBTRzo0MjY5IHVuZGVyIFdGUyAyLjAgdXNlcyBsYXQsbG9uIGF4aXMgb3JkZXIgaW4gQ1FMIEJCT1hcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XG4gICAgZGF0YToge1xuICAgICAgc2VydmljZTogXCJXRlNcIiwgdmVyc2lvbjogXCIyLjAuMFwiLCByZXF1ZXN0OiBcIkdldEZlYXR1cmVcIixcbiAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLCBvdXRwdXRGb3JtYXQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgY3FsX2ZpbHRlcjpcbiAgICAgICAgYHN0cmVhbW9yZGUgPj0gJHttaW5PcmRlcn0gQU5EIEJCT1godGhlX2dlb20sYCArXG4gICAgICAgIGAke2xhdCAtIGJveH0sJHtsb24gLSBib3h9LCR7bGF0ICsgYm94fSwke2xvbiArIGJveH0pYCxcbiAgICAgIGNvdW50OiBcIjUwMFwiLFxuICAgIH0sXG4gIH0pO1xuICBsZXQgYmVzdCA9IG51bGwsIGJlc3REID0gSW5maW5pdHk7XG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgY29uc3QgZyA9IGYuZ2VvbWV0cnk7XG4gICAgY29uc3QgcGF0aHMgPSBnLnR5cGUgPT09IFwiTGluZVN0cmluZ1wiID8gW2cuY29vcmRpbmF0ZXNdIDogZy5jb29yZGluYXRlcztcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkgKz0gMykgeyAvLyBldmVyeSAzcmQgdmVydGV4XG4gICAgICAgIGNvbnN0IHAgPSBwYXRoW2ldO1xuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShsYXQsIGxvbiwgcFsxXSwgcFswXSk7XG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0gZi5wcm9wZXJ0aWVzOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChiZXN0ICE9PSBudWxsKSByZXR1cm4gW051bWJlcihiZXN0LmNvbWlkKSwgYmVzdC5nbmlzX25hbWUgPz8gbnVsbCwgYmVzdERdO1xuICByZXR1cm4gW2F3YWl0IG5sZGlQb3NpdGlvbkNvbWlkKGxhdCwgbG9uKSwgbnVsbCwgbnVsbF07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5sZGlQb3NpdGlvbkNvbWlkKGxhdCwgbG9uKSB7XG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvcG9zaXRpb25gLCB7XG4gICAgcGFyYW1zOiB7IGNvb3JkczogYFBPSU5UKCR7bG9ufSAke2xhdH0pYCB9LCB0aW1lb3V0TXM6IDMwMDAwLFxuICB9KTtcbiAgcmV0dXJuIE51bWJlcihqLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMuaWRlbnRpZmllcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5sZGlEbUZsb3dsaW5lcyhjb21pZCwgZGlzdGFuY2VLbSkge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkLyR7Y29taWR9L25hdmlnYXRpb24vRE0vZmxvd2xpbmVzYCwge1xuICAgIHBhcmFtczogeyBkaXN0YW5jZTogU3RyaW5nKE1hdGgudHJ1bmMoZGlzdGFuY2VLbSkpIH0sXG4gIH0pO1xuICBjb25zdCBnZW9tcyA9IG5ldyBNYXAoKTsgLy8gY29taWQgLT4gW3BhdGhzXSAoW1tsb24sbGF0XSwuLi5dKVxuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgIGNvbnN0IGNpZCA9IE51bWJlcihmLnByb3BlcnRpZXMubmhkcGx1c19jb21pZCk7XG4gICAgY29uc3QgZyA9IGYuZ2VvbWV0cnk7XG4gICAgaWYgKGcudHlwZSA9PT0gXCJMaW5lU3RyaW5nXCIpIGdlb21zLnNldChjaWQsIFtnLmNvb3JkaW5hdGVzXSk7XG4gICAgZWxzZSBpZiAoZy50eXBlID09PSBcIk11bHRpTGluZVN0cmluZ1wiKSBnZW9tcy5zZXQoY2lkLCBnLmNvb3JkaW5hdGVzKTtcbiAgfVxuICByZXR1cm4gZ2VvbXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5sZGlHYXVnZXMoY29taWQsIGRpc3RhbmNlS20sIG1vZGUpIHtcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC8ke2NvbWlkfS9uYXZpZ2F0aW9uLyR7bW9kZX0vbndpc3NpdGVgLCB7XG4gICAgcGFyYW1zOiB7IGRpc3RhbmNlOiBTdHJpbmcoTWF0aC50cnVuYyhkaXN0YW5jZUttKSkgfSxcbiAgfSk7XG4gIGNvbnN0IG91dCA9IFtdO1xuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgIGNvbnN0IHNpZCA9IChmLnByb3BlcnRpZXMuaWRlbnRpZmllciB8fCBcIlwiKS5yZXBsYWNlKFwiVVNHUy1cIiwgXCJcIik7XG4gICAgaWYgKHNpZC5sZW5ndGggPiAxNSkgY29udGludWU7IC8vIGNvb3JkaW5hdGUtc3R5bGUgSURzIChub3RlYm9vayBydWxlKVxuICAgIG91dC5wdXNoKHtcbiAgICAgIHN0YXRpb25faWQ6IHNpZCxcbiAgICAgIG5hbWU6IGYucHJvcGVydGllcy5uYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgbGF0OiBmLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdLFxuICAgICAgbG9uOiBmLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWVyZ2UgdGhlIG5lYXJlc3QgdXBzdHJlYW0gbWFpbi1zdGVtIGdhdWdlIGludG8gdGhlIGxvY2F0ZWQtZ2F1Z2UgbGlzdCBhcyBhXG4gKiB2aXJ0dWFsIGdhdWdlIGF0IHRoZSBzcGlsbCBwb2ludCAodHJhY2VfZGlzdCAwKS4gV2l0aG91dCB0aGlzLCBjbGlja2luZyBqdXN0XG4gKiBET1dOU1RSRUFNIG9mIGEgZ2F1Z2UgZHJvcHMgaXQgZnJvbSB0aGUgRE0gbmF2aWdhdGlvbiBhbmQgdGhlIG5leHQgZ2F1Z2UncyBRXG4gKiBpcyBiYWNrLWNsYW1wZWQgb250byB0aGUgZmlyc3QgcmVhY2gg4oCUIHdpbGRseSB3cm9uZyB3aGVuIHRoYXQgZ2F1Z2Ugc2l0c1xuICogYmVsb3cgYSBtYWpvciBjb25mbHVlbmNlIChHYWxsYXRpbiBiZWxvdyBMb2dhbiAtPiBNaXNzb3VyaSBhdCBUb3N0b24pLlxuICogUSBpcyB0cmFuc2ZlcnJlZCBieSBkcmFpbmFnZS1hcmVhIHJhdGlvIChzdGFuZGFyZCBVU0dTIHRyYW5zZmVyKSwgd2hpY2ggYWxzb1xuICoga2VlcHMgdGhlIGFuY2hvciBob25lc3Qgd2hlbiB0aGUgVU0gcGF0aCBjcm9zc2VzIGEgY29uZmx1ZW5jZTogdGhlIHJhdGlvXG4gKiBzY2FsZXMgYSB0cmlidXRhcnkgZ2F1Z2UgYmFjayB1cCB0byB0aGUgZmxvdyBhdCB0aGUgY2xpY2suXG4gKiBOby1vcCB3aGVuIGFuIG9uLXRyYWNlIGdhdWdlIGFscmVhZHkgc2l0cyB3aXRoaW4gYW5jaG9yU2tpcE0gb2YgdGhlIHN0YXJ0XG4gKiAoaXQgYWxyZWFkeSBhbmNob3JzIHRoZSBib3VuZGFyeSksIHRoZSBzdGF0aW9uIGlzIGFscmVhZHkgbG9jYXRlZCwgb3IgdGhlXG4gKiBEQSB0cmFuc2ZlciBpcyBvdXRzaWRlIGl0cyBjcmVkaWJsZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVXBzdHJlYW1BbmNob3IoZ2QsIHVwLCBzcGlsbERhU3FtaSwgeyBhbmNob3JTa2lwTSA9IDUwMCwgZGFSYXRpb01heCA9IDQgfSA9IHt9KSB7XG4gIGlmICghdXAgfHwgISh1cC5kaXNjaGFyZ2UgPj0gMCkgfHwgISh1cC5kcmFpbmFnZV9hcmVhID4gMCkgfHwgIShzcGlsbERhU3FtaSA+IDApKSByZXR1cm4gZmFsc2U7XG4gIGlmIChnZC5zb21lKChnKSA9PiBnLnN0YXRpb25faWQgPT09IHVwLnN0YXRpb25faWQpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChnZC5zb21lKChnKSA9PiBnLnRyYWNlX2Rpc3QgPD0gYW5jaG9yU2tpcE0pKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHJhdGlvID0gc3BpbGxEYVNxbWkgLyB1cC5kcmFpbmFnZV9hcmVhO1xuICBpZiAocmF0aW8gPCAxIC8gZGFSYXRpb01heCB8fCByYXRpbyA+IGRhUmF0aW9NYXgpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgW3csIGRlcF0gPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHNwaWxsRGFTcW1pKTtcbiAgZ2QucHVzaCh7XG4gICAgc3RhdGlvbl9pZDogdXAuc3RhdGlvbl9pZCwgbmFtZTogdXAubmFtZSwgbGF0OiB1cC5sYXQsIGxvbjogdXAubG9uLFxuICAgIGRpc2NoYXJnZTogdXAuZGlzY2hhcmdlICogcmF0aW8sIGRyYWluYWdlX2FyZWE6IHNwaWxsRGFTcW1pLFxuICAgIGFyZWE6IHcgKiBkZXAsIHRyYWNlX2Rpc3Q6IDAuMCxcbiAgICB1cHN0cmVhbV9hbmNob3I6IHRydWUsXG4gICAgYW5jaG9yX2dhdWdlX3FfY2ZzOiB1cC5kaXNjaGFyZ2UsIGFuY2hvcl9nYXVnZV9kYV9zcW1pOiB1cC5kcmFpbmFnZV9hcmVhLFxuICAgIGFuY2hvcl91cHN0cmVhbV9tOiB1cC51cHN0cmVhbV9tID8/IG51bGwsXG4gIH0pO1xuICBnZC5zb3J0KChhLCBiKSA9PiBhLnRyYWNlX2Rpc3QgLSBiLnRyYWNlX2Rpc3QpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqIFZBQXMgZm9yIGEgbGlzdCBvZiBDT01JRHMgZnJvbSBVU0dTIGdlb3NlcnZlciAoYmF0Y2hlZCBQT1NUKS4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZhYUJhdGNoKGNvbWlkcykge1xuICBjb25zdCBvdXQgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IENIVU5LID0gMTUwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbWlkcy5sZW5ndGg7IGkgKz0gQ0hVTkspIHtcbiAgICBjb25zdCBjaHVuayA9IGNvbWlkcy5zbGljZShpLCBpICsgQ0hVTkspO1xuICAgIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKEdFT1NFUlZFUiwge1xuICAgICAgZGF0YToge1xuICAgICAgICBzZXJ2aWNlOiBcIldGU1wiLCB2ZXJzaW9uOiBcIjIuMC4wXCIsIHJlcXVlc3Q6IFwiR2V0RmVhdHVyZVwiLFxuICAgICAgICB0eXBlTmFtZTogXCJ3bWFkYXRhOm5oZGZsb3dsaW5lX25ldHdvcmtcIixcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgY3FsX2ZpbHRlcjogYGNvbWlkIElOICgke2NodW5rLmpvaW4oXCIsXCIpfSlgLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgICAgY29uc3QgcCA9IGYucHJvcGVydGllcztcbiAgICAgIC8vIEVST00gbW9udGhseSBtb2RlbGVkIGZsb3cgKGdhdWdlLWFkanVzdGVkLCBjZnMpIOKAlCB1bmdhdWdlZCBmYWxsYmFjayArIEpvYnNvbiBRYVxuICAgICAgY29uc3QgcWUgPSB7fTtcbiAgICAgIGZvciAobGV0IG0gPSAxOyBtIDw9IDEyOyBtKyspIHtcbiAgICAgICAgY29uc3QgayA9IGBxZV8ke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICAgICAgcWVbbV0gPSBwW2tdID8/IG51bGw7XG4gICAgICB9XG4gICAgICBvdXQuc2V0KE51bWJlcihwLmNvbWlkKSwge1xuICAgICAgICBoeWRyb3NlcTogcC5oeWRyb3NlcSA/PyBudWxsLFxuICAgICAgICBzdHJlYW1vcmRlOiBwLnN0cmVhbW9yZGUgPz8gbnVsbCxcbiAgICAgICAgc2xvcGU6IHAuc2xvcGUgPz8gbnVsbCxcbiAgICAgICAgdG90ZGFzcWttOiBwLnRvdGRhc3FrbSA/PyBudWxsLFxuICAgICAgICBmdHlwZTogcC5mdHlwZSA/PyBudWxsLFxuICAgICAgICBmY29kZTogcC5mY29kZSA/PyBudWxsLFxuICAgICAgICBnbmlzX25hbWU6IHAuZ25pc19uYW1lID8/IG51bGwsXG4gICAgICAgIC8vIExha2VQb25kL1Jlc2Vydm9pciA9IGltcG91bmRlZDsgU3RyZWFtUml2ZXIgPSBicmFpZGVkIGZyZWUtZmxvd2luZ1xuICAgICAgICB3YmFyZWF0eXBlOiBwLndiYXJlYXR5cGUgPz8gbnVsbCxcbiAgICAgICAgdmVfbWE6IHAudmVfbWEgPz8gbnVsbCxcbiAgICAgICAgcWVfbWE6IHAucWVfbWEgPz8gbnVsbCwgICAvLyBFUk9NIG1lYW4gYW5udWFsIGZsb3cgKGNmcykg4oCUIEpvYnNvbiBRYVxuICAgICAgICBxZV9tb250aGx5OiBxZSxcbiAgICAgICAgLy8gTkhEUGx1cyBkaXZlcmdlbmNlOiAwID0gbm9uZSwgMSA9IG1haW4gcGF0aCwgMiA9IG1pbm9yIHBhdGggb2YgYSBzcGxpdFxuICAgICAgICBkaXZlcmdlbmNlOiBwLmRpdmVyZ2VuY2UgPz8gMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogRGlzY2hhcmdlIChjZnMpICsgZHJhaW5hZ2UgYXJlYSAoc3EgbWkpIHBlciBnYXVnZSB2aWEgcGxhaW4gTldJUyBSRVNULiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2F1Z2VJbmZvKHN0YXRpb25JZHMsIGFzT2YgPSBudWxsKSB7XG4gIGNvbnN0IGluZm8gPSBuZXcgTWFwKCk7XG4gIGlmICghc3RhdGlvbklkcy5sZW5ndGgpIHJldHVybiBpbmZvO1xuICBjb25zdCBzaXRlcyA9IHN0YXRpb25JZHMuam9pbihcIixcIik7XG5cbiAgLy8gZHJhaW5hZ2UgYXJlYXMgKHJkYiwgZXhwYW5kZWQgb3V0cHV0KVxuICB0cnkge1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCBnZXRUZXh0KE5XSVNfU0lURSwgeyBmb3JtYXQ6IFwicmRiXCIsIHNpdGVzLCBzaXRlT3V0cHV0OiBcImV4cGFuZGVkXCIgfSk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobCkgPT4gbCAmJiAhbC5zdGFydHNXaXRoKFwiI1wiKSk7XG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBoZHIgPSBsaW5lc1swXS5zcGxpdChcIlxcdFwiKTtcbiAgICAgIGNvbnN0IGlTaXRlID0gaGRyLmluZGV4T2YoXCJzaXRlX25vXCIpO1xuICAgICAgY29uc3QgaURhID0gaGRyLmluZGV4T2YoXCJkcmFpbl9hcmVhX3ZhXCIpOyAvLyAtMSBpZiBhYnNlbnRcbiAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcy5zbGljZSgyKSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoXCJcXHRcIik7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPD0gTWF0aC5tYXgoaVNpdGUsIGlEYSA+IC0xID8gaURhIDogMCkpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgZGEgPSBudWxsO1xuICAgICAgICBpZiAoaURhID4gLTEpIHtcbiAgICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdChwYXJ0c1tpRGFdKTtcbiAgICAgICAgICBkYSA9IE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uc2V0KHBhcnRzW2lTaXRlXSwgeyBkcmFpbmFnZV9hcmVhOiBkYSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggeyAvKiBpZ25vcmUg4oCUIG1hdGNoZXMgUHl0aG9uICovIH1cblxuICAvLyBkaXNjaGFyZ2VcbiAgY29uc3QgcGFyYW1zID0geyBmb3JtYXQ6IFwianNvblwiLCBzaXRlcywgcGFyYW1ldGVyQ2Q6IFwiMDAwNjBcIiB9O1xuICBpZiAoYXNPZikgeyBwYXJhbXMuc3RhcnREVCA9IGFzT2Y7IHBhcmFtcy5lbmREVCA9IGFzT2Y7IH1cbiAgZWxzZSBwYXJhbXMucGVyaW9kID0gXCJQMURcIjtcbiAgdHJ5IHtcbiAgICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihOV0lTX0lWLCB7IHBhcmFtcywgdGltZW91dE1zOiA2MDAwMCwgdHJpZXM6IDEgfSk7XG4gICAgZm9yIChjb25zdCB0cyBvZiBqPy52YWx1ZT8udGltZVNlcmllcyB8fCBbXSkge1xuICAgICAgY29uc3Qgc2lkID0gdHMuc291cmNlSW5mby5zaXRlQ29kZVswXS52YWx1ZTtcbiAgICAgIGNvbnN0IHZhbHMgPSB0cy52YWx1ZXNbMF0udmFsdWU7XG4gICAgICBpZiAoIXZhbHMgfHwgIXZhbHMubGVuZ3RoKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHEgPSBwYXJzZUZsb2F0KHZhbHNbdmFscy5sZW5ndGggLSAxXS52YWx1ZSk7XG4gICAgICBpZiAocSA+PSAwKSB7XG4gICAgICAgIGlmICghaW5mby5oYXMoc2lkKSkgaW5mby5zZXQoc2lkLCB7fSk7XG4gICAgICAgIGluZm8uZ2V0KHNpZCkuZGlzY2hhcmdlID0gcTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggeyAvKiBpZ25vcmUg4oCUIG1hdGNoZXMgUHl0aG9uICovIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdHJhY2UgYXNzZW1ibHlcblxuLyoqIE9yZGVyIHNlZ21lbnRzIGRvd25zdHJlYW0gKGh5ZHJvc2VxIGRlc2MpLCBvcmllbnQsIHRyaW0gdG8gc3BpbGwgcG9pbnQsXG4gKiAgZW1pdCB+cmVzb2x1dGlvbk0gc3BhY2VkIHBvaW50cyBjYXJyeWluZyBWQUEgYXR0cmlidXRlcy4gKi9cbmZ1bmN0aW9uIGFzc2VtYmxlVHJhY2UobGF0LCBsb24sIGdlb21zLCB2YWEsIHJlc29sdXRpb25NLCBsb2cpIHtcbiAgY29uc3Qgc2VncyA9IFtdO1xuICBmb3IgKGNvbnN0IFtjaWQsIHBhdGhzXSBvZiBnZW9tcykge1xuICAgIGNvbnN0IHYgPSB2YWEuZ2V0KGNpZCk7XG4gICAgaWYgKCF2IHx8IHYuaHlkcm9zZXEgPT09IG51bGwgfHwgdi5oeWRyb3NlcSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICBjb25zdCBjb29yZHMgPSBwYXRocy5mbGF0KCk7IC8vIGZsYXR0ZW4gbXVsdGlsaW5lIGludG8gb25lIHZlcnRleCBsaXN0XG4gICAgaWYgKGNvb3Jkcy5sZW5ndGggPCAyKSBjb250aW51ZTtcbiAgICBzZWdzLnB1c2goeyBjb21pZDogY2lkLCBjb29yZHMsIC4uLnYgfSk7XG4gIH1cbiAgc2Vncy5zb3J0KChhLCBiKSA9PiBiLmh5ZHJvc2VxIC0gYS5oeWRyb3NlcSk7IC8vIGRvd25zdHJlYW0gPSBkZWNyZWFzaW5nIGh5ZHJvc2VxXG5cbiAgLy8gb3JpZW50IGVhY2ggc2VnbWVudCBzbyBpdCBmbG93cyBzdGFydC0+ZW5kLCBjaGFpbmluZyBlbmRzIHRvIHN0YXJ0c1xuICBsZXQgcHJldkVuZCA9IG51bGw7XG4gIGZvciAoY29uc3QgcyBvZiBzZWdzKSB7XG4gICAgbGV0IGMgPSBzLmNvb3JkcztcbiAgICBpZiAocHJldkVuZCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZFN0YXJ0ID0gaGF2ZXJzaW5lTShwcmV2RW5kWzFdLCBwcmV2RW5kWzBdLCBjWzBdWzFdLCBjWzBdWzBdKTtcbiAgICAgIGNvbnN0IGRFbmQgPSBoYXZlcnNpbmVNKHByZXZFbmRbMV0sIHByZXZFbmRbMF0sIGNbYy5sZW5ndGggLSAxXVsxXSwgY1tjLmxlbmd0aCAtIDFdWzBdKTtcbiAgICAgIGlmIChkRW5kIDwgZFN0YXJ0KSBjID0gYy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcy5jb29yZHMgPSBjO1xuICAgIHByZXZFbmQgPSBjW2MubGVuZ3RoIC0gMV07XG4gIH1cblxuICAvLyB0cmltIHRoZSBmaXJzdCBzZWdtZW50IHRvIHN0YXJ0IGF0IHRoZSB2ZXJ0ZXggbmVhcmVzdCB0aGUgc3BpbGwgcG9pbnRcbiAgaWYgKHNlZ3MubGVuZ3RoKSB7XG4gICAgY29uc3QgYzAgPSBzZWdzWzBdLmNvb3JkcztcbiAgICBsZXQgbWluSSA9IDAsIG1pbkQgPSBJbmZpbml0eTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGMwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShsYXQsIGxvbiwgYzBbaV1bMV0sIGMwW2ldWzBdKTtcbiAgICAgIGlmIChkIDwgbWluRCkgeyBtaW5EID0gZDsgbWluSSA9IGk7IH1cbiAgICB9XG4gICAgY29uc3QgdHJpbW1lZCA9IGMwLnNsaWNlKG1pbkkpO1xuICAgIHNlZ3NbMF0uY29vcmRzID0gdHJpbW1lZC5sZW5ndGggPyB0cmltbWVkIDogW2MwW2MwLmxlbmd0aCAtIDFdXTtcbiAgfVxuXG4gIC8vIGZsYXR0ZW4gdG8gYXR0cmlidXRlZCBwb2ludHMsIGRvd25zYW1wbGUgdG8gcmVzb2x1dGlvbk1cbiAgbGV0IHB0cyA9IFtdO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2Vncykge1xuICAgIGxldCBzbG9wZSA9IHMuc2xvcGU7XG4gICAgaWYgKHNsb3BlID09PSBudWxsIHx8IHNsb3BlID09PSB1bmRlZmluZWQgfHwgc2xvcGUgPCAwKSBzbG9wZSA9IDAuMDAxOyAvLyAtOTk5OCA9IG1pc3NpbmdcbiAgICBmb3IgKGNvbnN0IHAgb2Ygcy5jb29yZHMpIHtcbiAgICAgIHB0cy5wdXNoKHtcbiAgICAgICAgbG9uOiBwWzBdLCBsYXQ6IHBbMV0sXG4gICAgICAgIGRyYWluYWdlX2FyZWFfa20yOiBzLnRvdGRhc3FrbSB8fCAwLFxuICAgICAgICBzbG9wZSxcbiAgICAgICAgZnR5cGU6IHMuZnR5cGUsIHdiYXJlYXR5cGU6IHMud2JhcmVhdHlwZSxcbiAgICAgICAgY29taWQ6IHMuY29taWQsXG4gICAgICAgIGduaXNfbmFtZTogcy5nbmlzX25hbWUsXG4gICAgICAgIHFlX21hOiBzLnFlX21hLCBxZV9tb250aGx5OiBzLnFlX21vbnRobHksXG4gICAgICAgIGRpdmVyZ2VuY2U6IHMuZGl2ZXJnZW5jZSB8fCAwLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChwdHMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IGtlZXAgPSBbcHRzWzBdXTtcbiAgICBsZXQgY3VtID0gMC4wO1xuICAgIGxldCBsYXN0ID0gcHRzWzBdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwID0gcHRzW2ldO1xuICAgICAgY3VtICs9IGhhdmVyc2luZU0obGFzdC5sYXQsIGxhc3QubG9uLCBwLmxhdCwgcC5sb24pO1xuICAgICAgbGFzdCA9IHA7XG4gICAgICBpZiAoY3VtID49IHJlc29sdXRpb25NKSB7IGtlZXAucHVzaChwKTsgY3VtID0gMC4wOyB9XG4gICAgfVxuICAgIHB0cyA9IGtlZXA7XG4gIH1cbiAgbG9nKGAgIHRyYWNlOiAke3NlZ3MubGVuZ3RofSBzZWdtZW50cyAtPiAke3B0cy5sZW5ndGh9IHBvaW50cyAoJHtzZWdzLmxlbmd0aCA/IHNlZ3NbMF0uZ25pc19uYW1lIDogXCI/XCJ9IC4uLilgKTtcbiAgcmV0dXJuIFtwdHMsIHNlZ3MubGVuZ3RoID8gc2Vnc1swXS5nbmlzX25hbWUgOiBudWxsXTtcbn1cblxuLyoqIENsYW1wZWQgbGluZWFyIGludGVycG9sYXRpb24gKHNjaXB5IGludGVycDFkIHdpdGggY2xhbXBlZCBmaWxsX3ZhbHVlKS4gKi9cbmZ1bmN0aW9uIGludGVycENsYW1wZWQoeHMsIHlzKSB7XG4gIHJldHVybiAoeCkgPT4ge1xuICAgIGlmICh4IDw9IHhzWzBdKSByZXR1cm4geXNbMF07XG4gICAgaWYgKHggPj0geHNbeHMubGVuZ3RoIC0gMV0pIHJldHVybiB5c1t5cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgaSA9IDE7XG4gICAgd2hpbGUgKHhzW2ldIDwgeCkgaSsrO1xuICAgIGNvbnN0IHQgPSAoeCAtIHhzW2kgLSAxXSkgLyAoeHNbaV0gLSB4c1tpIC0gMV0pO1xuICAgIHJldHVybiB5c1tpIC0gMV0gKyB0ICogKHlzW2ldIC0geXNbaSAtIDFdKTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYWluIG1vZGVsXG4vL1xuLy8gU3BsaXQgaW50byB0d28gc3RhZ2VzIHNvIHRoZSBleHBlbnNpdmUgcGFydCBpcyBjYWNoZWFibGU6XG4vLyAgIGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcpICDigJQgQUxMIG5ldHdvcmsgSS9POiB0cmFjZSBnZW9tZXRyeSwgVkFBcyxcbi8vICAgICB3aWR0aCBzYW1wbGluZywgZ2F1Z2VzICsgZmxvd3MsIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMuIFNhZmV0eSBmYWN0b3IsXG4vLyAgICAgbWF4IGhvdXJzIGV0Yy4gZG8gTk9UIGFmZmVjdCB0aGlzIHN0YWdlLlxuLy8gICBjb21wdXRlVHJhY2UoZGF0YSwgY29uZmlnKSAgICAgICAg4oCUIHB1cmUgbWF0aDogUSBpbnRlcnAsIE1hbm5pbmcgZGVwdGgsXG4vLyAgICAgdmVsb2NpdHkgeCBzYWZldHksIGltcG91bmRtZW50LCB0cmF2ZWwgdGltZSwgaG91cmx5IG1hcmtlcnMsIHNpdGUgRVRBcy5cbi8vICAgICBEZXRlcm1pbmlzdGljIGFuZCByZS1ydW5uYWJsZSBvbiB0aGUgc2FtZSBkYXRhIChmaWVsZHMgYXJlIG92ZXJ3cml0dGVuLFxuLy8gICAgIHJvd3MgYXJlIG5ldmVyIHN0cnVjdHVyYWxseSBtdXRhdGVkKS5cbi8vIHJ1blRyYWNlKCkgY29tcG9zZXMgdGhlIHR3byDigJQgaWRlbnRpY2FsIGJlaGF2aW9yIHRvIHRoZSBvcmlnaW5hbC5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcbiAgY29uc3QgbG9nID0gY2ZnLnZlcmJvc2UgPyAoLi4uYSkgPT4gY29uc29sZS5sb2coLi4uYSkgOiAoKSA9PiB7fTtcblxuICBsb2coYGZldGNoVHJhY2VEYXRhKCR7bGF0LnRvRml4ZWQoNCl9LCAke2xvbi50b0ZpeGVkKDQpfSkgIGFzT2Y9JHtjZmcuYXNPZiB8fCBcImxpdmVcIn1gKTtcblxuICAvLyAxLiB0cmFjZSBnZW9tZXRyeSAob25lIE5MREkgY2FsbCkgKyBWQUEgYmF0Y2ggam9pblxuICBjb25zdCBbY29taWQsIHNuYXBOYW1lLCBzbmFwRF0gPSBhd2FpdCBzbmFwQ29taWQobGF0LCBsb24sIGNmZy5taW5TdHJlYW1PcmRlcik7XG4gIGxvZyhgICBDT01JRCAke2NvbWlkfWAgKyAoc25hcE5hbWUgPyBgICgke3NuYXBOYW1lfSwgc25hcHBlZCAkeyhzbmFwRCAvIDEwMDApLnRvRml4ZWQoMil9IGttKWAgOiBcIlwiKSk7XG4gIGNvbnN0IGdlb21zID0gYXdhaXQgbmxkaURtRmxvd2xpbmVzKGNvbWlkLCBjZmcubWF4RGlzdGFuY2VLbSk7XG4gIGxvZyhgICBOTERJIERNIGZsb3dsaW5lczogJHtnZW9tcy5zaXplfWApO1xuICBjb25zdCB2YWEgPSBhd2FpdCB2YWFCYXRjaChbLi4uZ2VvbXMua2V5cygpXSk7XG4gIGNvbnN0IFtwdHMsIHJpdmVyTmFtZV0gPSBhc3NlbWJsZVRyYWNlKGxhdCwgbG9uLCBnZW9tcywgdmFhLCBjZmcucmVzb2x1dGlvbk0sIGxvZyk7XG4gIGlmIChwdHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwidHJhY2UgdG9vIHNob3J0XCIpO1xuXG4gIC8vIHBlci1wb2ludCBhcnJheXMgKG1pcnJvcnMgdGhlIERhdGFGcmFtZSlcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGg7XG4gIGNvbnN0IHJvd3MgPSBwdHMubWFwKChwKSA9PiAoeyAuLi5wIH0pKTtcbiAgcm93c1swXS5kaXN0YW5jZSA9IDAuMDtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICByb3dzW2ldLmRpc3RhbmNlID0gaGF2ZXJzaW5lTShyb3dzW2kgLSAxXS5sYXQsIHJvd3NbaSAtIDFdLmxvbiwgcm93c1tpXS5sYXQsIHJvd3NbaV0ubG9uKTtcbiAgfVxuICBsZXQgY3VtID0gMC4wO1xuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgeyBjdW0gKz0gci5kaXN0YW5jZTsgci5jdW1fZGlzdCA9IGN1bTsgfVxuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgci5kcmFpbmFnZV9hcmVhX3NxbWkgPSByLmRyYWluYWdlX2FyZWFfa20yICogMC4zODYxMDI7XG5cbiAgLy8gMi4gd2lkdGhzOiBmb3JtdWxhIGJhc2VsaW5lLCBvcHRpb25hbCBvdmVycmlkZSBwcm92aWRlciwgMnggY2FwLCBiYWNrd2FyZCBzbW9vdGhpbmdcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICByLmZvcm11bGFfd2lkdGggPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHIuZHJhaW5hZ2VfYXJlYV9zcW1pKVswXTtcbiAgICByLndpZHRoX20gPSAwLjA7XG4gIH1cbiAgLy8gYnJhaWRlZC1yZWFjaCBmbGFnOiBhbnkgTkhEUGx1cyBkaXZlcmdlbmNlIHdpdGhpbiB+MSBrbSAoMTAgcm93cykg4oCUIEdMT1cgd2lkdGhzXG4gIC8vIHRoZXJlIG1lYXN1cmUgdG90YWwgd2V0dGVkIHdpZHRoIGFjcm9zcyBiYXJzLCBpbmZsYXRpbmcgQSBhbmQga2lsbGluZyB2ZWxvY2l0eVxuICB7XG4gICAgY29uc3QgVyA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBsZXQgYnJhaWRlZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgayA9IE1hdGgubWF4KDAsIGkgLSBXKTsgayA8PSBNYXRoLm1pbihuIC0gMSwgaSArIFcpOyBrKyspIHtcbiAgICAgICAgaWYgKHJvd3Nba10uZGl2ZXJnZW5jZSA+IDApIHsgYnJhaWRlZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgICByb3dzW2ldLmJyYWlkZWQgPSBicmFpZGVkO1xuICAgIH1cbiAgICBjb25zdCBuYiA9IHJvd3MuZmlsdGVyKChyKSA9PiByLmJyYWlkZWQpLmxlbmd0aDtcbiAgICBpZiAobmIpIGxvZyhgICBicmFpZGVkIGZsYWc6ICR7bmJ9LyR7bn0gdHJhY2UgcG9pbnRzIG5lYXIgY2hhbm5lbCBkaXZlcmdlbmNlcyAoR0xPVyBvdmVycmlkZSBkaXNhYmxlZCB0aGVyZSlgKTtcbiAgfVxuXG4gIGlmIChjZmcud2lkdGhQcm92aWRlcikge1xuICAgIC8vIEhSIE5IRFBsdXNJRCAhPSBNUiBjb21pZCDigJQgc2FtcGxlIHNwYXRpYWxseSwgaW4gd2luZG93czsgbmV2ZXIgbGV0IHRoZVxuICAgIC8vIG92ZXJyaWRlIGtpbGwgdGhlIHJ1biAoZGVncmFkZSB0byBmb3JtdWxhIHdpZHRocykuXG4gICAgbGV0IG1pZHMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgU1RFUCA9IGNmZy53aWR0aFdpbmRvd1BvaW50cztcbiAgICAgIGNvbnN0IHBhZCA9IDAuMDM7XG4gICAgICBmb3IgKGxldCBpMCA9IDA7IGkwIDwgbjsgaTAgKz0gU1RFUCkge1xuICAgICAgICBjb25zdCB3aW4gPSByb3dzLnNsaWNlKGkwLCBpMCArIFNURVApO1xuICAgICAgICBjb25zdCBlbnYgPSB7XG4gICAgICAgICAgeG1pbjogTWF0aC5taW4oLi4ud2luLm1hcCgocikgPT4gci5sb24pKSAtIHBhZCxcbiAgICAgICAgICB5bWluOiBNYXRoLm1pbiguLi53aW4ubWFwKChyKSA9PiByLmxhdCkpIC0gcGFkLFxuICAgICAgICAgIHhtYXg6IE1hdGgubWF4KC4uLndpbi5tYXAoKHIpID0+IHIubG9uKSkgKyBwYWQsXG4gICAgICAgICAgeW1heDogTWF0aC5tYXgoLi4ud2luLm1hcCgocikgPT4gci5sYXQpKSArIHBhZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmVhdHMgPSBhd2FpdCBjZmcud2lkdGhQcm92aWRlcihlbnYpOyAvLyBbe2xhdCwgbG9uLCB3aWR0aH1dXG4gICAgICAgIG1pZHMucHVzaCguLi5mZWF0cyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nKGAgIFdJRFRIIE9WRVJSSURFIEZBSUxFRCAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgODApfSkgLSBmYWxsaW5nIGJhY2sgdG8gZm9ybXVsYSB3aWR0aHNgKTtcbiAgICAgIG1pZHMgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1pZHMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgICAgICBpZiAoci5icmFpZGVkKSB7IHIud2lkdGhfbSA9IDAuMDsgY29udGludWU7IH0gLy8gZm9ybXVsYSB3aWR0aCBvbiBicmFpZGVkIHJlYWNoZXNcbiAgICAgICAgbGV0IGJlc3REID0gSW5maW5pdHksIGJlc3RXID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBtIG9mIG1pZHMpIHtcbiAgICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShyLmxhdCwgci5sb24sIG0ubGF0LCBtLmxvbik7XG4gICAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3RXID0gbS53aWR0aCB8fCAwOyB9XG4gICAgICAgIH1cbiAgICAgICAgci53aWR0aF9tID0gYmVzdEQgPD0gY2ZnLndpZHRoU2FtcGxlUmFkaXVzTSA/IGJlc3RXIDogMC4wO1xuICAgICAgfVxuICAgICAgY29uc3QgbWF0Y2hlZCA9IHJvd3MuZmlsdGVyKChyKSA9PiByLndpZHRoX20gPiAwKS5sZW5ndGg7XG4gICAgICBsb2coYCAgR0xPVyBzcGF0aWFsIHNhbXBsZTogJHttaWRzLmxlbmd0aH0gSFIgc2VnbWVudHMsIHdpZHRocyBtYXRjaGVkIGF0ICR7bWF0Y2hlZH0vJHtufSB0cmFjZSBwb2ludHNgKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICByLndpZHRoX2ZpbmFsX3JhdyA9XG4gICAgICByLndpZHRoX20gPiAwICYmIHIud2lkdGhfbSA8PSByLmZvcm11bGFfd2lkdGggKiAyLjAgPyByLndpZHRoX20gOiByLmZvcm11bGFfd2lkdGg7XG4gIH1cbiAgLy8gcGFuZGFzIHJvbGxpbmcod2luZG93PTUxLCBtaW5fcGVyaW9kcz0xKS5tZWFuKCkg4oCUIHRyYWlsaW5nIHdpbmRvd1xuICB7XG4gICAgY29uc3QgVyA9IDUxO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzdW0gKz0gcm93c1tpXS53aWR0aF9maW5hbF9yYXc7XG4gICAgICBpZiAoaSA+PSBXKSBzdW0gLT0gcm93c1tpIC0gV10ud2lkdGhfZmluYWxfcmF3O1xuICAgICAgcm93c1tpXS53aWR0aF9maW5hbCA9IHN1bSAvIE1hdGgubWluKGkgKyAxLCBXKTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBkaXNjaGFyZ2UgaW5wdXRzOiBOTERJIGRvd25zdHJlYW0gZ2F1Z2VzIC0+IE5XSVMgUSAoK0RBKSwgbG9jYXRlZCBvbiB0cmFjZVxuICBjb25zdCBnYXVnZXMgPSBhd2FpdCBubGRpR2F1Z2VzKGNvbWlkLCBjZmcubWF4RGlzdGFuY2VLbSwgXCJETVwiKTtcbiAgLy8gdXBzdHJlYW0tYW5jaG9yIGNhbmRpZGF0ZXM6IG5lYXJlc3QgVU0gZ2F1Z2VzIChmaXhlcyB0aGUgZGlzY29udGludWl0eSB3aGVuXG4gIC8vIHRoZSBjbGljayBpcyBqdXN0IGJlbG93IGEgZ2F1Z2UgYW5kIERNIG5hdmlnYXRpb24gbm8gbG9uZ2VyIHNlZXMgaXQpXG4gIGxldCB1cENhbmRzID0gW107XG4gIGlmIChjZmcudXBzdHJlYW1HYXVnZUttID4gMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkbUlkcyA9IG5ldyBTZXQoZ2F1Z2VzLm1hcCgoZykgPT4gZy5zdGF0aW9uX2lkKSk7XG4gICAgICB1cENhbmRzID0gKGF3YWl0IG5sZGlHYXVnZXMoY29taWQsIGNmZy51cHN0cmVhbUdhdWdlS20sIFwiVU1cIikpXG4gICAgICAgIC5maWx0ZXIoKHUpID0+ICFkbUlkcy5oYXModS5zdGF0aW9uX2lkKSlcbiAgICAgICAgLm1hcCgodSkgPT4gKHsgLi4udSwgdXBzdHJlYW1fbTogaGF2ZXJzaW5lTShsYXQsIGxvbiwgdS5sYXQsIHUubG9uKSB9KSlcbiAgICAgICAgLmZpbHRlcigodSkgPT4gdS51cHN0cmVhbV9tIDw9IGNmZy51cHN0cmVhbUdhdWdlS20gKiAxMDAwKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS51cHN0cmVhbV9tIC0gYi51cHN0cmVhbV9tKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2coYCAgVU0gZ2F1Z2UgbG9va3VwIGZhaWxlZCAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgODApfSkg4oCUIG5vIHVwc3RyZWFtIGFuY2hvcmApO1xuICAgIH1cbiAgfVxuICBjb25zdCBhbGxJZHMgPSBbLi4ubmV3IFNldChbLi4uZ2F1Z2VzLCAuLi51cENhbmRzXS5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkpXTtcbiAgY29uc3QgZ2luZm8gPSBhd2FpdCBnYXVnZUluZm8oYWxsSWRzLCBjZmcuYXNPZik7XG4gIGNvbnN0IGdkID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnYXVnZXMpIHtcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KGcuc3RhdGlvbl9pZCkgfHwge307XG4gICAgaWYgKGkuZGlzY2hhcmdlID09PSB1bmRlZmluZWQgfHwgIWkuZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XG4gICAgbGV0IGJlc3REID0gSW5maW5pdHksIGlkeCA9IDA7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKHJvd3Nba10ubGF0LCByb3dzW2tdLmxvbiwgZy5sYXQsIGcubG9uKTtcbiAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpZHggPSBrOyB9XG4gICAgfVxuICAgIGlmIChiZXN0RCA+IDUwMDApIGNvbnRpbnVlOyAvLyBnYXVnZSBub3Qgb24gb3VyIHRyYWNlIGNvcnJpZG9yXG4gICAgY29uc3QgW3csIGRlcF0gPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKGkuZHJhaW5hZ2VfYXJlYSk7XG4gICAgZ2QucHVzaCh7XG4gICAgICAuLi5nLCBkaXNjaGFyZ2U6IGkuZGlzY2hhcmdlLCBkcmFpbmFnZV9hcmVhOiBpLmRyYWluYWdlX2FyZWEsXG4gICAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiByb3dzW2lkeF0uY3VtX2Rpc3QsXG4gICAgfSk7XG4gIH1cbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcbiAgY29uc3Qgc3BpbGxEYVNxbWkgPSByb3dzWzBdLmRyYWluYWdlX2FyZWFfc3FtaTtcbiAgZm9yIChjb25zdCB1IG9mIHVwQ2FuZHMpIHtcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KHUuc3RhdGlvbl9pZCkgfHwge307XG4gICAgaWYgKGkuZGlzY2hhcmdlID09PSB1bmRlZmluZWQgfHwgIWkuZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XG4gICAgaWYgKG1lcmdlVXBzdHJlYW1BbmNob3IoZ2QsIHsgLi4udSwgZGlzY2hhcmdlOiBpLmRpc2NoYXJnZSwgZHJhaW5hZ2VfYXJlYTogaS5kcmFpbmFnZV9hcmVhIH0sIHNwaWxsRGFTcW1pKSkge1xuICAgICAgbG9nKFxuICAgICAgICBgICB1cHN0cmVhbSBhbmNob3IgJHt1LnN0YXRpb25faWR9ICR7dS5uYW1lLnNsaWNlKDAsIDMwKX06ICR7TWF0aC5yb3VuZChpLmRpc2NoYXJnZSl9IGNmcyBgICtcbiAgICAgICAgYEAgJHsodS51cHN0cmVhbV9tIC8gMTAwMCkudG9GaXhlZCgxKX0ga20gdXBzdHJlYW0gLT4gJHtNYXRoLnJvdW5kKGkuZGlzY2hhcmdlICogKHNwaWxsRGFTcW1pIC8gaS5kcmFpbmFnZV9hcmVhKSl9IGNmcyBgICtcbiAgICAgICAgYGF0IHNwaWxsIHBvaW50IChEQSB4JHsoc3BpbGxEYVNxbWkgLyBpLmRyYWluYWdlX2FyZWEpLnRvRml4ZWQoMil9KWAsXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGFuIG9uLXRyYWNlIGdhdWdlIG5lYXIgdGhlIHN0YXJ0IGFscmVhZHkgYW5jaG9ycyB0aGUgYm91bmRhcnkg4oCUIHN0b3AgbG9va2luZ1xuICAgIGlmIChnZC5zb21lKChnKSA9PiAhZy51cHN0cmVhbV9hbmNob3IgJiYgZy50cmFjZV9kaXN0IDw9IDUwMCkpIGJyZWFrO1xuICB9XG4gIGZvciAoY29uc3QgZyBvZiBnZCkge1xuICAgIGxvZyhgICBnYXVnZSAke2cuc3RhdGlvbl9pZH0gJHtnLm5hbWUuc2xpY2UoMCwgMzgpLnBhZEVuZCgzOCl9ICR7U3RyaW5nKE1hdGgucm91bmQoZy5kaXNjaGFyZ2UpKS5wYWRTdGFydCg4KX0gY2ZzIEAgJHsoZy50cmFjZV9kaXN0IC8gMTAwMCkudG9GaXhlZCgxKS5wYWRTdGFydCg2KX0ga20ke2cudXBzdHJlYW1fYW5jaG9yID8gXCIgKHVwc3RyZWFtIGFuY2hvcilcIiA6IFwiXCJ9YCk7XG4gIH1cblxuICAvLyA0LiBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzIChmZXRjaGVkIGluIHBhcmFsbGVsOyBqb2luZWQgaW4gY29tcHV0ZVRyYWNlKVxuICBjb25zdCBmZXRjaFNldHMgPSBhc3luYyAocHJvdmlkZXJzKSA9PiBQcm9taXNlLmFsbChcbiAgICAocHJvdmlkZXJzIHx8IFtdKS5tYXAoYXN5bmMgKHApID0+ICh7XG4gICAgICBidWZmZXJfbTogcC5idWZmZXJfbSA/PyA0MDAsXG4gICAgICBmZWF0czogYXdhaXQgcC5mZXRjaCgpLCAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXG4gICAgfSkpLFxuICApO1xuICBjb25zdCBbc2l0ZVNldHMsIHJlY2VwdG9yU2V0c10gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBbZmV0Y2hTZXRzKGNmZy5zaXRlUHJvdmlkZXJzKSwgZmV0Y2hTZXRzKGNmZy5yZWNlcHRvclByb3ZpZGVycyldLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbGF0LCBsb24sIGNvbWlkLCBzbmFwTmFtZSwgc25hcERpc3RNOiBzbmFwRCwgcml2ZXJOYW1lLFxuICAgIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzLFxuICAgIGFzT2Y6IGNmZy5hc09mIHx8IFwibGl2ZVwiLFxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEpvYnNvbiAoVVNHUyBXUklSIDk2LTQwMTMpXG4vL1xuLy8gRHllLXRyYWNlciByZWdyZXNzaW9ucyBmcm9tIH45ODAgc3VicmVhY2hlcyAvIH45MCBVUyByaXZlcnMuIFVuaXRzOiBEYSBtXjIsXG4vLyBRICYgUWEgbV4zL3MsIFMgZGltZW5zaW9ubGVzcywgdmVsb2NpdGllcyBtL3MuIEVxIDEyLzEzICh3aXRoIHNsb3BlKSBvclxuLy8gMTQvMTUgKHdpdGhvdXQpLiBMZWFkaW5nIGVkZ2UgVGwgPSAwLjg5MCB4IFRwIChlcSAxOCkuIFBhc3NhZ2U6IHVuaXQtcGVha1xuLy8gY29uY2VudHJhdGlvbiBDdXAgPSA4NTcgeCBUcF4tMC43NjAgeCBRJ2FeLTAuMDc5IChUcCBob3VycywgZXEgNyksIGFuZFxuLy8gVGQxMCA9IDJlNiAvIEN1cCBzZWNvbmRzIChlcSAxOSkgPSBsZWFkaW5nIGVkZ2UgLT4gMTAlLW9mLXBlYWsgdHJhaWxpbmcuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uVmVsb2NpdGllcyhkYU0yLCBRbTNzLCBRYU0zcywgc2xvcGUpIHtcbiAgaWYgKCEoZGFNMiA+IDApIHx8ICEoUW0zcyA+IDApIHx8ICEoUWFNM3MgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGcgPSA5Ljg7XG4gIGNvbnN0IERwID0gKE1hdGgucG93KGRhTTIsIDEuMjUpICogTWF0aC5zcXJ0KGcpKSAvIFFhTTNzOyAvLyBEJ2EsIGVxIDEwXG4gIGNvbnN0IFFwID0gUW0zcyAvIFFhTTNzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUSdhLCBlcSAxMVxuICBjb25zdCBxT3ZlckRhID0gUW0zcyAvIGRhTTI7XG4gIGxldCB2cCwgdm1wO1xuICBpZiAoc2xvcGUgPiAwLjAwMDAxKSB7XG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjkxOSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY5KSAqIE1hdGgucG93KHNsb3BlLCAwLjE1OSkgKiBxT3ZlckRhO1xuICAgIHZwID0gMC4wOTQgKyAwLjAxNDMgKiBYOyAgIC8vIGVxIDEyXG4gICAgdm1wID0gMC4yNSArIDAuMDIgKiBYOyAgICAgLy8gZXEgMTMgKDk5JSBlbnZlbG9wZSDigJQgZmFzdGVzdCBwcm9iYWJsZSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBYID0gTWF0aC5wb3coRHAsIDAuODIxKSAqIE1hdGgucG93KFFwLCAtMC40NjUpICogcU92ZXJEYTtcbiAgICB2cCA9IDAuMDIwICsgMC4wNTEgKiBYOyAgICAvLyBlcSAxNFxuICAgIHZtcCA9IDAuMiArIDAuMDkzICogWDsgICAgIC8vIGVxIDE1XG4gIH1cbiAgcmV0dXJuIHsgdnAsIHZtcCwgcVByaW1lOiBRcCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uUGFzc2FnZUhvdXJzKHRwSG91cnMsIHFQcmltZSkge1xuICAvLyBlcSA3ICsgZXEgMTk6IGR1cmF0aW9uIGZyb20gbGVhZGluZyBlZGdlIHRvIDEwJS1vZi1wZWFrIHRyYWlsaW5nIGVkZ2VcbiAgaWYgKCEodHBIb3VycyA+IDApIHx8ICEocVByaW1lID4gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBjdXAgPSA4NTcgKiBNYXRoLnBvdyh0cEhvdXJzLCAtMC43NjApICogTWF0aC5wb3cocVByaW1lLCAtMC4wNzkpOyAvLyBzXi0xXG4gIHJldHVybiAyZTYgLyBjdXAgLyAzNjAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xuICBjb25zdCB7IGNvbWlkLCByaXZlck5hbWUsIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzIH0gPSBkYXRhO1xuICBjb25zdCBuID0gcm93cy5sZW5ndGg7XG5cbiAgLy8gNS4gZGlzY2hhcmdlOiBpbnRlcnBvbGF0ZSBhbG9uZyB0cmFjZVxuICAvLyBtb250aCBmb3IgRVJPTSBsb29rdXBzOiBhc19vZiBtb250aCBpZiBwaW5uZWQsIGVsc2UgY3VycmVudFxuICBjb25zdCBlcm9tTW9udGggPSBkYXRhLmFzT2YgJiYgZGF0YS5hc09mICE9PSBcImxpdmVcIlxuICAgID8gcGFyc2VJbnQoZGF0YS5hc09mLnNsaWNlKDUsIDcpLCAxMClcbiAgICA6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG5cbiAgbGV0IHFNZXRob2QsIHFDb25maWRlbmNlO1xuICBjb25zdCBhbmNob3JlZCA9IGdkLnNvbWUoKGcpID0+IGcudXBzdHJlYW1fYW5jaG9yKTtcbiAgaWYgKGdkLmxlbmd0aCA+PSAyKSB7XG4gICAgY29uc3QgZlEgPSBpbnRlcnBDbGFtcGVkKGdkLm1hcCgoZykgPT4gZy50cmFjZV9kaXN0KSwgZ2QubWFwKChnKSA9PiBnLmRpc2NoYXJnZSkpO1xuICAgIGZvciAoY29uc3QgciBvZiByb3dzKSByLlFfY2ZzID0gTWF0aC5tYXgoZlEoci5jdW1fZGlzdCksIDEuMCk7XG4gICAgcU1ldGhvZCA9IGFuY2hvcmVkID8gXCJnYXVnZS1pbnRlcnBvbGF0aW9uK3Vwc3RyZWFtLWFuY2hvclwiIDogXCJnYXVnZS1pbnRlcnBvbGF0aW9uXCI7XG4gICAgcUNvbmZpZGVuY2UgPSBcIkhJR0hcIjtcbiAgfSBlbHNlIGlmIChnZC5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBnID0gZ2RbMF07XG4gICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChnLmRpc2NoYXJnZSAqIChyLmRyYWluYWdlX2FyZWFfc3FtaSAvIGcuZHJhaW5hZ2VfYXJlYSksIDEuMCk7XG4gICAgfVxuICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwidXBzdHJlYW0tYW5jaG9yLURBLXJhdGlvXCIgOiBcInNpbmdsZS1nYXVnZS1EQS1yYXRpb1wiO1xuICAgIHFDb25maWRlbmNlID0gXCJNRURJVU1cIjtcbiAgICBsb2coXCIgIDEgZ2F1Z2U6IHNjYWxpbmcgYnkgZHJhaW5hZ2UtYXJlYSByYXRpb1wiKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFUk9NIHBlci1yZWFjaCBtb250aGx5IG1vZGVsZWQgZmxvdyAoZ2F1Z2UtYWRqdXN0ZWQ7IGNhcHR1cmVzIHNlYXNvbmFsXG4gICAgLy8geWllbGQg4oCUIE1vbnRhbmEgSnVuZSB2cyBTZXB0ZW1iZXIgZGlmZmVycyB+NXgpIGJlZm9yZSB0aGUgZmxhdCBjb25zdGFudFxuICAgIGNvbnN0IGVyb21PayA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnFlX21vbnRobHkgJiYgci5xZV9tb250aGx5W2Vyb21Nb250aF0gPiAwKS5sZW5ndGg7XG4gICAgaWYgKGVyb21PayA+PSByb3dzLmxlbmd0aCAqIDAuOCkge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgY29uc3QgcWUgPSByLnFlX21vbnRobHkgPyByLnFlX21vbnRobHlbZXJvbU1vbnRoXSA6IG51bGw7XG4gICAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChxZSA+IDAgPyBxZSA6IHIuZHJhaW5hZ2VfYXJlYV9zcW1pICogMi4wLCAxLjApO1xuICAgICAgfVxuICAgICAgcU1ldGhvZCA9IGBlcm9tLW1vbnRobHkgKG1vbnRoICR7ZXJvbU1vbnRofSlgOyBxQ29uZmlkZW5jZSA9IFwiTU9ERVJBVEUg4oCUIG1vZGVsZWQgZmxvdywgbm8gbGl2ZSBnYXVnZVwiO1xuICAgICAgbG9nKGAgIE5PIGdhdWdlczogRVJPTSBtb250aGx5IG1vZGVsZWQgZmxvdyAobW9udGggJHtlcm9tTW9udGh9LCAke2Vyb21Pa30vJHtyb3dzLmxlbmd0aH0gcmVhY2hlcylgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuUV9jZnMgPSBNYXRoLm1heChyLmRyYWluYWdlX2FyZWFfc3FtaSAqIDIuMCwgMS4wKTtcbiAgICAgIHFNZXRob2QgPSBcImRyYWluYWdlLWFyZWEtY29uc3RhbnRcIjsgcUNvbmZpZGVuY2UgPSBcIkxPVyBDT05GSURFTkNFIOKAlCBOTyBHQVVHRVwiO1xuICAgICAgbG9nKFwiICBOTyBnYXVnZXMsIG5vIEVST006IFEgfiAyIGNmcyBwZXIgc3EgbWkgZHJhaW5hZ2Ug4oCUIExPVyBDT05GSURFTkNFXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIDQuIE1hbm5pbmcncyBkZXB0aCBwZXIgcG9pbnQgKGZvcm11bGEgZmFsbGJhY2spLCBWID0gUS9BLCBzYWZldHkgZmFjdG9yXG4gIGNvbnN0IENGU19UT19NM1MgPSBNYXRoLnBvdygzLjI4MSwgMyk7XG4gIGxldCBvayA9IDA7XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci5RX20zcyA9IHIuUV9jZnMgLyBDRlNfVE9fTTNTO1xuICAgIGNvbnN0IGRlcHRoRm9ybXVsYSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzFdO1xuICAgIGNvbnN0IGRtID0gY2FsY3VsYXRlRGVwdGhNYW5uaW5nKHIuUV9tM3MsIHIud2lkdGhfZmluYWwsIHIuc2xvcGUsIGNmZy5tYW5uaW5nTik7XG4gICAgaWYgKGRtICE9PSBudWxsICYmIGRtID4gMC4xICYmIGRtIDwgMjApIHsgci5kZXB0aCA9IGRtOyBvaysrOyB9XG4gICAgZWxzZSByLmRlcHRoID0gZGVwdGhGb3JtdWxhO1xuICAgIHIuYXJlYSA9IHIud2lkdGhfZmluYWwgKiByLmRlcHRoO1xuICAgIHIudmVsb2NpdHkgPSAoci5RX20zcyAvIHIuYXJlYSkgKiBjZmcuc2FmZXR5RmFjdG9yO1xuICB9XG4gIGxvZyhgICBNYW5uaW5nJ3MgZGVwdGg6ICR7b2t9LyR7bn0gcG9pbnRzICgke01hdGgucm91bmQoKDEwMCAqIG9rKSAvIG4pfSUpYCk7XG5cbiAgLy8gNS4gaW1wb3VuZG1lbnQgcnVsZTogZmxvd2xpbmUgcGFzc2VzIHRocm91Z2ggYSBMYWtlUG9uZC9SZXNlcnZvaXIgd2F0ZXJib2R5XG4gIC8vIChtaW51cyBrbm93biBSRU1PVkVEIGRhbXMgd2hvc2Ugd2F0ZXJib2R5IGZsYWdzIGxpbmdlciBpbiBOSERQbHVzKVxuICBjb25zdCBleGNsdWRlZCA9IG5ldyBTZXQoWy4uLlJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTLCAuLi4oY2ZnLmltcG91bmRFeGNsdWRlQ29taWRzIHx8IFtdKV0pO1xuICBsZXQgc3RvcElkeCA9IG51bGwsIHJ1bk0gPSAwLjA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltcCA9IChyb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiTGFrZVBvbmRcIiB8fCByb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiUmVzZXJ2b2lyXCIpICYmXG4gICAgICAhZXhjbHVkZWQuaGFzKHJvd3NbaV0uY29taWQpO1xuICAgIHJvd3NbaV0uaW1wb3VuZGVkID0gaW1wO1xuICAgIGlmIChpbXApIHtcbiAgICAgIHJ1bk0gKz0gcm93c1tpXS5kaXN0YW5jZTtcbiAgICAgIGlmIChydW5NID49IGNmZy5pbXBvdW5kU3RvcEttICogMTAwMCkgeyBzdG9wSWR4ID0gaTsgYnJlYWs7IH1cbiAgICB9IGVsc2UgcnVuTSA9IDAuMDtcbiAgfVxuICBsZXQgaW1wb3VuZE5vdGUgPSBudWxsO1xuICBsZXQgZGYgPSByb3dzO1xuICBpZiAoc3RvcElkeCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5hbWUgPSByb3dzW3N0b3BJZHhdLmduaXNfbmFtZSB8fCBcImltcG91bmRtZW50XCI7XG4gICAgaW1wb3VuZE5vdGUgPVxuICAgICAgYFRyYWNlIHJlYWNoZXMgYW4gaW1wb3VuZGVkIHJlYWNoICgke25hbWV9KSBhdCBgICtcbiAgICAgIGAkeyhyb3dzW3N0b3BJZHhdLmN1bV9kaXN0IC8gMTAwMCkudG9GaXhlZCgxKX0ga20g4oCUIHRyYXZlbCB0aW1lIGJleW9uZCBgICtcbiAgICAgIGB0aGlzIHBvaW50IGlzIE5PVCBtb2RlbGVkIChyZXNlcnZvaXIgdHJhbnNpdCkuYDtcbiAgICBkZiA9IHJvd3Muc2xpY2UoMCwgc3RvcElkeCArIDEpO1xuICAgIGxvZyhgICBJTVBPVU5ETUVOVCBTVE9QOiAke2ltcG91bmROb3RlfWApO1xuICB9XG5cbiAgLy8gNi4gdHJhdmVsIHRpbWUsIGN1dG9mZiwgaG91cmx5IG1hcmtlcnNcbiAgY29uc3Qgam9ic29uID0gY2ZnLnRpbWluZ01vZGVsID09PSBcImpvYnNvblwiO1xuICBjb25zdCBDRlMgPSBNYXRoLnBvdygzLjI4MSwgMyk7XG4gIGxldCBjdW1UID0gMC4wLCB0UGVhayA9IDAuMCwgdEZhc3QgPSAwLjAsIGpvYnNvbkRlZ3JhZGVkID0gMDtcbiAgZm9yIChjb25zdCByIG9mIGRmKSB7XG4gICAgci5zZWdfdGltZSA9IHIuZGlzdGFuY2UgLyByLnZlbG9jaXR5O1xuICAgIGN1bVQgKz0gci5zZWdfdGltZTtcbiAgICByLmN1bV90aW1lID0gY3VtVCAvIDM2MDA7IC8vIGh5ZHJhdWxpYyAoeCBzYWZldHkpIOKAlCBhbHdheXMgY29tcHV0ZWQ7IGZlZWRzIGxlZ2FjeSBtb2RlXG4gICAgaWYgKGpvYnNvbikge1xuICAgICAgY29uc3QgZGFNMiA9IChyLmRyYWluYWdlX2FyZWFfa20yIHx8IDApICogMWU2O1xuICAgICAgY29uc3QgUWFNM3MgPSByLnFlX21hID4gMCA/IHIucWVfbWEgLyBDRlMgOiBudWxsO1xuICAgICAgY29uc3QganYgPSBRYU0zcyA/IGpvYnNvblZlbG9jaXRpZXMoZGFNMiwgci5RX20zcywgUWFNM3MsIHIuc2xvcGUpIDogbnVsbDtcbiAgICAgIGxldCB2cCwgdm1wLCBxUHJpbWU7XG4gICAgICBpZiAoanYpIHsgKHsgdnAsIHZtcCwgcVByaW1lIH0gPSBqdik7IH1cbiAgICAgIGVsc2UgeyB2cCA9IHIudmVsb2NpdHkgLyBjZmcuc2FmZXR5RmFjdG9yOyB2bXAgPSB2cCAqIDI7IHFQcmltZSA9IDE7IGpvYnNvbkRlZ3JhZGVkKys7IH1cbiAgICAgIHRQZWFrICs9IHIuZGlzdGFuY2UgLyB2cDtcbiAgICAgIHRGYXN0ICs9IHIuZGlzdGFuY2UgLyB2bXA7XG4gICAgICByLnRfcGVhayA9IHRQZWFrIC8gMzYwMDtcbiAgICAgIHIudF9sZWFkID0gMC44OTAgKiByLnRfcGVhazsgICAgICAgICAgICAgIC8vIGVxIDE4IOKAlCBtb3N0IHByb2JhYmxlIGZpcnN0IGFycml2YWxcbiAgICAgIHIudF9sZWFkX21pbiA9IDAuODkwICogKHRGYXN0IC8gMzYwMCk7ICAgIC8vIDk5JSBlbnZlbG9wZSDigJQgZWFybGllc3QgY3JlZGlibGUgYXJyaXZhbFxuICAgICAgY29uc3QgdGQxMCA9IGpvYnNvblBhc3NhZ2VIb3VycyhyLnRfcGVhaywgcVByaW1lKTtcbiAgICAgIHIudF9jbGVhciA9IHRkMTAgIT09IG51bGwgPyByLnRfbGVhZCArIHRkMTAgOiBudWxsOyAvLyAxMCUtb2YtcGVhayB0cmFpbGluZyBlZGdlXG4gICAgfVxuICB9XG4gIGlmIChqb2Jzb24gJiYgam9ic29uRGVncmFkZWQpIGxvZyhgICBKb2Jzb246ICR7am9ic29uRGVncmFkZWR9IHBvaW50cyBsYWNrZWQgRVJPTSBRYSAoaHlkcmF1bGljIGZhbGxiYWNrKWApO1xuICBjb25zdCB0aW1lT2YgPSAocikgPT4gKGpvYnNvbiA/IHIudF9sZWFkIDogci5jdW1fdGltZSk7XG4gIGRmID0gZGYuZmlsdGVyKChyKSA9PiB0aW1lT2YocikgPCBjZmcubWF4SG91cnMpO1xuICBjb25zdCBtYXhDdW1UaW1lID0gZGYubGVuZ3RoID8gdGltZU9mKGRmW2RmLmxlbmd0aCAtIDFdKSA6IDA7XG4gIGNvbnN0IG5lYXJlc3RSb3cgPSAoZmllbGQsIHRhcmdldCkgPT4ge1xuICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGRmLmxlbmd0aDsgaysrKSB7XG4gICAgICBjb25zdCBkID0gTWF0aC5hYnMoZGZba11bZmllbGRdIC0gdGFyZ2V0KTtcbiAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfSAvLyBmaXJzdCBvY2N1cnJlbmNlIG9mIG1pbiAocGFuZGFzIGlkeG1pbilcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH07XG4gIGNvbnN0IGhvdXJseSA9IFtdO1xuICBmb3IgKGxldCBob3VyID0gMTsgaG91ciA8PSBjZmcubWF4SG91cnM7IGhvdXIrKykge1xuICAgIGlmIChtYXhDdW1UaW1lIDwgaG91ciAmJiBNYXRoLmFicyhtYXhDdW1UaW1lIC0gaG91cikgPiAwLjUpIGJyZWFrO1xuICAgIGNvbnN0IGkgPSBuZWFyZXN0Um93KGpvYnNvbiA/IFwidF9sZWFkXCIgOiBcImN1bV90aW1lXCIsIGhvdXIpO1xuICAgIGNvbnN0IGggPSB7XG4gICAgICBob3VyLFxuICAgICAgbGF0OiBkZltpXS5sYXQsIGxvbjogZGZbaV0ubG9uLFxuICAgICAgY3VtX2Rpc3Rfa206IGRmW2ldLmN1bV9kaXN0IC8gMTAwMCxcbiAgICAgIHZlbG9jaXR5X21waDogZGZbaV0udmVsb2NpdHkgKiAyLjIzNjk0LFxuICAgIH07XG4gICAgaWYgKGpvYnNvbikge1xuICAgICAgLy8gYmFuZCBhdCB0aGlzIGhvdXI6IGJ1bGsgKHBlYWspIHBvc2l0aW9uIC4uIGZhcnRoZXN0IGNyZWRpYmxlICg5OSUgbGVhZGluZylcbiAgICAgIGNvbnN0IGlQZWFrID0gbmVhcmVzdFJvdyhcInRfcGVha1wiLCBob3VyKTtcbiAgICAgIGNvbnN0IGlGYXIgPSBuZWFyZXN0Um93KFwidF9sZWFkX21pblwiLCBob3VyKTtcbiAgICAgIGguYmFuZCA9IHtcbiAgICAgICAgcGVhazogeyBpOiBpUGVhaywgbGF0OiBkZltpUGVha10ubGF0LCBsb246IGRmW2lQZWFrXS5sb24sIGN1bV9kaXN0X2ttOiBkZltpUGVha10uY3VtX2Rpc3QgLyAxMDAwIH0sXG4gICAgICAgIGZhc3Rlc3Q6IHsgaTogaUZhciwgbGF0OiBkZltpRmFyXS5sYXQsIGxvbjogZGZbaUZhcl0ubG9uLCBjdW1fZGlzdF9rbTogZGZbaUZhcl0uY3VtX2Rpc3QgLyAxMDAwIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBob3VybHkucHVzaChoKTtcbiAgfVxuXG4gIC8vIDcuIHNpdGUgRVRBcyArIHJlY2VwdG9yIHdhcm5pbmdzIChuZWFyZXN0IHRyYWNlIHBvaW50IHdpdGhpbiBidWZmZXIpO1xuICAvLyBmZWF0dXJlcyB3ZXJlIHByZS1mZXRjaGVkIGludG8gZGF0YS5zaXRlU2V0cy9yZWNlcHRvclNldHNcbiAgZnVuY3Rpb24gcHJveGltaXR5KHNldCkge1xuICAgIGNvbnN0IGZlYXRzID0gc2V0LmZlYXRzOyAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXG4gICAgY29uc3QgYnVmID0gc2V0LmJ1ZmZlcl9tID8/IDQwMDtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHMpIHtcbiAgICAgIGlmIChmLmxhdCA9PT0gdW5kZWZpbmVkIHx8IGYubG9uID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgICAgbGV0IGJlc3REID0gSW5maW5pdHksIGkgPSAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShkZltrXS5sYXQsIGRmW2tdLmxvbiwgZi5sYXQsIGYubG9uKTtcbiAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGkgPSBrOyB9XG4gICAgICB9XG4gICAgICBpZiAoYmVzdEQgPD0gYnVmKSB7XG4gICAgICAgIGNvbnN0IHsgbGF0OiBfYSwgbG9uOiBfYiwgLi4ucmVzdCB9ID0gZjtcbiAgICAgICAgY29uc3Qgcm93ID0ge1xuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgZXRhX2hyOiBNYXRoLnJvdW5kKHRpbWVPZihkZltpXSkgKiAxMDApIC8gMTAwLFxuICAgICAgICAgIGRpc3Rfa206IE1hdGgucm91bmQoKGRmW2ldLmN1bV9kaXN0IC8gMTAwMCkgKiAxMCkgLyAxMCxcbiAgICAgICAgICBvZmZzZXRfbTogTWF0aC5yb3VuZChiZXN0RCksXG4gICAgICAgICAgLy8gbW9kZWxlZCBoeWRyYXVsaWNzIGF0IHRoZSBzaXRlJ3MgdHJhY2UgcG9pbnQg4oCUIGZlZWRzIGJvb20gc2l6aW5nXG4gICAgICAgICAgcml2ZXJfd2lkdGhfbTogTWF0aC5yb3VuZChkZltpXS53aWR0aF9maW5hbCAqIDEwKSAvIDEwLFxuICAgICAgICAgIHZlbG9jaXR5X21zOiBNYXRoLnJvdW5kKGRmW2ldLnZlbG9jaXR5ICogMTAwMCkgLyAxMDAwLFxuICAgICAgICAgIGRlcHRoX206IE1hdGgucm91bmQoZGZbaV0uZGVwdGggKiAxMDApIC8gMTAwLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoam9ic29uKSB7XG4gICAgICAgICAgcm93LmV0YV9lYXJseV9ociA9IE1hdGgucm91bmQoZGZbaV0udF9sZWFkX21pbiAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgcm93LmV0YV9wZWFrX2hyID0gTWF0aC5yb3VuZChkZltpXS50X3BlYWsgKiAxMDApIC8gMTAwO1xuICAgICAgICAgIHJvdy5jbGVhcl9ociA9IGRmW2ldLnRfY2xlYXIgIT09IG51bGwgPyBNYXRoLnJvdW5kKGRmW2ldLnRfY2xlYXIgKiAxMDApIC8gMTAwIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBvdXQucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cbiAgICBvdXQuc29ydCgoYSwgYikgPT4gYS5ldGFfaHIgLSBiLmV0YV9ocik7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGNvbnN0IHNpdGVzID0gW107XG4gIGZvciAoY29uc3QgcyBvZiBzaXRlU2V0cyB8fCBbXSkgc2l0ZXMucHVzaCguLi5wcm94aW1pdHkocykpO1xuICBzaXRlcy5zb3J0KChhLCBiKSA9PiBhLmV0YV9ociAtIGIuZXRhX2hyKTtcbiAgY29uc3Qgd2FybmluZ3MgPSBpbXBvdW5kTm90ZSA/IFtpbXBvdW5kTm90ZV0gOiBbXTtcbiAgaWYgKHFDb25maWRlbmNlICE9PSBcIkhJR0hcIikgd2FybmluZ3MudW5zaGlmdChgRmxvdyBlc3RpbWF0ZTogJHtxQ29uZmlkZW5jZX0gKCR7cU1ldGhvZH0pYCk7XG4gIGZvciAoY29uc3QgcyBvZiByZWNlcHRvclNldHMgfHwgW10pIHtcbiAgICBmb3IgKGNvbnN0IHIgb2YgcHJveGltaXR5KHMpKSB7XG4gICAgICB3YXJuaW5ncy5wdXNoKFxuICAgICAgICBgUmVjZXB0b3IgJyR7ci5uYW1lfScgfiR7ci5vZmZzZXRfbX0gbSBvZmYgdHJhY2UgYXQgaHIgJHtyLmV0YV9ocn0gKCR7ci5kaXN0X2ttfSBrbSBkb3duc3RyZWFtKWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpc3RhbmNlS20gPSBkZi5sZW5ndGggPyBkZltkZi5sZW5ndGggLSAxXS5jdW1fZGlzdCAvIDEwMDAgOiAwO1xuICBjb25zdCBhdmdWZWwgPSBkZi5sZW5ndGggPyBkZi5yZWR1Y2UoKHMsIHIpID0+IHMgKyByLnZlbG9jaXR5LCAwKSAvIGRmLmxlbmd0aCA6IDA7XG4gIGNvbnN0IGdsb3dNYXRjaGVkID0gcm93cy5maWx0ZXIoKHIpID0+IHIud2lkdGhfbSA+IDApLmxlbmd0aDtcbiAgY29uc3QgYnJhaWRlZE4gPSByb3dzLmZpbHRlcigocikgPT4gci5icmFpZGVkKS5sZW5ndGg7XG5cbiAgLy8gcHJvdmVuYW5jZSDigJQgZW5vdWdoIHRvIHJlY29uc3RydWN0IGFueSBvdXRwdXQgaW4gYW4gYWZ0ZXItYWN0aW9uIHJldmlld1xuICBjb25zdCBydW5SZWNvcmQgPSB7XG4gICAgZW5naW5lX3ZlcnNpb246IEVOR0lORV9WRVJTSU9OLFxuICAgIGdlbmVyYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIGRhdGFfZmV0Y2hlZF9hdDogZGF0YS5mZXRjaGVkQXQgfHwgbnVsbCxcbiAgICBzcGlsbF9wb2ludDogeyBsYXQ6IGRhdGEubGF0LCBsb246IGRhdGEubG9uIH0sXG4gICAgc25hcDogeyBjb21pZCwgcml2ZXI6IHJpdmVyTmFtZSwgc25hcHBlZF9mcm9tX206IGRhdGEuc25hcERpc3RNICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKGRhdGEuc25hcERpc3RNIHx8IDApIDogbnVsbCB9LFxuICAgIHRpbWluZ19tb2RlbDogY2ZnLnRpbWluZ01vZGVsLFxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXG4gICAgbWF4X2hvdXJzOiBjZmcubWF4SG91cnMsXG4gICAgYXNfb2Y6IGRhdGEuYXNPZiB8fCBcImxpdmVcIixcbiAgICBxX21ldGhvZDogcU1ldGhvZCxcbiAgICBxX2NvbmZpZGVuY2U6IHFDb25maWRlbmNlLFxuICAgIGdhdWdlczogZ2QubWFwKChnKSA9PiAoe1xuICAgICAgc3RhdGlvbl9pZDogZy5zdGF0aW9uX2lkLCBuYW1lOiBnLm5hbWUsIGRpc2NoYXJnZV9jZnM6IGcuZGlzY2hhcmdlLCB0cmFjZV9rbTogTWF0aC5yb3VuZChnLnRyYWNlX2Rpc3QgLyAxMDApIC8gMTAsXG4gICAgICAuLi4oZy51cHN0cmVhbV9hbmNob3IgPyB7XG4gICAgICAgIHVwc3RyZWFtX2FuY2hvcjogdHJ1ZSxcbiAgICAgICAgYW5jaG9yX2dhdWdlX3FfY2ZzOiBnLmFuY2hvcl9nYXVnZV9xX2NmcyxcbiAgICAgICAgYW5jaG9yX2dhdWdlX2RhX3NxbWk6IGcuYW5jaG9yX2dhdWdlX2RhX3NxbWksXG4gICAgICAgIGFuY2hvcl91cHN0cmVhbV9rbTogZy5hbmNob3JfdXBzdHJlYW1fbSAhPT0gbnVsbCA/IE1hdGgucm91bmQoZy5hbmNob3JfdXBzdHJlYW1fbSAvIDEwMCkgLyAxMCA6IG51bGwsXG4gICAgICB9IDoge30pLFxuICAgIH0pKSxcbiAgICBlcm9tX21vbnRoOiBxTWV0aG9kLnN0YXJ0c1dpdGgoXCJlcm9tXCIpID8gZXJvbU1vbnRoIDogbnVsbCxcbiAgICB3aWR0aF9zb3VyY2U6IHsgZ2xvd19tYXRjaGVkX3BvaW50czogZ2xvd01hdGNoZWQsIHRvdGFsX3BvaW50czogcm93cy5sZW5ndGgsIGJyYWlkZWRfcG9pbnRzX2Zvcm11bGFfd2lkdGg6IGJyYWlkZWROIH0sXG4gICAgam9ic29uX2RlZ3JhZGVkX3BvaW50czogam9ic29uID8gam9ic29uRGVncmFkZWQgOiBudWxsLFxuICAgIGltcG91bmRfZXhjbHVzaW9uc19hcHBsaWVkOiBbLi4uZXhjbHVkZWRdLmZpbHRlcigoYykgPT4gcm93cy5zb21lKChyKSA9PiByLmNvbWlkID09PSBjKSksXG4gICAgaW1wb3VuZF9zdG9wX2ttOiBzdG9wSWR4ICE9PSBudWxsID8gTWF0aC5yb3VuZChyb3dzW3N0b3BJZHhdLmN1bV9kaXN0IC8gMTAwKSAvIDEwIDogbnVsbCxcbiAgfTtcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgcml2ZXJfbmFtZTogcml2ZXJOYW1lLFxuICAgIGNvbWlkLFxuICAgIGFzX29mOiBkYXRhLmFzT2YgfHwgXCJsaXZlXCIsXG4gICAgc2FmZXR5X2ZhY3RvcjogY2ZnLnNhZmV0eUZhY3RvcixcbiAgICB0aW1pbmdfbW9kZWw6IGNmZy50aW1pbmdNb2RlbCxcbiAgICBxX21ldGhvZDogcU1ldGhvZCxcbiAgICBxX2NvbmZpZGVuY2U6IHFDb25maWRlbmNlLFxuICAgIGdhdWdlc191c2VkOiBnZC5tYXAoKGcpID0+ICh7XG4gICAgICBzdGF0aW9uX2lkOiBnLnN0YXRpb25faWQsIG5hbWU6IGcubmFtZSxcbiAgICAgIGRpc2NoYXJnZTogZy5kaXNjaGFyZ2UsIHRyYWNlX2Rpc3Q6IGcudHJhY2VfZGlzdCxcbiAgICB9KSksXG4gICAgZGlzdGFuY2Vfa21fMjRoOiBkaXN0YW5jZUttLFxuICAgIGF2Z192ZWxvY2l0eV9tcGg6IGF2Z1ZlbCAqIDIuMjM2OTQsXG4gICAgaW1wb3VuZF9zdG9wOiBpbXBvdW5kTm90ZSxcbiAgICBob3VybHksXG4gICAgc2l0ZXMsXG4gICAgd2FybmluZ3MsXG4gICAgcnVuUmVjb3JkLFxuICAgIHRyYWNlOiBkZiwgLy8gZnVsbCByb3cgYXJyYXkgZm9yIGluc3BlY3Rpb24vZ2VvanNvbiBleHBvcnRcbiAgfTtcbiAgbG9nKFxuICAgIGAgIFJFU1VMVDogJHtkaXN0YW5jZUttLnRvRml4ZWQoMSl9IGttIGluIDw9ICR7Y2ZnLm1heEhvdXJzfSBoLCBgICtcbiAgICBgYXZnICR7cmVzdWx0LmF2Z192ZWxvY2l0eV9tcGgudG9GaXhlZCgyKX0gbXBoLCAke3NpdGVzLmxlbmd0aH0gc2l0ZXMsICR7d2FybmluZ3MubGVuZ3RofSB3YXJuaW5nc2AsXG4gICk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5UcmFjZShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcpO1xuICByZXR1cm4gY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZyk7XG59XG5cbi8qKlxuICogQm9vbSBzaXppbmcgZnJvbSBtb2RlbGVkIGh5ZHJhdWxpY3MgKHBsYW5uaW5nLWxldmVsLCBmb3IgR1JQcyB0aGF0IGNhcnJ5IG5vXG4gKiBlcXVpcG1lbnQgcXVhbnRpdGllcykuIFN0YW5kYXJkIGNvbnRhaW5tZW50IHJ1bGU6IG9pbCBlbnRyYWlucyB1bmRlciBhIGJvb21cbiAqIHdoZW4gdGhlIGZsb3cgY29tcG9uZW50IG5vcm1hbCB0byBpdCBleGNlZWRzIH4wLjM1IG0vcyAoMC43IGt0KSwgc28gaW5cbiAqIGZhc3RlciB3YXRlciB0aGUgYm9vbSBpcyBhbmdsZWQgd2l0aCBzaW4odGhldGEpID0gZW50cmFpbm1lbnQvdmVsb2NpdHkgYW5kXG4gKiB0aGUgcmVxdWlyZWQgbGVuZ3RoIGdyb3dzIHRvIHdpZHRoL3Npbih0aGV0YSkuIEFuY2hvciBzZXRzIGZyb20gbGVuZ3RoLlxuICogQW5nbGVzIGJlbG93IH4xNSBkZWcgKHYgPiB+MS4zNSBtL3MpIGFyZSBmbGFnZ2VkOiB1c2UgY2FzY2FkZWQgc2hvcnRlciBib29tcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlQm9vbU5lZWRzKHdpZHRoTSwgdmVsb2NpdHlNcywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGVudHJhaW4gPSBvcHRzLmVudHJhaW5tZW50TXMgPz8gMC4zNTtcbiAgY29uc3QgcmVzZXJ2ZVBjdCA9IG9wdHMucmVzZXJ2ZVBjdCA/PyAyMDtcbiAgY29uc3QgYW5jaG9yU3BhY2luZ0Z0ID0gb3B0cy5hbmNob3JTcGFjaW5nRnQgPz8gMTAwO1xuICBpZiAoISh3aWR0aE0gPiAwKSB8fCAhKHZlbG9jaXR5TXMgPj0gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBzaW5UaGV0YSA9IHZlbG9jaXR5TXMgPiBlbnRyYWluID8gZW50cmFpbiAvIHZlbG9jaXR5TXMgOiAxO1xuICBjb25zdCBhbmdsZURlZyA9IChNYXRoLmFzaW4oc2luVGhldGEpICogMTgwKSAvIE1hdGguUEk7XG4gIGNvbnN0IGxlbmd0aEZ0ID0gKHdpZHRoTSAvIHNpblRoZXRhKSAqIDMuMjgwODQgKiAoMSArIHJlc2VydmVQY3QgLyAxMDApO1xuICBjb25zdCBib29tRnQgPSBNYXRoLmNlaWwobGVuZ3RoRnQgLyA1MCkgKiA1MDsgLy8gcm91bmQgdXAgdG8gNTAtZnQgc3RpY2tzXG4gIGNvbnN0IGFuY2hvcnMgPSBNYXRoLm1heCgyLCBNYXRoLmNlaWwoYm9vbUZ0IC8gYW5jaG9yU3BhY2luZ0Z0KSArIDEpO1xuICByZXR1cm4ge1xuICAgIGJvb21fZnQ6IGJvb21GdCxcbiAgICBib29tX2FuZ2xlX2RlZzogTWF0aC5yb3VuZChhbmdsZURlZyksXG4gICAgYW5jaG9ycyxcbiAgICBkZWZsZWN0aW9uOiB2ZWxvY2l0eU1zID4gZW50cmFpbixcbiAgICBjYXNjYWRlX2FkdmlzZWQ6IGFuZ2xlRGVnIDwgMTUsIC8vIHRvbyBmYXN0IGZvciBhIHNpbmdsZSBzd2VlcCDigJQgY2FzY2FkZSBib29tc1xuICB9O1xufVxuXG4vKiogVHJhY2UgbGluZSArIGhvdXJseSBtYXJrZXJzIGFzIGEgR2VvSlNPTiBGZWF0dXJlQ29sbGVjdGlvbiAod2lkZ2V0IHByZXZpZXcpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvR2VvSnNvbihyZXN1bHQpIHtcbiAgY29uc3QgZGYgPSByZXN1bHQudHJhY2U7XG4gIGNvbnN0IGZjID0ge1xuICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICBmZWF0dXJlczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGtpbmQ6IFwidHJhY2VcIiwgcml2ZXI6IHJlc3VsdC5yaXZlcl9uYW1lLFxuICAgICAgICAgIGRpc3RhbmNlX2ttXzI0aDogcmVzdWx0LmRpc3RhbmNlX2ttXzI0aCxcbiAgICAgICAgfSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcbiAgICAgICAgICBjb29yZGluYXRlczogZGYubWFwKChyKSA9PiBbXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHIubG9uICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChyLmxhdCAqIDFlNikgLyAxZTYsXG4gICAgICAgICAgXSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGZvciAoY29uc3QgaCBvZiByZXN1bHQuaG91cmx5KSB7XG4gICAgZmMuZmVhdHVyZXMucHVzaCh7XG4gICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgIHByb3BlcnRpZXM6IHsga2luZDogXCJob3VyXCIsIGhvdXI6IGguaG91ciwgY3VtX2Rpc3Rfa206IGguY3VtX2Rpc3Rfa20sIHZlbG9jaXR5X21waDogaC52ZWxvY2l0eV9tcGggfSxcbiAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IFtNYXRoLnJvdW5kKGgubG9uICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChoLmxhdCAqIDFlNikgLyAxZTZdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9pbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2x5bGluZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqXG4gKiBTcGlsbCBUcmFqZWN0b3J5IHdpZGdldCDigJQgcnVudGltZS5cbiAqXG4gKiBDbGljayBcIlNldCBzcGlsbCBwb2ludFwiIOKGkiBjbGljayB0aGUgbWFwIOKGkiB0aGUgZ29sZGVuLXRlc3RlZCB0cmFjZSBlbmdpbmVcbiAqICh0cmFjZS1lbmdpbmUudHMsIHBhcml0eS12ZXJpZmllZCB2cyB0aGUgUHl0aG9uIG9yYWNsZSkgZHJhd3MgYW4gZXBoZW1lcmFsXG4gKiB0aW1lLWNvbG9yZWQgcGx1bWUgb24gYSBjbGllbnQtc2lkZSBHcmFwaGljc0xheWVyIHdpdGggaG91cmx5IG1hcmtlcnMsXG4gKiBwbHVzIGFuIEVUQS1zb3J0ZWQgc3RyYXRlZ3ktc2l0ZSBsaXN0IGFuZCByZWNlcHRvciB3YXJuaW5ncy5cbiAqIE5vdGhpbmcgaXMgcGVyc2lzdGVkIOKAlCBDbGVhciAob3Igd2lkZ2V0IHVubW91bnQpIHJlbW92ZXMgZXZlcnl0aGluZy5cbiAqL1xuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcidcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJ1xuaW1wb3J0IFBvbHlsaW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWxpbmUnXG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCdcbmltcG9ydCB7IGdlb2Rlc2ljTGVuZ3RoIH0gZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcsIFNpdGVMYXllckNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IGZldGNoVHJhY2VEYXRhLCBjb21wdXRlVHJhY2UsIGVzdGltYXRlQm9vbU5lZWRzIH0gZnJvbSAnLi4vdHJhY2UtZW5naW5lJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSA9IFJlYWN0XG5cbi8vIEVUQSBjb2xvciBiYW5kczogPDMgaHIgLyAz4oCTMTIgaHIgLyAxMuKAkzI0IGhyXG5jb25zdCBCQU5EX0NPTE9SUzogQXJyYXk8W251bWJlciwgc3RyaW5nXT4gPSBbXG4gIFszLCAnI2Q3MTkxYyddLFxuICBbMTIsICcjZmRhZTYxJ10sXG4gIFsyNCwgJyMyYzdiYjYnXSxcbl1cbmNvbnN0IGJhbmRDb2xvciA9IChocjogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgZm9yIChjb25zdCBbbGltLCBjXSBvZiBCQU5EX0NPTE9SUykgaWYgKGhyIDwgbGltKSByZXR1cm4gY1xuICByZXR1cm4gJyMyYzdiYjYnXG59XG5jb25zdCBoZXhUb1JnYiA9IChoZXg6IHN0cmluZyk6IG51bWJlcltdID0+IFtcbiAgcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksIHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KSxcbl1cblxuaW50ZXJmYWNlIFNpdGVSb3cge1xuICBuYW1lOiBzdHJpbmdcbiAgZXRhX2hyOiBudW1iZXJcbiAgZGlzdF9rbTogbnVtYmVyXG4gIG9mZnNldF9tOiBudW1iZXJcbiAgcml2ZXJfd2lkdGhfbT86IG51bWJlclxuICB2ZWxvY2l0eV9tcz86IG51bWJlclxuICBib29tPzogeyBib29tX2Z0OiBudW1iZXIsIGFuY2hvcnM6IG51bWJlciwgYm9vbV9hbmdsZV9kZWc/OiBudW1iZXIsIGNhc2NhZGVfYWR2aXNlZD86IGJvb2xlYW4sIHNvdXJjZTogJ2RyYXduJyB8ICdlc3QnIH1cbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5jb25zdCBub3JtR3VpZCA9ICh2OiBhbnkpOiBzdHJpbmcgPT4gU3RyaW5nKHYgfHwgJycpLnJlcGxhY2UoL1t7fV0vZywgJycpLnRvTG93ZXJDYXNlKClcblxuLyoqIFN1bSBnZW9kZXNpYyBmZWV0IG9mIGRyYXduIGJvb20gbGluZXMgcGVyIHNpdGUga2V5IChlLmcuIFNuYWtlIEJvb21fTGluZXMpLiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEcmF3bkJvb20oY2ZnOiB7IHVybDogc3RyaW5nLCBzaXRlS2V5RmllbGQ6IHN0cmluZywgd2hlcmU/OiBzdHJpbmcgfSk6IFByb21pc2U8TWFwPHN0cmluZywgbnVtYmVyPj4ge1xuICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IGNmZy51cmwgfSlcbiAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgcS53aGVyZSA9IGNmZy53aGVyZSB8fCAnMT0xJ1xuICBxLm91dEZpZWxkcyA9IFtjZmcuc2l0ZUtleUZpZWxkXVxuICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXG4gIGNvbnN0IG91dCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgZm9yIChjb25zdCBmIG9mIGZzLmZlYXR1cmVzKSB7XG4gICAgY29uc3Qga2V5ID0gbm9ybUd1aWQoZi5hdHRyaWJ1dGVzW2NmZy5zaXRlS2V5RmllbGRdKVxuICAgIGlmICgha2V5IHx8ICFmLmdlb21ldHJ5KSBjb250aW51ZVxuICAgIGNvbnN0IGZ0ID0gZ2VvZGVzaWNMZW5ndGgoZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUsICdmZWV0JylcbiAgICBpZiAoZnQgPiAwKSBvdXQuc2V0KGtleSwgKG91dC5nZXQoa2V5KSB8fCAwKSArIGZ0KVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3QgW2ptdiwgc2V0Sm12XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKVxuICBjb25zdCBbYXJtaW5nLCBzZXRBcm1pbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtydW5uaW5nLCBzZXRSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ0NsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIsIHRoZW4gY2xpY2sgdGhlIHJpdmVyLicpXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG4gIGNvbnN0IFtzYWZldHksIHNldFNhZmV0eV0gPSB1c2VTdGF0ZTxudW1iZXI+KHByb3BzLmNvbmZpZy5zYWZldHlGYWN0b3IgPz8gMS41KVxuICBjb25zdCBbZGlhZywgc2V0RGlhZ10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgbGF5ZXJSZWYgPSB1c2VSZWY8X19lc3JpLkdyYXBoaWNzTGF5ZXI+KG51bGwpXG4gIGNvbnN0IGNsaWNrSGFuZGxlUmVmID0gdXNlUmVmPF9fZXNyaS5IYW5kbGU+KG51bGwpXG4gIC8vIGNhY2hlZCBoeWRyb2xvZ3kgZm9yIHRoZSBjdXJyZW50IHNwaWxsIHBvaW50IOKAlCBzYWZldHktZmFjdG9yIGNoYW5nZXNcbiAgLy8gcmVjb21wdXRlIGZyb20gdGhpcyBpbnN0YW50bHkgaW5zdGVhZCBvZiByZS1mZXRjaGluZyBOTERJL05XSVNcbiAgY29uc3QgY2FjaGVSZWYgPSB1c2VSZWY8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIGRhdGE6IGFueSwgZHJhd246IE1hcDxzdHJpbmcsIG51bWJlcj4sIGZldGNoTm90ZXM6IHN0cmluZ1tdIH0gfCBudWxsPihudWxsKVxuXG4gIC8vIG9uZSBncmFwaGljcyBsYXllciBwZXIgd2lkZ2V0IGxpZmV0aW1lOyByZW1vdmVkIG9uIHVubW91bnQgKGVwaGVtZXJhbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQpIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKClcbiAgICAgIGlmIChsYXllclJlZi5jdXJyZW50ICYmIGptdikgam12LnZpZXcubWFwLnJlbW92ZShsYXllclJlZi5jdXJyZW50KVxuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtqbXZdKVxuXG4gIGNvbnN0IGVuc3VyZUxheWVyID0gKHZpZXc6IF9fZXNyaS5NYXBWaWV3KTogX19lc3JpLkdyYXBoaWNzTGF5ZXIgPT4ge1xuICAgIGlmICghbGF5ZXJSZWYuY3VycmVudCkge1xuICAgICAgbGF5ZXJSZWYuY3VycmVudCA9IG5ldyBHcmFwaGljc0xheWVyKHsgdGl0bGU6ICdTcGlsbCB0cmFqZWN0b3J5IChlcGhlbWVyYWwpJywgbGlzdE1vZGU6ICdoaWRlJyB9KVxuICAgICAgdmlldy5tYXAuYWRkKGxheWVyUmVmLmN1cnJlbnQpXG4gICAgfVxuICAgIHJldHVybiBsYXllclJlZi5jdXJyZW50XG4gIH1cblxuICAvLyAtLS0tIHByb3ZpZGVyczogd3JhcCBjb25maWd1cmVkIGxheWVycyBmb3IgdGhlIGVuZ2luZSAtLS0tXG4gIC8vIEZhaWx1cmVzIGFyZSByZXBvcnRlZCB0byB0aGUgZGlhZ25vc3RpY3MgbGlzdCBpbnN0ZWFkIG9mIGtpbGxpbmcgdGhlIHRyYWNlLlxuICBjb25zdCBtYWtlU2l0ZVByb3ZpZGVyID0gKGxjOiBTaXRlTGF5ZXJDb25maWcsIGRlZmF1bHRCdWZmZXI6IG51bWJlciwgbGFiZWw6IHN0cmluZywgbm90ZXM6IHN0cmluZ1tdKSA9PiAoe1xuICAgIGJ1ZmZlcl9tOiBsYy5idWZmZXJNID8/IGRlZmF1bHRCdWZmZXIsXG4gICAgZmV0Y2g6IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZsID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogbGMudXJsIH0pXG4gICAgICAgIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXG4gICAgICAgIHEud2hlcmUgPSBsYy53aGVyZSB8fCAnMT0xJ1xuICAgICAgICBxLm91dEZpZWxkcyA9IFtsYy5uYW1lRmllbGQsIC4uLihsYy5leHRyYUZpZWxkcyB8fCBbXSldXG4gICAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICAgIHEub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9IGFzIGFueVxuICAgICAgICBjb25zdCBmcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgY29uc3Qgcm93cyA9IGZzLmZlYXR1cmVzXG4gICAgICAgICAgLmZpbHRlcigoZikgPT4gZi5nZW9tZXRyeSAmJiBmLmdlb21ldHJ5LnR5cGUgPT09ICdwb2ludCcpXG4gICAgICAgICAgLm1hcCgoZikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50XG4gICAgICAgICAgICBjb25zdCByb3c6IGFueSA9IHsgbmFtZTogZi5hdHRyaWJ1dGVzW2xjLm5hbWVGaWVsZF0sIGxhdDogZy55LCBsb246IGcueCB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVmIG9mIGxjLmV4dHJhRmllbGRzIHx8IFtdKSByb3dbZWZdID0gZi5hdHRyaWJ1dGVzW2VmXVxuICAgICAgICAgICAgcmV0dXJuIHJvd1xuICAgICAgICAgIH0pXG4gICAgICAgIG5vdGVzLnB1c2goYCR7bGFiZWx9OiAke3Jvd3MubGVuZ3RofSBwb2ludCBmZWF0dXJlcyBsb2FkZWQgKGJ1ZmZlciAke2xjLmJ1ZmZlck0gPz8gZGVmYXVsdEJ1ZmZlcn0gbSlgKVxuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBub3Rlcy5wdXNoKGAke2xhYmVsfSBGQUlMRUQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDEwMCl9YClcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBtYWtlV2lkdGhQcm92aWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB3bCA9IHByb3BzLmNvbmZpZy53aWR0aExheWVyXG4gICAgaWYgKCF3bCB8fCAhd2wudXJsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGZsID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogd2wudXJsIH0pXG4gICAgcmV0dXJuIGFzeW5jIChlbnY6IHsgeG1pbjogbnVtYmVyLCB5bWluOiBudW1iZXIsIHhtYXg6IG51bWJlciwgeW1heDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXG4gICAgICBxLndoZXJlID0gd2wud2hlcmUgfHwgJzE9MSdcbiAgICAgIHEuZ2VvbWV0cnkgPSB7IHR5cGU6ICdleHRlbnQnLCAuLi5lbnYsIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IH0gYXMgYW55XG4gICAgICBxLnNwYXRpYWxSZWxhdGlvbnNoaXAgPSAnaW50ZXJzZWN0cydcbiAgICAgIHEub3V0RmllbGRzID0gW3dsLndpZHRoRmllbGRdXG4gICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICAgICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgICBjb25zdCBmcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgIGNvbnN0IG1pZHM6IEFycmF5PHsgbGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCB3aWR0aDogbnVtYmVyIH0+ID0gW11cbiAgICAgIGZvciAoY29uc3QgZiBvZiBmcy5mZWF0dXJlcykge1xuICAgICAgICBjb25zdCBnID0gZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmVcbiAgICAgICAgaWYgKGcgJiYgZy5wYXRocyAmJiBnLnBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHAgPSBnLnBhdGhzWzBdXG4gICAgICAgICAgY29uc3QgbSA9IHBbTWF0aC5mbG9vcihwLmxlbmd0aCAvIDIpXVxuICAgICAgICAgIG1pZHMucHVzaCh7IGxhdDogbVsxXSwgbG9uOiBtWzBdLCB3aWR0aDogZi5hdHRyaWJ1dGVzW3dsLndpZHRoRmllbGRdIHx8IDAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1pZHNcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tIGRyYXdpbmcgLS0tLVxuICBjb25zdCBkcmF3ID0gKHZpZXc6IF9fZXNyaS5NYXBWaWV3LCByZXM6IGFueSwgc3BpbGw6IHsgbGF0OiBudW1iZXIsIGxvbjogbnVtYmVyIH0pID0+IHtcbiAgICBjb25zdCBsYXllciA9IGVuc3VyZUxheWVyKHZpZXcpXG4gICAgbGF5ZXIucmVtb3ZlQWxsKClcblxuICAgIC8vIHNwaWxsIHBvaW50XG4gICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogc3BpbGwubGF0LCBsb25naXR1ZGU6IHNwaWxsLmxvbiB9KSxcbiAgICAgIHN5bWJvbDoge1xuICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsIHN0eWxlOiAneCcsIHNpemU6IDE0LFxuICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiAnIzAwMCcsIHdpZHRoOiAzIH0sXG4gICAgICB9IGFzIGFueSxcbiAgICAgIHBvcHVwVGVtcGxhdGU6IHsgdGl0bGU6ICdTcGlsbCBwb2ludCcsIGNvbnRlbnQ6IGAke3NwaWxsLmxhdC50b0ZpeGVkKDUpfSwgJHtzcGlsbC5sb24udG9GaXhlZCg1KX1gIH0gYXMgYW55LFxuICAgIH0pKVxuXG4gICAgLy8gdHJhY2UgcG9seWxpbmUsIHNwbGl0IGludG8gRVRBIGNvbG9yIGJhbmRzXG4gICAgY29uc3Qgcm93czogYW55W10gPSByZXMudHJhY2VcbiAgICBsZXQgYmFuZFN0YXJ0ID0gMFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRvbmUgPSBpID09PSByb3dzLmxlbmd0aFxuICAgICAgY29uc3QgYmFuZENoYW5nZWQgPSAhZG9uZSAmJiBiYW5kQ29sb3Iocm93c1tpXS5jdW1fdGltZSkgIT09IGJhbmRDb2xvcihyb3dzW2JhbmRTdGFydF0uY3VtX3RpbWUpXG4gICAgICBpZiAoZG9uZSB8fCBiYW5kQ2hhbmdlZCkge1xuICAgICAgICBjb25zdCBzZWcgPSByb3dzLnNsaWNlKGJhbmRTdGFydCwgTWF0aC5taW4oaSArIDEsIHJvd3MubGVuZ3RoKSlcbiAgICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvbHlsaW5lKHsgcGF0aHM6IFtzZWcubWFwKChyKSA9PiBbci5sb24sIHIubGF0XSldIGFzIGFueSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55IH0pLFxuICAgICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogYmFuZENvbG9yKHJvd3NbYmFuZFN0YXJ0XS5jdW1fdGltZSksIHdpZHRoOiA0IH0gYXMgYW55LFxuICAgICAgICB9KSlcbiAgICAgICAgYmFuZFN0YXJ0ID0gaVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEpvYnNvbiB1bmNlcnRhaW50eSBiYW5kczogdHJhbnNsdWNlbnQgdW5kZXJsYXkgZnJvbSBidWxrIChwZWFrKSBwb3NpdGlvblxuICAgIC8vIHRvIGZhcnRoZXN0IGNyZWRpYmxlICg5OSUgbGVhZGluZykgcG9zaXRpb24gYXQgZWFjaCBob3VyXG4gICAgZm9yIChjb25zdCBoIG9mIHJlcy5ob3VybHkpIHtcbiAgICAgIGlmICghaC5iYW5kKSBjb250aW51ZVxuICAgICAgY29uc3QgaTAgPSBNYXRoLm1pbihoLmJhbmQucGVhay5pLCBoLmJhbmQuZmFzdGVzdC5pKVxuICAgICAgY29uc3QgaTEgPSBNYXRoLm1heChoLmJhbmQucGVhay5pLCBoLmJhbmQuZmFzdGVzdC5pKVxuICAgICAgaWYgKGkxIDw9IGkwKSBjb250aW51ZVxuICAgICAgY29uc3Qgc2VnID0gcm93cy5zbGljZShpMCwgaTEgKyAxKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5bGluZSh7IHBhdGhzOiBbc2VnLm1hcCgocjogYW55KSA9PiBbci5sb24sIHIubGF0XSldIGFzIGFueSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55IH0pLFxuICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1saW5lJywgY29sb3I6IFsuLi5oZXhUb1JnYihiYW5kQ29sb3IoaC5ob3VyKSksIDAuMjhdLCB3aWR0aDogMTQsIGNhcDogJ3JvdW5kJyB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgIH1cbiAgICAvLyBob3VybHkgbWFya2VycyArIGxhYmVsc1xuICAgIGZvciAoY29uc3QgaCBvZiByZXMuaG91cmx5KSB7XG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGgubGF0LCBsb25naXR1ZGU6IGgubG9uIH0pLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsIHNpemU6IDcsIGNvbG9yOiBiYW5kQ29sb3IoaC5ob3VyKSxcbiAgICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiAnI2ZmZicsIHdpZHRoOiAxIH0sXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XG4gICAgICAgICAgdGl0bGU6IGBIb3VyICR7aC5ob3VyfWAsXG4gICAgICAgICAgY29udGVudDogYCR7aC5jdW1fZGlzdF9rbS50b0ZpeGVkKDEpfSBrbSBkb3duc3RyZWFtIMK3ICR7aC52ZWxvY2l0eV9tcGgudG9GaXhlZCgxKX0gbXBoYCxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICB9KSlcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogaC5sYXQsIGxvbmdpdHVkZTogaC5sb24gfSksXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICB0ZXh0OiBgJHtoLmhvdXJ9IGhyYCxcbiAgICAgICAgICBjb2xvcjogYmFuZENvbG9yKGguaG91ciksXG4gICAgICAgICAgaGFsb0NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgaGFsb1NpemU6IDEuNSxcbiAgICAgICAgICB5b2Zmc2V0OiA5LFxuICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTAsIHdlaWdodDogJ2JvbGQnLCBmYW1pbHk6ICdzYW5zLXNlcmlmJyB9LFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0gbW9kZWwgY29uZmlnICsgZXF1aXBtZW50ICsgY29tcHV0ZS9yZW5kZXIgKHB1cmUsIHJldXNhYmxlIG9uIGNhY2hlZCBkYXRhKSAtLS0tXG4gIGNvbnN0IG1vZGVsQ2ZnID0gKHNmOiBudW1iZXIpID0+ICh7XG4gICAgc2FmZXR5RmFjdG9yOiBzZixcbiAgICB0aW1pbmdNb2RlbDogcHJvcHMuY29uZmlnLnRpbWluZ01vZGVsID8/ICdoeWRyYXVsaWMnLFxuICAgIG1pblN0cmVhbU9yZGVyOiBwcm9wcy5jb25maWcubWluU3RyZWFtT3JkZXIgPz8gNCxcbiAgICBtYXhIb3VyczogcHJvcHMuY29uZmlnLm1heEhvdXJzID8/IDI0LFxuICAgIG1heERpc3RhbmNlS206IHByb3BzLmNvbmZpZy5tYXhEaXN0YW5jZUttID8/IDMwMCxcbiAgICB2ZXJib3NlOiBmYWxzZSxcbiAgfSlcblxuICBjb25zdCBhcHBseUVxdWlwbWVudCA9IChyZXM6IGFueSwgZHJhd246IE1hcDxzdHJpbmcsIG51bWJlcj4pID0+IHtcbiAgICBjb25zdCBlcSA9IHByb3BzLmNvbmZpZy5lcXVpcG1lbnRcbiAgICBpZiAoZXE/LmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm5cbiAgICBjb25zdCBydWxlcyA9IHtcbiAgICAgIGVudHJhaW5tZW50TXM6IGVxPy5lbnRyYWlubWVudE1zID8/IDAuMzUsXG4gICAgICBhbmNob3JTcGFjaW5nRnQ6IGVxPy5hbmNob3JTcGFjaW5nRnQgPz8gMTAwLFxuICAgICAgcmVzZXJ2ZVBjdDogZXE/LnJlc2VydmVQY3QgPz8gMjAsXG4gICAgfVxuICAgIGZvciAoY29uc3QgcyBvZiByZXMuc2l0ZXMpIHtcbiAgICAgIGNvbnN0IGtleSA9IG5vcm1HdWlkKHMuR2xvYmFsSUQgPz8gcy5nbG9iYWxpZCA/PyBzLkdMT0JBTElEKVxuICAgICAgY29uc3QgZHJhd25GdCA9IGtleSA/IGRyYXduLmdldChrZXkpIDogdW5kZWZpbmVkXG4gICAgICBpZiAoZHJhd25GdCkge1xuICAgICAgICBjb25zdCBib29tRnQgPSBNYXRoLmNlaWwoZHJhd25GdCAvIDUwKSAqIDUwXG4gICAgICAgIHMuYm9vbSA9IHtcbiAgICAgICAgICBib29tX2Z0OiBib29tRnQsXG4gICAgICAgICAgYW5jaG9yczogTWF0aC5tYXgoMiwgTWF0aC5jZWlsKGJvb21GdCAvIHJ1bGVzLmFuY2hvclNwYWNpbmdGdCkgKyAxKSxcbiAgICAgICAgICBzb3VyY2U6ICdkcmF3bicsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVzdCA9IGVzdGltYXRlQm9vbU5lZWRzKHMucml2ZXJfd2lkdGhfbSwgcy52ZWxvY2l0eV9tcywgcnVsZXMpXG4gICAgICAgIGlmIChlc3QpIHMuYm9vbSA9IHsgLi4uZXN0LCBzb3VyY2U6ICdlc3QnIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBjb21wdXRlQW5kUmVuZGVyID0gKHNmOiBudW1iZXIsIGZyb21DYWNoZSA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgYyA9IGNhY2hlUmVmLmN1cnJlbnRcbiAgICBpZiAoIWMgfHwgIWptdikgcmV0dXJuXG4gICAgY29uc3QgcmVzID0gY29tcHV0ZVRyYWNlKGMuZGF0YSwgbW9kZWxDZmcoc2YpKVxuICAgIGFwcGx5RXF1aXBtZW50KHJlcywgYy5kcmF3bilcbiAgICBkcmF3KGptdi52aWV3IGFzIF9fZXNyaS5NYXBWaWV3LCByZXMsIHsgbGF0OiBjLmxhdCwgbG9uOiBjLmxvbiB9KVxuICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnZpc2libGUgPSB0cnVlXG4gICAgc2V0SGlkZGVuKGZhbHNlKVxuICAgIHNldFJlc3VsdChyZXMpXG4gICAgc2V0RGlhZyhbLi4uYy5mZXRjaE5vdGVzLCBgJHtyZXMuc2l0ZXMubGVuZ3RofSBzaXRlKHMpIHdpdGhpbiBidWZmZXIgb2YgdGhlIHRyYWNlLmBdKVxuICAgIHNldFN0YXR1cyhcbiAgICAgIGAke3Jlcy5yaXZlcl9uYW1lIHx8ICdUcmFjZSd9IOKAlCAke3Jlcy5kaXN0YW5jZV9rbV8yNGgudG9GaXhlZCgxKX0ga20gaW4g4omkICR7cHJvcHMuY29uZmlnLm1heEhvdXJzID8/IDI0fSBoYCArXG4gICAgICAoZnJvbUNhY2hlID8gJyDCtyByZWNvbXB1dGVkIGluc3RhbnRseSBmcm9tIGNhY2hlZCBoeWRyb2xvZ3knIDogJycpLFxuICAgIClcbiAgfVxuXG4gIC8vIC0tLS0gcnVuIC0tLS1cbiAgY29uc3QgYXJtQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFqbXYgfHwgYXJtaW5nIHx8IHJ1bm5pbmcpIHJldHVyblxuICAgIHNldEFybWluZyh0cnVlKVxuICAgIHNldFN0YXR1cygnQ2xpY2sgdGhlIHNwaWxsIGxvY2F0aW9uIG9uIHRoZSBtYXDigKYnKVxuICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBqbXYudmlldy5vbignY2xpY2snLCBhc3luYyAoZXZ0KSA9PiB7XG4gICAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpXG4gICAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgc2V0QXJtaW5nKGZhbHNlKVxuICAgICAgY29uc3QgbXAgPSBldnQubWFwUG9pbnRcbiAgICAgIGNvbnN0IGxhdCA9IG1wLmxhdGl0dWRlLCBsb24gPSBtcC5sb25naXR1ZGVcbiAgICAgIHNldFJ1bm5pbmcodHJ1ZSlcbiAgICAgIHNldFJlc3VsdChudWxsKVxuICAgICAgc2V0RGlhZyhbXSlcbiAgICAgIHNldFN0YXR1cyhgVHJhY2luZyBmcm9tICR7bGF0LnRvRml4ZWQoNCl9LCAke2xvbi50b0ZpeGVkKDQpfeKApmApXG4gICAgICBjb25zdCBub3Rlczogc3RyaW5nW10gPSBbXVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2ZnID0gcHJvcHMuY29uZmlnXG4gICAgICAgIGNvbnN0IHNpdGVMYXllcnMgPSAoY2ZnLnNpdGVMYXllcnMgfHwgW10pIGFzIGFueVxuICAgICAgICBjb25zdCByZWNlcHRvckxheWVycyA9IChjZmcucmVjZXB0b3JMYXllcnMgfHwgW10pIGFzIGFueVxuICAgICAgICBpZiAoIXNpdGVMYXllcnMubGVuZ3RoKSBub3Rlcy5wdXNoKCdObyBzaXRlIGxheWVycyBjb25maWd1cmVkIOKAlCBhZGQgdGhlbSBpbiB0aGUgd2lkZ2V0IHNldHRpbmdzIChTaXRlIGxheWVycyBKU09OKS4nKVxuXG4gICAgICAgIC8vIGZldGNoIGV2ZXJ5dGhpbmcgb25jZSAodHJhY2UsIGZsb3dzLCB3aWR0aHMsIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwge1xuICAgICAgICAgIC4uLm1vZGVsQ2ZnKHNhZmV0eSksXG4gICAgICAgICAgd2lkdGhQcm92aWRlcjogbWFrZVdpZHRoUHJvdmlkZXIoKSxcbiAgICAgICAgICBzaXRlUHJvdmlkZXJzOiBzaXRlTGF5ZXJzLm1hcCgobGMsIGkpID0+IG1ha2VTaXRlUHJvdmlkZXIobGMsIDUwMCwgYFNpdGUgbGF5ZXIgJHtpICsgMX1gLCBub3RlcykpLFxuICAgICAgICAgIHJlY2VwdG9yUHJvdmlkZXJzOiByZWNlcHRvckxheWVycy5tYXAoKGxjLCBpKSA9PiBtYWtlU2l0ZVByb3ZpZGVyKGxjLCA4MDAsIGBSZWNlcHRvciBsYXllciAke2kgKyAxfWAsIG5vdGVzKSksXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZHJhd24gYm9vbSBsaW5lczogcGVyLXNpdGUtbGF5ZXIgYm9vbUxheWVyICgrIGxlZ2FjeSBnbG9iYWwgZXF1aXBtZW50LmJvb21MYXllcilcbiAgICAgICAgY29uc3QgZHJhd24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gICAgICAgIGNvbnN0IGVxID0gY2ZnLmVxdWlwbWVudFxuICAgICAgICBpZiAoZXE/LmVuYWJsZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3QgYm9vbUNmZ3M6IGFueVtdID0gW11cbiAgICAgICAgICBmb3IgKGNvbnN0IGxjIG9mIHNpdGVMYXllcnMpIGlmIChsYy5ib29tTGF5ZXI/LnVybCkgYm9vbUNmZ3MucHVzaChsYy5ib29tTGF5ZXIpXG4gICAgICAgICAgaWYgKGVxPy5ib29tTGF5ZXI/LnVybCkgYm9vbUNmZ3MucHVzaChlcS5ib29tTGF5ZXIpXG4gICAgICAgICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgICAgICAgZm9yIChjb25zdCBiYyBvZiBib29tQ2Zncykge1xuICAgICAgICAgICAgY29uc3Qgc2lnID0gYCR7YmMudXJsfXwke2JjLnNpdGVLZXlGaWVsZH1gXG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXMoc2lnKSkgY29udGludWVcbiAgICAgICAgICAgIHNlZW4uYWRkKHNpZylcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaERyYXduQm9vbShiYyBhcyBhbnkpXG4gICAgICAgICAgICAgIG0uZm9yRWFjaCgodiwgaykgPT4gZHJhd24uc2V0KGssIChkcmF3bi5nZXQoaykgfHwgMCkgKyB2KSlcbiAgICAgICAgICAgICAgbm90ZXMucHVzaChgQm9vbSBsaW5lcyAoJHtzaWcuc3BsaXQoJy8nKS5zbGljZSgtMilbMF19KTogZHJhd24gZm9vdGFnZSBmb3IgJHttLnNpemV9IHNpdGUocylgKVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBub3Rlcy5wdXNoKGBCb29tIGxheWVyIEZBSUxFRDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgOTApfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FjaGVSZWYuY3VycmVudCA9IHsgbGF0LCBsb24sIGRhdGEsIGRyYXduLCBmZXRjaE5vdGVzOiBub3Rlcy5zbGljZSgpIH1cbiAgICAgICAgY29tcHV0ZUFuZFJlbmRlcihzYWZldHkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFN0YXR1cyhgVHJhY2UgZmFpbGVkOiAke1N0cmluZyhlKS5zbGljZSgwLCAxMjApfWApXG4gICAgICAgIHNldERpYWcobm90ZXMpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRSdW5uaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtqbXYsIGFybWluZywgcnVubmluZywgc2FmZXR5LCBwcm9wcy5jb25maWddKVxuXG4gIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgIGlmIChjbGlja0hhbmRsZVJlZi5jdXJyZW50KSB7IGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKCk7IGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBudWxsIH1cbiAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC5yZW1vdmVBbGwoKVxuICAgIGNhY2hlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgc2V0QXJtaW5nKGZhbHNlKVxuICAgIHNldFJlc3VsdChudWxsKVxuICAgIHNldERpYWcoW10pXG4gICAgc2V0SGlkZGVuKGZhbHNlKVxuICAgIHNldFN0YXR1cygnQ2xlYXJlZC4gQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiB0byBydW4gYWdhaW4uJylcbiAgfVxuXG4gIC8vIGJyaWVmaW5nIHRvZ2dsZTogaGlkZS9zaG93IHRoZSB0cmFqZWN0b3J5IGdyYXBoaWNzIFdJVEhPVVQgdG91Y2hpbmcgdGhlXG4gIC8vIGNhY2hlZCBydW4g4oCUIHByZXNlbnRlciBjYW4gZmxpcCB0aGUgbW9kZWwgb2ZmIGR1cmluZyBhIHNsaWRlIGFuZCBiYWNrXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XG4gICAgaWYgKCFsYXllclJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBjb25zdCB2ID0gIWxheWVyUmVmLmN1cnJlbnQudmlzaWJsZVxuICAgIGxheWVyUmVmLmN1cnJlbnQudmlzaWJsZSA9IHZcbiAgICBzZXRIaWRkZW4oIXYpXG4gIH1cblxuICBjb25zdCBzaXRlczogU2l0ZVJvd1tdID0gcmVzdWx0Py5zaXRlcyB8fCBbXVxuICBjb25zdCB3YXJuaW5nczogc3RyaW5nW10gPSByZXN1bHQ/Lndhcm5pbmdzIHx8IFtdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgcGFkZGluZzogMTAsIG92ZXJmbG93OiAnYXV0bycsIGZvbnRTaXplOiAxMyB9fT5cbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KHYpID0+IHNldEptdih2KX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7IXByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnIH19PlNlbGVjdCBhIE1hcCB3aWRnZXQgaW4gdGhpcyB3aWRnZXQncyBzZXR0aW5ncy48L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFqbXYgfHwgYXJtaW5nIHx8IHJ1bm5pbmd9IG9uQ2xpY2s9e2FybUNsaWNrfT5cbiAgICAgICAgICB7YXJtaW5nID8gJ0NsaWNrIHRoZSBtYXDigKYnIDogcnVubmluZyA/ICdUcmFjaW5n4oCmJyA6ICdTZXQgc3BpbGwgcG9pbnQnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17cnVubmluZ30gb25DbGljaz17Y2xlYXJBbGx9PkNsZWFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFyZXN1bHR9IG9uQ2xpY2s9e3RvZ2dsZVZpc2libGV9XG4gICAgICAgICAgdGl0bGU9XCJIaWRlL3Nob3cgdGhlIHRyYWplY3Rvcnkgb24gdGhlIG1hcCB3aXRob3V0IGxvc2luZyB0aGUgcnVuIChicmllZmluZ3MpXCI+XG4gICAgICAgICAge2hpZGRlbiA/ICfwn5GBIFNob3cnIDogJ/CfkYEgSGlkZSd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXshcmVzdWx0fSB0aXRsZT1cIkNvcHkgcnVuIHByb3ZlbmFuY2UgcmVjb3JkIChKU09OKSBmb3IgYWZ0ZXItYWN0aW9uIGRvY3VtZW50YXRpb24g4oCUIGluY2x1ZGVzIGEgcmVwbGF5IFVSTFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQ/LnJ1blJlY29yZCB8fCAhY2FjaGVSZWYuY3VycmVudCkgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCByZWM6IGFueSA9IHsgLi4ucmVzdWx0LnJ1blJlY29yZCB9XG4gICAgICAgICAgICBjb25zdCB1ID0gbmV3IFVSTCgnaHR0cHM6Ly93aGl0ZXdhdGVycmVzY3VlLmdpdGh1Yi5pby93cmktZXhiLXdpZGdldHMvZW1iZWQvJylcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnY29uZmlnJywgJ2FsbC1ncnBzJylcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnbGF0JywgY2FjaGVSZWYuY3VycmVudC5sYXQudG9GaXhlZCg1KSlcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnbG9uJywgY2FjaGVSZWYuY3VycmVudC5sb24udG9GaXhlZCg1KSlcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnYXNPZicsIHJlYy5hc19vZiAhPT0gJ2xpdmUnID8gcmVjLmFzX29mIDogcmVjLmdlbmVyYXRlZF9hdC5zbGljZSgwLCAxMCkpXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ3NmJywgU3RyaW5nKHNhZmV0eSkpXG4gICAgICAgICAgICByZWMucmVwbGF5X3VybCA9IHUudG9TdHJpbmcoKVxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoSlNPTi5zdHJpbmdpZnkocmVjLCBudWxsLCAxKSkudGhlbigoKSA9PiBzZXRTdGF0dXMoJ1J1biByZWNvcmQgY29waWVkIChpbmNsdWRlcyByZXBsYXlfdXJsKS4nKSlcbiAgICAgICAgICB9fT5cbiAgICAgICAgICDijpggUmVjb3JkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDQgfX1cbiAgICAgICAgICB0aXRsZT1cIlNhZmV0eSBmYWN0b3Ig4oCUIGNoYW5naW5nIGl0IHJlLXJ1bnMgaW5zdGFudGx5IGZyb20gY2FjaGVkIGh5ZHJvbG9neVwiPlxuICAgICAgICAgIFNGXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2FmZXR5fSBkaXNhYmxlZD17cnVubmluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgc2V0U2FmZXR5KHYpXG4gICAgICAgICAgICAgIGlmIChjYWNoZVJlZi5jdXJyZW50ICYmICFydW5uaW5nKSBjb21wdXRlQW5kUmVuZGVyKHYsIHRydWUpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuMH0+MS4wPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxLjI1fT4xLjI1PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxLjV9PjEuNTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Mi4wfT4yLjA8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCwgbWluSGVpZ2h0OiAxOCB9fT57cnVubmluZyAmJiA8c3BhbiBjbGFzc05hbWU9XCJqaW11LXNlY29uZGFyeS1sb2FkaW5nXCIgLz59IHtzdGF0dXN9PC9kaXY+XG5cbiAgICAgIHtkaWFnLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzg4OCcsIGZvbnRTaXplOiAxMSwgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICAgIHtkaWFnLm1hcCgoZCwgaSkgPT4gPGRpdiBrZXk9e2l9PntkfTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3dhcm5pbmdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmM2NkJywgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmVlYmEnLCBwYWRkaW5nOiA2LCBtYXJnaW5Cb3R0b206IDgsIGJvcmRlclJhZGl1czogNCB9fT5cbiAgICAgICAgICB7d2FybmluZ3MubWFwKCh3LCBpKSA9PiA8ZGl2IGtleT17aX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyIH19PuKaoCB7d308L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtyZXN1bHQgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCwgY29sb3I6ICcjNTU1JyB9fT5cbiAgICAgICAgICBFVEFzIGFyZSBlc3RpbWF0ZXMgKMKxMjAlKSwgc2FmZXR5IGZhY3RvciDDl3tyZXN1bHQuc2FmZXR5X2ZhY3Rvcn0gYXBwbGllZCDigJQgdHJlYXQgYXMgYmFuZHMsIG5vdCBhcHBvaW50bWVudHMuXG4gICAgICAgICAge3Jlc3VsdC5nYXVnZXNfdXNlZC5sZW5ndGhcbiAgICAgICAgICAgID8gYCBGbG93czogJHtyZXN1bHQuZ2F1Z2VzX3VzZWQubWFwKChnOiBhbnkpID0+IGcuc3RhdGlvbl9pZCkuam9pbignLCAnKX0uYFxuICAgICAgICAgICAgOiAnIE5vIGxpdmUgZ2F1Z2VzIGZvdW5kIOKAlCBkcmFpbmFnZS1hcmVhIGZsb3cgZXN0aW1hdGUuJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7c2l0ZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjY2NjJyB9fT5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5FVEE8L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PlNpdGU8L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PmttPC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5Cb29tPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c2l0ZXMubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVlJyB9fT5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3MuZXRhX2Vhcmx5X2hyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBgZWFybGllc3QgY3JlZGlibGUgJHtzLmV0YV9lYXJseV9ocn0gaHIgwrcgZmlyc3QgYXJyaXZhbCAke3MuZXRhX2hyfSBociDCtyBwZWFrICR7cy5ldGFfcGVha19ocn0gaHIke3MuY2xlYXJfaHIgPyBgIMK3IGNsZWFyIH4ke3MuY2xlYXJfaHJ9IGhyYCA6ICcnfWBcbiAgICAgICAgICAgICAgICAgICAgOiAnJ30+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhbmRDb2xvcihzLmV0YV9ociksIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgIHtzLmV0YV9lYXJseV9ociAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gYCR7cy5ldGFfZWFybHlfaHIudG9GaXhlZCgxKX3igJMke3MuZXRhX2hyLnRvRml4ZWQoMSl9IGhyYFxuICAgICAgICAgICAgICAgICAgICA6IHMuZXRhX2hyIDwgMSA/IGAke01hdGgucm91bmQocy5ldGFfaHIgKiA2MCl9IG1pbmAgOiBgJHtzLmV0YV9oci50b0ZpeGVkKDEpfSBocmB9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PntzLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PntzLmRpc3Rfa20udG9GaXhlZCgxKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19IHRpdGxlPXtzLmJvb21cbiAgICAgICAgICAgICAgICAgID8gYCR7cy5ib29tLmFuY2hvcnN9IGFuY2hvciBzZXRzJHtzLmJvb20uYm9vbV9hbmdsZV9kZWcgPyBgIMK3ICR7cy5ib29tLmJvb21fYW5nbGVfZGVnfcKwIGRlcGxveW1lbnRgIDogJyd9JHtzLmJvb20uY2FzY2FkZV9hZHZpc2VkID8gJyDCtyBmYXN0IHdhdGVyOiBjYXNjYWRlIG11bHRpcGxlIGJvb21zJyA6ICcnfSAoJHtzLmJvb20uc291cmNlID09PSAnZHJhd24nID8gJ2Zyb20gZHJhd24gYm9vbSBsaW5lcycgOiAnZXN0aW1hdGVkIGZyb20gbW9kZWxlZCB3aWR0aC92ZWxvY2l0eSd9KWBcbiAgICAgICAgICAgICAgICAgIDogJyd9PlxuICAgICAgICAgICAgICAgICAge3MuYm9vbVxuICAgICAgICAgICAgICAgICAgICA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cy5ib29tLmJvb21fZnQudG9Mb2NhbGVTdHJpbmcoKX0gZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20uY2FzY2FkZV9hZHZpc2VkICYmICcg4pqhJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzk5OScgfX0+IHtzLmJvb20uc291cmNlID09PSAnZHJhd24nID8gJ+KckycgOiAnZXN0Lid9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA6ICfigJQnfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIHtzaXRlcy5zb21lKChzKSA9PiBzLmJvb20pICYmIChcbiAgICAgICAgICAgIDx0Zm9vdD5cbiAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlclRvcDogJzJweCBzb2xpZCAjY2NjJywgZm9udFdlaWdodDogNjAwIH19PlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBwYWRkaW5nOiAnM3B4IDRweCcgfX0+XG4gICAgICAgICAgICAgICAgICBUb3RhbHMgKHtzaXRlcy5maWx0ZXIoKHMpID0+IHMuYm9vbSkubGVuZ3RofSBib29tIHNpdGVzKVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICczcHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYm9vbV9mdCB8fCAwKSwgMCkudG9Mb2NhbGVTdHJpbmcoKX0gZnQgwrd7JyAnfVxuICAgICAgICAgICAgICAgICAge3NpdGVzLnJlZHVjZSgodCwgcykgPT4gdCArIChzLmJvb20/LmFuY2hvcnMgfHwgMCksIDApfSBhbmNob3JzXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0ICYmIHNpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzc3NycsIG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICDinJMgPSBkcmF3biBib29tIGxpbmVzIMK3IGVzdC4gPSBzaXplZCBmcm9tIG1vZGVsZWQgd2lkdGgvdmVsb2NpdHlcbiAgICAgICAgICAoYm9vbSBhbmdsZWQgdG8ga2VlcCBub3JtYWwgZmxvdyDiiaQgeyhwcm9wcy5jb25maWcuZXF1aXBtZW50Py5lbnRyYWlubWVudE1zID8/IDAuMzUpfSBtL3MsXG4gICAgICAgICAgK3twcm9wcy5jb25maWcuZXF1aXBtZW50Py5yZXNlcnZlUGN0ID8/IDIwfSUgcmVzZXJ2ZSkgwrcg4pqhID0gZmFzdCB3YXRlciwgY2FzY2FkZSBib29tc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0ICYmIHNpdGVzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzc3NycgfX0+Tm8gY29uZmlndXJlZCBzaXRlcyB3aXRoaW4gcmVhY2ggb2YgdGhpcyB0cmFjZS48L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9