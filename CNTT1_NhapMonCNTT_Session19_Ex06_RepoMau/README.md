# CNTT1_NhapMonCNTT_Session19_Ex06 - Repository mau an toan

Ho va ten: Phan Huy Hung  
Lop: CNTT1  
Mon: Nhap mon CNTT

Day la bo file **mau** de dua len GitHub, chua duoc day len GitHub va KHONG chua khoa bi mat that.

## Cau truc

```text
.
|-- .gitignore
|-- .env.example
|-- .env.development.example
|-- .env.test.example
|-- .env.production.example
|-- .github/PULL_REQUEST_TEMPLATE.md
|-- src/config.js
|-- package.json
`-- README.md
```

## 3 moi truong

- Development: DB va khoa API test co han muc nho.
- Test/Staging: khoa rieng va du lieu gia lap, khong dung lai Development.
- Production: khoa that chi dat tren secret manager/CI-CD; khong chua trong Git.

Sao chep `.env.example` thanh `.env` tren may va dien gia tri moi (khong cung cap gia tri that tren GitHub). Sau do kiem tra `.env` khong duoc Git theo doi.

## Pre-push checklist

1. `git status --short` va `git diff --cached --name-only`: khong thay `.env`, `*.pem`, `*.key`.
2. `git diff --cached`: doc lai cac dong duoc commit, tim Secret va token hardcode.
3. Chay secret scanner duoc phe duyet (vi du Gitleaks), kiem tra GitHub Secret Scanning va Push Protection neu co.
4. Kiem tra `.gitignore`, 2FA GitHub va nguyen tac chi cap quyen can thiet roi moi `git push`.

Neu `.env` da duoc track truoc khi sua `.gitignore`, can `git rm --cached .env`; neu key da lo thi phai revoke/rotate ngay, xu ly lich su commit sau.

## Bat buoc 2FA cho GitHub Organization

Owner vao Organizations -> Settings -> Authentication security -> bat yeu cau 2FA cho tat ca thanh vien. Khuyen khich Authenticator App hoac khoa bao mat, luu recovery codes rieng. Luu y thong bao cho collaborator truoc khi bat de tranh mat quyen.

## Bao cao rui ro khi thieu `.gitignore`

| Rui ro | Muc do | Giai phap |
|---|---|---|
| `.env` bi push public, lo API key | Cao | `.gitignore`, quet secret, revoke khi lo |
| Lo mat khau DB, mat du lieu | Cao | Bien moi truong, secret manager, least privilege |
| Key Production bi dung o Dev/Test | Cao | Tach khoa theo moi truong, rotate |
| Repo chua node_modules va log | Trung binh | Ignore thu muc sinh tu dong |

Nguon tham khao: https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning
