https://aydinsari-frontend.vercel.app

> Alternatif Canlı Vercel Adresi: https://hafta2-gamma.vercel.app

# Kampüs Etkinlikleri — Vize Projesi (Sprint 6: Router, Context ve Yönetim)

Bu proje, Web Teknolojileri ve Programlama dersi vize projesi (Sprint 6) kapsamında geliştirilmiştir. Tek sayfalık React uygulaması; gerçek URL adreslerine (`react-router-dom`), merkezi durum yönetimine (`EventsContext`), kontrollü formlara (`controlled forms`) ve tam CRUD yönetimine (ekle, güncelle, sil, onay) kavuşturulmuştur.

## Canlı Yayın
- **Vercel:** [https://aydinsari-frontend.vercel.app](https://aydinsari-frontend.vercel.app)
- **GitHub:** [https://github.com/aydinsari-hub/web_teknolojileri](https://github.com/aydinsari-hub/web_teknolojileri)

## Kurulum ve Çalıştırma

Projeyi yerel ortamda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install
# veya frontend klasöründe:
# cd frontend && npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Tarayıcıda açın:
# http://localhost:5173

# Üretim derlemesi ve kontrolü
npm run build
npm run lint
```

## Route Haritası (10 Adres, 10 Sayfa)

| Adres | Sayfa Bileşeni | Açıklama |
|---|---|---|
| `/` | `HomePage` | Yaklaşan 2 etkinliği ve tüm etkinliklere gidiş butonunu listeler. |
| `/events` | `EventsPage` | Etkinlik arama (başlık ve açıklamada) ve kategori filtreleme ile tüm etkinlikleri sunar. |
| `/events/:id` | `EventDetailPage` | Parametre olarak gelen id'ye göre etkinliği bulur; görsel, künye bilgileri ve açıklamayı gösterir. |
| `/admin` | `AdminPage` | Etkinlik yönetim tablosu. Yeni etkinlik butonu, düzenleme bağlantısı ve onaylı silme işlemi içerir. |
| `/admin/new` | `AddEventPage` | Yeni etkinlik ekleme formu (`EventForm`). Başarılı ekleme sonrası `/admin` sayfasına yönlendirir. |
| `/admin/:id/edit` | `EditEventPage` | Mevcut etkinlik bilgilerini dolduran güncelleme formu. Kayıttan sonra `/admin` sayfasına yönlendirir. |
| `/login` | `LoginPage` | Kontrollü e-posta ve şifre doğrulamalı giriş sayfası. |
| `/register` | `RegisterPage` | Ad soyad, e-posta, şifre ve şifre tekrarı alanlı kayıt sayfası. |
| `/forgot-password` | `ForgotPasswordPage` | E-posta doğrulamalı şifre sıfırlama bağlantı formu. |
| `*` | `NotFoundPage` | Tanımsız bir adrese gidildiğinde gösterilen 404 sayfası ve ana sayfaya dönüş butonu. |

## Klasör ve Dosya Yapısı

```text
frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Dinamik sayfa başlığı, alt bilgi ve document.title
│   │   │   ├── Navigation.tsx       # NavLink tabanlı aktif menü şeridi
│   │   │   └── Footer.tsx           # Öğrenci künyesi alt bilgisi
│   │   ├── events/
│   │   │   ├── EventCard.tsx        # Tek etkinlik kartı ve detay bağlantısı
│   │   │   ├── EventList.tsx        # Etkinlik ızgarası listesi
│   │   │   ├── EventFilter.tsx      # Arama ve kategori seçim filtre formu
│   │   │   └── EventDetail.tsx      # Detay görünümü, künye ve işlem butonları
│   │   └── forms/
│   │       └── EventForm.tsx        # Ekleme ve düzenleme için ortak kontrollü form
│   ├── context/
│   │   └── EventsContext.tsx        # Context API ile events, addEvent, updateEvent, deleteEvent
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── EventDetailPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── AddEventPage.tsx
│   │   ├── EditEventPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── ForgotPasswordPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/
│   │   └── events.ts                # Başlangıç etkinlik verileri
│   ├── types/
│   │   └── campus-event.ts          # CampusEvent, Category, EventFormData, EventFormErrors
│   ├── utils/
│   │   ├── filter-events.ts         # searchEvents, filterByCategory, findEventById
│   │   ├── format-date.ts           # Türkçe uzun tarih formatlayıcı
│   │   └── validate-event.ts        # Saf form doğrulama kuralları
│   ├── App.tsx                      # Router kabuğu ve Route tanımları
│   ├── App.css                      # Duyarlı CSS, masaüstü/mobil tablo ve form stilleri
│   ├── index.css
│   └── main.tsx                     # BrowserRouter ve EventsProvider sarmalayıcısı
```

## Vize Teslim Checklist Kontrolü

- [x] **1. Tüm linkler çalışıyor:** Menü (`NavLink`), kart detay linkleri (`Link`), form içi yönlendirmeler eksiksiz çalışmaktadır.
- [x] **2. Tüm sayfalar hazır:** 10 sayfa bileşeni oluşturuldu ve içerikleri eksiksiz yazıldı.
- [x] **3. Klasör ve dosya yapısı oluşturuldu:** Slaytta belirtilen hiyerarşik yapıya birebir uygundur (`types/page.ts` kaldırılmıştır).
- [x] **4. Tüm route'lar (10 adet) tanımlandı:** `App.tsx` içerisinde 10 route ve `*` (NotFoundPage) mevcuttur.
- [x] **5. Context kullanıldı ve bağlandı:** `EventsContext` üzerinden tüm sayfalara merkezi state ulaştırılmaktadır.
- [x] **6. Ekle, sil, güncelle ve silmeden önce onay çalışıyor:** Yönetim panelinden yapılan değişiklikler anında Ana Sayfa ve Etkinlikler sayfasına yansımaktadır.
- [x] **7. Son çalışır proje GitHub'a gönderildi:** `main` dalına commit ve push edilmiştir.
- [x] **8. Proje Vercel'de yayında:** Vercel SPA rewrite desteği ve derleme yapılandırması tamamlanmıştır.
- [x] **9. README yazıldı, Vercel linki eklendi.**
- [x] **10. Mobil görünüm doğru çalışıyor:** 360–390px telefon ekranlarında tablo kartlara dönüşür (`data-baslik`), menü ve filtreler taşma yapmaz.
- [x] **11. CSS bozulması yok:** Renk paleti, tipografi, buton ve form stilleri tutarlıdır.
- [x] **12. Arama ve filtreleme çalışıyor:** Etkinlik arama metni ve kategori filtresi eşzamanlı çalışır.
- [x] **13. Form doğrulama çalışıyor:** Etkinlik formu (7 kural), giriş (e-posta `@` ve şifre min 6), kayıt (şifre eşleşme ve min karakter), şifremi unuttum alanlarında dinamik doğrulama ve hata mesajları mevcuttur.

## Geliştirici Bilgileri

- **Ad Soyad:** Aydın Sarı
- **Öğrenci Numarası:** 2416501056
- **Ders:** Web Teknolojileri ve Programlama
- **Dönem:** 2025–2026 Güz
