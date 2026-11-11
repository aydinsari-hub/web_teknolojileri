https://aydinsari-frontend-sqrszwi4x-ders6.vercel.app

# Kampüs Etkinlikleri (Frontend & Backend)

Bu depo, Web Teknolojileri ve Programlama dersi kapsamında geliştirilen **Kampüs Etkinlikleri** projesinin tüm ön yüz (Frontend) ve arka yüz (Backend) kodlarını içermektedir.

- **Frontend:** React + TypeScript + Vite + React Router + Context API (`localhost:5173`)
- **Backend:** Node.js + Express REST API (`localhost:3000`)
- **Canlı Yayın:** [https://aydinsari-frontend.vercel.app](https://aydinsari-frontend.vercel.app) (Alternatif: [https://hafta2-gamma.vercel.app](https://hafta2-gamma.vercel.app))
- **GitHub:** [https://github.com/aydinsari-hub/web_teknolojileri](https://github.com/aydinsari-hub/web_teknolojileri)

---

## 📂 Proje Dizin Yapısı

```text
kampus-etkinlik/
├── frontend/                        # React Kullanıcı Arayüzü (Sprint 6 / Vize)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/              # Header, Navigation, Footer
│   │   │   ├── events/              # EventCard, EventList, EventFilter, EventDetail
│   │   │   └── forms/               # EventForm (ortak form)
│   │   ├── context/
│   │   │   └── EventsContext.tsx    # Context API durum yönetimi
│   │   ├── pages/                   # 10 Sayfa Bileşeni
│   │   ├── data/events.ts
│   │   ├── types/campus-event.ts
│   │   ├── utils/                   # filter-events, format-date, validate-event
│   │   ├── App.tsx & App.css
│   │   └── main.tsx
│   └── package.json
│
├── backend/                         # Express REST API Sunucusu (Sprint 7)
│   ├── src/
│   │   ├── app.js                   # Express uygulaması, middleware ve 404 yakalayıcı
│   │   ├── server.js                # .env yükleyici ve port dinleyici
│   │   ├── routes/
│   │   │   └── event-routes.js      # URL rota yönlendiricileri
│   │   ├── controllers/
│   │   │   └── event-controller.js  # İstek ve yanıt denetleyicileri
│   │   └── data/
│   │       └── events.js            # Bellek içi 6 özgün etkinlik kaydı
│   ├── requests/
│   │   └── kampus-api.json          # Postman test koleksiyonu (v2.1)
│   ├── .env.example                 # Örnek ortam değişkenleri
│   ├── .gitignore                   # node_modules ve .env engellemesi
│   ├── package.json
│   └── README.md                    # Backend API sözleşmesi ve kılavuzu
│
├── vercel.json                      # Vercel SPA derleme ve yönlendirme ayarı
├── package.json                     # Kök kısayol komutları
└── README.md                        # Ana proje kılavuzu
```

---

## 🚀 Kurulum ve Çalıştırma

### 1. Frontend (Ön Yüz)
```bash
# Frontend geliştirme sunucusunu başlatın (http://localhost:5173)
npm run dev

# veya frontend klasöründen:
cd frontend
npm install
npm run dev
```

### 2. Backend (Arka Yüz / REST API)
```bash
# Backend sunucusunu başlatın (http://localhost:3000)
npm run backend:dev

# veya backend klasöründen:
cd backend
npm install
npm run dev
```

---

## 📡 Backend REST API Sözleşmesi (Sprint 7)

| Yöntem | Uç Nokta | Açıklama | Başarılı | Hata |
|---|---|---|---|---|
| `GET` | `/health` | Sağlık kontrolü ve öğrenci no (`2416501056`) | `200 OK` | — |
| `GET` | `/events` | 6 etkinliğin listesi (`?category=` destekler) | `200 OK` | — |
| `GET` | `/events/:id` | Tek etkinlik detayı | `200 OK` | `404 Not Found` |
| `POST` | `/events` | Yeni etkinlik kaydı (`title`, `category`, `date`) | `201 Created` | `400 Bad Request` |

Test istekleri Postman ile doğrudan `backend/requests/kampus-api.json` dosyası içe aktarılarak çalıştırılabilir.

---

## 📋 Sprint 7 Teslim Kontrol Listesi

- [x] **1. Backend ayrı `backend/` klasöründe**
- [x] **2. `npm install` + `npm run dev` hatasız çalışıyor**
- [x] **3. Port `.env`'den okunuyor (`PORT=3000`), `.env.example` var**
- [x] **4. `.env` ve `node_modules` GitHub'da yok (`.gitignore`)**
- [x] **5. Route ve controller ayrı dosyalarda**
- [x] **6. En az 5 commit adım adım atılmış** (6 commit atıldı)
- [x] **7. `GET /health` JSON'unda `student = "2416501056"`**
- [x] **8. `data/events.js`'te kendi 6 etkinliğin**
- [x] **9. `GET /events` ve `GET /events/:id` çalışıyor, olmayan ID `404`**
- [x] **10. `POST /events` `201`, eksik veri `400`**
- [x] **11. `backend/README.md`'de REST sözleşmesi tablosu mevcut**
- [x] **12. 6 test isteği koleksiyon olarak `backend/requests/kampus-api.json`'da**

---

## 👨‍💻 Geliştirici Bilgileri

- **Öğrenci:** Aydın Sarı
- **Öğrenci No:** 2416501056
- **Ders:** Web Teknolojileri ve Programlama
- **Dönem:** 2025–2026 Güz
