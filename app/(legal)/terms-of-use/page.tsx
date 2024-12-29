// pages/legal/terms-of-use.js
import { Card } from '@/components/ui/card'; // Assuming you have a Card component from ShadCN

export default function TermsOfUse() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white text-black space-y-8">
      <h1 className="text-4xl font-bold text-center text-black mb-8">Условия использования</h1>

      <Card className="p-6 shadow-lg border border-gray-300 rounded-lg">
        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">1. Введение</h2>
          <p className="text-gray-700">
            Добро пожаловать на наш сайт. Эти Условия использования регулируют использование вами нашего сайта и сервисов. Пожалуйста,
            внимательно прочитайте их перед использованием нашего сайта.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">2. Правила использования</h2>
          <p className="text-gray-700">
            Вы соглашаетесь не использовать наш сайт для незаконных целей и не нарушать права других пользователей. Вы обязуетесь не
            нарушать законы Узбекистана и международные законы.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">3. Ограничение ответственности</h2>
          <p className="text-gray-700">
            Мы не несем ответственности за любой ущерб, который может быть причинен в результате использования нашего сайта или
            сервисов. Все материалы предоставляются "как есть".
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">4. Изменения условий</h2>
          <p className="text-gray-700">
            Мы оставляем за собой право изменять данные Условия использования в любое время. Все изменения будут опубликованы на этой
            странице с указанием даты последнего обновления.
          </p>
        </section>
      </Card>

      <footer className="text-center text-gray-500 mt-6">
        <p>Дата последнего обновления: декабрь 2024 года</p>
      </footer>
    </div>
  );
}
