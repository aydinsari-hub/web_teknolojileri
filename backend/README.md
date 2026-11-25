# Kampüs Etkinlikleri — Backend API (Sprint 9)

Bu servis, Kampüs Etkinlikleri uygulamasının Node.js, Express ve MongoDB (Mongoose) ile geliştirilmiş REST API backend sunucusudur.

## Kurulum ve Çalıştırma

Gerekli paketleri yüklemek, veritabanını örnek verilerle doldurmak ve sunucuyu başlatmak için `backend` klasöründe:

```bash
# Bağımlılıkları yükleyin
npm install

# Veritabanını 6 özgün etkinlik ile doldurun
npm run seed

# Geliştirme modunda başlatın (dosya değişikliklerinde otomatik yeniden başlar)
npm run dev

# Üretim modunda başlatın
npm run start
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Ortam Değişkenleri (.env)

Proje ayarları `.env` dosyası üzerinden yapılandırılır. `.env` dosyası gizli olduğu için depoya eklenmez; örnek şablon `.env.example` dosyasında yer almaktadır.

| Değişken | Açıklama | Örnek / Varsayılan |
|---|---|---|
| `PORT` | API sunucusunun dinleyeceği port | `3000` |
| `MONGODB_URI` | MongoDB bağlantı adresi | `mongodb://127.0.0.1:27017/kampus` |

Örnek `.env` içeriği:
```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/kampus
```

## REST API Sözleşmesi

Tüm tarih alanları API istek ve yanıtlarında `"GG-AA-YYYY"` biçimindedir (ör. `"15-10-2026"`).

| Yöntem (Method) | Uç Nokta (Endpoint) | Amaç | Başarılı Durum Kodu | Hata Durum Kodu | Durum |
|---|---|---|---|---|---|
| `GET` | `/health` | Sunucu sağlık kontrolü ve öğrenci künyesi | `200 OK` | — | Çalışıyor |
| `GET` | `/events` | Tüm etkinliklerin listesi (`?search=` & `?category=` destekler) | `200 OK` | — | Çalışıyor |
| `GET` | `/events/upcoming` | Bugün ve sonraki etkinlikler (tarihe göre sıralı) | `200 OK` | — | Çalışıyor |
| `GET` | `/events/:id` | Belirtilen ID'ye sahip tek etkinliği getirir | `200 OK` | `404 Not Found` | Çalışıyor |
| `POST` | `/events` | Yeni etkinlik kaydı oluşturur (`title`, `category`, `date` zorunludur) | `201 Created` | `400 Bad Request` | Çalışıyor |
| `PATCH` | `/events/:id` | Etkinlikte sadece gönderilen alanları günceller | `200 OK` (güncel kayıt) | `400`, `404` | Çalışıyor |
| `DELETE` | `/events/:id` | Etkinliği siler | `204 No Content` (gövde yok) | `404` | Çalışıyor |

### Standart Hata Yanıt Formatı

Tüm hata yanıtları standart nesne yapısında döner:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```

## Postman & Newman Testleri

API test koleksiyonu `requests/kampus-api.json` dosyasında, Collection Runner / Newman test çıktısı ise `requests/run-results.json` dosyasında yer almaktadır.

```bash
# Sunucu açıkken tüm testleri tek komutla çalıştırmak için:
newman run https://webdersi.vercel.app/test.json
```
