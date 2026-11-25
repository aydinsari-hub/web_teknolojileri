https://aydinsari-frontend-sqrszwi4x-ders6.vercel.app

# Kampüs Etkinlikleri (Frontend & Backend)

Bu depo, Web Teknolojileri ve Programlama dersi kapsamında geliştirilen **Kampüs Etkinlikleri** projesinin tüm ön yüz (Frontend) ve arka yüz (Backend) kodlarını içermektedir.

- **Frontend:** React + TypeScript + Vite + React Router + Context API (`localhost:5173`)
- **Backend:** Node.js + Express + MongoDB (Mongoose) REST API (`localhost:3000`)
- **Canlı Yayın:** [https://aydinsari-frontend.vercel.app](https://aydinsari-frontend-sqrszwi4x-ders6.vercel.app)
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
├── backend/                         # Express + MongoDB REST API (Sprint 7–9)
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # MongoDB (Mongoose) bağlantı modülü
│   │   ├── models/
│   │   │   └── event-model.js       # Event şema ve model tanımları
│   │   ├── utils/
│   │   │   └── date.js              # GG-AA-YYYY tarih ayrıştırma ve biçimlendirme
│   │   ├── data/
│   │   │   └── seed-events.js       # 6 özgün örnek etkinlik (geçmiş + gelecek tarihli)
│   │   ├── controllers/
│   │   │   └── event-controller.js  # CRUD, arama, filtre ve upcoming denetleyicileri
│   │   ├── routes/
│   │   │   └── event-routes.js      # URL rota yönlendiricileri
│   │   ├── seed.js                  # Veritabanı tohumlama (seed) scripti
│   │   ├── app.js                   # Express uygulaması, 404 ve hata middleware'i
│   │   └── server.js                # Veritabanı bağlantısı ve port dinleyici
│   ├── requests/
│   │   ├── kampus-api.json          # Postman test koleksiyonu (18 istek, 45 test)
│   │   └── run-results.json         # Runner / Newman test sonuçları
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
npm run dev
```

### 2. Backend (Arka Yüz / MongoDB REST API)
`backend/.env` dosyasına `PORT=3000` ve `MONGODB_URI=...` bilgilerinizi ekledikten sonra:

```bash
# Veritabanını 6 özgün etkinlikle doldurun
npm run backend:seed

# Backend geliştirme sunucusunu başlatın (http://localhost:3000)
npm run backend:dev
```

---

## 📡 Backend REST API Sözleşmesi (Sprint 9)

Tarih formatı tüm uç noktalarda `"GG-AA-YYYY"` şeklindedir.

| Yöntem | Uç Nokta | Açıklama | Başarılı | Hata |
|---|---|---|---|---|
| `GET` | `/health` | Sağlık kontrolü ve öğrenci no (`2416501056`) | `200 OK` | — |
| `GET` | `/events` | Etkinlik listesi (`?search=` ve `?category=` destekler) | `200 OK` | — |
| `GET` | `/events/upcoming` | Bugün ve sonraki etkinlikler (tarihe göre sıralı) | `200 OK` | — |
| `GET` | `/events/:id` | Tek etkinlik detayı | `200 OK` | `404 Not Found` |
| `POST` | `/events` | Yeni etkinlik kaydı (`title`, `category`, `date`) | `201 Created` | `400 Bad Request` |
| `PATCH` | `/events/:id` | Gönderilen alanları kısmi günceller | `200 OK` | `400`, `404` |
| `DELETE` | `/events/:id` | Etkinliği siler | `204 No Content` | `404 Not Found` |

---

## 👨‍💻 Geliştirici Bilgileri

- **Öğrenci:** Aydın Sarı
- **Öğrenci No:** 2416501056
- **Ders:** Web Teknolojileri ve Programlama
- **Dönem:** 2025–2026 Güz
