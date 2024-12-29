// pages/privacy-policy.js
import { Card } from '@/components/ui/card'; // Assuming you have a Card component from ShadCN

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white text-black space-y-8">
      <h1 className="text-4xl font-bold text-center text-black mb-8">Политика конфиденциальности</h1>

      <Card className="p-6 shadow-lg border border-gray-300 rounded-lg">
        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">1. Введение</h2>
          <p className="text-gray-700">
            Я, команда <strong>Exclusiveshop</strong>, уважаю вашу конфиденциальность и стремлюсь защитить ваши персональные данные. Эта
            Политика конфиденциальности объясняет, какие данные я собираю, как их использую, храню и защищаю, а также ваши права в
            отношении этих данных.
          </p>
          <p className="text-gray-700">
            Данная политика применяется к пользователям из Узбекистана. Если у вас есть вопросы по поводу этой политики, свяжитесь со мной по
            электронной почте: <a href="mailto:exclusiveshop.by.winnie@gmail.com">exclusiveshop.by.winnie@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">2. Сбор и использование данных</h2>
          <p className="text-gray-700">
            Я собираю следующие типы данных:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Персональная информация (имя, адрес электронной почты, номер телефона)</li>
            <li>Платежные данные (например, данные банковской карты для совершения оплат)</li>
            <li>Адрес доставки</li>
            <li>IP-адреса и информация о браузере для анализа и улучшения качества обслуживания</li>
          </ul>
          <p className="text-gray-700">
            Эти данные используются для обработки заказов, обработки платежей, предоставления клиентской поддержки и улучшения качества моих
            услуг.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">3. Хранение данных</h2>
          <p className="text-gray-700">
            Я храню вашу информацию только в течение необходимого времени для выполнения целей, для которых она была собрана, в
            соответствии с применимыми законами и нормативными актами.
          </p>
          <p className="text-gray-700">
            Все данные, связанные с оплатой, защищены стандартами безопасности PCI DSS и обрабатываются через надежные платежные системы.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">4. Защита данных</h2>
          <p className="text-gray-700">
            Я принимаю все необходимые меры для защиты ваших персональных данных, включая шифрование и использование защищенных
            соединений для передачи информации.
          </p>
          <p className="text-gray-700">
            Однако я не могу гарантировать полную безопасность данных в интернете, и вы соглашаетесь с тем, что передача данных
            осуществляется на ваш собственный риск.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">5. Ваши права</h2>
          <p className="text-gray-700">
            Вы имеете право:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Запрашивать доступ к вашим личным данным</li>
            <li>Исправлять, обновлять или удалять ваши данные</li>
            <li>Ограничивать обработку ваших данных</li>
            <li>Отказать в обработке данных, если это не требуется для выполнения обязательств перед вами</li>
          </ul>
          <p className="text-gray-700">
            Для реализации этих прав, пожалуйста, свяжитесь со мной по электронной почте: <a href="mailto:winniiemae777@gmail.com">winniiemae777@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">6. Раскрытие данных</h2>
          <p className="text-gray-700">
            Я не продаю и не передаю ваши персональные данные третьим сторонам без вашего согласия, за исключением случаев, когда это
            требуется по закону или для выполнения моих обязательств перед вами (например, для обработки платежей или доставки).
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">7. Использование cookie</h2>
          <p className="text-gray-700">
            Я использую cookie для улучшения вашего пользовательского опыта, а также для аналитики и рекламных целей. Вы можете
            настроить браузер так, чтобы он отклонял cookie, но это может ограничить функциональность некоторых разделов моего сайта.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-4">8. Изменения в Политике конфиденциальности</h2>
          <p className="text-gray-700">
            Я оставляю за собой право обновлять или изменять данную Политику конфиденциальности в любое время. Все изменения будут
            опубликованы на этой странице с указанием даты последнего обновления.
          </p>
        </section>
      </Card>

      <footer className="text-center text-gray-500 mt-6">
        <p>Дата последнего обновления: декабрь 2024 года</p>
      </footer>
    </div>
  );
}
