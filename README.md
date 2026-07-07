# BNSF Response Viewer (WRI hosted)

Self-hosted ArcGIS Experience Builder app (Dev Edition 1.20 export) — the BNSF
Response Viewer with the WRI Spill Trajectory custom widget drawing on the app map.

- Live: https://whitewaterrescue.github.io/wri-response-viewer/
- Viewers sign in with ArcGIS Online (OAuth item 23d6880751234fb7be59695222b80351);
  layer/web-map group sharing governs data access. Compiled app shell only — no data.
- Source of truth: local ExB Dev Edition, `C:\ExB\server\public\apps\1\`.
  Update cycle: edit in local builder -> publish (copy draft config over root
  config.json) -> `zipApp('1', ...)` -> unzip here -> push.
