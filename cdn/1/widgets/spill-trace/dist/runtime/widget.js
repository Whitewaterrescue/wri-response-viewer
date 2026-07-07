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
const ENGINE_VERSION = "1.2.0";
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
function nldiDmGauges(comid, distanceKm) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/DM/nwissite`, {
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
        const gauges = yield nldiDmGauges(comid, cfg.maxDistanceKm);
        const ginfo = yield gaugeInfo(gauges.map((g) => g.station_id), cfg.asOf);
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
        for (const g of gd) {
            log(`  gauge ${g.station_id} ${g.name.slice(0, 38).padEnd(38)} ${String(Math.round(g.discharge)).padStart(8)} cfs @ ${(g.trace_dist / 1000).toFixed(1).padStart(6)} km`);
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
    if (gd.length >= 2) {
        const fQ = interpClamped(gd.map((g) => g.trace_dist), gd.map((g) => g.discharge));
        for (const r of rows)
            r.Q_cfs = Math.max(fQ(r.cum_dist), 1.0);
        qMethod = "gauge-interpolation";
        qConfidence = "HIGH";
    }
    else if (gd.length === 1) {
        const g = gd[0];
        for (const r of rows) {
            r.Q_cfs = Math.max(g.discharge * (r.drainage_area_sqmi / g.drainage_area), 1.0);
        }
        qMethod = "single-gauge-DA-ratio";
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
        gauges: gd.map((g) => ({ station_id: g.station_id, name: g.name, discharge_cfs: g.discharge, trace_km: Math.round(g.trace_dist / 100) / 10 })),
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
        setStatus('Cleared. Click "Set spill point" to run again.');
    };
    const sites = (result === null || result === void 0 ? void 0 : result.sites) || [];
    const warnings = (result === null || result === void 0 ? void 0 : result.warnings) || [];
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { padding: 10, overflow: 'auto', fontSize: 13 }, children: [((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (v) => setJmv(v) })), !((_c = props.useMapWidgetIds) === null || _c === void 0 ? void 0 : _c.length) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00' }, children: "Select a Map widget in this widget's settings." })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary btn-sm", disabled: !jmv || arming || running, onClick: armClick, children: arming ? 'Click the map…' : running ? 'Tracing…' : 'Set spill point' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: running, onClick: clearAll, children: "Clear" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, title: "Copy run provenance record (JSON) for after-action documentation \u2014 includes a replay URL", onClick: () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUksTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDO0FBRXRDLE1BQU0sU0FBUyxHQUFHLGlDQUFpQyxDQUFDO0FBQ3BELE1BQU0sU0FBUyxHQUFHLGtEQUFrRCxDQUFDO0FBQ3JFLE1BQU0sT0FBTyxHQUFHLHlDQUF5QyxDQUFDO0FBQzFELE1BQU0sU0FBUyxHQUFHLDJDQUEyQyxDQUFDO0FBRTlEOzs7O0dBSUc7QUFDSSxNQUFNLDBCQUEwQixHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2hELDBGQUEwRjtJQUMxRixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVE7Q0FDN0IsQ0FBQyxDQUFDO0FBRUksTUFBTSxjQUFjLEdBQUc7SUFDNUIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsS0FBSztJQUNsQixZQUFZLEVBQUUsR0FBRztJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGFBQWEsRUFBRSxJQUFJLEVBQVMsMkRBQTJEO0lBQ3ZGLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsaUJBQWlCLEVBQUUsR0FBRyxFQUFNLHFEQUFxRDtJQUNqRixhQUFhLEVBQUUsRUFBRTtJQUNqQixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLG9CQUFvQixFQUFFLEVBQUUsRUFBSSw2REFBNkQ7SUFDekYsV0FBVyxFQUFFLFdBQVcsRUFBSSxvRkFBb0Y7SUFDaEgsSUFBSSxFQUFFLElB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V0FBVyxHQUFHLDJCQUEyQixDQUFDO1lBQzlFLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1FBQzdFLENBQUM7SUFDSCxDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNYLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUMvQixNQUFNLFlBQVksR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUUsQ0FBQztRQUFDLENBQUM7O1lBQzFELENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3JELENBQUM7SUFDRCxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FB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cyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NwaWxsLXRyYWNlL3NyYy90cmFjZS1lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9seWxpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NwaWxsLXRyYWNlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogdHJhY2UtZW5naW5lLmpzIOKAlCBOYXRpb25hbCBzcGlsbCB0cmFqZWN0b3J5IGVuZ2luZSAoSlMgcG9ydCBvZiBzcGlsbF90cmFjZS5weSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEZhaXRoZnVsIHBvcnQgb2YgdGhlIFB5dGhvbiBvcmFjbGUuIERlcGVuZGVuY3ktZnJlZSBFU006IHJ1bnMgaW4gcGxhaW4gTm9kZVxuICogKD49MTgsIGdsb2JhbCBmZXRjaCkgZm9yIGdvbGRlbiB0ZXN0aW5nIGFuZCBpbiB0aGUgYnJvd3NlciBpbnNpZGUgdGhlIEV4QlxuICogd2lkZ2V0LiBOTyBAYXJjZ2lzIGltcG9ydHMgaGVyZSDigJQgdGhlIHdpZGdldCB3cmFwcyB0aGlzIG1vZHVsZSBhbmQgc3VwcGxpZXNcbiAqIGxheWVyIGFjY2VzcyB0aHJvdWdoIGluamVjdGFibGUgcHJvdmlkZXJzOlxuICpcbiAqICAgY29uZmlnLndpZHRoUHJvdmlkZXIoZW52ZWxvcGUpICAtPiBbe2xhdCwgbG9uLCB3aWR0aH1dICAgKEdMT1cgbWlkcG9pbnRzIGluIGJib3gpXG4gKiAgIGNvbmZpZy5zaXRlUHJvdmlkZXJzICAgICAgICAgICAgLT4gW3tuYW1lLCBidWZmZXJfbSwgZmV0Y2g6IGFzeW5jICgpID0+IFt7bmFtZSwgbGF0LCBsb24sIC4uLmV4dHJhfV19XVxuICogICBjb25maWcucmVjZXB0b3JQcm92aWRlcnMgICAgICAgIC0+IHNhbWUgc2hhcGUgYXMgc2l0ZVByb3ZpZGVyc1xuICpcbiAqIFBvcnQgZ290Y2hhcyBob25vcmVkIChzZWUgUkVBRE1FKTpcbiAqICAgMS4gZ2Vvc2VydmVyIENRTCBCQk9YIGlzIGxhdCxsb24gYXhpcyBvcmRlciAoRVBTRzo0MjY5IC8gV0ZTIDIuMClcbiAqICAgMi4gSFIgTkhEUGx1c0lEICE9IE1SIGNvbWlkIOKAlCB3aWR0aHMgc2FtcGxlZCBzcGF0aWFsbHksIG5ldmVyIElELWpvaW5lZFxuICogICAzLiBpbXBvdW5kbWVudCA9IHdiYXJlYXR5cGUgaW4gKExha2VQb25kLCBSZXNlcnZvaXIpXG4gKiAgIDQuIHdpZHRoIG92ZXJyaWRlIHNhbXBsZWQgaW4gd2luZG93czsgZmFpbHVyZSBkZWdyYWRlcyB0byBmb3JtdWxhIHdpZHRoc1xuICogICA1LiBOTERJL2dlb3NlcnZlciBlbXB0eS0yMDAgLT4gcmV0cnkgM3ggd2l0aCBiYWNrb2ZmXG4gKiAgIDYuIHNuYXAgY2xpY2sgdG8gc3RyZWFtb3JkZSA+PSBtaW5TdHJlYW1PcmRlclxuICovXG5cbmV4cG9ydCBjb25zdCBFTkdJTkVfVkVSU0lPTiA9IFwiMS4yLjBcIjtcblxuY29uc3QgTkxESV9CQVNFID0gXCJodHRwczovL2FwaS53YXRlci51c2dzLmdvdi9ubGRpXCI7XG5jb25zdCBHRU9TRVJWRVIgPSBcImh0dHBzOi8vYXBpLndhdGVyLnVzZ3MuZ292L2dlb3NlcnZlci93bWFkYXRhL293c1wiO1xuY29uc3QgTldJU19JViA9IFwiaHR0cHM6Ly93YXRlcnNlcnZpY2VzLnVzZ3MuZ292L253aXMvaXYvXCI7XG5jb25zdCBOV0lTX1NJVEUgPSBcImh0dHBzOi8vd2F0ZXJzZXJ2aWNlcy51c2dzLmdvdi9ud2lzL3NpdGUvXCI7XG5cbi8qKlxuICogTkhEUGx1cyBNUiB3YXRlcmJvZHkgZmxhZ3MgbGFnIHJlYWxpdHkg4oCUIHJlYWNoZXMgdGhyb3VnaCBSRU1PVkVEIGRhbXMgc3RpbGxcbiAqIGNhcnJ5IHdiYXJlYXR5cGUgTGFrZVBvbmQgYW5kIHdvdWxkIGZhbHNlLXN0b3AgdGhlIGNsb2NrLiBLbm93biByZW1vdmFsc1xuICogYXJlIGV4Y2x1ZGVkIGhlcmUgKGV4dGVuZGFibGUgcGVyLXJ1biB2aWEgY29uZmlnLmltcG91bmRFeGNsdWRlQ29taWRzKS5cbiAqL1xuZXhwb3J0IGNvbnN0IFJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTID0gbmV3IFNldChbXG4gIC8vIE1pbGx0b3duIERhbSwgQ2xhcmsgRm9yayBhdCBCb25uZXIgTVQg4oCUIHJlbW92ZWQgMjAwOC0yMDEwIChyZXBvcnRlZCBieSBDb2R5IDIwMjYtMDctMDcpXG4gIDI0MjkzMTIwLCAyNDI5MzEyMiwgMjQyOTMxMjQsXG5dKTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBtYXhEaXN0YW5jZUttOiAzMDAsXG4gIG1heEhvdXJzOiAyNCxcbiAgcmVzb2x1dGlvbk06IDEwMC4wLFxuICBzYWZldHlGYWN0b3I6IDEuNSxcbiAgbWFubmluZ046IDAuMDQ1LFxuICBtaW5TdHJlYW1PcmRlcjogNCxcbiAgd2lkdGhQcm92aWRlcjogbnVsbCwgICAgICAgIC8vIGFzeW5jIChlbnYge3htaW4seW1pbix4bWF4LHltYXh9KSA9PiBbe2xhdCwgbG9uLCB3aWR0aH1dXG4gIHdpZHRoU2FtcGxlUmFkaXVzTTogODAwLFxuICB3aWR0aFdpbmRvd1BvaW50czogMTAwLCAgICAgLy8gdHJhY2UgcG9pbnRzIHBlciBvdmVycmlkZSBzYW1wbGluZyB3aW5kb3cgKH4xMCBrbSlcbiAgc2l0ZVByb3ZpZGVyczogW10sXG4gIHJlY2VwdG9yUHJvdmlkZXJzOiBbXSxcbiAgaW1wb3VuZFN0b3BLbTogMi4wLFxuICBpbXBvdW5kRXhjbHVkZUNvbWlkczogW10sICAgLy8gZXh0cmEgcmVtb3ZlZC1kYW0gY29taWRzIGJleW9uZCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEU1xuICB0aW1pbmdNb2RlbDogXCJoeWRyYXVsaWNcIiwgICAvLyAnaHlkcmF1bGljJyAoVj1RL0EgeCBzYWZldHkpIHwgJ2pvYnNvbicgKFVTR1MgV1JJUiA5Ni00MDEzIGR5ZS1zdHVkeSByZWdyZXNzaW9ucylcbiAgYXNPZjogbnVsbCwgICAgICAgICAgICAgICAgIC8vICdZWVlZLU1NLUREJyBoaXN0b3JpY2FsIFE7IG51bGwgPSBsaXZlXG4gIHZlcmJvc2U6IHRydWUsXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnNcblxuY29uc3QgUl9FQVJUSCA9IDYzNzEwMDguODtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhdmVyc2luZU0obGF0MSwgbG9uMSwgbGF0MiwgbG9uMikge1xuICBjb25zdCBwMSA9IChsYXQxICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IHAyID0gKGxhdDIgKiBNYXRoLlBJKSAvIDE4MDtcbiAgY29uc3QgZHAgPSBwMiAtIHAxO1xuICBjb25zdCBkbCA9ICgobG9uMiAtIGxvbjEpICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IGEgPSBNYXRoLnNpbihkcCAvIDIpICoqIDIgKyBNYXRoLmNvcyhwMSkgKiBNYXRoLmNvcyhwMikgKiBNYXRoLnNpbihkbCAvIDIpICoqIDI7XG4gIHJldHVybiAyICogUl9FQVJUSCAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xufVxuXG4vKiogUGF5dG9uJ3Mgd2lkdGgvZGVwdGggZm9ybXVsYXMgKGZhbGxiYWNrIHdoZW4gbm8gR0xPVyBkYXRhKS4gVmVyYmF0aW0uICovXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihkcmFpbmFnZUFyZWFTcU1pKSB7XG4gIGxldCB3aWR0aCwgZGVwdGg7XG4gIGlmIChkcmFpbmFnZUFyZWFTcU1pIDwgMTAwKSB7XG4gICAgd2lkdGggPSAxMC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwLCAwLjUpO1xuICAgIGRlcHRoID0gMC41ICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwLCAwLjMpO1xuICB9IGVsc2UgaWYgKGRyYWluYWdlQXJlYVNxTWkgPCAxMDAwKSB7XG4gICAgd2lkdGggPSA1MC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMCwgMC41KTtcbiAgICBkZXB0aCA9IDEuNSAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAsIDAuMyk7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAxNTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAwLCAwLjQpO1xuICAgIGRlcHRoID0gMy4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMDAsIDAuMyk7XG4gIH1cbiAgcmV0dXJuIFt3aWR0aCwgZGVwdGhdO1xufVxuXG4vKipcbiAqIE1hbm5pbmcncyBkZXB0aCB2aWEgYmlzZWN0aW9uIChQeXRob24gdXNlZCBzY2lweSBicmVudHEgb24gWzAuMSwgMjBdKS5cbiAqIFRoZSByZXNpZHVhbCBpcyBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgaW4gZGVwdGgsIHNvIGJpc2VjdGlvbiBjb252ZXJnZXMgdG9cbiAqIHRoZSBzYW1lIHJvb3QuIFJlcGxpY2F0ZXMgYnJlbnRxJ3MgZmFpbHVyZSBtb2RlOiBubyBzaWduIGNoYW5nZSBhY3Jvc3MgdGhlXG4gKiBicmFja2V0IC0+IG51bGwgKGNhbGxlciBmYWxscyBiYWNrIHRvIGZvcm11bGEgZGVwdGgpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGVwdGhNYW5uaW5nKFFtM3MsIHdpZHRoTSwgc2xvcGUsIG4gPSAwLjA0NSkge1xuICBpZiAoUW0zcyA8PSAwIHx8IHdpZHRoTSA8PSAwIHx8IHNsb3BlIDw9IDAuMDAwMDEpIHJldHVybiBudWxsO1xuICBjb25zdCByZXNpZHVhbCA9IChkZXB0aCkgPT4ge1xuICAgIGlmIChkZXB0aCA8PSAwLjAxKSByZXR1cm4gLVFtM3M7XG4gICAgY29uc3QgQSA9IHdpZHRoTSAqIGRlcHRoO1xuICAgIGNvbnN0IFAgPSB3aWR0aE0gKyAyICogZGVwdGg7XG4gICAgY29uc3QgUiA9IEEgLyBQO1xuICAgIHJldHVybiAoMSAvIG4pICogQSAqIE1hdGgucG93KFIsIDIgLyAzKSAqIE1hdGguc3FydChzbG9wZSkgLSBRbTNzO1xuICB9O1xuICBsZXQgbG8gPSAwLjEsIGhpID0gMjAuMDtcbiAgbGV0IGZsbyA9IHJlc2lkdWFsKGxvKSwgZmhpID0gcmVzaWR1YWwoaGkpO1xuICBpZiAoZmxvID09PSAwKSByZXR1cm4gbG87XG4gIGlmIChmaGkgPT09IDApIHJldHVybiBoaTtcbiAgaWYgKGZsbyAqIGZoaSA+IDApIHJldHVybiBudWxsOyAvLyBicmVudHEgcmFpc2VzIC0+IFB5dGhvbiByZXR1cm5zIE5vbmVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IG1pZCA9IDAuNSAqIChsbyArIGhpKTtcbiAgICBjb25zdCBmbSA9IHJlc2lkdWFsKG1pZCk7XG4gICAgaWYgKGZtID09PSAwIHx8IChoaSAtIGxvKSAvIDIgPCAxZS0xMCkgcmV0dXJuIG1pZDtcbiAgICBpZiAoZmxvICogZm0gPCAwKSB7IGhpID0gbWlkOyBmaGkgPSBmbTsgfSBlbHNlIHsgbG8gPSBtaWQ7IGZsbyA9IGZtOyB9XG4gIH1cbiAgcmV0dXJuIDAuNSAqIChsbyArIGhpKTtcbn1cblxuY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XG5cbi8qKiBHRVQvUE9TVCB3aXRoIHJldHJ5IOKAlCBOTERJL2dlb3NlcnZlciBpbnRlcm1pdHRlbnRseSByZXR1cm4gZW1wdHkgMjAwIGJvZGllcy4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEpzb24odXJsLCB7IHBhcmFtcyA9IG51bGwsIGRhdGEgPSBudWxsLCB0cmllcyA9IDMsIHRpbWVvdXRNcyA9IDkwMDAwIH0gPSB7fSkge1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDwgdHJpZXM7IGF0dGVtcHQrKykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGN0cmwuYWJvcnQoKSwgdGltZW91dE1zKTtcbiAgICAgIGxldCByZXNwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzaWduYWw6IGN0cmwuc2lnbmFsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHFzID0gcGFyYW1zID8gXCI/XCIgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgICAgICAgcmVzcCA9IGF3YWl0IGZldGNoKHVybCArIHFzLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3Aub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlc3Auc3RhdHVzfWApO1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3AuanNvbigpOyAvLyBlbXB0eSBib2R5IC0+IFN5bnRheEVycm9yIC0+IHJldHJ5XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbGFzdCA9IGU7XG4gICAgICBhd2FpdCBzbGVlcCgxNTAwICogKGF0dGVtcHQgKyAxKSk7XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgJHt1cmx9IGZhaWxlZCBhZnRlciAke3RyaWVzfSB0cmllczogJHtsYXN0fWApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUZXh0KHVybCwgcGFyYW1zLCB0aW1lb3V0TXMgPSAzMDAwMCkge1xuICBjb25zdCBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gY3RybC5hYm9ydCgpLCB0aW1lb3V0TXMpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwgKyBcIj9cIiArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3AudGV4dCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIGZldGNoXG5cbi8qKiBTbmFwIHRvIG5lYXJlc3QgcmVhY2ggd2l0aCBzdHJlYW1vcmRlID49IG1pbk9yZGVyIChnZW9zZXJ2ZXIgYmJveCBzZWFyY2gpLiAqL1xuYXN5bmMgZnVuY3Rpb24gc25hcENvbWlkKGxhdCwgbG9uLCBtaW5PcmRlcikge1xuICBjb25zdCBib3ggPSAwLjI7XG4gIC8vIE5PVEU6IEVQU0c6NDI2OSB1bmRlciBXRlMgMi4wIHVzZXMgbGF0LGxvbiBheGlzIG9yZGVyIGluIENRTCBCQk9YXG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKEdFT1NFUlZFUiwge1xuICAgIGRhdGE6IHtcbiAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXG4gICAgICB0eXBlTmFtZTogXCJ3bWFkYXRhOm5oZGZsb3dsaW5lX25ldHdvcmtcIiwgb3V0cHV0Rm9ybWF0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGNxbF9maWx0ZXI6XG4gICAgICAgIGBzdHJlYW1vcmRlID49ICR7bWluT3JkZXJ9IEFORCBCQk9YKHRoZV9nZW9tLGAgK1xuICAgICAgICBgJHtsYXQgLSBib3h9LCR7bG9uIC0gYm94fSwke2xhdCArIGJveH0sJHtsb24gKyBib3h9KWAsXG4gICAgICBjb3VudDogXCI1MDBcIixcbiAgICB9LFxuICB9KTtcbiAgbGV0IGJlc3QgPSBudWxsLCBiZXN0RCA9IEluZmluaXR5O1xuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5O1xuICAgIGNvbnN0IHBhdGhzID0gZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIiA/IFtnLmNvb3JkaW5hdGVzXSA6IGcuY29vcmRpbmF0ZXM7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpICs9IDMpIHsgLy8gZXZlcnkgM3JkIHZlcnRleFxuICAgICAgICBjb25zdCBwID0gcGF0aFtpXTtcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIHBbMV0sIHBbMF0pO1xuICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IGYucHJvcGVydGllczsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYmVzdCAhPT0gbnVsbCkgcmV0dXJuIFtOdW1iZXIoYmVzdC5jb21pZCksIGJlc3QuZ25pc19uYW1lID8/IG51bGwsIGJlc3REXTtcbiAgcmV0dXJuIFthd2FpdCBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbiksIG51bGwsIG51bGxdO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbikge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkL3Bvc2l0aW9uYCwge1xuICAgIHBhcmFtczogeyBjb29yZHM6IGBQT0lOVCgke2xvbn0gJHtsYXR9KWAgfSwgdGltZW91dE1zOiAzMDAwMCxcbiAgfSk7XG4gIHJldHVybiBOdW1iZXIoai5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLmlkZW50aWZpZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpRG1GbG93bGluZXMoY29taWQsIGRpc3RhbmNlS20pIHtcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC8ke2NvbWlkfS9uYXZpZ2F0aW9uL0RNL2Zsb3dsaW5lc2AsIHtcbiAgICBwYXJhbXM6IHsgZGlzdGFuY2U6IFN0cmluZyhNYXRoLnRydW5jKGRpc3RhbmNlS20pKSB9LFxuICB9KTtcbiAgY29uc3QgZ2VvbXMgPSBuZXcgTWFwKCk7IC8vIGNvbWlkIC0+IFtwYXRoc10gKFtbbG9uLGxhdF0sLi4uXSlcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBjaWQgPSBOdW1iZXIoZi5wcm9wZXJ0aWVzLm5oZHBsdXNfY29taWQpO1xuICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5O1xuICAgIGlmIChnLnR5cGUgPT09IFwiTGluZVN0cmluZ1wiKSBnZW9tcy5zZXQoY2lkLCBbZy5jb29yZGluYXRlc10pO1xuICAgIGVsc2UgaWYgKGcudHlwZSA9PT0gXCJNdWx0aUxpbmVTdHJpbmdcIikgZ2VvbXMuc2V0KGNpZCwgZy5jb29yZGluYXRlcyk7XG4gIH1cbiAgcmV0dXJuIGdlb21zO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpRG1HYXVnZXMoY29taWQsIGRpc3RhbmNlS20pIHtcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC8ke2NvbWlkfS9uYXZpZ2F0aW9uL0RNL253aXNzaXRlYCwge1xuICAgIHBhcmFtczogeyBkaXN0YW5jZTogU3RyaW5nKE1hdGgudHJ1bmMoZGlzdGFuY2VLbSkpIH0sXG4gIH0pO1xuICBjb25zdCBvdXQgPSBbXTtcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBzaWQgPSAoZi5wcm9wZXJ0aWVzLmlkZW50aWZpZXIgfHwgXCJcIikucmVwbGFjZShcIlVTR1MtXCIsIFwiXCIpO1xuICAgIGlmIChzaWQubGVuZ3RoID4gMTUpIGNvbnRpbnVlOyAvLyBjb29yZGluYXRlLXN0eWxlIElEcyAobm90ZWJvb2sgcnVsZSlcbiAgICBvdXQucHVzaCh7XG4gICAgICBzdGF0aW9uX2lkOiBzaWQsXG4gICAgICBuYW1lOiBmLnByb3BlcnRpZXMubmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgIGxhdDogZi5nZW9tZXRyeS5jb29yZGluYXRlc1sxXSxcbiAgICAgIGxvbjogZi5nZW9tZXRyeS5jb29yZGluYXRlc1swXSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogVkFBcyBmb3IgYSBsaXN0IG9mIENPTUlEcyBmcm9tIFVTR1MgZ2Vvc2VydmVyIChiYXRjaGVkIFBPU1QpLiAqL1xuYXN5bmMgZnVuY3Rpb24gdmFhQmF0Y2goY29taWRzKSB7XG4gIGNvbnN0IG91dCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgQ0hVTksgPSAxNTA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29taWRzLmxlbmd0aDsgaSArPSBDSFVOSykge1xuICAgIGNvbnN0IGNodW5rID0gY29taWRzLnNsaWNlKGksIGkgKyBDSFVOSyk7XG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXG4gICAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLFxuICAgICAgICBvdXRwdXRGb3JtYXQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBjcWxfZmlsdGVyOiBgY29taWQgSU4gKCR7Y2h1bmsuam9pbihcIixcIil9KWAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgICBjb25zdCBwID0gZi5wcm9wZXJ0aWVzO1xuICAgICAgLy8gRVJPTSBtb250aGx5IG1vZGVsZWQgZmxvdyAoZ2F1Z2UtYWRqdXN0ZWQsIGNmcykg4oCUIHVuZ2F1Z2VkIGZhbGxiYWNrICsgSm9ic29uIFFhXG4gICAgICBjb25zdCBxZSA9IHt9O1xuICAgICAgZm9yIChsZXQgbSA9IDE7IG0gPD0gMTI7IG0rKykge1xuICAgICAgICBjb25zdCBrID0gYHFlXyR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgICAgICBxZVttXSA9IHBba10gPz8gbnVsbDtcbiAgICAgIH1cbiAgICAgIG91dC5zZXQoTnVtYmVyKHAuY29taWQpLCB7XG4gICAgICAgIGh5ZHJvc2VxOiBwLmh5ZHJvc2VxID8/IG51bGwsXG4gICAgICAgIHN0cmVhbW9yZGU6IHAuc3RyZWFtb3JkZSA/PyBudWxsLFxuICAgICAgICBzbG9wZTogcC5zbG9wZSA/PyBudWxsLFxuICAgICAgICB0b3RkYXNxa206IHAudG90ZGFzcWttID8/IG51bGwsXG4gICAgICAgIGZ0eXBlOiBwLmZ0eXBlID8/IG51bGwsXG4gICAgICAgIGZjb2RlOiBwLmZjb2RlID8/IG51bGwsXG4gICAgICAgIGduaXNfbmFtZTogcC5nbmlzX25hbWUgPz8gbnVsbCxcbiAgICAgICAgLy8gTGFrZVBvbmQvUmVzZXJ2b2lyID0gaW1wb3VuZGVkOyBTdHJlYW1SaXZlciA9IGJyYWlkZWQgZnJlZS1mbG93aW5nXG4gICAgICAgIHdiYXJlYXR5cGU6IHAud2JhcmVhdHlwZSA/PyBudWxsLFxuICAgICAgICB2ZV9tYTogcC52ZV9tYSA/PyBudWxsLFxuICAgICAgICBxZV9tYTogcC5xZV9tYSA/PyBudWxsLCAgIC8vIEVST00gbWVhbiBhbm51YWwgZmxvdyAoY2ZzKSDigJQgSm9ic29uIFFhXG4gICAgICAgIHFlX21vbnRobHk6IHFlLFxuICAgICAgICAvLyBOSERQbHVzIGRpdmVyZ2VuY2U6IDAgPSBub25lLCAxID0gbWFpbiBwYXRoLCAyID0gbWlub3IgcGF0aCBvZiBhIHNwbGl0XG4gICAgICAgIGRpdmVyZ2VuY2U6IHAuZGl2ZXJnZW5jZSA/PyAwLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBEaXNjaGFyZ2UgKGNmcykgKyBkcmFpbmFnZSBhcmVhIChzcSBtaSkgcGVyIGdhdWdlIHZpYSBwbGFpbiBOV0lTIFJFU1QuICovXG5hc3luYyBmdW5jdGlvbiBnYXVnZUluZm8oc3RhdGlvbklkcywgYXNPZiA9IG51bGwpIHtcbiAgY29uc3QgaW5mbyA9IG5ldyBNYXAoKTtcbiAgaWYgKCFzdGF0aW9uSWRzLmxlbmd0aCkgcmV0dXJuIGluZm87XG4gIGNvbnN0IHNpdGVzID0gc3RhdGlvbklkcy5qb2luKFwiLFwiKTtcblxuICAvLyBkcmFpbmFnZSBhcmVhcyAocmRiLCBleHBhbmRlZCBvdXRwdXQpXG4gIHRyeSB7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IGdldFRleHQoTldJU19TSVRFLCB7IGZvcm1hdDogXCJyZGJcIiwgc2l0ZXMsIHNpdGVPdXRwdXQ6IFwiZXhwYW5kZWRcIiB9KTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsKSA9PiBsICYmICFsLnN0YXJ0c1dpdGgoXCIjXCIpKTtcbiAgICBpZiAobGluZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IGhkciA9IGxpbmVzWzBdLnNwbGl0KFwiXFx0XCIpO1xuICAgICAgY29uc3QgaVNpdGUgPSBoZHIuaW5kZXhPZihcInNpdGVfbm9cIik7XG4gICAgICBjb25zdCBpRGEgPSBoZHIuaW5kZXhPZihcImRyYWluX2FyZWFfdmFcIik7IC8vIC0xIGlmIGFic2VudFxuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzLnNsaWNlKDIpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8PSBNYXRoLm1heChpU2l0ZSwgaURhID4gLTEgPyBpRGEgOiAwKSkgY29udGludWU7XG4gICAgICAgIGxldCBkYSA9IG51bGw7XG4gICAgICAgIGlmIChpRGEgPiAtMSkge1xuICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KHBhcnRzW2lEYV0pO1xuICAgICAgICAgIGRhID0gTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5zZXQocGFydHNbaVNpdGVdLCB7IGRyYWluYWdlX2FyZWE6IGRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSDigJQgbWF0Y2hlcyBQeXRob24gKi8gfVxuXG4gIC8vIGRpc2NoYXJnZVxuICBjb25zdCBwYXJhbXMgPSB7IGZvcm1hdDogXCJqc29uXCIsIHNpdGVzLCBwYXJhbWV0ZXJDZDogXCIwMDA2MFwiIH07XG4gIGlmIChhc09mKSB7IHBhcmFtcy5zdGFydERUID0gYXNPZjsgcGFyYW1zLmVuZERUID0gYXNPZjsgfVxuICBlbHNlIHBhcmFtcy5wZXJpb2QgPSBcIlAxRFwiO1xuICB0cnkge1xuICAgIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKE5XSVNfSVYsIHsgcGFyYW1zLCB0aW1lb3V0TXM6IDYwMDAwLCB0cmllczogMSB9KTtcbiAgICBmb3IgKGNvbnN0IHRzIG9mIGo/LnZhbHVlPy50aW1lU2VyaWVzIHx8IFtdKSB7XG4gICAgICBjb25zdCBzaWQgPSB0cy5zb3VyY2VJbmZvLnNpdGVDb2RlWzBdLnZhbHVlO1xuICAgICAgY29uc3QgdmFscyA9IHRzLnZhbHVlc1swXS52YWx1ZTtcbiAgICAgIGlmICghdmFscyB8fCAhdmFscy5sZW5ndGgpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgcSA9IHBhcnNlRmxvYXQodmFsc1t2YWxzLmxlbmd0aCAtIDFdLnZhbHVlKTtcbiAgICAgIGlmIChxID49IDApIHtcbiAgICAgICAgaWYgKCFpbmZvLmhhcyhzaWQpKSBpbmZvLnNldChzaWQsIHt9KTtcbiAgICAgICAgaW5mby5nZXQoc2lkKS5kaXNjaGFyZ2UgPSBxO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSDigJQgbWF0Y2hlcyBQeXRob24gKi8gfVxuICByZXR1cm4gaW5mbztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0cmFjZSBhc3NlbWJseVxuXG4vKiogT3JkZXIgc2VnbWVudHMgZG93bnN0cmVhbSAoaHlkcm9zZXEgZGVzYyksIG9yaWVudCwgdHJpbSB0byBzcGlsbCBwb2ludCxcbiAqICBlbWl0IH5yZXNvbHV0aW9uTSBzcGFjZWQgcG9pbnRzIGNhcnJ5aW5nIFZBQSBhdHRyaWJ1dGVzLiAqL1xuZnVuY3Rpb24gYXNzZW1ibGVUcmFjZShsYXQsIGxvbiwgZ2VvbXMsIHZhYSwgcmVzb2x1dGlvbk0sIGxvZykge1xuICBjb25zdCBzZWdzID0gW107XG4gIGZvciAoY29uc3QgW2NpZCwgcGF0aHNdIG9mIGdlb21zKSB7XG4gICAgY29uc3QgdiA9IHZhYS5nZXQoY2lkKTtcbiAgICBpZiAoIXYgfHwgdi5oeWRyb3NlcSA9PT0gbnVsbCB8fCB2Lmh5ZHJvc2VxID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGNvb3JkcyA9IHBhdGhzLmZsYXQoKTsgLy8gZmxhdHRlbiBtdWx0aWxpbmUgaW50byBvbmUgdmVydGV4IGxpc3RcbiAgICBpZiAoY29vcmRzLmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xuICAgIHNlZ3MucHVzaCh7IGNvbWlkOiBjaWQsIGNvb3JkcywgLi4udiB9KTtcbiAgfVxuICBzZWdzLnNvcnQoKGEsIGIpID0+IGIuaHlkcm9zZXEgLSBhLmh5ZHJvc2VxKTsgLy8gZG93bnN0cmVhbSA9IGRlY3JlYXNpbmcgaHlkcm9zZXFcblxuICAvLyBvcmllbnQgZWFjaCBzZWdtZW50IHNvIGl0IGZsb3dzIHN0YXJ0LT5lbmQsIGNoYWluaW5nIGVuZHMgdG8gc3RhcnRzXG4gIGxldCBwcmV2RW5kID0gbnVsbDtcbiAgZm9yIChjb25zdCBzIG9mIHNlZ3MpIHtcbiAgICBsZXQgYyA9IHMuY29vcmRzO1xuICAgIGlmIChwcmV2RW5kICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkU3RhcnQgPSBoYXZlcnNpbmVNKHByZXZFbmRbMV0sIHByZXZFbmRbMF0sIGNbMF1bMV0sIGNbMF1bMF0pO1xuICAgICAgY29uc3QgZEVuZCA9IGhhdmVyc2luZU0ocHJldkVuZFsxXSwgcHJldkVuZFswXSwgY1tjLmxlbmd0aCAtIDFdWzFdLCBjW2MubGVuZ3RoIC0gMV1bMF0pO1xuICAgICAgaWYgKGRFbmQgPCBkU3RhcnQpIGMgPSBjLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBzLmNvb3JkcyA9IGM7XG4gICAgcHJldkVuZCA9IGNbYy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIC8vIHRyaW0gdGhlIGZpcnN0IHNlZ21lbnQgdG8gc3RhcnQgYXQgdGhlIHZlcnRleCBuZWFyZXN0IHRoZSBzcGlsbCBwb2ludFxuICBpZiAoc2Vncy5sZW5ndGgpIHtcbiAgICBjb25zdCBjMCA9IHNlZ3NbMF0uY29vcmRzO1xuICAgIGxldCBtaW5JID0gMCwgbWluRCA9IEluZmluaXR5O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYzAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGxhdCwgbG9uLCBjMFtpXVsxXSwgYzBbaV1bMF0pO1xuICAgICAgaWYgKGQgPCBtaW5EKSB7IG1pbkQgPSBkOyBtaW5JID0gaTsgfVxuICAgIH1cbiAgICBjb25zdCB0cmltbWVkID0gYzAuc2xpY2UobWluSSk7XG4gICAgc2Vnc1swXS5jb29yZHMgPSB0cmltbWVkLmxlbmd0aCA/IHRyaW1tZWQgOiBbYzBbYzAubGVuZ3RoIC0gMV1dO1xuICB9XG5cbiAgLy8gZmxhdHRlbiB0byBhdHRyaWJ1dGVkIHBvaW50cywgZG93bnNhbXBsZSB0byByZXNvbHV0aW9uTVxuICBsZXQgcHRzID0gW107XG4gIGZvciAoY29uc3QgcyBvZiBzZWdzKSB7XG4gICAgbGV0IHNsb3BlID0gcy5zbG9wZTtcbiAgICBpZiAoc2xvcGUgPT09IG51bGwgfHwgc2xvcGUgPT09IHVuZGVmaW5lZCB8fCBzbG9wZSA8IDApIHNsb3BlID0gMC4wMDE7IC8vIC05OTk4ID0gbWlzc2luZ1xuICAgIGZvciAoY29uc3QgcCBvZiBzLmNvb3Jkcykge1xuICAgICAgcHRzLnB1c2goe1xuICAgICAgICBsb246IHBbMF0sIGxhdDogcFsxXSxcbiAgICAgICAgZHJhaW5hZ2VfYXJlYV9rbTI6IHMudG90ZGFzcWttIHx8IDAsXG4gICAgICAgIHNsb3BlLFxuICAgICAgICBmdHlwZTogcy5mdHlwZSwgd2JhcmVhdHlwZTogcy53YmFyZWF0eXBlLFxuICAgICAgICBjb21pZDogcy5jb21pZCxcbiAgICAgICAgZ25pc19uYW1lOiBzLmduaXNfbmFtZSxcbiAgICAgICAgcWVfbWE6IHMucWVfbWEsIHFlX21vbnRobHk6IHMucWVfbW9udGhseSxcbiAgICAgICAgZGl2ZXJnZW5jZTogcy5kaXZlcmdlbmNlIHx8IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKHB0cy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3Qga2VlcCA9IFtwdHNbMF1dO1xuICAgIGxldCBjdW0gPSAwLjA7XG4gICAgbGV0IGxhc3QgPSBwdHNbMF07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSBwdHNbaV07XG4gICAgICBjdW0gKz0gaGF2ZXJzaW5lTShsYXN0LmxhdCwgbGFzdC5sb24sIHAubGF0LCBwLmxvbik7XG4gICAgICBsYXN0ID0gcDtcbiAgICAgIGlmIChjdW0gPj0gcmVzb2x1dGlvbk0pIHsga2VlcC5wdXNoKHApOyBjdW0gPSAwLjA7IH1cbiAgICB9XG4gICAgcHRzID0ga2VlcDtcbiAgfVxuICBsb2coYCAgdHJhY2U6ICR7c2Vncy5sZW5ndGh9IHNlZ21lbnRzIC0+ICR7cHRzLmxlbmd0aH0gcG9pbnRzICgke3NlZ3MubGVuZ3RoID8gc2Vnc1swXS5nbmlzX25hbWUgOiBcIj9cIn0gLi4uKWApO1xuICByZXR1cm4gW3B0cywgc2Vncy5sZW5ndGggPyBzZWdzWzBdLmduaXNfbmFtZSA6IG51bGxdO1xufVxuXG4vKiogQ2xhbXBlZCBsaW5lYXIgaW50ZXJwb2xhdGlvbiAoc2NpcHkgaW50ZXJwMWQgd2l0aCBjbGFtcGVkIGZpbGxfdmFsdWUpLiAqL1xuZnVuY3Rpb24gaW50ZXJwQ2xhbXBlZCh4cywgeXMpIHtcbiAgcmV0dXJuICh4KSA9PiB7XG4gICAgaWYgKHggPD0geHNbMF0pIHJldHVybiB5c1swXTtcbiAgICBpZiAoeCA+PSB4c1t4cy5sZW5ndGggLSAxXSkgcmV0dXJuIHlzW3lzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBpID0gMTtcbiAgICB3aGlsZSAoeHNbaV0gPCB4KSBpKys7XG4gICAgY29uc3QgdCA9ICh4IC0geHNbaSAtIDFdKSAvICh4c1tpXSAtIHhzW2kgLSAxXSk7XG4gICAgcmV0dXJuIHlzW2kgLSAxXSArIHQgKiAoeXNbaV0gLSB5c1tpIC0gMV0pO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1haW4gbW9kZWxcbi8vXG4vLyBTcGxpdCBpbnRvIHR3byBzdGFnZXMgc28gdGhlIGV4cGVuc2l2ZSBwYXJ0IGlzIGNhY2hlYWJsZTpcbi8vICAgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIGNvbmZpZykgIOKAlCBBTEwgbmV0d29yayBJL086IHRyYWNlIGdlb21ldHJ5LCBWQUFzLFxuLy8gICAgIHdpZHRoIHNhbXBsaW5nLCBnYXVnZXMgKyBmbG93cywgc2l0ZS9yZWNlcHRvciBmZWF0dXJlcy4gU2FmZXR5IGZhY3Rvcixcbi8vICAgICBtYXggaG91cnMgZXRjLiBkbyBOT1QgYWZmZWN0IHRoaXMgc3RhZ2UuXG4vLyAgIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcpICAgICAgICDigJQgcHVyZSBtYXRoOiBRIGludGVycCwgTWFubmluZyBkZXB0aCxcbi8vICAgICB2ZWxvY2l0eSB4IHNhZmV0eSwgaW1wb3VuZG1lbnQsIHRyYXZlbCB0aW1lLCBob3VybHkgbWFya2Vycywgc2l0ZSBFVEFzLlxuLy8gICAgIERldGVybWluaXN0aWMgYW5kIHJlLXJ1bm5hYmxlIG9uIHRoZSBzYW1lIGRhdGEgKGZpZWxkcyBhcmUgb3ZlcndyaXR0ZW4sXG4vLyAgICAgcm93cyBhcmUgbmV2ZXIgc3RydWN0dXJhbGx5IG11dGF0ZWQpLlxuLy8gcnVuVHJhY2UoKSBjb21wb3NlcyB0aGUgdHdvIOKAlCBpZGVudGljYWwgYmVoYXZpb3IgdG8gdGhlIG9yaWdpbmFsLlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xuXG4gIGxvZyhgZmV0Y2hUcmFjZURhdGEoJHtsYXQudG9GaXhlZCg0KX0sICR7bG9uLnRvRml4ZWQoNCl9KSAgYXNPZj0ke2NmZy5hc09mIHx8IFwibGl2ZVwifWApO1xuXG4gIC8vIDEuIHRyYWNlIGdlb21ldHJ5IChvbmUgTkxESSBjYWxsKSArIFZBQSBiYXRjaCBqb2luXG4gIGNvbnN0IFtjb21pZCwgc25hcE5hbWUsIHNuYXBEXSA9IGF3YWl0IHNuYXBDb21pZChsYXQsIGxvbiwgY2ZnLm1pblN0cmVhbU9yZGVyKTtcbiAgbG9nKGAgIENPTUlEICR7Y29taWR9YCArIChzbmFwTmFtZSA/IGAgKCR7c25hcE5hbWV9LCBzbmFwcGVkICR7KHNuYXBEIC8gMTAwMCkudG9GaXhlZCgyKX0ga20pYCA6IFwiXCIpKTtcbiAgY29uc3QgZ2VvbXMgPSBhd2FpdCBubGRpRG1GbG93bGluZXMoY29taWQsIGNmZy5tYXhEaXN0YW5jZUttKTtcbiAgbG9nKGAgIE5MREkgRE0gZmxvd2xpbmVzOiAke2dlb21zLnNpemV9YCk7XG4gIGNvbnN0IHZhYSA9IGF3YWl0IHZhYUJhdGNoKFsuLi5nZW9tcy5rZXlzKCldKTtcbiAgY29uc3QgW3B0cywgcml2ZXJOYW1lXSA9IGFzc2VtYmxlVHJhY2UobGF0LCBsb24sIGdlb21zLCB2YWEsIGNmZy5yZXNvbHV0aW9uTSwgbG9nKTtcbiAgaWYgKHB0cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFjZSB0b28gc2hvcnRcIik7XG5cbiAgLy8gcGVyLXBvaW50IGFycmF5cyAobWlycm9ycyB0aGUgRGF0YUZyYW1lKVxuICBjb25zdCBuID0gcHRzLmxlbmd0aDtcbiAgY29uc3Qgcm93cyA9IHB0cy5tYXAoKHApID0+ICh7IC4uLnAgfSkpO1xuICByb3dzWzBdLmRpc3RhbmNlID0gMC4wO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgIHJvd3NbaV0uZGlzdGFuY2UgPSBoYXZlcnNpbmVNKHJvd3NbaSAtIDFdLmxhdCwgcm93c1tpIC0gMV0ubG9uLCByb3dzW2ldLmxhdCwgcm93c1tpXS5sb24pO1xuICB9XG4gIGxldCBjdW0gPSAwLjA7XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7IGN1bSArPSByLmRpc3RhbmNlOyByLmN1bV9kaXN0ID0gY3VtOyB9XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSByLmRyYWluYWdlX2FyZWFfc3FtaSA9IHIuZHJhaW5hZ2VfYXJlYV9rbTIgKiAwLjM4NjEwMjtcblxuICAvLyAyLiB3aWR0aHM6IGZvcm11bGEgYmFzZWxpbmUsIG9wdGlvbmFsIG92ZXJyaWRlIHByb3ZpZGVyLCAyeCBjYXAsIGJhY2t3YXJkIHNtb290aGluZ1xuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgIHIuZm9ybXVsYV93aWR0aCA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzBdO1xuICAgIHIud2lkdGhfbSA9IDAuMDtcbiAgfVxuICAvLyBicmFpZGVkLXJlYWNoIGZsYWc6IGFueSBOSERQbHVzIGRpdmVyZ2VuY2Ugd2l0aGluIH4xIGttICgxMCByb3dzKSDigJQgR0xPVyB3aWR0aHNcbiAgLy8gdGhlcmUgbWVhc3VyZSB0b3RhbCB3ZXR0ZWQgd2lkdGggYWNyb3NzIGJhcnMsIGluZmxhdGluZyBBIGFuZCBraWxsaW5nIHZlbG9jaXR5XG4gIHtcbiAgICBjb25zdCBXID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGxldCBicmFpZGVkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBrID0gTWF0aC5tYXgoMCwgaSAtIFcpOyBrIDw9IE1hdGgubWluKG4gLSAxLCBpICsgVyk7IGsrKykge1xuICAgICAgICBpZiAocm93c1trXS5kaXZlcmdlbmNlID4gMCkgeyBicmFpZGVkID0gdHJ1ZTsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICAgIHJvd3NbaV0uYnJhaWRlZCA9IGJyYWlkZWQ7XG4gICAgfVxuICAgIGNvbnN0IG5iID0gcm93cy5maWx0ZXIoKHIpID0+IHIuYnJhaWRlZCkubGVuZ3RoO1xuICAgIGlmIChuYikgbG9nKGAgIGJyYWlkZWQgZmxhZzogJHtuYn0vJHtufSB0cmFjZSBwb2ludHMgbmVhciBjaGFubmVsIGRpdmVyZ2VuY2VzIChHTE9XIG92ZXJyaWRlIGRpc2FibGVkIHRoZXJlKWApO1xuICB9XG5cbiAgaWYgKGNmZy53aWR0aFByb3ZpZGVyKSB7XG4gICAgLy8gSFIgTkhEUGx1c0lEICE9IE1SIGNvbWlkIOKAlCBzYW1wbGUgc3BhdGlhbGx5LCBpbiB3aW5kb3dzOyBuZXZlciBsZXQgdGhlXG4gICAgLy8gb3ZlcnJpZGUga2lsbCB0aGUgcnVuIChkZWdyYWRlIHRvIGZvcm11bGEgd2lkdGhzKS5cbiAgICBsZXQgbWlkcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBTVEVQID0gY2ZnLndpZHRoV2luZG93UG9pbnRzO1xuICAgICAgY29uc3QgcGFkID0gMC4wMztcbiAgICAgIGZvciAobGV0IGkwID0gMDsgaTAgPCBuOyBpMCArPSBTVEVQKSB7XG4gICAgICAgIGNvbnN0IHdpbiA9IHJvd3Muc2xpY2UoaTAsIGkwICsgU1RFUCk7XG4gICAgICAgIGNvbnN0IGVudiA9IHtcbiAgICAgICAgICB4bWluOiBNYXRoLm1pbiguLi53aW4ubWFwKChyKSA9PiByLmxvbikpIC0gcGFkLFxuICAgICAgICAgIHltaW46IE1hdGgubWluKC4uLndpbi5tYXAoKHIpID0+IHIubGF0KSkgLSBwYWQsXG4gICAgICAgICAgeG1heDogTWF0aC5tYXgoLi4ud2luLm1hcCgocikgPT4gci5sb24pKSArIHBhZCxcbiAgICAgICAgICB5bWF4OiBNYXRoLm1heCguLi53aW4ubWFwKChyKSA9PiByLmxhdCkpICsgcGFkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmZWF0cyA9IGF3YWl0IGNmZy53aWR0aFByb3ZpZGVyKGVudik7IC8vIFt7bGF0LCBsb24sIHdpZHRofV1cbiAgICAgICAgbWlkcy5wdXNoKC4uLmZlYXRzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2coYCAgV0lEVEggT1ZFUlJJREUgRkFJTEVEICgke1N0cmluZyhlKS5zbGljZSgwLCA4MCl9KSAtIGZhbGxpbmcgYmFjayB0byBmb3JtdWxhIHdpZHRoc2ApO1xuICAgICAgbWlkcyA9IFtdO1xuICAgIH1cbiAgICBpZiAobWlkcy5sZW5ndGgpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICAgIGlmIChyLmJyYWlkZWQpIHsgci53aWR0aF9tID0gMC4wOyBjb250aW51ZTsgfSAvLyBmb3JtdWxhIHdpZHRoIG9uIGJyYWlkZWQgcmVhY2hlc1xuICAgICAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgYmVzdFcgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IG0gb2YgbWlkcykge1xuICAgICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKHIubGF0LCByLmxvbiwgbS5sYXQsIG0ubG9uKTtcbiAgICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdFcgPSBtLndpZHRoIHx8IDA7IH1cbiAgICAgICAgfVxuICAgICAgICByLndpZHRoX20gPSBiZXN0RCA8PSBjZmcud2lkdGhTYW1wbGVSYWRpdXNNID8gYmVzdFcgOiAwLjA7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXRjaGVkID0gcm93cy5maWx0ZXIoKHIpID0+IHIud2lkdGhfbSA+IDApLmxlbmd0aDtcbiAgICAgIGxvZyhgICBHTE9XIHNwYXRpYWwgc2FtcGxlOiAke21pZHMubGVuZ3RofSBIUiBzZWdtZW50cywgd2lkdGhzIG1hdGNoZWQgYXQgJHttYXRjaGVkfS8ke259IHRyYWNlIHBvaW50c2ApO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgIHIud2lkdGhfZmluYWxfcmF3ID1cbiAgICAgIHIud2lkdGhfbSA+IDAgJiYgci53aWR0aF9tIDw9IHIuZm9ybXVsYV93aWR0aCAqIDIuMCA/IHIud2lkdGhfbSA6IHIuZm9ybXVsYV93aWR0aDtcbiAgfVxuICAvLyBwYW5kYXMgcm9sbGluZyh3aW5kb3c9NTEsIG1pbl9wZXJpb2RzPTEpLm1lYW4oKSDigJQgdHJhaWxpbmcgd2luZG93XG4gIHtcbiAgICBjb25zdCBXID0gNTE7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHN1bSArPSByb3dzW2ldLndpZHRoX2ZpbmFsX3JhdztcbiAgICAgIGlmIChpID49IFcpIHN1bSAtPSByb3dzW2kgLSBXXS53aWR0aF9maW5hbF9yYXc7XG4gICAgICByb3dzW2ldLndpZHRoX2ZpbmFsID0gc3VtIC8gTWF0aC5taW4oaSArIDEsIFcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIDMuIGRpc2NoYXJnZSBpbnB1dHM6IE5MREkgZG93bnN0cmVhbSBnYXVnZXMgLT4gTldJUyBRICgrREEpLCBsb2NhdGVkIG9uIHRyYWNlXG4gIGNvbnN0IGdhdWdlcyA9IGF3YWl0IG5sZGlEbUdhdWdlcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20pO1xuICBjb25zdCBnaW5mbyA9IGF3YWl0IGdhdWdlSW5mbyhnYXVnZXMubWFwKChnKSA9PiBnLnN0YXRpb25faWQpLCBjZmcuYXNPZik7XG4gIGNvbnN0IGdkID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnYXVnZXMpIHtcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KGcuc3RhdGlvbl9pZCkgfHwge307XG4gICAgaWYgKGkuZGlzY2hhcmdlID09PSB1bmRlZmluZWQgfHwgIWkuZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XG4gICAgbGV0IGJlc3REID0gSW5maW5pdHksIGlkeCA9IDA7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKHJvd3Nba10ubGF0LCByb3dzW2tdLmxvbiwgZy5sYXQsIGcubG9uKTtcbiAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpZHggPSBrOyB9XG4gICAgfVxuICAgIGlmIChiZXN0RCA+IDUwMDApIGNvbnRpbnVlOyAvLyBnYXVnZSBub3Qgb24gb3VyIHRyYWNlIGNvcnJpZG9yXG4gICAgY29uc3QgW3csIGRlcF0gPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKGkuZHJhaW5hZ2VfYXJlYSk7XG4gICAgZ2QucHVzaCh7XG4gICAgICAuLi5nLCBkaXNjaGFyZ2U6IGkuZGlzY2hhcmdlLCBkcmFpbmFnZV9hcmVhOiBpLmRyYWluYWdlX2FyZWEsXG4gICAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiByb3dzW2lkeF0uY3VtX2Rpc3QsXG4gICAgfSk7XG4gIH1cbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcbiAgZm9yIChjb25zdCBnIG9mIGdkKSB7XG4gICAgbG9nKGAgIGdhdWdlICR7Zy5zdGF0aW9uX2lkfSAke2cubmFtZS5zbGljZSgwLCAzOCkucGFkRW5kKDM4KX0gJHtTdHJpbmcoTWF0aC5yb3VuZChnLmRpc2NoYXJnZSkpLnBhZFN0YXJ0KDgpfSBjZnMgQCAkeyhnLnRyYWNlX2Rpc3QgLyAxMDAwKS50b0ZpeGVkKDEpLnBhZFN0YXJ0KDYpfSBrbWApO1xuICB9XG5cbiAgLy8gNC4gc2l0ZS9yZWNlcHRvciBmZWF0dXJlcyAoZmV0Y2hlZCBpbiBwYXJhbGxlbDsgam9pbmVkIGluIGNvbXB1dGVUcmFjZSlcbiAgY29uc3QgZmV0Y2hTZXRzID0gYXN5bmMgKHByb3ZpZGVycykgPT4gUHJvbWlzZS5hbGwoXG4gICAgKHByb3ZpZGVycyB8fCBbXSkubWFwKGFzeW5jIChwKSA9PiAoe1xuICAgICAgYnVmZmVyX206IHAuYnVmZmVyX20gPz8gNDAwLFxuICAgICAgZmVhdHM6IGF3YWl0IHAuZmV0Y2goKSwgLy8gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XVxuICAgIH0pKSxcbiAgKTtcbiAgY29uc3QgW3NpdGVTZXRzLCByZWNlcHRvclNldHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgW2ZldGNoU2V0cyhjZmcuc2l0ZVByb3ZpZGVycyksIGZldGNoU2V0cyhjZmcucmVjZXB0b3JQcm92aWRlcnMpXSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGxhdCwgbG9uLCBjb21pZCwgc25hcE5hbWUsIHNuYXBEaXN0TTogc25hcEQsIHJpdmVyTmFtZSxcbiAgICByb3dzLCBnZCwgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cyxcbiAgICBhc09mOiBjZmcuYXNPZiB8fCBcImxpdmVcIixcbiAgICBmZXRjaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBKb2Jzb24gKFVTR1MgV1JJUiA5Ni00MDEzKVxuLy9cbi8vIER5ZS10cmFjZXIgcmVncmVzc2lvbnMgZnJvbSB+OTgwIHN1YnJlYWNoZXMgLyB+OTAgVVMgcml2ZXJzLiBVbml0czogRGEgbV4yLFxuLy8gUSAmIFFhIG1eMy9zLCBTIGRpbWVuc2lvbmxlc3MsIHZlbG9jaXRpZXMgbS9zLiBFcSAxMi8xMyAod2l0aCBzbG9wZSkgb3Jcbi8vIDE0LzE1ICh3aXRob3V0KS4gTGVhZGluZyBlZGdlIFRsID0gMC44OTAgeCBUcCAoZXEgMTgpLiBQYXNzYWdlOiB1bml0LXBlYWtcbi8vIGNvbmNlbnRyYXRpb24gQ3VwID0gODU3IHggVHBeLTAuNzYwIHggUSdhXi0wLjA3OSAoVHAgaG91cnMsIGVxIDcpLCBhbmRcbi8vIFRkMTAgPSAyZTYgLyBDdXAgc2Vjb25kcyAoZXEgMTkpID0gbGVhZGluZyBlZGdlIC0+IDEwJS1vZi1wZWFrIHRyYWlsaW5nLlxuZXhwb3J0IGZ1bmN0aW9uIGpvYnNvblZlbG9jaXRpZXMoZGFNMiwgUW0zcywgUWFNM3MsIHNsb3BlKSB7XG4gIGlmICghKGRhTTIgPiAwKSB8fCAhKFFtM3MgPiAwKSB8fCAhKFFhTTNzID4gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBnID0gOS44O1xuICBjb25zdCBEcCA9IChNYXRoLnBvdyhkYU0yLCAxLjI1KSAqIE1hdGguc3FydChnKSkgLyBRYU0zczsgLy8gRCdhLCBlcSAxMFxuICBjb25zdCBRcCA9IFFtM3MgLyBRYU0zczsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFEnYSwgZXEgMTFcbiAgY29uc3QgcU92ZXJEYSA9IFFtM3MgLyBkYU0yO1xuICBsZXQgdnAsIHZtcDtcbiAgaWYgKHNsb3BlID4gMC4wMDAwMSkge1xuICAgIGNvbnN0IFggPSBNYXRoLnBvdyhEcCwgMC45MTkpICogTWF0aC5wb3coUXAsIC0wLjQ2OSkgKiBNYXRoLnBvdyhzbG9wZSwgMC4xNTkpICogcU92ZXJEYTtcbiAgICB2cCA9IDAuMDk0ICsgMC4wMTQzICogWDsgICAvLyBlcSAxMlxuICAgIHZtcCA9IDAuMjUgKyAwLjAyICogWDsgICAgIC8vIGVxIDEzICg5OSUgZW52ZWxvcGUg4oCUIGZhc3Rlc3QgcHJvYmFibGUpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjgyMSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY1KSAqIHFPdmVyRGE7XG4gICAgdnAgPSAwLjAyMCArIDAuMDUxICogWDsgICAgLy8gZXEgMTRcbiAgICB2bXAgPSAwLjIgKyAwLjA5MyAqIFg7ICAgICAvLyBlcSAxNVxuICB9XG4gIHJldHVybiB7IHZwLCB2bXAsIHFQcmltZTogUXAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpvYnNvblBhc3NhZ2VIb3Vycyh0cEhvdXJzLCBxUHJpbWUpIHtcbiAgLy8gZXEgNyArIGVxIDE5OiBkdXJhdGlvbiBmcm9tIGxlYWRpbmcgZWRnZSB0byAxMCUtb2YtcGVhayB0cmFpbGluZyBlZGdlXG4gIGlmICghKHRwSG91cnMgPiAwKSB8fCAhKHFQcmltZSA+IDApKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3VwID0gODU3ICogTWF0aC5wb3codHBIb3VycywgLTAuNzYwKSAqIE1hdGgucG93KHFQcmltZSwgLTAuMDc5KTsgLy8gc14tMVxuICByZXR1cm4gMmU2IC8gY3VwIC8gMzYwMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcbiAgY29uc3QgbG9nID0gY2ZnLnZlcmJvc2UgPyAoLi4uYSkgPT4gY29uc29sZS5sb2coLi4uYSkgOiAoKSA9PiB7fTtcbiAgY29uc3QgeyBjb21pZCwgcml2ZXJOYW1lLCByb3dzLCBnZCwgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cyB9ID0gZGF0YTtcbiAgY29uc3QgbiA9IHJvd3MubGVuZ3RoO1xuXG4gIC8vIDUuIGRpc2NoYXJnZTogaW50ZXJwb2xhdGUgYWxvbmcgdHJhY2VcbiAgLy8gbW9udGggZm9yIEVST00gbG9va3VwczogYXNfb2YgbW9udGggaWYgcGlubmVkLCBlbHNlIGN1cnJlbnRcbiAgY29uc3QgZXJvbU1vbnRoID0gZGF0YS5hc09mICYmIGRhdGEuYXNPZiAhPT0gXCJsaXZlXCJcbiAgICA/IHBhcnNlSW50KGRhdGEuYXNPZi5zbGljZSg1LCA3KSwgMTApXG4gICAgOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuXG4gIGxldCBxTWV0aG9kLCBxQ29uZmlkZW5jZTtcbiAgaWYgKGdkLmxlbmd0aCA+PSAyKSB7XG4gICAgY29uc3QgZlEgPSBpbnRlcnBDbGFtcGVkKGdkLm1hcCgoZykgPT4gZy50cmFjZV9kaXN0KSwgZ2QubWFwKChnKSA9PiBnLmRpc2NoYXJnZSkpO1xuICAgIGZvciAoY29uc3QgciBvZiByb3dzKSByLlFfY2ZzID0gTWF0aC5tYXgoZlEoci5jdW1fZGlzdCksIDEuMCk7XG4gICAgcU1ldGhvZCA9IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvblwiOyBxQ29uZmlkZW5jZSA9IFwiSElHSFwiO1xuICB9IGVsc2UgaWYgKGdkLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGcgPSBnZFswXTtcbiAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgICAgci5RX2NmcyA9IE1hdGgubWF4KGcuZGlzY2hhcmdlICogKHIuZHJhaW5hZ2VfYXJlYV9zcW1pIC8gZy5kcmFpbmFnZV9hcmVhKSwgMS4wKTtcbiAgICB9XG4gICAgcU1ldGhvZCA9IFwic2luZ2xlLWdhdWdlLURBLXJhdGlvXCI7IHFDb25maWRlbmNlID0gXCJNRURJVU1cIjtcbiAgICBsb2coXCIgIDEgZ2F1Z2U6IHNjYWxpbmcgYnkgZHJhaW5hZ2UtYXJlYSByYXRpb1wiKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFUk9NIHBlci1yZWFjaCBtb250aGx5IG1vZGVsZWQgZmxvdyAoZ2F1Z2UtYWRqdXN0ZWQ7IGNhcHR1cmVzIHNlYXNvbmFsXG4gICAgLy8geWllbGQg4oCUIE1vbnRhbmEgSnVuZSB2cyBTZXB0ZW1iZXIgZGlmZmVycyB+NXgpIGJlZm9yZSB0aGUgZmxhdCBjb25zdGFudFxuICAgIGNvbnN0IGVyb21PayA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnFlX21vbnRobHkgJiYgci5xZV9tb250aGx5W2Vyb21Nb250aF0gPiAwKS5sZW5ndGg7XG4gICAgaWYgKGVyb21PayA+PSByb3dzLmxlbmd0aCAqIDAuOCkge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgY29uc3QgcWUgPSByLnFlX21vbnRobHkgPyByLnFlX21vbnRobHlbZXJvbU1vbnRoXSA6IG51bGw7XG4gICAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChxZSA+IDAgPyBxZSA6IHIuZHJhaW5hZ2VfYXJlYV9zcW1pICogMi4wLCAxLjApO1xuICAgICAgfVxuICAgICAgcU1ldGhvZCA9IGBlcm9tLW1vbnRobHkgKG1vbnRoICR7ZXJvbU1vbnRofSlgOyBxQ29uZmlkZW5jZSA9IFwiTU9ERVJBVEUg4oCUIG1vZGVsZWQgZmxvdywgbm8gbGl2ZSBnYXVnZVwiO1xuICAgICAgbG9nKGAgIE5PIGdhdWdlczogRVJPTSBtb250aGx5IG1vZGVsZWQgZmxvdyAobW9udGggJHtlcm9tTW9udGh9LCAke2Vyb21Pa30vJHtyb3dzLmxlbmd0aH0gcmVhY2hlcylgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuUV9jZnMgPSBNYXRoLm1heChyLmRyYWluYWdlX2FyZWFfc3FtaSAqIDIuMCwgMS4wKTtcbiAgICAgIHFNZXRob2QgPSBcImRyYWluYWdlLWFyZWEtY29uc3RhbnRcIjsgcUNvbmZpZGVuY2UgPSBcIkxPVyBDT05GSURFTkNFIOKAlCBOTyBHQVVHRVwiO1xuICAgICAgbG9nKFwiICBOTyBnYXVnZXMsIG5vIEVST006IFEgfiAyIGNmcyBwZXIgc3EgbWkgZHJhaW5hZ2Ug4oCUIExPVyBDT05GSURFTkNFXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIDQuIE1hbm5pbmcncyBkZXB0aCBwZXIgcG9pbnQgKGZvcm11bGEgZmFsbGJhY2spLCBWID0gUS9BLCBzYWZldHkgZmFjdG9yXG4gIGNvbnN0IENGU19UT19NM1MgPSBNYXRoLnBvdygzLjI4MSwgMyk7XG4gIGxldCBvayA9IDA7XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci5RX20zcyA9IHIuUV9jZnMgLyBDRlNfVE9fTTNTO1xuICAgIGNvbnN0IGRlcHRoRm9ybXVsYSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oci5kcmFpbmFnZV9hcmVhX3NxbWkpWzFdO1xuICAgIGNvbnN0IGRtID0gY2FsY3VsYXRlRGVwdGhNYW5uaW5nKHIuUV9tM3MsIHIud2lkdGhfZmluYWwsIHIuc2xvcGUsIGNmZy5tYW5uaW5nTik7XG4gICAgaWYgKGRtICE9PSBudWxsICYmIGRtID4gMC4xICYmIGRtIDwgMjApIHsgci5kZXB0aCA9IGRtOyBvaysrOyB9XG4gICAgZWxzZSByLmRlcHRoID0gZGVwdGhGb3JtdWxhO1xuICAgIHIuYXJlYSA9IHIud2lkdGhfZmluYWwgKiByLmRlcHRoO1xuICAgIHIudmVsb2NpdHkgPSAoci5RX20zcyAvIHIuYXJlYSkgKiBjZmcuc2FmZXR5RmFjdG9yO1xuICB9XG4gIGxvZyhgICBNYW5uaW5nJ3MgZGVwdGg6ICR7b2t9LyR7bn0gcG9pbnRzICgke01hdGgucm91bmQoKDEwMCAqIG9rKSAvIG4pfSUpYCk7XG5cbiAgLy8gNS4gaW1wb3VuZG1lbnQgcnVsZTogZmxvd2xpbmUgcGFzc2VzIHRocm91Z2ggYSBMYWtlUG9uZC9SZXNlcnZvaXIgd2F0ZXJib2R5XG4gIC8vIChtaW51cyBrbm93biBSRU1PVkVEIGRhbXMgd2hvc2Ugd2F0ZXJib2R5IGZsYWdzIGxpbmdlciBpbiBOSERQbHVzKVxuICBjb25zdCBleGNsdWRlZCA9IG5ldyBTZXQoWy4uLlJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTLCAuLi4oY2ZnLmltcG91bmRFeGNsdWRlQ29taWRzIHx8IFtdKV0pO1xuICBsZXQgc3RvcElkeCA9IG51bGwsIHJ1bk0gPSAwLjA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltcCA9IChyb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiTGFrZVBvbmRcIiB8fCByb3dzW2ldLndiYXJlYXR5cGUgPT09IFwiUmVzZXJ2b2lyXCIpICYmXG4gICAgICAhZXhjbHVkZWQuaGFzKHJvd3NbaV0uY29taWQpO1xuICAgIHJvd3NbaV0uaW1wb3VuZGVkID0gaW1wO1xuICAgIGlmIChpbXApIHtcbiAgICAgIHJ1bk0gKz0gcm93c1tpXS5kaXN0YW5jZTtcbiAgICAgIGlmIChydW5NID49IGNmZy5pbXBvdW5kU3RvcEttICogMTAwMCkgeyBzdG9wSWR4ID0gaTsgYnJlYWs7IH1cbiAgICB9IGVsc2UgcnVuTSA9IDAuMDtcbiAgfVxuICBsZXQgaW1wb3VuZE5vdGUgPSBudWxsO1xuICBsZXQgZGYgPSByb3dzO1xuICBpZiAoc3RvcElkeCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5hbWUgPSByb3dzW3N0b3BJZHhdLmduaXNfbmFtZSB8fCBcImltcG91bmRtZW50XCI7XG4gICAgaW1wb3VuZE5vdGUgPVxuICAgICAgYFRyYWNlIHJlYWNoZXMgYW4gaW1wb3VuZGVkIHJlYWNoICgke25hbWV9KSBhdCBgICtcbiAgICAgIGAkeyhyb3dzW3N0b3BJZHhdLmN1bV9kaXN0IC8gMTAwMCkudG9GaXhlZCgxKX0ga20g4oCUIHRyYXZlbCB0aW1lIGJleW9uZCBgICtcbiAgICAgIGB0aGlzIHBvaW50IGlzIE5PVCBtb2RlbGVkIChyZXNlcnZvaXIgdHJhbnNpdCkuYDtcbiAgICBkZiA9IHJvd3Muc2xpY2UoMCwgc3RvcElkeCArIDEpO1xuICAgIGxvZyhgICBJTVBPVU5ETUVOVCBTVE9QOiAke2ltcG91bmROb3RlfWApO1xuICB9XG5cbiAgLy8gNi4gdHJhdmVsIHRpbWUsIGN1dG9mZiwgaG91cmx5IG1hcmtlcnNcbiAgY29uc3Qgam9ic29uID0gY2ZnLnRpbWluZ01vZGVsID09PSBcImpvYnNvblwiO1xuICBjb25zdCBDRlMgPSBNYXRoLnBvdygzLjI4MSwgMyk7XG4gIGxldCBjdW1UID0gMC4wLCB0UGVhayA9IDAuMCwgdEZhc3QgPSAwLjAsIGpvYnNvbkRlZ3JhZGVkID0gMDtcbiAgZm9yIChjb25zdCByIG9mIGRmKSB7XG4gICAgci5zZWdfdGltZSA9IHIuZGlzdGFuY2UgLyByLnZlbG9jaXR5O1xuICAgIGN1bVQgKz0gci5zZWdfdGltZTtcbiAgICByLmN1bV90aW1lID0gY3VtVCAvIDM2MDA7IC8vIGh5ZHJhdWxpYyAoeCBzYWZldHkpIOKAlCBhbHdheXMgY29tcHV0ZWQ7IGZlZWRzIGxlZ2FjeSBtb2RlXG4gICAgaWYgKGpvYnNvbikge1xuICAgICAgY29uc3QgZGFNMiA9IChyLmRyYWluYWdlX2FyZWFfa20yIHx8IDApICogMWU2O1xuICAgICAgY29uc3QgUWFNM3MgPSByLnFlX21hID4gMCA/IHIucWVfbWEgLyBDRlMgOiBudWxsO1xuICAgICAgY29uc3QganYgPSBRYU0zcyA/IGpvYnNvblZlbG9jaXRpZXMoZGFNMiwgci5RX20zcywgUWFNM3MsIHIuc2xvcGUpIDogbnVsbDtcbiAgICAgIGxldCB2cCwgdm1wLCBxUHJpbWU7XG4gICAgICBpZiAoanYpIHsgKHsgdnAsIHZtcCwgcVByaW1lIH0gPSBqdik7IH1cbiAgICAgIGVsc2UgeyB2cCA9IHIudmVsb2NpdHkgLyBjZmcuc2FmZXR5RmFjdG9yOyB2bXAgPSB2cCAqIDI7IHFQcmltZSA9IDE7IGpvYnNvbkRlZ3JhZGVkKys7IH1cbiAgICAgIHRQZWFrICs9IHIuZGlzdGFuY2UgLyB2cDtcbiAgICAgIHRGYXN0ICs9IHIuZGlzdGFuY2UgLyB2bXA7XG4gICAgICByLnRfcGVhayA9IHRQZWFrIC8gMzYwMDtcbiAgICAgIHIudF9sZWFkID0gMC44OTAgKiByLnRfcGVhazsgICAgICAgICAgICAgIC8vIGVxIDE4IOKAlCBtb3N0IHByb2JhYmxlIGZpcnN0IGFycml2YWxcbiAgICAgIHIudF9sZWFkX21pbiA9IDAuODkwICogKHRGYXN0IC8gMzYwMCk7ICAgIC8vIDk5JSBlbnZlbG9wZSDigJQgZWFybGllc3QgY3JlZGlibGUgYXJyaXZhbFxuICAgICAgY29uc3QgdGQxMCA9IGpvYnNvblBhc3NhZ2VIb3VycyhyLnRfcGVhaywgcVByaW1lKTtcbiAgICAgIHIudF9jbGVhciA9IHRkMTAgIT09IG51bGwgPyByLnRfbGVhZCArIHRkMTAgOiBudWxsOyAvLyAxMCUtb2YtcGVhayB0cmFpbGluZyBlZGdlXG4gICAgfVxuICB9XG4gIGlmIChqb2Jzb24gJiYgam9ic29uRGVncmFkZWQpIGxvZyhgICBKb2Jzb246ICR7am9ic29uRGVncmFkZWR9IHBvaW50cyBsYWNrZWQgRVJPTSBRYSAoaHlkcmF1bGljIGZhbGxiYWNrKWApO1xuICBjb25zdCB0aW1lT2YgPSAocikgPT4gKGpvYnNvbiA/IHIudF9sZWFkIDogci5jdW1fdGltZSk7XG4gIGRmID0gZGYuZmlsdGVyKChyKSA9PiB0aW1lT2YocikgPCBjZmcubWF4SG91cnMpO1xuICBjb25zdCBtYXhDdW1UaW1lID0gZGYubGVuZ3RoID8gdGltZU9mKGRmW2RmLmxlbmd0aCAtIDFdKSA6IDA7XG4gIGNvbnN0IG5lYXJlc3RSb3cgPSAoZmllbGQsIHRhcmdldCkgPT4ge1xuICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGRmLmxlbmd0aDsgaysrKSB7XG4gICAgICBjb25zdCBkID0gTWF0aC5hYnMoZGZba11bZmllbGRdIC0gdGFyZ2V0KTtcbiAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfSAvLyBmaXJzdCBvY2N1cnJlbmNlIG9mIG1pbiAocGFuZGFzIGlkeG1pbilcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH07XG4gIGNvbnN0IGhvdXJseSA9IFtdO1xuICBmb3IgKGxldCBob3VyID0gMTsgaG91ciA8PSBjZmcubWF4SG91cnM7IGhvdXIrKykge1xuICAgIGlmIChtYXhDdW1UaW1lIDwgaG91ciAmJiBNYXRoLmFicyhtYXhDdW1UaW1lIC0gaG91cikgPiAwLjUpIGJyZWFrO1xuICAgIGNvbnN0IGkgPSBuZWFyZXN0Um93KGpvYnNvbiA/IFwidF9sZWFkXCIgOiBcImN1bV90aW1lXCIsIGhvdXIpO1xuICAgIGNvbnN0IGggPSB7XG4gICAgICBob3VyLFxuICAgICAgbGF0OiBkZltpXS5sYXQsIGxvbjogZGZbaV0ubG9uLFxuICAgICAgY3VtX2Rpc3Rfa206IGRmW2ldLmN1bV9kaXN0IC8gMTAwMCxcbiAgICAgIHZlbG9jaXR5X21waDogZGZbaV0udmVsb2NpdHkgKiAyLjIzNjk0LFxuICAgIH07XG4gICAgaWYgKGpvYnNvbikge1xuICAgICAgLy8gYmFuZCBhdCB0aGlzIGhvdXI6IGJ1bGsgKHBlYWspIHBvc2l0aW9uIC4uIGZhcnRoZXN0IGNyZWRpYmxlICg5OSUgbGVhZGluZylcbiAgICAgIGNvbnN0IGlQZWFrID0gbmVhcmVzdFJvdyhcInRfcGVha1wiLCBob3VyKTtcbiAgICAgIGNvbnN0IGlGYXIgPSBuZWFyZXN0Um93KFwidF9sZWFkX21pblwiLCBob3VyKTtcbiAgICAgIGguYmFuZCA9IHtcbiAgICAgICAgcGVhazogeyBpOiBpUGVhaywgbGF0OiBkZltpUGVha10ubGF0LCBsb246IGRmW2lQZWFrXS5sb24sIGN1bV9kaXN0X2ttOiBkZltpUGVha10uY3VtX2Rpc3QgLyAxMDAwIH0sXG4gICAgICAgIGZhc3Rlc3Q6IHsgaTogaUZhciwgbGF0OiBkZltpRmFyXS5sYXQsIGxvbjogZGZbaUZhcl0ubG9uLCBjdW1fZGlzdF9rbTogZGZbaUZhcl0uY3VtX2Rpc3QgLyAxMDAwIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBob3VybHkucHVzaChoKTtcbiAgfVxuXG4gIC8vIDcuIHNpdGUgRVRBcyArIHJlY2VwdG9yIHdhcm5pbmdzIChuZWFyZXN0IHRyYWNlIHBvaW50IHdpdGhpbiBidWZmZXIpO1xuICAvLyBmZWF0dXJlcyB3ZXJlIHByZS1mZXRjaGVkIGludG8gZGF0YS5zaXRlU2V0cy9yZWNlcHRvclNldHNcbiAgZnVuY3Rpb24gcHJveGltaXR5KHNldCkge1xuICAgIGNvbnN0IGZlYXRzID0gc2V0LmZlYXRzOyAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXG4gICAgY29uc3QgYnVmID0gc2V0LmJ1ZmZlcl9tID8/IDQwMDtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHMpIHtcbiAgICAgIGlmIChmLmxhdCA9PT0gdW5kZWZpbmVkIHx8IGYubG9uID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgICAgbGV0IGJlc3REID0gSW5maW5pdHksIGkgPSAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShkZltrXS5sYXQsIGRmW2tdLmxvbiwgZi5sYXQsIGYubG9uKTtcbiAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGkgPSBrOyB9XG4gICAgICB9XG4gICAgICBpZiAoYmVzdEQgPD0gYnVmKSB7XG4gICAgICAgIGNvbnN0IHsgbGF0OiBfYSwgbG9uOiBfYiwgLi4ucmVzdCB9ID0gZjtcbiAgICAgICAgY29uc3Qgcm93ID0ge1xuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgZXRhX2hyOiBNYXRoLnJvdW5kKHRpbWVPZihkZltpXSkgKiAxMDApIC8gMTAwLFxuICAgICAgICAgIGRpc3Rfa206IE1hdGgucm91bmQoKGRmW2ldLmN1bV9kaXN0IC8gMTAwMCkgKiAxMCkgLyAxMCxcbiAgICAgICAgICBvZmZzZXRfbTogTWF0aC5yb3VuZChiZXN0RCksXG4gICAgICAgICAgLy8gbW9kZWxlZCBoeWRyYXVsaWNzIGF0IHRoZSBzaXRlJ3MgdHJhY2UgcG9pbnQg4oCUIGZlZWRzIGJvb20gc2l6aW5nXG4gICAgICAgICAgcml2ZXJfd2lkdGhfbTogTWF0aC5yb3VuZChkZltpXS53aWR0aF9maW5hbCAqIDEwKSAvIDEwLFxuICAgICAgICAgIHZlbG9jaXR5X21zOiBNYXRoLnJvdW5kKGRmW2ldLnZlbG9jaXR5ICogMTAwMCkgLyAxMDAwLFxuICAgICAgICAgIGRlcHRoX206IE1hdGgucm91bmQoZGZbaV0uZGVwdGggKiAxMDApIC8gMTAwLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoam9ic29uKSB7XG4gICAgICAgICAgcm93LmV0YV9lYXJseV9ociA9IE1hdGgucm91bmQoZGZbaV0udF9sZWFkX21pbiAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgcm93LmV0YV9wZWFrX2hyID0gTWF0aC5yb3VuZChkZltpXS50X3BlYWsgKiAxMDApIC8gMTAwO1xuICAgICAgICAgIHJvdy5jbGVhcl9ociA9IGRmW2ldLnRfY2xlYXIgIT09IG51bGwgPyBNYXRoLnJvdW5kKGRmW2ldLnRfY2xlYXIgKiAxMDApIC8gMTAwIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBvdXQucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cbiAgICBvdXQuc29ydCgoYSwgYikgPT4gYS5ldGFfaHIgLSBiLmV0YV9ocik7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGNvbnN0IHNpdGVzID0gW107XG4gIGZvciAoY29uc3QgcyBvZiBzaXRlU2V0cyB8fCBbXSkgc2l0ZXMucHVzaCguLi5wcm94aW1pdHkocykpO1xuICBzaXRlcy5zb3J0KChhLCBiKSA9PiBhLmV0YV9ociAtIGIuZXRhX2hyKTtcbiAgY29uc3Qgd2FybmluZ3MgPSBpbXBvdW5kTm90ZSA/IFtpbXBvdW5kTm90ZV0gOiBbXTtcbiAgaWYgKHFDb25maWRlbmNlICE9PSBcIkhJR0hcIikgd2FybmluZ3MudW5zaGlmdChgRmxvdyBlc3RpbWF0ZTogJHtxQ29uZmlkZW5jZX0gKCR7cU1ldGhvZH0pYCk7XG4gIGZvciAoY29uc3QgcyBvZiByZWNlcHRvclNldHMgfHwgW10pIHtcbiAgICBmb3IgKGNvbnN0IHIgb2YgcHJveGltaXR5KHMpKSB7XG4gICAgICB3YXJuaW5ncy5wdXNoKFxuICAgICAgICBgUmVjZXB0b3IgJyR7ci5uYW1lfScgfiR7ci5vZmZzZXRfbX0gbSBvZmYgdHJhY2UgYXQgaHIgJHtyLmV0YV9ocn0gKCR7ci5kaXN0X2ttfSBrbSBkb3duc3RyZWFtKWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpc3RhbmNlS20gPSBkZi5sZW5ndGggPyBkZltkZi5sZW5ndGggLSAxXS5jdW1fZGlzdCAvIDEwMDAgOiAwO1xuICBjb25zdCBhdmdWZWwgPSBkZi5sZW5ndGggPyBkZi5yZWR1Y2UoKHMsIHIpID0+IHMgKyByLnZlbG9jaXR5LCAwKSAvIGRmLmxlbmd0aCA6IDA7XG4gIGNvbnN0IGdsb3dNYXRjaGVkID0gcm93cy5maWx0ZXIoKHIpID0+IHIud2lkdGhfbSA+IDApLmxlbmd0aDtcbiAgY29uc3QgYnJhaWRlZE4gPSByb3dzLmZpbHRlcigocikgPT4gci5icmFpZGVkKS5sZW5ndGg7XG5cbiAgLy8gcHJvdmVuYW5jZSDigJQgZW5vdWdoIHRvIHJlY29uc3RydWN0IGFueSBvdXRwdXQgaW4gYW4gYWZ0ZXItYWN0aW9uIHJldmlld1xuICBjb25zdCBydW5SZWNvcmQgPSB7XG4gICAgZW5naW5lX3ZlcnNpb246IEVOR0lORV9WRVJTSU9OLFxuICAgIGdlbmVyYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIGRhdGFfZmV0Y2hlZF9hdDogZGF0YS5mZXRjaGVkQXQgfHwgbnVsbCxcbiAgICBzcGlsbF9wb2ludDogeyBsYXQ6IGRhdGEubGF0LCBsb246IGRhdGEubG9uIH0sXG4gICAgc25hcDogeyBjb21pZCwgcml2ZXI6IHJpdmVyTmFtZSwgc25hcHBlZF9mcm9tX206IGRhdGEuc25hcERpc3RNICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKGRhdGEuc25hcERpc3RNIHx8IDApIDogbnVsbCB9LFxuICAgIHRpbWluZ19tb2RlbDogY2ZnLnRpbWluZ01vZGVsLFxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXG4gICAgbWF4X2hvdXJzOiBjZmcubWF4SG91cnMsXG4gICAgYXNfb2Y6IGRhdGEuYXNPZiB8fCBcImxpdmVcIixcbiAgICBxX21ldGhvZDogcU1ldGhvZCxcbiAgICBxX2NvbmZpZGVuY2U6IHFDb25maWRlbmNlLFxuICAgIGdhdWdlczogZ2QubWFwKChnKSA9PiAoeyBzdGF0aW9uX2lkOiBnLnN0YXRpb25faWQsIG5hbWU6IGcubmFtZSwgZGlzY2hhcmdlX2NmczogZy5kaXNjaGFyZ2UsIHRyYWNlX2ttOiBNYXRoLnJvdW5kKGcudHJhY2VfZGlzdCAvIDEwMCkgLyAxMCB9KSksXG4gICAgZXJvbV9tb250aDogcU1ldGhvZC5zdGFydHNXaXRoKFwiZXJvbVwiKSA/IGVyb21Nb250aCA6IG51bGwsXG4gICAgd2lkdGhfc291cmNlOiB7IGdsb3dfbWF0Y2hlZF9wb2ludHM6IGdsb3dNYXRjaGVkLCB0b3RhbF9wb2ludHM6IHJvd3MubGVuZ3RoLCBicmFpZGVkX3BvaW50c19mb3JtdWxhX3dpZHRoOiBicmFpZGVkTiB9LFxuICAgIGpvYnNvbl9kZWdyYWRlZF9wb2ludHM6IGpvYnNvbiA/IGpvYnNvbkRlZ3JhZGVkIDogbnVsbCxcbiAgICBpbXBvdW5kX2V4Y2x1c2lvbnNfYXBwbGllZDogWy4uLmV4Y2x1ZGVkXS5maWx0ZXIoKGMpID0+IHJvd3Muc29tZSgocikgPT4gci5jb21pZCA9PT0gYykpLFxuICAgIGltcG91bmRfc3RvcF9rbTogc3RvcElkeCAhPT0gbnVsbCA/IE1hdGgucm91bmQocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMCkgLyAxMCA6IG51bGwsXG4gIH07XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJpdmVyX25hbWU6IHJpdmVyTmFtZSxcbiAgICBjb21pZCxcbiAgICBhc19vZjogZGF0YS5hc09mIHx8IFwibGl2ZVwiLFxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXG4gICAgdGltaW5nX21vZGVsOiBjZmcudGltaW5nTW9kZWwsXG4gICAgcV9tZXRob2Q6IHFNZXRob2QsXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcbiAgICBnYXVnZXNfdXNlZDogZ2QubWFwKChnKSA9PiAoe1xuICAgICAgc3RhdGlvbl9pZDogZy5zdGF0aW9uX2lkLCBuYW1lOiBnLm5hbWUsXG4gICAgICBkaXNjaGFyZ2U6IGcuZGlzY2hhcmdlLCB0cmFjZV9kaXN0OiBnLnRyYWNlX2Rpc3QsXG4gICAgfSkpLFxuICAgIGRpc3RhbmNlX2ttXzI0aDogZGlzdGFuY2VLbSxcbiAgICBhdmdfdmVsb2NpdHlfbXBoOiBhdmdWZWwgKiAyLjIzNjk0LFxuICAgIGltcG91bmRfc3RvcDogaW1wb3VuZE5vdGUsXG4gICAgaG91cmx5LFxuICAgIHNpdGVzLFxuICAgIHdhcm5pbmdzLFxuICAgIHJ1blJlY29yZCxcbiAgICB0cmFjZTogZGYsIC8vIGZ1bGwgcm93IGFycmF5IGZvciBpbnNwZWN0aW9uL2dlb2pzb24gZXhwb3J0XG4gIH07XG4gIGxvZyhcbiAgICBgICBSRVNVTFQ6ICR7ZGlzdGFuY2VLbS50b0ZpeGVkKDEpfSBrbSBpbiA8PSAke2NmZy5tYXhIb3Vyc30gaCwgYCArXG4gICAgYGF2ZyAke3Jlc3VsdC5hdmdfdmVsb2NpdHlfbXBoLnRvRml4ZWQoMil9IG1waCwgJHtzaXRlcy5sZW5ndGh9IHNpdGVzLCAke3dhcm5pbmdzLmxlbmd0aH0gd2FybmluZ3NgLFxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuVHJhY2UobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnKTtcbiAgcmV0dXJuIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcpO1xufVxuXG4vKipcbiAqIEJvb20gc2l6aW5nIGZyb20gbW9kZWxlZCBoeWRyYXVsaWNzIChwbGFubmluZy1sZXZlbCwgZm9yIEdSUHMgdGhhdCBjYXJyeSBub1xuICogZXF1aXBtZW50IHF1YW50aXRpZXMpLiBTdGFuZGFyZCBjb250YWlubWVudCBydWxlOiBvaWwgZW50cmFpbnMgdW5kZXIgYSBib29tXG4gKiB3aGVuIHRoZSBmbG93IGNvbXBvbmVudCBub3JtYWwgdG8gaXQgZXhjZWVkcyB+MC4zNSBtL3MgKDAuNyBrdCksIHNvIGluXG4gKiBmYXN0ZXIgd2F0ZXIgdGhlIGJvb20gaXMgYW5nbGVkIHdpdGggc2luKHRoZXRhKSA9IGVudHJhaW5tZW50L3ZlbG9jaXR5IGFuZFxuICogdGhlIHJlcXVpcmVkIGxlbmd0aCBncm93cyB0byB3aWR0aC9zaW4odGhldGEpLiBBbmNob3Igc2V0cyBmcm9tIGxlbmd0aC5cbiAqIEFuZ2xlcyBiZWxvdyB+MTUgZGVnICh2ID4gfjEuMzUgbS9zKSBhcmUgZmxhZ2dlZDogdXNlIGNhc2NhZGVkIHNob3J0ZXIgYm9vbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZUJvb21OZWVkcyh3aWR0aE0sIHZlbG9jaXR5TXMsIG9wdHMgPSB7fSkge1xuICBjb25zdCBlbnRyYWluID0gb3B0cy5lbnRyYWlubWVudE1zID8/IDAuMzU7XG4gIGNvbnN0IHJlc2VydmVQY3QgPSBvcHRzLnJlc2VydmVQY3QgPz8gMjA7XG4gIGNvbnN0IGFuY2hvclNwYWNpbmdGdCA9IG9wdHMuYW5jaG9yU3BhY2luZ0Z0ID8/IDEwMDtcbiAgaWYgKCEod2lkdGhNID4gMCkgfHwgISh2ZWxvY2l0eU1zID49IDApKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc2luVGhldGEgPSB2ZWxvY2l0eU1zID4gZW50cmFpbiA/IGVudHJhaW4gLyB2ZWxvY2l0eU1zIDogMTtcbiAgY29uc3QgYW5nbGVEZWcgPSAoTWF0aC5hc2luKHNpblRoZXRhKSAqIDE4MCkgLyBNYXRoLlBJO1xuICBjb25zdCBsZW5ndGhGdCA9ICh3aWR0aE0gLyBzaW5UaGV0YSkgKiAzLjI4MDg0ICogKDEgKyByZXNlcnZlUGN0IC8gMTAwKTtcbiAgY29uc3QgYm9vbUZ0ID0gTWF0aC5jZWlsKGxlbmd0aEZ0IC8gNTApICogNTA7IC8vIHJvdW5kIHVwIHRvIDUwLWZ0IHN0aWNrc1xuICBjb25zdCBhbmNob3JzID0gTWF0aC5tYXgoMiwgTWF0aC5jZWlsKGJvb21GdCAvIGFuY2hvclNwYWNpbmdGdCkgKyAxKTtcbiAgcmV0dXJuIHtcbiAgICBib29tX2Z0OiBib29tRnQsXG4gICAgYm9vbV9hbmdsZV9kZWc6IE1hdGgucm91bmQoYW5nbGVEZWcpLFxuICAgIGFuY2hvcnMsXG4gICAgZGVmbGVjdGlvbjogdmVsb2NpdHlNcyA+IGVudHJhaW4sXG4gICAgY2FzY2FkZV9hZHZpc2VkOiBhbmdsZURlZyA8IDE1LCAvLyB0b28gZmFzdCBmb3IgYSBzaW5nbGUgc3dlZXAg4oCUIGNhc2NhZGUgYm9vbXNcbiAgfTtcbn1cblxuLyoqIFRyYWNlIGxpbmUgKyBob3VybHkgbWFya2VycyBhcyBhIEdlb0pTT04gRmVhdHVyZUNvbGxlY3Rpb24gKHdpZGdldCBwcmV2aWV3KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0dlb0pzb24ocmVzdWx0KSB7XG4gIGNvbnN0IGRmID0gcmVzdWx0LnRyYWNlO1xuICBjb25zdCBmYyA9IHtcbiAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBraW5kOiBcInRyYWNlXCIsIHJpdmVyOiByZXN1bHQucml2ZXJfbmFtZSxcbiAgICAgICAgICBkaXN0YW5jZV9rbV8yNGg6IHJlc3VsdC5kaXN0YW5jZV9rbV8yNGgsXG4gICAgICAgIH0sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IGRmLm1hcCgocikgPT4gW1xuICAgICAgICAgICAgTWF0aC5yb3VuZChyLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoci5sYXQgKiAxZTYpIC8gMWU2LFxuICAgICAgICAgIF0pLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBmb3IgKGNvbnN0IGggb2YgcmVzdWx0LmhvdXJseSkge1xuICAgIGZjLmZlYXR1cmVzLnB1c2goe1xuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7IGtpbmQ6IFwiaG91clwiLCBob3VyOiBoLmhvdXIsIGN1bV9kaXN0X2ttOiBoLmN1bV9kaXN0X2ttLCB2ZWxvY2l0eV9tcGg6IGgudmVsb2NpdHlfbXBoIH0sXG4gICAgICBnZW9tZXRyeToge1xuICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbTWF0aC5yb3VuZChoLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoaC5sYXQgKiAxZTYpIC8gMWU2XSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZjO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvaW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWxpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxuICogU3BpbGwgVHJhamVjdG9yeSB3aWRnZXQg4oCUIHJ1bnRpbWUuXG4gKlxuICogQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiDihpIgY2xpY2sgdGhlIG1hcCDihpIgdGhlIGdvbGRlbi10ZXN0ZWQgdHJhY2UgZW5naW5lXG4gKiAodHJhY2UtZW5naW5lLnRzLCBwYXJpdHktdmVyaWZpZWQgdnMgdGhlIFB5dGhvbiBvcmFjbGUpIGRyYXdzIGFuIGVwaGVtZXJhbFxuICogdGltZS1jb2xvcmVkIHBsdW1lIG9uIGEgY2xpZW50LXNpZGUgR3JhcGhpY3NMYXllciB3aXRoIGhvdXJseSBtYXJrZXJzLFxuICogcGx1cyBhbiBFVEEtc29ydGVkIHN0cmF0ZWd5LXNpdGUgbGlzdCBhbmQgcmVjZXB0b3Igd2FybmluZ3MuXG4gKiBOb3RoaW5nIGlzIHBlcnNpc3RlZCDigJQgQ2xlYXIgKG9yIHdpZGdldCB1bm1vdW50KSByZW1vdmVzIGV2ZXJ5dGhpbmcuXG4gKi9cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYydcbmltcG9ydCBQb2x5bGluZSBmcm9tICdlc3JpL2dlb21ldHJ5L1BvbHlsaW5lJ1xuaW1wb3J0IFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnXG5pbXBvcnQgeyBnZW9kZXNpY0xlbmd0aCB9IGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnLCBTaXRlTGF5ZXJDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBmZXRjaFRyYWNlRGF0YSwgY29tcHV0ZVRyYWNlLCBlc3RpbWF0ZUJvb21OZWVkcyB9IGZyb20gJy4uL3RyYWNlLWVuZ2luZSdcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gPSBSZWFjdFxuXG4vLyBFVEEgY29sb3IgYmFuZHM6IDwzIGhyIC8gM+KAkzEyIGhyIC8gMTLigJMyNCBoclxuY29uc3QgQkFORF9DT0xPUlM6IEFycmF5PFtudW1iZXIsIHN0cmluZ10+ID0gW1xuICBbMywgJyNkNzE5MWMnXSxcbiAgWzEyLCAnI2ZkYWU2MSddLFxuICBbMjQsICcjMmM3YmI2J10sXG5dXG5jb25zdCBiYW5kQ29sb3IgPSAoaHI6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGZvciAoY29uc3QgW2xpbSwgY10gb2YgQkFORF9DT0xPUlMpIGlmIChociA8IGxpbSkgcmV0dXJuIGNcbiAgcmV0dXJuICcjMmM3YmI2J1xufVxuY29uc3QgaGV4VG9SZ2IgPSAoaGV4OiBzdHJpbmcpOiBudW1iZXJbXSA9PiBbXG4gIHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSwgcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNiksXG5dXG5cbmludGVyZmFjZSBTaXRlUm93IHtcbiAgbmFtZTogc3RyaW5nXG4gIGV0YV9ocjogbnVtYmVyXG4gIGRpc3Rfa206IG51bWJlclxuICBvZmZzZXRfbTogbnVtYmVyXG4gIHJpdmVyX3dpZHRoX20/OiBudW1iZXJcbiAgdmVsb2NpdHlfbXM/OiBudW1iZXJcbiAgYm9vbT86IHsgYm9vbV9mdDogbnVtYmVyLCBhbmNob3JzOiBudW1iZXIsIGJvb21fYW5nbGVfZGVnPzogbnVtYmVyLCBjYXNjYWRlX2FkdmlzZWQ/OiBib29sZWFuLCBzb3VyY2U6ICdkcmF3bicgfCAnZXN0JyB9XG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3Qgbm9ybUd1aWQgPSAodjogYW55KTogc3RyaW5nID0+IFN0cmluZyh2IHx8ICcnKS5yZXBsYWNlKC9be31dL2csICcnKS50b0xvd2VyQ2FzZSgpXG5cbi8qKiBTdW0gZ2VvZGVzaWMgZmVldCBvZiBkcmF3biBib29tIGxpbmVzIHBlciBzaXRlIGtleSAoZS5nLiBTbmFrZSBCb29tX0xpbmVzKS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRHJhd25Cb29tKGNmZzogeyB1cmw6IHN0cmluZywgc2l0ZUtleUZpZWxkOiBzdHJpbmcsIHdoZXJlPzogc3RyaW5nIH0pOiBQcm9taXNlPE1hcDxzdHJpbmcsIG51bWJlcj4+IHtcbiAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBjZmcudXJsIH0pXG4gIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXG4gIHEud2hlcmUgPSBjZmcud2hlcmUgfHwgJzE9MSdcbiAgcS5vdXRGaWVsZHMgPSBbY2ZnLnNpdGVLZXlGaWVsZF1cbiAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICBjb25zdCBvdXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gIGZvciAoY29uc3QgZiBvZiBmcy5mZWF0dXJlcykge1xuICAgIGNvbnN0IGtleSA9IG5vcm1HdWlkKGYuYXR0cmlidXRlc1tjZmcuc2l0ZUtleUZpZWxkXSlcbiAgICBpZiAoIWtleSB8fCAhZi5nZW9tZXRyeSkgY29udGludWVcbiAgICBjb25zdCBmdCA9IGdlb2Rlc2ljTGVuZ3RoKGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lLCAnZmVldCcpXG4gICAgaWYgKGZ0ID4gMCkgb3V0LnNldChrZXksIChvdXQuZ2V0KGtleSkgfHwgMCkgKyBmdClcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IFtqbXYsIHNldEptdl0gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4obnVsbClcbiAgY29uc3QgW2FybWluZywgc2V0QXJtaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdDbGljayBcIlNldCBzcGlsbCBwb2ludFwiLCB0aGVuIGNsaWNrIHRoZSByaXZlci4nKVxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55PihudWxsKVxuICBjb25zdCBbc2FmZXR5LCBzZXRTYWZldHldID0gdXNlU3RhdGU8bnVtYmVyPihwcm9wcy5jb25maWcuc2FmZXR5RmFjdG9yID8/IDEuNSlcbiAgY29uc3QgW2RpYWcsIHNldERpYWddID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBsYXllclJlZiA9IHVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllcj4obnVsbClcbiAgY29uc3QgY2xpY2tIYW5kbGVSZWYgPSB1c2VSZWY8X19lc3JpLkhhbmRsZT4obnVsbClcbiAgLy8gY2FjaGVkIGh5ZHJvbG9neSBmb3IgdGhlIGN1cnJlbnQgc3BpbGwgcG9pbnQg4oCUIHNhZmV0eS1mYWN0b3IgY2hhbmdlc1xuICAvLyByZWNvbXB1dGUgZnJvbSB0aGlzIGluc3RhbnRseSBpbnN0ZWFkIG9mIHJlLWZldGNoaW5nIE5MREkvTldJU1xuICBjb25zdCBjYWNoZVJlZiA9IHVzZVJlZjx7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciwgZGF0YTogYW55LCBkcmF3bjogTWFwPHN0cmluZywgbnVtYmVyPiwgZmV0Y2hOb3Rlczogc3RyaW5nW10gfSB8IG51bGw+KG51bGwpXG5cbiAgLy8gb25lIGdyYXBoaWNzIGxheWVyIHBlciB3aWRnZXQgbGlmZXRpbWU7IHJlbW92ZWQgb24gdW5tb3VudCAoZXBoZW1lcmFsKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKVxuICAgICAgaWYgKGxheWVyUmVmLmN1cnJlbnQgJiYgam12KSBqbXYudmlldy5tYXAucmVtb3ZlKGxheWVyUmVmLmN1cnJlbnQpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ptdl0pXG5cbiAgY29uc3QgZW5zdXJlTGF5ZXIgPSAodmlldzogX19lc3JpLk1hcFZpZXcpOiBfX2VzcmkuR3JhcGhpY3NMYXllciA9PiB7XG4gICAgaWYgKCFsYXllclJlZi5jdXJyZW50KSB7XG4gICAgICBsYXllclJlZi5jdXJyZW50ID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyB0aXRsZTogJ1NwaWxsIHRyYWplY3RvcnkgKGVwaGVtZXJhbCknLCBsaXN0TW9kZTogJ2hpZGUnIH0pXG4gICAgICB2aWV3Lm1hcC5hZGQobGF5ZXJSZWYuY3VycmVudClcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyUmVmLmN1cnJlbnRcbiAgfVxuXG4gIC8vIC0tLS0gcHJvdmlkZXJzOiB3cmFwIGNvbmZpZ3VyZWQgbGF5ZXJzIGZvciB0aGUgZW5naW5lIC0tLS1cbiAgLy8gRmFpbHVyZXMgYXJlIHJlcG9ydGVkIHRvIHRoZSBkaWFnbm9zdGljcyBsaXN0IGluc3RlYWQgb2Yga2lsbGluZyB0aGUgdHJhY2UuXG4gIGNvbnN0IG1ha2VTaXRlUHJvdmlkZXIgPSAobGM6IFNpdGVMYXllckNvbmZpZywgZGVmYXVsdEJ1ZmZlcjogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCBub3Rlczogc3RyaW5nW10pID0+ICh7XG4gICAgYnVmZmVyX206IGxjLmJ1ZmZlck0gPz8gZGVmYXVsdEJ1ZmZlcixcbiAgICBmZXRjaDogYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBsYy51cmwgfSlcbiAgICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICAgICAgcS53aGVyZSA9IGxjLndoZXJlIHx8ICcxPTEnXG4gICAgICAgIHEub3V0RmllbGRzID0gW2xjLm5hbWVGaWVsZCwgLi4uKGxjLmV4dHJhRmllbGRzIHx8IFtdKV1cbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICAgICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgICBjb25zdCByb3dzID0gZnMuZmVhdHVyZXNcbiAgICAgICAgICAuZmlsdGVyKChmKSA9PiBmLmdlb21ldHJ5ICYmIGYuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50JylcbiAgICAgICAgICAubWFwKChmKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcbiAgICAgICAgICAgIGNvbnN0IHJvdzogYW55ID0geyBuYW1lOiBmLmF0dHJpYnV0ZXNbbGMubmFtZUZpZWxkXSwgbGF0OiBnLnksIGxvbjogZy54IH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWYgb2YgbGMuZXh0cmFGaWVsZHMgfHwgW10pIHJvd1tlZl0gPSBmLmF0dHJpYnV0ZXNbZWZdXG4gICAgICAgICAgICByZXR1cm4gcm93XG4gICAgICAgICAgfSlcbiAgICAgICAgbm90ZXMucHVzaChgJHtsYWJlbH06ICR7cm93cy5sZW5ndGh9IHBvaW50IGZlYXR1cmVzIGxvYWRlZCAoYnVmZmVyICR7bGMuYnVmZmVyTSA/PyBkZWZhdWx0QnVmZmVyfSBtKWApXG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG5vdGVzLnB1c2goYCR7bGFiZWx9IEZBSUxFRDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTAwKX1gKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IG1ha2VXaWR0aFByb3ZpZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHdsID0gcHJvcHMuY29uZmlnLndpZHRoTGF5ZXJcbiAgICBpZiAoIXdsIHx8ICF3bC51cmwpIHJldHVybiBudWxsXG4gICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiB3bC51cmwgfSlcbiAgICByZXR1cm4gYXN5bmMgKGVudjogeyB4bWluOiBudW1iZXIsIHltaW46IG51bWJlciwgeG1heDogbnVtYmVyLCB5bWF4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcbiAgICAgIHEud2hlcmUgPSB3bC53aGVyZSB8fCAnMT0xJ1xuICAgICAgcS5nZW9tZXRyeSA9IHsgdHlwZTogJ2V4dGVudCcsIC4uLmVudiwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSBhcyBhbnlcbiAgICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9ICdpbnRlcnNlY3RzJ1xuICAgICAgcS5vdXRGaWVsZHMgPSBbd2wud2lkdGhGaWVsZF1cbiAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgY29uc3QgbWlkczogQXJyYXk8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIHdpZHRoOiBudW1iZXIgfT4gPSBbXVxuICAgICAgZm9yIChjb25zdCBmIG9mIGZzLmZlYXR1cmVzKSB7XG4gICAgICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZVxuICAgICAgICBpZiAoZyAmJiBnLnBhdGhzICYmIGcucGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGcucGF0aHNbMF1cbiAgICAgICAgICBjb25zdCBtID0gcFtNYXRoLmZsb29yKHAubGVuZ3RoIC8gMildXG4gICAgICAgICAgbWlkcy5wdXNoKHsgbGF0OiBtWzFdLCBsb246IG1bMF0sIHdpZHRoOiBmLmF0dHJpYnV0ZXNbd2wud2lkdGhGaWVsZF0gfHwgMCB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWlkc1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0gZHJhd2luZyAtLS0tXG4gIGNvbnN0IGRyYXcgPSAodmlldzogX19lc3JpLk1hcFZpZXcsIHJlczogYW55LCBzcGlsbDogeyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIgfSkgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gZW5zdXJlTGF5ZXIodmlldylcbiAgICBsYXllci5yZW1vdmVBbGwoKVxuXG4gICAgLy8gc3BpbGwgcG9pbnRcbiAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBzcGlsbC5sYXQsIGxvbmdpdHVkZTogc3BpbGwubG9uIH0pLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc3R5bGU6ICd4Jywgc2l6ZTogMTQsXG4gICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjMDAwJywgd2lkdGg6IDMgfSxcbiAgICAgIH0gYXMgYW55LFxuICAgICAgcG9wdXBUZW1wbGF0ZTogeyB0aXRsZTogJ1NwaWxsIHBvaW50JywgY29udGVudDogYCR7c3BpbGwubGF0LnRvRml4ZWQoNSl9LCAke3NwaWxsLmxvbi50b0ZpeGVkKDUpfWAgfSBhcyBhbnksXG4gICAgfSkpXG5cbiAgICAvLyB0cmFjZSBwb2x5bGluZSwgc3BsaXQgaW50byBFVEEgY29sb3IgYmFuZHNcbiAgICBjb25zdCByb3dzOiBhbnlbXSA9IHJlcy50cmFjZVxuICAgIGxldCBiYW5kU3RhcnQgPSAwXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZG9uZSA9IGkgPT09IHJvd3MubGVuZ3RoXG4gICAgICBjb25zdCBiYW5kQ2hhbmdlZCA9ICFkb25lICYmIGJhbmRDb2xvcihyb3dzW2ldLmN1bV90aW1lKSAhPT0gYmFuZENvbG9yKHJvd3NbYmFuZFN0YXJ0XS5jdW1fdGltZSlcbiAgICAgIGlmIChkb25lIHx8IGJhbmRDaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IHNlZyA9IHJvd3Muc2xpY2UoYmFuZFN0YXJ0LCBNYXRoLm1pbihpICsgMSwgcm93cy5sZW5ndGgpKVxuICAgICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3NlZy5tYXAoKHIpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXG4gICAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBiYW5kQ29sb3Iocm93c1tiYW5kU3RhcnRdLmN1bV90aW1lKSwgd2lkdGg6IDQgfSBhcyBhbnksXG4gICAgICAgIH0pKVxuICAgICAgICBiYW5kU3RhcnQgPSBpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSm9ic29uIHVuY2VydGFpbnR5IGJhbmRzOiB0cmFuc2x1Y2VudCB1bmRlcmxheSBmcm9tIGJ1bGsgKHBlYWspIHBvc2l0aW9uXG4gICAgLy8gdG8gZmFydGhlc3QgY3JlZGlibGUgKDk5JSBsZWFkaW5nKSBwb3NpdGlvbiBhdCBlYWNoIGhvdXJcbiAgICBmb3IgKGNvbnN0IGggb2YgcmVzLmhvdXJseSkge1xuICAgICAgaWYgKCFoLmJhbmQpIGNvbnRpbnVlXG4gICAgICBjb25zdCBpMCA9IE1hdGgubWluKGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXG4gICAgICBjb25zdCBpMSA9IE1hdGgubWF4KGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXG4gICAgICBpZiAoaTEgPD0gaTApIGNvbnRpbnVlXG4gICAgICBjb25zdCBzZWcgPSByb3dzLnNsaWNlKGkwLCBpMSArIDEpXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IFBvbHlsaW5lKHsgcGF0aHM6IFtzZWcubWFwKChyOiBhbnkpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXG4gICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogWy4uLmhleFRvUmdiKGJhbmRDb2xvcihoLmhvdXIpKSwgMC4yOF0sIHdpZHRoOiAxNCwgY2FwOiAncm91bmQnIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICAgIC8vIGhvdXJseSBtYXJrZXJzICsgbGFiZWxzXG4gICAgZm9yIChjb25zdCBoIG9mIHJlcy5ob3VybHkpIHtcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogaC5sYXQsIGxvbmdpdHVkZTogaC5sb24gfSksXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc2l6ZTogNywgY29sb3I6IGJhbmRDb2xvcihoLmhvdXIpLFxuICAgICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjZmZmJywgd2lkdGg6IDEgfSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcbiAgICAgICAgICB0aXRsZTogYEhvdXIgJHtoLmhvdXJ9YCxcbiAgICAgICAgICBjb250ZW50OiBgJHtoLmN1bV9kaXN0X2ttLnRvRml4ZWQoMSl9IGttIGRvd25zdHJlYW0gwrcgJHtoLnZlbG9jaXR5X21waC50b0ZpeGVkKDEpfSBtcGhgLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIH0pKVxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmxhdCwgbG9uZ2l0dWRlOiBoLmxvbiB9KSxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6IGAke2guaG91cn0gaHJgLFxuICAgICAgICAgIGNvbG9yOiBiYW5kQ29sb3IoaC5ob3VyKSxcbiAgICAgICAgICBoYWxvQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICBoYWxvU2l6ZTogMS41LFxuICAgICAgICAgIHlvZmZzZXQ6IDksXG4gICAgICAgICAgZm9udDogeyBzaXplOiAxMCwgd2VpZ2h0OiAnYm9sZCcsIGZhbWlseTogJ3NhbnMtc2VyaWYnIH0sXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLSBtb2RlbCBjb25maWcgKyBlcXVpcG1lbnQgKyBjb21wdXRlL3JlbmRlciAocHVyZSwgcmV1c2FibGUgb24gY2FjaGVkIGRhdGEpIC0tLS1cbiAgY29uc3QgbW9kZWxDZmcgPSAoc2Y6IG51bWJlcikgPT4gKHtcbiAgICBzYWZldHlGYWN0b3I6IHNmLFxuICAgIHRpbWluZ01vZGVsOiBwcm9wcy5jb25maWcudGltaW5nTW9kZWwgPz8gJ2h5ZHJhdWxpYycsXG4gICAgbWluU3RyZWFtT3JkZXI6IHByb3BzLmNvbmZpZy5taW5TdHJlYW1PcmRlciA/PyA0LFxuICAgIG1heEhvdXJzOiBwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjQsXG4gICAgbWF4RGlzdGFuY2VLbTogcHJvcHMuY29uZmlnLm1heERpc3RhbmNlS20gPz8gMzAwLFxuICAgIHZlcmJvc2U6IGZhbHNlLFxuICB9KVxuXG4gIGNvbnN0IGFwcGx5RXF1aXBtZW50ID0gKHJlczogYW55LCBkcmF3bjogTWFwPHN0cmluZywgbnVtYmVyPikgPT4ge1xuICAgIGNvbnN0IGVxID0gcHJvcHMuY29uZmlnLmVxdWlwbWVudFxuICAgIGlmIChlcT8uZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVyblxuICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgZW50cmFpbm1lbnRNczogZXE/LmVudHJhaW5tZW50TXMgPz8gMC4zNSxcbiAgICAgIGFuY2hvclNwYWNpbmdGdDogZXE/LmFuY2hvclNwYWNpbmdGdCA/PyAxMDAsXG4gICAgICByZXNlcnZlUGN0OiBlcT8ucmVzZXJ2ZVBjdCA/PyAyMCxcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIHJlcy5zaXRlcykge1xuICAgICAgY29uc3Qga2V5ID0gbm9ybUd1aWQocy5HbG9iYWxJRCA/PyBzLmdsb2JhbGlkID8/IHMuR0xPQkFMSUQpXG4gICAgICBjb25zdCBkcmF3bkZ0ID0ga2V5ID8gZHJhd24uZ2V0KGtleSkgOiB1bmRlZmluZWRcbiAgICAgIGlmIChkcmF3bkZ0KSB7XG4gICAgICAgIGNvbnN0IGJvb21GdCA9IE1hdGguY2VpbChkcmF3bkZ0IC8gNTApICogNTBcbiAgICAgICAgcy5ib29tID0ge1xuICAgICAgICAgIGJvb21fZnQ6IGJvb21GdCxcbiAgICAgICAgICBhbmNob3JzOiBNYXRoLm1heCgyLCBNYXRoLmNlaWwoYm9vbUZ0IC8gcnVsZXMuYW5jaG9yU3BhY2luZ0Z0KSArIDEpLFxuICAgICAgICAgIHNvdXJjZTogJ2RyYXduJyxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXN0ID0gZXN0aW1hdGVCb29tTmVlZHMocy5yaXZlcl93aWR0aF9tLCBzLnZlbG9jaXR5X21zLCBydWxlcylcbiAgICAgICAgaWYgKGVzdCkgcy5ib29tID0geyAuLi5lc3QsIHNvdXJjZTogJ2VzdCcgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbXB1dGVBbmRSZW5kZXIgPSAoc2Y6IG51bWJlciwgZnJvbUNhY2hlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBjID0gY2FjaGVSZWYuY3VycmVudFxuICAgIGlmICghYyB8fCAham12KSByZXR1cm5cbiAgICBjb25zdCByZXMgPSBjb21wdXRlVHJhY2UoYy5kYXRhLCBtb2RlbENmZyhzZikpXG4gICAgYXBwbHlFcXVpcG1lbnQocmVzLCBjLmRyYXduKVxuICAgIGRyYXcoam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXcsIHJlcywgeyBsYXQ6IGMubGF0LCBsb246IGMubG9uIH0pXG4gICAgc2V0UmVzdWx0KHJlcylcbiAgICBzZXREaWFnKFsuLi5jLmZldGNoTm90ZXMsIGAke3Jlcy5zaXRlcy5sZW5ndGh9IHNpdGUocykgd2l0aGluIGJ1ZmZlciBvZiB0aGUgdHJhY2UuYF0pXG4gICAgc2V0U3RhdHVzKFxuICAgICAgYCR7cmVzLnJpdmVyX25hbWUgfHwgJ1RyYWNlJ30g4oCUICR7cmVzLmRpc3RhbmNlX2ttXzI0aC50b0ZpeGVkKDEpfSBrbSBpbiDiiaQgJHtwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjR9IGhgICtcbiAgICAgIChmcm9tQ2FjaGUgPyAnIMK3IHJlY29tcHV0ZWQgaW5zdGFudGx5IGZyb20gY2FjaGVkIGh5ZHJvbG9neScgOiAnJyksXG4gICAgKVxuICB9XG5cbiAgLy8gLS0tLSBydW4gLS0tLVxuICBjb25zdCBhcm1DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWptdiB8fCBhcm1pbmcgfHwgcnVubmluZykgcmV0dXJuXG4gICAgc2V0QXJtaW5nKHRydWUpXG4gICAgc2V0U3RhdHVzKCdDbGljayB0aGUgc3BpbGwgbG9jYXRpb24gb24gdGhlIG1hcOKApicpXG4gICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IGptdi52aWV3Lm9uKCdjbGljaycsIGFzeW5jIChldnQpID0+IHtcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKClcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICBzZXRBcm1pbmcoZmFsc2UpXG4gICAgICBjb25zdCBtcCA9IGV2dC5tYXBQb2ludFxuICAgICAgY29uc3QgbGF0ID0gbXAubGF0aXR1ZGUsIGxvbiA9IG1wLmxvbmdpdHVkZVxuICAgICAgc2V0UnVubmluZyh0cnVlKVxuICAgICAgc2V0UmVzdWx0KG51bGwpXG4gICAgICBzZXREaWFnKFtdKVxuICAgICAgc2V0U3RhdHVzKGBUcmFjaW5nIGZyb20gJHtsYXQudG9GaXhlZCg0KX0sICR7bG9uLnRvRml4ZWQoNCl94oCmYClcbiAgICAgIGNvbnN0IG5vdGVzOiBzdHJpbmdbXSA9IFtdXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjZmcgPSBwcm9wcy5jb25maWdcbiAgICAgICAgY29uc3Qgc2l0ZUxheWVycyA9IChjZmcuc2l0ZUxheWVycyB8fCBbXSkgYXMgYW55XG4gICAgICAgIGNvbnN0IHJlY2VwdG9yTGF5ZXJzID0gKGNmZy5yZWNlcHRvckxheWVycyB8fCBbXSkgYXMgYW55XG4gICAgICAgIGlmICghc2l0ZUxheWVycy5sZW5ndGgpIG5vdGVzLnB1c2goJ05vIHNpdGUgbGF5ZXJzIGNvbmZpZ3VyZWQg4oCUIGFkZCB0aGVtIGluIHRoZSB3aWRnZXQgc2V0dGluZ3MgKFNpdGUgbGF5ZXJzIEpTT04pLicpXG5cbiAgICAgICAgLy8gZmV0Y2ggZXZlcnl0aGluZyBvbmNlICh0cmFjZSwgZmxvd3MsIHdpZHRocywgc2l0ZS9yZWNlcHRvciBmZWF0dXJlcylcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCB7XG4gICAgICAgICAgLi4ubW9kZWxDZmcoc2FmZXR5KSxcbiAgICAgICAgICB3aWR0aFByb3ZpZGVyOiBtYWtlV2lkdGhQcm92aWRlcigpLFxuICAgICAgICAgIHNpdGVQcm92aWRlcnM6IHNpdGVMYXllcnMubWFwKChsYywgaSkgPT4gbWFrZVNpdGVQcm92aWRlcihsYywgNTAwLCBgU2l0ZSBsYXllciAke2kgKyAxfWAsIG5vdGVzKSksXG4gICAgICAgICAgcmVjZXB0b3JQcm92aWRlcnM6IHJlY2VwdG9yTGF5ZXJzLm1hcCgobGMsIGkpID0+IG1ha2VTaXRlUHJvdmlkZXIobGMsIDgwMCwgYFJlY2VwdG9yIGxheWVyICR7aSArIDF9YCwgbm90ZXMpKSxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBkcmF3biBib29tIGxpbmVzOiBwZXItc2l0ZS1sYXllciBib29tTGF5ZXIgKCsgbGVnYWN5IGdsb2JhbCBlcXVpcG1lbnQuYm9vbUxheWVyKVxuICAgICAgICBjb25zdCBkcmF3biA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgICAgICAgY29uc3QgZXEgPSBjZmcuZXF1aXBtZW50XG4gICAgICAgIGlmIChlcT8uZW5hYmxlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBib29tQ2ZnczogYW55W10gPSBbXVxuICAgICAgICAgIGZvciAoY29uc3QgbGMgb2Ygc2l0ZUxheWVycykgaWYgKGxjLmJvb21MYXllcj8udXJsKSBib29tQ2Zncy5wdXNoKGxjLmJvb21MYXllcilcbiAgICAgICAgICBpZiAoZXE/LmJvb21MYXllcj8udXJsKSBib29tQ2Zncy5wdXNoKGVxLmJvb21MYXllcilcbiAgICAgICAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KClcbiAgICAgICAgICBmb3IgKGNvbnN0IGJjIG9mIGJvb21DZmdzKSB7XG4gICAgICAgICAgICBjb25zdCBzaWcgPSBgJHtiYy51cmx9fCR7YmMuc2l0ZUtleUZpZWxkfWBcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyhzaWcpKSBjb250aW51ZVxuICAgICAgICAgICAgc2Vlbi5hZGQoc2lnKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoRHJhd25Cb29tKGJjIGFzIGFueSlcbiAgICAgICAgICAgICAgbS5mb3JFYWNoKCh2LCBrKSA9PiBkcmF3bi5zZXQoaywgKGRyYXduLmdldChrKSB8fCAwKSArIHYpKVxuICAgICAgICAgICAgICBub3Rlcy5wdXNoKGBCb29tIGxpbmVzICgke3NpZy5zcGxpdCgnLycpLnNsaWNlKC0yKVswXX0pOiBkcmF3biBmb290YWdlIGZvciAke20uc2l6ZX0gc2l0ZShzKWApXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIG5vdGVzLnB1c2goYEJvb20gbGF5ZXIgRkFJTEVEOiAke1N0cmluZyhlKS5zbGljZSgwLCA5MCl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWNoZVJlZi5jdXJyZW50ID0geyBsYXQsIGxvbiwgZGF0YSwgZHJhd24sIGZldGNoTm90ZXM6IG5vdGVzLnNsaWNlKCkgfVxuICAgICAgICBjb21wdXRlQW5kUmVuZGVyKHNhZmV0eSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0U3RhdHVzKGBUcmFjZSBmYWlsZWQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDEyMCl9YClcbiAgICAgICAgc2V0RGlhZyhub3RlcylcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldFJ1bm5pbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW2ptdiwgYXJtaW5nLCBydW5uaW5nLCBzYWZldHksIHByb3BzLmNvbmZpZ10pXG5cbiAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQpIHsgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKTsgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IG51bGwgfVxuICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnJlbW92ZUFsbCgpXG4gICAgY2FjaGVSZWYuY3VycmVudCA9IG51bGxcbiAgICBzZXRBcm1pbmcoZmFsc2UpXG4gICAgc2V0UmVzdWx0KG51bGwpXG4gICAgc2V0RGlhZyhbXSlcbiAgICBzZXRTdGF0dXMoJ0NsZWFyZWQuIENsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIgdG8gcnVuIGFnYWluLicpXG4gIH1cblxuICBjb25zdCBzaXRlczogU2l0ZVJvd1tdID0gcmVzdWx0Py5zaXRlcyB8fCBbXVxuICBjb25zdCB3YXJuaW5nczogc3RyaW5nW10gPSByZXN1bHQ/Lndhcm5pbmdzIHx8IFtdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgcGFkZGluZzogMTAsIG92ZXJmbG93OiAnYXV0bycsIGZvbnRTaXplOiAxMyB9fT5cbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KHYpID0+IHNldEptdih2KX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7IXByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnIH19PlNlbGVjdCBhIE1hcCB3aWRnZXQgaW4gdGhpcyB3aWRnZXQncyBzZXR0aW5ncy48L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFqbXYgfHwgYXJtaW5nIHx8IHJ1bm5pbmd9IG9uQ2xpY2s9e2FybUNsaWNrfT5cbiAgICAgICAgICB7YXJtaW5nID8gJ0NsaWNrIHRoZSBtYXDigKYnIDogcnVubmluZyA/ICdUcmFjaW5n4oCmJyA6ICdTZXQgc3BpbGwgcG9pbnQnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17cnVubmluZ30gb25DbGljaz17Y2xlYXJBbGx9PkNsZWFyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFyZXN1bHR9IHRpdGxlPVwiQ29weSBydW4gcHJvdmVuYW5jZSByZWNvcmQgKEpTT04pIGZvciBhZnRlci1hY3Rpb24gZG9jdW1lbnRhdGlvbiDigJQgaW5jbHVkZXMgYSByZXBsYXkgVVJMXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdD8ucnVuUmVjb3JkIHx8ICFjYWNoZVJlZi5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHJlYzogYW55ID0geyAuLi5yZXN1bHQucnVuUmVjb3JkIH1cbiAgICAgICAgICAgIGNvbnN0IHUgPSBuZXcgVVJMKCdodHRwczovL3doaXRld2F0ZXJyZXNjdWUuZ2l0aHViLmlvL3dyaS1leGItd2lkZ2V0cy9lbWJlZC8nKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdjb25maWcnLCAnYWxsLWdycHMnKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsYXQnLCBjYWNoZVJlZi5jdXJyZW50LmxhdC50b0ZpeGVkKDUpKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsb24nLCBjYWNoZVJlZi5jdXJyZW50Lmxvbi50b0ZpeGVkKDUpKVxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdhc09mJywgcmVjLmFzX29mICE9PSAnbGl2ZScgPyByZWMuYXNfb2YgOiByZWMuZ2VuZXJhdGVkX2F0LnNsaWNlKDAsIDEwKSlcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnc2YnLCBTdHJpbmcoc2FmZXR5KSlcbiAgICAgICAgICAgIHJlYy5yZXBsYXlfdXJsID0gdS50b1N0cmluZygpXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShyZWMsIG51bGwsIDEpKS50aGVuKCgpID0+IHNldFN0YXR1cygnUnVuIHJlY29yZCBjb3BpZWQgKGluY2x1ZGVzIHJlcGxheV91cmwpLicpKVxuICAgICAgICAgIH19PlxuICAgICAgICAgIOKOmCBSZWNvcmRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9fVxuICAgICAgICAgIHRpdGxlPVwiU2FmZXR5IGZhY3RvciDigJQgY2hhbmdpbmcgaXQgcmUtcnVucyBpbnN0YW50bHkgZnJvbSBjYWNoZWQgaHlkcm9sb2d5XCI+XG4gICAgICAgICAgU0ZcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzYWZldHl9IGRpc2FibGVkPXtydW5uaW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICBzZXRTYWZldHkodilcbiAgICAgICAgICAgICAgaWYgKGNhY2hlUmVmLmN1cnJlbnQgJiYgIXJ1bm5pbmcpIGNvbXB1dGVBbmRSZW5kZXIodiwgdHJ1ZSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS4wfT4xLjA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuMjV9PjEuMjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuNX0+MS41PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyLjB9PjIuMDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBtaW5IZWlnaHQ6IDE4IH19PntydW5uaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cImppbXUtc2Vjb25kYXJ5LWxvYWRpbmdcIiAvPn0ge3N0YXR1c308L2Rpdj5cblxuICAgICAge2RpYWcubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgZm9udFNpemU6IDExLCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAge2RpYWcubWFwKChkLCBpKSA9PiA8ZGl2IGtleT17aX0+e2R9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7d2FybmluZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYzY2QnLCBib3JkZXI6ICcxcHggc29saWQgI2ZmZWViYScsIHBhZGRpbmc6IDYsIG1hcmdpbkJvdHRvbTogOCwgYm9yZGVyUmFkaXVzOiA0IH19PlxuICAgICAgICAgIHt3YXJuaW5ncy5tYXAoKHcsIGkpID0+IDxkaXYga2V5PXtpfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+4pqgIHt3fTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3Jlc3VsdCAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBjb2xvcjogJyM1NTUnIH19PlxuICAgICAgICAgIEVUQXMgYXJlIGVzdGltYXRlcyAowrEyMCUpLCBzYWZldHkgZmFjdG9yIMOXe3Jlc3VsdC5zYWZldHlfZmFjdG9yfSBhcHBsaWVkIOKAlCB0cmVhdCBhcyBiYW5kcywgbm90IGFwcG9pbnRtZW50cy5cbiAgICAgICAgICB7cmVzdWx0LmdhdWdlc191c2VkLmxlbmd0aFxuICAgICAgICAgICAgPyBgIEZsb3dzOiAke3Jlc3VsdC5nYXVnZXNfdXNlZC5tYXAoKGc6IGFueSkgPT4gZy5zdGF0aW9uX2lkKS5qb2luKCcsICcpfS5gXG4gICAgICAgICAgICA6ICcgTm8gbGl2ZSBnYXVnZXMgZm91bmQg4oCUIGRyYWluYWdlLWFyZWEgZmxvdyBlc3RpbWF0ZS4nfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzaXRlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNjY2MnIH19PlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkVUQTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+U2l0ZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+a208L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkJvb208L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtzaXRlcy5tYXAoKHMsIGkpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cy5ldGFfZWFybHlfaHIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IGBlYXJsaWVzdCBjcmVkaWJsZSAke3MuZXRhX2Vhcmx5X2hyfSBociDCtyBmaXJzdCBhcnJpdmFsICR7cy5ldGFfaHJ9IGhyIMK3IHBlYWsgJHtzLmV0YV9wZWFrX2hyfSBociR7cy5jbGVhcl9ociA/IGAgwrcgY2xlYXIgfiR7cy5jbGVhcl9ocn0gaHJgIDogJyd9YFxuICAgICAgICAgICAgICAgICAgICA6ICcnfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogMTAsIGhlaWdodDogMTAsIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFuZENvbG9yKHMuZXRhX2hyKSwgbWFyZ2luUmlnaHQ6IDQsXG4gICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAge3MuZXRhX2Vhcmx5X2hyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtzLmV0YV9lYXJseV9oci50b0ZpeGVkKDEpfeKAkyR7cy5ldGFfaHIudG9GaXhlZCgxKX0gaHJgXG4gICAgICAgICAgICAgICAgICAgIDogcy5ldGFfaHIgPCAxID8gYCR7TWF0aC5yb3VuZChzLmV0YV9ociAqIDYwKX0gbWluYCA6IGAke3MuZXRhX2hyLnRvRml4ZWQoMSl9IGhyYH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MuZGlzdF9rbS50b0ZpeGVkKDEpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0gdGl0bGU9e3MuYm9vbVxuICAgICAgICAgICAgICAgICAgPyBgJHtzLmJvb20uYW5jaG9yc30gYW5jaG9yIHNldHMke3MuYm9vbS5ib29tX2FuZ2xlX2RlZyA/IGAgwrcgJHtzLmJvb20uYm9vbV9hbmdsZV9kZWd9wrAgZGVwbG95bWVudGAgOiAnJ30ke3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgPyAnIMK3IGZhc3Qgd2F0ZXI6IGNhc2NhZGUgbXVsdGlwbGUgYm9vbXMnIDogJyd9ICgke3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAnZnJvbSBkcmF3biBib29tIGxpbmVzJyA6ICdlc3RpbWF0ZWQgZnJvbSBtb2RlbGVkIHdpZHRoL3ZlbG9jaXR5J30pYFxuICAgICAgICAgICAgICAgICAgOiAnJ30+XG4gICAgICAgICAgICAgICAgICB7cy5ib29tXG4gICAgICAgICAgICAgICAgICAgID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20uYm9vbV9mdC50b0xvY2FsZVN0cmluZygpfSBmdFxuICAgICAgICAgICAgICAgICAgICAgICAge3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgJiYgJyDimqEnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjOTk5JyB9fT4ge3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAn4pyTJyA6ICdlc3QuJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDogJ+KAlCd9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAge3NpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxuICAgICAgICAgICAgPHRmb290PlxuICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICNjY2MnLCBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICczcHggNHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIFRvdGFscyAoe3NpdGVzLmZpbHRlcigocykgPT4gcy5ib29tKS5sZW5ndGh9IGJvb20gc2l0ZXMpXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzNweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5ib29tX2Z0IHx8IDApLCAwKS50b0xvY2FsZVN0cmluZygpfSBmdCDCt3snICd9XG4gICAgICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYW5jaG9ycyB8fCAwKSwgMCl9IGFuY2hvcnNcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHQgJiYgc2l0ZXMuc29tZSgocykgPT4gcy5ib29tKSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjNzc3JywgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgIOKckyA9IGRyYXduIGJvb20gbGluZXMgwrcgZXN0LiA9IHNpemVkIGZyb20gbW9kZWxlZCB3aWR0aC92ZWxvY2l0eVxuICAgICAgICAgIChib29tIGFuZ2xlZCB0byBrZWVwIG5vcm1hbCBmbG93IOKJpCB7KHByb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LmVudHJhaW5tZW50TXMgPz8gMC4zNSl9IG0vcyxcbiAgICAgICAgICAre3Byb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LnJlc2VydmVQY3QgPz8gMjB9JSByZXNlcnZlKSDCtyDimqEgPSBmYXN0IHdhdGVyLCBjYXNjYWRlIGJvb21zXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHQgJiYgc2l0ZXMubGVuZ3RoID09PSAwICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjNzc3JyB9fT5ObyBjb25maWd1cmVkIHNpdGVzIHdpdGhpbiByZWFjaCBvZiB0aGlzIHRyYWNlLjwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=