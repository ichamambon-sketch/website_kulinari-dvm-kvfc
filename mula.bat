@echo off
cd /d "%~dp0"
echo KVFC: pelayan tempatan akan bermula di http://localhost:8000
echo Tekan Ctrl+C untuk berhenti.
where python >nul 2>nul
if %errorlevel%==0 (
  start "" cmd /c "timeout /t 2 >nul & start http://localhost:8000"
  python -m http.server 8000
  goto :eof
)
where node >nul 2>nul
if %errorlevel%==0 (
  start "" cmd /c "timeout /t 4 >nul & start http://localhost:8000"
  npx --yes serve -l 8000 .
  goto :eof
)
echo Python dan Node.js tiada. Membuka index.html terus...
start "" index.html
