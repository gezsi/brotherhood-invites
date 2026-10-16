# Helyi webes adatbázis futtatókörnyezete

A böngészős próba Drift/SQLite adatbázist használ. Az alábbi fájlok a hivatalos
[Drift 2.35.0 kiadásból](https://github.com/simolus3/drift/releases/tag/drift-2.35.0)
származnak, a kóddal együtt verziózandók. Nem a Brotherhood kézzel írt kódjai.

| Helyi fájl | Kiadási fájl | SHA-256 |
|---|---|---|
| sqlite3.wasm | sqlite3.wasm | `13d3f11d05b39ba0618a7115fb41640a5d48b6300f5d3f325f554b42bd6688a4` |
| drift_worker.dart.js | drift_worker.js | `df0066e75363a9bed59a14eedbbded421c1f5910f8379812df164716aa2e6eed` |

Frissítéskor a Drift csomaggal kompatibilis kiadást kell választani, a fájlokat
együtt cserélni, majd a böngészős mentést és újratöltést ellenőrizni.
Letöltési alap: `https://github.com/simolus3/drift/releases/download/drift-2.35.0/`.
A Drift MIT licencét és a függőségek licencadatait a Flutter build is tartalmazza
az `assets/NOTICES` állományban. A SQLite közkincs.
