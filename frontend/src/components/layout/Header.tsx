import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import { findEventById } from "../../utils/filter-events";

const pageMeta = [
  {
    path: "/",
    title: "Kampüs Etkinlikleri",
    text: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.",
  },
  {
    path: "/events",
    title: "Tüm Etkinlikler",
    text: "Ekim ayında kampüste düzenlenen etkinlikler.",
  },
  { path: "/admin", title: "Etkinlik Yönetimi" },
  { path: "/admin/new", title: "Etkinlik Ekle" },
  { path: "/login", title: "Giriş Yap" },
  { path: "/register", title: "Kayıt Ol" },
  { path: "/forgot-password", title: "Şifremi Unuttum" },
];

export default function Header() {
  const { pathname } = useLocation();
  const { events } = useEvents();

  const eventMatch =
    matchPath("/events/:id", pathname) ?? matchPath("/admin/:id/edit", pathname);
  const event = eventMatch ? findEventById(events, eventMatch.params.id ?? "") : undefined;

  const routeMeta = pageMeta.find((item) => matchPath(item.path, pathname));
  const title = event ? event.title : routeMeta ? routeMeta.title : "Sayfa Bulunamadı";
  const text = event ? `${event.category} · ${event.location}` : routeMeta?.text;

  useEffect(() => {
    const defaultTitle = "Kampüs Etkinlikleri";
    document.title = title === defaultTitle ? defaultTitle : `${title} — ${defaultTitle}`;
  }, [title]);

  return (
    <header className="site-baslik">
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </header>
  );
}
