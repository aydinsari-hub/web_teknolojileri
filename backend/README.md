# Kampüs Etkinlikleri — Backend API (Sprint 7)

Bu servis, Kampüs Etkinlikleri uygulamasının Node.js ve Express ile geliştirilmiş REST API backend sunucusudur.

## Kurulum ve Çalıştırma

Gerekli paketleri yüklemek ve sunucuyu başlatmak için `backend` klasöründe:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme modunda başlatın (dosya değişikliklerinde otomatik yeniden başlar)
npm run dev

# Üretim modunda başlatın
npm run start
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Ortam Değişkenleri (.env)

Proje ayarları `.env` dosyası üzerinden yapılandırılır. `.env` dosyası gizli olduğu için depoya eklenmez; örnek şablon `.env.example` dosyasında yer almaktadır.

| Değişken | Açıklama | Varsayılan |
|---|---|---|
| `PORT` | API sunucusunun dinleyeceği port | `3000` |

Örnek `.env` içeriği:
```env
PORT=3000
```

## REST API Sözleşmesi

| Yöntem (Method) | Uç Nokta (Endpoint) | Amaç | Başarılı Durum Kodu | Hata Durum Kodu | Durum |
|---|---|---|---|---|---|
| `GET` | `/health` | Sunucu sağlık kontrolü ve öğrenci künyesi | `200 OK` | — | Bu sprint (Sprint 7) |
| `GET` | `/events` | Tüm etkinliklerin listesini getirir (`?category=` filtresi destekler) | `200 OK` | — | Bu sprint (Sprint 7) |
| `GET` | `/events/:id` | Belirtilen ID'ye sahip tek etkinliği getirir | `200 OK` | `404 Not Found` | Bu sprint (Sprint 7) |
| `POST` | `/events` | Yeni etkinlik kaydı oluşturur (`title`, `category`, `date` zorunludur) | `201 Created` | `400 Bad Request` | Bu sprint (Sprint 7) |
| `PATCH` | `/events/:id` | Etkinlik bilgilerini günceller | `200 OK` | `400`, `404` | Sprint 9 |
| `DELETE` | `/events/:id` | Etkinliği siler | `204 No Content` | `404` | Sprint 9 |

### Standart Hata Yanıt Formatı

Tüm hata yanıtları standart nesne yapısında döner:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```

## Postman Koleksiyonu

API'yi test etmek için hazırlanan 6 adet standart test isteği `requests/kampus-api.json` dosyasında yer almaktadır. Bu dosyayı Postman'e import ederek hemen test edebilirsiniz.

