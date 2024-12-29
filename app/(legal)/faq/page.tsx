// pages/legal/faq.js
import { Card } from '@/components/ui/card'; // Assuming you have a Card component from ShadCN
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Assuming you have these components from ShadCN

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white text-black space-y-8">
      <h1 className="text-4xl font-bold text-center text-black mb-8">Часто задаваемые вопросы (FAQ)</h1>

      <Card className="p-6 shadow-lg border border-gray-300 rounded-lg">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-semibold text-black">
              1. Как сделать заказ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Для того чтобы сделать заказ, просто выберите товар, добавьте его в корзину и перейдите к оформлению. Вам нужно будет
              указать информацию для доставки и выбрать метод оплаты.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-semibold text-black">
              2. Какие способы оплаты доступны?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Мы принимаем все основные способы оплаты, включая банковские карты, онлайн-кошельки и другие методы, доступные на нашем
              сайте.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-semibold text-black">
              3. Как я могу вернуть товар?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Если вы хотите вернуть товар, свяжитесь с нашей службой поддержки по электронной почте. Мы объясним все шаги для возврата
              товара в случае, если товар не подошел.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl font-semibold text-black">
              4. Как я могу отменить заказ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Если вы хотите отменить заказ, пожалуйста, свяжитесь с нами как можно скорее. Если заказ еще не был отправлен, мы сможем
              его отменить.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl font-semibold text-black">
              5. Как я могу отследить свой заказ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              После отправки заказа, мы предоставим вам номер для отслеживания. Вы сможете отслеживать статус доставки через систему
              нашего партнера-перевозчика.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <footer className="text-center text-gray-500 mt-6">
        <p>Дата последнего обновления: декабрь 2024 года</p>
      </footer>
    </div>
  );
}
