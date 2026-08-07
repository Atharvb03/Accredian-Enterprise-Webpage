@echo off
echo Cleaning build directories...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

echo.
echo Starting build...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Build failed! If you're experiencing OneDrive sync issues:
    echo 1. Right-click the .next folder and select "Free up space"
    echo 2. Or move this project outside of OneDrive
    echo 3. Or exclude .next from OneDrive sync
    exit /b 1
)

echo.
echo Build completed successfully!
