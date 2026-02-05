@echo off
setlocal enabledelayedexpansion

echo Fixing navigation links...

for %%f in (src\components\*.jsx) do (
    echo Checking %%f...
    powershell -Command "(Get-Content '%%f' -Raw) -replace 'link: \"\"#profil\"\"', 'link: \"\"#\"\"' -replace 'link: \"\"#ekstra\"\"', 'link: \"\"#\"\"' -replace 'link: \"\"#berita\"\"', 'link: \"\"#\"\"' | Set-Content '%%f' -NoNewline"
)

echo Done!
