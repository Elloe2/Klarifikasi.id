# Klarifikasi.id v2.0.0 Simple Deployment Script

Write-Host "Klarifikasi.id v2.0.0 Deployment Script" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

$DEPLOY_FOLDER = "Klarifikasi.id Deployment"
$GITHUB_REPO = "https://github.com/Elloe2/Klarifikasi.id.git"
$DEPLOY_BRANCH = "gh-pages"

Write-Host "Deployment Folder: $DEPLOY_FOLDER" -ForegroundColor Yellow
Write-Host "GitHub Repository: $GITHUB_REPO" -ForegroundColor Yellow
Write-Host "Deploy Branch: $DEPLOY_BRANCH" -ForegroundColor Yellow
Write-Host ""

# Cek apakah folder deployment ada
if (-not (Test-Path $DEPLOY_FOLDER)) {
    Write-Host "Error: Folder '$DEPLOY_FOLDER' tidak ditemukan!" -ForegroundColor Red
    exit 1
}

Write-Host "Folder deployment ditemukan" -ForegroundColor Green

# Buat folder temporary untuk deployment
$TEMP_DIR = "temp-deploy"
if (Test-Path $TEMP_DIR) {
    Remove-Item $TEMP_DIR -Recurse -Force
}

Write-Host "Membuat temporary directory..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path $TEMP_DIR | Out-Null

try {
    # Clone repository ke temporary directory
    Write-Host "Cloning repository..." -ForegroundColor Yellow
    git clone $GITHUB_REPO $TEMP_DIR
    
    # Masuk ke directory temporary
    Set-Location $TEMP_DIR
    
    # Buat atau checkout branch gh-pages
    Write-Host "Setting up gh-pages branch..." -ForegroundColor Yellow
    git checkout -b $DEPLOY_BRANCH 2>$null
    if ($LASTEXITCODE -ne 0) {
        git checkout $DEPLOY_BRANCH
    }
    
    # Hapus semua file lama (kecuali .git)
    Write-Host "Membersihkan file lama..." -ForegroundColor Yellow
    Get-ChildItem -Path . -Exclude .git | Remove-Item -Recurse -Force
    
    # Copy file deployment
    Write-Host "Copying deployment files..." -ForegroundColor Yellow
    Copy-Item -Path "..\$DEPLOY_FOLDER\*" -Destination . -Recurse -Force
    
    # Add semua file
    Write-Host "Adding files to Git..." -ForegroundColor Yellow
    git add .
    
    # Commit
    $COMMIT_MESSAGE = "Deploy Klarifikasi.id v2.0.0 with Gemini AI features"
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m $COMMIT_MESSAGE
    
    # Push ke GitHub
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push origin $DEPLOY_BRANCH --force
    
    Write-Host ""
    Write-Host "Deployment berhasil!" -ForegroundColor Green
    Write-Host "Website akan tersedia di: https://elloe2.github.io/Klarifikasi.id/" -ForegroundColor Cyan
    Write-Host "Tunggu beberapa menit untuk GitHub Pages update." -ForegroundColor Yellow
    
} catch {
    Write-Host ""
    Write-Host "Error during deployment:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
} finally {
    # Kembali ke directory asal dan cleanup
    Set-Location ..
    if (Test-Path $TEMP_DIR) {
        Remove-Item $TEMP_DIR -Recurse -Force
        Write-Host "Temporary files cleaned up" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Deployment script selesai!" -ForegroundColor Green
